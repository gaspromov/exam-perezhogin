import { Component, OnInit } from '@angular/core';
import { HttpService } from '../shared/services/http.service';

@Component({
  selector: 'app-view-students',
  templateUrl: './view-students.component.html',
  styleUrls: ['./view-students.component.css']
})
export class ViewStudentsComponent implements OnInit {
  students: any[];
  edittingId: string;

  lastnameParam: string = '';
  groupParam: string = '';
  directionParam: string = '';

  constructor(
    private http: HttpService,
  ) { }

  async ngOnInit(){
    // получение студентов при инициализации
    await this.http.getStudents()
    .then( ( w: any[] ) => this.students = w );
  }

  async onStudentChanges(){
    // сбрасываем редактируемый профиль
    this.edittingId = undefined;
    // снова получаем студентов
    await this.http.getStudents()
    .then ( ( w: any[] ) => this.students = w );
  }

}
