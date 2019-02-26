import { Routes, RouterModule } from "@angular/router";
import { ReportComponent } from "./report.component";
import { OrderPurchaseComponent } from "./order-purchase/order-purchase.component";

const routes: Routes = [
    {
        path: "",
        component: ReportComponent,
        children : [
            {
                path : 'order-purchase',
                component : OrderPurchaseComponent
            }
        ]
    }
];

export const ReportRoutes = RouterModule.forChild(routes);
