import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { AngularFirestore } from 'angularfire2/firestore';
import { Observable } from 'rxjs';

import { WorkoutService } from '../workout.service';

import { Workout } from '../workout.model';

@Component({
	selector: 'ft-new-workout',
	templateUrl: './new-workout.component.html',
	styleUrls: ['./new-workout.component.scss']
})
export class NewWorkoutComponent implements OnInit {


	workouts: Observable<any>;

	constructor(private workoutService: WorkoutService, private db: AngularFirestore) {}

	ngOnInit(): void {
		this.workouts = this.db.collection('availableWorkouts').valueChanges();
	}

	onStartWorkout(form: NgForm): void {
		this.workoutService.startWorkout(form.value.workout);
	}

}
