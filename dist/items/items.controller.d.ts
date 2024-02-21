import { ItemsService } from './items.service';
import { CreateItemDto } from './dto/create-item.dto';
import { UpdateItemDto } from './dto/update-item.dto';
export declare class ItemsController {
    private readonly itemsService;
    constructor(itemsService: ItemsService);
    findAll(paginationQuery: any): import("./entities/items.entities").Item[];
    findOne(id: string): import("./entities/items.entities").Item;
    create(createItemDto: CreateItemDto): any;
    update(id: string, updateItemDto: UpdateItemDto): void;
    remove(id: string): void;
}
