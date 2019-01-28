import { Login } from './login.type';

export interface LoginFail {
    type: string;
    error?: LoginError;
    backupEmail?: Login;
}

export interface LoginError {
    code: string;
    message: string;
}
