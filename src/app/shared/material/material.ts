// Modules
import { NgModule } from '@angular/core';
import { MatIconModule } from '@angular/material/icon';
import { MatButtonModule } from '@angular/material/button';
import { MatToolbarModule } from '@angular/material/toolbar';

// MaterialModules
const MatModules = [
    MatIconModule, MatButtonModule, MatToolbarModule
];

@NgModule({
    imports: [...MatModules],
    exports: [...MatModules]
})

export class MaterialModule {}