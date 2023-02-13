import { Description, Email, MinLength, Property, Required , Pattern} from "@tsed/schema";
import { IAdminUser } from "../../interface/IAdminUser";



export class AdminUserDTO implements IAdminUser{
@Property(String)
@MinLength(2)
@Required()
@Description("User full Name")
public name!: string;

@Email()
@Required()
@Description("Email - Id required")
public eMail!: string; 

@Property(String)
// @Pattern(/^(?=.*[A-Za-z])(?=.*\d)(?=.*[@$!%*#?&])[A-Za-z\d@$!%*#?&]{8,}$/)

@Description("Password for the user's account.")
public password!: string;

@Required()
@Description("Phone number required")
public phoneNumber!: string;


}