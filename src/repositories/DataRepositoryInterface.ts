import { Product } from "../entities/Product";

export interface ProductRepository {
    insert(product: Product): Promise<null>;
    findByBarCode(id: string): Promise<Product>;
}

export interface CategoryRepository {}

export interface ProviderRepository {}
