import { Component, Inject } from '@angular/core';
import { MAT_DIALOG_DATA } from '@angular/material';

@Component({
	selector: 'ft-stop-training',
	template: `
		<h1 mat-dialog-title>Are you sure?</h1>
		<mat-dialog-content>
			<p>You already got {{ data.progress }}%</p>
			<p>Do you really want to stop this workout?</p>
		<mat-dialog-actions>
			<button mat-button [mat-dialog-close]="false">Cancel</button>
			<button mat-button [mat-dialog-close]="true">Confirm</button>
		</mat-dialog-actions>
	`,
	styles: []
})
export class StopTrainingComponent {

	constructor(@Inject(MAT_DIALOG_DATA) public data: any) {}

}
