
import { NgModule } from '@angular/core';

import { PublicModule } from '../public.module';

import { AuthorizationService } from './authorization.service';
import { ApiService } from './api.service';

import { HeaderComponent } from './header/header.component';

@NgModule({
    imports: [ PublicModule ],
    declarations: [ HeaderComponent ],
    exports: [ HeaderComponent ],
    providers: [ ApiService, AuthorizationService ]
})
export class SharedModule { }
