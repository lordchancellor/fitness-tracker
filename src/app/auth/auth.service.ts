import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { Subject } from 'rxjs';

import { User } from './user.model';
import { AuthData } from './auth-data.model';

@Injectable()
export class AuthService {
	
	public authChange: Subject<boolean> = new Subject();
	private user: User;

	constructor(private router: Router) {}

	registerUser(authData: AuthData): void {
		this.user = {
			email: authData.email,
			userId: Math.round(Math.random() * 10000).toString()
		};
		
		this.userAuthenticated();
	}
	
	login(authData: AuthData): void {
		this.user = {
			email: authData.email,
			userId: Math.round(Math.random() * 10000).toString()
		};
		
		this.userAuthenticated();
	}
	
	logout(): void {
		this.user = null;
		this.authChange.next(false);
		
		this.router.navigate([ '/login' ]);
	}
	
	getUser(): User {
		return { ...this.user };
	}
	
	isAuthenticated(): boolean {
		return this.user != null;
	}
	
	private userAuthenticated(): void {
		this.authChange.next(true);
		this.router.navigate([ '/workouts' ]);
	}

}
