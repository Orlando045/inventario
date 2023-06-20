import { Injectable, Logger } from '@nestjs/common';
import { CreateMateriaPDto } from './dto/create-materia_p.dto';
import { UpdateMateriaPDto } from './dto/update-materia_p.dto';
import { MateriaP } from './entities/materia_p.entity';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { isUUID } from 'class-validator';


@Injectable()
export class MateriaPService {

  private readonly logger = new Logger(MateriaPService.name);

  createMateria(crearmateriapdto: CreateMateriaPDto): Promise<MateriaP> {
    const newmateria = this.materiaprepository.create(crearmateriapdto)
    return this.materiaprepository.save(newmateria)
  }

  constructor(
    @InjectRepository(MateriaP)
    private materiaprepository: Repository<MateriaP>,
  ) { }
  //
  async findAll(): Promise<MateriaP[]> {
    return await this.materiaprepository.find();
  }

  async findOne(id: string) {
  let materiap : MateriaP
  if(isUUID(id)){
    materiap = await this.materiaprepository.findOne( {where : {id : id}})
  }
  if(!materiap){
    throw new Error('no se encontró nada')
  }
return materiap;

  }

  async update(id: string, updateMateriaPDto: UpdateMateriaPDto) {
    console.log(id)
    const materia_p : MateriaP = await this.materiaprepository.findOne({ where: { id: id } });
    if (!materia_p) {
      throw new Error('Este producto no existe')
    }

    console.log(JSON.stringify(materia_p))

    const temp = Object.assign(materia_p, updateMateriaPDto)
    // this.productRepository.merge(product, updateProductDto)
    let resp;
    try {
      resp = await this.materiaprepository.save(temp);
    } catch (error) {
      console.log(error)
    }

    return resp;
    }  

  remove(id: number) {
    return `This action removes a #${id} materiaP`;
  }
}
