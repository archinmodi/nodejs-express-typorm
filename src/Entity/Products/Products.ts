import { IsEmail , Validate} from "class-validator";
import { AfterInsert, Column, Entity, PrimaryColumn, PrimaryGeneratedColumn} from "typeorm";

@Entity("products")
export default class ProductsEntity {

    @PrimaryGeneratedColumn()
    @PrimaryColumn({select: false})
    // tslint:disable-next-line: variable-name
    public product_id: number = NaN;

    @Column()
    // tslint:disable-next-line: variable-name
    public product_name: string = "";

    @Column()
    // tslint:disable-next-line: variable-name
    public product_body: string = "";

}
