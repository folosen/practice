import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SharedModule } from '../../common/shared.module';
import { RouterModule } from '@angular/router';
import { SupplierDetailsComponent } from './supplier-details/supplier-details.component';
import { supplierRoutes } from './supplier.routes';

@NgModule({
    imports: [
        CommonModule,
        SharedModule,
        RouterModule.forChild(supplierRoutes)
    ],
    declarations: [
        SupplierDetailsComponent
    ]
})
export class supplierModule {

}
