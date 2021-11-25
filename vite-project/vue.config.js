// vue.config.js
module.exports = {
  css: {
    loaderOptions: {  
      sass: {
        additionalData: `@import "@/styles/_variables.scss";`,
      },
      scss: {
        additionalData: `@import "@/styles/_variables.scss";`,
      },
    } ,
  },
};
