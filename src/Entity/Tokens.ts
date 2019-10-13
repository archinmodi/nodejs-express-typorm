import { Validate ,IsEmail} from 'class-validator';
import { AfterInsert, Column, Entity,PrimaryColumn, PrimaryGeneratedColumn} from 'typeorm';

@Entity('user_tokens')
export default class TokensEntity {
   
    @PrimaryGeneratedColumn()
    @PrimaryColumn({select: false})
    public token_id: number = 0;

    @Column()
    public token: string = '';

    @Column()
    public expired_date: Date =new Date();

    @Column()
    public access_type:string='';

}