# PRIMEIRO PROJETO COM REACT-NATIVE
## Testando a plataforma

***[FIXO]: Instalar o app `expo` na play/app store no smartphone que deseja***
***testar os apps sendo desenvolvidos com react-native***

**O `Expo` é um conjunto de ferramentas que auxiliam no desenvolvimento**
**de apps com o framework react-native, desde a criação do projeto até**
**o deploy. Com o app `Expo` é possível rodar o aplicativo em desenvolvimento**
**em um smartphone físico sem  o uso de emulador ou afins (e wireless =])**


## PREPARAÇÃO DO AMBIENTE - WINDOWS

1 - Instalar Nodejs baixando o pacote msi através do site oficial

2 - Com o Nodejs instalado, usar npm (Node Package Manager) para
	instalar as dependencias:

* `npm install yarn --global`	(opcional)
* `npm install expo-cli --global`	
	
3 - Iniciar novo projeto
	
* `expo init nome-do-projeto` (escolher template [blank/tabs])
* Se o yarn estiver instalado, vai solicitar para instalar as dependencias com ele. 

4 - Iniciar projeto

* `cd nome-do-projeto`
* `yarn start` (opcional, mais prático)	
* Caso não tiver o `yarn` usar `expo init`

## UTILIZANDO EMULADOR ANDROID

Para rodar o app no emulador, seguir os seguintes passos:
* Instalar um AVD (Android Virtual Device) utilizando o Android Studio (ver docs)
* Colocar no path do sistema (Windows): `%localappdata%/Android/Sdk/platform-tools` e `%localappdata%/Android/Sdk/emulator`
* Executar o emulador utilizando o comando `emulator -avd NOME_DO_AVD`
* Verificar se o ADB está rodando e se o emulador está conectado executando o comando `adb devices`
* Se estiver tudo OK, basta estar no diretório do projeto e executar o comando `yarn run android`
