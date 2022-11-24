const swaggerUI = require("swagger-ui-express");
const swaggerJsdoc = require("swagger-jsdoc");

const options = {
  // swaggerDefinition 은 yaml 형식이나 json 형식을 받는다.
  // 여기서는 json 형식을 사용
  swaggerDefinition: {
    openapi: "3.0.0",
    info: {
      version: "1.0.1",
      title: "Glitch BlockChain API",
      description: `this is Glistch studio's blockchain api`,
    },
  },
  // 내가 설정한 api들을 swagger가 찾을 수 있도록 표시해준다.
  apis: ["./routers/*.js"],
};

const specs = swaggerJsdoc(options);

module.exports = { swaggerUI, specs };
