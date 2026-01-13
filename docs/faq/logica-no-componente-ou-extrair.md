<details>
<summary><strong>❓ Deixo essa lógica no componente ou extraio?</strong></summary>

**Problema comum:** o componente começa simples e vira um “if-else gigante”.

❌ **Antes — lógica acoplada à UI**

```tsx
function TransferButton({ user, account }) {
  const disabled =
    user.type === 'PJ' &&
    account.status === 'BLOCKED' &&
    !user.hasOverride;

  return <button disabled={disabled}>Transferir</button>;
}
````

Dificuldades:

* regra de negócio escondida no JSX
* difícil de testar
* difícil de reutilizar

✅ **Depois — decisão explícita**

```ts
// transferRules.ts
export function shouldDisableTransfer({ user, account }) {
  return (
    user.type === 'PJ' &&
    account.status === 'BLOCKED' &&
    !user.hasOverride
  );
}
```

```tsx
function TransferButton({ user, account }) {
  const disabled = shouldDisableTransfer({ user, account });

  return <button disabled={disabled}>Transferir</button>;
}
```

📌 **Regra prática:**
Se a lógica representa regra de negócio ou decisão de fluxo, extraia para fora do componente.

</details>

