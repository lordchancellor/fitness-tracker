import { Component, OnInit, OnDestroy } from '@angular/core';
import { NgForm } from '@angular/forms';
import { AngularFirestore } from 'angularfire2/firestore';
import { Subscription } from 'rxjs';

import { WorkoutService } from '../workout.service';

import { Workout } from '../workout.model';

@Component({
	selector: 'ft-new-workout',
	templateUrl: './new-workout.component.html',
	styleUrls: ['./new-workout.component.scss']
})
export class NewWorkoutComponent implements OnInit, OnDestroy {

	workoutSub: Subscription;
	workouts: Workout[];

	constructor(private workoutService: WorkoutService, private db: AngularFirestore) {}

	ngOnInit(): void {
		this.workoutService.fetchAvailableWorkouts();
		this.workoutSub = this.workoutService.workoutsChanged.subscribe(
			(workouts: Workout[]) => this.workouts = workouts
		);
	}

	ngOnDestroy(): void {
		this.workoutSub.unsubscribe();
	}

	onStartWorkout(form: NgForm): void {
		this.workoutService.startWorkout(form.value.workout);
	}

}
