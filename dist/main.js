"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const core_1 = require("@nestjs/core");
const app_source_1 = require("./app.source");
const user_service_1 = require("./services/user.service");
const Gender_1 = require("./enums/Gender");
const Librarian_1 = require("./models/users/Librarian");
async function bootstrap() {
    const app = await core_1.NestFactory.create(app_source_1.AppModules);
    const port = process.env.PORT || 3000;
    await app.listen(port);
    console.log(`Server is running on http://localhost:${port}`);
    const userService = app.get(user_service_1.UserService);
    const newUser = new Librarian_1.Librarian('some-id', 'Nhu Pham Quang Manh', 24, Gender_1.Gender.Male, '69/1/28/ D2', 'py.quangmanh.ai@gmail.com');
    await userService.create(newUser);
}
bootstrap();
//# sourceMappingURL=main.js.map