// Modules
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { RoutingModule } from './router';

// Components
import { CoreComponent } from './components/core.component';

@NgModule({
    declarations: [CoreComponent],
    imports: [BrowserModule, BrowserAnimationsModule, RoutingModule],
    bootstrap: [CoreComponent]
})

export class CoreModule {}