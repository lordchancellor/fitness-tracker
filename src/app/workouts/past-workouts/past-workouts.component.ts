import { Component, OnInit, AfterViewInit, ViewChild } from '@angular/core';
import { MatTableDataSource, MatSort, MatPaginator } from '@angular/material';

import { WorkoutService } from '../workout.service';

import { Workout } from '../workout.model';

@Component({
	selector: 'ft-past-workouts',
	templateUrl: './past-workouts.component.html',
	styleUrls: ['./past-workouts.component.scss']
})
export class PastWorkoutsComponent implements OnInit, AfterViewInit {

	displayedColumns: string[] = [ 'date', 'name', 'duration', 'calories', 'state' ];
	dataSource: any = new MatTableDataSource<Workout>();

	@ViewChild(MatSort)
	sort: MatSort;

	@ViewChild(MatPaginator)
	paginator: MatPaginator;

	constructor(private workoutService: WorkoutService) { }

	// Lifecycle Hooks
	ngOnInit(): void {
		this.dataSource.data = this.workoutService.getCompletedOrCancelledWorkouts();
	}

	ngAfterViewInit(): void {
		this.dataSource.sort = this.sort;
		this.dataSource.paginator = this.paginator;
	}


	// Component Functionality Methods
	onFilter(value: string): void {
		this.dataSource.filter = value.trim().toLowerCase();
	}

}
