import { Module } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';
import { TypeOrmModule } from '@nestjs/typeorm';

@Module({
    imports:[
        ConfigModule.forRoot(),
        TypeOrmModule.forRoot({
            type:'postgres',
            host :'localhost',
            port: 5432,
            database : 'db-testing',
            username : 'postgres',
            password : '0510002n',
            autoLoadEntities: true,
            synchronize: true,



        })

    ],

    
})
export class BdModule {}
