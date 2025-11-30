import { NgClass, NgStyle } from '@angular/common';
import { Component } from '@angular/core';
import { Title } from '@angular/platform-browser';

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
  type = 1;

  articles = [
    {
      title: "標題1",
      content: "內容1"
    },
    {
      title: "標題2",
      content: "內容2"
    },
  ]

  test() {
    this.fontSize++;
    this.isRed = !this.isRed;
  }

  changePopular() {
    this.isPopular = true;
    this.type = 1;
  }
  changeNormal() {
    this.isPopular = false;
    this.type = 2;
  }
  addArticle() {
    this.articles.push({
      title: "標題99",
      content: "內容99"
    })
  }
  clearArticle() {
    this.articles = [];
  }
}
