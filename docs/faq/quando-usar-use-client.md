<details>
<summary><strong>❓ Quando usar <code>"use client"</code> </strong></summary>

**Problema comum:** Em projetos Next (App Router), é comum ver:

- "use client" adicionado “por garantia”
- páginas inteiras marcadas como client
- lógica de fetch, regra de negócio e fluxo indo para Client Components
- perda silenciosa dos benefícios de Server Components

Com o tempo:
- tudo vira client
- performance degrada
- cache e streaming deixam de funcionar
- fica difícil entender o que roda onde

❌ Antes — "use client" como padrão

```ts
'use client';

export default function Page() {
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
- fetch no client sem necessidade
- uso excessivo de useEffect
- perda de cache, streaming e SSR
- regra e dados acoplados à UI

✅ Depois — "use client" apenas onde há interação

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
  const [expanded, setExpanded] = useState(false);

  return (
    <>
      <Summary data={data} />
      <button onClick={() => setExpanded(!expanded)}>
        Detalhes
      </button>
    </>
  );
}
```

Benefícios:
- dados resolvidos no servidor
- UI focada em interação
- melhor performance e cache
- fronteiras claras entre server e client

📌 Regra prática
Use `"use client"` apenas quando o componente:
- usa `useState`, `useEffect`, `useRef`, `useContext`
- lida com eventos (`onClick`, `onChange`, etc.)
- depende de APIs do browser
- precisa de estado ou interação do usuário

Não use `"use client"` quando:
- o componente apenas renderiza dados
- faz fetch inicial
- compõe layout ou fluxo de página
- toma decisões de negócio

#### 🧠 Regra de ouro (Next):
Se algo pode ser feito no servidor, não faça no client.
`"use client"` é uma exceção consciente, não um atalho.
</details>

