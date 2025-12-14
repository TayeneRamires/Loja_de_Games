import { Module } from "@nestjs/common";
import { TypeOrmModule } from "@nestjs/typeorm";
import { ProdutoService } from "./services/produto.service";
import { Produto } from "./entities/produto.entity";
import { ProdutoController } from "./controller/produto.controller";
import { CategoriaModule } from "../categoria/categoria.module";


@Module({
    imports: [TypeOrmModule.forFeature([Produto]),
    CategoriaModule 
],
    controllers: [ProdutoController],
    providers: [ProdutoService],
    exports: [TypeOrmModule, ProdutoService]
})
export class ProdutoModule { }