/* eslint-disable prettier/prettier */
import { PartialType } from "@nestjs/mapped-types";
import { UserPost } from "./post-user.dto";

export class UserPut extends PartialType(UserPost) {

}