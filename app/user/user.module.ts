
import { NgModule } from '@angular/core';

import { PublicModule } from '../public.module';

import { SharedModule } from '../shared/shared.module';
import { UserService } from './user.service';

import { RegisterComponent } from './register/register.component';
import { LoginComponent } from './login/login.component';
import { ListComponent } from './list/list.component';

@NgModule({
    imports: [ PublicModule, SharedModule ],
    exports: [ LoginComponent ],
    declarations: [ RegisterComponent, LoginComponent, ListComponent ],
    providers: [ UserService ]
})
export class UserModule { }
