import { Component, OnInit, Input } from '@angular/core';
import { NominaService } from '../service/nomina.service';
import { BorrowingService } from '../service/borrowing.service';
import { ServiceService } from '../service/services/service.service';
import { MultaService } from '../service/multa.service';
import * as XLSX from 'xlsx';
import * as moment from 'moment';




@Component({
  selector: 'app-nomina',
  templateUrl: './nomina.page.html',
  styleUrls: ['./nomina.page.scss'],
})
export class NominaPage implements OnInit {

  //dias que fue al trabajo
  Diasasistidos: any=[];
  //dias que falto
  Diasfalto: any = 0;
 
  //Sueldo
  Sueldo: Number;
  // dinero restante
  dinerofaltante: any = 0;
  fileName= 'Nomina.xlsx';
  Guardia: any=[];
  // esta sirve para ser acronimo de los dias que hay en la bd
  asistencias : any
  // esta variable hace el conteo de los dias transcurridos hasta que se haga el insert ala bd
  diasasistidos: number = 0;

 

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
  turnoa: any[] = []
  turnos: any[] = []

  constructor(private servicio: NominaService ,private servicioP: BorrowingService , private servicioS: ServiceService, private servicioM:MultaService) { }

  ngOnInit() {
    const fecham =  new Date();
    var month = fecham.getMonth() + 1;
    var year  = fecham.getFullYear() 
    var daus = fecham.getDate()
    this.hoy = 7;
    console.log(this.hoy)

    this.getDaysFromDate(5,2020)
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
    


    this.servicioS.getobtenerturnos().subscribe( (res)=> {
    
     this.turnoa = res.turnos;
      
      
      
      
      for(let i = 0; i < this.turnoa.length; i ++){
        var id =  this.turnoa[i]._id
        console.log(id)
        console.log(this.turnoa[i])
   
           
           console.log(this.turnoa[i].nombre)
        
           var idG =  this.turnoa[i].Guardias._id;
           console.log(idG, 'idGuardia')
           var sueldo = this.turnoa[i].Servicio.sueldo;
        
         this.asistencias = this.turnoa[i].diasasistidos;
         console.log(this.asistencias ,'con esto viene')
        
         var pdiasT = 0;
         var pdias = 0;
        
        
           
        for(let p = 0; p < this.turnoa[i].Guardias.prestamos.length; p++){ 
             
          var Montoapagar = 0;
          var Montoapagar1 = 0;
          var Montoapagar2 = 0;
          var Montoapagartotal = 0;
          var Prestamos = 0;
          Montoapagar = this.turnoa[i].Guardias.prestamos[p]?.montoapagar;
          Montoapagar1 = this.turnoa[i].Guardias.prestamos[0]?.montoapagar;
          Montoapagar2 = this.turnoa[i].Guardias.prestamos[1]?.montoapagar;
        //  var estadoP1 = this.turnoa[i].prestamos[0]?.activo;
        //  var estadoP2 = this.turnoa[i].prestamos[1]?.activo;
          
          if(Montoapagar1 == null  ){
            Montoapagar1 = 0;
          }     
          if(Montoapagar2 == null ){
            Montoapagar2 = 0;
          }     
         
          Montoapagartotal = Montoapagar1 + Montoapagar2 ;  
          var Montoprestado =this.turnoa[i].Guardias.prestamos[p]?.montoprestado;
          console.log(Montoprestado, 'dinero prestado')
          var idP  =  this.turnoa[i].Guardias.prestamos[p]?._id;
           console.log(idP)
          var total = this.turnoa[i].Guardias.prestamos[p]?.total;
       
          var totalC =0;

           console.log(this.turnoa[i].Guardias.prestamos[p].updatedAt)
           const tiempoh =  new Date();
            var fechadM = moment(this.turnoa[i].Guardias.prestamos[p].updatedAt).format("D");
          //var fechadM = 20;
           console.log(Number(fechadM ),'actdePres');
         

        if( this.hoy == 7  ){
           
            if(this.turnoa[i].tdpl == "A" || this.turnoa[i].tdpl == "D" ){
             // pago de prestamo
           if(total > 0 && total != Montoprestado){
            if(Number(fechadM ) != this.hoy){
              totalC = total - Montoapagar;
             
              console.log(Prestamos);
              console.log(totalC, 'hay dinero');
              
               this.servicioP.Agregartotal(idP,totalC).subscribe( (res)=> {
                  console.log(res)
                })
            }
         
           }
           if(total == Montoprestado){
           
            console.log(Montoprestado);
            Prestamos = Montoapagar;
            console.log(Prestamos)
            totalC = Montoprestado - Montoapagar;
            console.log(totalC, 'pago por primera')
             this.servicioP.Agregartotal(idP,totalC).subscribe( (res)=> {
               console.log(res)
             })
           }
          
        
          if(total == 0){
            this.servicioP.deletePrestamos(idP).subscribe( (res)=> {
              console.log('elimino',res)
            })
            console.log('elimino')
          }
             
              
            }else{
            // pago de prestamo
            // recuerda hacer halgo para que no se pueda pagar mas de una vez 
            if(total > 0 && total != Montoprestado){
              if(Number(fechadM ) != this.hoy){
                totalC = total - Montoapagar;
               
                console.log(totalC, 'hay dinero');
                
                 this.servicioP.Agregartotal(idP,totalC).subscribe( (res)=> {
                    console.log(res)
                  })
              }
               
             }
             if(total == Montoprestado){
              console.log(total);
              console.log(Montoprestado);
             
              console.log(Montoapagar)
            console.log(Montoapagar1)
            console.log(Montoapagar2)
              totalC = Montoprestado - Montoapagar ;
              console.log(totalC, 'pago por primera')
               this.servicioP.Agregartotal(idP,totalC).subscribe( (res)=> {
                 console.log(res)
               })
             }
            
          
            if(total == 0){
              this.servicioP.deletePrestamos(idP).subscribe( (res)=> {
                console.log('elimino',res)
              })
              console.log('elimino')
            }
  
            }
          
        }
        if(this.hoy == 15){
     
          if(this.turnoa[i].tltl == "A" || this.turnoa[i].tltl == "D" ){
              // pago de prestamo
              if(total > 0 && total != Montoprestado){
                if(Number(fechadM ) != this.hoy){
                  totalC = total - Montoapagar;
                  Prestamos = Montoapagar;
                  console.log(totalC, 'hay dinero');
                  
                   this.servicioP.Agregartotal(idP,totalC).subscribe( (res)=> {
                      console.log(res)
                    })
                }
               }
               if(total == Montoprestado){
                console.log(total);
                console.log(Montoprestado);
                Prestamos = Montoapagar;
                totalC = Montoprestado - Montoapagar ;
                console.log(totalC, 'pago por primera')
                 this.servicioP.Agregartotal(idP,totalC).subscribe( (res)=> {
                   console.log(res)
                 })
               }
              
            
              if(total == 0){
                this.servicioP.deletePrestamos(idP).subscribe( (res)=> {
                  console.log('elimino',res)
                })
                console.log('elimino')
              }

           
          }else{
                // pago de prestamo
           if(total > 0 && total != Montoprestado){
            if(Number(fechadM ) != this.hoy){
              totalC = total - Montoapagar;
              Prestamos = Montoapagar;
              console.log(totalC, 'hay dinero');
              
               this.servicioP.Agregartotal(idP,totalC).subscribe( (res)=> {
                  console.log(res)
                })
            }
           }
           if(total == Montoprestado){
            console.log(total);
            console.log(Montoprestado);
            Prestamos = Montoapagar;
            totalC = Montoprestado - Montoapagar ;
            console.log(totalC, 'pago por primera')
            //  this.servicioP.Agregartotal(idP,totalC).subscribe( (res)=> {
            //    console.log(res)
            //  })
           }
          
        
          if(total == 0){
            this.servicioP.deletePrestamos(idP).subscribe( (res)=> {
              console.log('elimino',res)
            })
            console.log('elimino')
          }
            
            
          }
        }
        if( this.hoy == 22){
        
          if(this.turnoa[i].tlcl == "A" || this.turnoa[i].tlcl == "D" ){
             // pago de prestamo
             if(total > 0 && total != Montoprestado){
              if(Number(fechadM ) != this.hoy){
                totalC = total - Montoapagar;
                Prestamos = Montoapagar;
                console.log(totalC, 'hay dinero');
                
                 this.servicioP.Agregartotal(idP,totalC).subscribe( (res)=> {
                    console.log(res)
                  })
              }
             }
             if(total == Montoprestado){
              console.log(total);
              console.log(Montoprestado);
              Prestamos = Montoapagar;
              totalC = Montoprestado - Montoapagar ;
              console.log(totalC, 'pago por primera')
               this.servicioP.Agregartotal(idP,totalC).subscribe( (res)=> {
                 console.log(res)
               })
             }
            
          
            if(total == 0){
              this.servicioP.deletePrestamos(idP).subscribe( (res)=> {
                console.log('elimino',res)
              })
              console.log('elimino')
            }
           
          }else{
                 // pago de prestamo
                 if(total > 0 && total != Montoprestado){
                  if(Number(fechadM ) != this.hoy){
                    totalC = total - Montoapagar;
                    Prestamos = Montoapagar;
                    console.log(totalC, 'hay dinero');
                     this.servicioP.Agregartotal(idP,totalC).subscribe( (res)=> {
                        console.log(res)
                      })
                  }
                 }
                 if(total == Montoprestado){
                  console.log(total);
                  console.log(Montoprestado);
                  Prestamos = Montoapagar;
                  totalC = Montoprestado - Montoapagar ;
                  console.log(totalC, 'pago por primera')
                   this.servicioP.Agregartotal(idP,totalC).subscribe( (res)=> {
                     console.log(res)
                   })
                 }
                
              
                if(total == 0){
                  this.servicioP.deletePrestamos(idP).subscribe( (res)=> {
                    console.log('elimino',res)
                  })
                  console.log('elimino')
                }
            
           }
          }
        
             //28
            if(this.hoy == 28){ 
           if(this.monthSelect.length == 28 ){
             console.log(this.monthSelect.length)
              if(this.turnoa[i].tdcl == "A" || this.turnoa[i].tdcl == "D" ){
                  // pago de prestamo
                  if(total > 0 && total != Montoprestado){
                    if(Number(fechadM ) != this.hoy){
                      totalC = total - Montoapagar;
                      Prestamos = Montoapagar;
                      console.log(totalC, 'hay dinero');
                      
                       this.servicioP.Agregartotal(idP,totalC).subscribe( (res)=> {
                          console.log(res)
                        })
                    }
                   }
                   if(total == Montoprestado){
                    console.log(total);
                    console.log(Montoprestado);
                    Prestamos = Montoapagar;
                    totalC = Montoprestado - Montoapagar ;
                    console.log(totalC, 'pago por primera')
                     this.servicioP.Agregartotal(idP,totalC).subscribe( (res)=> {
                       console.log(res)
                     })
                   }
                  
                
                  if(total == 0){
                    this.servicioP.deletePrestamos(idP).subscribe( (res)=> {
                      console.log('elimino',res)
                    })
                    console.log('elimino')
                  }
              
              }else{
                     // pago de prestamo
             if(total > 0 && total != Montoprestado){
              if(Number(fechadM ) != this.hoy){
                totalC = total - Montoapagar;
                Prestamos = Montoapagar;
                console.log(totalC, 'hay dinero');
                
                 this.servicioP.Agregartotal(idP,totalC).subscribe( (res)=> {
                    console.log(res)
                  })
              }
             }
             if(total == Montoprestado){
              console.log(total);
              console.log(Montoprestado);
              Prestamos = Montoapagar;
              totalC = Montoprestado - Montoapagar ;
              console.log(totalC, 'pago por primera')
               this.servicioP.Agregartotal(idP,totalC).subscribe( (res)=> {
                 console.log(res)
               })
             }
            
          
            if(total == 0){
              this.servicioP.deletePrestamos(idP).subscribe( (res)=> {
                console.log('elimino',res)
              })
              console.log('elimino')
            }
                
              }
             
            }
          }
  
            ////29
           if(this.hoy == 29){ 
            if(this.monthSelect.length == 29 ){
              if(this.turnoa[i].tlql == "A" || this.turnoa[i].tlql == "D" ){
              // pago de prestamo
              if(total > 0 && total != Montoprestado){
                if(Number(fechadM ) != this.hoy){
                  totalC = total - Montoapagar;
                  Prestamos = Montoapagar;
                  console.log(totalC, 'hay dinero');
                  
                   this.servicioP.Agregartotal(idP,totalC).subscribe( (res)=> {
                      console.log(res)
                    })
                }
               }
               if(total == Montoprestado){
                console.log(total);
                console.log(Montoprestado);
                Prestamos = Montoapagar;
                totalC = Montoprestado - Montoapagar ;
                console.log(totalC, 'pago por primera')
                 this.servicioP.Agregartotal(idP,totalC).subscribe( (res)=> {
                   console.log(res)
                 })
               }
              
            
              if(total == 0){
                this.servicioP.deletePrestamos(idP).subscribe( (res)=> {
                  console.log('elimino',res)
                })
                console.log('elimino')
              }
           
              }else{
            // pago de prestamo
            if(total > 0 && total != Montoprestado){
              if(Number(fechadM ) != this.hoy){
                totalC = total - Montoapagar;
                Prestamos = Montoapagar;
                console.log(totalC, 'hay dinero');
                
                 this.servicioP.Agregartotal(idP,totalC).subscribe( (res)=> {
                    console.log(res)
                  })
              }
             }
             if(total == Montoprestado){
              console.log(total);
              console.log(Montoprestado);
              Prestamos = Montoapagar;
              totalC = Montoprestado - Montoapagar ;
              console.log(totalC, 'pago por primera')
               this.servicioP.Agregartotal(idP,totalC).subscribe( (res)=> {
                 console.log(res)
               })
             }
            
          
            if(total == 0){
              this.servicioP.deletePrestamos(idP).subscribe( (res)=> {
                console.log('elimino',res)
              })
              console.log('elimino')
            }
              
              }
             
            }
          }
            //30
            if(this.hoy == 30){ 
            console.log(this.monthSelect.length)
            if(this.monthSelect.length == 30 ){
              if(this.turnoa[i].tmql == "A" || this.turnoa[i].tmql == "D" ){
                   // pago de prestamo
             if(total > 0 && total != Montoprestado){
              if(Number(fechadM ) != this.hoy){
                totalC = total - Montoapagar;
                Prestamos = Montoapagar;
                console.log(totalC, 'hay dinero');
                
                 this.servicioP.Agregartotal(idP,totalC).subscribe( (res)=> {
                    console.log(res)
                  })
              }
             }
             if(total == Montoprestado){
              console.log(total);
              console.log(Montoprestado);
              Prestamos = Montoapagar;
              totalC = Montoprestado - Montoapagar ;
              console.log(totalC, 'pago por primera')
               this.servicioP.Agregartotal(idP,totalC).subscribe( (res)=> {
                 console.log(res)
               })
             }
            
          
            if(total == 0){
              this.servicioP.deletePrestamos(idP).subscribe( (res)=> {
                console.log('elimino',res)
              })
              console.log('elimino')
            }
    
              }else{
                   // pago de prestamo
             if(total > 0 && total != Montoprestado){
              if(Number(fechadM ) != this.hoy){
                totalC = total - Montoapagar;
                Prestamos = Montoapagar;
                console.log(totalC, 'hay dinero');
                
                 this.servicioP.Agregartotal(idP,totalC).subscribe( (res)=> {
                    console.log(res)
                  })
              }
             }
             if(total == Montoprestado){
              console.log(total);
              console.log(Montoprestado);
              Prestamos = Montoapagar;
              totalC = Montoprestado - Montoapagar ;
              console.log(totalC, 'pago por primera')
               this.servicioP.Agregartotal(idP,totalC).subscribe( (res)=> {
                 console.log(res)
               })
             }
            
          
            if(total == 0){
              this.servicioP.deletePrestamos(idP).subscribe( (res)=> {
                console.log('elimino',res)
              })
              console.log('elimino')
            }
              
              }
             
            }
          }

            //31
            if(this.hoy == 31){ 
            if(this.monthSelect.length == 31 ){
              if(this.turnoa[i].tmiql == "A" || this.turnoa[i].tmiql == "D" ){
                 // pago de prestamo
             if(total > 0 && total != Montoprestado){
              if(Number(fechadM ) != this.hoy){
                totalC = total - Montoapagar;
                Prestamos = Montoapagar;
                console.log(totalC, 'hay dinero');
                
                 this.servicioP.Agregartotal(idP,totalC).subscribe( (res)=> {
                    console.log(res)
                  })
              }
             }
             if(total == Montoprestado){
              console.log(total);
              console.log(Montoprestado);
              Prestamos = Montoapagar;
              totalC = Montoprestado - Montoapagar ;
              console.log(totalC, 'pago por primera')
               this.servicioP.Agregartotal(idP,totalC).subscribe( (res)=> {
                 console.log(res)
               })
             }
            
          
            if(total == 0){
              this.servicioP.deletePrestamos(idP).subscribe( (res)=> {
                console.log('elimino',res)
              })
              console.log('elimino')
            }
  
             
                
    
              }else{
                // pago de prestamo
             if(total > 0 && total != Montoprestado){
              if(Number(fechadM ) != this.hoy){
                totalC = total - Montoapagar;
                Prestamos = Montoapagar;
                console.log(totalC, 'hay dinero');
                
                 this.servicioP.Agregartotal(idP,totalC).subscribe( (res)=> {
                    console.log(res)
                  })
              }
             }
             if(total == Montoprestado){
              console.log(total);
              console.log(Montoprestado);
              Prestamos = Montoapagar;
              totalC = Montoprestado - Montoapagar ;
              console.log(totalC, 'pago por primera')
               this.servicioP.Agregartotal(idP,totalC).subscribe( (res)=> {
                 console.log(res)
               })
             }
            
          
            if(total == 0){
              this.servicioP.deletePrestamos(idP).subscribe( (res)=> {
                console.log('elimino',res)
              })
              console.log('elimino')
            }
                  
         
              }
             
            }
          }
           
        }
        console.log(this.turnoa[i].Guardias.prestamos.length) 
        if(this.turnoa[i].Guardias.prestamos.length == 0){
          Montoapagartotal = 0;
          console.log(Montoapagartotal, 'no hay prestamos')
        }
        for(let m = 0; m < this.turnoa[i].Guardias.multas.length; m++){ 
             
          var Montoapagarm = 0;
          var Montoapagar1m = 0;
          var Montoapagar2m = 0;
          var Montoapagar3m = 0;
          var Montoapagar4m = 0;
          var Montoapagar5m = 0;
          var Montoapagar6m = 0;
          var Montoapagar7m = 0;
          var Montoapagar8m = 0;
          var Montoapagar9m = 0;
          var Montoapagar10m = 0;
          var Montoapagartotalm = 0;
          var Multa = 0;
          
          Montoapagar1m = this.turnoa[i].Guardias.multas[0]?.cantidadmulta;
          Montoapagar2m = this.turnoa[i].Guardias.multas[1]?.cantidadmulta;
          Montoapagar3m = this.turnoa[i].Guardias.multas[2]?.cantidadmulta;
          Montoapagar4m = this.turnoa[i].Guardias.multas[3]?.cantidadmulta;
          Montoapagar5m = this.turnoa[i].Guardias.multas[4]?.cantidadmulta;
          Montoapagar6m = this.turnoa[i].Guardias.multas[5]?.cantidadmulta;
          Montoapagar7m = this.turnoa[i].Guardias.multas[6]?.cantidadmulta;
          Montoapagar8m = this.turnoa[i].Guardias.multas[7]?.cantidadmulta;
          Montoapagar9m = this.turnoa[i].Guardias.multas[8]?.cantidadmulta;
          Montoapagar10m = this.turnoa[i].Guardias.multas[9]?.cantidadmulta;

          var multaapagar = this.turnoa[i].Guardias.multaapagar;
        
        
         
          if(Montoapagar1m == null  ){
            Montoapagar1m = 0;
          }     
          if(Montoapagar2m == null ){
            Montoapagar2m = 0;
          }   
          if(Montoapagar3m == null  ){
            Montoapagar3m = 0;
          }     
          if(Montoapagar4m == null ){
            Montoapagar4m = 0;
          }  
          if(Montoapagar5m == null  ){
            Montoapagar5m = 0;
          }     
          if(Montoapagar6m == null ){
            Montoapagar6m = 0;
          }
          if(Montoapagar7m == null  ){
            Montoapagar7m = 0;
          }     
          if(Montoapagar8m == null ){
            Montoapagar8m = 0;
          }    
          if(Montoapagar9m == null  ){
            Montoapagar9m = 0;
          }     
          if(Montoapagar10m == null ){
            Montoapagar10m = 0;
          }        
         
          Montoapagartotalm = Montoapagar1m + Montoapagar2m + Montoapagar3m +Montoapagar4m +Montoapagar5m + Montoapagar6m + Montoapagar7m + Montoapagar8m + Montoapagar9m + Montoapagar10m;  
        
  
          var idGm  =  this.turnoa[i].Guardias._id;
        
          var idm  =  this.turnoa[i].Guardias.multas[m]?._id;
     
     

      
        if( this.hoy == 7  ){
         
            if(this.turnoa[i].tdpl == "A" || this.turnoa[i].tdpl == "D" ){

            
            
             
            if(multaapagar != Montoapagartotalm ){
              // recuerda ponerle lo de eliminar la multa cuando se page
             this.servicioM.AgregartotalM(idGm, Montoapagartotalm).subscribe( (res)=> {
          
             })
            }
          
            }else{
        

         
          
           if(multaapagar != Montoapagartotalm ){
            
           this.servicioM.AgregartotalM(idGm, Montoapagartotalm).subscribe( (res)=> {
        
           })
          }
      
            }
          
        }
        if(this.hoy == 15){
     
          if(this.turnoa[i].tltl == "A" || this.turnoa[i].tltl == "D" ){
    
            
               
                
               if(multaapagar != Montoapagartotalm ){
                 
                this.servicioM.AgregartotalM(idGm, Montoapagartotalm).subscribe( (res)=> {
             
                })
               }
          }else{
    
         
          
           if(multaapagar != Montoapagartotalm ){
            
           this.servicioM.AgregartotalM(idGm, Montoapagartotalm).subscribe( (res)=> {
        
           })
          }
       
           
          }
        }
        if( this.hoy == 22){
        
          if(this.turnoa[i].tlcl == "A" || this.turnoa[i].tlcl == "D" ){

            
           
            
           if(multaapagar != Montoapagartotalm ){
             
            this.servicioM.AgregartotalM(idGm, Montoapagartotalm).subscribe( (res)=> {
         
            })
           }
           
          }else{
              
         
          
           if(multaapagar != Montoapagartotalm ){
            
           this.servicioM.AgregartotalM(idGm, Montoapagartotalm).subscribe( (res)=> {
        
           })
          }
            
           }
          }
        
            // 28
            if(this.hoy == 28){ 
           if(this.monthSelect.length == 28 ){
             
              if(this.turnoa[i].tdcl == "A" || this.turnoa[i].tdcl == "D" ){
              
         
          
           if(multaapagar != Montoapagartotalm ){
            
           this.servicioM.AgregartotalM(idGm, Montoapagartotalm).subscribe( (res)=> {
        
           })
          }
              
              }else{
          
        
         
          
           if(multaapagar != Montoapagartotalm ){
            
           this.servicioM.AgregartotalM(idGm, Montoapagartotalm).subscribe( (res)=> {
        
           })
          }
          }
        }
      }
            ////29
           if(this.hoy == 29){ 
            if(this.monthSelect.length == 29 ){
              if(this.turnoa[i].tlql == "A" || this.turnoa[i].tlql == "D" ){
        
                  
                   
                    if(multaapagar != Montoapagartotalm ){
                     
                    this.servicioM.AgregartotalM(idGm, Montoapagartotalm).subscribe( (res)=> {
                 
                    })
                   }
           
              }else{
         
         
  
            
             
              if(multaapagar != Montoapagartotalm ){
               
              this.servicioM.AgregartotalM(idGm, Montoapagartotalm).subscribe( (res)=> {
           
              })
             }
              
              }
             
            }
          }
            //30
            if(this.hoy == 30){ 
            
            if(this.monthSelect.length == 30 ){
              if(this.turnoa[i].tmql == "A" || this.turnoa[i].tmql == "D" ){
  
            
             
              if(multaapagar != Montoapagartotalm ){
               
              this.servicioM.AgregartotalM(idGm, Montoapagartotalm).subscribe( (res)=> {
           
              })
             }
    
              }else{
          
  
            
             
              if(multaapagar != Montoapagartotalm ){
               
              this.servicioM.AgregartotalM(idGm, Montoapagartotalm).subscribe( (res)=> {
           
              })
             }
              
              }
             
            }
          }

            //31
            if(this.hoy == 31){ 
            if(this.monthSelect.length == 31 ){
              if(this.turnoa[i].tmiql == "A" || this.turnoa[i].tmiql == "D" ){
      
                
                 
                  if(multaapagar != Montoapagartotalm ){
                   
                  this.servicioM.AgregartotalM(idGm, Montoapagartotalm).subscribe( (res)=> {
               
                  })
                 }
              }else{
      
                
                 
                  if(multaapagar != Montoapagartotalm ){
                   
                  this.servicioM.AgregartotalM(idGm, Montoapagartotalm).subscribe( (res)=> {
               
                  })
                 }
              }
             
            }
          }
           
        }
       
        if(this.turnoa[i].Guardias.multas.length == 0){
          Montoapagartotalm = 0;
        
        }
         
         
// si es la semana 0 va entrar
          if(this.hoy >= 0  && this.hoy <= 7  ){
            // dias que tiene por laborar
            if(this.turnoa[i].tlp == "TD" || this.turnoa[i].tlp == "TN" || this.turnoa[i].tlp == "D"){
              pdias = pdias + 1;
            }
            if(this.turnoa[i].tmp == "TD" || this.turnoa[i].tmp == "TN" || this.turnoa[i].tmp == "D"){
              pdias = pdias + 1;
            }
            if(this.turnoa[i].tmip == "TD" || this.turnoa[i].tmip == "TN" || this.turnoa[i].tmip == "D" ){
              pdias = pdias + 1;
            }
            if(this.turnoa[i].tjp == "TD" || this.turnoa[i].tjp == "TN" || this.turnoa[i].tjp == "D"){
              pdias = pdias + 1;
            }
            if(this.turnoa[i].tvp == "TD" || this.turnoa[i].tvp == "TN" || this.turnoa[i].tvp == "D"){
              pdias = pdias + 1;
            }
            if(this.turnoa[i].tsp == "TD" || this.turnoa[i].tsp == "TN" || this.turnoa[i].tsp == "D"){
              pdias = pdias + 1;
            }
            if(this.turnoa[i].tdp == "TD" || this.turnoa[i].tdp == "TN" || this.turnoa[i].tdp == "D"){
              pdias = pdias + 1;
            }

            console.log(pdias, 'dias planeados')
            
          if(this.turnoa[i].tlpl == "A" || this.turnoa[i].tlpl == "D" ){
           
            //aqui reiniciamos la viariable diasasistidos a 0
            this.asistencias = 0;
            this.diasasistidos = 0
            
            this.diasasistidos = this.asistencias + 1;
            console.log("entro lp")
            console.log(this.diasasistidos)
          
          }else{
            this.asistencias = 0;
            this.diasasistidos = 0
            console.log("falto el G")}
          if(this.turnoa[i].tmpl == "A" || this.turnoa[i].tmpl == "D" ){
           
          
            if(this.diasasistidos == undefined){
              this.diasasistidos = this.asistencias + 1;
              
            }else {
              this.diasasistidos = this.diasasistidos +1;
            }
        
            console.log("entro mp")
            console.log(this.diasasistidos)
            
          }else{console.log("falto el G")}
          if(this.turnoa[i].tmipl == "A" || this.turnoa[i].tmipl == "D" ){
           
            
          
            if(this.diasasistidos == undefined){
              this.diasasistidos = this.asistencias + 1;
            }else {
              this.diasasistidos = this.diasasistidos +1;
            }
            console.log("entro mip")
            console.log(this.diasasistidos)
            
            
         
          }else{console.log("falto el G")}
          if(this.turnoa[i].tjpl == "A" || this.turnoa[i].tjpl == "D" ){
          
          
            if(this.diasasistidos == undefined){
              this.diasasistidos = this.asistencias + 1;
            }else {
              this.diasasistidos = this.diasasistidos +1;
            }
           console.log("entro tjpl")
           console.log(this.diasasistidos)
           
           
            
        
          }else{console.log("falto el G")}
          if(this.turnoa[i].tvpl == "A" || this.turnoa[i].tvpl == "D" ){
           
            
          
            if(this.diasasistidos == undefined){
              this.diasasistidos = this.asistencias + 1;
            }else {
              this.diasasistidos = this.diasasistidos +1;
            }
            console.log("entro vp")
            console.log(this.diasasistidos)
           
          }else{console.log("falto el G")}
          if(this.turnoa[i].tspl == "A" || this.turnoa[i].tspl == "D" ){
           
            
          
            if(this.diasasistidos == undefined){
              this.diasasistidos = this.asistencias + 1;
            }else {
              this.diasasistidos = this.diasasistidos +1;
            }
            console.log("entro sp")
            console.log(this.diasasistidos)
           
           
          }else{console.log("falto el G")}
          if(this.turnoa[i].tdpl == "A" || this.turnoa[i].tdpl == "D" ){
           
           
            if(this.diasasistidos == undefined){
              this.diasasistidos = this.asistencias + 1;
              this.Diasasistidos = this.diasasistidos;
           
            }else {
              this.diasasistidos = this.diasasistidos +1;
              this.Diasasistidos = this.diasasistidos;
             
            }
            
            console.log("entro dp /////////////////////")
            console.log(this.diasasistidos, 'dias asistido')
            //el da los dias que estan en la planeacion y saca el valor por dia 
            pdiasT= sueldo / pdias;
            console.log(pdiasT,'valor del dia')
            // aqui esta los dias que a asistido
            this.Diasfalto = 0;
            this.Diasfalto = pdiasT * this.diasasistidos;
            console.log(this.diasasistidos,'cuantos dias fue')
            console.log(this.Diasfalto,'dinero * los dias que asistido')
            // dinero menos por faltar
            this.dinerofaltante = 0;
            this.dinerofaltante = sueldo - this.Diasfalto;
            console.log(this.dinerofaltante,'dinero faltante');
            // monto a pagar de prestamo
            Prestamos = this.turnoa[i].montoapagartotal;
            console.log(Prestamos, 'suma de prestamos');
            this.servicio.Agregardiaasistido(id, this.diasasistidos,this.dinerofaltante).subscribe( (res)=> {
              console.log(res)

            })
            this.servicio.AgregarMonto(idG,Montoapagartotal).subscribe( (res)=> {
              console.log(res)
             
            })
            
            console.log("Numero de semana");
          }else{
            
            // condicionante en caso de que falte el dia de corte
            console.log("dp  Falto")
            this.Diasasistidos = this.diasasistidos
            console.log(this.diasasistidos, 'dias asistido')
            //el da los dias que estan en la planeacion y saca el valor por dia 
            pdiasT= sueldo / pdias;
            console.log(pdiasT,'valor del dia')
            // aqui esta los dias que a asistido
            this.Diasfalto = 0;
            this.Diasfalto = pdiasT * this.diasasistidos;
            console.log(this.diasasistidos,'cuantos dias fue')
            console.log(this.Diasfalto,'dinero * los dias que asistido')
            // dinero menos por faltar
            this.dinerofaltante = 0;
            this.dinerofaltante = sueldo - this.Diasfalto;
            console.log(this.dinerofaltante,'dinero faltante');
            // monto a pagar de prestamo
            Prestamos = this.turnoa[i].Guardias.montoapagartotal;
            console.log(Prestamos, 'suma de prestamos');
            this.servicio.Agregardiaasistido(id, this.diasasistidos,this.dinerofaltante).subscribe( (res)=> {
              console.log(res)
            })
            this.servicio.AgregarMonto(idG,Montoapagartotal).subscribe( (res)=> {
              console.log(res)

            })
            console.log(1,"Numero de semana");
          }
        
      }
// si es la semana 1 va entrar
          if(this.hoy >= 8 && this.hoy <= 15){
            // dias que tiene por laborar
            if(this.turnoa[i].tls == "TD" || this.turnoa[i].tls == "TN" || this.turnoa[i].tls == "D"){
              pdias = pdias + 1;
            }
            if(this.turnoa[i].tms == "TD" || this.turnoa[i].tms == "TN" || this.turnoa[i].tms == "D"){
              pdias = pdias + 1;
            }
            if(this.turnoa[i].tmis == "TD" || this.turnoa[i].tmis == "TN" || this.turnoa[i].tmis == "D" ){
              pdias = pdias + 1;
            }
            if(this.turnoa[i].tjs == "TD" || this.turnoa[i].tjs == "TN" || this.turnoa[i].tjs == "D"){
              pdias = pdias + 1;
            }
            if(this.turnoa[i].tvs == "TD" || this.turnoa[i].tvs == "TN" || this.turnoa[i].tvs == "D"){
              pdias = pdias + 1;
            }
            if(this.turnoa[i].tss == "TD" || this.turnoa[i].tss == "TN" || this.turnoa[i].tss == "D"){
              pdias = pdias + 1;
            }
            if(this.turnoa[i].tds == "TD" || this.turnoa[i].tds == "TN" || this.turnoa[i].tds == "D"){
              pdias = pdias + 1;
            }
            if(this.turnoa[i].tlt == "TD" || this.turnoa[i].tlt == "TN" || this.turnoa[i].tlt == "D"){
              pdias = pdias + 1;
            }

            console.log(pdias)
           
          if(this.turnoa[i].tlsl == "A" || this.turnoa[i].tlsl == "D" ){
           
            //aqui reiniciamos la viariable diasasistidos a 0
            this.asistencias = 0;
            this.diasasistidos = 0
           
            this.diasasistidos = this.asistencias + 1;
            
            console.log("entro lp")
            console.log(this.diasasistidos)
          }else{
            this.asistencias = 0;
            this.diasasistidos = 0
            console.log("falto el G")}
          if(this.turnoa[i].tmsl == "A" || this.turnoa[i].tmsl == "D" ){
           
            
            if(this.diasasistidos == undefined){
              this.diasasistidos = this.asistencias + 1;
            }else {
              this.diasasistidos = this.diasasistidos +1;
            }
           
            console.log("entro mp")
            console.log(this.diasasistidos)
          
          }else{console.log("falto el G")}
          if(this.turnoa[i].tmisl == "A" || this.turnoa[i].tmisl == "D" ){
           
            if(this.diasasistidos == undefined){
              this.diasasistidos = this.asistencias + 1;
            }else {
              this.diasasistidos = this.diasasistidos +1;
            }
            console.log("entro mip")
            console.log(this.diasasistidos)
          
          }else{console.log("falto el G")}
          if(this.turnoa[i].tjsl == "A" || this.turnoa[i].tjsl == "D" ){
           
            if(this.diasasistidos == undefined){
              this.diasasistidos = this.asistencias + 1;
            }else {
              this.diasasistidos = this.diasasistidos +1;
            }
            console.log("entro jp")
            console.log(this.diasasistidos)
         
          }else{console.log("falto el G")}
          if(this.turnoa[i].tvsl == "A" || this.turnoa[i].tvsl == "D" ){
           
            if(this.diasasistidos == undefined){
              this.diasasistidos = this.asistencias + 1;
            }else {
              this.diasasistidos = this.diasasistidos +1;
            }
            console.log("entro vp")
            console.log(this.diasasistidos)
          }else{console.log("falto el G")}
          if(this.turnoa[i].tssl == "A" || this.turnoa[i].tssl == "D" ){
           
            if(this.diasasistidos == undefined){
              this.diasasistidos = this.asistencias + 1;
            }else {
              this.diasasistidos = this.diasasistidos +1;
            }
            console.log("entro sp")
            console.log(this.diasasistidos)
           
          }else{console.log("falto el G")}
          if(this.turnoa[i].tdsl == "A" || this.turnoa[i].tdsl == "D" ){
           
            if(this.diasasistidos == undefined){
              this.diasasistidos = this.asistencias + 1;
            }else {
              this.diasasistidos = this.diasasistidos +1;
            }
            console.log("entro ds //////////////////")
            console.log(this.diasasistidos)
          
          }else{console.log("falto el G")}    
          if(this.turnoa[i].tltl == "A" || this.turnoa[i].tltl == "D" ){
          

            if(this.diasasistidos == undefined){
              this.diasasistidos = this.asistencias + 1;
              this.Diasasistidos = this.diasasistidos;
            }else {
              this.diasasistidos = this.diasasistidos +1;
              this.Diasasistidos = this.diasasistidos;
            }
            console.log("entro lt")
            console.log(this.diasasistidos, 'dias asistido')
            //el da los dias que estan en la planeacion y saca el valor por dia 
             pdiasT= sueldo / pdias;
            // aqui esta los dias que a asistido
            this.Diasfalto = 0;
            this.Diasfalto = sueldo * this.diasasistidos;
            // dinero menos por faltar
            this.dinerofaltante = 0;
            this.dinerofaltante = sueldo - this.Diasfalto;
            console.log(this.dinerofaltante);
            // monto a pagar de prestamo
            Prestamos = this.turnoa[i].montoapagartotal;
            console.log(Prestamos, 'suma de prestamos');
            this.servicio.Agregardiaasistido(id, this.diasasistidos,this.dinerofaltante).subscribe( (res)=> {
              console.log(res)
            })
            this.servicio.AgregarMonto(idG,Montoapagartotal).subscribe( (res)=> {
              console.log(res)

            })
            console.log("Numero de semana");
           
          }else{
            // condicionante en caso de que falte el dia de corte
            console.log("lt  Falto")
            this.Diasasistidos = this.diasasistidos
            console.log(this.diasasistidos, 'dias asistido')
            //el da los dias que estan en la planeacion y saca el valor por dia 
            pdiasT= sueldo / pdias;
            // aqui esta los dias que a asistido
            this.Diasfalto = 0;
            this.Diasfalto = pdiasT * this.diasasistidos;
            // dinero menos por faltar
            this.dinerofaltante = 0;
            this.dinerofaltante = sueldo - this.Diasfalto;
            console.log(this.dinerofaltante);
            // monto a pagar de prestamo
            Prestamos = this.turnoa[i].montoapagartotal;
            console.log(Prestamos, 'suma de prestamos');
            this.servicio.Agregardiaasistido(id, this.diasasistidos,this.dinerofaltante).subscribe( (res)=> {
              console.log(res)
            })
            this.servicio.AgregarMonto(idG,Montoapagartotal).subscribe( (res)=> {
              console.log(res)

            })
            console.log(1,"Numero de semana");
          }
        }

        if(this.hoy >= 16 && this.hoy <= 22){
                  // dias que tiene por laborar
            if(this.turnoa[i].tmt == "TD" || this.turnoa[i].tmt == "TN" || this.turnoa[i].tmt == "D"){
              pdias = pdias + 1;
            }
            if(this.turnoa[i].tmit == "TD" || this.turnoa[i].tmit == "TN" || this.turnoa[i].tmit == "D" ){
              pdias = pdias + 1;
            }
            if(this.turnoa[i].tjt == "TD" || this.turnoa[i].tjt == "TN" || this.turnoa[i].tjt == "D"){
              pdias = pdias + 1;
            }
            if(this.turnoa[i].tvt == "TD" || this.turnoa[i].tvt == "TN" || this.turnoa[i].tvt == "D"){
              pdias = pdias + 1;
            }
            if(this.turnoa[i].tst == "TD" || this.turnoa[i].tst == "TN" || this.turnoa[i].tst == "D"){
              pdias = pdias + 1;
            }
            if(this.turnoa[i].tdt == "TD" || this.turnoa[i].tdt == "TN" || this.turnoa[i].tdt == "D"){
              pdias = pdias + 1;
            }
            if(this.turnoa[i].tlc == "TD" || this.turnoa[i].tlc == "TN" || this.turnoa[i].tlc == "D"){
              pdias = pdias + 1;
            }
            console.log(pdias)
          
          if(this.turnoa[i].tmtl == "A" || this.turnoa[i].tmtl == "D" ){

           //aqui reiniciamos la viariable diasasistidos a 0
           this.asistencias = 0;
           this.diasasistidos = 0
           console.log(this.asistencias)
            this.diasasistidos = this.asistencias + 1;
       
            console.log("entro mp")
            console.log(this.diasasistidos)
          }else{
            this.asistencias = 0;
            this.diasasistidos = 0
            console.log("falto el G")}
          if(this.turnoa[i].tmitl == "A" || this.turnoa[i].tmitl == "D" ){
           
            
            if(this.diasasistidos == undefined){
              this.diasasistidos = this.asistencias + 1;
            }else {
              this.diasasistidos = this.diasasistidos +1;
            }
            
       
            console.log("entro mip")
            console.log(this.diasasistidos)
          }else{console.log("falto el G")}
          if(this.turnoa[i].tjtl == "A" || this.turnoa[i].tjtl == "D" ){
           
            
          
            if(this.diasasistidos == undefined){
              this.diasasistidos = this.asistencias + 1;
            }else {
              this.diasasistidos = this.diasasistidos +1;
            }
       
            console.log("entro jp")
            console.log(this.diasasistidos)
          }else{console.log("falto el G")}
          if(this.turnoa[i].tvtl == "A" || this.turnoa[i].tvtl == "D" ){
           
            
          
            if(this.diasasistidos == undefined){
              this.diasasistidos = this.asistencias + 1;
            }else {
              this.diasasistidos = this.diasasistidos +1;
            }
       
            console.log("entro vp")
            console.log(this.diasasistidos)
          }else{console.log("falto el G")}
          if(this.turnoa[i].tstl == "A" || this.turnoa[i].tstl == "D" ){
           
            
            if(this.diasasistidos == undefined){
              this.diasasistidos = this.asistencias + 1;
            }else {
              this.diasasistidos = this.diasasistidos +1;
            }
            console.log("entro sp")
            console.log(this.diasasistidos)
          }else{console.log("falto el G")}
          if(this.turnoa[i].tdtl == "A" || this.turnoa[i].tdtl == "D" ){
           
            
          
            if(this.diasasistidos == undefined){
              this.diasasistidos = this.asistencias + 1;
            }else {
              this.diasasistidos = this.diasasistidos +1;
            }
            console.log("entro dt ///////////////")
            console.log(this.diasasistidos)
         
          }else{console.log("falto el G")}
          if(this.turnoa[i].tlcl == "A" || this.turnoa[i].tlcl == "D" ){
          
            if(this.diasasistidos == undefined){
              this.diasasistidos = this.asistencias + 1;
              this.Diasasistidos = this.diasasistidos;
            }else {
              this.diasasistidos = this.diasasistidos +1;
              this.Diasasistidos = this.diasasistidos;
            }
            console.log("entro lc")
            console.log(this.diasasistidos, 'dias asistido')
            //el da los dias que estan en la planeacion y saca el valor por dia 
            pdiasT= sueldo / pdias;
            // aqui esta los dias que a asistido
            this.Diasfalto = 0;
            this.Diasfalto = pdiasT * this.diasasistidos;
            // dinero menos por faltar
            this.dinerofaltante = 0;
            this.dinerofaltante = sueldo - this.Diasfalto;
            console.log(this.dinerofaltante);
            // monto a pagar de prestamo
            Prestamos = this.turnoa[i].montoapagartotal;
            console.log(Prestamos, 'suma de prestamos');
           
            this.servicio.Agregardiaasistido(id, this.diasasistidos,this.dinerofaltante).subscribe( (res)=> {
              console.log(res)
            })
            this.servicio.AgregarMonto(idG,Montoapagartotal).subscribe( (res)=> {
              console.log(res)

            })
            console.log("Numero de semana");
          }else{
            
             // condicionante en caso de que falte el dia de corte
             console.log("lc  Falto")
             this.Diasasistidos = this.diasasistidos
             console.log(this.diasasistidos, 'dias asistido')
             //el da los dias que estan en la planeacion y saca el valor por dia 
             pdiasT= sueldo / pdias;
             // aqui esta los dias que a asistido
             this.Diasfalto = 0;
             this.Diasfalto = pdiasT * this.diasasistidos;
             // dinero menos por faltar
             this.dinerofaltante = 0;
             this.dinerofaltante = sueldo - this.Diasfalto;
             console.log(this.dinerofaltante);
             // monto a pagar de prestamo
             Prestamos = this.turnoa[i].montoapagartotal;
             console.log(Prestamos, 'suma de prestamos');
             this.servicio.Agregardiaasistido(id, this.diasasistidos,this.dinerofaltante).subscribe( (res)=> {
               console.log(res)
             })
             this.servicio.AgregarMonto(idG,Montoapagartotal).subscribe( (res)=> {
              console.log(res)

            })
             console.log(2,"Numero de semana");
           }
          }

        if(this.hoy >= 23){
                   // dias que tiene por laborar
                   if(this.turnoa[i].tmc == "TD" || this.turnoa[i].tmc == "TN" || this.turnoa[i].tmc == "D"){
                    pdias = pdias + 1;
                  }
                  if(this.turnoa[i].tmic == "TD" || this.turnoa[i].tmic == "TN" || this.turnoa[i].tmic == "D" ){
                    pdias = pdias + 1;
                  }
                  if(this.turnoa[i].tjc == "TD" || this.turnoa[i].tjc == "TN" || this.turnoa[i].tjc == "D"){
                    pdias = pdias + 1;
                  }
                  if(this.turnoa[i].tvc == "TD" || this.turnoa[i].tvc == "TN" || this.turnoa[i].tvc == "D"){
                    pdias = pdias + 1;
                  }
                  if(this.turnoa[i].tsc == "TD" || this.turnoa[i].tsc == "TN" || this.turnoa[i].tsc == "D"){
                    pdias = pdias + 1;
                  }
                  if(this.turnoa[i].tdc == "TD" || this.turnoa[i].tdc == "TN" || this.turnoa[i].tdc == "D"){
                    pdias = pdias + 1;
                  }
                  if(this.turnoa[i].tlq == "TD" || this.turnoa[i].tlq == "TN" || this.turnoa[i].tlq == "D"){
                    pdias = pdias + 1;
                  }
                  if(this.turnoa[i].tmq == "TD" || this.turnoa[i].tmq == "TN" || this.turnoa[i].tmq == "D"){
                    pdias = pdias + 1;
                  }
                  if(this.turnoa[i].tmiq == "TD" || this.turnoa[i].tmiq == "TN" || this.turnoa[i].tmiq == "D" ){
                    pdias = pdias + 1;
                  }
                  console.log(pdias)
                  
          if(this.turnoa[i].tmcl == "A" || this.turnoa[i].tmcl == "D" ){
           
            
           //aqui reiniciamos la viariable diasasistidos a 0
           this.asistencias = 0;
           this.diasasistidos = 0
           console.log(this.asistencias)
            this.diasasistidos = this.asistencias + 1;
       
            console.log("entro mp")
            console.log(this.diasasistidos)
          }else{
            this.asistencias = 0;
            this.diasasistidos = 0
            console.log("falto el G")}
          if(this.turnoa[i].tmicl == "A" || this.turnoa[i].tmicl == "D" ){
           
            
            if(this.diasasistidos == undefined){
              this.diasasistidos = this.asistencias + 1;
            }else {
              this.diasasistidos = this.diasasistidos +1;
            }
       
            console.log("entro mip")
            console.log(this.diasasistidos)
          }else{console.log("falto el G")}
          if(this.turnoa[i].tjcl == "A" || this.turnoa[i].tjcl == "D" ){
           
          
            if(this.diasasistidos == undefined){
              this.diasasistidos = this.asistencias + 1;
            }else {
              this.diasasistidos = this.diasasistidos +1;
            }
       
            console.log("entro jp")
            console.log(this.diasasistidos)
          }else{console.log("falto el G")}
          if(this.turnoa[i].tvcl == "A" || this.turnoa[i].tvcl == "D" ){
           
          
            if(this.diasasistidos == undefined){
              this.diasasistidos = this.asistencias + 1;
            }else {
              this.diasasistidos = this.diasasistidos +1;
            }
       
            console.log("entro vp")
            console.log(this.diasasistidos)
          }else{console.log("falto el G")}
          if(this.turnoa[i].tscl == "A" || this.turnoa[i].tscl == "D" ){
           
            
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
           
            if(this.turnoa[i].tdcl == "A" || this.turnoa[i].tdcl == "D" ){
        
              if(this.diasasistidos == undefined){
                this.diasasistidos = this.asistencias + 1;
                this.Diasasistidos = this.diasasistidos;
              }else {
                this.diasasistidos = this.diasasistidos +1;
                this.Diasasistidos = this.diasasistidos;
              }
              console.log("entro dcL")
              console.log(this.diasasistidos, 'dias asistido')
              //el da los dias que estan en la planeacion y saca el valor por dia 
              pdiasT= sueldo / pdias;
              // aqui esta los dias que a asistido
              this.Diasfalto = 0;
              this.Diasfalto = pdiasT * this.diasasistidos;
              // dinero menos por faltar
              this.dinerofaltante = 0;
              this.dinerofaltante = sueldo - this.Diasfalto;
              console.log(this.dinerofaltante);
              // monto a pagar de prestamo
              Prestamos = this.turnoa[i].montoapagartotal;
              console.log(Prestamos, 'suma de prestamos');
              this.servicio.Agregardiaasistido(id, this.diasasistidos,this.dinerofaltante).subscribe( (res)=> {
                console.log(res)
              })
              this.servicio.AgregarMonto(idG,Montoapagartotal).subscribe( (res)=> {
                console.log(res)
  
              })
              console.log(3,"Numero de semana");
            
            }else{
              
               // condicionante en caso de que falte el dia de corte
             console.log("dcL  Falto")
             this.Diasasistidos = this.diasasistidos
             console.log(this.diasasistidos, 'dias asistido')
             //el da los dias que estan en la planeacion y saca el valor por dia 
             pdiasT= sueldo / pdias;
             // aqui esta los dias que a asistido
             this.Diasfalto = 0;
             this.Diasfalto = pdiasT * this.diasasistidos;
             // dinero menos por faltar
             this.dinerofaltante = 0;
             this.dinerofaltante = sueldo - this.Diasfalto;
             console.log(this.dinerofaltante);
             // monto a pagar de prestamo
             Prestamos = this.turnoa[i].montoapagartotal;
             console.log(Prestamos, 'suma de prestamos');
             this.servicio.Agregardiaasistido(id, this.diasasistidos,this.dinerofaltante).subscribe( (res)=> {
               console.log(res)
             })
             this.servicio.AgregarMonto(idG,Montoapagartotal).subscribe( (res)=> {
              console.log(res)

            })
             console.log(3,"Numero de semana");
            }
           
          }else  if(this.turnoa[i].tdcl == "A" || this.turnoa[i].tdcl == "D" ){
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
            if(this.turnoa[i].tlql == "A" || this.turnoa[i].tlql == "D" ){
            
              if(this.diasasistidos == undefined){
                this.diasasistidos = this.asistencias + 1;
                this.Diasasistidos = this.diasasistidos;
              }else {
                this.diasasistidos = this.diasasistidos +1;
                this.Diasasistidos = this.diasasistidos;
              }
              console.log("entro lql")
              console.log(this.diasasistidos, 'dias asistido')
              //el da los dias que estan en la planeacion y saca el valor por dia 
              pdiasT= sueldo / pdias;
              // aqui esta los dias que a asistido
              this.Diasfalto = 0;
              this.Diasfalto = pdiasT * this.diasasistidos;
              // dinero menos por faltar
              this.dinerofaltante = 0;
              this.dinerofaltante = sueldo - this.Diasfalto;
              console.log(this.dinerofaltante);
              // monto a pagar de prestamo
              Prestamos = this.turnoa[i].montoapagartotal;
              console.log(Prestamos, 'suma de prestamos');
              this.servicio.Agregardiaasistido(id, this.diasasistidos,this.dinerofaltante).subscribe( (res)=> {
                console.log(res)
              })
              this.servicio.AgregarMonto(idG,Montoapagartotal).subscribe( (res)=> {
                console.log(res)
  
              })
              console.log(3,"Numero de semana");
              
  
            }else{
              
                // condicionante en caso de que falte el dia de corte
             console.log("lql  Falto")
             this.Diasasistidos = this.diasasistidos
             console.log(this.diasasistidos, 'dias asistido')
             //el da los dias que estan en la planeacion y saca el valor por dia 
             pdiasT= sueldo / pdias;
             // aqui esta los dias que a asistido
             this.Diasfalto = 0;
             this.Diasfalto = pdiasT * this.diasasistidos;
             // dinero menos por faltar
             this.dinerofaltante = 0;
             this.dinerofaltante = sueldo - this.Diasfalto;
             console.log(this.dinerofaltante);
             // monto a pagar de prestamo
             Prestamos = this.turnoa[i].montoapagartotal;
             console.log(Prestamos, 'suma de prestamos');
             this.servicio.Agregardiaasistido(id, this.diasasistidos,this.dinerofaltante).subscribe( (res)=> {
               console.log(res)
             })
             this.servicio.AgregarMonto(idG,Montoapagartotal).subscribe( (res)=> {
              console.log(res)

            })
             console.log(3,"Numero de semana");
            }
           
          }else  if(this.turnoa[i].tlql == "A" || this.turnoa[i].tlql == "D" ){
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
            if(this.turnoa[i].tmql == "A" || this.turnoa[i].tmql == "D" ){
          

              if(this.diasasistidos == undefined){
                this.diasasistidos = this.asistencias + 1;
                this.Diasasistidos = this.diasasistidos;
              }else {
                this.diasasistidos = this.diasasistidos +1;
                this.Diasasistidos = this.diasasistidos;
              }
              console.log("entro mql 30")
              console.log(this.diasasistidos, 'dias asistido')
              //el da los dias que estan en la planeacion y saca el valor por dia 
              pdiasT= sueldo / pdias;
              // aqui esta los dias que a asistido
              this.Diasfalto = 0;
              this.Diasfalto = pdiasT * this.diasasistidos;
              // dinero menos por faltar
              this.dinerofaltante = 0;
              this.dinerofaltante = sueldo - this.Diasfalto;
              console.log(this.dinerofaltante);
              // monto a pagar de prestamo
              Prestamos = this.turnoa[i].montoapagartotal;
              console.log(Prestamos, 'suma de prestamos');
              this.servicio.Agregardiaasistido(id, this.diasasistidos,this.dinerofaltante).subscribe( (res)=> {
                console.log(res)
              })
              this.servicio.AgregarMonto(idG,Montoapagartotal).subscribe( (res)=> {
                console.log(res)
  
              })
              console.log(3,"Numero de semana");
            
              
  
            }else{
             
                // condicionante en caso de que falte el dia de corte
             console.log("mql  Falto ")
             this.Diasasistidos = this.diasasistidos;
             console.log(this.diasasistidos, 'dias asistido')
             //el da los dias que estan en la planeacion y saca el valor por dia 
             pdiasT= sueldo / pdias;
             // aqui esta los dias que a asistido
             this.Diasfalto = 0;
             this.Diasfalto = pdiasT * this.diasasistidos;
             // dinero menos por faltar
             this.dinerofaltante = 0;
             this.dinerofaltante = sueldo - this.Diasfalto;
             console.log(this.dinerofaltante);
             // monto a pagar de prestamo
             Prestamos = this.turnoa[i].montoapagartotal;
             console.log(Prestamos, 'suma de prestamos');
             this.servicio.Agregardiaasistido(id, this.diasasistidos,this.dinerofaltante).subscribe( (res)=> {
               console.log(res)
             })
             this.servicio.AgregarMonto(idG,Montoapagartotal).subscribe( (res)=> {
              console.log(res)

            })
             console.log(3,"Numero de semana");
            }
           
          }else  if(this.turnoa[i].tmql == "A" || this.turnoa[i].tmql == "D" ){
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
            if(this.turnoa[i].tmiql == "A" || this.turnoa[i].tmiql == "D" ){
           
              if(this.diasasistidos == undefined){
                this.diasasistidos = this.asistencias + 1;
                this.Diasasistidos = this.diasasistidos;
              }else {
                this.diasasistidos = this.diasasistidos +1;
                this.Diasasistidos = this.diasasistidos;
              }
              console.log("entro miql 31")
              console.log(this.diasasistidos, 'dias asistido')
              //el da los dias que estan en la planeacion y saca el valor por dia 
              pdiasT= sueldo / pdias;
              // aqui esta los dias que a asistido
              this.Diasfalto = 0;
              this.Diasfalto = pdiasT * this.diasasistidos;
              // dinero menos por faltar
              this.dinerofaltante = 0;
              this.dinerofaltante = sueldo - this.Diasfalto;
              console.log(this.dinerofaltante);
              // monto a pagar de prestamo
              Prestamos = this.turnoa[i].montoapagartotal;
              console.log(Prestamos, 'suma de prestamos');
              this.servicio.Agregardiaasistido(id, this.diasasistidos,this.dinerofaltante).subscribe( (res)=> {
                console.log(res)
              })
              this.servicio.AgregarMonto(idG,Montoapagartotal).subscribe( (res)=> {
                console.log(res)
  
              })
              console.log(3,"Numero de semana");
            
              
  
            }else{
          
                // condicionante en caso de que falte el dia de corte
             console.log("miql  Falto")
             this.Diasasistidos = this.diasasistidos
             console.log(this.diasasistidos, 'dias asistido')
             //el da los dias que estan en la planeacion y saca el valor por dia 
             pdiasT= sueldo / pdias;
             // aqui esta los dias que a asistido
             this.Diasfalto = 0;
             this.Diasfalto = pdiasT * this.diasasistidos;
             // dinero menos por faltar
             this.dinerofaltante = 0;
             this.dinerofaltante = sueldo - this.Diasfalto;
             console.log(this.dinerofaltante);
             // monto a pagar de prestamo
             Prestamos = this.turnoa[i].montoapagartotal;
             console.log(Prestamos, 'suma de prestamos');
             this.servicio.Agregardiaasistido(id, this.diasasistidos,this.dinerofaltante).subscribe( (res)=> {
               console.log(res)
             })
             this.servicio.AgregarMonto(idG,Montoapagartotal).subscribe( (res)=> {
              console.log(res)

            })
             console.log(3,"Numero de semana");
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
