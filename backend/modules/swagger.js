const swaggerUi = require("swagger-ui-express");
const swaggereJsdoc = require("swagger-jsdoc");

const options = {
  swaggerDefinition: {
    openapi: "3.0.0",
    info: {
      title: "바다의 졸업 작품 API",
      version: "1.0.0",
      description: "바다의 졸업 작품 api 입니다.",
    },
    host: "localhost:3001",
    basePath: "/",
    contact: {
      email: "jungbada269@naver.com",
    },
    components: {
      securitySchemes: { bearerAuth: { type: "http", scheme: "bearer" } },
    },
  },
  apis: ["./router/*.js", "./router/user/User.js"],
};

const specs = swaggereJsdoc(options);

module.exports = {
  swaggerUi,
  specs,
};
