// Importa os módulos necessários para configurar o Swagger
const swaggerUi = require("swagger-ui-express");
const swaggerJsdoc = require("swagger-jsdoc");

// Define as opções de configuração do Swagger
const options = {
  definition: {
    openapi: "3.0.0",
    info: {
      title: "User API",
      version: "1.0.0",
      description: "A simple Express User API",
    },
    servers: [
      {
        url: "http://localhost:3000",
      },
    ],
  },
  apis: ["./src/index.js"], // Caminho para os arquivos onde as anotações do Swagger estão localizadas
};

// Gera a especificação do Swagger com base nas opções
const specs = swaggerJsdoc(options);

// Exporta uma função que configura o Swagger na aplicação Express
module.exports = (app) => {
  app.use("/api-docs", swaggerUi.serve, swaggerUi.setup(specs));
};
