import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { NgModule } from '@angular/core';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss'],
})
export class NavbarComponent implements OnInit {

  public find: String = "";

  constructor(private router: Router) { }

  ngOnInit() {}

  /* buscarLibro(termino:string){
    this.router.navigate(['/buscar',termino]);
  } */

  buscar(termino: string){
    this.find = termino;
    this.router.navigate(['/home'], { queryParams: { search: this.find } });
  }

}
