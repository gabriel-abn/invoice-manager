import { Entity } from "../@types/Entities";
import { ProductProps } from "../@types/PropEntitiesTypes";

export class Product extends Entity<ProductProps> {
    private constructor(props: ProductProps, id?: string) {
        super(props, id);
    }

    static create(props: ProductProps, id?: string) {
        const product = new Product({ ...props, id });

        return product;
    }
}
