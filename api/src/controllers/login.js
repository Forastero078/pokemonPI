let { users } = require("../utils/users");




function login(req, res) {
    const { username, password } = req.body;

    let access = false;

    for(let i = 0; i < users.length; i++){
        if(users[i].username === username && users[i].password === password){
            access = true;
            break;
        }         
    }


    if(access){
        res.status(200).json({access: true});
    } else {
        res.status(200).json({access: false})
    }
     
}

// busca que haga match y devuelve la respuesta con acces true o false

module.exports = {
    login
}