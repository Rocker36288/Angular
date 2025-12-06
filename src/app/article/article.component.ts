import { NgClass, NgStyle } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { UserService } from '../user.service';
import { Article } from '../interfaces/article';

@Component({
  selector: 'app-article',
  imports: [NgStyle, NgClass],
  templateUrl: './article.component.html',
  styleUrl: './article.component.css'
})
export class ArticleComponent implements OnInit {
  fontSize = 10;
  isRed = true;
  isPopular = true;
  type = 1;

  articles: Article[] = []

  constructor(private userService: UserService) { }

  ngOnInit(): void {
    this.userService.getArticleApi().subscribe((data) => {
      this.articles = data;
      console.log(data);
    })
  }
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
