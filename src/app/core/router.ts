// Modules
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';

// Components
import { LandingComponent } from './components/landing/landing.component';

@NgModule({
    imports: [RouterModule.forRoot([
        { path: '', component: LandingComponent }
    ])],
    exports: [RouterModule],
})

export class RoutingModule {}