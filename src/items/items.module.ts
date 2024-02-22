import { Module } from '@nestjs/common';
import { ItemsController } from './items.controller';
import { ItemsService } from './items.service';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Item } from './entities/items.entities';
import { Category } from './entities/category.entity';

@Module({
    imports:[TypeOrmModule.forFeature([Item, Category])],
    controllers:[ItemsController],
    providers: [ItemsService],
})
export class ItemsModule {}
