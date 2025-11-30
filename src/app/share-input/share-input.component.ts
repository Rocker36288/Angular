import { Component, EventEmitter, Input, NgModule, Output } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-share-input',
  imports: [FormsModule],
  templateUrl: './share-input.component.html',
  styleUrl: './share-input.component.css'
})
export class ShareInputComponent {
  @Input() account = "";
  @Input() password = "";

  @Output() sendEmitter = new EventEmitter();

  login() {
    this.sendEmitter.emit({
      account: this.account,
      password: this.password
    });
  }
}
