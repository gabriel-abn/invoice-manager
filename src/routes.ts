import { Request, Response, Router } from "express";
import { prismaClient } from "./database/prismaClient";

const routes = Router();

routes.get("/users/all", async (request: Request, response: Response) => {
    const users = await prismaClient.user.findMany({});

    return response.json(users);
});

routes.get("/users/:id", async (request: Request, response: Response) => {
    const user_cpf = request.params;

    const user = prismaClient.user.findFirst({
        where: {
            cpf: user_cpf,
        },
    });

    return response.json(user);
});

export { routes };
