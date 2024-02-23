import { Module } from '@nestjs/common';
import { ItemsController } from './items.controller';
import { ItemsService } from './items.service';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Item } from './entities/items.entities';
import { Category } from './entities/category.entity';
import { Event } from 'src/events/entities/event.entity/event.entity';

@Module({
    imports:[TypeOrmModule.forFeature([Item, Category, Event])],
    controllers:[ItemsController],
    providers: [ItemsService],
    exports:[ItemsService]
})
export class ItemsModule {}
