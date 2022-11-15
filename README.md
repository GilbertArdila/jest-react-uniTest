# platzi-store
Curso de Pruebas unitarias con Jest
- npm install jest enzyme-adapter-react-16 --save-dev
- npm i -D jsdom jsdom-global jest-environment-jsdom
-  en scrips del package.json añadimos  "test": "jest",
    "test:watch":"jest --watch"
    - al final del package.json agregamos configuración "jest":{
        "testEnvironment": "jsdom",
    "setupFilesAfterEnv": [
      "<rootDir>/src/__test__/setupTest.js"
    ]
  }
  - creamos mock para ignorar estilos del proyecto
  - creamos carpeta mocks y dentro archivo styleMock.js
  - al final del package.json ponemos  "ModuleNameMapper":{
      "//.(styl|css)$":"<rootDir>/src/__mocks__/styleMock.js"
    }
    - instalamos react-test-renderer --save-dev para el snapshot (npm i react-test-renderer@16.14.0 -D)
    - npm test:update para actualizar el snapshot despues de haber realizado algun cambio en la ui del componente
    -mpm install jest-fetch-mock --save-dev para usar fetch