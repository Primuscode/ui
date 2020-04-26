
import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
    selector: 'sidebar',
    template: `
        <aside id="sidebar">
            <mat-accordion>
                <!-- Itterating Modules -->
                <mat-expansion-panel *ngFor="let route of FeatureModules">
                    <mat-expansion-panel-header [routerLink]="'/dashboard/' + route.path" routerLinkActive="active">
                        <mat-icon>{{ route.data.icon }}</mat-icon> {{ route.data.title }}
                    </mat-expansion-panel-header>
                    <mat-list>
                        <!-- Itterating Child Routes of Module -->
                        <mat-list-item *ngFor="let subRoute of route.nestedRoutes" [routerLink]="[route.path + '/' + subRoute.path]"
                            (click)="$event.stopPropagation()" routerLinkActive="active">
                            <mat-icon mat-list-icon>{{ subRoute.data.icon }}</mat-icon>
                            <span mat-line>{{ subRoute.data.title }}</span>
                        </mat-list-item>
                    </mat-list>
                </mat-expansion-panel>
            </mat-accordion>
        </aside>
    `
})

export class SidebarComponent {
    FeatureModules;

    constructor(private $router: Router) {
        // Extracting Lazy Module routes with data property defined.
        this.FeatureModules = this.$router.config.filter(route => route.path === 'dashboard')
            .shift().children.filter(route => route.data);

        // Preloading Lazy Module child routes with data property defined.
        this.FeatureModules.forEach((moduleRoute, index) => {
            this.$router['configLoader'].load(this.$router['ngModule'].injector, moduleRoute)
                .subscribe(res => this.FeatureModules[index].nestedRoutes = res.routes.filter(r => r.data));
        });
    }
}