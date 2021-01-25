import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'sort'
})
export class SortPipe implements PipeTransform {

  transform( arr: any[], field: string, up: boolean ): unknown {

    // на вход - массив и поле, по которому будет происзодить сортировка
    // используем стандартный метод массивов sort()
    
    if ( arr && field )
      arr = arr.sort( (a,b) => {
        if ( a[field].toLowerCase() > b[field].toLowerCase() )
          return 1
        if ( a[field].toLowerCase() < b[field].toLowerCase() ) 
          return -1;
        else return 0;
      })

    return arr;
  }

}
