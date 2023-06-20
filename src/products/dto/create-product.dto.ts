import { ApiProperty } from "@nestjs/swagger";
import { IsDate, IsDateString, IsIn, IsNumber, IsOptional, IsPositive, IsString, isIn, } from "class-validator";
import { Entity } from "typeorm";

export class CreateProductDto {
    @IsString()
    @ApiProperty()
    name: string;

    @ApiProperty()
    @IsIn(['en preceso', 'terminado'])
    estadoPedido: number;

    @ApiProperty()
    
    @IsDateString()
    fechaCreate: string;

    @ApiProperty()
   
    @IsDateString()
    fechaUpdate: string;

    // @ApiProperty()
    // @IsOptional()
    // stock: number;

    
    // @ApiProperty()
    // @IsOptional()
    // @IsIn(['Grande', 'mediano', 'chico'], {each : true})
    // sizes: string[];

    // @ApiProperty()
    // @IsOptional()
    // @IsIn(['masculino', 'femeninino'])
    // gender: string;
}
