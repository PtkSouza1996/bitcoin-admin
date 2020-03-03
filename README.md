# Bitcoin admin

## Arquivos e Pastas

Optei por dividir a aplicação em modulos, onde tudo o que determinado modulo precisa para 'funcionar' está por perto ou na mesma pasta, seguindo assim um dos principios do SOLID o single responsability, que em essência diz que uma classe/função e/ou modulo deve ter somente um motivo para mudar (muitos confundem com uma unica responsabilidade, mas seria inviável um modulo com uma única responsabilidade, um modulo tem muitas responsabilidades de acordo com o que ele propõe a resolver).

## Tecnologias/Packages

Utilizei Axios para realizar requisições HTTP.
Utilizei redux para centralizar e controlar o estado da aplicação. acredito que é interessante utilizar o redux pois ele nos impõe uma arquitetura robusta e elegante. Junto com redux utilizei redux saga para controlar os efeitos colaterais. com as sagas ganhamos a logica da aplicação centralizada e facil de testar.

## Testes

Optei por testar somente os modulos responsáveis pelo estado da aplicação (sagas,actions,reducers). Também poderiamos testar os componentes.

## Controle de versão

Utilizei duas libs para padronizar o estilo de mensagens de commit.

- Commitlint
- Commitzen

## Style guide

Optei por utilizar um padrão do airbnb.

#### Para rodar o projeto:

##### Pré-requisitos

- Node versão 12 ou posterior
- yarn versão 1.21.1 ou posterior

depois de clonar o repositório

#### Iniciar a aplicação

```bash
$ cd bitcoin-admin
$ yarn install
$ yarn start
```

#### Rodar testes

```bash
$ yarn test
```

- ###### modo TDD

```bash
$ yarn tdd
```

#### Docker:

```bash
$ cd bitcoin-admin
$ docker-compose up
```

### Melhorias

- Terminar as features
- Melhorar responsividade
- Tratamento de erros amigaveis
- Adicionar CI/CD
