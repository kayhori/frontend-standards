# Contribuindo com os Frontend Standards

Este repositório existe para reduzir variabilidade, tornar decisões explícitas e apoiar a evolução sustentável do Frontend.  
Contribuições são bem-vindas, desde que sigam os princípios e o propósito do documento.

## 🎯 Objetivo das contribuições

Uma boa contribuição deve, em geral:

- Reduzir ambiguidade ou decisões repetidas
- Aumentar clareza e previsibilidade
- Refletir práticas já adotadas ou desejadas de forma consistente
- Ajudar o time a decidir melhor, não a seguir regras cegamente


## 🧭 O que pode ser proposto

São exemplos de contribuições válidas:

- Novo padrão de Frontend (ex.: nomenclatura, arquitetura, estado)
- Ajustes ou refinamentos em padrões existentes
- Correções editoriais ou de clareza
- Exemplos que tornem um padrão mais compreensível

## 🚫 O que evitar

Evite contribuições que:

- Introduzam burocracia ou complexidade desnecessária
- Tentem resolver todos os casos possíveis
- Criem regras rígidas sem espaço para julgamento técnico
- Documentem soluções muito específicas de um único projeto

## 🔄 Processo de contribuição

1. Crie uma branch a partir de `main`
2. Faça a alteração proposta em Markdown (`.md`)
3. Abra um **Pull Request** descrevendo:
   - O que está sendo proposto
   - O problema que a mudança resolve
   - Se há impacto sistêmico ou apenas local

Sempre que possível, **conecte a proposta a problemas reais** observados no dia a dia.

## 🧠 Discussão e alinhamento

- Mudanças pequenas podem ser revisadas diretamente via PR
- Mudanças relevantes devem ser discutidas no **Chapter de Frontend**
- Alterações com impacto sistêmico podem gerar um **ADR**

## 🗂️ ADRs (Architecture Decision Records)

Quando uma decisão tiver **impacto estrutural, transversal ou de longo prazo**, considere criar um ADR.

ADRs são indicados, por exemplo, quando:
- Um novo padrão arquitetural é introduzido
- Um trade-off relevante é assumido de forma consciente
- Uma decisão pode gerar dúvidas futuras sobre “por que isso foi feito assim”

### Diretrizes para ADRs

- Devem ser curtos e objetivos
- Devem registrar:
  - Contexto do problema
  - Decisão tomada
  - Principais trade-offs
- Não devem:
  - Repetir documentação de padrões
  - Justificar preferências pessoais
  - Virar atas de discussão

O objetivo de um ADR é **preservar contexto e intenção**, não impor decisões ou criar processos formais.

Os ADRs devem ser criados em `docs/decision-records/`