import { Component, OnInit } from '@angular/core';
import { Subscription } from 'rxjs';

import { WorkoutService } from './workout.service';

import { Workout } from './workout.model';

@Component({
	selector: 'ft-workouts',
	templateUrl: './workouts.component.html',
	styleUrls: ['./workouts.component.scss']
})
export class WorkoutsComponent implements OnInit {

	workoutActive: boolean = false;
	workoutSubscription: Subscription;

	constructor(private workoutService: WorkoutService) { }

	// Lifecycle Hooks
	ngOnInit(): void {
		this.workoutSubscription = this.workoutService.workoutChanged.subscribe(
			(workout: Workout) => {
				this.workoutActive = workout ? true : false;
			}
		);
	}

}
