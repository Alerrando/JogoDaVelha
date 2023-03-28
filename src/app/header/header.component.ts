import { AuthComponent } from './../services/auth/auth.component';
import { Router } from '@angular/router';
import { Component } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss'],
})
export class HeaderComponent {
  constructor(private router: Router) {}
  private auth: AuthComponent = new AuthComponent(this.router);

  goToHome() {
    this.router.navigate(['/home']);
  }

  logout() {
    this.auth.logout();
  }
}
