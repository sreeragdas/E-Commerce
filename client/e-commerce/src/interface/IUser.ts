export interface IAdminUser {
    name: string;
    eMail: string;
    password:string;
    phoneNumber:string;
}

export interface IAuthLogin{
    name:string | null , 
    email:string | null
}