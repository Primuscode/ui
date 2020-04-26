// Modules
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';

// Components
import { LandingComponent } from './components/landing/landing.component';
import { DashboardComponent } from './components/dashboard/dashboard.component';

@NgModule({
    imports: [RouterModule.forRoot([
        { path: '', component: LandingComponent },
        { path: 'dashboard', component: DashboardComponent }
    ])],
    exports: [RouterModule],
})

export class RoutingModule {}