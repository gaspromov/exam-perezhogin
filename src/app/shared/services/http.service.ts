import { Injectable } from '@angular/core';
import { HttpHeaders, HttpClient } from '@angular/common/http';
import { API } from './API';

@Injectable({
  providedIn: 'root'
})
  // это сервис для работы с Http
export class HttpService extends API {

  headers: HttpHeaders;
  url = 'students';

  constructor(httpClient: HttpClient) { 
    super (httpClient);
    this.headers = new HttpHeaders();
    this.headers.set ('Content-type', 'application/json');
  }

  // получение студентов
  async getStudents(){
    return this.get( `${this.url}`, this.headers ).toPromise();
  }

  // получение одного по айди
  async getStudentById( id ){
    return this.get( `${this.url}/${id}`, this.headers ).toPromise();
  }

  // удаление студента по айди
  async deleteStudent( id ){
    return this.delete( `${this.url}/${id}`, this.headers ).toPromise();
  }

  // добавление студента
  async postStudent( data ){
    return this.post( `${this.url}`, data, this.headers ).toPromise();
  }

  // редактирование по айди
  async putStudent( data, id ){
    return this.put( `${this.url}/${id}`, data, this.headers ).toPromise();
  }

}
