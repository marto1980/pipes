import { DatePipe } from '@angular/common'
import { Component } from '@angular/core'

import { SortPipe } from './sort-pipe'
import { TemperaturePipe } from './temperature-pipe'

@Component({
  selector: 'app-root',
  standalone: true,
  templateUrl: './app.html',
  imports: [DatePipe, TemperaturePipe, SortPipe],
})
export class App {
  currentDate = new Date()
  currentTemperaturs = {
    berlin: 4.274_981_2,
    newYork: 18.1214,
    paris: 72.120_900_1,
    chicago: 65.077_523_8,
  }

  historicTemperatures = [
    25, 37, 19, -4, 28, 21, 18, 27, 33, 31, 9, 11, 5, -12, -5,
  ]

  onReset(index: number) {
    const historicTemperaturesCopy = [...this.historicTemperatures]
    historicTemperaturesCopy.splice(index, 1, 18)
    this.historicTemperatures = historicTemperaturesCopy
  }
}
