<<<<<<< HEAD
import { IsEmail} from "class-validator";
import { Column, Entity, OneToOne, PrimaryColumn, PrimaryGeneratedColumn, JoinTable} from "typeorm";
import UserDetailsEntity from "./UserDetails"
@Entity("users")
export default class UsersEntity {

  @PrimaryColumn({select: false})
  @PrimaryGeneratedColumn()
// tslint:disable-next-line: variable-name
  public user_id: number = 0;

  @Column()
  public username: string = "";

  @Column()
  public enabled: boolean = false;

  @Column()
  @IsEmail()
  public email: string = "";

  @Column()
  public password: string = "";

  @Column()
  public salt: string = "";

  @Column()
// tslint:disable-next-line: variable-name
  public user_type: string = "";

  @Column()
  public verified: boolean = false;

  @Column()
  // tslint:disable-next-line: variable-name
  public last_login: Date = new Date();

}
=======
import { IsEmail} from "class-validator";
import { Column, Entity, OneToOne, PrimaryColumn, PrimaryGeneratedColumn, JoinTable} from "typeorm";
import UserDetailsEntity from "./UserDetails"
@Entity("users")
export default class UsersEntity {

  @PrimaryColumn({select: false})
  @PrimaryGeneratedColumn()
// tslint:disable-next-line: variable-name
  public user_id: number = 0;

  @Column()
  public username: string = "";

  @Column()
  public enabled: boolean = false;

  @Column()
  @IsEmail()
  public email: string = "";

  @Column()
  public password: string = "";

  @Column()
  public salt: string = "";

  @Column()
// tslint:disable-next-line: variable-name
  public user_type: string = "";

  @Column()
  public verified: boolean = false;

  @Column()
  // tslint:disable-next-line: variable-name
  public last_login: Date = new Date();

}
>>>>>>> master
