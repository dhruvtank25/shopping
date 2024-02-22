import { Item } from './entities/items.entities';
import { Repository } from 'typeorm';
import { UpdateItemDto } from './dto/update-item.dto';
import { CreateItemDto } from './dto/create-item.dto';
import { Category } from './entities/category.entity';
import { PaginationQueryDto } from 'src/common/dto/pagination-query.dto/pagination-query.dto';
export declare class ItemsService {
    private readonly itemRepository;
    private readonly categoryRepository;
    constructor(itemRepository: Repository<Item>, categoryRepository: Repository<Category>);
    findAll(paginationQuery: PaginationQueryDto): Promise<Item[]>;
    findOne(id: number): Promise<Item>;
    create(createItemDto: CreateItemDto): Promise<Item>;
    update(id: number, updateItemDto: UpdateItemDto): Promise<Item>;
    remove(id: number): Promise<Item>;
    private preloadCategoryByName;
}
