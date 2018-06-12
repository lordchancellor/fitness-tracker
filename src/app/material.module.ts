import { NgModule } from '@angular/core';

import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';

const modules: any[] = [
  MatButtonModule,
  MatIconModule
];

@NgModule({
  imports: modules,
  exports: modules
})
export class MaterialModule {}
