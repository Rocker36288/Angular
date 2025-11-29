import { NgClass, NgStyle } from '@angular/common';
import { Component } from '@angular/core';

@Component({
  selector: 'app-article',
  imports: [NgStyle, NgClass],
  templateUrl: './article.component.html',
  styleUrl: './article.component.css'
})
export class ArticleComponent {
  fontSize = 10;
  isRed = true;
  isPopular = true;


  test() {
    this.fontSize++;
    this.isRed = !this.isRed;
  }

  changePopular() {
    this.isPopular = true;
  }
  changeNormal() {
    this.isPopular = false;
  }
}
