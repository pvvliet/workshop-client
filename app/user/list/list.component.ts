
import { Component } from '@angular/core';

import { UserService } from '../user.service';
import { User } from '../user';

@Component({
    selector: 'user-list',
    templateUrl: 'app/user/list/list.component.html',
    styleUrls: ['app/user/list/list.component.css'],
})
export class ListComponent
{
    public users: User[];
    
    constructor(private userService: UserService)
    {
        this.getUsersList();
    }
    
    private getUsersList()
    {
        this.userService.getAll().subscribe(
            users =>
            {
                this.users = users;
            }
        );
    }
}
