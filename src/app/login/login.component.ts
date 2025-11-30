import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { ShareInputComponent } from "../share-input/share-input.component";

@Component({
  selector: 'app-login',
  imports: [FormsModule, ShareInputComponent],
  templateUrl: './login.component.html',
  styleUrl: './login.component.css'
})
export class LoginComponent {
  title = "登入";
  accountPlaceholder = "請輸入帳號";
  passwordPlaceholder = "請輸入密碼";
  account = "aa123";
  password = "";
  flag = true
  inputUser = {
    account: "aa123"
  }

  send(para: any) {
    console.log(para);
  }
  test() {
    this.flag = !this.flag;
  }
  autowrite() {
    this.account = "account";
    this.password = "password";
  }
  test1() {
    this.account = "456";
    this.inputUser = {
      account: "456"
    }
  }
}
