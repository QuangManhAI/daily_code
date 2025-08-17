import {Body, Controller, Delete, Get, Param, Patch, Post}  from "@nestjs/common";
import { BooksService } from "./books.service"; 
import { CreateBookDto } from "./dto/create-book.dto";
import { UpdateBookDto } from "./dto/update-book.dto";

@Controller('books')
export class BooksController {
    constructor(private readonly svc: BooksService) {}

    @Post()
    create(@Body() dto: CreateBookDto) {
        return this.svc.create(dto);
    }

    @Get()
    findALl() {
        return this.svc.findAll();
    }

    @Get(':id')
    findOne(@Param('id') id: string) {
        return this.svc.findOne(id);
    }

    @Patch(':id')
    update(@Param('id') id: string, @Body() dto: UpdateBookDto) {
        return this.svc.update(id, dto);
    }

    @Delete(':id')
    remove(@Param('id') id: string) {
        return this.svc.remove(id);
    }
}