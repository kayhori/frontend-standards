<details>
<summary><strong>❓ Posso fugir do padrão de exports?</strong></summary>

Sim, você pode fugir do padrão.
Mas isso deve ser uma decisão consciente, não conveniência automática.
O padrão existe para reduzir variabilidade e não para impedir soluções melhores em contextos específicos.

**Problema comum:** Durante uma implementação ou refactor, surge a dúvida:

- “Esse default export aqui é realmente um problema?”
- "Vale seguir o padrão ou isso só atrapalha?”
- “Posso quebrar a regra nesse caso?”

Isso costuma acontecer quando:
- o código já existe e funciona
- o padrão parece gerar mais atrito do que benefício
- o contexto é específico (página, entrypoint, integração)

📌 Quando faz sentido fugir do padrão
- É aceitável usar default export quando:
- o arquivo exporta uma única entidade principal
- o nome é óbvio, estável e não ambíguo
- o contexto é de entrypoint ou rota
- o framework exige ou incentiva esse formato

✅ **Exemplo aceitável**

```ts
// pages/dashboard.tsx
export default function Dashboard() {}
```

Aqui:
- não há ambiguidade
- não há reuso esperado
- o arquivo representa um conceito único

❌ Quando NÃO faz sentido

Evite fugir do padrão quando:
- o arquivo é utilitário
- há chance de múltiplos exports no futuro
- o nome pode variar
- o código é compartilhado entre domínios

❌ **Exemplo a evitar**

```ts
// formatCurrency.ts
export default function formatCurrency() {}
```

Isso permite imports inconsistentes:
```ts
import format from './formatCurrency';
import currencyFormatter from './formatCurrency';
```

O que gera:

- dificuldade de leitura
- quebra de busca global
- refactors mais perigosos

📌 **Regra prática:**
Antes de usar default export, pergunte:
> “Esse nome pode variar de acordo com quem importa?”

Se sim → use named export
Se não → default export pode ser aceitável
</details>

