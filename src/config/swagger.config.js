import swaggerJSDoc from "swagger-jsdoc";

const swaggerOptions = {
  definition: {
    openapi: "3.0.1",
    info: {
      title: "AdoptMe API",
      version: "1.0.0",
      description: "API documentation",
    },
  },
  apis: ["./src/docs/*.yaml"], // lee tus YAML
};

export const swaggerSpec = swaggerJSDoc(swaggerOptions);
