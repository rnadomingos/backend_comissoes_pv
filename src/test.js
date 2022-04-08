const dotenv = require('dotenv')
dotenv.config();

// console.log(`Este é o Token: ${token} esta é o From: ${process.env.SENDERID} e este é o \n ID do Template: ${process.env.TEMPLATEID}`);

const retBody = {      
        uri: process.env.URI,
        headers: {
          'X-API-TOKEN': process.env.TOKEN
        },
        body: {
          from: process.env.SENDERID,
          to: '5511965607634',
          contents: [{
              "type": "template",
              "templateId": process.env.TEMPLATEID,
              "fields": {
                "data": "08/04/2022",
                "diasemana": "Sexta-feira",
                "horario": "10:00",
                "loja": "HYUNDAI BARRA FUNDA",
                "endereco" : "Av. Marques de São Vicente, 1139",
                "consultor": "JACK",
                "servico" : "Revisão 10.000",
                "placa" : "FTV0820",
                "telefone" : "3883-7100",
              }
            }]
        },
        json: true
      }



module.exports = retBody