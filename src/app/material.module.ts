import { NgModule } from '@angular/core';
import { MAT_DATE_LOCALE } from '@angular/material/core';

// Buttons & Indicators
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { MatProgressSpinnerModule } from '@angular/material/progress-spinner';

// Popups and Modals
import { MatDialogModule } from '@angular/material/dialog';

// Form Controls
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatDatepickerModule } from '@angular/material/datepicker';
import { MatMomentDateModule } from '@angular/material-moment-adapter';
import { MatCheckboxModule } from '@angular/material/checkbox';
import { MatSelectModule } from '@angular/material/select';

// Navigation
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatToolbarModule } from '@angular/material/toolbar';

// Layout
import { MatCardModule } from '@angular/material/card';
import { MatListModule } from '@angular/material/list';
import { MatTabsModule } from '@angular/material/tabs';

// Data Table
import { MatTableModule } from '@angular/material/table';
import { MatSortModule } from '@angular/material/sort';
import { MatPaginatorModule } from '@angular/material/paginator';

const modules: any[] = [
	MatButtonModule,
	MatIconModule,
	MatProgressSpinnerModule,
	MatDialogModule,
	MatFormFieldModule,
	MatInputModule,
	MatDatepickerModule,
	MatMomentDateModule,
	MatCheckboxModule,
	MatSelectModule,
	MatSidenavModule,
	MatToolbarModule,
	MatCardModule,
	MatListModule,
	MatTabsModule,
	MatTableModule,
	MatSortModule,
	MatPaginatorModule
];

@NgModule({
	imports: modules,
	exports: modules,
	providers: [
		{ provide: MAT_DATE_LOCALE, useValue: 'en-GB' },
	]
})
export class MaterialModule { }
