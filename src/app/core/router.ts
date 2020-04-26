// Modules
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';

// Components
import { LandingComponent } from './components/landing/landing.component';
import { DashboardComponent } from './components/dashboard/dashboard.component';

@NgModule({
    imports: [RouterModule.forRoot([
        { path: '', component: LandingComponent },
        { path: 'dashboard', component: DashboardComponent, children: [
            {
                path: 'feature-a', loadChildren: () => import('../features/feature-a/feature-a.module')
                .then(module => module.FeatureA), data: { title: 'Feature A', icon: 'link' }
            },
            {
                path: 'feature-b', loadChildren: () => import('../features/feature-b/feature-b.module')
                .then(module => module.FeatureB), data: { title: 'Feature B', icon: 'link' }
            },
            { path: '', redirectTo: 'feature-a', pathMatch: 'full' }
        ]}
    ])],
    exports: [RouterModule],
})

export class RoutingModule {}