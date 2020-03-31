import { CreateIngredientsDto } from './create-ingredients.dto';
import { ValidateNested, IsString, IsNumber } from 'class-validator';
import { Type } from 'class-transformer';

export class CreateProductDto {
    @IsString()
    name: string;
    @IsNumber()
    price: number;
    @ValidateNested()
    @Type(() => CreateIngredientsDto)
    ingredients: CreateIngredientsDto;
}