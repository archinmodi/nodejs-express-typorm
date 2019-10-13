<<<<<<< HEAD

import { Column, Entity, PrimaryColumn } from "typeorm";
import UserEntity from "./User";

@Entity("user_details")
export default class UsersDetailsEntity {

   @PrimaryColumn()
// tslint:disable-next-line: variable-name
    public user_id: number = Number.NaN;

    @Column({nullable: true})
    public country: string = "";

    @Column({nullable: true})
    public city: string = "";

    @Column({nullable: true})
    public state: string = "";
}
=======

import { Column, Entity, PrimaryColumn } from "typeorm";
import UserEntity from "./User";

@Entity("user_details")
export default class UsersDetailsEntity {

   @PrimaryColumn()
// tslint:disable-next-line: variable-name
    public user_id: number = Number.NaN;

    @Column({nullable: true})
    public country: string = "";

    @Column({nullable: true})
    public city: string = "";

    @Column({nullable: true})
    public state: string = "";
}
>>>>>>> master
