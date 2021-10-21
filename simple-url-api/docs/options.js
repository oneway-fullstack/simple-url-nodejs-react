module.exports = {
  definition: {
    openapi: "3.0.0",
    info: {
      title: "Simple team management API",
      version: "0.1.0",
      description:
        "This is a simple CRUD API that allows you to manage team roaster",
      license: {
        name: "MIT",
        url: "https://spdx.org/licenses/MIT.html",
      },
      contact: {
        name: "Juan Orozco",
        url: "https://www.linkedin.com/in/juan-o/",
        email: "juan.orozco.one@hotmail.com",
      },
    },
  },
  apis: [
    "../routes.js"
  ],
};