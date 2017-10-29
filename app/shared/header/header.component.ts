
import { Component } from '@angular/core';

import { Router } from '@angular/router';

import { AuthorizationService } from '../authorization.service';

@Component({
    selector: 'app-header',
    templateUrl: 'app/shared/header/header.component.html',
    styleUrls: ['app/shared/header/header.component.css'],
})
export class HeaderComponent
{
    public authenticated: boolean = false;

    constructor(private authService: AuthorizationService, private router: Router)
    {
        this.authenticated = authService.hasAuthorization();
        
        authService.authorized$.subscribe(
            authorized =>
            {
                this.authenticated = authorized;
            }
        );
    }
    
    public logout()
    {
        this.authService.deleteAuthorization();
        this.router.navigate(['']);
    }
}
