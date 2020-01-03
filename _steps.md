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

```
react-native run-android
```

---
