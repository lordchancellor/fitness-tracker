import { Component, OnInit, OnDestroy, Output, EventEmitter } from '@angular/core';
import { Subscription } from 'rxjs';

import { AuthService } from '../../auth/auth.service';

@Component({
	selector: 'ft-header',
	templateUrl: './header.component.html',
	styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit, OnDestroy {

	@Output()
	sidenavToggle: EventEmitter<void> = new EventEmitter();

	isAuthenticated: boolean;
	authSub: Subscription;

	constructor(private authService: AuthService) {}

	ngOnInit(): void {
		this.authSub = this.authService.authChange.subscribe((authStatus: boolean) => {
			this.isAuthenticated = authStatus;
		});
	}

	ngOnDestroy(): void {
		this.authSub.unsubscribe();
	}

	onLogout(): void {
		this.authService.logout();
	}

	onToggleSidenav(): void {
		this.sidenavToggle.emit();
	}

}
