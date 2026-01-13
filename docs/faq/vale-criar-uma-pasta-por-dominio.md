<details>
<summary><strong>❓ Vale criar uma pasta por domínio?</strong></summary>

**Problema comum**: O código cresce e, com o tempo:

- a lógica de uma mesma feature fica espalhada
- é difícil entender o fluxo completo de uma funcionalidade
- mudanças simples exigem navegar por várias pastas
- ninguém sabe onde colocar o próximo arquivo

Normalmente isso aparece quando o projeto é organizado apenas por tipo técnico.

❌ **Antes — lógica espalhada por tipo técnico**

```ts
components/TransferButton.tsx
hooks/useTransfer.ts
services/transferService.ts
utils/transferRules.ts
```

Dificuldades:

* difícil entender o fluxo
* lógica espalhada
* difícil descartar depois

✅ **Depois — domínio explícito**

```ts
transfer/
  TransferButton.tsx
  useTransfer.ts
  transferService.ts
  transferRules.ts
```

📌 **Regra prática:**
Crie um domínio quando houver mais de um arquivo relacionado e regras próprias daquele contexto.

</details>

