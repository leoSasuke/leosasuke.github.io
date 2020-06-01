import express from 'express';

const app = express();

app.get('/users',(request, response)=>{
    console.log('ta rodando liso');

    response.json([
        'Renato',
        'Hudson',
        'Paulinho'
    ]);
});

app.listen(3003);