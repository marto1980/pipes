import { Pipe, PipeTransform } from '@angular/core'

@Pipe({
  name: 'temperature',
})
export class TemperaturePipe implements PipeTransform {
  transform(value: number | string, ...args: readonly unknown[]) {
    console.log('args', args)

    const celsius = typeof value === 'string' ? Number.parseFloat(value) : value

    const fahrenheit = (celsius * 9) / 5 + 32

    return `${fahrenheit.toString()} ° F`
  }
}
