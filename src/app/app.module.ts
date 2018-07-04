import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { FlexLayoutModule } from '@angular/flex-layout';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { AngularFireModule } from 'angularfire2';
import { AngularFirestoreModule } from 'angularfire2/firestore';

import { MaterialModule } from './material.module';
import { AppRoutingModule } from './app-routing.module';

import { AuthService } from './auth/auth.service';
import { WorkoutService } from './workouts/workout.service';

import { AppComponent } from './app.component';
import { SignupComponent } from './auth/signup/signup.component';
import { LoginComponent } from './auth/login/login.component';
import { WorkoutsComponent } from './workouts/workouts.component';
import { CurrentWorkoutComponent } from './workouts/current-workout/current-workout.component';
import { StopWorkoutComponent } from './workouts/current-workout/stop-workout.component';
import { NewWorkoutComponent } from './workouts/new-workout/new-workout.component';
import { PastWorkoutsComponent } from './workouts/past-workouts/past-workouts.component';
import { WelcomeComponent } from './welcome/welcome.component';
import { HeaderComponent } from './navigation/header/header.component';
import { SidenavListComponent } from './navigation/sidenav-list/sidenav-list.component';

import { environment } from '../environments/environment';

@NgModule({
	declarations: [
		AppComponent,
		SignupComponent,
		LoginComponent,
		WorkoutsComponent,
		CurrentWorkoutComponent,
		StopWorkoutComponent,
		NewWorkoutComponent,
		PastWorkoutsComponent,
		WelcomeComponent,
		HeaderComponent,
		SidenavListComponent
	],
	imports: [
		BrowserModule,
		BrowserAnimationsModule,
		FlexLayoutModule,
		FormsModule,
		ReactiveFormsModule,
		MaterialModule,
		AppRoutingModule,
		AngularFireModule.initializeApp(environment.firebase),
		AngularFirestoreModule
	],
	entryComponents: [
		StopWorkoutComponent
	],
	providers: [
		AuthService,
		WorkoutService
	],
	bootstrap: [AppComponent]
})
export class AppModule { }
