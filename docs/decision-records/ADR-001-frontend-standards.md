# ADR-001 — Adoção de padrões explícitos de Frontend

## Contexto

O ecossistema Frontend cresceu de forma orgânica, com múltiplos projetos, times e decisões locais. Isso resultou em:

- Variabilidade excessiva de código
- Decisões repetidas em PRs
- Dificuldade de refatoração segura
- Alto custo cognitivo para onboarding

Embora existissem boas práticas tácitas, elas não estavam registradas de forma explícita e compartilhada. Esses efeitos são comuns em produtos digitais em escala quando decisões técnicas permanecem implícitas.


## Decisão

Adotar padrões explícitos de Frontend, documentados em um repositório central, versionado e evoluído via Pull Request.

Esses padrões têm como objetivo:
- Reduzir ambiguidade e decisões repetidas
- Tornar decisões técnicas explícitas e compartilhadas
- Aumentar previsibilidade e segurança em mudanças
- Tratar o Frontend como plataforma, e não apenas como soma de features

A documentação de padrões é a fonte viva da decisão. Esta ADR registra o *porquê*, não o *como*.

## Consequências

### Consequências Positivas
- Pull Requests mais objetivos e previsíveis
- Redução de discussões subjetivas ou recorrentes
- Refatorações mais seguras e rastreáveis
- Melhor experiência de desenvolvimento
- Base clara para onboarding e alinhamento técnico

### Trade-offs
- Necessidade de manutenção contínua da documentação
- Possível atrito inicial em mudanças de hábito
- Exige atuação ativa do Chapter de Frontend como instância de alinhamento

Esses trade-offs são considerados aceitáveis frente aos ganhos de escala, qualidade e sustentabilidade técnica.

## Referências

- TypeScript Handbook — Modules (ESM, exports e imports)  
  https://www.typescriptlang.org/docs/handbook/modules.html

- React Docs — Thinking in React (modelagem e clareza de responsabilidades)  
  https://react.dev/learn/thinking-in-react

- Google Engineering Practices — Code Review / Guidance (consistência e escala)  
  https://google.github.io/eng-practices/

- Airbnb JavaScript Style Guide (convenções e consistência em JS/React)  
  https://github.com/airbnb/javascript