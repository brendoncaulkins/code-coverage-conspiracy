import { Component, EventEmitter, OnInit, Output } from '@angular/core'

import { Conspiracy } from 'src/app/models/conspiracy.model'
import { ConspiracyService } from 'src/app/services/conspiracy/conspiracy.service'
import { Observable } from 'rxjs'
import { map } from 'rxjs/operators'

@Component({
  selector: 'app-list-conspiracies',
  templateUrl: './list-conspiracies.component.html',
  styleUrls: ['./list-conspiracies.component.css']
})
export class ListConspiraciesComponent {
  @Output() chosenConspiracy: EventEmitter<Conspiracy>

  conspiracies: Observable<Conspiracy[]>

  constructor(public conspiracyService: ConspiracyService) {
    this.chosenConspiracy = new EventEmitter<Conspiracy>(true)
    this.conspiracies = this.conspiracyService
      .getConspiracies()
      .pipe(map(list => list.sort((a, b) => this.sortByTitle(a, b))))
  }

  sortByTitle(a: Conspiracy, b: Conspiracy): number {
    const x = a.title ? a.title.toLowerCase() : null
    const y = b.title ? b.title.toLowerCase() : null
    if (x < y) {
      return -1
    }
    if (x > y) {
      return 1
    }
    return 0
  }
}
