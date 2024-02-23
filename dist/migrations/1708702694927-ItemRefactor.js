"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ItemRefactor1708702694927 = void 0;
class ItemRefactor1708702694927 {
    async up(queryRunner) {
        await queryRunner.query(`ALTER TABLE "item" RENAME COLUMN "name" TO "title"`);
    }
    async down(queryRunner) {
        await queryRunner.query(`ALTER TABLE "item" RENAME COLUMN "title" TO "name"`);
    }
}
exports.ItemRefactor1708702694927 = ItemRefactor1708702694927;
//# sourceMappingURL=1708702694927-ItemRefactor.js.map