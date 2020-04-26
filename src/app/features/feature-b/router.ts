// Modules
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';

// Components
import { OneComponent } from './components/one/one.component';
import { TwoComponent } from './components/two/two.component';

@NgModule({
    imports: [RouterModule.forChild([
        { path: 'one', component: OneComponent, data: { title: 'One', icon: 'link' }},
        { path: 'two', component: TwoComponent, data: { title: 'Two', icon: 'link' }},
        { path: '', redirectTo: 'one', pathMatch: 'full' }
    ])],
    exports: [RouterModule],
})

export class RoutingModule {}