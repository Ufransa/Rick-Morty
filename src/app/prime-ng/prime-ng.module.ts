import { NgModule } from '@angular/core';

import {ButtonModule} from 'primeng/button';
import {CardModule} from 'primeng/card';
import {InputTextModule} from 'primeng/inputtext';
import {MenubarModule} from 'primeng/menubar';
import {MessageModule} from 'primeng/message';
import {MessagesModule} from 'primeng/messages';
import {ScrollTopModule} from 'primeng/scrolltop';
import {TableModule} from 'primeng/table';



@NgModule({
  exports: [
    ButtonModule,
    CardModule,
    InputTextModule,
    MenubarModule,
    MessageModule,
    MessagesModule,
    ScrollTopModule,
    TableModule,
  ]
})
export class PrimeNgModule { }
