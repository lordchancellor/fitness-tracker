import { Component, Output, EventEmitter } from '@angular/core';

@Component({
	selector: 'ft-new-workout',
	templateUrl: './new-workout.component.html',
	styleUrls: ['./new-workout.component.scss']
})
export class NewWorkoutComponent {

	@Output()
	startWorkout: EventEmitter<void> = new EventEmitter();

	constructor() { }

	onStartWorkout(): void {
		this.startWorkout.emit();
	}

}
