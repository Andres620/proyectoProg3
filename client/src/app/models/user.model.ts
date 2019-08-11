export interface UserModel{
    id: string;
    realm: string;
    firstname: string;
    secondname: string;
    firstsurname: string;
    secondsurname: string;
    country: string;
    phone: string;
    membership: string,
    educationlevel: string;
    email: string;
    password: string;
    rol: string,
    user: UserModel
}