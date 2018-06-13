import { NgModule } from '@angular/core';

// Buttons & Indicators
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';

// Form Controls
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';

const modules: any[] = [
  MatButtonModule,
  MatIconModule,
  MatFormFieldModule,
  MatInputModule
];

@NgModule({
  imports: modules,
  exports: modules
})
export class MaterialModule {}
