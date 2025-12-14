import { Module } from "@nestjs/common";
import { TypeOrmModule } from "@nestjs/typeorm";
import { ProdutoService } from "./services/produto.service";
import { Produto } from "./entities/produto.entity";
import { ProdutoController } from "./controller/produto.controller";


@Module({
    imports: [TypeOrmModule.forFeature([Produto])],
    controllers: [ProdutoController],
    providers: [ProdutoService],
    exports: [TypeOrmModule]
})
export class ProdutoModule { }