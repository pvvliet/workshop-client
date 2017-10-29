
import {DataSource} from '@angular/cdk/collections';
import {Observable} from 'rxjs/Observable';
import 'rxjs/add/observable/of';

import { User } from '../user';

export class ListDataSource extends DataSource<any>
{
    constructor(private users: User[])
    {
        super();
    }
    
    public connect(): Observable<User[]>
    {
        return Observable.of(this.users);
    }

    public disconnect() {}
    
}