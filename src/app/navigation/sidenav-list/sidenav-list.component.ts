import { Component, OnInit, OnDestroy, Output, EventEmitter } from '@angular/core';
import { Subscription } from 'rxjs';

import { AuthService } from '../../auth/auth.service';

@Component({
	selector: 'ft-sidenav-list',
	templateUrl: './sidenav-list.component.html',
	styleUrls: ['./sidenav-list.component.scss']
})
export class SidenavListComponent implements OnInit, OnDestroy {

	@Output()
	sidenavToggle: EventEmitter<void> = new EventEmitter();

	isAuthenticated: boolean;
	authSub: Subscription;

	constructor(private authService: AuthService) { }

	ngOnInit(): void {
		this.authSub = this.authService.authChange.subscribe((authStatus: boolean) => {
			this.isAuthenticated = authStatus;
		});
	}

	ngOnDestroy(): void {
		this.authSub.unsubscribe();
	}

	onClose(): void {
		this.sidenavToggle.emit();
	}

	onLogout(): void {
		this.onClose();
		this.authService.logout();
	}

}
