import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CuerpoComponent } from './cuerpo/cuerpo.component';
import { FormularioComponent } from './formulario/formulario.component';
import { ReactiveFormsModule ,FormsModule } from '@angular/forms';



@NgModule({
  declarations: [
    CuerpoComponent,
    FormularioComponent
  ],
  imports: [
    CommonModule,
    ReactiveFormsModule,
    FormsModule
  ],
  exports:[
    CuerpoComponent,
    FormularioComponent
  ]
})
export class BodyModule { }
