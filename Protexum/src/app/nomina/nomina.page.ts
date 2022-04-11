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
  Guardia: any=[];
  asistencias : any
  diasasistidos: number
 

 
 
  constructor(private servicio: NominaService) { }

  ngOnInit() {
    this.cservices()
  }


  consulta(){
    this.servicio.getobtenerservices().subscribe( (res)=> {
      this.service = res.service
      for(let i = 0; i < this.service.length; i ++){
        for(let g = 0; g < this.service[i].Guardias.length; g++){
          this.asistencias = this.service[i].Guardias[g].diasasistidos
          console.log(this.asistencias)
        }

      }
    })

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
          console.log(this.asistencias + "asistencias")
          if(this.service[i].Guardias[g].tlpl == true){
           
            
            this.diasasistidos = this.asistencias + 1;
            console.log("entro lp")
            console.log(this.diasasistidos)
          
          }else{console.log("es false")}
          if(this.service[i].Guardias[g].tmpl == true){
           
            
          
            this.diasasistidos = this.diasasistidos + 1;
        
            console.log("entro mp")
            console.log(this.diasasistidos)
            
          }else{console.log("es false")}
          if(this.service[i].Guardias[g].tmipl == true){
           
            
          
            this.diasasistidos = this.diasasistidos + 1;
            console.log("entro mip")
            console.log(this.diasasistidos)
            
            
         
          }else{console.log("es false")}
          if(this.service[i].Guardias[g].tjpl == true){
          
          
           this.diasasistidos = this.diasasistidos + 1;
           console.log("entro tjpl")
           console.log(this.diasasistidos)
           
           
            
        
          }else{console.log("es false")}
          if(this.service[i].Guardias[g].tvpl == true){
           
            
          
            this.diasasistidos = this.diasasistidos + 1;
            console.log("entro vp")
            console.log(this.diasasistidos)
           
          }else{console.log("es false")}
          if(this.service[i].Guardias[g].tspl == true){
           
            
          
              this.diasasistidos = this.diasasistidos + 1;
            console.log("entro sp")
            console.log(this.diasasistidos)
           
           
          }else{console.log("es false")}
          if(this.service[i].Guardias[g].tdpl == true){
           
            
          
            this.diasasistidos = this.diasasistidos + 1;
            console.log("entro dp /////////////////////")
            console.log(this.diasasistidos)
            
            this.servicio.Agregardiaasistido(id, this.diasasistidos).subscribe( (res)=> {
              console.log(res)
            })
          }else{console.log("es false")}

          ///
          if(this.service[i].Guardias[g].tlsl == true){
           
            
          
            this.diasasistidos = this.asistencias + 1;
            
            console.log("entro lp")
            console.log(this.diasasistidos)
          }else{console.log("es false")}
          if(this.service[i].Guardias[g].tmsl == true){
           
            
          
            this.diasasistidos = this.diasasistidos + 1;
            console.log("entro mp")
            console.log(this.diasasistidos)
          
          }else{console.log("es false")}
          if(this.service[i].Guardias[g].tmisl == true){
           
            
          
            this.diasasistidos = this.diasasistidos + 1;
            console.log("entro mip")
            console.log(this.diasasistidos)
          
          }else{console.log("es false")}
          if(this.service[i].Guardias[g].tjsl == true){
           
            
          
            this.diasasistidos = this.diasasistidos + 1;
            console.log("entro jp")
            console.log(this.diasasistidos)
         
          }else{console.log("es false")}
          if(this.service[i].Guardias[g].tvsl == true){
           
            
          
            this.diasasistidos = this.diasasistidos + 1;
            console.log("entro vp")
            console.log(this.diasasistidos)
          }else{console.log("es false")}
          if(this.service[i].Guardias[g].tssl == true){
           
            
          
            this.diasasistidos = this.diasasistidos + 1;
            console.log("entro sp")
            console.log(this.diasasistidos)
           
          }else{console.log("es false")}
          if(this.service[i].Guardias[g].tdsl == true){
           
            
          
            this.diasasistidos = this.diasasistidos + 1;
            console.log("entro ds //////////////////")
            console.log(this.diasasistidos)
            this.servicio.Agregardiaasistido(id, this.diasasistidos).subscribe( (res)=> {
              console.log(res)
            })
          }else{console.log("es false")}

          ////
          if(this.service[i].Guardias[g].tltl == true){
           
            
          
            this.diasasistidos = this.asistencias + 1;
       
            console.log("entro lp")
            console.log(this.diasasistidos)
          }else{console.log("es false")}
          if(this.service[i].Guardias[g].tmtl == true){
           
            
          
            this.diasasistidos = this.diasasistidos + 1;
       
            console.log("entro mp")
            console.log(this.diasasistidos)
          }else{console.log("es false")}
          if(this.service[i].Guardias[g].tmitl == true){
           
            
          
            this.diasasistidos = this.diasasistidos + 1;
       
            console.log("entro mip")
            console.log(this.diasasistidos)
          }else{console.log("es false")}
          if(this.service[i].Guardias[g].tjtl == true){
           
            
          
            this.diasasistidos = this.diasasistidos + 1;
       
            console.log("entro jp")
            console.log(this.diasasistidos)
          }else{console.log("es false")}
          if(this.service[i].Guardias[g].tvtl == true){
           
            
          
            this.diasasistidos = this.diasasistidos + 1;
       
            console.log("entro vp")
            console.log(this.diasasistidos)
          }else{console.log("es false")}
          if(this.service[i].Guardias[g].tstl == true){
           
            
          
            this.diasasistidos = this.diasasistidos + 1;
            console.log("entro sp")
            console.log(this.diasasistidos)
          }else{console.log("es false")}
          if(this.service[i].Guardias[g].tdtl == true){
           
            
          
            this.diasasistidos = this.diasasistidos + 1;
            console.log("entro dt ///////////////")
            console.log(this.diasasistidos)
            this.servicio.Agregardiaasistido(id, this.diasasistidos).subscribe( (res)=> {
              console.log(res)
            })
          }else{console.log("es false")}
         
          ////7
          if(this.service[i].Guardias[g].tlcl == true){
           
            
          
            this.diasasistidos = this.asistencias + 1;
       
            console.log("entro lp")
            console.log(this.diasasistidos)
          }else{console.log("es false")}
          if(this.service[i].Guardias[g].tmcl == true){
           
            
          
            this.diasasistidos = this.diasasistidos + 1;
       
            console.log("entro mp")
            console.log(this.diasasistidos)
          }else{console.log("es false")}
          if(this.service[i].Guardias[g].tmicl == true){
           
            
          
            this.diasasistidos = this.diasasistidos + 1;
       
            console.log("entro mip")
            console.log(this.diasasistidos)
          }else{console.log("es false")}
          if(this.service[i].Guardias[g].tjcl == true){
           
            
          
            this.diasasistidos = this.diasasistidos + 1;
       
            console.log("entro jp")
            console.log(this.diasasistidos)
          }else{console.log("es false")}
          if(this.service[i].Guardias[g].tvcl == true){
           
            
          
            this.diasasistidos = this.diasasistidos + 1;
       
            console.log("entro vp")
            console.log(this.diasasistidos)
          }else{console.log("es false")}
          if(this.service[i].Guardias[g].tscl == true){
           
            
          
            this.diasasistidos = this.diasasistidos + 1;
            console.log("entro sp")
            console.log(this.diasasistidos)
          }else{console.log("es false")}
          if(this.service[i].Guardias[g].tdcl == true){
           
            
          
            this.diasasistidos = this.diasasistidos + 1;
            console.log("entro dc  ///////////")
            console.log(this.diasasistidos)
            this.servicio.Agregardiaasistido(id, this.diasasistidos).subscribe( (res)=> {
              console.log(res)
            })
          }else{console.log("es false")}

          ////
          if(this.service[i].Guardias[g].tlql == true){
           
            
          
            this.diasasistidos = this.asistencias + 1;
       
            console.log("entro lp")
            console.log(this.diasasistidos)
          }else{console.log("es false")}
          if(this.service[i].Guardias[g].tmql == true){
           
            
          
            this.diasasistidos = this.diasasistidos + 1;
       
           console.log("entro mp")
           console.log(this.diasasistidos)
          }else{console.log("es false")}
          if(this.service[i].Guardias[g].tmiql == true){
           
            
          
            this.diasasistidos = this.diasasistidos + 1;
            console.log("entro miq//////////////")
            console.log(this.diasasistidos)
           
          }else{console.log("es false")}
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
