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
 
  constructor(private servicio: NominaService ,private _servicio: ServiceService) { }

  ngOnInit() {
    const fecham =  new Date();
    var month = fecham.getMonth() + 1;
    var year  = fecham.getFullYear() 

    this.getDaysFromDate(2,year)
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
        console.log(this.monthSelect)
    
 
     
       if(this.monthSelect[28]?.value == 29){
    
         this.dayavoidn = true
         console.log(this.dayavoidn)
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
     
      
      for(let i = 0; i < this.service.length; i ++){
         
        // console.log(this.service[i].Guardias)
        for(let g = 0; g < this.service[i].Guardias.length; g++){
           console.log(this.service[i].Guardias[g]);
           var id =  this.service[i].Guardias[g]._id
         this.asistencias = this.service[i].Guardias[g].diasasistidos
          console.log(this.asistencias + "asistencias")
        console.log( this.service[i].Guardias[g].prestamos[0])     
        let prestamo1 = this.service[i].Guardias[g].prestamos[0].montoprestado / this.service[i].Guardias[g].prestamos[0].numerodepagos
        let prestamo2 = this.service[i].Guardias[g].prestamos[1].montoprestado / this.service[i].Guardias[g].prestamos[1].numerodepagos
        let prestamo3 = this.service[i].Guardias[g].prestamos[2]?.montoprestado / this.service[i].Guardias[g].prestamos[2]?.numerodepagos
        let prestamo4 = this.service[i].Guardias[g].prestamos[3]?.montoprestado / this.service[i].Guardias[g].prestamos[3]?.numerodepagos
        let prestamo5 = this.service[i].Guardias[g].prestamos[4]?.montoprestado / this.service[i].Guardias[g].prestamos[4]?.numerodepagos
        let prestamo6 = this.service[i].Guardias[g].prestamos[5]?.montoprestado / this.service[i].Guardias[g].prestamos[5]?.numerodepagos
        let prestamo7 = this.service[i].Guardias[g].prestamos[6]?.montoprestado / this.service[i].Guardias[g].prestamos[6]?.numerodepagos
        let prestamo8 = this.service[i].Guardias[g].prestamos[7]?.montoprestado / this.service[i].Guardias[g].prestamos[7]?.numerodepagos
        let prestamo9 = this.service[i].Guardias[g].prestamos[8]?.montoprestado / this.service[i].Guardias[g].prestamos[8]?.numerodepagos
        let prestamo10 = this.service[i].Guardias[g].prestamos[9]?.montoprestado / this.service[i].Guardias[g].prestamos[9]?.numerodepagos
        this.Prestamos =   prestamo1 + prestamo2 ; 
        console.log(this.Prestamos)
        console.log(prestamo1)
        console.log(prestamo2)
        console.log(prestamo3)
        console.log(prestamo4)
             let Nsemana  = this.service[i].Guardias[g].nsemana
          
          
         
// si es la semana 0 va entrar
          if(Nsemana == 0  ){
            console.log(Nsemana);
        
          if(this.service[i].Guardias[g].tlpl == "A" || this.service[i].Guardias[g].tlpl == "D" ){
           
            //aqui reiniciamos la viariable diasasistidos a 0
            this.asistencias = 0;
            
            this.diasasistidos = this.asistencias + 1;
            console.log("entro lp")
            console.log(this.diasasistidos)
          
          }else{console.log("falto el G")}
          if(this.service[i].Guardias[g].tmpl == "A" || this.service[i].Guardias[g].tmpl == "D" ){
           
            
          
            this.diasasistidos = this.diasasistidos + 1;
        
            console.log("entro mp")
            console.log(this.diasasistidos)
            
          }else{console.log("falto el G")}
          if(this.service[i].Guardias[g].tmipl == "A" || this.service[i].Guardias[g].tmipl == "D" ){
           
            
          
            this.diasasistidos = this.diasasistidos + 1;
            console.log("entro mip")
            console.log(this.diasasistidos)
            
            
         
          }else{console.log("falto el G")}
          if(this.service[i].Guardias[g].tjpl == "A" || this.service[i].Guardias[g].tjpl == "D" ){
          
          
           this.diasasistidos = this.diasasistidos + 1;
           console.log("entro tjpl")
           console.log(this.diasasistidos)
           
           
            
        
          }else{console.log("falto el G")}
          if(this.service[i].Guardias[g].tvpl == "A" || this.service[i].Guardias[g].tvpl == "D" ){
           
            
          
            this.diasasistidos = this.diasasistidos + 1;
            console.log("entro vp")
            console.log(this.diasasistidos)
           
          }else{console.log("falto el G")}
          if(this.service[i].Guardias[g].tspl == "A" || this.service[i].Guardias[g].tspl == "D" ){
           
            
          
              this.diasasistidos = this.diasasistidos + 1;
            console.log("entro sp")
            console.log(this.diasasistidos)
           
           
          }else{console.log("falto el G")}
          if(this.service[i].Guardias[g].tdpl == "A" || this.service[i].Guardias[g].tdpl == "D" ){
           
            
          
            this.diasasistidos = this.diasasistidos + 1;
            this.Diasasistidos = this.diasasistidos
            console.log("entro dp /////////////////////")
            console.log(this.diasasistidos)
             Nsemana = 1;
            this.servicio.Agregardiaasistido(id, this.diasasistidos, Nsemana).subscribe( (res)=> {
              console.log(res)

            })
            console.log(Nsemana,"Numero de semana");
          }else{
            // condicionante en caso de que falte el dia de corte
            console.log("dp  Falto")
            Nsemana = 1;
            this.servicio.Agregardiaasistido(id, this.diasasistidos, Nsemana).subscribe( (res)=> {
              console.log(res)
            })
            console.log(Nsemana,"Numero de semana");
          }
        
      }
// si es la semana 1 va entrar
          if(Nsemana == 1){

            console.log(Nsemana);
          if(this.service[i].Guardias[g].tlsl == "A" || this.service[i].Guardias[g].tlsl == "D" ){
           
            //aqui reiniciamos la viariable diasasistidos a 0
            this.asistencias = 0;
           
            this.diasasistidos = this.asistencias + 1;
            
            console.log("entro lp")
            console.log(this.diasasistidos)
          }else{console.log("falto el G")}
          if(this.service[i].Guardias[g].tmsl == "A" || this.service[i].Guardias[g].tmsl == "D" ){
           
            
          
            this.diasasistidos = this.diasasistidos + 1;
            console.log("entro mp")
            console.log(this.diasasistidos)
          
          }else{console.log("falto el G")}
          if(this.service[i].Guardias[g].tmisl == "A" || this.service[i].Guardias[g].tmisl == "D" ){
           
            
          
            this.diasasistidos = this.diasasistidos + 1;
            console.log("entro mip")
            console.log(this.diasasistidos)
          
          }else{console.log("falto el G")}
          if(this.service[i].Guardias[g].tjsl == "A" || this.service[i].Guardias[g].tjsl == "D" ){
           
            
          
            this.diasasistidos = this.diasasistidos + 1;
            console.log("entro jp")
            console.log(this.diasasistidos)
         
          }else{console.log("falto el G")}
          if(this.service[i].Guardias[g].tvsl == "A" || this.service[i].Guardias[g].tvsl == "D" ){
           
            
          
            this.diasasistidos = this.diasasistidos + 1;
            console.log("entro vp")
            console.log(this.diasasistidos)
          }else{console.log("falto el G")}
          if(this.service[i].Guardias[g].tssl == "A" || this.service[i].Guardias[g].tssl == "D" ){
           
            
          
            this.diasasistidos = this.diasasistidos + 1;
            console.log("entro sp")
            console.log(this.diasasistidos)
           
          }else{console.log("falto el G")}
          if(this.service[i].Guardias[g].tdsl == "A" || this.service[i].Guardias[g].tdsl == "D" ){
           
            
          
            this.diasasistidos = this.diasasistidos + 1;
            console.log("entro ds //////////////////")
            console.log(this.diasasistidos)
          
          }else{console.log("falto el G")}    
          if(this.service[i].Guardias[g].tltl == "A" || this.service[i].Guardias[g].tltl == "D" ){
           
            
          
            this.diasasistidos = this.diasasistidos + 1;
       
            console.log("entro lt")
            console.log(this.diasasistidos)
            Nsemana = 2;
            this.servicio.Agregardiaasistido(id, this.diasasistidos, Nsemana).subscribe( (res)=> {
              console.log(res)
            })
            console.log(Nsemana,"Numero de semana");
           
          }else{
            // condicionante en caso de que falte el dia de corte
            console.log("lt  Falto")
            Nsemana = 2;
            this.servicio.Agregardiaasistido(id, this.diasasistidos, Nsemana).subscribe( (res)=> {
              console.log(res)
            })
            console.log(Nsemana,"Numero de semana");
          }
        }

        if(Nsemana == 2){
          console.log(Nsemana);
          if(this.service[i].Guardias[g].tmtl == "A" || this.service[i].Guardias[g].tmtl == "D" ){

           //aqui reiniciamos la viariable diasasistidos a 0
           this.asistencias = 0;
           console.log(this.asistencias)
            this.diasasistidos = this.asistencias + 1;
       
            console.log("entro mp")
            console.log(this.diasasistidos)
          }else{console.log("falto el G")}
          if(this.service[i].Guardias[g].tmitl == "A" || this.service[i].Guardias[g].tmitl == "D" ){
           
            
          
            this.diasasistidos = this.diasasistidos + 1;
       
            console.log("entro mip")
            console.log(this.diasasistidos)
          }else{console.log("falto el G")}
          if(this.service[i].Guardias[g].tjtl == "A" || this.service[i].Guardias[g].tjtl == "D" ){
           
            
          
            this.diasasistidos = this.diasasistidos + 1;
       
            console.log("entro jp")
            console.log(this.diasasistidos)
          }else{console.log("falto el G")}
          if(this.service[i].Guardias[g].tvtl == "A" || this.service[i].Guardias[g].tvtl == "D" ){
           
            
          
            this.diasasistidos = this.diasasistidos + 1;
       
            console.log("entro vp")
            console.log(this.diasasistidos)
          }else{console.log("falto el G")}
          if(this.service[i].Guardias[g].tstl == "A" || this.service[i].Guardias[g].tstl == "D" ){
           
            
          
            this.diasasistidos = this.diasasistidos + 1;
            console.log("entro sp")
            console.log(this.diasasistidos)
          }else{console.log("falto el G")}
          if(this.service[i].Guardias[g].tdtl == "A" || this.service[i].Guardias[g].tdtl == "D" ){
           
            
          
            this.diasasistidos = this.diasasistidos + 1;
            console.log("entro dt ///////////////")
            console.log(this.diasasistidos)
         
          }else{console.log("falto el G")}
         
          ////
          if(this.service[i].Guardias[g].tlcl == "A" || this.service[i].Guardias[g].tlcl == "D" ){
          
            this.diasasistidos = this.diasasistidos + 1;
       
            console.log("entro lc")
            console.log(this.diasasistidos)
            Nsemana = 3;
            this.servicio.Agregardiaasistido(id, this.diasasistidos, Nsemana).subscribe( (res)=> {
              console.log(res)
            })
            console.log(Nsemana,"Numero de semana");
          }else{
             // condicionante en caso de que falte el dia de corte
             console.log("lc  Falto")
             Nsemana = 3;
             this.servicio.Agregardiaasistido(id, this.diasasistidos, Nsemana).subscribe( (res)=> {
               console.log(res)
             })
             console.log(Nsemana,"Numero de semana");
           }
          }
        
        if(Nsemana == 3){
          console.log(Nsemana);
          if(this.service[i].Guardias[g].tmcl == "A" || this.service[i].Guardias[g].tmcl == "D" ){
           
            
           //aqui reiniciamos la viariable diasasistidos a 0
           this.asistencias = 0;
           console.log(this.asistencias)
            this.diasasistidos = this.asistencias + 1;
       
            console.log("entro mp")
            console.log(this.diasasistidos)
          }else{console.log("falto el G")}
          if(this.service[i].Guardias[g].tmicl == "A" || this.service[i].Guardias[g].tmicl == "D" ){
           
            
          
            this.diasasistidos = this.diasasistidos + 1;
       
            console.log("entro mip")
            console.log(this.diasasistidos)
          }else{console.log("falto el G")}
          if(this.service[i].Guardias[g].tjcl == "A" || this.service[i].Guardias[g].tjcl == "D" ){
           
            
          
            this.diasasistidos = this.diasasistidos + 1;
       
            console.log("entro jp")
            console.log(this.diasasistidos)
          }else{console.log("falto el G")}
          if(this.service[i].Guardias[g].tvcl == "A" || this.service[i].Guardias[g].tvcl == "D" ){
           
            
          
            this.diasasistidos = this.diasasistidos + 1;
       
            console.log("entro vp")
            console.log(this.diasasistidos)
          }else{console.log("falto el G")}
          if(this.service[i].Guardias[g].tscl == "A" || this.service[i].Guardias[g].tscl == "D" ){
           
            
          
            this.diasasistidos = this.diasasistidos + 1;
            console.log("entro sp")
            console.log(this.diasasistidos)
          }else{console.log("falto el G")}
           //28
           console.log(this.monthSelect.length)
         if(this.monthSelect.length == 28 ){
           
            if(this.service[i].Guardias[g].tdcl == "A" || this.service[i].Guardias[g].tdcl == "D" ){
            
              this.diasasistidos = this.diasasistidos + 1;
       
              console.log("entro dc")
              console.log(this.diasasistidos)
              Nsemana = 0;
              this.servicio.Agregardiaasistido(id, this.diasasistidos, Nsemana).subscribe( (res)=> {
                console.log(res)
              })
              console.log(Nsemana,"Numero de semana");
            
            }else{
               // condicionante en caso de que falte el dia de corte
             console.log("dc  Falto")
             Nsemana = 0;
             this.servicio.Agregardiaasistido(id, this.diasasistidos, Nsemana).subscribe( (res)=> {
               console.log(res)
             })
             console.log(Nsemana,"Numero de semana");
            }
           
          }else  if(this.service[i].Guardias[g].tdcl == "A" || this.service[i].Guardias[g].tdcl == "D" ){
            this.diasasistidos = this.diasasistidos + 1;
            console.log("entro dc  ///////////")
            Nsemana = 0;
            console.log(this.diasasistidos)
            this.servicio.Agregardiaasistido(id, this.diasasistidos, Nsemana).subscribe( (res)=> {
              console.log(res)
            })
          }

          ////29
          if(this.monthSelect.length == 29 ){
            if(this.service[i].Guardias[g].tlql == "A" || this.service[i].Guardias[g].tlql == "D" ){
            
              this.diasasistidos = this.diasasistidos + 1;
       
              console.log("entro lq")
              console.log(this.diasasistidos)
              Nsemana = 0;
              this.servicio.Agregardiaasistido(id, this.diasasistidos, Nsemana).subscribe( (res)=> {
                console.log(res)
              })
              console.log(Nsemana,"Numero de semana");
              
  
            }else{
                // condicionante en caso de que falte el dia de corte
             console.log("dc  Falto")
             Nsemana = 0;
             this.servicio.Agregardiaasistido(id, this.diasasistidos, Nsemana).subscribe( (res)=> {
               console.log(res)
             })
             console.log(Nsemana,"Numero de semana");
            }
           
          }else  if(this.service[i].Guardias[g].tlql == "A" || this.service[i].Guardias[g].tlql == "D" ){
            this.diasasistidos = this.diasasistidos + 1;
            console.log("entro dc  ///////////")
            console.log(this.diasasistidos)
            Nsemana = 0;
            this.servicio.Agregardiaasistido(id, this.diasasistidos, Nsemana).subscribe( (res)=> {
              console.log(res)
            })
          }
          //30
          if(this.monthSelect.length == 30 ){
            if(this.service[i].Guardias[g].tmql == "A" || this.service[i].Guardias[g].tmql == "D" ){
            
              this.diasasistidos = this.diasasistidos + 1;
       
              console.log("entro mq")
              console.log(this.diasasistidos)
              Nsemana = 0;
              this.servicio.Agregardiaasistido(id, this.diasasistidos, Nsemana).subscribe( (res)=> {
                console.log(res)
              })
              console.log(Nsemana,"Numero de semana");
            
              
  
            }else{
                // condicionante en caso de que falte el dia de corte
             console.log("dc  Falto")
             Nsemana = 0;
             this.servicio.Agregardiaasistido(id, this.diasasistidos, Nsemana).subscribe( (res)=> {
               console.log(res)
             })
             console.log(Nsemana,"Numero de semana");
            }
           
          }else  if(this.service[i].Guardias[g].tmql == "A" || this.service[i].Guardias[g].tmql == "D" ){
            this.diasasistidos = this.diasasistidos + 1;
            console.log("entro dc  ///////////")
            Nsemana = 0;
            console.log(this.diasasistidos)
            this.servicio.Agregardiaasistido(id, this.diasasistidos, Nsemana).subscribe( (res)=> {
              console.log(res)
            })
          }
          //31
          if(this.monthSelect.length == 31 ){
            if(this.service[i].Guardias[g].tmiql == "A" || this.service[i].Guardias[g].tmiql == "D" ){
            
              this.diasasistidos = this.diasasistidos + 1;
       
              console.log("entro miq")
              console.log(this.diasasistidos)
              Nsemana = 0;
              this.servicio.Agregardiaasistido(id, this.diasasistidos, Nsemana).subscribe( (res)=> {
                console.log(res)
              })
              console.log(Nsemana,"Numero de semana");
            
              
  
            }else{
                // condicionante en caso de que falte el dia de corte
             console.log("dc  Falto")
             Nsemana = 0;
             this.servicio.Agregardiaasistido(id, this.diasasistidos, Nsemana).subscribe( (res)=> {
               console.log(res)
             })
             console.log(Nsemana,"Numero de semana");
            }
           
          }else  if(this.service[i].Guardias[g].tmiql == "A" || this.service[i].Guardias[g].tmiql == "D" ){
            this.diasasistidos = this.diasasistidos + 1;
            console.log("entro dc  ///////////")
            console.log(this.diasasistidos)
            Nsemana = 0;
            this.servicio.Agregardiaasistido(id, this.diasasistidos, Nsemana).subscribe( (res)=> {
              console.log(res)
            })
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
