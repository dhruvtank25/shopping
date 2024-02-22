import { 
    Injectable, 
    NotFoundException
} from '@nestjs/common';

import { Item } from './entities/items.entities';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { UpdateItemDto } from './dto/update-item.dto';
import { CreateItemDto } from './dto/create-item.dto';
import { Category } from './entities/category.entity';
import { PaginationQueryDto } from 'src/common/dto/pagination-query.dto/pagination-query.dto';

@Injectable()
export class ItemsService {

    constructor(
        @InjectRepository(Item)
        private readonly itemRepository: Repository<Item>,
        
        @InjectRepository(Category)
        private readonly categoryRepository: Repository<Category>,
    ) {};


    findAll(paginationQuery: PaginationQueryDto){
        const { limit, offset} = paginationQuery;
        return this.itemRepository.find({
            relations:['categories'],
            skip:offset,
            take:limit,
        });
    }


    async findOne(id: number){
        const item =  await this.itemRepository.findOne({where : {id: id}, relations: ['categories']});
        if(!item){
            throw new NotFoundException(`item #${id} not found`);
        }
        return item;
    }

    async create(createItemDto: CreateItemDto){
        const categories = await Promise.all(
            createItemDto.categories.map(name => this.preloadCategoryByName(name)),
        );
        const item = this.itemRepository.create({ 
            ...createItemDto, 
            categories,
        });
        return this.itemRepository.save(item);
    }


    async update(id: number, updateItemDto : UpdateItemDto){
        const categories =  updateItemDto.categories && (await Promise.all(
            updateItemDto.categories.map(name => this.preloadCategoryByName(name)),
        ));
        const item = await this.itemRepository.preload({ 
            id: +id,
            ...updateItemDto, 
            categories,
        });
        if(!item){
            throw new NotFoundException(`item #${id} not found`);
        }
        return this.itemRepository.save(item);
    }

    async remove(id: number){
        const item = await this.findOne(id);
        return this.itemRepository.remove(item);
    }

    private async preloadCategoryByName(name:string): Promise<Category> {
        const existingCatgory= await this.categoryRepository.findOne({ where: {name : name} });
        if (existingCatgory){
            return existingCatgory;
        }
        return this.categoryRepository.create({name});
    }

} 
