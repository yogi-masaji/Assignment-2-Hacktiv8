const jwt = require('jsonwebtoken');
const data = [];

class LoginController{
    static login(req, res) {
        const {username, password} = req.body;

        data.push({ 
        username: username,
        password: password
        });

    const tokenJwt = jwt.sign({ username: username }, process.env.JWT_KEY);
    
    res.status(201).send({message: "Login Success", token: tokenJwt})
}
}
module.exports = LoginController



