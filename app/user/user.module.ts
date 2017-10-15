
import { NgModule } from '@angular/core';
import { MdCardModule, MdButtonModule } from '@angular/material';
import { RouterModule } from '@angular/router';
import { HttpModule } from '@angular/http';
import { FormsModule } from '@angular/forms';

import { ApiService } from '../common/api.service';
import { UserService } from './user.service';

import { RegisterComponent } from './register/register.component';
import { LoginComponent } from './login/login.component';

@NgModule({
    imports: [ RouterModule, HttpModule, FormsModule, MdCardModule, MdButtonModule ],
    declarations: [ RegisterComponent, LoginComponent ],
    exports: [ RegisterComponent, LoginComponent ],
    providers: [ ApiService, UserService ]
})
export class UserModule { }
