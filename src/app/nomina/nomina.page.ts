import { Component, OnInit, Input } from '@angular/core';
import { NominaService } from '../service/nomina.service';
import { Services } from '../models/services/services';


export interface Nomina {
 nombre: string;
Guardia: string;
  
}


const ELEMENT_DATA: Nomina[] = [
  { nombre: "hola" ,  Guardia: 'H'}
  

];


@Component({
  selector: 'app-nomina',
  templateUrl: './nomina.page.html',
  styleUrls: ['./nomina.page.scss'],
})
export class NominaPage implements OnInit {
  service : any[] =[]
 
   
 

  displayedColumns: string[] = [  'nombre',  'Guardia'];
  dataSource = this.service;
  
 
  constructor(private servicio: NominaService) { }

  ngOnInit() {
    this.cservices()
  }


  cservices(){
    this.servicio.getobtenerservices().subscribe( (res)=> {
      
    
      this.service = res.service
 
      console.log(this.service)
      
    })
  }
   
  exportAsXLSX(){
this.servicio.exportToExcel(this.dataSource, 'Nomina')
  }



}
