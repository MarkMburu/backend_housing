const { genSaltSync, hashSync, compareSync } = require('bcryptjs');
// Hash passwords
async function hashPassword(password) {
 return await hashSync(password, genSaltSync());
}

// validate password
function validatePassword(plainPassword, hashedPassword) {
 return compareSync(plainPassword, hashedPassword);
}

module.exports={
    hashPassword,
    validatePassword
}