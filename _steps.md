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
