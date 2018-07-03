import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';

import { WorkoutService } from '../workout.service';

import { Workout } from '../workout.model';

@Component({
	selector: 'ft-new-workout',
	templateUrl: './new-workout.component.html',
	styleUrls: ['./new-workout.component.scss']
})
export class NewWorkoutComponent implements OnInit {


	workouts: Workout[] = [];

	constructor(private workoutService: WorkoutService) {}

	ngOnInit(): void {
		this.workouts = this.workoutService.getAvailableWorkouts();
	}

	onStartWorkout(form: NgForm): void {
		this.workoutService.startWorkout(form.value.workout);
	}

}
