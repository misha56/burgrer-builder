import { Module } from '@nestjs/common';
import {TypeOrmModule} from '@nestjs/typeorm';
import { ProductModule } from './Product/Product.module';
import { EntitiesModule, entities } from './entities/entities.module';

@Module({
  imports: [
    TypeOrmModule.forRoot({
      type: 'mysql',
      host: 'localhost',
      port: 3306,
      username: 'sviat',
      password: ',ju,kfu1788',
      database: 'crud',
      entities,
      synchronize: false,
      migrationsRun: true,
    }),
    ProductModule,
    EntitiesModule,
  ],
  controllers: [],
  providers: [],
})
export class AppModule {}
