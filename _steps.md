## Conceitos do React Native

### O que é o React Native?

- O React em si é responsável pelo desenvolviemento de interfaces. E o React Native é uma versão do React para desenvolvimento mobile, como um port do React Web para desenvolvimento Mobile;
- Multiplataforma: desenvolvemos códigos únicos para plataformas diferentes. Também é possível manipular o que (e como) será executado em cada plataforma.
- Produz interface nativa (e não híbrida), o que mantém a performance.
- O código não é transpilado de JS para Objective-C ou Java. Uma dependência chamada JavaScriptCore é injetada na aplicação e faz com que a plataforma realmente entenda JavaScript.
  (outras plataformas migrando, Microsoft com mais de 40apps no Windows)

### Artuitetura

JS => Metro Bundler => Bundle => Bridge => iOS/Android

- JavaScript: Nosso código
- Metro Bundler: um packager equivalente ao Webpack no ReactWeb
- Bundle: pacote gerado com todo o código da aplicação, equivalente ao bundle.js no ReactWeb
- Bridge: Ponte de comunicação entre o código JavaScript e o código nativo
- Transformação da interface necessária para iOS ou para Android

### Sintaxe

- A declaração de componentes é igual ao que utilizamos na versão Web: Continuamos utilizando functions / classes;
- Para cada elemento, não utilizamos HTML (div, p, span) e sim componentes próprios (Text, View, TouchableOpacity);
- Não existe herança de estilização;-
- Todo texto é <Text> e não existe estilização própria;
- Aplicamos estilos sem classes ou IDs;
- Os estilos podem ser aplicados através do Yoga, um framework do Facebook (também utilizado em outros frameworks além do React Native) que permite converter estilos em CSS (declarados em um objeto JavaScript) para estilos em Objective-C ou estilos Java.

### Expo

- SDK (Software Development Kit) com um conjunto de funcionalidades prontas para usar (câmera, vídeo, integrações com meios de pagamento/login);
- Não é necessário configurar um emulador pro React Native rodar, basta ter o aplicativo do Expo instalado na plataforma (Android/iOS);

#### Motivos para não utilizar o SDK do Expo neste projeto

- Possui limitação sobre o controle do código nativo, não é possível alterar manualmente o código Java/Objective-C caso necessário;
- Devido a limitação acima muitas bibliotecas não tem suporte pro expo;
- O Expo disponibiliza o conjunto de funcionalidades prontas para utilização em projetos sem o Expo.

---

## Configurando o Ambiente de Desenvolvimento

Para testar a aplicação desenvolvida é necessário configurar o ambiente de desenvolvimento.

### Pra testar aplicativo no sistema Android:

- Ter a dependência Node (Para instalar e utilizar o CLI do React Native)
- Ter a dependência Python2 (Para compilar o Bundler)
- No MacOS, ter a dependência Watchman (Para monitorar alterações nos arquivos)
- Ter a dependência JDK (Java Development Kit, utilizada para compilação pro sistema Android)
- Ter o SDK (Software Development Kit) do Android configurado e as variáveis de ambiente configuradas
- Ter o emulador do Android ou um dispositivo para rodar a aplicação

No Windows, as dependências Node, Python2 e JDK podem ser instaladas através do gerenciador de pacotes Chocolatey.

O SDK pode ser baixado no link [https://developer.android.com/studio/#command-tools](https://developer.android.com/studio/#command-tools)

Para emular a plataforma Android, a ferramenta Genymotion pode ser utilizada. Contudo, no Windows, ela pode apresentar conflitos com a virtualização do Docker, nesse caso, o recomendável é utilizar o emulador do Android Studio mesmo (nesse caso, ao invés de baixar só o SDK, baixamos todo o Android Studio, que possui opções de emulador que não usam o VirtualBox).

Mesmo com a opção do emulador, é recomendado e mais performatico utilizar o próprio dispositivo físico para testar a aplicação.

Links com os detalhes de instalação das dependências, do emulador e erros comuns:
[https://docs.rocketseat.dev/ambiente-react-native/introducao](https://docs.rocketseat.dev/ambiente-react-native/introducao)

---

## Criando projeto

Para criar o projeto sem utilizar o Expo, utilizaremos o React Native CLI (Command Line Interface). O CLI está fora do pacote do React Native principal e é mantido pela comunidade no repositório [react-native-community/cli](https://github.com/react-native-community/cli).

Podemos instalar esse pacote para uso global e criar um novo projeto:

```
yarn global add react-native-cli
react-native init [nome_do_projeto]
```

Ou, a partir da versão 5 do NPM, podemos utilizar o CLI diretamente através do NPX:

```
npx react-native init [nome_do_projeto]
```

(No Mac é interessante ter o Cocoapods, que é um gerenciador de pacotes pro iOS utilizado pelo React Native)

Projeto criado através do React Native CLI:

```
react-native init rocketseat_06_reactnative_github_api
```

Projeto inicializado pela primeira vez:

```
react-native run-android
```

No caso do Android o emulador precisa estar aberto antes do comando acima.

Nessa primeira inicialização, que demora um pouco mais, o Metro Bundler gera o Bundle e faz a instalação no dispositivo. A partir da segunda vez (se o terminal do Metro Bundler for fechado, por exemplo) podemos executar o Bundle diretamente (sem precisar gerá-lo novamente) através do comando:

```
react-native start
```

No emulador/dispositivo, alguns comandos úteis:

- Reload: R + R
- Menu de desenvolvimento: Ctrl + D / Chacoalhar o dispositivo
- Habilitar recarregamento automático: Dev Menu > Enable Fast Refresh

Arquivo `App.js` editado (limpamos o que não será utilizado). As alterações foram exibidas no emulador/dispositivo.

Comparando com o React Native com o React para Web:

- Ainda declaramos componentes da mesma forma (com função ou com classe);
- Para os elementos, não utilizamos tags HTML, mas sim os componentes do React Native. O componente `View` funciona como uma `<div>` e o componente `Text` funciona como qualquer tag de texto (`<p>`/`<span>`/etc);
- Nenhum componente estrutural possui significado semântico, eles se diferenciam apenas pela estilização;
- A estilização é definida tradicionalmente utilizando o framework Yoga, importando a classe StyleSheet do componente `react-native` e utilizando a mesma para criar objetos de estilização semelhante ao CSS;
- Nos objetos do StyleSheet, são utilizados apenas objetos e as propriedades são no padrão camelCase (não utiliza-se traço "-");
- No ambiente mobile, todos os elementos possuem o `display: flex` e o `flex-direction: column` por padrão;
- Mesmo com a opção tradicional de estilização, ainda podemos utilizar o Styled Components para estilizar com a mesma sintaxe da Web;
- No ambiente mobile teremos acesso a APIs nativas que não existem no ambiente Web (como verificação de conectividade, banco de dados do dispositivo, etc)

---

## Padrão de código (Style guide) | Configurando EditorConfig, ESLint e Prettier

Semelhante a configuração feita no React para Web, também foi configurado o padrão de código no React Native.

### ESLint

(Como o `.eslintrc.js` foi gerado pelo CLI `react-native init`, removemos o arquivo antigo antes de começar a configurar o ESLint)

Para verificar alguns padrões de código e se o mesmo está correto, utilizamos o ESLint.

A dependência de desenvolvimento ESLint já estava instalada. Caso não estivesse utilizariamos o comando para instalar:

```bash
yarn add eslint -D
```

Criamos o arquivo de configuração (.eslintrc.js):

```
yarn eslint --init
```

Nas respostas das perguntas de configuração, selecionamos:

- **How would you like to use ESLint?**
  To check syntax, find problems, and enforce code style

- **What type of modules your project use?**
  JavaScript modules (import/export)

- **Which framework does your project use?**
  React

- **Does your project use TypeScript?**
  No

- **Where does your code run?** (única resposta diferente em relação ao React Web)
  (none)

- **How would you like to define a style for your project?**
  Use a popular style guide

- **Which sytle guide do you to follow?**
  Airbnb

- **What format do you want your config file to be in?**
  JavaScript

- **Would you like to install them now with npm?**
  Yes

(Também pode aparecer uma pergunta dizendo se queremos fazer o Downgrade do ESLint dependendo da versão do Style Guide do Airbnb. Nesse caso podemos selecionar "Y" [yes])

As instalações das dependências foram feitas pelo `npm` e o arquivo `package-lock.json` (cache do npm) foi criado. Como estamos utilizando o `yarn` deletamos esse arquivo e fizemos o mapeamento das novas dependências instaladas no `yarn.lock` através do comando:

```
yarn
```

Para o ESLint funcionar também é necessário ter o plugin do ESLint no VSCode.

Para que os erros detectados pelo ESLint sejam corrigidos automaticamente ao salvar o arquivo, nas configurações do editor VSCode (`settings.json`), setamos as variáveis `editor.formatOnSave`, `editor.codeActionsOnSave` e `eslint.validate`.

No arquivo `.eslintrc.js` que foi gerado, setamos algumas regras adicionais na propriedade `rules`. Configuramos para que o ESLint aceite arquivos `js` (além de JSX). Configuramos também para que o `export default` não seja obrigatório pois vamos precisar exportar sem o default (como ao utilizar Styled Components, por exemplo).

### Prettier

O módulo do Node Prettier faz a verificação de regras de código adicionais, como a formatação do código em uma ou mais linhas e o tipo de final de linha (lf ou crlf). É feito para deixar o código mais "bonito".

Como na versão web, instalamos o Prettier e os mesmos módulos complementares para poder integra-lo ao ESLInt:

```
yarn add prettier eslint-config-prettier eslint-plugin-prettier -D
```

O arquivo `.prettierrc.js` gerado pelo React Native CLI foi modificado para sobrescrever algumas regras da Airbnb, adicionamos as mesmas regras da versão Web. Indicamos o padrão de aspas simples (ao invés de duplas) e de inserção de uma vírgula logo após o último item de um Array.

No arquivo de configuração do ESLint, adicionamos a propriedade `prettier` em `plugins`. Também adicionamos o `prettier` e o `prettier/react` na propriedade `extends`, para que as regras do prettier sejam consideradas após as regras da Airbnb. Também modificamos a propriedade `rules` para que que todas as regras do `prettier` não cumpridas indiquem um erro.

Para o Prettier funcionar também é necessário ter o plugin do Prettier no VSCode.

### Babel ESLint

Instalamos também o `babel-eslint` para poder integrar o Babel ao ESLint, assim o ESLint saberá que estamos utilizando as últimas funcionalidades do JavaScript:

```
yarn add babel-eslint -D
```

No arquivo de configuração do ESLint, antes da propriedade `parseOptions`, adicionamos uma propriedade chamada `parser` com a string `babel-eslint`.

---

Até então o `.eslintrc.js` estava identico a versão Web, contudo, ao abrir um arquivo foi sinalizado que não foi encontrada a definição de uma regra específica e ela deve que ser definida. Adicionamos a regra [jsx-props-no-spreading](https://github.com/yannickcr/eslint-plugin-react/blob/master/docs/rules/jsx-props-no-spreading.md).

---

### EditorConfig

A extensão EditorConfig do VSCode permite que o arquivo `.editorconfig` seja gerado ao clicar com o botão direito na pasta de um projeto. Nesse arquivo são definidas regras adicionais (como espaçamento, indentação, charset, etc) para que desenvolvedores com diferentes editores de código tenham o mesmo tipo de formatação.

Geramos esse arquivo identico ao arquivo utilizado na versão Web.

(Essa é apenas uma extensão pro editor, não é necessário instalar nenhum módulo do Node)

---

## Atualização do Bundle ao instalar novos pacotes | Resolvendo eventuais erros

A aplicação React Native pode exibir erros quando instalamos novos pacotes. Para resolver basta encerrar o Metro Bundler e iniciar novamente limpando o cache:

```
react-native start --reset-cache
```

O comando acima também pode ser utilizado em outros casos de erro, quando não estamos encontrando os motivos para o erro acontecer.

Em último caso, quando o erro ainda não desaparece, ainda podemos encerrar o Metro Bundler e tentar gerar o Bundle novamente:

```bash
react-native run-android
```

---

Criamos a pasta `src`. O arquivo `App.js` foi renomeado para `index.js` e movido para a pasta `src`.

---

## Debug no código com Reactotron

Temos a opção de debugar o código nativamente utilizando o `console.log` após ativar o Debug no menu de desenvolvimento dentro do aplicativo instalado, assim conseguimos acessar o log em uma nova aba do navegador. Contudo, a melhor opção ao utilizar o React Native é um Debugger externo chamado Reactotron.

Acessamos o GitHub do Reactotron, baixamos e instalamos.

Também adicionamos a dependência Reactotron React Native ao projeto. Foi necessário adicionar como dependência normal pra o ESLint não indicar erros e configuramos a seguir para o Reactotron só executar em ambiente de desenvolvimento.

```bash
yarn add reactotron-react-native
```

Na pasta `src` criamos o arquivo `config/ReactotronConfig.js` e nele importamos o módulo instalado, verificamos se a aplicação está rodando em ambiente de desenvolvimento (checando a variável global do node chamada `__DEV__`), inicializamos o Reactotron em caso positivo e armazenamos o objeto retornado por ele dentro da variável global `console` (em `console.tron`) para ter acesso em outros lugares da aplicação. Também efetuamos a limpeza do log (`tron.clear()`).

Quando conectamos via Wifi/USB, se essa configuração não for o suficiente, também pode ser necessário indicar qual o host dentro do método `configure`. Se mesmo assim não funcionar, também pode ser necessário configurar um redirecionamento de porta:

```bash
adb reverse tcp:9090 tcp:9090
```

(Para o comano acima funcionar a pasta do SDK do Android precisa estar configurada nas variáveis de ambiente)

Caso o ESLint indique algum erro por não detectar que a variável `__DEV__` existe, basta incluí-la na configuração `.eslintrc.js` na propriadade `globals` como `__DEV__: 'readonly'`.

No componente App (`src/index.js`) fizemos a importação das configurações do Reactotron e colocamos um `console.tron.warn`.

---

## Configurando a navegação com o React Navigation

Semelhante ao que fizemos na versão Web, também será necessário configurar a navegação da aplicação. No React Native, contudo, algumas coisas são diferentes.

### Instalando dependências

É recomendável olhar a [documentação do React Navigation](https://reactnavigation.org/docs/pt-BR/getting-started.html) ao fazer a instalação dessa dependência em algum projeto, pois é o tipo de dependência que passa por atualizações constantes.

Seguindo a documentação, instalamos a dependência no projeto:

```
yarn add react-navigation
```

Instalamos também as dependências complementares para um projeto React Native sem o Expo (com o Expo elas são diferentes):

```
yarn add react-native-reanimated react-native-gesture-handler react-native-screens react-native-safe-area-context
```

Para concluir, no caso do Android, foi necessário alterar arquivos da linguagem nativa como o `android/app/build.gradle` e o `MainActivity.java`. No caso do iOS é necessário entrar na pasta ios e executar `pod install` e, para isso, é necessário ter o cocoapods, mencionado anteriormente.

Quando fazemos modificações nativas, é necessário gerar a aplicação novamente (`react-navive run-android`) antes de continuar.

Com a configuração das dependências iniciais de navegação concluída, escolhemos o tipo de navegação a ser utilizado.

A navegação escolhida para esta parte da aplicação é do tipo [Stack](https://reactnavigation.org/docs/pt-BR/hello-react-navigation.html) (navegação em pilha), que é um tipo de navegação por botões. Para isso instalamos a dependência [React Navigation Stack](https://github.com/react-navigation/stack). Como essa dependência não precisa de modificações nativas para funcionar, não foi necessário gerar o Bundle novamente (com `react-native run-android`):

```
yarn add react-navigation-stack @react-native-community/masked-view
```

Além do tipo de navegação Stack, também existe a navegação por abas, por menu lateral, dentre outras.

### Criando estrutura inicial

Criamos os arquivos `src/pages/Main/index.js` e `src/pages/User/index.js`, que serão rotas diferentes da aplicação.

Criamos o arquivo `routes.js`, onde importamos o método `createAppContainer` do React Navigation (`react-navigation`) para guardar toda a navegação, e o método `createStackNavigator` React Navigation Stack (`react-navigation-stack`) que é o tipo de navegação, além dos componentes de cada rota (`Main` e `User`).

Qualquer tipo de navegação precisa do AppContainer.

Setamos em uma constante `Routes` o resultado do método `createAppContainer`, e para ele, passamos como argumento o outro método `createStackNavigator`. No `createStackNavigator` definimos os componentes de rotas importados.

Modificamos o arquivo principal `src/index.js` para importar o componente `Routes` logo após a importação das configurações do Reactotron (como uma boa prática - para que seja possível utilizar os logs do Reactotron nas rotas e em qualquer importação seguinte).

Na aplicação foi possível ver um cabeçalho exibindo o nome do componente `Main` alinhado a esquerda.

---

## Main | Definindo título

Modificamos o componente `Main`, adicionando uma propriedade chamada `navigationOptions` e dentro dela criamos um objeto com a propriedade `title` e o valor `Usuários`. A propriedade `navigationOptions` é lida pelo `React Navigation` faz a alteração no título.

## Routes | Estilizando o padrão do cabeçalho

Modificamos o componente `Routes`, passando um segundo parâmetro pro método `createStackNavigator` com algumas opções de estilização. Setamos alguns itens dentro da propriedade `defaultNavigationOptions`, que são as propriedades padrão/herdadas para todas as telas:

- `headerBackTitleVisible:false`: para, ao navegar para uma página, quando o botão de voltar aparecer no topo, não exibir o texto (para iOS);
- `headerTitleAlign:center`: para alinhar o título ao centro (para Android);
- `headerStyle`: para definir a cor de todo o cabeçalho;
- `headerTintColor`: para definir a cor de todos os textos dentro do cabeçalho (inclusive o título).

---

## App | Estilizando a barra de status do topo

Modificamos o componente `App` para estilizar a barra de status do topo (onde fica o relógio, a bateria, sinal de wi-fi, etc). Importamos o componente `StatusBar` do prórprio React Native, inserimos na estrutura e fizemos a estilização setando algumas propriedades para ele. Utilizamos a propriedade `barStyle` como `light-content` para que o conteúdo fique branco e a propriedade `backgroundColor` para setar a mesma cor de fundo do cabeçalho. Também é possível alterar outras propriedades como a `hidden`, que faz a barra de status desaparecer e a `translucent` que deixa a barra semi-transparente.

---

## Instalando e utilizando Styled Components

Adicionamos a biblioteca Styled Components. Ela serve para trabalhar com estilização nos componentes do React Native (ou ReactJS). Com essa biblioteca trabalhamos a estilização de maneira quase identica ao que fazemos no React para Web, com algumas diferenças.

```
yarn add styled-components
```

Para trabalhar em arquivos da Styled Components, também é necessário ter a extensão `vscode-styled-components` instalada no VSCode para que o highlighting funcione.

No React Native, diferente da versão Web:

- O Styled Components é importado de `styled-components/native` ao invés de apenas `styled-components`;
- Não é possível definir uma estilização global, mas ainda é possível reaproveitar um componente estilizado (como um Container, por exemplo);
- Não é possível encadear elementos, cada elemento deve ter uma estilização própria;
- Não existem tags HTML (div, p, span, etc), apenas os componentes do React Native (`View`, `Text`, `Button`, etc);
- Não existem classes ou ids e também não é possível estilizar pelo nome da tag;
- Todos os componentes possuem display flex e flex-direction column por padrão.

Utilizar essa biblioteca ainda é uma vantagem pois podemos estilizar como se fosse o CSS para Web (utilizando a sintaxe curta do padding, por exemplo).

Criamos o arquivo `Main/styles.js`, definimos o flex 1 para ocupar todo o espaçamento vertical, um padding pro respiro do conteúdo e um background de teste.

No arquivo `Main/index.js`, importamos o componente estilizado e colocamos ele na estrutura.

Alterações exibidas no aplicativo.

---

## Main | Criando elementos e estilizando formulário

No React Native, selhante ao React para Web, também podemos utilizar pacotes de fontes como: Font Awesome, Material Icons, Ionicons, dentre outros. Para utilizar instalamos a dependência React Native Vector Icons.

```
yarn add react-native-vector-icons
```

Para concluir a instalação, também foi necessário alterar o código nativo de cada plataforma. Seguindo a documentação, para [Android](https://github.com/oblador/react-native-vector-icons#android) adicionamos algumas linhas ao `android/app/build.gradle`. Para [iOS](https://github.com/oblador/react-native-vector-icons#ios) é necessário adicionar os pacotes de fontes que utilizaremos no `Info.plist`, acessar a pasta ios e executar `pod install` (do CocoaPods). Em ambos os casos, incluimos apenas o Material Icons, que é apenas o pacote que será utilizado, deixando assim, o Bundle mais leve.

Como alteramos código nativo, foi necessário executar `react-native run-android` novamente.

Editamos o arquivo `Main/styles.js`, exportando o `Form`(View), o `Input`(TextInput) e o `SubmitButton`(RectButton). No campo de texto, editamos a propriedade de cor do placeholder no próprio arquivo de estilização (recomendável). O Botão foi importado da biblioteca `react-native-gesture-handler` e possui uma estilização automatica diferente dependendo da plataforma (iOS ou Android), como por exemplo, o feedback visual ao tocar nele (no Adroid costuma ocorrer o 'ripple effect', diferente do iOS, que só altera a opacidade). O Styled Components permite utliziarmos componentes que não são nativos (como o ReactButton) passando eles como parâmetro pro método `styled()`.

Editamos a estrutura no arquivo `Main/index.js`. O `Form` guarda o `Input` e o `Button`. No `Input`, algumas propriedades de acessibilidade padrão foram editadas (como o [autoCorrect](https://facebook.github.io/react-native/docs/textinput#autocorrect) e o [autoCapitalize](https://facebook.github.io/react-native/docs/textinput#autocapitalize)) para que não funcionem, pois não fazem sentido no contexto dessa aplicação.

Para utilizar o ícone do pacote de ícones configurado anteriormente, ainda no arquivo `Main/index.js`, importamos o componente `Icon` do `react-native-vector-icons/MaterialIcons` e incluímos ele na estrutura. Nas propriedades do componente, definimos o `name` após ver os [nomes disponíveis na documentação](https://oblador.github.io/react-native-vector-icons/), além do tamanho e da cor.

Alterações exibidas no aplicativo.

---

## Main | Adicionando usuário e lista de usuários no estado da aplicação

Para trabalhar com os dados do estado modificamos o componente `Main` para ser um componente de classe.

Criamos o método `handleInputChange`, responsável por guardar a informação que o usuário digita na propriedade `newUser`. Associamos o método ao componente `InputText` através da propriedade `onChangeText` (ao invés do `onChange`, e que recebe o valor diretamente como argumento ao invés do `event`). No campo `InputText` também definimos que o valor do campo é igual ao valor armazenado no estado (para refletir a alteração quando limparmos essa propriedade após adicionar o item na lista).

Criamos o método `handleSubmit`, responsável por buscar o dado de `newUser` no estado, buscar também os dados da lista `users`, unir os dados em um único Array, setar o novo com esse novo Array (conceito de imutabilidade) estado e limpar a propriedade `newUser` (que ao ser limpa reflete a alteração no componente `InputText`).

Também importamos a API do teclado do `react-native` e utilizamos o método `Keyboard.dismiss()` no final do `handleSubmit` pro teclado desaparecer logo após o envio.

Por enquanto a lista `users` guarda apenas strings, e será modificada para guardar as informações que virão da API do GitHub.

Diferente da versão Web, associamos o `handleSubmit` diretamente ao botão de envio (evento `onPress`) e ao campo de texto (evento `onSubmitEditing`), já que não existe realmente um elemento `form`. No campo de texto, também adicionamos a propriedade `returnKeyType="send"` pra seta de enviar aparecer no teclado.

Utilizando o Reactotron verificamos as alterações no estado da aplicação.

---

## Main | Instalando Axios e preenchendo propriedade do estado com dados da API

Para buscar informações em uma API REST externa, poderíamos utilizar o `fetch` do próprio JavaScript, contudo, vamos utilizar uma biblioteca chamada `axios` para poder configurar algumas opções (como a URL base). Além disso, reaproveitamos uma mesma biblioteca que pode ser utilizada no ambiente Web.

```
yarn add axios
```

Consultamos na documentação do GitHub como acessar o recurso de busca de um usuário através do método GET [https://developer.github.com/v3/users/#get-a-single-user](https://developer.github.com/v3/users/#get-a-single-user).

No componente `Main` importamos o arquivo `api` para fazer uma requisição GET quando o método `handleSubmit` é executado. Como a requisição é assíncrona, adicionamos async/await ao método. Após o retorno de todos os dados, criamos um novo objeto para guardar os dados `name`, `login`, `bio` e `avatar` em um novo objeto (`user`) e adicionamos ele na lista de objetos (`users`).

Ao testar e fazer a requisição pra API, na timeline do Reactotron aparece a resposta com os dados do usuário, além dos cabeçalhos da requisição/resposta. O Reactotron detecta automaticamente as requisições pra API (não sendo necessário executar um tron.log).

---

## Main | Bloqueia/Anima botão até a conclusão da chamada a API

Para que o usuário não envie o dado do campo de texto várias vezes seguidas foi necessário desabilitar o campo de texto e o botão de envio temporáriamente.

Adicionamos a propriedade `loading` ao estado, setamos ela como `true` antes de fazer a requisição a API e depois da requisição setamos como `false`. Nos componentes `Input` e `SubmitButton` passamos o dado `loading` na propriedade `loading` e no Styled Component (dentro de `Main/styles.js`) deixamos o campo e o botão transparentes de acordo com o valor da propriedade `loading` (`false` ou `true`).

Para alterar o desenho do botão enquanto os dados da API são carregados, importamos o componente `ActivityIndicator` do `react-native`, que retorna um ícone de carregamento já animado e estilizado de acordo com o sistema (Android ou iOS). Utilizamos um _condicional rendering_ através da propriedade `loading` do estado: caso o dado seja `true` só o `ActivityIndicator` aparece, caso o dado seja `false` só o `Icon` aparece.

No Reactotron os testes indicam que apenas uma busca na API é feita por vez e não é possível fazer uma nova requisição até receber o retorno da antiga.

---

## Main | Listando repositórios

Para listar os usuários adicionados, utilizamos um componente do próprio React Native feito para percorrer listas chamado `FlatList` (ao invés de ul/li com o map utilizado no React para Web). Em `Main/styles.js` estilizamos o `FlatList` (com a propriedade [showsVerticalScrollIndicator](https://facebook.github.io/react-native/docs/scrollview#showsverticalscrollindicator) [extendida do componente scrollview] setada pra `false` para não exibir o scroll) e exportamos como o Styled Component `List`. Em `Main/index.js`, após importá-lo definimos as propriedades `data` com o Array de usuários, o `keyExtractor` com o valor único pra cada item da lista e o `renderItem` que é a função utilizada para renderizar cada item.

De dentro do `Main/styles.js` também estilizamos e exportamos:

- `User`(View): serve como container para todos os dados;
- `Avatar`(Image): mostra a imagem do usuário definida no objeto {uri:<caminho-da-imagem>};
- `Name`(Text): mostra o nome do usuário;
- `Bio`(Text): mostra a descrição do usuário, limitado a 2 linhas através da propriedade `numberOfLines`;
- `ProfileButton`(RectButton): mostra o botão de acesso aos detalhes do usuário(por enquanto está fake);
- `ProfileButtonText`(Text): mostra o texto do botão.

Em `Main/index.js` importamos os componentes estilizados. No método `renderItem`, através da desestruturação, acessamos a propriedade `item` que corresponde a cada usuário. Criamos estrutura com os componentes importados e os dados de cada usuário.

---
