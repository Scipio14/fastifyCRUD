exports.options = {
  routePrefix: "/documentation",
  exposeRoute: true,
  swagger: {
    info: {
      title: "Node js Fastify",
      description: "Building an api with fastify",
      version: "1.0.0",
    },
    externalDocs: {
      url: "https://swagger.io",
    },
  },
  consumes: ["application/json"],
};
