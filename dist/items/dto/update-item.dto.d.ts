import { CreateItemDto } from './create-item.dto';
declare const UpdateItemDto_base: import("@nestjs/mapped-types").MappedType<Partial<CreateItemDto>>;
export declare class UpdateItemDto extends UpdateItemDto_base {
    readonly name?: string;
    readonly brand?: string;
    readonly categories?: string[];
}
export {};
