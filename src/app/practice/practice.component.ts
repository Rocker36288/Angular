import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { SharePracticeComponent } from "../share-practice/share-practice.component";

@Component({
  selector: 'app-practice',
  imports: [FormsModule, SharePracticeComponent],
  templateUrl: './practice.component.html',
  styleUrl: './practice.component.css'
})
export class PracticeComponent {
  /** 標題 */
  title = '新增';
  message = "";
  status = "";

  /** 使用者資料 */
  user = {
    account: "",
    password: ""
  };

  /** 顯示使用者資料 */
  showUser: {
    account: string,
    password: string
  }[] = [];

  /** 帳號是否可以輸入 */
  isDisable = false;

  /** 送出 */
  submit(para: any) {
    this.message = "";
    // if (!(this.user.account && this.user.password)) {
    //   this.message = "帳號跟密碼必須輸入完整";
    //   return;
    // }

    if (this.showUser.findIndex(x => x.account === this.user.account) != -1) {
      this.status = "有重複帳號";
    }
    else {
      this.status = "";
      this.showUser.push(
        {
          account: this.user.account,
          password: this.user.password
        }
      )
    }
  }

  /** 清除 */
  clear() {
    if (!this.isDisable) {
      this.user.account = '';
    }
    this.user.password = '';
    this.showUser = [];
  }

  /** 切換新增/修改 */
  switch() {
    this.isDisable = !this.isDisable;
    this.title = this.isDisable ? '修改' : '新增';
  }
}
