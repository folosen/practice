import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SharedModule } from '../../common/shared.module';
import { RouterModule } from '@angular/router';

import { DataTableModule } from 'primeng/components/datatable/datatable';
import { CalendarModule } from 'primeng/components/calendar/calendar';
import { DropdownModule } from 'primeng/components/dropdown/dropdown';
import { TabViewModule } from 'primeng/components/tabview/tabview';
import {InputTextModule} from 'primeng/inputtext';

import { SupplierDetailsComponent } from './supplier-details/supplier-details.component';
import { supplierRoutes } from './supplier.routes';

@NgModule({
    imports: [
        CommonModule,
        SharedModule,
        DataTableModule,
        CalendarModule,
        DropdownModule,
        TabViewModule,
        InputTextModule,
        RouterModule.forChild(supplierRoutes)
    ],
    declarations: [
        SupplierDetailsComponent
    ]
})
export class SupplierModule {

}
