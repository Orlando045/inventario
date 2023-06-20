import {  Module } from '@nestjs/common';
import { BdModule } from './bd/bd.module';
import { ProductsModule } from './products/products.module';
import { InventarioModule } from './inventario/inventario.module';
import { PedidosModule } from './pedidos/pedidos.module';
import { MateriaPModule } from './materia_p/materia_p.module';
import { RecepcionesModule } from './recepciones/recepciones.module';
import { AnaquelesModule } from './anaqueles/anaqueles.module';
import { AlmacenesModule } from './almacenes/almacenes.module';
import { RecetasModule } from './recetas/recetas.module';
import { FabPedidosModule } from './fab-pedidos/fab-pedidos.module';
import { MPrimaReqModule } from './m-prima-req/m-prima-req.module';
import { MPrimaUModule } from './m-prima-u/m-prima-u.module';
import { UsersModule } from './users/users.module';


@Module({
  imports: [BdModule, ProductsModule, PedidosModule, MateriaPModule, RecepcionesModule, AnaquelesModule, AlmacenesModule, RecetasModule, FabPedidosModule, MPrimaReqModule, MPrimaUModule, UsersModule, ],
  controllers: [],
  providers: [],

})

export class AppModule { 
  
}

//basura
// UsersModule,
//     TypeOrmModule.forRoot({
//       type: 'mysql',
//       host: 'localhost',
//       port: '3306',
//       username: '',
//       password:'',
//    }),