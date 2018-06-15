import { NgModule } from '@angular/core';
import { MAT_DATE_LOCALE } from '@angular/material/core';

// Buttons & Indicators
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';

// Form Controls
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatDatepickerModule } from '@angular/material/datepicker';
import { MatMomentDateModule } from '@angular/material-moment-adapter';
import { MatCheckboxModule } from '@angular/material/checkbox';

// Navigation
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatToolbarModule } from '@angular/material/toolbar';

const modules: any[] = [
	MatButtonModule,
	MatIconModule,
	MatFormFieldModule,
	MatInputModule,
	MatDatepickerModule,
	MatMomentDateModule,
	MatCheckboxModule,
	MatSidenavModule,
	MatToolbarModule
];

@NgModule({
	imports: modules,
	exports: modules,
	providers: [
		{ provide: MAT_DATE_LOCALE, useValue: 'en-GB' },
	]
})
export class MaterialModule { }
