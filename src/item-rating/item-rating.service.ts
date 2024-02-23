import { Injectable } from '@nestjs/common';
import { ItemsService } from 'src/items/items.service';

@Injectable()
export class ItemRatingService {
    constructor(private readonly itemService: ItemsService) {}
}
