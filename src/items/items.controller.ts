import { 
    Controller, 
    Get, 
    Param,
    Post, 
    Body,
    Patch,
    Delete,
    Query
} from '@nestjs/common';
import { ItemsService } from './items.service';
import { CreateItemDto } from './dto/create-item.dto';
import { UpdateItemDto } from './dto/update-item.dto';

@Controller('items')
export class ItemsController {
    constructor(private readonly itemsService: ItemsService) {}

    @Get()
    findAll(@Query() paginationQuery){
        //const { limit, offset} = paginationQuery;
        return this.itemsService.findAll();
    }

    @Get(':id')
    findOne(@Param('id') id: string){
        return this.itemsService.findOne(id);
    }

    @Post()
    create(@Body() createItemDto: CreateItemDto){
        return this.itemsService.create(createItemDto);
    }

    @Patch(':id')
    update(@Param('id') id: string, @Body() updateItemDto: UpdateItemDto){
        return this.itemsService.update(id, updateItemDto);
    }

    @Delete(':id')
    remove(@Param('id') id: string){
        return this.itemsService.remove(id);
    }

    
}