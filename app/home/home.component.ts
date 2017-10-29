
import { Component } from '@angular/core';

import { AuthorizationService } from '../shared/authorization.service';

import { User } from '../user/user';

@Component({
    selector: 'app-home',
    templateUrl: 'app/home/home.component.html',
    styleUrls: ['app/home/home.component.css'],
})
export class HomeComponent
{
    public authenticated: boolean = false;
    
    public userName = '';

    constructor(private authService: AuthorizationService)
    {
        authService.authorized$.subscribe(
            authorized => {
                this.updateAuthentication();
            }
        );
        
        this.updateAuthentication();
    }
    
    private updateAuthentication()
    {
        this.authenticated = this.authService.hasAuthorization();
        
        if (!this.authenticated)
        {
            this.userName = '';
            
            return;
        }
        
        let user: User = this.authService.getAuthenticator();

        this.userName = user.fullName;
    }
}
