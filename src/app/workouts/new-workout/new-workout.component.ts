import { Component, OnInit, Output, EventEmitter } from '@angular/core';

import { WorkoutService } from '../workout.service';

import { Workout } from '../workout.model';

@Component({
	selector: 'ft-new-workout',
	templateUrl: './new-workout.component.html',
	styleUrls: ['./new-workout.component.scss']
})
export class NewWorkoutComponent implements OnInit {

	@Output()
	startWorkout: EventEmitter<void> = new EventEmitter();

	workouts: Workout[] = [];

	constructor(private workoutService: WorkoutService) {}

	ngOnInit(): void {
		this.workouts = this.workoutService.getAvailableWorkouts();
	}

	onStartWorkout(): void {
		this.startWorkout.emit();
	}

}
