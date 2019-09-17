const { User } = require('../models');

module.exports = {

    async listar()
    {
        try{
            const userList = await User.findAll();
            return userList;
        }catch(er){
            throw er;
        }
    },

    async criar(user)
    {
        try{
            const userSaved = await user.save();
            return userSaved;
        }catch(er){
            throw er;
        }
    },

    async buscar(id)
    {
        try{
            const userRecovered = await User.findByPk(id);
            return userRecovered;
        }catch(er){
            throw er;
        }
    },

    async atualizar(user, id){
        try{
            const userR = await this.buscar(id);
            const updated = await userR.update(user);
            return updated;
        }catch(er){
            throw er;
        }
    },

    async remover(id){
        try{
            const userR = await this.buscar(id);
            const destroyed = await userR.destroy();
            return destroyed;
        }catch(er){
            throw er;
        } 
    }

}