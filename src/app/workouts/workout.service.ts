import { Injectable } from '@angular/core';
import { AngularFirestore } from 'angularfire2/firestore';
import { Subject } from 'rxjs';
import { map } from 'rxjs/operators';

import { Workout } from './workout.model';

@Injectable()
export class WorkoutService {

	workoutChanged: Subject<Workout> = new Subject();
	workoutsChanged: Subject<Workout[]> = new Subject();
	finishedWorkoutsChanged: Subject<Workout[]> = new Subject();

	private currentWorkout: Workout;
	private availableWorkouts: Workout[] = [];

	constructor(private db: AngularFirestore) {}

	public fetchAvailableWorkouts(): void {
		this.db
			.collection('availableWorkouts')
			.snapshotChanges()
			.pipe(
				map(docArray => {
					return docArray.map(doc => {
						return {
							id: doc.payload.doc.id,
							...doc.payload.doc.data()
						};
					});
				})
			)
			.subscribe(((workouts: Workout[]) => {
				this.availableWorkouts = workouts;
				this.workoutsChanged.next([ ...this.availableWorkouts ]);
			}));
	}

	public startWorkout(selectedId: string): void {
		this.currentWorkout = this.availableWorkouts.find((workout: Workout) => workout.id === selectedId);
		this.workoutChanged.next({ ...this.currentWorkout });
	}

	public completeWorkout(): void {
		this.addToDatabase({ 
			...this.currentWorkout,
			date: new Date(),
			state: 'completed'
		});
		
		this.currentWorkout = null;
		this.workoutChanged.next(null);
	}
	
	public cancelWorkout(progress: number): void {
		this.addToDatabase({ 
			...this.currentWorkout,
			duration: this.currentWorkout.duration * (progress / 100),
			calories: this.currentWorkout.calories * (progress / 100),
			date: new Date(),
			state: 'cancelled'
		});
	
		this.currentWorkout = null;
		this.workoutChanged.next(null);
	}

	public getCurrentWorkout(): Workout {
		return { ...this.currentWorkout };
	}

	public fetchFinishedWorkouts(): void {
		this.db.collection('finishedWorkouts').valueChanges().subscribe(
			(workouts: Workout[]) => {
				this.finishedWorkoutsChanged.next([ ...workouts ]);
			}
		);
	}

	private addToDatabase(workout: Workout): void {
		this.db.collection('finishedWorkouts').add(workout)
			.then(() => console.log('Record added'))
			.catch(err => console.log(err));
	}

}
