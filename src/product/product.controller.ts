import { CreateProductDto } from './../dto/create-product.dto';
import { Controller } from '@nestjs/common';
import { Crud } from '@nestjsx/crud';
import {ProductService} from './Product.service';
import {Product} from '../entities/Product.entity';
import {ApiTags} from '@nestjs/swagger';
import { GetProductDto } from '../dto/get-product.dto';

@Crud({
    model: {
        type: Product,
    },
    params: {
        id: {
            field: 'id',
            type: 'uuid',
            primary: true,
        },
    },
    dto: {
        create: CreateProductDto,
    },
    serialize: {
        get: GetProductDto,
        getMany: GetProductDto,
    }
})
@Controller('Product')
@ApiTags('Product')

export class ProductController {
    constructor(public service: ProductService) {}
}
