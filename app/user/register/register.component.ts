
import { Component } from '@angular/core';

import { UserService } from '../user.service';
import { User } from '../user';

@Component({
    selector: 'user-register-form',
    templateUrl: 'app/user/register/register.component.html',
    styleUrls: ['app/user/register/register.component.css'],
})
export class RegisterComponent
{
    user: User = new User();
    
    constructor(private userService: UserService)
    {
        
    }
    
    register()
    {
        this.userService.register(this.user);
    }
}
