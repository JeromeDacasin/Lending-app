import { PrismaClient } from "@prisma/client";
import { BadRequestsException } from "../exceptions/badRequests.js";
import { ErrorCode } from "../exceptions/root.js";

const prisma = new PrismaClient();


const createUser = async (req, res) => {
    
    const {email} = req.body

    const emailAlreadyExists = await prisma.user.findFirst({
        where: {email}
    })

    if (emailAlreadyExists) {
        throw new BadRequestsException("Email already exists", ErrorCode.USER_ALREADY_EXISTS);
    }


    let user = await prisma.user.create({
        data: {
            email: req.body.email,
            password: req.body.password
        }
    })

    return user;
}

const getUsers = async (req, res) => {
    const users = await prisma.user.findMany({
        select: {
            email: true,
            id: true
        }
    });
    return users.map(user => ({
        ...user,
        id: user.id.toString()
    }))
}

const getUserById = async (req, res) => {

    const user = await prisma.user.findUnique({
        where: {
            id: req.params.id
        },
        select: {
            email: true,
            password: true
        }
    });

    return user

}


export default {
    getUsers,
    createUser,
    getUserById
}