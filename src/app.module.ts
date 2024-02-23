import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { ItemsModule } from './items/items.module';
import { TypeOrmModule } from '@nestjs/typeorm';
import { ItemRatingModule } from './item-rating/item-rating.module';

@Module({
  imports: [
    ItemsModule,
    TypeOrmModule.forRoot({
      type: 'postgres',
      host: 'localhost',
      port: 5432,
      username: 'public_user',
      password: 'pass123',
      database: 'shopping',
      autoLoadEntities: true,
      synchronize: true, // disable it when you are in production environment

    }),
    ItemRatingModule,
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
