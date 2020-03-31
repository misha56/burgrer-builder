import { IsNumber } from 'class-validator';
export class CreateIngredientsDto {
    @IsNumber()
    bacon: number;

    @IsNumber()
    salad: number;

    @IsNumber()
    cheese: number;

    @IsNumber()
    meat: number;
}