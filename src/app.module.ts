import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { AuthModule } from './modules/auth/auth.module';
import { UsersModule } from './modules/users/users.module';
import { DatabaseModule } from './database/database.module';
import { ConfigModule } from './config/config.module';
import { CategoriaModule } from './modules/categoria/categoria.module';
import { PedidoModule } from './modules/pedido/pedido.module';
import { ClienteModule } from './modules/cliente/cliente.module';
import { RoleModule } from './modules/role/role.module';
import { ProductoModule } from './modules/producto/producto.module';
import { PersonaModule } from './modules/persona/persona.module';
import { PersonaModule } from './modules/persona/persona.module';
import { CategoriaModule } from './modules/categoria/categoria.module';

@Module({
  imports: [AuthModule, UsersModule, DatabaseModule, ConfigModule, CategoriaModule, PersonaModule, ProductoModule, RoleModule, ClienteModule, PedidoModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
