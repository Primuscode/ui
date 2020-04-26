import { Component } from '@angular/core';

@Component({
    selector: 'header',
    template: `
        <mat-toolbar id="header" role="heading" color="primary">
            <span routerLink="/">Header</span>
        </mat-toolbar>
    `,
})

export class HeaderComponent {}