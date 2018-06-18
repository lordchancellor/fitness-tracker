import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';

import { User } from './user.model';
import { AuthData } from './auth-data.model';

@Injectable()
export class AuthService {
	
	public authChange: Subject<boolean> = new Subject();
	private user: User;

	registerUser(authData: AuthData): void {
		this.user = {
			email: authData.email,
			userId: Math.round(Math.random() * 10000).toString()
		};

		this.authChange.next(true);
	}
	
	login(authData: AuthData): void {
		this.user = {
			email: authData.email,
			userId: Math.round(Math.random() * 10000).toString()
		};

		this.authChange.next(true);
	}

	logout(): void {
		this.user = null;
		this.authChange.next(false);
	}

	getUser(): User {
		return { ...this.user };
	}

	isAuthenticated(): boolean {
		return this.user !== null;
	}

}
