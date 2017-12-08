import {Pipe, PipeTransform} from '@angular/core';
import {startWith} from 'rxjs/operators';

@Pipe({
  name: 'filter'
})
export class FilterPipe implements PipeTransform {

  transform(value: any, filterString: string, propName: string): any {
    if (value.length === 0 || filterString === '') {
      return value;
    }
    const resultArray = [];
    for (const item of value) {
      if (item[propName].toLowerCase().startsWith(filterString.toLowerCase()) ) {
        resultArray.push(item);
      }
    }
    return resultArray;
  }

}
