import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

import { AuthService } from '../auth.service';

@Component({
	selector: 'ft-login',
	templateUrl: './login.component.html',
	styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

	loginForm: FormGroup;

	constructor(private formBuilder: FormBuilder, private authService: AuthService) { }

	ngOnInit(): void {
		this.loginForm = this.formBuilder.group({
			email: ['', Validators.compose([Validators.required, Validators.email])],
			password: ['', Validators.required]
		});
	}

	onSubmit(): void {
		this.authService.login({
			email: this.loginForm.value.email,
			password: this.loginForm.value.password
		});
	}

}
