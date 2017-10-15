
import { NgModule } from '@angular/core';
import { MdToolbarModule } from '@angular/material';

import { AuthorizationService } from './authorization.service';
import { ApiService } from './api.service';

import { HeaderComponent } from './header/header.component';

@NgModule({
    imports: [ MdToolbarModule ],
    declarations: [ HeaderComponent ],
    exports: [ HeaderComponent ],
    providers: [ ApiService, AuthorizationService ]
})
export class CommonModule { }
