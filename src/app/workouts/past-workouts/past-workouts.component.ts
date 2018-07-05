import { Component, OnInit, AfterViewInit, OnDestroy, ViewChild } from '@angular/core';
import { MatTableDataSource, MatSort, MatPaginator } from '@angular/material';
import { Subscription } from 'rxjs';

import { WorkoutService } from '../workout.service';

import { Workout } from '../workout.model';

@Component({
	selector: 'ft-past-workouts',
	templateUrl: './past-workouts.component.html',
	styleUrls: ['./past-workouts.component.scss']
})
export class PastWorkoutsComponent implements OnInit, AfterViewInit, OnDestroy {

	displayedColumns: string[] = [ 'date', 'name', 'duration', 'calories', 'state' ];
	dataSource: any = new MatTableDataSource<Workout>();

	workoutSub: Subscription;

	@ViewChild(MatSort)
	sort: MatSort;

	@ViewChild(MatPaginator)
	paginator: MatPaginator;

	constructor(private workoutService: WorkoutService) { }

	// Lifecycle Hooks
	ngOnInit(): void {
		this.workoutSub = this.workoutService.finishedWorkoutsChanged.subscribe(
			(workouts: Workout[]) => this.dataSource.data = workouts
		);

		this.workoutService.fetchFinishedWorkouts();
	}

	ngAfterViewInit(): void {
		this.dataSource.sort = this.sort;
		this.dataSource.paginator = this.paginator;
	}

	ngOnDestroy(): void {
		this.workoutSub.unsubscribe();
	}


	// Component Functionality Methods
	onFilter(value: string): void {
		this.dataSource.filter = value.trim().toLowerCase();
	}

}
