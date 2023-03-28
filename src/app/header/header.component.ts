import { AuthComponent } from './../services/auth/auth.component';
import { Router } from '@angular/router';
import { Component } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent {

  private auth: AuthComponent | undefined;
  constructor (private router: Router) {  }

  goToHome(){
    this.router.navigate(['/home']);
  }

  logout(){
    this.auth!.logout();
  }
}
