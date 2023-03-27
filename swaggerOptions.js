const swaggerOptions = {
    info : {
        version : "0.8.0",
        title : "Api Artist Track Genre",
        description : "Digital City FS JS - 2023"
    },

    baseDir : __dirname,

    filesPattern : [
        "./controllers/*.js",
        "./models/swaggerModels/*.js"
    ],

    swaggerUIPath : "/swagger",
    exposeSwaggerUI : true,

    notRequiredAsNullable : false
}

module.exports = swaggerOptions