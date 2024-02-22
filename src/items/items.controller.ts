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
import { PaginationQueryDto } from 'src/common/dto/pagination-query.dto/pagination-query.dto';

@Controller('items')
export class ItemsController {
    constructor(private readonly itemsService: ItemsService) {}

    @Get()
    findAll(@Query() paginationQuery: PaginationQueryDto){
        return this.itemsService.findAll(paginationQuery);
    }

    @Get(':id')
    findOne(@Param('id') id: number){
        return this.itemsService.findOne(id);
    }

    @Post()
    create(@Body() createItemDto: CreateItemDto){
        return this.itemsService.create(createItemDto);
    }

    @Patch(':id')
    update(@Param('id') id: number, @Body() updateItemDto: UpdateItemDto){
        return this.itemsService.update(id, updateItemDto);
    }

    @Delete(':id')
    remove(@Param('id') id: number){
        return this.itemsService.remove(id);
    }

    
}
