import { MainNavComponent } from './../main-nav/main-nav.component';
import { AuthenticationService } from './../../services/authentication.service';
import { Component, OnInit, NgZone } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  loginForm: FormGroup;
  loading = false;
  submitted = false;
  returnUrl: string;
  error = '';

  constructor(
    private formBuilder: FormBuilder,
    private route: ActivatedRoute,
    private router: Router,
    private authenticationService: AuthenticationService
  ) { }

  ngOnInit() {
    if (localStorage.getItem('currentUser')) {
      this.router.navigateByUrl('');
    }

    this.loginForm = this.formBuilder.group({
      username: ['', Validators.required, Validators.email],
      password: ['', Validators.required]
    });
  }

  get f() { return this.loginForm.controls; }

  onSubmit() {
    this.submitted = true;

    // stop here if form is invalid
    if (this.loginForm.invalid) {
      return;
    }

    this.loading = true;
    this.authenticationService.login(this.f.username.value, this.f.password.value)
      .subscribe(
        data => {
          data['username'] = this.f.username.value;
          localStorage.setItem('currentUser', JSON.stringify(data));
          const link = document.createElement('a');
          link.setAttribute('href', '');
          link.click();
        },
        error => {
          this.error = error;
          this.loading = false;
        }
      );
  }

  getErrorMessage() {
    return this.loginForm.hasError('required') ? 'You must enter a value' :
      this.loginForm.hasError('email') ? 'Not a valid email' :
        '';
  }


}
