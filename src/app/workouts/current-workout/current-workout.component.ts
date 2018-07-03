import { Component, OnInit } from '@angular/core';
import { MatDialog, MatDialogRef } from '@angular/material';

import { WorkoutService } from '../workout.service';

import { StopWorkoutComponent } from './stop-workout.component';

@Component({
	selector: 'ft-current-workout',
	templateUrl: './current-workout.component.html',
	styleUrls: ['./current-workout.component.scss']
})
export class CurrentWorkoutComponent implements OnInit {

	progress: number = 0;
	timer: number;


	constructor(private dialog: MatDialog, private workutService: WorkoutService) { }

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
				this.workutService.cancelWorkout(this.progress);
			}
			else {
				this.startTimer();
			}
		});
	}

	startTimer(): void {
		const step: number = (this.workutService.getCurrentWorkout().duration / 100) * 1000;

		this.timer = window.setInterval(() => {
			this.progress += 5;

			if (this.progress >= 100) {
				this.workutService.completeWorkout();
				clearInterval(this.timer);
			}
		}, step);
	}

}
