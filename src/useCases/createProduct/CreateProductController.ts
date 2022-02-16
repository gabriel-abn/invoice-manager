import { Request, Response } from "express";
import { CreateProductUseCase } from "./CreateProductUseCase";

export class CreateProductController {
    constructor(private createProductUseCase: CreateProductUseCase) {}

    async handler(request: Request, response: Response) {
        const { id, code_bar, name, price, fabrication_date, expiration_date } =
            request.body;

        try {
            await this.createProductUseCase.execute({
                id,
                code_bar,
                name,
                price,
                fabrication_date,
                expiration_date,
            });

            return response.status(200).send();
        } catch (error) {
            return response.status(400).json({
                Message: error.message || "Unexpected error.",
            });
        }
    }
}
