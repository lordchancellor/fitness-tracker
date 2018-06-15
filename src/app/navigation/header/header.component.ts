import { Component, OnInit, Output, EventEmitter } from '@angular/core';

@Component({
	selector: 'ft-header',
	templateUrl: './header.component.html',
	styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {

	@Output()
	sidenavToggle: EventEmitter<void> = new EventEmitter();

	constructor() {}

	ngOnInit(): void {}

	onToggleSidenav(): void {
		this.sidenavToggle.emit();
	}

}
