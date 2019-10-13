<<<<<<< HEAD
import { IsEmail , Validate} from "class-validator";
import { AfterInsert, Column, Entity, JoinTable, OneToOne, PrimaryColumn, PrimaryGeneratedColumn} from "typeorm";
import ProductsEntity from "./Products";

@Entity("products_details")
export default class ProductsDetailsEntity {

    @PrimaryGeneratedColumn()
    @PrimaryColumn({select: false})
    // tslint:disable-next-line: variable-name
    public id: number = NaN;

    @Column()
    // tslint:disable-next-line: variable-name
    public category: string = "";

    @Column()
    // tslint:disable-next-line: variable-name
    public tags: string = "";

    @OneToOne(type => ProductsEntity)
    @JoinTable({ 
    name: "productid",
    joinColumn: {
        name: "products",
        referencedColumnName: "productid"
    },})
    public productsdetails: ProductsEntity | undefined;

}
=======
import { IsEmail , Validate} from "class-validator";
import { AfterInsert, Column, Entity, JoinTable, OneToOne, PrimaryColumn, PrimaryGeneratedColumn} from "typeorm";
import ProductsEntity from "./Products";

@Entity("products_details")
export default class ProductsDetailsEntity {

    @PrimaryGeneratedColumn()
    @PrimaryColumn({select: false})
    // tslint:disable-next-line: variable-name
    public id: number = NaN;

    @Column()
    // tslint:disable-next-line: variable-name
    public category: string = "";

    @Column()
    // tslint:disable-next-line: variable-name
    public tags: string = "";

    @OneToOne(type => ProductsEntity)
    @JoinTable({ 
    name: "productid",
    joinColumn: {
        name: "products",
        referencedColumnName: "productid"
    },})
    public productsdetails: ProductsEntity | undefined;

}
>>>>>>> master
