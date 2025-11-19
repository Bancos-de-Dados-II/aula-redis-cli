import { createClient } from "redis";

conectar();

async function conectar(){
    const client = createClient()
        .on('error', (err)=> console.log(err));
    await client.connect();
    await client.auth({
        password: 'mypassword'
    });
    console.log('Conectado ao Redis');

    const retorno = await client.set('123', 'Teste2',{
        expiration: {
            type: 'EX',
            value: 60
        }
    });
    console.log(retorno);

}