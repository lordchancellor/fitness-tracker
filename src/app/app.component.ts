import { Component, OnInit } from '@angular/core';

import { AuthService } from './auth/auth.service';

@Component({
	selector: 'ft-root',
	templateUrl: './app.component.html',
	styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {

	constructor(private authService: AuthService) {}
	
	// Lifecycle Hooks
	ngOnInit(): void {
		this.authService.initAuthListener();
	}
		
}
