<details>
<summary><strong>❓ O que vale a pena testar?</strong></summary>

**Problema comum:** Com o tempo, o time começa a testar “o que dá” ou “o que parece certo”, e surgem situações como:

- testes que quebram com qualquer refactor visual
- cobertura alta, mas pouca confiança
- testes difíceis de entender ou manter
- dúvidas constantes se vale a pena escrever teste para algo

O resultado é custo alto de manutenção e baixo retorno.

❌ **Teste frágil — sem significado**

```ts
expect(result).toBe(true);
```

Sem contexto, sem intenção clara.

Problemas:
- não comunica o comportamento esperado
- não explica o contexto
- não ajuda quem lê depois
- passa, mas não protege nada relevante

✅ **Teste de comportamento observável**

```ts
it('bloqueia transferência para PJ com conta bloqueada', () => {
  const result = shouldDisableTransfer({
    user: { type: 'PJ', hasOverride: false },
    account: { status: 'BLOCKED' },
  });

  expect(result).toBe(true);
});
```

Benefícios:
- descreve o comportamento, não a implementação
- deixa claro o porquê do teste existir
- protege regras críticas do negócio
- continua válido mesmo após refactors

📌 **Regra prática:**
Vale a pena testar quando:
- existe regra de negócio
- a falha teria impacto relevante
- a lógica é difícil de entender ou mudar
- o código tende a sofrer refactors
- quebrar isso seria caro ou arriscado

🧠 Se o teste responde apenas “isso funciona?”, provavelmente é frágil.
Se responde “isso deveria funcionar assim?”, ele agrega valor.

</details>

