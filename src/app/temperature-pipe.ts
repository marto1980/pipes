import { Pipe, PipeTransform } from '@angular/core'

@Pipe({
  name: 'temperature',
})
export class TemperaturePipe implements PipeTransform {
  transform(value: number, ...args: readonly unknown[]) {
    console.log('args', args)

    return value.toString() + ' - transformed'
  }
}
