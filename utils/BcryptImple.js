const bcrypt = require('bcrypt');
const saltRounds = 10;

module.exports = {

    async toHash(plainTextPassword){
        return await bcrypt.hash(plainTextPassword, saltRounds);
    },

    async checkPassword(plainTextPassword, hash){
        const result = await bcrypt.compare(plainTextPassword, hash);
        if(result){
            return true;
        }
        return false;
    }

};