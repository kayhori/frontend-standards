# 📦 Padrão de Exports (`named` vs `default`)

Este documento define o **padrão organizacional para uso de exports em Frontend**.
O objetivo é **aumentar previsibilidade**, **facilitar refatorações**, **melhorar a experiência de desenvolvimento** e **reduzir ambiguidade** entre arquivos e imports.

## 🎯 Princípio geral

> **Prefira `named exports` como padrão.**  
> Use `default export` apenas quando houver um motivo claro e consciente.

Essa decisão prioriza:
- Clareza de intenção
- Imports previsíveis
- Refatorações mais seguras
- Melhor suporte a tooling (IDE, lint, auto-import)

## 📝 Checklist rápido

- **Named exports** como escolha padrão para funções, hooks, utilitários, serviços, constantes, tipos e componentes compartilhados
- **Default export** apenas quando o arquivo representa uma **única entidade principal estável** (ex.: página, root provider)
- **`index.ts`** apenas como barrel explícito, sem esconder implementação
- Evitar `export *` fora de casos muito controlados

## ✅ Named Exports (padrão recomendado)

### Quando usar
- Funções
- Hooks
- Utilitários
- Serviços
- Constantes
- Tipos e interfaces
- Componentes

### Por que usar
- O nome exportado é explícito
- Imports são consistentes e previsíveis
- Refatorações quebram em tempo de compilação
- Melhor suporte de auto-complete e auto-import

### Exemplo

```ts
// paymentService.ts
export function calculateTotalAmount() {}
export function formatCurrency() {}

// uso
import { calculateTotalAmount, formatCurrency } from './paymentService';
```

## ⚠️ Default Export (uso restrito)
Quando é aceitável

- O arquivo exporta uma única entidade principal
- O nome da entidade é óbvio e estável
- O arquivo representa um conceito central, não utilitário

Exemplos aceitáveis:

- Um componente React principal por arquivo
- Uma página
- Um provider raiz

```ts
// PaymentSummary.tsx
export default function PaymentSummary() {}

// uso
import PaymentSummary from './PaymentSummary';
```

### ❌ Problemas comuns com `default export`
Ambiguidade de nome

O mesmo export pode ser importado com nomes diferentes:

```ts
import Summary from './PaymentSummary';
import Payment from './PaymentSummary';
```

Isso:
- Dificulta leitura
- Quebra busca global
- Aumenta custo cognitivo

#### Refatorações perigosas

Renomear a entidade não quebra imports automaticamente, escondendo erros.

### 🧠 Regra prática

- Se o arquivo exporta mais de uma coisa → use named export.
- Se exporta apenas uma, pergunte: “esse nome pode variar?”
- Se sim → named export.
- Se não → default export pode ser aceitável.

### 🧩 Componentes React
Padrão recomendado
- Preferir named export
- Nome do componente = nome do arquivo

```ts
// AccountSelector.tsx
export function AccountSelector() {}

// uso
import { AccountSelector } from './AccountSelector';
```

### Quando usar default

- Páginas
- Componentes raiz de rota
- Casos em que o framework exige

```ts
// pages/dashboard.tsx
export default function Dashboard() {}
```

### 📦 Barrel files (index.ts)

*Uso permitido*
- Apenas para re-export explícito
- Nunca para esconder lógica

```ts
// index.ts
export { AccountSelector } from './AccountSelector';
export { PaymentSummary } from './PaymentSummary';
```

*Evitar* 
```ts
export * from './AccountSelector';
```
(exceto em casos muito controlados)

### 🚫 Anti-padrões

- Misturar `default` e `named export` sem critério
- Usar `default export` por conveniência
- Usar `export default` em arquivos utilitários
- Criar barrels que escondem a origem das entidades

Esses padrões reduzem previsibilidade e aumentam o risco de regressões.

### 🧠 Observações finais

- Exports são parte da API interna do Frontend
- Mudanças em exports são mudanças de contrato
- Clareza aqui reduz problemas em escala

*Quando houver dúvida:*
> Prefira previsibilidade a conveniência.