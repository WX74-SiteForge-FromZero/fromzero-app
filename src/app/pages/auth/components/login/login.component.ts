import {Component} from '@angular/core';
import {Router} from '@angular/router';
import {FormControl, FormGroup, Validators} from "@angular/forms";
import {AuthApiService} from "../../services/auth-api.service";
import {ProfileService} from "../../../../core/services/profiles/profile.service";
import {forkJoin} from "rxjs";

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrl: './login.component.css'
})
export class LoginComponent {
  constructor(
    private router: Router,
    private _authService: AuthApiService,
    private _profileService: ProfileService) {
  }

  loginForm = new FormGroup({
    email: new FormControl('', Validators.required),
    password: new FormControl('', Validators.required),
  })

  validateLogin(): void {
    const emailControl = this.loginForm.get('email');
    const passwordControl = this.loginForm.get('password');
    let accountType:string
    let profileId:any
    let profileRecordId:string

    if (emailControl && passwordControl) {
      const email = emailControl.value;
      const password = passwordControl.value;

      if (email !== null && password !== null) {
        this._authService.validateUser(email, password).subscribe(user => {
          if (user) {
            localStorage.setItem('token', user.token)
            this._authService.getUserById(user.id).subscribe(response => {
              accountType = response.roles.at(0) || '';
              if (accountType==='COMPANY'){
                this._profileService.getCompanyIdByEmail(user.email).subscribe(response1=>{
                  profileId=response1;
                  this._profileService.getCompanyRecordIdByEmail(user.email).subscribe((response2:any)=>{
                    profileRecordId=response2.profileId;
                    localStorage.setItem('accountType','E')
                    localStorage.setItem('id',profileId.toString())
                    localStorage.setItem('recordId',profileRecordId)
                    this.router.navigate(['/app/main/home']);
                  })
                })
              }else if (accountType==='DEVELOPER'){
                this._profileService.getDeveloperIdByEmail(user.email).subscribe(response1=>{
                  profileId=response1
                  this._profileService.getCompanyRecordIdByEmail(user.email).subscribe((response2:any)=>{
                    profileRecordId=response2.profileId;
                    localStorage.setItem('accountType','D')
                    localStorage.setItem('id',profileId.toString())
                    localStorage.setItem('recordId',profileRecordId)
                    this.router.navigate(['/app-developer/main/home']);
                  })
                })
              }
            })

          } else {
            console.error('Invalid username or password');
          }
        });
      } else {
        console.error('Username or password is null');
      }
    } else {
      console.error('Username or password control does not exist');
    }
  }
}
