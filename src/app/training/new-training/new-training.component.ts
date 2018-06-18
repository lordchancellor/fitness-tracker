import { Component, Output, EventEmitter } from '@angular/core';

@Component({
	selector: 'ft-new-training',
	templateUrl: './new-training.component.html',
	styleUrls: ['./new-training.component.scss']
})
export class NewTrainingComponent {

	@Output()
	startTraining: EventEmitter<void> = new EventEmitter();

	constructor() { }

	onStartTraining(): void {
		this.startTraining.emit();
	}

}
