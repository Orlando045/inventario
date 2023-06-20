import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { UsersService } from './users.service';
import { CreateUserDto } from './dto/create-user.dto';
import { UpdateUserDto } from './dto/update-user.dto';
import { ApiTags } from '@nestjs/swagger';

@Controller('users')
@ApiTags( 'USER')
export class UsersController {
  authService: any;
  constructor(private readonly usersService: UsersService) {}

  @Post()
  create(@Body() createUserDto: CreateUserDto) {
    return this.usersService.create(createUserDto);
  }

  @Get()
  findAll() {
    return this.usersService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.usersService.findOne(id);
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() updateUserDto: UpdateUserDto) {
    return this.usersService.update(+id, updateUserDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.usersService.remove(+id);
  }
  // @Post('register')
  // async registerUser(@Body() createUserDto: CreateUserDto) {
  //   const { password } = createUserDto;
  //   const hashedPassword = await this.authService.hashPassword(password);
  //   // Guardar hashedPassword en la base de datos
  // }

  // @Post('login')
  // async loginUser(@Body() loginUserDto: LoginUserDto) {
  //   const { email, password } = loginUserDto;
  //   // Obtener hashedPassword de la base de datos para el usuario correspondiente
  //   const isValidPassword = await this.authService.comparePasswords(password, hashedPassword);
  //   if (isValidPassword) {
  //     // Contraseña válida, generar token de autenticación
  //   } else {
  //     // Contraseña inválida, mostrar mensaje de error
  //   }
  // }
}
