import { Component } from '@angular/core';
import { LeerDatosApiService } from './leer-datos-api.service';
import { Typicode } from './typicode';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  
  dataTypicode:Typicode[] = [];

  constructor(private leerDatosService: LeerDatosApiService) {
  }

  ngOnInit() {
    this.leerDatosService.leerDatos().subscribe((data) => {
      
      this.dataTypicode = data;
      console.log(this.dataTypicode);
    
    })
  }

}
