import { Component } from '@angular/core';
import { RouterOutlet, RouterLink, Router } from '@angular/router';
import { LoginComponent } from "./login/login.component";
import { PracticeComponent } from "./practice/practice.component";
import { ArticleComponent } from "./article/article.component";
import { SignUpComponent } from "./sign-up/sign-up.component";

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, LoginComponent, PracticeComponent, ArticleComponent, SignUpComponent, RouterLink],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'Angular';

  constructor(private router: Router) { }

  goToLogin() {
    this.router.navigate(["login"]);
  }
  goToSignup() {
    this.router.navigate(["signup"]);
  }
}
