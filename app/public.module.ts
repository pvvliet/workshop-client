
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';
import { MdToolbarModule, MdCardModule, MdButtonModule } from '@angular/material';

import 'hammerjs';

export const publicModules =
[
    BrowserAnimationsModule,
    HttpClientModule,
    CommonModule,
    RouterModule,
    FormsModule,
    MdToolbarModule,
    MdCardModule,
    MdButtonModule
];

@NgModule({
    imports: publicModules,
    exports: publicModules
})
export class PublicModule { }
