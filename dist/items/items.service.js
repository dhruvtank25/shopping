"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.ItemsService = void 0;
const common_1 = require("@nestjs/common");
let ItemsService = class ItemsService {
    constructor() {
        this.items = [
            {
                id: 1,
                name: 'desktop',
                brand: 'Dell',
                categories: ['electronic', 'deigital']
            }
        ];
    }
    findAll() {
        return this.items;
    }
    findOne(id) {
        const item = this.items.find(item => item.id === +id);
        if (!item) {
            throw new common_1.NotFoundException(`item #${id} not found`);
        }
        return item;
    }
    create(createItemDto) {
        this.items.push(createItemDto);
        return createItemDto;
    }
    update(id, updateItemDto) {
        const exisitngItem = this.findOne(id);
        if (exisitngItem) {
        }
    }
    remove(id) {
        const itemIndex = this.items.findIndex(item => item.id === +id);
        if (itemIndex >= 0) {
            this.items.splice(itemIndex, 1);
        }
    }
};
exports.ItemsService = ItemsService;
exports.ItemsService = ItemsService = __decorate([
    (0, common_1.Injectable)()
], ItemsService);
//# sourceMappingURL=items.service.js.map