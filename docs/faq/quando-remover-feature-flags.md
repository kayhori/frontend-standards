<details>
<summary><strong>❓ Quando remover feature flags?</strong></summary>

**Problema comum:** Feature flags são criadas para controlar rollout, mas acabam ficando no código por tempo indeterminado.

```ts
if (featureFlagNewFlow) {
  runNewFlow();
} else {
  runOldFlow();
}
```

Com o tempo, ninguém sabe mais:
- se a flag ainda é usada
- qual fluxo está ativo em produção
- se é seguro remover
- quem é responsável por ela

Isso gera:
- código duplicado
- complexidade desnecessária
- risco silencioso em refatorações
- dificuldade de entendimento do fluxo real

| Situação                                 | Ação                                     |
| ---------------------------------------- | ---------------------------------------- |
| Feature já estabilizada em produção      | Remover flag e código antigo             |
| Feature cancelada                        | Remover flag + todo o fluxo associado    |
| Flag antiga sem dono claro               | Priorizar investigação e remoção         |
| Flag ligada a experimento já encerrado   | Remover                                  |

### 🧠 Regra de ouro
Feature flag é temporária por definição; Se uma flag não tem dono, data ou propósito claro, ela já é dívida técnica.

</details>

