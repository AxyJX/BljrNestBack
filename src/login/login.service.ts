import { Injectable } from "@nestjs/common";
import { userInfo } from "os";

@Injectable({})
export class LoginService  {
    login(){
        return 1+1
    }
}