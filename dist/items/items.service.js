"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.ItemsService = void 0;
const common_1 = require("@nestjs/common");
const items_entities_1 = require("./entities/items.entities");
const typeorm_1 = require("@nestjs/typeorm");
const typeorm_2 = require("typeorm");
const category_entity_1 = require("./entities/category.entity");
let ItemsService = class ItemsService {
    constructor(itemRepository, categoryRepository) {
        this.itemRepository = itemRepository;
        this.categoryRepository = categoryRepository;
    }
    ;
    findAll(paginationQuery) {
        const { limit, offset } = paginationQuery;
        return this.itemRepository.find({
            relations: ['categories'],
            skip: offset,
            take: limit,
        });
    }
    async findOne(id) {
        const item = await this.itemRepository.findOne({ where: { id: id }, relations: ['categories'] });
        if (!item) {
            throw new common_1.NotFoundException(`item #${id} not found`);
        }
        return item;
    }
    async create(createItemDto) {
        const categories = await Promise.all(createItemDto.categories.map(name => this.preloadCategoryByName(name)));
        const item = this.itemRepository.create({
            ...createItemDto,
            categories,
        });
        return this.itemRepository.save(item);
    }
    async update(id, updateItemDto) {
        const categories = updateItemDto.categories && (await Promise.all(updateItemDto.categories.map(name => this.preloadCategoryByName(name))));
        const item = await this.itemRepository.preload({
            id: +id,
            ...updateItemDto,
            categories,
        });
        if (!item) {
            throw new common_1.NotFoundException(`item #${id} not found`);
        }
        return this.itemRepository.save(item);
    }
    async remove(id) {
        const item = await this.findOne(id);
        return this.itemRepository.remove(item);
    }
    async preloadCategoryByName(name) {
        const existingCatgory = await this.categoryRepository.findOne({ where: { name: name } });
        if (existingCatgory) {
            return existingCatgory;
        }
        return this.categoryRepository.create({ name });
    }
};
exports.ItemsService = ItemsService;
exports.ItemsService = ItemsService = __decorate([
    (0, common_1.Injectable)(),
    __param(0, (0, typeorm_1.InjectRepository)(items_entities_1.Item)),
    __param(1, (0, typeorm_1.InjectRepository)(category_entity_1.Category)),
    __metadata("design:paramtypes", [typeorm_2.Repository,
        typeorm_2.Repository])
], ItemsService);
//# sourceMappingURL=items.service.js.map