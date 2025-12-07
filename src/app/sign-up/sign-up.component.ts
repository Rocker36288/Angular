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

  defaultData: any;

  ngOnInit(): void {
    this.defaultData = this.form.value;

    // this.form.get("account")?.valueChanges.subscribe((data) => {
    //   console.log(data);
    // })

    // this.form.patchValue({
    //   //更新form部分資料
    //   account: "123",
    //   password: "456",
    // })

    // this.form.setValue({
    //...設定form所有的資料
    // })
  }

  getAddress() {
    return (this.form.get("address") as FormArray).controls
  }

  submit() {
    console.log(this.form.value);
  }

  reset() {
    this.form.reset(this.defaultData);
  }
}
