<<<<<<< HEAD
import HttpRequestMessage from "./../../config/request.message";

interface Http {
    Error(HttpMessage: HttpHeader, data?: any): HttpResponse;
    Success(HttpMessage: HttpHeader, data: any): HttpResponse;
}

interface HttpResponse {
    meta: HttpHeader;
    response: any;
}

interface HttpHeader {
    status: number;
    status_code: string;
    message: string;
}

export enum HttpRequestCode {
    Default = "Default",
    LOGIN_PROVIDER = "LOGIN_PROVIDER",
    REGISTER_PROVIDER = "REGISTER_PROVIDER",
    RESET_PASSWORD = "RESET_PASSWORD"
};

// NOTE: this whole class is an implementation detail and is not exported
class HttpResponseHelper implements Http {

    RequestCode: HttpRequestCode;  
    
    constructor(RequestCode: HttpRequestCode) {
        this.RequestCode = RequestCode;        
    }

    Error(HttpMessage: HttpHeader, data?: any) {
        return {
            meta: {
                status: HttpMessage.status,
                status_code: HttpMessage.status_code,
                message: HttpMessage.message
            },
            response: data
        }
    }

    Success(HttpMessage: HttpHeader, data: any) {
        return {
            meta: {
                status: HttpMessage.status,
                status_code: HttpMessage.status_code,
                message: HttpMessage.message
            },
            response: data
        }
    }
}

// this is exported and is publicly available for creating HttpResponse
export function HttpResponse(RequestCode: HttpRequestCode): Http {
    return new HttpResponseHelper(RequestCode);
=======
import HttpRequestMessage from "./../../config/request.message";

interface Http {
    Error(HttpMessage: HttpHeader, data?: any): HttpResponse;
    Success(HttpMessage: HttpHeader, data: any): HttpResponse;
}

interface HttpResponse {
    meta: HttpHeader;
    response: any;
}

interface HttpHeader {
    status: number;
    status_code: string;
    message: string;
}

export enum HttpRequestCode {
    Default = "Default",
    LOGIN_PROVIDER = "LOGIN_PROVIDER",
    REGISTER_PROVIDER = "REGISTER_PROVIDER",
    RESET_PASSWORD = "RESET_PASSWORD"
};

// NOTE: this whole class is an implementation detail and is not exported
class HttpResponseHelper implements Http {

    RequestCode: HttpRequestCode;  
    
    constructor(RequestCode: HttpRequestCode) {
        this.RequestCode = RequestCode;        
    }

    Error(HttpMessage: HttpHeader, data?: any) {
        return {
            meta: {
                status: HttpMessage.status,
                status_code: HttpMessage.status_code,
                message: HttpMessage.message
            },
            response: data
        }
    }

    Success(HttpMessage: HttpHeader, data: any) {
        return {
            meta: {
                status: HttpMessage.status,
                status_code: HttpMessage.status_code,
                message: HttpMessage.message
            },
            response: data
        }
    }
}

// this is exported and is publicly available for creating HttpResponse
export function HttpResponse(RequestCode: HttpRequestCode): Http {
    return new HttpResponseHelper(RequestCode);
>>>>>>> master
}