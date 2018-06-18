import { Component } from '@angular/core';

@Component({
	selector: 'ft-workouts',
	templateUrl: './workouts.component.html',
	styleUrls: ['./workouts.component.scss']
})
export class WorkoutsComponent {

	workoutActive: boolean = false;

	constructor() { }

}
