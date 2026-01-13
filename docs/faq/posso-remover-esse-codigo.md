<details>
<summary><strong>❓ Posso remover esse código?</strong></summary>

**Problema comum:** Com o tempo, a base de código acumula trechos que:

- ninguém sabe exatamente quem usa
- parecem importantes “por via das dúvidas”
- estão atrás de flags antigas
- não têm testes claros

Isso gera medo de remover código e cria a sensação de que
“mexer aqui pode quebrar algo invisível”.

❌ Antes — código mantido por insegurança
```ts
if (featureFlagOldFlow) {
  handleOldTransferFlow();
}
```
Problemas:
- ninguém lembra por que isso existe
- não há referência clara a fluxos ativos
- a flag nunca foi removida
- o código aumenta complexidade sem gerar valor

Resultado: dívida técnica silenciosa.

✅ Depois — remoção consciente

Passos recomendados:
1. Identifique se o fluxo ainda é usado
 - feature ainda existe?
 - métricas ou logs indicam uso?
2. Verifique cobertura mínima de testes
3. Remova a flag
4. Remova o código antigo

```ts
// fluxo antigo removido
handleTransferFlow();
```

Benefícios:
- redução real de complexidade
- leitura mais simples
- menor superfície de bugs
- arquitetura mais saudável

🧰 **Ferramentas de apoio**

Ferramentas como **Knip** podem ajudar a identificar:

- imports não utilizados
- arquivos não referenciados
- exports nunca consumidos
- dependências órfãs

📌 **Regra prática:**
Você pode remover código quando:
- consegue responder quem usa e em qual fluxo
- o código não faz mais parte de jornadas ativas
- há testes cobrindo o comportamento atual
- manter o código gera mais risco do que removê-lo

### 🧠 Regra de ouro:
Código mantido “por segurança” é risco acumulado, não proteção.
</details>

