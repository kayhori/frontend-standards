<details>
<summary><strong>❓ Onde deve ficar o fetch no Next?</strong></summary>

**Problema comum:** Em projetos Next, especialmente durante migração para o App Router, é comum ver:
- `fetch` espalhado em componentes client
- uso excessivo de `useEffect` para carregar dados
- duplicação de lógica de carregamento
- dúvidas como:
 - “Posso fazer fetch aqui?”
 - “Isso quebra SSR?”
 - “Isso deveria estar no hook?”

O resultado costuma ser:
- perda de cache e streaming
- lógica de dados misturada com UI
- performance pior sem necessidade
- dificuldade de entender onde os dados nascem

❌ Antes — fetch no Client Component por padrão
```ts
'use client';

export function AccountPage() {
  const [data, setData] = useState(null);

  useEffect(() => {
    fetch('/api/account')
      .then(res => res.json())
      .then(setData);
  }, []);

  return <AccountView data={data} />;
}
```

Problemas:

- fetch acontece apenas no client
- sem cache automático
- depende de useEffect
- difícil de testar
- mistura dados com UI

✅ Depois — fetch no Server Component

```ts
// page.tsx (Server Component)
export default async function Page() {
  const data = await getAccount();

  return <AccountView data={data} />;
}
```

```ts
// AccountView.tsx
'use client';

export function AccountView({ data }) {
  return <Summary data={data} />;
}
```

Benefícios:

- dados resolvidos no servidor
- ache automático do Next
- streaming e SSR funcionando
- UI focada apenas em interação

Onde o fetch deve ficar:

| Situação                              | Onde fazer o fetch         |
| ------------------------------------- | -------------------------- |
| Carregamento inicial de página        | **Server Component**       |
| Dados necessários para renderização   | **Server Component**       |
| Revalidação / cache                   | **Server Component**       |
| Interação do usuário (clique, submit) | Client Component           |
| Atualização pontual após ação         | Client Component ou Action |

📌 Padrão recomendado
Centralize o fetch em funções de domínio ou services, mesmo no servidor:

```ts
// accountService.ts
export async function getAccount() {
  const res = await fetch('https://api/account', {
    cache: 'no-store',
  });

  return res.json();
}
```

E consuma no Server Component:

```ts
const data = await getAccount();
```

Isso garante:
- reutilização
- testabilidade
- separação clara entre dados e UI

⚠️ Quando faz sentido fetch no client?

Fetch no client é exceção, usado quando:
- depende de ação do usuário
- não pode ser resolvido no load inicial
- é atualização parcial (ex: refresh button)
- envolve dados altamente dinâmicos

Exemplo aceitável:
```ts
'use client';

function RefreshBalanceButton() {
  const refresh = async () => {
    await fetch('/api/refresh-balance');
  };

  return <button onClick={refresh}>Atualizar saldo</button>;
}
```

#### 🧠 Regra de ouro (Next)
Se o fetch pode acontecer no servidor, ele deve acontecer no servidor.
Client fetch é ferramenta de interação, não padrão de carregamento.
</details>

