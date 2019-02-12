import { AuthenticationService } from './services/authentication/authentication.service'
import { Component } from '@angular/core'
import { Observable } from 'rxjs'

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'code-coverage-conspiracy'
  loggedIn: Observable<boolean>

  constructor(private authService: AuthenticationService) {
    this.loggedIn = this.authService.getStatus()
    this.authService.logout()
  }
}
