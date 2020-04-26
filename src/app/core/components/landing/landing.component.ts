import { Component } from '@angular/core';

@Component({
    selector: 'core-landing',
    template: `
        <!-- Shared Module Header -->
        <header></header>

        <section id="page">
            <div id="content">
                <button mat-raised-button routerLink="/dashboard">
                    <mat-icon>dashboard</mat-icon> Dashboard
                </button>
            </div>
        </section>
    `
})

export class LandingComponent {}