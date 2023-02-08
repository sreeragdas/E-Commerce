import {Controller, Inject} from "@tsed/di";
import { BodyParams } from "@tsed/platform-params";
import {Get, Post} from "@tsed/schema";
import { LoginModel } from "src/models/LoginModel";
import { LoginService } from "src/services/LoginService";


interface login{
  username:string,
  password:string
}

@Controller("/login")

export class LoginController {
  constructor(@Inject(LoginService) private loginService : LoginService){}
  @Get("/")
  get() {
    return "hello";
  }

  @Post("/")
  postData(@BodyParams() body: login) : Promise <LoginModel> {
    return this.loginService.save(body)

  }
}
