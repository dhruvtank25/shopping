import { Column, Entity, JoinTable, ManyToMany, PrimaryGeneratedColumn } from "typeorm";
import { Category } from "./category.entity";

@Entity() //sql table === 'item'
export class Item {
    @PrimaryGeneratedColumn()
    id: number;

    @Column()
    name: string;

    @Column()
    brand: string;

    @JoinTable()
    @ManyToMany(
        type=> Category, 
        (category)=> category.items,
        {
            cascade: true,//['insert']
        }
    )
    categories: Category[];


}