import conf from "../conf/conf";
import {Client,Account,ID} from "appwrite"

export class AuthService{
    client=new Client();
    account;

    constructor(){
        this.client
        .setEndpoint(conf.appwriteUrl)
        .setProject(conf.appwriteProjectId);
        this.account=new Account(this.client)
    }

    async createAccount({email,password,name}){
        try {
            const userCreate=await this.account.create(ID.unique(),email,password,name)
            if(userCreate){
               return this.login({email, password});
            }else{
                return userCreate;
            }
        } catch (error) {
            throw error;
        }
    }

    async login({email,password}){
        try {
            return await this.account.createEmailPasswordSession(email,password)
        } catch (error) {
            throw error;
        }
    }

    async logout(){
        try {
            return await this.account.deleteSession("current")
        } catch (error) {
            console.log("Appwrite serive :: logout :: error",error)
        }
    }

    async authenticationState(){ //get Current User Data
        try {
            return await this.account.get();
        } catch (error) {
            console.log("Appwrite serive :: getCurrentUser :: error", error);
        }

        return null;
    
    } 
}

const authService=new AuthService()

export default authService
