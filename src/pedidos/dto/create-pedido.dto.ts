import { ApiProperty } from "@nestjs/swagger";
import { IsNumber, IsOptional, IsPositive, IsString } from "class-validator";

export class CreatePedidoDto {
   
    
 
    @IsString()
    @ApiProperty()
    @IsOptional()
    folio:string
    
    
    @IsOptional()
    @ApiProperty()
    protocolo: string

    
    @ApiProperty()
    @IsOptional()
    @IsNumber()
    @IsPositive({ each: true })
    cantidad: number;
    
    @IsOptional()
    @ApiProperty()
    datecreate: string
    
  
    @IsOptional()
    @ApiProperty()
    dateupdate: string

    
    }

