# 🧱 Arquitetura de Frontend

Este documento define princípios arquiteturais mínimos para aplicações Frontend.

Ele existe para reduzir variabilidade, tornar decisões explícitas e guiar a evolução do Frontend como plataforma, sem engessar entregas, impor frameworks específicos ou exigir reescritas massivas.

Os princípios aqui descritos orientam decisões, não definem implementações únicas ou estruturas obrigatórias.

## 🎯 Objetivo

Os princípios arquiteturais aqui descritos têm como objetivo:

- Reduzir acoplamento entre UI, regras de negócio e integrações
- Facilitar leitura, manutenção e refatoração do código
- Tornar mudanças mais seguras e previsíveis
- Diminuir dependência de conhecimento tácito
- Apoiar o crescimento simultâneo de produto, time e complexidade

## 🧠 Princípios Arquiteturais

### 1. Separação clara de responsabilidades

O Frontend deve ser organizado de forma que responsabilidades distintas não se misturem.

De forma geral:

- **UI** → renderização, layout, interação
- **Domínio** → regras de negócio, decisões, validações
- **Infra / Integrações** → comunicação com APIs, storage, side effects

Evitar componentes que:

- Buscam dados
- Aplicam regras complexas
- Renderizam UI
- Tomam decisões de fluxo

📌 Componentes grandes não são o problema; componentes com múltiplas responsabilidades são.


### 2. UI como orquestradora, não como detentora de regra

A UI deve consumir decisões, não implementá-las diretamente.

❌ Evitar:

- Regras de negócio espalhadas em TSX
- Condicionais complexos diretamente na renderização
- Decisões de fluxo baseadas apenas em estado local

✅ Preferir:

- Funções de domínio explícitas
- Hooks que encapsulam lógica
- Modelos intermediários (ex.: View Models)

```ts
// ruim: regra de negócio acoplada à UI
if (user.type === 'PJ' && account.status === 'BLOCKED' && !hasOverride) {
  ...
}

// melhor: decisão explícita e testável
if (shouldBlockTransfer(context)) {
  ...
}

```


### 3. Arquitetura orientada a domínio, não a tipo técnico

Sempre que a complexidade justificar, prefira organizar o código por domínio ou feature,
agrupando elementos que evoluem juntos.

Este não é um padrão obrigatório, mas uma heurística amplamente adotada
em aplicações Frontend de média e alta complexidade.

❌ Evitar estruturas como:

```
components/
hooks/
services/
utils/
```

Quando usadas de forma genérica, elas:

- Viram “pastas depósito”
- Escondem responsabilidade
- Aumentam custo cognitivo
- Dificultam descarte

✅ Preferir:

```ts
transfer/
  TransferSummary.tsx
  useTransfer.ts
  transferService.ts
  transferRules.ts
```

📌 A pergunta correta não é

> “isso é um hook ou um service?”

Mas sim:

> “isso pertence a qual parte do domínio?”

🟨 **Nota importante**

Em projetos pequenos ou de baixa complexidade, estruturas por tipo técnico podem ser suficientes.  
Organização por domínio é uma resposta à complexidade, não um requisito inicial.

### 4. Fronteiras explícitas são mais importantes que frameworks


**Não existe obrigação de usar:** 

- Clean Architecture
- Hexagonal
- MVVM
- Atomic Design


**O que importa é:**

- Fronteiras claras
- Contratos explícitos
- Baixo acoplamento


Se uma mudança em uma camada:

- quebra múltiplas áreas
- exige conhecimento amplo do sistema

isso indica fronteiras fracas, não “falta de framework”.


### 5. Código compartilhado deve ser intencional

Compartilhamento é uma decisão arquitetural, não um reflexo de conveniência.

❌ Evitar:

- Copiar componentes “porque parece igual”
- Criar abstrações genéricas cedo demais
- Centralizar tudo “para reaproveitar”

✅ Preferir:

- Reuso quando há estabilidade semântica
- Abstrações pequenas e específicas
- Evolução progressiva baseada em uso real

📌 Duplicação controlada é melhor que abstração errada.


### 6. Arquitetura deve permitir descarte

Código saudável nasce, evolui e é removido.

A arquitetura deve:

- Facilitar identificar código não utilizado
- Permitir remoções seguras
- Evitar dependências ocultas

Indicadores de problema:

- Código mantido “por segurança”
- Feature flags permanentes
- Fluxos órfãos sem rastreabilidade

📌 Arquitetura que não permite descarte vira legado rapidamente.


## 🧩 Organização de Código

Este repositório não impõe uma estrutura única, mas recomenda que:

- Cada domínio tenha fronteiras claras
- UI, domínio e integração sejam distinguíveis
- Imports reflitam dependências reais
- Pastas genéricas sejam usadas com critério

Sempre que possível:

- Prefira clareza local a abstrações globais
- Prefira decisões explícitas a convenções implícitas

## 🧠 Decisões Arquiteturais

Decisões com impacto estrutural ou de longo prazo devem ser registradas como [ADR](../decision-records/index.md)

Este documento define princípios.
ADRs explicam por que escolhas específicas foram feitas.


## 🚫 Anti-padrões Arquiteturais Comuns

- Componentes “faz-tudo”
- Pastas genéricas sem semântica
- Regras de negócio escondidas em TSX
- Compartilhamento prematuro
- Abstrações globais difíceis de remover

Esses padrões aumentam risco, custo cognitivo e dificultam evolução.

## 🧠 Observações finais

- Arquitetura é meio, não fim
- Boas fronteiras reduzem a necessidade de padrões rígidos
- Clareza hoje vale mais que abstração futura
- Em caso de dúvida, priorize legibilidade e descarte seguro