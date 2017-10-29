
import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { Observable } from 'rxjs/Observable';

import { ApiService } from '../shared/api.service';
import { AuthorizationService } from '../shared/authorization.service';

import { User } from './user';

@Injectable()
export class UserService
{
    constructor(private api: ApiService,
        private authService: AuthorizationService,
        private router: Router)
    {
        
    }
    
    public getAll(): Observable<User[]>
    {
        return this.api.get<User[]>('users');
    }
    
    public register(user: User): void
    {
        let data =
        {
            fullName: user.fullName,
            postcode: user.postcode,
            streetnumber: user.streetnumber,
            emailAddress: user.emailAddress,
            password: user.password
        };
        
        this.api.post<void>('users', data).subscribe
        (
            data =>
            {
                this.goHome();
            },
            error =>
            {
                alert('Het registreren is mislukt');
            }
        );
    }
    
    public login(user: User, remember: boolean): void
    {
        this.authService.setAuthorization(user.emailAddress, user.password);
        
        this.api.get<User>('users/me').subscribe
        (
            authenticator =>
            {
                this.authService.storeAuthorization(authenticator, remember);
                
                this.goHome();
            },
            error =>
            {
                alert('Het inloggen is mislukt');
            }
        );
    }
    
    public logout()
    {
        this.authService.deleteAuthorization();
        
        this.goHome();
    }
    
    private goHome()
    {
        this.router.navigate(['']);
    }
}