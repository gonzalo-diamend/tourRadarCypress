const { defineConfig } = require("cypress");

module.exports = defineConfig({
  e2e: {
      baseUrl:'https://www.tourradar.com/d/europe',
      emailAdmin:'jerrybonham@yopmail.com',
      passwordAdmin:'Test1234',
      viewportWidth: 1280,
      viewportHeight: 800,
      defaultCommandTimeout:20000,
      chromeWebSecurity:false,
      failOnStatusCode: false,
      video: false
  },
});
