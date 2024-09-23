import userService from "../services/userService.js";

const createUser = async (req, res) => {
    try {
        await userService.createUser(req);
        res.status(200).json({
            "message": "Successful",
            "status": 200
        })
    } catch (error) {
      
        res.status(error.errorCode).json({
            message: error.message,
            status: error.errorCode,

        })
    }
}

const getUsers = async (req, res) => { 
    try {
        const data = await userService.getUsers();
        res.status(200).json({
            "message": "Successful",
            "data": data,
            "status": 200
        });
    } catch (error) {
        res.status(500).json({
            error: error.message
        })
    }
}

const getUserById = async (req, res) => {
   
    const user = await userService.getUserById(req);

    res.status(200).json(user);
}

export default {
    createUser,
    getUsers,
    getUserById
};