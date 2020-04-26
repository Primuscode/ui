// Modules
import { NgModule } from '@angular/core';
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
    imports: [MaterialModule],
    exports: [...SharedComponents, MaterialModule]
})

export class SharedModule {}