import { Controller } from "@nestjs/common";
import { AuthService } from "./auth.service";
import { Post } from "@nestjs/common";

@Controller('auth')
export class AuthController{
    constructor (private authService : AuthService) {}

    @Post('Login')
    login(){
        return this.authService.login()
    }
}