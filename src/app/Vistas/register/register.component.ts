import { Component, NgModule } from '@angular/core';
import {FormGroup,FormControl,Validators} from '@angular/forms'
import {ReactiveFormsModule,FormsModule} from '@angular/forms'
import { ApiService } from '../../servicios/api/api.service'
import {RegisterRequest} from '../../Request/Register.Request'


@Component({
  selector: 'app-register',
  standalone: true,
  imports: [ 
    ReactiveFormsModule,
    FormsModule
  ],
  templateUrl: './register.component.html',
  styleUrl: './register.component.scss'
})


export class RegisterComponent {

  // RegistroForm = new FormGroup({
  //   Username : new FormControl('',Validators.required),
  //   Email : new FormControl('',Validators.required),
  //   Number : new FormControl('',Validators.required),
  //   Password : new FormControl('',Validators.required)

  // }) 



  // constructor(private api : ApiService) { }

  // onLogin (form: Object ){
  //   const RegisterConver = form as RegisterRequest;
  //   this.api.RegisterByEmail(RegisterConver).subscribe(data =>{
  //     console.log(data)
  //   })
  // }

  //Estilos
  SignUp() {
    const sign_up_btn: HTMLElement | null = document.querySelector("#sign-up-btn") ;
    const container: HTMLElement | null = document.querySelector(".container");
    if(sign_up_btn && container != null){
      sign_up_btn.addEventListener("click", () => {
        container.classList.add("sign-up-mode");
    })
    }
  }
  SignIn() {
    
    const sign_in_btn: HTMLElement | null = document.querySelector("#sign-in-btn");
    const container: HTMLElement | null = document.querySelector(".container");
    if(sign_in_btn && container != null){
      sign_in_btn.addEventListener("click", () => {
        container.classList.remove("sign-up-mode");
    })
    }
  }

  SignUp2() {
    const sign_up_btn2: HTMLElement | null = document.querySelector("#sign-up-btn2");
    const container: HTMLElement | null = document.querySelector(".container");
    if(sign_up_btn2 && container != null){
      sign_up_btn2.addEventListener("click", () => {
        container.classList.add("sign-up-mode2");
    })
    }
  }
  SignIn2() {
    
    const sign_in_btn2: HTMLElement | null = document.querySelector("#sign-in-btn2");
    const container: HTMLElement | null = document.querySelector(".container");
    if(sign_in_btn2 && container != null){
      sign_in_btn2.addEventListener("click", () => {
        container.classList.remove("sign-up-mode2");
    })
    }
  }

}
