import { Component, OnInit, Input } from '@angular/core';
import { NominaService } from '../service/nomina.service';
import { ServiceService } from '../service/services/service.service';
import * as XLSX from 'xlsx';





@Component({
  selector: 'app-nomina',
  templateUrl: './nomina.page.html',
  styleUrls: ['./nomina.page.scss'],
})
export class NominaPage implements OnInit {
  service: any=[];
  guardias: any=[];
  Diasasistidos: number = 0;
  fileName= 'Nomina.xlsx';
   


 
  // diasdelmes: any = [
  //   "tlpl",
  //   "tmpl",
  //   "tmipl",
  //   "tjpl",
  //   "tvpl",
  //   "tspl",
  //   "tdpl",
  //   "tlsl",
  //   "tmsl",
  //   "tmisl",
  //   "tjsl",
  //   "tvsl",
  //   "tssl",
  //   "tdsl",
  //   "tltl",
  //   "tmtl",
  //   "tmitl",
  //   "tjtl",
  //   "tvtl",
  //   "tstl",
  //   "tdtl",
  //   "tlcl",
  //   "tmcl",
  //   "tmicl",
  //   "tjcl",
  //   "tvcl",
  //   "tscl",
  //   "tdcl",
  //   "tlql",
  //   "tmql" ,
  //   "tmiql"
  // ];
 
 
  constructor(private servicio: NominaService, private servicioS: ServiceService) { }

  ngOnInit() {
    this.cservices()
  }


  cservices(){
    this.servicio.getobtenerservices().subscribe( (res)=> {
      
    
      this.service = res.service
      
      
      for(let i = 0; i < this.service.length; i ++){
         console.log(this.service[i].Guardias)
         
         for(let g = 0; g < this.service[i].Guardias.length; g ++ ){
          console.log(this.service[i].Guardias[g].tlpl)
          if(this.service[i].Guardias[g].tlpl == true){
            this.Diasasistidos = this.Diasasistidos + 1;
            console.log(this.Diasasistidos)
      
          }
          if(this.service[i].Guardias[g].tmpl == true){
           
            this.Diasasistidos = this.Diasasistidos + 1;
            console.log(this.Diasasistidos)
      
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
