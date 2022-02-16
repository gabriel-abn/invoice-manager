import { Product } from "../../entities/Product";
import { ProductRepository } from "../../repositories/DataRepositoryInterface";
import { CreateProductRequestDTO } from "./CreateProductRequestDTO";

export class CreateProductUseCase {
    constructor(private productsRepo: ProductRepository) {}

    async execute(product: CreateProductRequestDTO) {
        const checkProduct = await this.productsRepo.findByBarCode(
            product.code_bar
        );

        if (checkProduct) {
            throw new Error("");
        }

        const newProduct = Product.create(product);

        return newProduct;
    }
}
