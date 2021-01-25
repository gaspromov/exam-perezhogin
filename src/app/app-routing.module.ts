import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { ViewStudentsComponent } from './view-students/view-students.component';

const routes: Routes = [
  { path: 'home', component: HomeComponent },
  // тут прописана ссылка на заглушку и ссылки на другие компоненты
  { path: 'students', component: ViewStudentsComponent },
  { path: '**', redirectTo: '/home' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
