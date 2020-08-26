import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Routes, RouterModule } from '@angular/router';

import { ListComponent as ListPatientsComponent } from './patient/list/list.component';
import { ModifyComponent as ModifyPatientComponent } from './patient/modify/modify.component';


const routes: Routes = [
  { 
    path: 'clinic',
    children: [
      { 
        path: 'patient',
        children: [
          { path: 'list', component: ListPatientsComponent },
          { path: 'modify', component: ModifyPatientComponent }
        ]
      }
    ]
  }
];

@NgModule({
  declarations: [ListPatientsComponent, ModifyPatientComponent],
  imports: [
    CommonModule,
    RouterModule.forChild(routes)
  ]
})
export class ClinicModule { }
