import { Component, OnInit, Input } from '@angular/core';
import { NominaService } from '../service/nomina.service';

import * as XLSX from 'xlsx';





@Component({
  selector: 'app-nomina',
  templateUrl: './nomina.page.html',
  styleUrls: ['./nomina.page.scss'],
})
export class NominaPage implements OnInit {
  service: any=[];
  Diasasistidos: any=[];
  fileName= 'Nomina.xlsx';
  
  asistencias : any
  diasasistidos: number
 

 
 
  constructor(private servicio: NominaService) { }

  ngOnInit() {
    this.cservices()
  }


  cservices(){
    this.servicio.getobtenerservices().subscribe( (res)=> {
    
      this.service = res.service
      
      for(let i = 0; i < this.service.length; i ++){
         
        // console.log(this.service[i].Guardias)

        for(let g = 0; g < this.service[i].Guardias.length; g++){
          // console.log(this.service[i].Guardias[g]._id);
           var id =  this.service[i].Guardias[g]._id
         this.asistencias = this.service[i].Guardias[g].diasasistidos
          console.log(this.asistencias)
          if(this.service[i].Guardias[g].tlpl == true){
           
            
            this.diasasistidos = this.asistencias + 1;
            console.log("entro lp")
          
          }
          else{
            console.log("false");
          }


          if(this.service[i].Guardias[g].tmpl == true){
           
            
          
             this.diasasistidos = this.asistencias + 1;
           
            console.log("entro mp")
            
           }else{console.log("false")}
          if(this.service[i].Guardias[g].tmipl == true){
           
            
          
            this.diasasistidos = this.asistencias + 1;
            console.log("true");
         
          }else{console.log("false")}
          if(this.service[i].Guardias[g].tjpl == true){
            this.diasasistidos = this.asistencias + 1;
            console.log("true");
            console.log(this.diasasistidos)
            
        
          }else{console.log("false")}
          if(this.service[i].Guardias[g].tvpl == true){
           
            
          
            this.diasasistidos = this.asistencias + 1;
            console.log("true");
            
          }else{console.log("false")}
          if(this.service[i].Guardias[g].tspl == true){
           
            
          
            this.diasasistidos = this.asistencias + 1;
            console.log("true");
           
          }else{console.log("false")}
          if(this.service[i].Guardias[g].tdpl == true){
           
            
          
            this.diasasistidos = this.asistencias + 1;
            console.log("true");
            console.log(this.diasasistidos);
            this.servicio.Agregardiaasistido(id, this.diasasistidos).subscribe( (res)=> {
              console.log(res)
            })
          }else{console.log("false")}
          /* Segunda semana */
          if(this.service[i].Guardias[g].tlsl == true){
           
            
            this.diasasistidos = this.asistencias + 1;
            
            this.servicio.Agregardiaasistido(id, this.diasasistidos).subscribe( (res)=> {
              console.log(res)
            })
          }
          if(this.service[i].Guardias[g].tmsl == true){
           
            
          
            this.diasasistidos = this.asistencias + 1;
       
            this.servicio.Agregardiaasistido(id, this.diasasistidos).subscribe( (res)=> {
              console.log(res)
            })
          }
          if(this.service[i].Guardias[g].tmisl == true){
           
            
          
            this.diasasistidos = this.asistencias + 1;
       
            this.servicio.Agregardiaasistido(id, this.diasasistidos).subscribe( (res)=> {
              console.log(res)
            })
          }
          if(this.service[i].Guardias[g].tjsl == true){
           
            
          
            this.diasasistidos = this.asistencias + 1;
       
            this.servicio.Agregardiaasistido(id, this.diasasistidos).subscribe( (res)=> {
              console.log(res)
            })
          }
          if(this.service[i].Guardias[g].tvsl == true){
           
            
          
            this.diasasistidos = this.asistencias + 1;
       
            this.servicio.Agregardiaasistido(id, this.diasasistidos).subscribe( (res)=> {
              console.log(res)
            })
          }
          if(this.service[i].Guardias[g].tssl == true){
           
            
          
            this.diasasistidos = this.asistencias + 1;
       
            this.servicio.Agregardiaasistido(id, this.diasasistidos).subscribe( (res)=> {
              console.log(res)
            })
          }
          if(this.service[i].Guardias[g].tdsl == true){
           
            
          
            this.diasasistidos = this.asistencias + 1;
       
            this.servicio.Agregardiaasistido(id, this.diasasistidos).subscribe( (res)=> {
              console.log(res)
            })
          }
          if(this.service[i].Guardias[g].tltl == true){
           
            
          
            this.diasasistidos = this.asistencias + 1;
       
            this.servicio.Agregardiaasistido(id, this.diasasistidos).subscribe( (res)=> {
              console.log(res)
            })
          }
          if(this.service[i].Guardias[g].tmtl == true){
           
            
          
            this.diasasistidos = this.asistencias + 1;
       
            this.servicio.Agregardiaasistido(id, this.diasasistidos).subscribe( (res)=> {
              console.log(res)
            })
          }
          if(this.service[i].Guardias[g].tmitl == true){
           
            
          
            this.diasasistidos = this.asistencias + 1;
       
            this.servicio.Agregardiaasistido(id, this.diasasistidos).subscribe( (res)=> {
              console.log(res)
            })
          }
          if(this.service[i].Guardias[g].tjtl == true){
           
            
          
            this.diasasistidos = this.asistencias + 1;
       
            this.servicio.Agregardiaasistido(id, this.diasasistidos).subscribe( (res)=> {
              console.log(res)
            })
          }
          if(this.service[i].Guardias[g].tvtl == true){
           
            
          
            this.diasasistidos = this.asistencias + 1;
       
            this.servicio.Agregardiaasistido(id, this.diasasistidos).subscribe( (res)=> {
              console.log(res)
            })
          }
          if(this.service[i].Guardias[g].tstl == true){
           
            
          
            this.diasasistidos = this.asistencias + 1;
       
            this.servicio.Agregardiaasistido(id, this.diasasistidos).subscribe( (res)=> {
              console.log(res)
            })
          }
          if(this.service[i].Guardias[g].tdtl == true){
           
            
          
            this.diasasistidos = this.asistencias + 1;
       
            this.servicio.Agregardiaasistido(id, this.diasasistidos).subscribe( (res)=> {
              console.log(res)
            })
          }
          if(this.service[i].Guardias[g].tlql == true){
           
            
          
            this.diasasistidos = this.asistencias + 1;
       
            this.servicio.Agregardiaasistido(id, this.diasasistidos).subscribe( (res)=> {
              console.log(res)
            })
          }
          if(this.service[i].Guardias[g].tmql == true){
           
            
          
            this.diasasistidos = this.asistencias + 1;
       
            this.servicio.Agregardiaasistido(id, this.diasasistidos).subscribe( (res)=> {
              console.log(res)
            })
          }
          if(this.service[i].Guardias[g].tmiql == true){
           
            
          
            this.diasasistidos = this.asistencias + 1;
       
            this.servicio.Agregardiaasistido(id, this.diasasistidos).subscribe( (res)=> {
              console.log(res)
            })
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


   
//   exportAsXLSX(){
// this.servicio.exportToExcel(this.dataSource, 'Nomina')
//   }



}