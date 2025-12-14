import { IsNotEmpty, IsNumber, IsPositive } from "class-validator";
import { Column, CreateDateColumn, Entity, ManyToOne, PrimaryGeneratedColumn, UpdateDateColumn } from "typeorm"
import { Categoria } from "../../categoria/entities/categoria.entity";


@Entity({ name: "tb_jogos" })  
export class Produto {

    @PrimaryGeneratedColumn()   
    id: number;

    @IsNotEmpty()
    @Column({ length:100, nullable: false })
    nome: string;

    @IsNotEmpty()  
    @Column({ length: 100, nullable: false })   
    descricao: string;
    
    @IsNumber()
    @IsPositive()
    @Column({ type: 'decimal', precision: 10, scale: 2, nullable: false })
    preco: number;

    @CreateDateColumn()
    dataCriacao: Date;

    @UpdateDateColumn()
    dataAtualizacao: Date;

    @ManyToOne(() => Categoria, (categoria) => categoria.produto, {
        onDelete: "CASCADE"
    })
    categoria: Categoria

}