export default{
    INVALID_CREDENTIAL:{
        status:422,
        status_code:'',
        message:'Invalid username or password'
    },
    INTERNAL_SERVER_ERROR:{
        status:500,
        status_code:'',
        message:'Internal server error'
    },
    LOGIN_SUCCESS:{
        status:200,
        status_code:'',
        message:'login success full'
    },
    SERVER_VALIDATION:{
        status:500,
        status_code:'',
        message:'server side validation'
    },
    USER_ISEXIST:{
        status:422,
        status_code:'',
        message:'user is already exist'
    },
    USER_CREATE_SUCCESS:{
        status:200,
        status_code:'',
        message:'user is created' 
    },
    USER_BLOCKED:{
        status:422,
        status_code:"USER_BLOCK",
        message:'user has been block, you can not create or login in this email'
    },
    USER_UNVERIFIED:{
        status:422,
        status_code:"USER_UNVERIFIED",
        message:'user has unverifed, check your email for verified your account'
    },
    USER_NOTFOUND:{
        status:422,
        status_code:"USER_NOTFOUND",
        message:"user doesn't exist"
    }
}