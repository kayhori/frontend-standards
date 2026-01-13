# ✅ Qualidade e Descarte Técnico

Este documento define princípios e diretrizes para qualidade de software e descarte técnico no Frontend.

Ele existe para reduzir riscos em produção, aumentar confiança em mudanças e evitar o acúmulo silencioso de complexidade, tratando qualidade e descarte como sistemas contínuos, não como atividades pontuais.


## 🎯 Objetivo

As diretrizes aqui descritas têm como objetivo:

- Aumentar segurança e previsibilidade em mudanças
- Reduzir bugs recorrentes e regressões
- Diminuir dependência de validação manual
- Facilitar refatorações e evolução estrutural
- Garantir que código possa ser removido com segurança
- Evitar crescimento não controlado de dívida técnica

*📌 Qualidade aqui não significa perfeição, mas capacidade de mudar com confiança.*


## 🧠 Princípios de Qualidade

### 1. Qualidade é um sistema, não uma etapa

Qualidade não deve ser tratada como:

- “fase final”
- “responsabilidade apenas do QA”
- “algo para quando der tempo”

Qualidade é resultado da combinação de práticas, como:

- Código legível
- Responsabilidades claras
- Testes relevantes
- Observabilidade mínima
- Feedback rápido em PRs

*📌 Sistemas saudáveis falham menos e se recuperam mais rápido quando falham.*



### 2. Testes existem para proteger mudanças, não para inflar cobertura

O objetivo dos testes não é atingir um percentual, mas criar confiança para mudar o código.

❌ Evitar:

- Testes que apenas reproduzem implementação
- Testes frágeis que quebram a cada refatoração
- Testes que não representam comportamento real
- Cobertura alta com baixa confiança

✅ Preferir testes que:

- Exercitam comportamentos relevantes
- Representam jornadas reais do usuário
- Protegem regras de negócio importantes
- Falham quando algo significativo muda

*📌 Um teste bom responde:*

> -“Se isso quebrar, queremos saber?”-



### 3. Quanto mais crítica a regra, mais próxima do domínio ela deve ser testada

Regras críticas de negócio não devem viver apenas na UI.

Boas práticas:

- Extrair regras para funções explícitas
- Testar regras de forma isolada
- Usar a UI como consumidor dessas decisões

```ts
// regra testável
export function shouldBlockTransfer(context) {
  ...
}
```

Isso:

- simplifica testes
- reduz complexidade em componentes
- diminui risco de regressão



### 4. Bugs recorrentes indicam falha sistêmica, não pontual

Quando o mesmo tipo de bug aparece repetidamente, o problema não é individual.

**Indicadores de alerta:**

- Bugs similares em múltiplos pontos
- Incidentes reincidentes após correções
- Fixes rápidos sem causa raiz
- Falta de teste cobrindo o cenário

*📌 Todo bug recorrente é um sinal arquitetural ou de processo.*

**Correções devem gerar:**

- Ajuste estrutural
- Teste de proteção
- Aprendizado compartilhado



## 🧹 Descarte Técnico como prática essencial

### 5. Código não removido é dívida ativa

Código que permanece sem uso:

- Aumenta custo cognitivo
- Dificulta leitura
- Aumenta risco de regressão
- Impacta performance (bundle, lógica, fluxos)

Manter código “por segurança” não é segurança, é risco acumulado.



### 6. Arquitetura deve permitir identificar o que pode ser removido

Para que o descarte seja possível, o sistema precisa:

- Ter fronteiras claras
- Ter dependências explícitas
- Evitar acoplamentos implícitos
- Ter testes que protejam o que importa

Sinais de arquitetura frágil para descarte:

- Código que ninguém sabe se é usado
- Feature flags antigas e permanentes
- Fluxos órfãos sem rastreabilidade
- Medo constante de remover código

*📌 Se remover algo é sempre arriscado, o problema não é o time, é o sistema.*


### 7. Feature flags devem ter ciclo de vida

Feature flags são ferramentas temporárias, não estruturas permanentes.

Boas práticas:

- Criar flag com intenção clara
- Definir critério de remoção
- Remover flag após estabilização
- Evitar flags como dependência estrutural

*📌 Flags sem prazo viram dívida técnica disfarçada.*


## 🔄 Qualidade no dia a dia

### PRs como principal mecanismo de qualidade

Pull Requests são o ponto mais eficiente para elevar qualidade.

PRs devem avaliar:

- Clareza de responsabilidades
- Legibilidade
- Risco de regressão
- Possibilidade de teste
- Facilidade de descarte futuro

*📌 Review não é só “funciona / não funciona”.*


### Qualidade e performance andam juntas

Problemas de qualidade frequentemente impactam:

- Performance
- Estabilidade
- Experiência do usuário
- Receita e churn

Qualidade deve considerar:

- Erros em produção
- Tempo de resposta
- Core Web Vitals
- Falhas em jornadas críticas

*📌 Qualidade percebida pelo cliente é a que realmente importa.*



## 🚫 Anti-padrões comuns

- Testes que testam implementação, não comportamento
- Código morto mantido “por segurança”
- Feature flags eternas
- Correções sem teste de proteção
- Bugs recorrentes sem causa raiz
- Confiança excessiva em validação manual

Esses padrões aumentam risco e reduzem capacidade de evolução.


## 🧠 Observações finais

- Qualidade não é custo, é alavanca de velocidade
- Código saudável permite mudar sem medo
- Descartar código é sinal de maturidade, não de desperdício
- Em caso de dúvida, priorize proteção do que é crítico e remoção do que não é