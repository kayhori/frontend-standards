<details>
<summary><strong>❓ <code>useEffect</code> ainda faz sentido no App Router?</strong></summary>

**Problema comum:** Com a chegada do App Router, surgem dúvidas como:

- “Ainda posso usar `useEffect`?”
- “Tudo agora é Server Component?”
- “Por que meu código parece mais complexo do que antes?”
- “Estou usando `useEffect` por hábito ou por necessidade?”

Em muitos projetos, o que acontece é:
- `useEffect` usado por reflexo
- `fetch` sendo feito no client sem necessidade
- perda de cache, SSR e streaming
- componentes com responsabilidades erradas

❌ Uso incorreto — `useEffect` como padrão de carregamento

```ts
'use client';

function Page() {
  const [data, setData] = useState(null);

  useEffect(() => {
    fetch('/api/data')
      .then(res => res.json())
      .then(setData);
  }, []);

  return <View data={data} />;
}
```
Problemas:
- fetch sempre no client
- perde SSR e streaming
- depende de estado + efeito
- lógica de dados misturada com UI
- pior performance sem ganho real
No App Router, isso raramente é o melhor caminho.

✅ Uso correto — dados resolvidos no Server Component

```ts
// page.tsx (Server Component)
export default async function Page() {
  const data = await getData();

  return <View data={data} />;
}
```

```ts
'use client';

function View({ data }) {
  return <div>{data.name}</div>;
}
```

Benefícios:
- render já vem com dados
- cache automático
- streaming habilitado
- menos código e menos estado
- UI focada apenas em interação

Use `useEffect` quando:
- há side effects no client
- depende de APIs do browser
- precisa reagir a mudança de estado
- envolve eventos externos

Exemplos válidos:

```ts
// sincronizar com localStorage
useEffect(() => {
  localStorage.setItem('theme', theme);
}, [theme]);
```

```ts
// escutar eventos
useEffect(() => {
  window.addEventListener('resize', handleResize);
  return () => window.removeEventListener('resize', handleResize);
}, []);
```

```ts
// integração com SDKs client-only
useEffect(() => {
  analytics.track('page_view');
}, []);
```

❌ Quando NÃO usar `useEffect`

Evite `useEffect` quando:
- o objetivo é carregar dados iniciais
- o fetch pode acontecer no servidor
- o código só existe para “simular” lifecycle
- ele serve apenas para contornar arquitetura

Se você escreveu `useEffect` só para:
- buscar dados no load
- montar estado inicial
- sincronizar render

→ provavelmente está usando no lugar errado.

📌 Regra prática (Next App Router)
| Caso                           | Solução correta         |
| ------------------------------ | ----------------------- |
| Fetch inicial de dados         | Server Component        |
| Revalidação / cache            | Server Component        |
| Interação do usuário           | Client + fetch / action |
| Side effects de browser        | `useEffect`             |
| Integração com SDK client-only | `useEffect`             |

### 🧠 Regra de ouro
No App Router, useEffect é ferramenta de efeito colateral, não de carregamento de dados.
Se o dado existe antes da interação do usuário, ele não pertence ao `useEffect`.

</details>

