import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-inicio-sesion',
  templateUrl: './inicio-sesion.component.html',
  styleUrls: ['./inicio-sesion.component.scss']
})
export class InicioSesionComponent implements OnInit {
  public formGroup: FormGroup = new FormGroup({});


  constructor(private formBuilder: FormBuilder) { }

  ngOnInit(): void {
    this.buildForm();
  }
  public buildForm(){
    this.formGroup = this.formBuilder.group({
      email: ['', Validators.required],
      contrasena: ['', Validators.required],
    });
  }
  public inicioSesion(){
    console.log(this.formGroup.value)
  }
}
