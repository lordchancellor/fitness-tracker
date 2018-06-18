import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { MatDialog, MatDialogRef } from '@angular/material';

import { StopTrainingComponent } from './stop-training.component';

@Component({
	selector: 'ft-current-training',
	templateUrl: './current-training.component.html',
	styleUrls: ['./current-training.component.scss']
})
export class CurrentTrainingComponent implements OnInit {

	progress: number = 0;
	timer: number;

	@Output()
	exitWorkout: EventEmitter<void> = new EventEmitter();

	constructor(private dialog: MatDialog) { }

	ngOnInit(): void {
		this.startTimer();
	}

	onStop(): void {
		clearInterval(this.timer);

		const dialog: MatDialogRef<StopTrainingComponent> = this.dialog.open(StopTrainingComponent, {
			data: { progress: this.progress }
		});

		dialog.afterClosed().subscribe(result => {
			if (result) {
				this.exitWorkout.emit();
			}
			else {
				this.startTimer();
			}
		});
	}

	startTimer(): void {
		this.timer = window.setInterval(() => {
			this.progress += 5;

			if (this.progress >= 100) {
				clearInterval(this.timer);
			}
		}, 1000);
	}

}
