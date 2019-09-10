const { User } = require('../models');

module.exports = {

    async index(req, res){
        const usuariosList = await User.findAll();
        return res.json(usuariosList);
    },

    async store(req, res){
        const { username } = req.body;
        
        return res.json({ ok: true });
    },

    async update(req, res){
        const { username } = req.body;
        
        return res.json({ ok: true });
    },

    async show(req, res){

    },

    async destroy(req, res){

    }
};