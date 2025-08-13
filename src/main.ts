// main.ts

import { NestFactory } from '@nestjs/core';
import { AppModules } from './app.source'; 
import { UserService } from './services/user.service';
import { Gender } from './enums/Gender';
import { Role } from './enums/Roles';
import { Librarian } from './models/users/Librarian';

async function bootstrap() {
  // tạo app từ appmodules gốc
  const app = await NestFactory.create(AppModules);
  // thiết lập cổng
  const port = process.env.PORT || 3000;
  await app.listen(port);

  const userService = app.get(UserService);
  // tạo một đối tượng librarian
  const librarian = new Librarian(
    'lib001',          
    'Nhu Pham Quang Manh', 
    19,                   
    Role.LIBRARIAN,     
    Gender.Male,           
    '69/1/28 D2',   
    'py.quangmanh.ai@gmail.com'
  );

  
  // thêm đối tượng vừa tạo vào atlas mongodb
  await userService.create(librarian);


  // tạm thời dùng local
  console.log(`http://localhost:${port}`);
}


bootstrap();