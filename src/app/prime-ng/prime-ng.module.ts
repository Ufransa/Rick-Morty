import { NgModule } from '@angular/core';

import {CardModule} from 'primeng/card';
import {InputTextModule} from 'primeng/inputtext';
import {MenubarModule} from 'primeng/menubar';
import {TableModule} from 'primeng/table';
import {ButtonModule} from 'primeng/button';
import {MessagesModule} from 'primeng/messages';
import {MessageModule} from 'primeng/message';
import {ScrollTopModule} from 'primeng/scrolltop';



@NgModule({
  exports: [
    InputTextModule,
    CardModule,
    MenubarModule,
    TableModule,
    ButtonModule,
    MessagesModule,
    MessageModule,
    ScrollTopModule
  ]
})
export class PrimeNgModule { }
