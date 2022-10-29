import { getLocaleMonthNames } from '@angular/common';
import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'gameDate'
})
export class GameDatePipe implements PipeTransform {
  transform(value: number | undefined, daysInAMonth = 3): string {
    if (value == undefined) return "0"
    let days = value
    let months = Math.floor(days / 30)
    let years = Math.floor(months / 12)

    return `
      ${days % 30}/${months % 12}/${years}
      `
  }

}
