import { Category } from "./category.entity";
export declare class Item {
    id: number;
    name: string;
    brand: string;
    recommendation: number;
    categories: Category[];
}
