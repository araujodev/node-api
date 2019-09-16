const { User } = require('../models');

module.exports = {

    listar()
    {
        return User.findAll().then(userList => {
            return userList
        }).catch(error => {
            throw error
        })
    },

    criar(user)
    {
        return user.save().then(createdUser => {
            return createdUser
        }).catch(error => {
            throw error
        });
    },

    buscar(id)
    {
        return User.findByPk(id).then(recoveredUser => {
            return recoveredUser
        }).catch(error => {
            throw error
        })
    },

    async atualizar(user, id){
        try{
            const userR = await this.buscar(id);
            const updated = await userR.update(user);
            return updated;
        }catch(er){
            throw er;
        }
    }

}