const user__service = require('../services/userServices');

const testUserApi = (req, resp) => {
    console.log('testUserApi');
    resp.status(200).send({
        "status": "ok",
        "message": "Api user state: avaliable"
    });
        
    
};

const getAllUsers = async (req, resp) =>{
    const users = await user__service.getAllUsers();
    if (users) {
        
        resp.status(200).send({
            "status": "ok",
            "message": "usuarios",
            "data": users
            });
    }else{
        resp.status(200).send({"status": "ok", "message": "Error al traer los usuarios"});

    }
}

const getOneUser = async (req, resp) =>{
    const id = req.params.id;
    const user = await user__service.getOneUser(id);
    if (user) {
        
        resp.status(200).send({
            "status": "ok",
            "message": "usuario traido",
            "data": user
            });
    }else{
        resp.status(200).send({"status": "ok", "message": "Error al traer el usuario"});

    }
};
const createUser = async (req, res) =>{
    const {body}= req;
    const createdUser = await user__service.createUser(body.name, body.email, body.password);
    if(createdUser)
        res.status(201).send({ status:"OK",data: createdUser });
    else
        res.status(400).send({ status:"FAILED",data: createdUser });
};

const updateUser = async (req, res)=>{
    let id = req.params.id;
    let {name,email,password}= req.body;
    const updatedUser = await user__service.updateUser(id,name,email,password);
    if(updatedUser)
        res.status(200).send({ status:"OK",data: updatedUser });
    else
        res.status(400).send({ status:"FAILED", data: updatedUser });
};

const deleteUser = async (req, res)=>{
    let id = req.params.id;
    const deletedUser = await user__service.deleteUser(id);
    if(deletedUser)
        res.status(200).send({ status:"OK", data: deletedUser });
    else
        res.status(400).send({ status:"FAILED",data:deleteduser });
};

module.exports = {testUserApi, getAllUsers, getOneUser, createUser, updateUser, deleteUser};