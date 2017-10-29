
import { Component } from '@angular/core';

import { UserService } from '../user.service';
import { User } from '../user';

@Component({
    selector: 'user-login-form',
    templateUrl: 'app/user/login/login.component.html',
    styleUrls: ['app/user/login/login.component.css'],
})
export class LoginComponent
{
    user: User = new User();
    
    constructor(private userService: UserService)
    {
        
    }
    
    login()
    {
        this.userService.login(this.user, false).subscribe(
            authenticator =>
            {
                //alert('Welcome ' + authenticator.fullName);
            }
        );
    }
}
