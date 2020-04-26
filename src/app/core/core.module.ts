// Modules
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { SharedModule } from '../shared/shared.module';
import { RoutingModule } from './router';

// Components
import { CoreComponent } from './components/core.component';
import { LandingComponent } from './components/landing/landing.component';
import { DashboardComponent } from './components/dashboard/dashboard.component';

@NgModule({
    declarations: [CoreComponent, LandingComponent, DashboardComponent],
    imports: [
        BrowserModule, BrowserAnimationsModule,
        SharedModule, RoutingModule],
    bootstrap: [CoreComponent]
})

export class CoreModule {}