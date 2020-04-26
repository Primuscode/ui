// Modules
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RoutingModule } from './router';

// Components
import { CoreComponent } from './components/core.component';

@NgModule({
    declarations: [CoreComponent],
    imports: [BrowserModule, RoutingModule],
    bootstrap: [CoreComponent]
})

export class CoreModule {}