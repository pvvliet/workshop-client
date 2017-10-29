
import { Component } from '@angular/core';

import { ListDataSource } from './list.datasource';

import { UserService } from '../user.service';

@Component({
    selector: 'user-list',
    templateUrl: 'app/user/list/list.component.html',
    styleUrls: ['app/user/list/list.component.css'],
})
export class ListComponent
{
    public displayedColumns = ['fullName', 'postcode', 'streetnumber', 'emailAddress'];
    public dataSource = null;
    
    constructor(private userService: UserService)
    {
        this.getUsersList();
    }
    
    private getUsersList()
    {
        this.userService.getAll().subscribe(
            users =>
            {
                this.dataSource = new ListDataSource(users);
            }
        );
    }
    
    public hasData()
    {
        return this.dataSource !== null;
    }
}
