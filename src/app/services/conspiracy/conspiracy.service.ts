import { BehaviorSubject, Observable } from 'rxjs'

import { Conspiracy } from 'src/app/models/conspiracy.model'
import { Injectable } from '@angular/core'

const codeCoverageConspiracy: Conspiracy = {
  id: 1,
  title: 'The Code Coverage Conspiracy',
  conspirators: ['Jasmine', 'Angular TestBed', 'Angular CLI'],
  details:
    'These default components of the Angular development ecosystem construe and hide the true nature of what your tests cover!'
}

const enemyOfTheState: Conspiracy = {
  id: 2,
  title: 'Enemy of the State',
  conspirators: [
    'Robert Clayton Dean (Will Smith)',
    '"Brill" Lyle (Gene Hackman)',
    'Agent Reynolds (John Voight)'
  ],
  details:
    'The film tells the story of a group of NSA agents conspiring to kill a Congressman and the cover up that ensues after a tape of the murder is discovered.'
}

const eraser: Conspiracy = {
  id: 3,
  title: 'Eraser',
  conspirators: [
    'US Marshall John Kruger (Arnold Schwarzenegger)',
    'US Marshall Robert DeGuerin (James Caan)',
    'Lee Cullen (Vanessa Williams)'
  ],
  details:
    'Rogue Pentagon officials sell high-tech arms under the table and eliminate the witnesses with the help of rogue U.S. Marshals'
}

@Injectable({
  providedIn: 'root'
})
export class ConspiracyService {
  private conspiracies: BehaviorSubject<Conspiracy[]>

  constructor() {
    this.conspiracies = new BehaviorSubject<Conspiracy[]>([])
    this.loadData()
  }

  loadData(): void {
    this.addConspiracy(enemyOfTheState)
    this.addConspiracy(codeCoverageConspiracy)
    this.addConspiracy(eraser)
  }

  getConspiracies(): Observable<Conspiracy[]> {
    return this.conspiracies.asObservable()
  }

  addConspiracy(conspiracy: Conspiracy): void {
    const updatedList = this.conspiracies.value
    conspiracy.id = updatedList.length + 1
    updatedList.push(conspiracy)
    this.conspiracies.next(updatedList)
  }

  deleteConspiracy(id: number): void {
    this.conspiracies.next(this.conspiracies.value.filter(c => c.id !== id))
  }
}
