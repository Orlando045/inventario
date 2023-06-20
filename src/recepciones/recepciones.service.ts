import { Injectable, Logger } from '@nestjs/common';
import { CreateRecepcioneDto } from './dto/create-recepcione.dto';
import { UpdateRecepcioneDto } from './dto/update-recepcione.dto';
import { Recepcione } from './entities/recepcione.entity';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { isUUID } from 'class-validator';
import { error } from 'console';

@Injectable()
export class RecepcionesService {

  private readonly logger = new Logger(RecepcionesService.name);
  constructor(
    @InjectRepository(Recepcione)
    private recepcionrepository: Repository<Recepcione>,
  ) { }

  create(createRecepcioneDto: CreateRecepcioneDto): Promise<Recepcione> {
    const newrecepcion = this.recepcionrepository.create(createRecepcioneDto)
    return this.recepcionrepository.save(newrecepcion)
  }

  async findAll(): Promise<Recepcione[]> {
    return await this.recepcionrepository.find()
  }

  async findOne(id: string) {
   let recepciones: Recepcione
   if(isUUID(id)){
    recepciones = await this.recepcionrepository.findOne({where : {id : id }})
   }
   if(!recepciones){
    throw new Error('no existe en la base de datos')
   }
   return recepciones;
    
  }

  update(id: number, updateRecepcioneDto: UpdateRecepcioneDto) {
    return `This action updates a #${id} recepcione`;
  }

  remove(id: number) {
    return `This action removes a #${id} recepcione`;
  }
}
