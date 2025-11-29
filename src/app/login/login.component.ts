import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-login',
  imports: [FormsModule],
  templateUrl: './login.component.html',
  styleUrl: './login.component.css'
})
export class LoginComponent {
  title = "登入";
  accountPlaceholder = "請輸入帳號";
  passwordPlaceholder = "請輸入密碼";
  account = "";
  password = "";
  flag = true

  login() {
    console.log(`輸入的帳號:${this.account}`);
    console.log(`輸入的帳號:${this.password}`);
    this.title = "登入成功";
  }
  test() {
    this.flag = !this.flag;
  }
  autowrite() {
    this.account = "account";
    this.password = "password";
  }
}
