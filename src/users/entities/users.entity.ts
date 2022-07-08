/* eslint-disable prettier/prettier */

import { Column, CreateDateColumn, Entity, PrimaryGeneratedColumn } from "typeorm";

@Entity('user')
export class User {
    @PrimaryGeneratedColumn()
    id: number;
    @Column({ type: 'nvarchar', length: 500, unique: true })
    name!: string;
    @Column({ type: 'nvarchar', length: 500 })
    middleName!: string;
    @Column({ type: 'nvarchar', length: 500 })
    lastName!: string;
    @Column({ type: 'nvarchar', length: 500, unique: true })
    email!: string;
    @Column({ type: 'nvarchar', length: 500 })
    password!: string;
    @Column({ type: 'nvarchar', length: 500, nullable: true })
    birthday?: Date;
    @CreateDateColumn({ type: 'timestamp' })
    lastUpdate: Date;
}