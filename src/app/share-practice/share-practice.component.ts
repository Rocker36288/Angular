import { Component, EventEmitter, Input, Output, output, } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-share-practice',
  imports: [FormsModule],
  templateUrl: './share-practice.component.html',
  styleUrl: './share-practice.component.css'
})
export class SharePracticeComponent {
  @Input() message = "";
  @Input() isDisable = false;
  @Input() user = {
    account: "",
    password: ""
  };

  @Output() submitEmitter = new EventEmitter();
  @Output() clearEmitter = new EventEmitter();
  submit() {
    if (!(this.user.account && this.user.password)) {
      this.message = "帳號跟密碼必須輸入完整";
      return;
    }
    this.submitEmitter.emit();
  } clear() { }
  switch() { }
}
