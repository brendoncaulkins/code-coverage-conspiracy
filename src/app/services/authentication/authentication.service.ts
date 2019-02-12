import { BehaviorSubject, Observable } from 'rxjs'

import { Injectable } from '@angular/core'

@Injectable({
  providedIn: 'root'
})
export class AuthenticationService {
  status: BehaviorSubject<boolean>

  constructor() {
    this.status = new BehaviorSubject<boolean>(false)
  }

  getStatus(): Observable<boolean> {
    return this.status.asObservable()
  }

  logout(): void {
    this.status.next(false)
  }

  login(username: string, password: string): void {
    // assume it's good for now
    this.status.next(true)
  }
}
