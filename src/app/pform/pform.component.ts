import { Component, OnInit, ViewChild } from '@angular/core';
import { FormGroup, FormBuilder } from '@angular/forms';
import { CformComponent } from '../cform/cform.component';

@Component({
  selector: 'app-pform',
  templateUrl: './pform.component.html',
  styleUrls: ['./pform.component.scss']
})
export class PformComponent implements OnInit {

  @ViewChild(CformComponent) childComponent: CformComponent;

  form: FormGroup;

  constructor(private formBuilder: FormBuilder) { }

  ngOnInit(): void {
    this.InitialiseForm();
  }

  ngAfterViewInit() {
    this.form.addControl('childForm', this.childComponent.form);
    this.childComponent.form.setParent(this.form);    
  }

  InitialiseForm(){
    this.form = this.formBuilder.group({
      mainInput: ''
    });
  }
  
  submit(){
    console.log(this.form);
  }


  next(){
    console.log("next " + JSON.stringify(this.form.value));
  }

}
