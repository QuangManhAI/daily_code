import { Injectable, NotFoundException } from "@nestjs/common";
import { Author } from "../../models/author.schema";
import { CreateAuthorDto } from "./dto/create-author.dto";
import { UpdateAuthorDto } from "./dto/update-author.dto";
import { AUTHOR_REPO, IAuthorRepository } from "./ports/author.repository";
import { Inject } from "@nestjs/common";

@Injectable()
export class AuthorsService {
  constructor(
    @Inject(AUTHOR_REPO) private readonly repo: IAuthorRepository,
  ) {}

create(dto: CreateAuthorDto) {
  const payload: Partial<Author> = {
    name: dto.name,
    ...(dto.biography ? { biography: dto.biography } : {}),
    ...(dto.nationality ? { nationality: dto.nationality } : {}),
    ...(dto.genres ? { genres: dto.genres } : {}),
    ...(dto.awards ? { awards: dto.awards } : {}),
    ...(dto.birthDate ? { birthDate: new Date(dto.birthDate) } : {}),
    ...(dto.deathDate ? { deathDate: new Date(dto.deathDate) } : {}),
  };
  return this.repo.create(payload);
}

  findAll() {
    return this.repo.findAll();
  }

  async findOne(id: string) {
    const doc = await this.repo.findById(id);
    if (!doc) throw new NotFoundException("Not found author");
    return doc;
  }

async update(id: string, dto: UpdateAuthorDto) {
  const payload: Partial<Author> = {
    ...(dto.name ? { name: dto.name } : {}),
    ...(dto.biography ? { biography: dto.biography } : {}),
    ...(dto.nationality ? { nationality: dto.nationality } : {}),
    ...(dto.genres ? { genres: dto.genres } : {}),
    ...(dto.awards ? { awards: dto.awards } : {}),
    ...(dto.birthDate ? { birthDate: new Date(dto.birthDate) } : {}),
    ...(dto.deathDate ? { deathDate: new Date(dto.deathDate) } : {}),
  };

  const doc = await this.repo.updateById(id, payload);
  if (!doc) throw new NotFoundException("Not found author");
  return doc;
}

  async remove(id: string) {
    const ok = await this.repo.deleteById(id);
    if (!ok) throw new NotFoundException("Not found author");
    return { deleted: true };
  }
}