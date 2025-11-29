import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-practice',
  imports: [FormsModule],
  templateUrl: './practice.component.html',
  styleUrl: './practice.component.css'
})
export class PracticeComponent {
  title = "新增";
  account = "";
  password = "";
  showAccount = "帳號:";
  showPassword = "密碼:";
  isDisabled = false;
  submit() {
    if (!(this.account && this.password)) {
      alert("請輸入完整!")
      return;
    }
    this.showAccount = `帳號:${this.account}`;
    this.showPassword = `密碼:${this.password}`;
  }
  clear() {
    this.account = "";
    this.password = "";
    this.showAccount = "";
    this.showPassword = "";

  }
  change() {
    this.isDisabled = !this.isDisabled;
    this.title = this.isDisabled ? '修改' : '新增';
  }
}
