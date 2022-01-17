import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-card-user',
  templateUrl: './card-user.component.html',
  styleUrls: ['./card-user.component.scss'],
})
export class CardUserComponent implements OnInit {

  @Input() users: any = {};
  @Input() index: number;
  
  @Output() userSeleccionado: EventEmitter<number>;

  constructor(private router: Router) {
    this.userSeleccionado = new EventEmitter();
   }

  ngOnInit() {}

  verUser(){
    this.router.navigate(['/user',this.index]);
  }

}
