import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { MatDialog, MatDialogRef } from '@angular/material';

import { StopWorkoutComponent } from './stop-workout.component';

@Component({
	selector: 'ft-current-workout',
	templateUrl: './current-workout.component.html',
	styleUrls: ['./current-workout.component.scss']
})
export class CurrentWorkoutComponent implements OnInit {

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

		const dialog: MatDialogRef<StopWorkoutComponent> = this.dialog.open(StopWorkoutComponent, {
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
