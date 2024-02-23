import { MigrationInterface, QueryRunner } from "typeorm";

export class ItemRefactor1708702694927 implements MigrationInterface {

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(
            `ALTER TABLE "item" RENAME COLUMN "name" TO "title"`
        );
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(
            `ALTER TABLE "item" RENAME COLUMN "title" TO "name"`
        );
    }
}