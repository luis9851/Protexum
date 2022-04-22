import { Component, OnInit, Input } from '@angular/core';
import { NominaService } from '../service/nomina.service';
import { ServiceService } from '../service/services/service.service';
import * as XLSX from 'xlsx';
import * as moment from 'moment';

@Component({
  selector: 'app-nomina',
  templateUrl: './nomina.page.html',
  styleUrls: ['./nomina.page.scss'],
})
export class NominaPage implements OnInit {
  service: any=[];
  //dias que fue al trabajo
  Diasasistidos: any=[];
  // prestamos
  Prestamos: any;
  fileName= 'Nomina.xlsx';
  Guardia: any=[];
  // esta sirve para ser acronimo de los dias que hay en la bd
  asistencias : any
  // esta variable hace el conteo de los dias transcurridos hasta que se haga el insert ala bd
  diasasistidos: number

  
 

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
  
  dayavoidn:boolean = false;
  dayavoidt:boolean = false;
  dayavoidtu:boolean = false;
  
  dateSelectM: any;
  dateSelectD: any;
  dateSelect: any;
  dataSYear: any;
 
   hoy: number;
 
  constructor(private servicio: NominaService ,private _servicio: ServiceService) { }

  ngOnInit() {
    const fecham =  new Date();
    var month = fecham.getMonth() + 1;
    var year  = fecham.getFullYear() 
    var daus = fecham.getDate()
    this.hoy = daus;
    console.log(this.hoy)

    this.getDaysFromDate(month,year)
    this.cservices()
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
        
    
 
     
       if(this.monthSelect[28]?.value == 29){
    
         this.dayavoidn = true
        
       }
     
    
   
 
    
       if(this.monthSelect[29]?.value  == 30){
         this.dayavoidt = true
       }
  
   
   
    
       if(this.monthSelect[30]?.value == 31){
         this.dayavoidtu = true
       }
     
   
   
  
  
       
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





  cservices(){
    this.servicio.getobtenerservices().subscribe( (res)=> {
    
    

      this.service = res.service
      console.log(this.service)
     
      
      for(let i = 0; i < this.service.length; i ++){
         
        // console.log(this.service[i].Guardias)
        for(let g = 0; g < this.service[i].Guardias.length; g++){
          //  console.log(this.service[i].Guardias[g]);
           var id =  this.service[i].Guardias[g]._id
         this.asistencias = this.service[i].Guardias[g].diasasistidos
          //  console.log(this.asistencias + "asistencias")
        // console.log( this.service[i].Guardias[g].prestamos[0]) 
       let prestamo1 =0;
       let prestamo2 = 0;
       let prestamo3 = 0;
       let prestamo4 = 0;
       let prestamo5 = 0;
       let prestamo6 = 0;
       let prestamo7 = 0;
       let prestamo8 = 0;
       let prestamo9 = 0;
       let prestamo10 = 0;
        

         prestamo1 = this.service[i].Guardias[g].prestamos[0]?.montoprestado / this.service[i].Guardias[g].prestamos[0]?.numerodepagos
         prestamo2 = this.service[i].Guardias[g].prestamos[1]?.montoprestado / this.service[i].Guardias[g].prestamos[1]?.numerodepagos
         prestamo3 = this.service[i].Guardias[g].prestamos[2]?.montoprestado / this.service[i].Guardias[g].prestamos[2]?.numerodepagos
         prestamo4 = this.service[i].Guardias[g].prestamos[3]?.montoprestado / this.service[i].Guardias[g].prestamos[3]?.numerodepagos
         prestamo5 = this.service[i].Guardias[g].prestamos[4]?.montoprestado / this.service[i].Guardias[g].prestamos[4]?.numerodepagos
         prestamo6 = this.service[i].Guardias[g].prestamos[5]?.montoprestado / this.service[i].Guardias[g].prestamos[5]?.numerodepagos
         prestamo7 = this.service[i].Guardias[g].prestamos[6]?.montoprestado / this.service[i].Guardias[g].prestamos[6]?.numerodepagos
         prestamo8 = this.service[i].Guardias[g].prestamos[7]?.montoprestado / this.service[i].Guardias[g].prestamos[7]?.numerodepagos
         prestamo9 = this.service[i].Guardias[g].prestamos[8]?.montoprestado / this.service[i].Guardias[g].prestamos[8]?.numerodepagos
         prestamo10 = this.service[i].Guardias[g].prestamos[9]?.montoprestado / this.service[i].Guardias[g].prestamos[9]?.numerodepagos

       
        this.Prestamos = prestamo1 + prestamo2 ; 
         
        console.log(prestamo1)
        console.log(prestamo2)
        console.log(prestamo3)
        console.log(prestamo4)
        // el  se elimminara en caso de que funcione la otro
            
          
         
// si es la semana 0 va entrar
          if(this.hoy >= 0  && this.hoy <= 7  ){
            
        
          if(this.service[i].Guardias[g].tlpl == "A" || this.service[i].Guardias[g].tlpl == "D" ){
           
            //aqui reiniciamos la viariable diasasistidos a 0
            this.asistencias = 0;
            
            this.diasasistidos = this.asistencias + 1;
            console.log("entro lp")
            console.log(this.diasasistidos)
          
          }else{
            this.asistencias = 0;
            console.log("falto el G")}
          if(this.service[i].Guardias[g].tmpl == "A" || this.service[i].Guardias[g].tmpl == "D" ){
           
          
            if(this.diasasistidos == undefined){
              this.diasasistidos = this.asistencias + 1;
            }else {
              this.diasasistidos = this.diasasistidos +1;
            }
        
            console.log("entro mp")
            console.log(this.diasasistidos)
            
          }else{console.log("falto el G")}
          if(this.service[i].Guardias[g].tmipl == "A" || this.service[i].Guardias[g].tmipl == "D" ){
           
            
          
            if(this.diasasistidos == undefined){
              this.diasasistidos = this.asistencias + 1;
            }else {
              this.diasasistidos = this.diasasistidos +1;
            }
            console.log("entro mip")
            console.log(this.diasasistidos)
            
            
         
          }else{console.log("falto el G")}
          if(this.service[i].Guardias[g].tjpl == "A" || this.service[i].Guardias[g].tjpl == "D" ){
          
          
            if(this.diasasistidos == undefined){
              this.diasasistidos = this.asistencias + 1;
            }else {
              this.diasasistidos = this.diasasistidos +1;
            }
           console.log("entro tjpl")
           console.log(this.diasasistidos)
           
           
            
        
          }else{console.log("falto el G")}
          if(this.service[i].Guardias[g].tvpl == "A" || this.service[i].Guardias[g].tvpl == "D" ){
           
            
          
            if(this.diasasistidos == undefined){
              this.diasasistidos = this.asistencias + 1;
            }else {
              this.diasasistidos = this.diasasistidos +1;
            }
            console.log("entro vp")
            console.log(this.diasasistidos)
           
          }else{console.log("falto el G")}
          if(this.service[i].Guardias[g].tspl == "A" || this.service[i].Guardias[g].tspl == "D" ){
           
            
          
            if(this.diasasistidos == undefined){
              this.diasasistidos = this.asistencias + 1;
            }else {
              this.diasasistidos = this.diasasistidos +1;
            }
            console.log("entro sp")
            console.log(this.diasasistidos)
           
           
          }else{console.log("falto el G")}
          if(this.service[i].Guardias[g].tdpl == "A" || this.service[i].Guardias[g].tdpl == "D" ){
           
            if(this.diasasistidos == undefined){
              this.diasasistidos = this.asistencias + 1;
              this.Diasasistidos = this.diasasistidos;
            }else {
              this.diasasistidos = this.diasasistidos +1;
              this.Diasasistidos = this.diasasistidos;
            }
            console.log("entro dp /////////////////////")
            console.log(this.diasasistidos)
            
            this.servicio.Agregardiaasistido(id, this.diasasistidos).subscribe( (res)=> {
              console.log(res)

            })
            console.log("Numero de semana");
          }else{
            // condicionante en caso de que falte el dia de corte
            console.log("dp  Falto")
            this.Diasasistidos = this.diasasistidos
            this.servicio.Agregardiaasistido(id, this.diasasistidos).subscribe( (res)=> {
              console.log(res)
            })
            console.log(1,"Numero de semana");
          }
        
      }
// si es la semana 1 va entrar
          if(this.hoy >= 8 && this.hoy <= 15){

           
          if(this.service[i].Guardias[g].tlsl == "A" || this.service[i].Guardias[g].tlsl == "D" ){
           
            //aqui reiniciamos la viariable diasasistidos a 0
            this.asistencias = 0;
           
            this.diasasistidos = this.asistencias + 1;
            
            console.log("entro lp")
            console.log(this.diasasistidos)
          }else{
            this.asistencias = 0;
            console.log("falto el G")}
          if(this.service[i].Guardias[g].tmsl == "A" || this.service[i].Guardias[g].tmsl == "D" ){
           
            
            if(this.diasasistidos == undefined){
              this.diasasistidos = this.asistencias + 1;
            }else {
              this.diasasistidos = this.diasasistidos +1;
            }
           
            console.log("entro mp")
            console.log(this.diasasistidos)
          
          }else{console.log("falto el G")}
          if(this.service[i].Guardias[g].tmisl == "A" || this.service[i].Guardias[g].tmisl == "D" ){
           
            if(this.diasasistidos == undefined){
              this.diasasistidos = this.asistencias + 1;
            }else {
              this.diasasistidos = this.diasasistidos +1;
            }
            console.log("entro mip")
            console.log(this.diasasistidos)
          
          }else{console.log("falto el G")}
          if(this.service[i].Guardias[g].tjsl == "A" || this.service[i].Guardias[g].tjsl == "D" ){
           
            if(this.diasasistidos == undefined){
              this.diasasistidos = this.asistencias + 1;
            }else {
              this.diasasistidos = this.diasasistidos +1;
            }
            console.log("entro jp")
            console.log(this.diasasistidos)
         
          }else{console.log("falto el G")}
          if(this.service[i].Guardias[g].tvsl == "A" || this.service[i].Guardias[g].tvsl == "D" ){
           
            if(this.diasasistidos == undefined){
              this.diasasistidos = this.asistencias + 1;
            }else {
              this.diasasistidos = this.diasasistidos +1;
            }
            console.log("entro vp")
            console.log(this.diasasistidos)
          }else{console.log("falto el G")}
          if(this.service[i].Guardias[g].tssl == "A" || this.service[i].Guardias[g].tssl == "D" ){
           
            if(this.diasasistidos == undefined){
              this.diasasistidos = this.asistencias + 1;
            }else {
              this.diasasistidos = this.diasasistidos +1;
            }
            console.log("entro sp")
            console.log(this.diasasistidos)
           
          }else{console.log("falto el G")}
          if(this.service[i].Guardias[g].tdsl == "A" || this.service[i].Guardias[g].tdsl == "D" ){
           
            if(this.diasasistidos == undefined){
              this.diasasistidos = this.asistencias + 1;
            }else {
              this.diasasistidos = this.diasasistidos +1;
            }
            console.log("entro ds //////////////////")
            console.log(this.diasasistidos)
          
          }else{console.log("falto el G")}    
          if(this.service[i].Guardias[g].tltl == "A" || this.service[i].Guardias[g].tltl == "D" ){
           
            if(this.diasasistidos == undefined){
              this.diasasistidos = this.asistencias + 1;
              this.Diasasistidos = this.diasasistidos;
            }else {
              this.diasasistidos = this.diasasistidos +1;
              this.Diasasistidos = this.diasasistidos;
            }
            console.log("entro lt")
            console.log(this.diasasistidos)
           
            this.servicio.Agregardiaasistido(id, this.diasasistidos).subscribe( (res)=> {
              console.log(res)
            })
            console.log("Numero de semana");
           
          }else{
            // condicionante en caso de que falte el dia de corte
            console.log("lt  Falto")
            this.Diasasistidos = this.diasasistidos
            this.servicio.Agregardiaasistido(id, this.diasasistidos).subscribe( (res)=> {
              console.log(res)
            })
            console.log(1,"Numero de semana");
          }
        }

        if(this.hoy >= 16 && this.hoy <= 22){
          
          if(this.service[i].Guardias[g].tmtl == "A" || this.service[i].Guardias[g].tmtl == "D" ){

           //aqui reiniciamos la viariable diasasistidos a 0
           this.asistencias = 0;
           console.log(this.asistencias)
            this.diasasistidos = this.asistencias + 1;
       
            console.log("entro mp")
            console.log(this.diasasistidos)
          }else{
            this.asistencias = 0;
            console.log("falto el G")}
          if(this.service[i].Guardias[g].tmitl == "A" || this.service[i].Guardias[g].tmitl == "D" ){
           
            
            if(this.diasasistidos == undefined){
              this.diasasistidos = this.asistencias + 1;
            }else {
              this.diasasistidos = this.diasasistidos +1;
            }
            
       
            console.log("entro mip")
            console.log(this.diasasistidos)
          }else{console.log("falto el G")}
          if(this.service[i].Guardias[g].tjtl == "A" || this.service[i].Guardias[g].tjtl == "D" ){
           
            
          
            if(this.diasasistidos == undefined){
              this.diasasistidos = this.asistencias + 1;
            }else {
              this.diasasistidos = this.diasasistidos +1;
            }
       
            console.log("entro jp")
            console.log(this.diasasistidos)
          }else{console.log("falto el G")}
          if(this.service[i].Guardias[g].tvtl == "A" || this.service[i].Guardias[g].tvtl == "D" ){
           
            
          
            if(this.diasasistidos == undefined){
              this.diasasistidos = this.asistencias + 1;
            }else {
              this.diasasistidos = this.diasasistidos +1;
            }
       
            console.log("entro vp")
            console.log(this.diasasistidos)
          }else{console.log("falto el G")}
          if(this.service[i].Guardias[g].tstl == "A" || this.service[i].Guardias[g].tstl == "D" ){
           
            
            if(this.diasasistidos == undefined){
              this.diasasistidos = this.asistencias + 1;
            }else {
              this.diasasistidos = this.diasasistidos +1;
            }
            console.log("entro sp")
            console.log(this.diasasistidos)
          }else{console.log("falto el G")}
          if(this.service[i].Guardias[g].tdtl == "A" || this.service[i].Guardias[g].tdtl == "D" ){
           
            
          
            if(this.diasasistidos == undefined){
              this.diasasistidos = this.asistencias + 1;
            }else {
              this.diasasistidos = this.diasasistidos +1;
            }
            console.log("entro dt ///////////////")
            console.log(this.diasasistidos)
         
          }else{console.log("falto el G")}
          if(this.service[i].Guardias[g].tlcl == "A" || this.service[i].Guardias[g].tlcl == "D" ){
          
            if(this.diasasistidos == undefined){
              this.diasasistidos = this.asistencias + 1;
              this.Diasasistidos = this.diasasistidos;
            }else {
              this.diasasistidos = this.diasasistidos +1;
              this.Diasasistidos = this.diasasistidos;
            }
            console.log("entro lc")
            console.log(this.diasasistidos)
           
            this.servicio.Agregardiaasistido(id, this.diasasistidos).subscribe( (res)=> {
              console.log(res)
            })
            console.log("Numero de semana");
          }else{
             // condicionante en caso de que falte el dia de corte
             console.log("lc  Falto")
             this.Diasasistidos = this.diasasistidos
             this.servicio.Agregardiaasistido(id, this.diasasistidos).subscribe( (res)=> {
               console.log(res)
             })
             console.log(2,"Numero de semana");
           }
          }
        
        if(this.hoy >= 23){
          
          if(this.service[i].Guardias[g].tmcl == "A" || this.service[i].Guardias[g].tmcl == "D" ){
           
            
           //aqui reiniciamos la viariable diasasistidos a 0
           this.asistencias = 0;
           console.log(this.asistencias)
            this.diasasistidos = this.asistencias + 1;
       
            console.log("entro mp")
            console.log(this.diasasistidos)
          }else{
            this.asistencias = 0;
            console.log("falto el G")}
          if(this.service[i].Guardias[g].tmicl == "A" || this.service[i].Guardias[g].tmicl == "D" ){
           
            
            if(this.diasasistidos == undefined){
              this.diasasistidos = this.asistencias + 1;
            }else {
              this.diasasistidos = this.diasasistidos +1;
            }
       
            console.log("entro mip")
            console.log(this.diasasistidos)
          }else{console.log("falto el G")}
          if(this.service[i].Guardias[g].tjcl == "A" || this.service[i].Guardias[g].tjcl == "D" ){
           
          
            if(this.diasasistidos == undefined){
              this.diasasistidos = this.asistencias + 1;
            }else {
              this.diasasistidos = this.diasasistidos +1;
            }
       
            console.log("entro jp")
            console.log(this.diasasistidos)
          }else{console.log("falto el G")}
          if(this.service[i].Guardias[g].tvcl == "A" || this.service[i].Guardias[g].tvcl == "D" ){
           
          
            if(this.diasasistidos == undefined){
              this.diasasistidos = this.asistencias + 1;
            }else {
              this.diasasistidos = this.diasasistidos +1;
            }
       
            console.log("entro vp")
            console.log(this.diasasistidos)
          }else{console.log("falto el G")}
          if(this.service[i].Guardias[g].tscl == "A" || this.service[i].Guardias[g].tscl == "D" ){
           
            
            if(this.diasasistidos == undefined){
              this.diasasistidos = this.asistencias + 1;
            }else {
              this.diasasistidos = this.diasasistidos +1;
            }
            console.log("entro sp")
            console.log(this.diasasistidos)
          }else{console.log("falto el G")}
           //28
          
         if(this.monthSelect.length == 28 ){
           
            if(this.service[i].Guardias[g].tdcl == "A" || this.service[i].Guardias[g].tdcl == "D" ){
            
              if(this.diasasistidos == undefined){
                this.diasasistidos = this.asistencias + 1;
                this.Diasasistidos = this.diasasistidos;
              }else {
                this.diasasistidos = this.diasasistidos +1;
                this.Diasasistidos = this.diasasistidos;
              }
              console.log("entro dcL")
              console.log(this.diasasistidos)
             
              this.servicio.Agregardiaasistido(id, this.diasasistidos).subscribe( (res)=> {
                console.log(res)
              })
              console.log(3,"Numero de semana");
            
            }else{
               // condicionante en caso de que falte el dia de corte
             console.log("dcL  Falto")
             this.Diasasistidos = this.diasasistidos
             this.servicio.Agregardiaasistido(id, this.diasasistidos).subscribe( (res)=> {
               console.log(res)
             })
             console.log(3,"Numero de semana");
            }
           
          }else  if(this.service[i].Guardias[g].tdcl == "A" || this.service[i].Guardias[g].tdcl == "D" ){
            if(this.diasasistidos == undefined){
              this.diasasistidos = this.asistencias + 1;
            }else {
              this.diasasistidos = this.diasasistidos +1;
            }
            console.log("entro dcL")
            
            console.log(this.diasasistidos)
           
          }

          ////29
         
          if(this.monthSelect.length == 29 ){
            if(this.service[i].Guardias[g].tlql == "A" || this.service[i].Guardias[g].tlql == "D" ){
            
              if(this.diasasistidos == undefined){
                this.diasasistidos = this.asistencias + 1;
                this.Diasasistidos = this.diasasistidos;
              }else {
                this.diasasistidos = this.diasasistidos +1;
                this.Diasasistidos = this.diasasistidos;
              }
              console.log("entro lql")
              console.log(this.diasasistidos)
               
              this.servicio.Agregardiaasistido(id, this.diasasistidos).subscribe( (res)=> {
                console.log(res)
              })
              console.log(3,"Numero de semana");
              
  
            }else{
                // condicionante en caso de que falte el dia de corte
             console.log("lql  Falto")
             this.Diasasistidos = this.diasasistidos
             this.servicio.Agregardiaasistido(id, this.diasasistidos).subscribe( (res)=> {
               console.log(res)
             })
             console.log(3,"Numero de semana");
            }
           
          }else  if(this.service[i].Guardias[g].tlql == "A" || this.service[i].Guardias[g].tlql == "D" ){
            if(this.diasasistidos == undefined){
              this.diasasistidos = this.asistencias + 1;
            }else {
              this.diasasistidos = this.diasasistidos +1;
            }
            console.log("entro lql  ///////////")
            console.log(this.diasasistidos)
             
           
          }
          //30
          console.log(this.monthSelect.length)
          if(this.monthSelect.length == 30 ){
            if(this.service[i].Guardias[g].tmql == "A" || this.service[i].Guardias[g].tmql == "D" ){
            
              if(this.diasasistidos == undefined){
                this.diasasistidos = this.asistencias + 1;
                this.Diasasistidos = this.diasasistidos;
              }else {
                this.diasasistidos = this.diasasistidos +1;
                this.Diasasistidos = this.diasasistidos;
              }
              console.log("entro mql 30")
              console.log(this.diasasistidos)
               
              this.servicio.Agregardiaasistido(id, this.diasasistidos).subscribe( (res)=> {
                console.log(res)
              })
              console.log(3,"Numero de semana");
            
              
  
            }else{
                // condicionante en caso de que falte el dia de corte
             console.log("mql  Falto ")
             this.Diasasistidos = this.diasasistidos
             this.servicio.Agregardiaasistido(id, this.diasasistidos).subscribe( (res)=> {
               console.log(res)
             })
             console.log(3,"Numero de semana");
            }
           
          }else  if(this.service[i].Guardias[g].tmql == "A" || this.service[i].Guardias[g].tmql == "D" ){
            if(this.diasasistidos == undefined){
              this.diasasistidos = this.asistencias + 1;
            }else {
              this.diasasistidos = this.diasasistidos +1;
            }
            console.log("entro mql")
             
            console.log(this.diasasistidos)
          
          }
          //31
          if(this.monthSelect.length == 31 ){
            if(this.service[i].Guardias[g].tmiql == "A" || this.service[i].Guardias[g].tmiql == "D" ){
            
              if(this.diasasistidos == undefined){
                this.diasasistidos = this.asistencias + 1;
                this.Diasasistidos = this.diasasistidos;
              }else {
                this.diasasistidos = this.diasasistidos +1;
                this.Diasasistidos = this.diasasistidos;
              }
              console.log("entro miql 31")
              console.log(this.diasasistidos)
               
              this.servicio.Agregardiaasistido(id, this.diasasistidos).subscribe( (res)=> {
                console.log(res)
              })
              console.log(3,"Numero de semana");
            
              
  
            }else{
                // condicionante en caso de que falte el dia de corte
             console.log("miql  Falto")
             this.Diasasistidos = this.diasasistidos
             this.servicio.Agregardiaasistido(id, this.diasasistidos).subscribe( (res)=> {
               console.log(res)
             })
             console.log(3,"Numero de semana");
            }
           
          }else  if(this.service[i].Guardias[g].tmiql == "A" || this.service[i].Guardias[g].tmiql == "D" ){
            if(this.diasasistidos == undefined){
              this.diasasistidos = this.asistencias + 1;
            }else {
              this.diasasistidos = this.diasasistidos +1;
            }
            console.log("entro miql")
            console.log(this.diasasistidos)
             
         
          }
         }
        }

      }

      
    

      
 
      

   
      
    })
  }
 



  exportexcel(): void
  {
    /* pass here the table id */
    let element = document.getElementById('excel-table');
    const ws: XLSX.WorkSheet =XLSX.utils.table_to_sheet(element);
 
    /* generate workbook and add the worksheet */
    const wb: XLSX.WorkBook = XLSX.utils.book_new();
    XLSX.utils.book_append_sheet(wb, ws, 'Sheet1');
 
    /* save to file */  
    XLSX.writeFile(wb, this.fileName);
 
  }


   




}
