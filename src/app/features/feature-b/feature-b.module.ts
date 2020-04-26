// Modules
import { NgModule } from '@angular/core';
import { RoutingModule } from './router';

// Components
import { OneComponent } from './components/one/one.component';
import { TwoComponent } from './components/two/two.component';

@NgModule({
    declarations: [OneComponent, TwoComponent],
    imports: [RoutingModule]
})

export class FeatureB {}