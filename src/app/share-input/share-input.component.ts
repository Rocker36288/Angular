import { Component, EventEmitter, Input, NgModule, Output, SimpleChanges } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-share-input',
  imports: [FormsModule],
  templateUrl: './share-input.component.html',
  styleUrl: './share-input.component.css'
})
export class ShareInputComponent {
  isFormatted = false;
  @Input() account = "";
  @Input() password = "";
  @Input() inputUser = {
    account: ""
  };

  @Output() sendEmitter = new EventEmitter();

  login() {
    this.sendEmitter.emit({
      account: this.account,
      password: this.password
    });
  }
  // // Hook / construct
  // constructor() {
  //   console.log('constructor');
  // }

  ngOnInit() {
    // console.log('ngOnInit');
    // alert("廣告訊息")
  }

  ngOnChanges(change: SimpleChanges) {
    console.log('ngOnChanges', change);
    if (change['account'] && change['account'].currentValue) {
      console.log('account', change['account'].currentValue);
    }
  }

  ngDoCheck() {
    console.log('ngDoCheck');


    this.account = this.account.toUpperCase();
    console.log(this.account);

    // this.account = `test ${this.account}`;
    // console.log(this.account);

  }

  ngAfterContentInit() {
    console.log('ngAfterContentInit');
  }
  // ngAfterContentChecked() {
  //   console.log('ngAfterContentChecked');
  // }

  // ngAfterViewInit() {
  //   console.log('ngAfterViewInit');
  // }

  // ngAfterViewChecked() {
  //   console.log('ngAfterViewChecked');
  // }

  // ngOnDestroy() {
  //   console.log('ngOnDestroy');
  // }
}

