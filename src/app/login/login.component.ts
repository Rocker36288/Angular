import { UserService } from './../user.service';
import { Component, OnInit } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { ShareInputComponent } from "../share-input/share-input.component";
import { ButtonModule } from 'primeng/button';

@Component({
  selector: 'app-login',
  imports: [FormsModule, ShareInputComponent, ButtonModule],
  templateUrl: './login.component.html',
  styleUrl: './login.component.css'
})
export class LoginComponent implements OnInit {
  title = "登入";
  accountPlaceholder = "請輸入帳號";
  passwordPlaceholder = "請輸入密碼";
  account = "aa123";
  password = "";
  flag = true
  inputUser: {
    account: string
  } = {
      account: ''
    }


  constructor(private userService: UserService) {

  }
  ngOnInit(): void {
    console.log(this.userService.inputUser);
    const data = this.userService.getUserData();
    console.log(data);

    this.inputUser = this.userService.getUserData();
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
