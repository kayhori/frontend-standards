<details>
<summary><strong>❓ Quando criar um hook?</strong></summary>

**Problema comum:** O componente começa simples, mas aos poucos acumula:

- múltiplos useState
- useEffect com lógica não trivial
- regras de carregamento / erro
- side effects misturados com UI

O resultado é um componente difícil de ler, testar e manter.

❌ **Antes — componente com múltiplas responsabilidades**

```tsx
function AccountPage() {
  const [data, setData] = useState(null);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    setLoading(true);
    fetchAccount()
      .then(setData)
      .finally(() => setLoading(false));
  }, []);
}
```

Problemas:

* lógica de dados misturada com UI
* difícil de reutilizar
* leitura pesada

✅ **Depois — hook encapsulando responsabilidade**

```ts
export function useAccount() {
  const [data, setData] = useState(null);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    setLoading(true);
    fetchAccount()
      .then(setData)
      .finally(() => setLoading(false));
  }, []);

  return { data, loading };
}
```

📌 **Regra prática:**
Crie um hook quando houver side effects, múltiplos estados relacionados ou quando o componente começar a “falar demais”.

</details>

