### Sobre:

- Aplicação em NodeJs e typescript.

---

### Ferramentas utilizadas:

- [Express](https://expressjs.com/)
- [Typescript](https://www.typescriptlang.org/)
- [Insomnia](https://insomnia.rest/)
- [Uuidv4](https://www.npmjs.com/package/uuidv4)
- [Eslint](https://eslint.org/)
- [Prettier](https://prettier.io/)
- [date-fns](https://date-fns.org/)
- [ts-node-dev](https://www.npmjs.com/package/ts-node-dev)
- [@types/express](https://www.npmjs.com/package/@types/express)
- [Docker](https://www.docker.com/)
- [PostgreSQL](https://www.postgresql.org/)
- [DBeaver](https://dbeaver.io/)
- [TypeOrm](https://typeorm.io/)
- [bcryptjs](https://www.npmjs.com/package/bcryptjs)
- [jsonwebtoken](https://www.npmjs.com/package/jsonwebtoken)
- [MD5](http://www.md5.cz/)
- [multer](https://www.npmjs.com/package/multer)
- [Cors](https://developer.mozilla.org/pt-BR/docs/Web/HTTP/Controle_Acesso_CORS)
- [Tsyringe](https://github.com/microsoft/tsyringe)

---

### Como rodar:

- Primeiro clone o repositório ou faça download;
- Abra a pasta do projeto e rode no terminal:

  `$ yarn`

  `$ yarn dev`
---

 jwt.io
 MD5
 multer é um middleware node.js para manipular dados de multipart/form-data, usado principalmente para o upload de arquivos.

### Comandos utilizados na instalação:

#### Criando o arquivo package.json

yarn init -y

#### Instalando a biblioteca express

yarn add express

#### Instalando a biblioteca typescript -D <desenvolvimento>

yarn add typescript -D

#### Criando o arquivo tsconfig.json

yarn tsc --init

#### Instalando o intelisence do express no typescript

yarn add @types/express -D

#### Instalando a biblioteca ts-node-dev

yarn add ts-node-dev -D

#### Instalando a biblioteca eslint

yarn add eslint -D

#### Criando o arquivo eslint.json

yarn eslint --init
 - To check syntax, find problems, and enforce code style
 - JavaScript modules (import/export)
 - None of these
 - Does your project use TypeScript? (y/N) Y
 - Where does your code run?
    ◯ Browser
    ❯◉ Node
 - Use a popular style guide
 - Airbnb: https://github.com/airbnb/javascript
 - JSON
 - N
 - yarn add -D @typescript-eslint/eslint-plugin@latest eslint-config-airbnb-base@latest eslint-plugin-import@^2.20.1 @typescript-eslint/parser@latest

#### Instalando a biblioteca eslint

yarn add -D eslint-import-resolver-typescript

#### Instalando a biblioteca prettier

yarn add prettier eslint-config-prettier eslint-plugin-prettier -D

#### Instalando a biblioteca uuidv4

yarn add uuidv4

#### Instalando a biblioteca date-fns

yarn add date-fns

#### Instalando a biblioteca typeorm

yarn add typeorm pg

yarn add reflect-metadata

#### Criando as migrations

yarn typeorm migration:create -n `<Nome da Migration>`

#### Executando as migrations

yarn typeorm migration:run

#### Revertendo uma migrations

yarn typeorm migration:revert

#### Consultando as migrations

yarn typeorm migration:show

#### Instalando a biblioteca bcryptjs e @types/bcryptjs

yarn add bcryptjs

yarn add @types/bcryptjs -D

#### Instalando a biblioteca jsonwebtoken e @types/jsonwebtoken

yarn add jsonwebtoken

yarn add @types/jsonwebtoken -D

#### Instalando a biblioteca multer e @types/multer

yarn add multer

yarn add @types/multer -D

#### Instalando a biblioteca express async error

yarn add express-async-errors

#### Instalando a biblioteca Cors e @types/cors

yarn add cors @types/cors.


#### Instalando a biblioteca para ler o @path no import

yarn add -D tsconfig-paths

#### Instalando a biblioteca para fazer injeção de dependencia

yarn add tsyringe

#### Instalando a biblioteca para fazer os testes

yarn add jest -D

yarn add -D @types/jest

#### Configurando o Jest

yarn jest --init

The following questions will help Jest to create a suitable configuration for your project

✔ Would you like to use Jest when running "test" script in "package.json"? … yes
✔ Choose the test environment that will be used for testing › node
✔ Do you want Jest to add coverage reports? … no
✔ Automatically clear mock calls and instances between every test? … yes

#### Instalando uma dependencia porque o Jest não entende typescript

yarn add ts-jest -D

