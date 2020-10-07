import { Column, Entity, PrimaryGeneratedColumn } from "typeorm/index";

@Entity()
export class Foo {
    @PrimaryGeneratedColumn()
    id!: number;

    @Column()
    bar!: string;
}