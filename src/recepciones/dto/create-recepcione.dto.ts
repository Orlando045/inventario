import { ApiProperty } from "@nestjs/swagger"
import { IsOptional } from "class-validator"

export class CreateRecepcioneDto {

    
   

    @IsOptional()
    @ApiProperty()
    folio: string

    @IsOptional()
    @ApiProperty()
    estado_pedido_: string

    @IsOptional()
    @ApiProperty()
    date_llegada: string

    @IsOptional()
    @ApiProperty()
    date_create: string

    @IsOptional()
    @ApiProperty()
    date_update: string
}
