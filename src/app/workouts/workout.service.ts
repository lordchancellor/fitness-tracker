import { Workout } from './workout.model';

export class WorkoutService {

	private availableWorkouts: Workout[] = [
		{ id: 'crunches', name: 'Crunches', duration: 30, calories: 8 },
		{ id: 'pull-ups', name: 'Pull Ups', duration: 60, calories: 32 },
		{ id: 'lunges', name: 'Lunges', duration: 120, calories: 60 },
		{ id: 'burpees', name: 'Burpees', duration: 60, calories: 8 }
	];

	public getAvailableWorkouts(): Workout[] {
		return [ ...this.availableWorkouts ];
	}

}
