import { Component } from '@angular/core';

@Component({
    selector: 'core-landing',
    styles: ['button { margin-left: 16px !important; display: block; }'],
    template: `
        <!-- Shared Module Header -->
        <header></header>

        <!-- Page -->
        <section id="page">
            <!-- Shared Module Sidebar -->
            <sidebar></sidebar>

            <div id="page-content">
                <router-outlet></router-outlet>
            </div>
        </section>
    `
})

export class DashboardComponent {}