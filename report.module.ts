import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReportRoutes } from './report.routing.module';
import { ReportComponent } from './report.component';
import { OrderPurchaseComponent } from './order-purchase/order-purchase.component';
import { ThemeModule } from '../@theme/theme.module';

@NgModule({
    imports: [
        ThemeModule,
        CommonModule,
        ReportRoutes,
    ],
    declarations: [ReportComponent, OrderPurchaseComponent]
})
export class ReportModule { }
