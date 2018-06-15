import { Component, OnInit, Output, EventEmitter } from '@angular/core';

@Component({
	selector: 'ft-sidenav-list',
	templateUrl: './sidenav-list.component.html',
	styleUrls: ['./sidenav-list.component.scss']
})
export class SidenavListComponent implements OnInit {

	@Output()
	sidenavToggle: EventEmitter<void> = new EventEmitter();

	constructor() { }

	ngOnInit(): void {}

	onClose(): void {
		this.sidenavToggle.emit();
	}

}
