const { post } = require('request-promise');
const dotenv = require('dotenv')
const Teste = require('./test.js')

dotenv.config();

const teste = Teste.retBody;

// {        
//     uri: process.env.URI,
//     headers: {
//       'X-API-TOKEN': process.env.TOKEN
//     },
//     body: {
//       from: process.env.SENDERID,
//       to: '5511965607634',
//       contents: [{
//           "type": "template",
//           "templateId": process.env.TEMPLATEID,
//           "fields": {
//             "data": "08/04/2022",
//             "diasemana": "Sexta-feira",
//             "horario": "10:00",
//             "loja": "HYUNDAI BARRA FUNDA",
//             "endereco" : "Av. Marques de São Vicente, 1139",
//             "consultor": "JACK",
//             "servico" : "Revisão 10.000",
//             "placa" : "FTV0820",
//             "telefone" : "3883-7100",
//           }
//         }]
//     },
//     json: true
//   }

post(teste)
.then((response) => {
  console.log('Response:', response);
})
.catch((error) => {
  console.log('Error:', error);
});
