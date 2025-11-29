import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { LoginComponent } from "./login/login.component";
import { PracticeComponent } from "./practice/practice.component";
import { ArticleComponent } from "./article/article.component";

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, LoginComponent, PracticeComponent, ArticleComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'Angular';
}
