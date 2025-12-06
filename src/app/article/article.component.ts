import { DatePipe, NgClass, NgStyle, UpperCasePipe } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { UserService } from '../user.service';
import { Article } from '../interfaces/article';
import { ArticlePipe } from '../article.pipe';

@Component({
  selector: 'app-article',
  imports: [NgStyle, NgClass, UpperCasePipe, DatePipe, ArticlePipe],
  templateUrl: './article.component.html',
  styleUrl: './article.component.css'
})
export class ArticleComponent implements OnInit {
  fontSize = 20;
  isRed = true;
  isPopular = true;
  type = 1;

  articles: Article[] = [
    {
      title: "標題1",
      content: "內容1"
    },
    {
      title: "標題2",
      content: "內容2"
    },
  ]
  nowDate = new Date()

  constructor(private userService: UserService) { }

  ngOnInit(): void {
    // console.log(1);

    // this.userService.getArticleApi().subscribe((data) => {
    //   this.articles = data;
    //   console.log(2);
    // })

    // console.log(3);

    // let para = {
    //   title: "",
    //   content: ""
    // }
    // this.userService.postArticleApi(para).subscribe((data) => {
    //   this.articles = data;
    //   console.log(4);
    // })
    // console.log(5);
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
