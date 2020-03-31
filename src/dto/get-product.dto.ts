import { Transform, deserialize } from "class-transformer";

export class GetProductDto {
    id: string;
    name: string;
    price: number;
    @Transform(ingredients => JSON.parse(ingredients))
    ingredients: string;
}