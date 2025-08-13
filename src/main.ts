import { NestFactory } from '@nestjs/core';
import { AppModules } from './app.source'; 
import { UserService } from './services/user.service';
import { Gender } from './enums/Gender';
import { Role } from './enums/Roles';
import { Librarian } from './models/users/Librarian';

async function bootstrap() {
  const app = await NestFactory.create(AppModules);

  const port = process.env.PORT || 3000;
  await app.listen(port);

  console.log(`Server is running on http://localhost:${port}`);
}


bootstrap();