// Modules
import { NgModule } from '@angular/core';
import { MatIconModule } from '@angular/material/icon';
import { MatButtonModule } from '@angular/material/button';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatExpansionModule } from '@angular/material/expansion';
import { MatListModule } from '@angular/material/list';

// MaterialModules
const MatModules = [
    MatIconModule, MatButtonModule, MatToolbarModule, MatExpansionModule,
    MatListModule
];

@NgModule({
    imports: [...MatModules],
    exports: [...MatModules]
})

export class MaterialModule {}