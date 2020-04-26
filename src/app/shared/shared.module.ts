// Modules
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { MaterialModule } from './material/material';

// Components
import { HeaderComponent } from './components/header/header.component';
import { SidebarComponent } from './components/sidebar/sidebar.component';

// SharedComponents
const SharedComponents = [
    HeaderComponent, SidebarComponent
];

@NgModule({
    declarations: [...SharedComponents],
    imports: [CommonModule, RouterModule, MaterialModule],
    exports: [...SharedComponents, MaterialModule]
})

export class SharedModule {}