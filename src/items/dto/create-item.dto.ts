import { IsString } from "class-validator";

export class CreateItemDto {
    @IsString()
    readonly name: string;

    @IsString()
    readonly brand: string;

    @IsString({ each: true })
    readonly categories: string[];
}
