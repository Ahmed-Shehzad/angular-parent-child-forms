import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder } from '@angular/forms';

@Component({
  selector: 'app-cform',
  templateUrl: './cform.component.html',
  styleUrls: ['./cform.component.scss']
})
export class CformComponent implements OnInit {

  form: FormGroup;

  constructor(private formBuilder: FormBuilder) { }

  ngOnInit(): void {
    this.InitialiseForm();
  }
  
  InitialiseForm(){
    this.form = this.formBuilder.group({
      childInput: '',
      childInput1: '',
      childInput2: '',
      childInput3: '',
      childInput4: '',
      childInput5: '',

    });
  }

}
