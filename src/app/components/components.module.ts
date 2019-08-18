import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormComponent } from './form/form.component';

import { DropdownModule } from 'primeng/dropdown';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { InputTextModule } from 'primeng/inputtext';
import { InputMaskModule } from 'primeng/inputmask';
import { NgxMaskModule } from 'ngx-mask';
import { MessagesModule } from 'primeng/messages';
import { MessageModule } from 'primeng/message';
import { ReactiveFormsModule } from '@angular/forms';

@NgModule({
    imports:[
        BrowserModule,
        DropdownModule,
        BrowserAnimationsModule,
        InputTextModule,
        InputMaskModule,
        NgxMaskModule.forRoot(),
        MessagesModule,
        MessageModule,
        ReactiveFormsModule
    ],
    declarations: [
        FormComponent
    ],
    exports:[
        FormComponent
    ]
})

export class ComponentsModule { }