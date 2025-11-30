import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-practice',
  imports: [FormsModule],
  templateUrl: './practice.component.html',
  styleUrl: './practice.component.css'
})
export class PracticeComponent {
  /** 標題 */
  title = '新增';

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
  submit() {
    if (!(this.user.account) && !(this.user.password)) {
      alert('必須輸入帳號跟密碼');
      return;
    }
    if (!(this.user.account)) {
      alert('必須輸入帳號');
      return;
    }
    if (!(this.user.password)) {
      alert('必須輸入密碼');
      return;
    }

    if (this.showUser.findIndex(x => x.account === this.user.account) != -1) {
      this.status = "有重複帳號"
    }
    else {
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
