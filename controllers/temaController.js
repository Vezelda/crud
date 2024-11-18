const temas = [
    { id: 1, titulo: 'JavaScript', votos: 10 },
    { id: 2, titulo: 'Python', votos: 8 },
];

let nextId = 3;

module.exports = {

    listar: (req, res) => {
        temas.sort((a, b) => b.votos - a.votos);
        res.render('temas', { temas });
    },

    crear : (req, res) => {
        const { titulo } = req.body;
        temas.push({ id: nextId++, titulo, votos: 0});
        res.redirect('/temas');
    },

    votar : (req, res) => {
        const tema = temas.find(t => t.id === parseInt(req.params.id));
        if (tema) {
            tema.votos += 1;
        }
        res.redirect('/temas');
    },

    eliminar: (req, res) => {
        const index = temas.findIndex(t => t.id === parseInt(req.params.id));
        if (index !== -1) {
            temas.splice(index, 1);
        }
        res.redirect('/temas');
    },

    editar: (req, res) => {
        const tema = temas.find(t => t.id === parseInt(req.params.id));
        if (tema) {
            res.render('editar', { tema });
        } else {
            res.redirect('/temas');
        }
    },
    

    actualizar: (req, res) => {
        const tema = temas.find(t => t.id === parseInt(req.params.id));
        if (tema) {
            tema.titulo = req.body.titulo; // Actualiza el título del tema
        }
        res.redirect('/temas');
    },
    
    
};