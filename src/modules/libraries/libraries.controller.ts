import {Body, Controller, Delete, Get, Param, Patch, Post} from '@nestjs/common';
import { LibrariesService } from './libraries.service';
import { CreateLibraryDto } from './dto/create-library.dto';
import { UpdateLibraryDto } from './dto/update-library.dto';

@Controller('libraries')
export class LibrariesController {
    constructor(private readonly svc: LibrariesService) {}

    @Post()
    create(@Body() dto: CreateLibraryDto) {
        return this.svc.create(dto);
    }

    @Get()
    findAll(){
        return this.svc.findAll();
    }

    @Get(':id')
    findOne(@Param('id') id: string) {
        return this.svc.findOne(id);
    }

    @Patch(':id')
    update(@Param('id') id: string, @Body() dto: UpdateLibraryDto) {
        return this.svc.update(id, dto);
    }

    @Delete(':id')
    remove(@Param('id') id: string) {
        return this.svc.remove(id);
    }
}