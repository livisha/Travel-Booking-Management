import { Injectable, Logger, UnauthorizedException } from "@nestjs/common";
import { JwtService } from "@nestjs/jwt";
import { DBResponse } from "src/database/postgreSql/dto/dbresponse.dto";
import { sqlQuery } from "src/database/postgreSql/repository/db.service";
import { SignUpRequestBody } from "./dto/signBody.response.dto";
import { response } from "express";

@Injectable()
export class AuthService{
    constructor(private readonly jwtService: JwtService){}
    private readonly logger = new Logger(AuthService.name)


    async signUp(signUpRequestBody:SignUpRequestBody): Promise<any> {
        try{
        let response ={"messgae":"Invalid Error"}
        let dbResponse= new DBResponse();
        const user=`select email from airplane_system.userdetail where email = '${signUpRequestBody.email_Id}'`
        dbResponse=await sqlQuery(user);
        console.log(user)
        if(dbResponse.rowCount){
            return response ={"messgae":"User already existed"}
        }
        const query = `INSERT INTO airplane_system.userdetail
        (firstname, lastname, email, phonenumber, "password")
        VALUES('${signUpRequestBody.first_name}', '${signUpRequestBody.last_name}', '${signUpRequestBody.email_Id}', ${signUpRequestBody.phone_number}, '${signUpRequestBody.password}');`
        console.log(query)
        dbResponse=await sqlQuery(query);
        console.log("db response",dbResponse)
        if(dbResponse.rowCount==1){
           response.messgae="Record Inserted Successfully";
           return response;
        }
        else{
            this.logger.error('Internal Server Error')
            return response;
        }
        }
        catch(error){
            this.logger.error('signUp API',error)
        }
      }

    async validateUser(email: string, password: string): Promise<any> {
        const query = `select * from airplane_system.userdetail where email='${email}'`
        let dbResponse= new DBResponse();
        dbResponse=await sqlQuery(query);
        const user=dbResponse.rows[0];
        console.log('user validate',user)
        if(user.email==email && user.password==password){
            return user;
        }
        else{
            throw new Error("Invalid Credential")
        }
      }

    async generateToken(payload: { email: string; sub: string }){
        return this.jwtService.signAsync(payload);
    }
}