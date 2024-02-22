import { Column, Entity, JoinTable, ManyToMany, PrimaryGeneratedColumn } from "typeorm";
import { Item } from "./items.entities";


@Entity()
export class Category{

    @PrimaryGeneratedColumn()
    id: number;

    @Column()
    name :string;

    @ManyToMany(
        type=> Item,
        item=>item.categories
    )
    items: Item[];
    
}
