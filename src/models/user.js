const pool = require('../configs/db')

const getUser = () => {
    return pool.query(`SELECT * FROM users`);
}

const getEmailUser = (email) =>{
    return pool.query(`SELECT * FROM users WHERE email='${email}'`)
}

const getIdUser = (id) => {
    return pool.query(`SELECT * FROM users WHERE id='${id}'`);
}

const registerUser = (data) => {
    const { id, name, email, password } = data;
    return pool.query(`INSERT INTO users(id,name,email,password)VALUES('${id}','${name}','${email}','${password}')`);
}

const updateProfile = (data) => {
    const { id, name, email, password, phone, photo } = data;
    return pool.query(`UPDATE users SET name='${name}', email='${email}, password='${password}, phone='${phone}, photo='${photo} WHERE id='${id}`)
}

module.exports = {
    getUser,
    getEmailUser,
    getIdUser,
    registerUser,
    updateProfile
}