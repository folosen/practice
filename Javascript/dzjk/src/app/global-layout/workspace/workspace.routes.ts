import { WorkspaceComponent } from './workspace.component';

export const workspaceRoutes = [
  {
    path: '',
    component: WorkspaceComponent,
    children: [
      { path: '', redirectTo: 'supplier', pathMatch: 'full' },
      {
        path: 'supplier',
        loadChildren: '../../bz-modules/supplier/supplier.module#supplierModule'
      },
      {
        path: 'dashboard',
        loadChildren: '../../bz-modules/dashboard/dashboard.module#DashboardModule'
      },
      {
        path: 'inventory',
        loadChildren: '../../bz-modules/inventory/inventory.module#InventoryModule'
      },
      {
        path: 'basic-data',
        loadChildren: '../../bz-modules/basic-data/basic-data.module#BasicDataModule'
      },
      { path: 'sys', loadChildren: '../../bz-modules/sys/sys.module#SysModule' }
    ]
  }
];
