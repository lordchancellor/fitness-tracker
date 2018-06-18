import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';

import { AuthService } from '../auth.service';

@Component({
	selector: 'ft-signup',
	templateUrl: './signup.component.html',
	styleUrls: ['./signup.component.scss']
})
export class SignupComponent implements OnInit {

	maxDate: Date;

	constructor(private authService: AuthService) { }

	ngOnInit(): void {
		this.maxDate = new Date();
		this.maxDate.setFullYear(new Date().getFullYear() - 18);
	}

	onSubmit(form: NgForm): void {
		this.authService.registerUser({
			email: form.value.email,
			password: form.value.password
		});
	}

}
