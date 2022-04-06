import { Component, Directive, OnInit, Input } from '@angular/core';
import { Router,ActivatedRoute } from '@angular/router';
import * as moment from 'moment';
import { ServiceService } from '../service/services/service.service';
import { NgForm } from '@angular/forms';
@Component({
  selector: 'app-table-control',
  templateUrl: './table-control.page.html',
  styleUrls: ['./table-control.page.scss'],
})
export class TableControlPage implements OnInit {
// recuerden que si le mueven documenten el para saber para que sirven las cosas

week: any = [
  "lunes",
  "Martes",
  "Miercoles",
  "Jueves",
  "Viernes",
  "Sabado",
  "Domingo"
];



turno: boolean
// variables del funcionamiento del calendario
@Input() indexh: string;
@Input() indexn: string;
monthSelect: any[];

dateSelectM: any;
dateSelectD: any;
dateSelect: any;
dataSYear: any;
guardias: any=[];
service: any=[];
id: string;

constructor(private _Service: ServiceService,private router: Router,private activatedRoute: ActivatedRoute) {
 
 }

   ngOnInit() : void{
    const fecham =  new Date();
    var month = fecham.getMonth() + 1;
     var year  = fecham.getFullYear() 

    this.getDaysFromDate(month,year)
    this.activatedRoute.params.subscribe( params => {
      this.id = params['id'];
      this._Service.getobteneridservice(params['id']).subscribe(data =>{
        this.service = data.service;
        this.guardias = data.service.Guardias;
       
      },
      error =>{

      });
      
    })
    

  }

 

  getDaysFromDate(month, year){
  
   //  se usa para agarrar mes y año y cree un objecto  basado en año mes y el 01 es para que inicie en ese mes
    const startDate = moment(`${year}/${month}/01`)
    // cuando finaliza el mes el clone es para que no iterar la fecha  
    const endDate =  startDate.clone().endOf('month')
    this.dateSelect = startDate
  // aqui te trae la cantidad de dias que hay de diferencia entre las fecha de inicio y final , el true es para redondear numeros 
    const diffDays = endDate.diff(startDate,'days', true);
    //30.999 con el mat round me redondea para que sean numeros enteros
    const numberDays = Math.round(diffDays);
//usamos el array para pintarla plantilla 
    const arrayDays = Object.keys([...Array(numberDays)]).map((a: any) => {
      // convertimos a numero
      a = parseInt(a) + 1;
// un dato tipo fecha para sabber que dia en el indice es 
      const dayObject = moment(`${year}-${month}-${a}`);
    

      

       let day = dayObject.format("dddd")
           const ChangeWeek = {
      'Monday': 'Lunes',
      'Tuesday': 'Martes',
      'Wednesday': 'Miercoles',
      'Thursday': 'Jueves',
      'Friday': 'Viernes',
      'Saturday': 'Sabado',
      'Sunday': 'Domingo',
    
      
    }

    const FechaD = ChangeWeek[day]
   
      return{
        name: FechaD,
        month: dayObject.format("MMMM"),
        year: dayObject.format("yyyy"),
        value: a,
        indexWeek: dayObject.isoWeekday()
      }
    
      
    })  

    this.monthSelect =  arrayDays;

      
    const Mes = this.monthSelect[0].month

    const ChangeMonth = {
      'January': 'Enero',
      'February': 'Febrero',
      'March': 'Marzo',
      'April': 'Abril',
      'May': 'Mayo',
      'June': 'Junio',
      'July': 'Julio',
      'August': 'Agosto',
      'September': 'Septiembre',
      'October': 'Octubre',
      'November': 'Noviembre',
      'December': 'Diciembre'

    }
    const Fecha = ChangeMonth[Mes]
    this.dateSelectM =  Fecha;
    this.dataSYear = year

   

  }
  
  Agregarhorario( _id : string  ){
    this.indexh = _id;
    this.router.navigate(['/table',this.indexh]);
    this._Service.disparadordedias.emit({
      data: this.monthSelect
      
      
    })
   }
  
   
  
  // para navegar en las fechas
  changeMonth(flag){
    // si el valor es menor a 0 se va a borrar un mes a la fecha seleccionada
    if(flag < 0 ){
      //aqui se substraer un mes con moment automaticamente te manda a un mes anterior
      const prevDate = this.dateSelect.clone().subtract(1,"month");
      // voy a mandar a traer la funcion getDaysFromDate y le digo que me mande la fecha previa en mes y año
      this.getDaysFromDate(prevDate.format("MM"), prevDate.format("YYYY"));
    }
    else {
       //aqui se suma un mes con moment automaticamente te manda a un mes siguiente
      const nextDate = this.dateSelect.clone().add(1,"month");
      // voy a mandar a traer la funcion getDaysFromDate y le digo que me mande la fecha siguiente en mes y año
      this.getDaysFromDate(nextDate.format("MM"), nextDate.format("YYYY"));
    }
  }

  cambiarEstadoLista(_id : string, form : NgForm){
   console.log(form.value)
    this._Service.registrarL(_id,form.value).subscribe( (res => {
          console.log(res)
          // this.exito()
          
       
              
          }))
   }
    
      





}