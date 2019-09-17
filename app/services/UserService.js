const { User } = require('../models');
const BcryptImple = require('../../utils/BcryptImple');

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
            user.password = await BcryptImple.toHash(user.password);
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
            if(user.hasOwnProperty('password')){
                const check = await BcryptImple.checkPassword(user.password, userR.password);
                if(!check){
                    user.password = await BcryptImple.toHash(user.password);
                }
            }
            return await userR.update(user);
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