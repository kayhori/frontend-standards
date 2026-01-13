# 🔤 Padrões de Nomenclatura

Este documento define os **padrões de nomenclatura de Frontend**.

O objetivo não é impor estilo, mas **reduzir ambiguidade**, **aumentar legibilidade** e **facilitar manutenção, revisão e evolução do código**.


## 🎯 Princípios gerais

Antes das regras, alguns princípios que orientam todas as decisões de nomenclatura:

- Nomes devem **comunicar intenção**, não implementação
- Clareza é mais importante que brevidade
- Nomes devem ser previsíveis dentro do ecossistema
- Um nome ruim gera custo cognitivo contínuo

Quando houver dúvida:
> **Prefira o nome que alguém novo no código entenderia sem contexto adicional.**

### 📝 Checklist rápido

- **Componentes React** em `PascalCase`, nomeados pelo **papel no domínio** (ex.: `UserProfile`, `PaymentSummary`)
- **Hooks** começando com `use`, descrevendo **responsabilidade ou efeito** (ex.: `useAccountSelection`)
- **Funções** em `camelCase`, com **verbos específicos** (ex.: `calculateTotalAmount`, `validateUserInput`)
- **Variáveis e props booleanas** com prefixos `is / has / can / should`, conforme a semântica
- **Arquivos de código** em `camelCase` ou `PascalCase`; **docs, URLs e assets** em `kebab-case`

## 🧩 Componentes React

### ✅ Do

- Use **PascalCase**
- Use **substantivos ou substantivos + adjetivo**
- Nomeie pelo **papel do componente**, não pela aparência isolada

```ts
UserProfile
PaymentSummary
AccountSelector
ErrorMessage
```

### ❌ Don’t

- Evitar nomes genéricos ou ambíguos
- Evitar siglas não óbvias
- Evitar nomes baseados apenas em layout

```ts
Component
Box
Card1
Info
DataView
```

## 🪝 Hooks
### ✅ Do

- Sempre começar com use
- Nomear pelo efeito ou responsabilidade
- Usar verbos no infinitivo

```ts
useUserData
usePaymentHistory
useDebounce
useAccountSelection
```

### ❌ Don’t

- Não usar substantivos puros
- Não esconder efeitos colaterais no nome

```ts
userHook
useData
useFetch
useLogic
```

## 🧠 Funções
### ✅ Do

- Usar verbos
- Nomear pela ação realizada
- Ser específico o suficiente para evitar leitura do corpo

```ts
calculateTotalAmount
formatCurrency
mapApiResponseToViewModel
validateUserInput
```

### ❌ Don’t

- Evitar nomes genéricos
- Evitar verbos vagos

```ts
handleData
process
doStuff
execute
```

## 📦 Variáveis
### ✅ Do

- Usar camelCase
- Nomear pelo conteúdo, não pelo tipo
- Preferir nomes explícitos a abreviações

```ts
userId
totalAmount
isLoading
hasPermission
```

### ❌ Don’t

- Evitar abreviações obscuras
- Evitar nomes que exigem comentário para entender

```ts
data
info
tmp
res
obj
```

## 📁 Arquivos e pastas
### ✅ Do

- Usar camelCase para arquivos e pastas de código
- Usar PascalCase quando o arquivo exportar um único componente React principal
- Manter consistência entre o nome do arquivo e seu export principal
- Nomear pelo domínio ou responsabilidade, não pelo tipo técnico

```ts
useAccountSelection.ts
accountService.ts
paymentSummary.tsx
PaymentSummary.tsx
account/
payment/
```

### ❌ Don’t

- Evitar kebab-case para arquivos de código
- Evitar nomes genéricos
- Evitar arquivos que escondem responsabilidade

```ts
component.tsx
utils.ts
helpers.ts
index.tsx (quando esconde lógica)
```
index.ts é aceitável apenas como barrel explícito, nunca para esconder implementação.

Regra simples:

> Código JS/TS → camelCase / PascalCase

> Docs, URLs e assets → kebab-case

Essa regra:
- é fácil de explicar
- é fácil de revisar
- reduz discussão desnecessária

## 🧩 Props
### ✅ Do

- Usar nomes semânticos
- Usar prefixos booleanos de acordo com a semântica:
  - `is`, `has`, `can` → estado factual
  - `should` → decisão derivada de regra ou UX

```ts
isLoading
hasError
canSubmit

shouldShowError
shouldDisableSubmit
shouldRedirect
```
### ❌ Don’t

- Evitar props ambíguas
- Evitar nomes baseados em implementação interna
- Evitar misturar estado com decisão no mesmo nome
- Evitar booleanos ambíguos que não deixam claro se são estado ou regra

```ts
flag
value
data
handleClick
```

🧠 Regra de ouro


> Se o booleano responde “isso é verdade agora?” → use `is / has / can`.

> Se responde “isso deveria acontecer?” → use `should`.

## 🎛️ Eventos e handlers
### ✅ Do

- Prefixar com on para props
- Usar verbo no infinitivo para funções internas

```ts
onSubmit
onChange
onSelectAccount
handleSubmit
handleChange
```

### ❌ Don’t

```ts
submit
changeValue
clickHandler
```

## 🧪 Testes
### ✅ Do

- Descrever comportamento observável
- Usar linguagem próxima do domínio **em inglês**
- Nomear arquivos de teste de forma previsível (`AccountSelector.test.tsx`, `paymentService.test.ts`)

```ts
// Bom: comportamento explícito
it('allows submitting the form when all fields are valid', () => {
  // ...
});

// Bom: linguagem próxima do domínio
it('shows an error message when the payment is declined', () => {
  // ...
});
```

### ❌ Don’t

- Evitar nomes genéricos ou técnicos demais
- Evitar descrições que não expressem comportamento

```ts
// Ruim: não comunica comportamento
it('test submit', () => {});

// Ruim: técnico demais, sem intenção de negócio
it('sets isValid to true when onChange is called', () => {});
```

## 🚫 Anti-padrões comuns

- Nomes genéricos reutilizados em múltiplos contextos
- Siglas não documentadas
- Arquivos “catch-all” (utils, helpers)
- Componentes chamados Container, Wrapper, Base sem semântica

Esses padrões aumentam o custo cognitivo e dificultam refatorações.

## 🧠 Observações finais

- Nomenclatura não é detalhe estético
- Bons nomes reduzem necessidade de comentários
- Refatorar nomes é refatoração legítima
- Em caso de dúvida, alinhe no Chapter ou em PR