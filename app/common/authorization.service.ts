
import { Injectable } from '@angular/core';

@Injectable()
export class AuthorizationService
{
    login: string = null;
    password: string = null;
    authenticator: Object = null;
    
    constructor()
    {
        this.restoreAuthorization();
    }
    
    public hasAuthorization(): boolean
    {
        return this.login !== null && this.password !== null;
    }
    
    public setAuthorization(login: string, password: string): void
    {
        this.login = login;
        this.password = password;
    }
    
    public storeAuthorization(local: boolean)
    {
        let authorization =
        {
            login: this.login,
            password: this.password,
            authenticator: this.authenticator
        };

        let authorizationString = JSON.stringify(authorization);
        let storage = local ? localStorage : sessionStorage;

        storage.setItem('authorization', authorizationString);
    }
    
    private restoreAuthorization(): void
    {
        let authorizationString = sessionStorage.getItem('authorization');

        if (authorizationString === null)
        {
            authorizationString = localStorage.getItem('authorization');
        }

        if (authorizationString !== null)
        {
            let authorization = JSON.parse(authorizationString);
            
            this.login = authorization['login'];
            this.password = authorization['password'];
            this.authenticator = authorization['authenticator'];
        }
    }
    
    public deleteAuthorization(): void
    {
        this.login = null;
        this.password = null;
        this.authenticator = null;

        sessionStorage.removeItem('authorization');
        localStorage.removeItem('authorization');
    }
    
    public createAuthorizationString(): string
    {
        return 'Basic ' + btoa(this.login + ':' + this.password);
    }
    
    public getAuthenticator(): Object
    {
        return this.authenticator;
    }
    
    public setAuthenticator(authenticator: Object): void
    {
        this.authenticator = authenticator;
    }
}