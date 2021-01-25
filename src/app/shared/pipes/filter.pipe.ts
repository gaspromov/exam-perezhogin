import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'filter'
})
export class FilterPipe implements PipeTransform {

  transform( arr: any[], filterParam: string, field: string ) {
    // на вход идут массив, параметр фильтрации и поле, по которому будет идти фильтрация


    // если есть массив и параметр фильтрации, то фильтруем стандартным методом JS 
    if ( arr && filterParam  )
      arr = arr.filter( ell => ell[field]?.toLowerCase().indexOf( filterParam.toLowerCase() ) === 0 )
    

    return arr;
  }

}
