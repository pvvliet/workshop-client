
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { NoopAnimationsModule } from '@angular/platform-browser/animations';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';
import {
    NoConflictStyleCompatibilityMode,
    MatToolbarModule,
    MatCardModule,
    MatTableModule,
    MatButtonModule,
    MatInputModule
} from '@angular/material';

import 'hammerjs';

export const publicModules =
[
    NoConflictStyleCompatibilityMode,
    NoopAnimationsModule,
    HttpClientModule,
    CommonModule,
    RouterModule,
    FormsModule,
    MatToolbarModule,
    MatCardModule,
    MatTableModule,
    MatButtonModule,
    MatInputModule
];

@NgModule({
    imports: publicModules,
    exports: publicModules
})
export class PublicModule { }
