/* eslint-disable prettier/prettier */
import { IsEmail, IsOptional, IsString } from 'class-validator';

export class UserPost {
    @IsString({
        message: 'You must add a name'
    })
    public name: string;
    @IsString({
        message: 'You must add a middle name'
    })
    public middleName: string;
    @IsString({
        message: 'You must add a last name'
    })
    public lastName: string;
    @IsEmail({
        message: 'You must add a validate email'
    })
    public email: string;
    @IsString({
        message: 'You must add a secure password'
    })
    public password: string;
    @IsOptional()
    public birthday?: Date;
}