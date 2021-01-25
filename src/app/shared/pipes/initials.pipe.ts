import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'initials'
})
export class InitialsPipe implements PipeTransform {

  transform(student: any = {}) {
    let fullname = '';
    
    // получем Фамилию + первую букву имени + первую букву отчества, если оно есть
    if ( student )
      fullname = `${student.lastname} ${student.firstname[0]}.${student.middlename ? ` ${student.middlename[0]}.` : ''}`;
    

    return fullname;

  }

}
