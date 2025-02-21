import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-navigation-header',
  templateUrl: './navigation-header.component.html',
  styleUrls: ['./navigation-header.component.scss']
})
export class NavigationHeaderComponent {
  public isActive: Record<string, boolean> = {
    calculator: true,
    weather: false,
    todo: false,
  };


  constructor(
    private router: Router,
  ) {}

  public navigate(route: string): void {
    console.log(`Clicked on route ${route}`);
    this.router.navigate([route]);

    for (const key of Object.keys(this.isActive)) {
      this.isActive[key] = key === route;
    }
  }
}
