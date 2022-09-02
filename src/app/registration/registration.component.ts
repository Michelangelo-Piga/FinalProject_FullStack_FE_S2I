import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { DataService } from '../services/data.service';
import { Data, Router } from '@angular/router';


@Component({
  selector: 'app-registration',
  templateUrl: './registration.component.html',
  styleUrls: ['./registration.component.scss']
})
export class RegistrationComponent implements OnInit {

  form!: FormGroup;
  submitted = false;
  data: any;
 

  constructor(private formBuilder: FormBuilder, private router:Router, private dataService:DataService) { }


  createForm() {
    this.form = this.formBuilder.group({
      username: ['', [Validators.required]],
      email: ['', [Validators.required, Validators.email]],
      password: ['',[ Validators.required, Validators.minLength(8)]],
      confirmPassword: ['',[Validators.required, Validators.minLength(8)]]
    })
  }

  ngOnInit(): void {
    this.createForm();
  }

  get f() {
    return this.form.controls;
  }

submit() {
    this.submitted = true;
    if(this.form.invalid){
      console.log("Invalid form");
      
      return;
    
  }

  
  console.log("data");
    
  // console.log(this.form.value);

  this.dataService.registerUser(this.form.value).subscribe((res:any) => {
    this.data = res;
    console.log(res);

    if(this.data.status === 0){
      alert("USER ALREADY EXIST");
      console.log("USER ALREADY EXIST");

      this.router.navigate(['']);

    }else if(this.data.status === 1){

      alert("User Registered Successfully");
      console.log("User Registered Successfully");
      this.router.navigate(['/homePage']);
     
    }

    this.submitted = false;
    this.form.get('username')?.reset();
    this.form.get('email')?.reset();
    this.form.get('password')?.reset();
    this.form.get('confirmPassword')?.reset();


  });
}

}


