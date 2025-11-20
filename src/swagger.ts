import swaggerJsdoc from "swagger-jsdoc";
import swaggerUi from "swagger-ui-express";
import { Express } from "express";

const options: swaggerJsdoc.Options = {
  definition: {
    openapi: "3.0.0",
    info: {
      title: "API Backend Empresarial",
      version: "1.0.0",
      description: "Documentação da API em TypeScript com Express",
    },
  },
  apis: ["./src/routes/*.ts"], // onde os endpoints estão definidos
};

const specs = swaggerJsdoc(options);

export const setupSwagger = (app: Express) => {
  app.use("/api-docs", swaggerUi.serve, swaggerUi.setup(specs));
};
