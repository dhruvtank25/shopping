import { ItemsService } from './items.service';
import { CreateItemDto } from './dto/create-item.dto';
import { UpdateItemDto } from './dto/update-item.dto';
import { PaginationQueryDto } from 'src/common/dto/pagination-query.dto/pagination-query.dto';
export declare class ItemsController {
    private readonly itemsService;
    constructor(itemsService: ItemsService);
    findAll(paginationQuery: PaginationQueryDto): Promise<import("./entities/items.entities").Item[]>;
    findOne(id: number): Promise<import("./entities/items.entities").Item>;
    create(createItemDto: CreateItemDto): Promise<import("./entities/items.entities").Item>;
    update(id: number, updateItemDto: UpdateItemDto): Promise<import("./entities/items.entities").Item>;
    remove(id: number): Promise<import("./entities/items.entities").Item>;
}
