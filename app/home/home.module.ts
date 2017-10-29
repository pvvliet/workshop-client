
import { NgModule } from '@angular/core';

import { PublicModule } from '../public.module';
import { UserModule } from '../user/user.module';

import { HomeComponent } from './home.component';

@NgModule({
    imports: [ PublicModule, UserModule ],
    declarations: [ HomeComponent ]
})
export class HomeModule { }
