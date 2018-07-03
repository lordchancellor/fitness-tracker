import { Subject } from 'rxjs';

import { Workout } from './workout.model';

export class WorkoutService {

	workoutChanged: Subject<Workout> = new Subject();

	private availableWorkouts: Workout[] = [
		{ id: 'crunches', name: 'Crunches', duration: 30, calories: 8 },
		{ id: 'pull-ups', name: 'Pull Ups', duration: 60, calories: 32 },
		{ id: 'lunges', name: 'Lunges', duration: 120, calories: 60 },
		{ id: 'burpees', name: 'Burpees', duration: 60, calories: 8 }
	];

	private workouts: Workout[] = [];

	private currentWorkout: Workout;

	public getAvailableWorkouts(): Workout[] {
		return [ ...this.availableWorkouts ];
	}

	public startWorkout(selectedId: string): void {
		this.currentWorkout = this.availableWorkouts.find((workout: Workout) => workout.id === selectedId);
		this.workoutChanged.next({ ...this.currentWorkout });
	}

	public completeWorkout(): void {
		this.workouts.push({ 
			...this.currentWorkout,
			date: new Date(),
			state: 'completed'
		});
		
		this.currentWorkout = null;
		this.workoutChanged.next(null);
	}
	
	public cancelWorkout(progress: number): void {
		this.workouts.push({ 
			...this.currentWorkout,
			duration: this.currentWorkout.duration * (progress / 100),
			calories: this.currentWorkout.duration * (progress / 100),
			date: new Date(),
			state: 'cancelled'
		});
	
		this.currentWorkout = null;
		this.workoutChanged.next(null);
	}

	public getCurrentWorkout(): Workout {
		return { ...this.currentWorkout };
	}

}
