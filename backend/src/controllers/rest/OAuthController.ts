import {Controller, Inject} from "@tsed/di";

import { LoginModel } from "src/models/LoginModel";
import { LoginService } from "src/services/LoginService";
import {OAuthDTO} from '../../../dtos/input/OAuthDTO'
import { BodyParams } from "@tsed/platform-params";
import {Get, Post} from "@tsed/schema";
@Controller("/o-auth")
export class OAuthController {
  constructor(@Inject(LoginService) private loginService : LoginService){}
  @Get("/")
  get() {
    return "hello";
  }

  @Post("/")
  postData(@BodyParams(OAuthDTO) body: OAuthDTO) : Promise <LoginModel> {
    return this.loginService.saveAuth(body)

  }
}
