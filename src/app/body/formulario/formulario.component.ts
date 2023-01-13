import { Component ,OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators} from '@angular/forms';

@Component({
  selector: 'app-formulario',
  templateUrl: './formulario.component.html',
  styleUrls: ['./formulario.component.css']
})
export class FormularioComponent  implements OnInit{
  public formLogin!: FormGroup;
  correo!:string;

  constructor(private formBuilder:FormBuilder){

  }

  ngOnInit(): void {
    this.formLogin = this.formBuilder.group({
    nombre:['',
        [
          Validators.required,
          Validators.minLength(6)
        ]
    ],
    apellido:['',
        [
          Validators.required,
          Validators.minLength(6)
        ]
    ],
      email:['', 
        [
          Validators.required,
          Validators.email
        ]
      ], 
      password:['', 
        [
          Validators.required,
          Validators.minLength(6)
        ]
      ],
      telefono:['',
        [
          Validators.required,
          Validators.minLength(9)
        ]
      ],
      checkbox:['',
        [
          Validators.required,
          Validators.requiredTrue
        ]
      ]
    })

    this.loadAPI()
  }

  //function para simular la carga de un API
  loadAPI():any{
    const response = {
      nombre:'',
      apellido:'',
      email:'',
      telefono:'',
      password:'',
      checkbox: true
    };

    this.formLogin.patchValue(response);
    
    
    /*
    this.formLogin.patchValue(
      {
        email:response.email,
        password: response.password,
        term: response.term
      }
    )
     */
    
  }


  send(): any{
    console.log(this.formLogin.value)
    alert('gracias por participar')
  }
 

}
