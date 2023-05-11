const express = require( 'express');

const serve = express();

serve.use(express.json());

const cursos = ['Ingles Avançado' , 'Italianoa basico' , 'Latim Classico'];

// Retorna um curso
serve.get('/cursos/ :index', (req, res) => {
    const { index } = req.params;


return res.json (cursos[indez])
});

// Retornar todos os cursos
serve.get('cursos', (req,res) => {
    return res.json(cursos);
})

// criar um novo curso 
serve.post('/cursos', (req,res) => {
    const { name } = req.body;
    cursos.push(name)
})

// Atualizar um curso
serve.put('/curso/:index', (req, res) => { 
    const { index } = req.params;
    const { name } = req.body;

    cursos[index] = name;
})


// Deletar um curso 
serve.delete('/cursos/:index', (req, res) => { 
    const { index } = req.params; 

    cursos.splice(index, 1);
    return res.json({ message:" O curso foi deletado" });

})

serve.listen(3000);