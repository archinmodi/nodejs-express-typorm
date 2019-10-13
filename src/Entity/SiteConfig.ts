<<<<<<< HEAD
import { Column, Entity, PrimaryColumn, PrimaryGeneratedColumn} from "typeorm";

@Entity('site_config')
export default class SiteConfigEntity {

    @PrimaryGeneratedColumn()
    @PrimaryColumn({select: false})
    public id: number = 0;

    @Column()
    public name: string = "";

    @Column()
    public value: string = "";

=======
import { Column, Entity, PrimaryColumn, PrimaryGeneratedColumn} from "typeorm";

@Entity('site_config')
export default class SiteConfigEntity {

    @PrimaryGeneratedColumn()
    @PrimaryColumn({select: false})
    public id: number = 0;

    @Column()
    public name: string = "";

    @Column()
    public value: string = "";

>>>>>>> master
}