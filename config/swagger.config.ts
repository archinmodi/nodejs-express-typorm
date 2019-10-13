<<<<<<< HEAD
// tslint:disable-next-line: no-var-requires
const swaggerUi = require("swagger-ui-express");
// tslint:disable-next-line: no-var-requires
const swaggerJsdoc = require("swagger-jsdoc");

const options = {
  apis: ["./src/**/*.*"],
  swaggerDefinition: {
    // Like the one described here: https://swagger.io/specification/#infoObject
    info: {
      contact: {
        email: "support@example.com",
        name: "API Support",
        url: "http://www.example.com/support"
      },
      description: "This is a sample server for a node api.",
      title: "Sample API nodejs App",
      license: {
        name: "Apache 2.0",
        url: "https://www.apache.org/licenses/LICENSE-2.0.html"
      },
      termsOfService: "http://example.com/terms/",
      version: "1.0.1"
    },
    server: [
      {
        url: "https://development.gigantic-server.com/v1",
        description: "Development server"
      },
      {
        url: "https://staging.gigantic-server.com/v1",
        description: "Staging server"
      },
      {
        url: "https://api.gigantic-server.com/v1",
        description: "Production server"
      }
    ]
  }
};

const specs = swaggerJsdoc(options);

const SwaggerConfig = {
  serve: swaggerUi.serve,
  setup: swaggerUi.setup(specs)
};

export default SwaggerConfig;
=======
// tslint:disable-next-line: no-var-requires
const swaggerUi = require("swagger-ui-express");
// tslint:disable-next-line: no-var-requires
const swaggerJsdoc = require("swagger-jsdoc");

const options = {
  apis: ["./src/**/*.*"],
  swaggerDefinition: {
    // Like the one described here: https://swagger.io/specification/#infoObject
    info: {
      contact: {
        email: "support@example.com",
        name: "API Support",
        url: "http://www.example.com/support"
      },
      description: "This is a sample server for a node api.",
      title: "Sample API nodejs App",
      license: {
        name: "Apache 2.0",
        url: "https://www.apache.org/licenses/LICENSE-2.0.html"
      },
      termsOfService: "http://example.com/terms/",
      version: "1.0.1"
    },
    server: [
      {
        url: "https://development.gigantic-server.com/v1",
        description: "Development server"
      },
      {
        url: "https://staging.gigantic-server.com/v1",
        description: "Staging server"
      },
      {
        url: "https://api.gigantic-server.com/v1",
        description: "Production server"
      }
    ]
  }
};

const specs = swaggerJsdoc(options);

const SwaggerConfig = {
  serve: swaggerUi.serve,
  setup: swaggerUi.setup(specs)
};

export default SwaggerConfig;
>>>>>>> master
