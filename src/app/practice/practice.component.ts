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
  showAccount = "";
  showPassword = "";
  showAlert = "";
  isDisabled = false;
  submit() {
    if (!(this.account) && !(this.password)) {
      this.showAlert = "請輸入帳號跟密碼!";
      return;
    }
    if (!(this.account)) {
      this.showAlert = "請輸入帳號!";
      return;
    }
    if (!(this.password)) {
      this.showAlert = "請輸入密碼!";
      return;
    }
    this.showAccount = this.account;
    this.showPassword = this.password;
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
