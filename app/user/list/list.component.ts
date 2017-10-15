
import { Component } from '@angular/core';

import { UserService } from '../user.service';
import { User } from '../user';

@Component({
    selector: 'app-login-form',
    templateUrl: 'app/user/login/login.component.html',
    styleUrls: ['app/user/login/login.component.css'],
})
export class ListComponent
{
    users: User[];
    
    constructor(private userService: UserService)
    {
        userService.getAll();
    }
}
