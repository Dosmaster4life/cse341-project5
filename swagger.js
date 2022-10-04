const swaggerAutogen = require('swagger-autogen')();

const doc = {
  info: {
    title: 'Realtor API',
    description: 'Use the Realtor API to manage your realtors and homes.'
  },
  host: 'localhost:10000',
  schemes: ['http']
};

const outputFile = './swagger.json';
const endpointsFiles = ['./routes/index.js'];

// generate swagger.json file
swaggerAutogen(outputFile, endpointsFiles, doc);

