class Carro{
    marca = ""
    modelo = ""
    categoria = ""
    ano 
    quilometragem 
    valor 

    constructor(marca,modelo,categoria,ano,quilometragem,valor){
    this.marca = marca
    this.modelo = modelo
    this.categoria = categoria
    this.ano = ano
    this.quilometragem = quilometragem
    this.valor = valor
    }
}

let meuCarro = new Carro("fiat", "touro", "esportiva", 2015, 10000, 150000);
meuCarro.id = 2;

//para subir algo
async function postData(url = 'https://apigenerator.dronahq.com/api/mhkhHpMs/registroDeCarros', data = {Carro}) {
   const response = await fetch(url, {
       method: 'POST',
       mode: 'cors',
       cache: 'no-cache',
       credentials: 'same-origin',
       headers: {
           'Content-Type': 'application/json'
       },
       redirect: 'follow',
       referrerPolicy: 'no-referrer',
       body: JSON.stringify(data)
   });

   if(response.ok) {
       console.log("A solicitação foi bem-sucedida!");
   } else {
       console.log("A solicitação falhou com o status: " + response.status);
   }

   return response.json();
}

postData(undefined, meuCarro)
.then(response => {
   console.log(response);
})
.catch(error => {
   console.error('Error:', error);
});

// para deletar 
async function postData(url = 'https://apigenerator.dronahq.com/api/mhkhHpMs/registroDeCarros/'+ meuCarro.id, data = {}) {
   const response = await fetch(url, {
       method: 'DELETE',
       mode: 'cors',
       cache: 'no-cache',
       credentials: 'same-origin',
       headers: {
           'Content-Type': 'application/json'
       },
       redirect: 'follow',
       referrerPolicy: 'no-referrer',
       body: JSON.stringify(data)
   });

   if(response.ok) {
       console.log("A solicitação foi bem-sucedida!");
   } else {
       console.log("A solicitação falhou com o status: " + response.status);
   }

   return response.json();
}

postData(undefined, meuCarro)
.then(response => {
   console.log(response);
})
.catch(error => {
   console.error('Error:', error);
});
  

