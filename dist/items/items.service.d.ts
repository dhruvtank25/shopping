import { Item } from './entities/items.entities';
export declare class ItemsService {
    private items;
    findAll(): Item[];
    findOne(id: string): Item;
    create(createItemDto: any): any;
    update(id: string, updateItemDto: any): void;
    remove(id: string): void;
}
