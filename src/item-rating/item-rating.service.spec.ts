import { Test, TestingModule } from '@nestjs/testing';
import { ItemRatingService } from './item-rating.service';

describe('ItemRatingService', () => {
  let service: ItemRatingService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [ItemRatingService],
    }).compile();

    service = module.get<ItemRatingService>(ItemRatingService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
