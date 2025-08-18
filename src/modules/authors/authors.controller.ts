import {Body, Controller, Delete, Get, Param, Patch, Post} from "@nestjs/common";
import { AuthorsService } from "./authors.service";
import { CreateAuthorDto } from "./dto/create-author.dto";
import { UpdateAuthorDto } from "./dto/update-author.dto";

@Controller('authors')
export class AuthorController {
    constructor(private readonly svc: AuthorsService){}
    @Post()
    create(@Body() dto: CreateAuthorDto) {
        return this.svc.create(dto);
    }

    @Get()
    findAll() {
        return this.svc.findAll();
    }

    @Get(':id')
    findOne(@Param('id') id: string) {
        return this.svc.findOne(id);
    }

    @Patch(':id')
    update(@Param('id') id: string, @Body() dto: UpdateAuthorDto){
        return this.svc.update(id, dto);
    }
    @Delete(':id')
    remove(@Param('id') id: string) {
        return this.svc.remove(id);
    }
}