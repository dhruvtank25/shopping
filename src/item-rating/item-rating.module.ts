import { Module } from '@nestjs/common';
import { ItemRatingService } from './item-rating.service';
import { ItemsModule } from 'src/items/items.module';

@Module({
  imports: [ItemsModule],
  providers: [ItemRatingService]
})
export class ItemRatingModule {}
