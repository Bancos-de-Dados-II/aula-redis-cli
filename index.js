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

    const retorno = await client.ping();
    console.log(retorno);

}