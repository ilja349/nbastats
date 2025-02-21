import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-landing-page',
  templateUrl: './landing-page.component.html',
  styleUrls: ['./landing-page.component.scss']
})
export class LandingPageComponent {
  constructor(
    private readonly router: Router
  ) {}

  navigate(route: string) {
    console.log("navigate aufgerufen");

    this.router.navigate([route]);

    // TODO: Add navigation logic
  }
}
