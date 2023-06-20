import { ApiProperty } from "@nestjs/swagger"
import { IsString, IsStrongPassword } from "class-validator";

export class CreateUserDto {



    @ApiProperty()
    name: string

    @ApiProperty()
    age: string

    @IsString()
    @IsStrongPassword({ minLength: 8, minLowercase: 1, minUppercase: 1, minNumbers: 1, minSymbols: 1 })
    @ApiProperty()
    password: string;
}
