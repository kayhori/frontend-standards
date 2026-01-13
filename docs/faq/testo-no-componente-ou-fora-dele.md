<details>
<summary><strong>❓ Testo no componente ou fora dele?</strong></summary>

**Problema comum:** Ao escrever testes de Frontend, surgem dúvidas como:

- “Testo isso renderizando o componente?”
- “Esse teste deveria ser unitário ou de UI?”
- “Por que meus testes quebram sempre que mexo no layout?”

O cenário mais comum é testar regras de negócio através da UI, gerando testes frágeis, lentos e difíceis de manter.

❌ Antes — regra testada via componente
```tsx
render(<TransferButton user={user} account={account} />);
expect(screen.getByRole('button')).toBeDisabled();
```

Problemas:
- depende de renderização
- quebra com mudanças visuais
- mistura teste de regra com teste de UI
- difícil entender o que realmente está sendo validado

✅ Depois — regra testada fora do componente
```ts
it('bloqueia transferência para PJ com conta bloqueada', () => {
  const result = shouldDisableTransfer({
    user: { type: 'PJ', hasOverride: false },
    account: { status: 'BLOCKED' },
  });

  expect(result).toBe(true);
});
```
E o componente apenas consome a decisão:

```ts
function TransferButton({ user, account }) {
  const disabled = shouldDisableTransfer({ user, account });

  return <button disabled={disabled}>Transferir</button>;
}
```
Benefícios:
- teste rápido e estável
- regra claramente expressa
- fácil refatorar UI sem quebrar testes
- maior confiança em mudanças

📌 Regra prática

- Teste fora do componente quando:
 - há regra de negócio
 - há decisão de fluxo
 - a lógica pode ser expressa como função pura

- Teste no componente quando:
 - o comportamento é visual ou de interação
 - envolve acessibilidade, eventos ou renderização condicional
 - o valor está na experiência do usuário

### 🧠 Regra de ouro:
UI consome decisões; regras vivem fora dela, e devem ser testadas fora dela.

</details>

