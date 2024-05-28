import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { ButtonModule } from 'primeng/button';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { TableModule } from 'primeng/table';
import { SpeedDialModule } from 'primeng/speeddial';
import { InputTextModule } from 'primeng/inputtext';
import { ToastModule } from 'primeng/toast';

@NgModule({
    declarations: [
    ],
    imports: [
        CommonModule,
        BrowserAnimationsModule,
        ButtonModule,
        TableModule,
        SpeedDialModule,
        InputTextModule,
        ToastModule
    ],
    exports: [
        ButtonModule,
        TableModule,
        SpeedDialModule,
        InputTextModule,
        ToastModule
    ]
})
export class PrimengModule { }
