import { Description, Email, MinLength, Property, Required , Pattern} from "@tsed/schema";
import { IAdminUser } from "../../interface/IAdminUser";
export class OAuthDTO implements IAdminUser{@Property(String)
    @MinLength(2)
    @Required()
    @Description("User full Name")
    public name!: string;
    
    @Email()
    @Required()
    @Description("Email - Id required")
    public eMail!: string; 
    

}