import  JWT from 'jsonwebtoken'
import { TokensEntity } from './../Entity'
import { getConnection } from 'typeorm';

export default class TokenHelper{
    constructor(){
        
    } 

    private Connection=async()=>{
        return await getConnection().getRepository(TokensEntity);
    }
    
    async Set(data:any,type:string,expiresIn:number){      
        
        // initilization connection
        let _TokenQuery=await this.Connection();        

        let _tokendb=new TokensEntity();        
        
        let expired_date =this.addDays(new Date(),expiresIn);
        
        let _token = this.create(data);

        _tokendb.token=_token;
        _tokendb.access_type=type;
        _tokendb.expired_date=expired_date;
        _TokenQuery.save(_tokendb);

        return _token
    }
    
    private addDays(date:Date, days:number) {
        var result = new Date(date);
        result.setDate(result.getDate() + days);
        return result;
    }

    private create(uuid:any){
        return JWT.sign({
            id: uuid
        },(String)(process.env.SECRET_KEY), {
            expiresIn: '24h'
        });
    }
}