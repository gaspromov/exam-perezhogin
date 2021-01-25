import { Component, EventEmitter, Input, OnChanges, OnInit, Output } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { HttpService } from '../shared/services/http.service';

@Component({
  selector: 'app-student-add',
  templateUrl: './student-add.component.html',
  styleUrls: ['./student-add.component.css']
})
export class StudentAddComponent implements OnInit, OnChanges {
  studentForm: FormGroup;
  @Input() studentId;

  @Output() studentChanges = new EventEmitter();

  constructor(
    private http: HttpService
  ) { }

  ngOnInit() {
    // генерируем формгруппу
    this.generateForm();
  }

  async ngOnChanges(){
    await this.generateForm();
  }

  async getStudentById(){
    return await this.http.getStudentById( this.studentId );
  }


  async onEditStudent(){
    // отправляем запрос, потом сбрасываем редактирование, генерируем снова формгруппу и триггерим родительский компонент, что что-то поменялось
    await this.http.putStudent( this.studentForm.value, this.studentId );
    this.studentId = undefined;
    this.generateForm();
    this.studentChanges.emit();
  }

  async onAddStudent(){
    // отправляем запрос и триггерим родительский компонент, что что-то поменялось
    await this.http.postStudent( this.studentForm.value );
    this.studentChanges.emit();
    this.generateForm();
  }

  async onDeleteStudent(){
    // отправляем запрос, потом сбрасываем редактирование, генерируем снова формгруппу и триггерим родительский компонент, что что-то поменялось
    await this.http.deleteStudent( this.studentId );
    this.studentId = undefined;
    this.studentChanges.emit();
    this.generateForm();
  }

  async generateForm(){
    let student;

    // если это редактирование, то получаем студента по айди и устанавливаем значения в форму
    if ( this.studentId || this.studentId === 0 || this.studentId === '0' ) 
      student = await this.getStudentById();


    this.studentForm = new FormGroup({
      firstname: new FormControl( { value: student?.firstname || '', disabled: false }, [Validators.required] ),
      lastname: new FormControl( { value: student?.lastname || '', disabled: false }, [Validators.required] ),
      middlename: new FormControl( { value: student?.middlename || '', disabled: false }),
      phone: new FormControl( { value: student?.phone || '', disabled: false }, [Validators.required] ),
      email: new FormControl( { value: student?.email || '', disabled: false }, [Validators.required, Validators.email] ),
      group: new FormControl( { value: student?.group || '', disabled: false }, [Validators.required] ),
      direction: new FormControl( { value: student?.direction || '', disabled: false }, [Validators.required] ),
      birthDay: new FormControl( { value: student?.birthDay || '', disabled: false }, [Validators.required] )
    })
  }


}
