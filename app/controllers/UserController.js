const { User } = require('../models');
const UserService = require('../services/UserService');

module.exports = {

    async index(req, res){
        try{
            const userList = await UserService.listar();
            return res.json(userList);
        }catch(err){
            return res.json({ err })
        }
    },

    async store(req, res){
        try{
            const { name, email, password } = req.body;
            const user = User.build({name, email, password})
            const userSaved = await UserService.criar(user)
            return res.json(userSaved);
        }catch(error){
            return res.json({ error })
        }
    },

    async update(req, res){
        try{
            const { id } = req.params;
            const { name, email, password } = req.body;
            const userUpdated = await UserService.atualizar({ name, email, password }, id)
            return res.json(userUpdated);
        }catch(error){
            return res.json({ error })
        }
    },

    async show(req, res){

    },

    async destroy(req, res){

    }
};