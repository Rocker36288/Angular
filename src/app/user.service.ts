import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  inputUser = {
    account: "aa1206"
  }



  constructor() { }

  getUserData() {
    return this.inputUser;
  }
  checkLength(inputAccount: String, inputPassword: String) {
    if (inputAccount.length > 5 || inputPassword.length > 5) {
      return "輸入字數>5";
    }
    return "";
  }
  checkRequired(inputAccount: String, inputPassword: String) {
    if (!inputAccount && !inputPassword) {
      return "帳號跟密碼為必填欄位";
    }
    if (!inputAccount) {
      return "帳號為必填欄位";
    }
    if (!inputPassword) {
      return "密碼為必填欄位";
    }

    return ""
  }


}

