import { Component, EventEmitter, Input, Output, output, SimpleChanges, } from '@angular/core';
import { FormControl, FormGroup, FormsModule, ReactiveFormsModule } from '@angular/forms';
import { UserService } from '../user.service';

@Component({
  selector: 'app-share-practice',
  imports: [FormsModule, ReactiveFormsModule],
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

  form = new FormGroup({
    account: new FormControl("132"),
    password: new FormControl("132"),
  })

  ngOnChanges(changes: SimpleChanges): void {
    this.form.patchValue(changes["user"].currentValue);
  }

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
