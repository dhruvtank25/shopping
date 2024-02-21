import { 
    Body, 
    HttpException, 
    HttpStatus, 
    Injectable, 
    NotFoundException, 
    Param
} from '@nestjs/common';

import { Item } from './entities/items.entities';

@Injectable()
export class ItemsService {
    private items : Item[] = [
        {
            id:1,
            name: 'desktop',
            brand: 'Dell',
            categories: ['electronic', 'deigital']
        }
    ];



    findAll(){
       return this.items;
    }


    findOne(id: string){
        const item =  this.items.find(item => item.id === +id );
        if(!item){
            throw new NotFoundException(`item #${id} not found`);
        }
        return item;
    }

    create(createItemDto: any){
        this.items.push(createItemDto);
        return createItemDto;
    }


    update(id: string, updateItemDto : any){
        const exisitngItem = this.findOne(id)
        if(exisitngItem){

        }
    }

    remove(id: string){
        const itemIndex = this.items.findIndex(item => item.id === +id);
        if(itemIndex >= 0){
            this.items.splice(itemIndex, 1);
        }
    }

} 
