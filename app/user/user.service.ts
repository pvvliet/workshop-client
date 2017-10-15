
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/Observable';

import { ApiService } from '../common/api.service';
import { AuthorizationService } from '../common/authorization.service';

import { User } from './user';

@Injectable()
export class UserService
{
    constructor(private api: ApiService, private authService: AuthorizationService)
    {
        
    }
    
    public getAll(): Observable<User[]>
    {
        return this.api.get<User[]>('users');
    }
    
    public register(user: User): Observable<void>
    {
        let data =
        {
            fullName: user.fullName,
            postcode: user.postcode,
            streetnumber: user.streetnumber,
            emailAddress: user.emailAddress,
            password: user.password
        };
        
        let observable: Observable<void> = this.api.get<void>('users');
        
        observable.subscribe
        (
            data =>
            {
                alert('Success');
            },
            error =>
            {
                alert('Het registreren is mislukt');
            }
        );
        
        return observable;
    }
    
    public login(user: User, remember: boolean): Observable<User>
    {
        this.authService.setAuthorization(user.emailAddress, user.password);
        
        let observable: Observable<User> = this.api.get<User>('users/me');
        
        observable.subscribe
        (
            data =>
            {
                this.authService.setAuthenticator(data);
                this.authService.storeAuthorization(remember);
                
                alert('Success');
            },
            error =>
            {
                alert('Het inloggen is mislukt');
            }
        );
        
        return observable;
    }
}