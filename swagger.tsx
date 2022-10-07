const swaggerAutogen = require('swagger-autogen')();

const doc = {
  info: {
    title: 'Realtor API',
    description: 'Use the Realtor API to manage your realtors and homes.'
  },
  host: 'https://realtorzone.onrender.com',
  schemes: ['https']
};

const outputFile = './swagger.json';
const endpointsFiles = ['./routes/index.tsx'];

// generate swagger.json file
swaggerAutogen(outputFile, endpointsFiles, doc);

