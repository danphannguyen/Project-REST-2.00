// Imports 
var jwt = require('jsonwebtoken');

const JWT_SIGN_SECRET = '0bz6hsi7654dyz8hbosz7jeu0aneub37uhb7890a2uibxa3984uae6789';

// Exported function
module.exports = {
    generateTokenForUser: function(userData) {
        return jwt.sign({
            userId: userData.id,
            isAdmin: userData.isAdmin

        },
        JWT_SIGN_SECRET, {
            expiresIn: '1h'
        })
    }
}