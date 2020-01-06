## [Rocketseat] Desafio 06: Aprimorar aplicação Mobile (React Native) que consome API do GitHub

Aplicação Mobile com React Native que consome API do GitHub. A aplicação adiciona usuários, lista usuários e exibe detalhes de cada usuário junto com a listagem de seus repositórios favoritos.

Passo a passo documentado em: https://github.com/cafecomlucas/rocketseat_desafio_06_reactnative_github_api/blob/master/_steps.md

---

### Como iniciar

- Clone este repositório;
- Acesse o diretório clonado;
- Instale as dependências através do comando `yarn`;
- Inicie a aplicação Mobile (somente Android) `npx react-native run-android`.

---

### Funcionalidades da primeira versão

Até o commit [fb3e91...](https://github.com/cafecomlucas/rocketseat_desafio_06_reactnative_github_api/commit/fb3e912cc45f2678d5966b13e912733e6515aa28) as seguintes funcionalidades foram desenvolvidas:

- Configuração do ambiente de desenvolvimento com Node, JDK, SDK e emulador;
- Configuração do padrão de código (com EditorConfig, ESLint e Prettier);
- Roteamento Mobile através do React Navigation;
- Configuração das rotas `Main` e `User`;
- Estilização com Styled Components;
- Busca de dados em API externa através de requisições assíncronas;
- Animação com ícone de carregamento até a conclusão da chamada a API;
- Adição e listagem de usuários no componente `Main`;
- Armazenamento local (com AsyncStorage) para os dados de `Main` continuarem aparecendo após o recarregamento da aplicação;
- Exibição dos detalhes de um usuário e seus repositórios favoritos no componente `User`;
- Utilização de Debugger externo (Reactotron).

---

### Funcionalidades adicionais (versão do desafio)

Após o commit [fb3e91...](https://github.com/cafecomlucas/rocketseat_desafio_06_reactnative_github_api/commit/fb3e912cc45f2678d5966b13e912733e6515aa28) as seguintes funcionalidades foram adicionadas:

#### Loading de repositórios favoritados

Indicador de loading utilizando `<ActivityIndicator />` antes de carregar a lista de repositórios favoritados na tela de detalhes do Usuário.

#### Scroll infinito

Funcionalidade de scroll infinito na lista de repositórios favoritados. Assim que o usuário chega nos **20%** do final de lista, é feita uma busca pelos items da próxima página e eles são adicionados na lista. Exemplo:

```js
<Stars
  onEndReachedThreshold={0.2} // Carrega mais itens quando chegar em 20% do fim
  onEndReached={this.loadMore} // Função que carrega mais itens
  // Restante das props
>
```

Exemplo de requisição de uma nova página pro Github utilizando o parâmetro `page` no fim da URL:

```
https://api.github.com/users/diego3g/starred?page=2
```

#### Pull to Refresh

Atualização da lista e reset do estado quando o usuário arrasta a listagem de repositórios favoritados para baixo. Ao resetar o estado volta para a página 1 e exibe apenas os 30 primeiros itens.

Exemplo de utilização da funcionalidade "Pull to Refresh" (existe por padrão na FlatList):

```js
<Stars
  onRefresh={this.refreshList} // Função dispara quando o usuário arrasta a lista pra baixo
  refreshing={this.state.refreshing} // Variável que armazena um estado true/false que representa se a lista está atualizando
  // Restante das props
>
```

#### WebView

Criação de uma nova página na aplicação que é acessada quando o usuário clica em um repositório favoritado. Essa nova página possui apenas o Header da aplicação. O conteúdo é uma WebView, ou seja, um browser integrado que exibe o atributo `html_url` presente no objeto do repositório que vem da API do Github.

Documentação de utilização da [WebView](https://github.com/react-native-community/react-native-webview/blob/master/docs/Getting-Started.md).

Exemplo de código:

```js
<WebView source={{uri: repository.html_url}} style={{flex: 1}} />
```

---
