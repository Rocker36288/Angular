import { Component } from '@angular/core';
import { FormArray, FormControl, FormGroup, ReactiveFormsModule } from '@angular/forms';

@Component({
  selector: 'app-sign-up',
  imports: [ReactiveFormsModule],
  templateUrl: './sign-up.component.html',
  styleUrl: './sign-up.component.css'
})
export class SignUpComponent {
  form = new FormGroup({
    account: new FormControl("2025"),
    password: new FormControl("1207"),
    info: new FormGroup({
      age: new FormControl(26),
      tall: new FormControl(175),
    }),
    address: new FormArray([
      new FormControl("地址1"),
      new FormControl("地址2"),
      new FormControl("地址3"),
    ])
  })

  getAddress() {
    return (this.form.get("address") as FormArray).controls
  }

  submit() {
    console.log(this.form.value);
  }
}
