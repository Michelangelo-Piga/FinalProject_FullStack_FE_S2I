import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Data, Router } from '@angular/router';
import { DataService } from '../services/data.service';
import { AuthGuard } from '../auth.guard';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  form !: FormGroup;
  submitted = false;
  data:any;
  token: any;


  constructor(private formBuilder: FormBuilder, private router:Router, private dataService:DataService, private authguard:AuthGuard ) { }

  loginForm(){
    this.form = this.formBuilder.group({
      email: ['', [Validators.required, Validators.email]],
      password: ['', [Validators.required] ]
    })
  }

  ngOnInit(): void {
    this.loginForm();
  }

  get f(){
    return this.form.controls;
  }

  submit() {
    this.dataService.login(this.form.value).subscribe((res: any) => {
      this.data = res;
      this.authguard.setIdUser(this.data[1][0]['id']);
      // console.log(this.authguard.getIdUser());
      console.log(this.data);
      if(this.data[0] == true){
        // this.token = this.data.data.token;
        localStorage.setItem('token', 'true');
        localStorage.setItem('userId',this.authguard.getIdUser());
        // localStorage.setItem('username',this.data.)
        console.log(this.form.value.email);
        console.log(this.data[1][0].username);
        
        localStorage.setItem('email',this.form.value.email);
        localStorage.setItem('username', this.data[1][0].username);
        
        

        // console.log("inside if");
        
        this.router.navigate(['/homePage']);
      } else if(this.data == false || this.data == null ){
        alert("Insert a valid email and password");
        // console.log(this.data);
      }
    });

    
  
  }

}
