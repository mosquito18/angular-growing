import { Pipe, PipeTransform } from '@angular/core';


@Pipe({
  name: 'textfilter'
})
export class FilterPipe implements PipeTransform {

  transform(items: any[], args: any[], searchVal: string): any {
    if (searchVal.toString().length === 0) {
      return items;
    }
    if (items instanceof Array) {
      if (items.length > 0) {
        const newArray = [];
        items.forEach(item => {
          for (let i = 0; i < args.length; i++) {
            const property = args[i];
            if (item[property] && item[property].toLowerCase().indexOf(searchVal) !== -1) {
              newArray.push(item);
              break;
            }
          }
        });
        return newArray;
        // return items.filter(item => item[args[0]].toLowerCase().indexOf(searchVal) !== -1);
      } else {
        return items;
      }
    } else {
      return items;
    }
  }
}
