import { Component, EventEmitter, Input, Output, output, } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { UserService } from '../user.service';

@Component({
  selector: 'app-share-practice',
  imports: [FormsModule],
  templateUrl: './share-practice.component.html',
  styleUrl: './share-practice.component.css'
})
export class SharePracticeComponent {
  constructor(private userService: UserService) { }
  isDisable = false;
  @Input() message = "";
  @Input() user = {
    account: "",
    password: ""
  };

  @Output() submitEmitter = new EventEmitter();
  @Output() clearEmitter = new EventEmitter();

  submit() {
    const requiredError = this.userService.checkRequired(this.user.account, this.user.password)
    const lengthError = this.userService.checkLength(this.user.account, this.user.password)
    this.message = "";
    if (requiredError) {
      this.message = requiredError
      return;
    }
    if (lengthError) {
      alert(lengthError);
      return;
    }

    this.submitEmitter.emit();
  }
  clear() {
    if (!this.isDisable) {
      this.user.account = '';
    }
    this.user.password = '';
    this.clearEmitter.emit();
  }
  switch() {
    this.isDisable = !this.isDisable;
  }
}
