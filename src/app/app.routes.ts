import { Routes } from '@angular/router';
import { ErrorComponent } from './features/error/error.component';
import { HomeComponent } from './features/home/home.component';
import { MaintenanceComponent } from './features/maintenance/maintenance.component';
import { maintenanceGuard } from './core/guards/maintenance.guard';

export const routes: Routes = [
    {
        path: '',
        component: HomeComponent,
        canActivate: [maintenanceGuard],
    },
    {
        path: '**',
        pathMatch: 'full',
        component: MaintenanceComponent,
    },
    {
        path: '**',
        pathMatch: 'full',
        component: ErrorComponent,
        canActivate: [maintenanceGuard],
    },
];
