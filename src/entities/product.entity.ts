import {Entity, PrimaryGeneratedColumn, Column} from 'typeorm';
import {CrudValidationGroups} from '@nestjsx/crud';
import {IsDefined, IsOptional, Length, ValidateNested} from 'class-validator';
import {Transform, serialize} from 'class-transformer'
import {ApiProperty} from '@nestjs/swagger';
import {CreateIngredientsDto} from '../dto/create-ingredients.dto';
const { CREATE, UPDATE } = CrudValidationGroups;

@Entity()
export class Product {
    @PrimaryGeneratedColumn('uuid')
    id: string;

    @ApiProperty()
    @IsOptional({ groups: [UPDATE] })
    @IsDefined({ groups: [CREATE] })
    @Length(1, 50)
    @Column('varchar', { length: 50 })
    name: string;

    @ApiProperty()
    @IsOptional({ groups: [UPDATE] })
    @IsDefined({ groups: [CREATE] })
    @Column({ type: 'double' })
    price: number;

    @ApiProperty()
    @Column({ type: 'text' })
    @Transform(ingridients => JSON.stringify(ingridients))
    ingredients: CreateIngredientsDto;
}
