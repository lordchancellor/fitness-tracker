import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { AngularFireAuth } from 'angularfire2/auth';
import { Subject } from 'rxjs';

import { AuthData } from './auth-data.model';
import { WorkoutService } from '../workouts/workout.service';

@Injectable()
export class AuthService {
	
	public authChange: Subject<boolean> = new Subject();
	private isAuth: boolean = false;

	constructor(private router: Router,
							private afAuth: AngularFireAuth,
							private workoutService: WorkoutService) {}

	initAuthListener(): void {
		this.afAuth.authState.subscribe(
			user => {
				if (user) {
					this.isAuth = true;
					this.authChange.next(true);
					this.router.navigate([ '/workouts' ]);
				}
				else {
					this.workoutService.cancelSubscriptions();
					this.authChange.next(false);
					this.router.navigate([ '/login' ]);
					this.isAuth = false;
				}
			}
		);
	}

	registerUser(authData: AuthData): void {
		this.afAuth.auth.createUserWithEmailAndPassword(authData.email, authData.password)
			.then(res => console.log(res))
			.catch(err => console.log(err));
	}
	
	login(authData: AuthData): void {
		this.afAuth.auth.signInWithEmailAndPassword(authData.email, authData.password)
			.then(res => console.log(res))
			.catch(err => console.log(err));
	}
	
	logout(): void {
		this.afAuth.auth.signOut();
	}
	
	isAuthenticated(): boolean {
		return this.isAuth;
	}
	
}
