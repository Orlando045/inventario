import { ApiProperty } from "@nestjs/swagger";
import { IsOptional, IsString } from "class-validator";

export class CreateMateriaPDto {

   
    @ApiProperty()
    nombre : string;

    @IsString()
    @IsOptional()
    @ApiProperty()
    description: string;

    @IsOptional()
    @ApiProperty()
    dateCreate: string;

    @IsOptional()
    @ApiProperty() 
    dateUpdate: string;
}
