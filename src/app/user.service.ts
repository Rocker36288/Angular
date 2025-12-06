import { appConfig } from './app.config';
import { Injectable } from '@angular/core';
import { ErrorMsgType } from './enums/errMsgType';
import { HttpClient } from '@angular/common/http';
import { Article } from './interfaces/article';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  inputUser = {
    account: "aa1206"
  }



  constructor(private httpClient: HttpClient) { }

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

  checkInput(input: string) {
    if (input.length > 5) {
      return {
        isValid: false,
        errMsg: ErrorMsgType.OverMax5
      };
    }
    if (!input) {
      return {
        isValid: false,
        errMsg: ErrorMsgType.Required
      };
    }
    return {
      isValid: true,
      errMsg: ErrorMsgType.Pass
    }
  }
  getArticleApi() {
    return this.httpClient.get<Article[]>("https://localhost:7008/Article");
  }
}

