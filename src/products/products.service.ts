import { Injectable, Logger, NotFoundException } from '@nestjs/common';
import { CreateProductDto } from './dto/create-product.dto';
import { UpdateProductDto } from './dto/update-product.dto';
import { InjectRepository } from '@nestjs/typeorm';
import { Product } from './entities/product.entity';
import { Repository } from 'typeorm';
import { isUUID } from 'class-validator';

@Injectable()
export class ProductsService {
  private readonly logger = new Logger(ProductsService.name);

  createProduct(createProductDto: CreateProductDto): Promise<Product> {
    const newProduct = this.productRepository.create(createProductDto)
    return this.productRepository.save(newProduct)
  }

  constructor(
    @InjectRepository(Product)
    private productRepository: Repository<Product>,
  ) { }


  async findAll(): Promise<Product[]> {
    return await this.productRepository.find({ where: { deleted: false } });
  }

  async updateProduct(id: string, updateProductDto: UpdateProductDto) {
    console.log(id)
    const product: Product = await this.productRepository.findOne({ where: { id: id } });
    if (!product) {
      throw new Error('Este producto no existe')
    }

    console.log(JSON.stringify(product))

    const temp = Object.assign(product, updateProductDto)
    // this.productRepository.merge(product, updateProductDto)
    let resp;
    try {
      resp = await this.productRepository.save(temp);
    } catch (error) {
      console.log(error)
    }

    return resp;

  }

  async findOne(term: string) {

    let product: Product;
    if (isUUID(term)) {
      const product = await this.productRepository.findOne({ where: { id: term, deleted: false } });
    }
    //  const queryBuilder = this.productRepository.createQueryBuilder();
    //  product  = await queryBuilder
    //  .where ('name = : name', {
    //   name : term,
    //  }).getOne


    if (!product) {
      throw new NotFoundException('Este producto no existe')
    }

    return product;
  }

  async remove(id: string) {
    const producto = await this.productRepository.findOne({ where: { id: id } });
    producto.deleted = true
    const result = this.productRepository.save(producto)
    console.log('se ha borrado' + JSON.stringify(result))
    return {
      msj: 'Registro eliminado',
      status: true
    }
  }
}
// updateProduct(id: string, updateProductDto: UpdateProductDto) {
  //   return this.productRepository.findOneAndUpdate(id, updateProductDto); // Implementa la lógica de actualización aquí
  // }
