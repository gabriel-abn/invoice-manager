export abstract class CreateProductRequestDTO {
    id: string;
    code_bar: string;
    name: string;
    price: number;
    category_code?: string;
    fabrication_date: Date;
    expiration_date: Date;
}
