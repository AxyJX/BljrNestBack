import { Controller } from "@nestjs/common";
import { LoginService } from "./login.service";
import { Post } from "@nestjs/common";

@Controller()
export class LoginController{
    constructor (private loginService : LoginService) {}

    @Post('Login')
    login(){
        return this.loginService.login()
    }
}