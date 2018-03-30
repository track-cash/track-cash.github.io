import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'date'
})
export class DatePipe implements PipeTransform {

  transform(value: any, args?: any): any {
    const date = new Date(value + '');
    return date.getDate() < 10 ? '0' + date.getDate() : date.getDate() + '';
  }

}
