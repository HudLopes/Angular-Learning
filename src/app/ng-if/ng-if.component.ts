import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-ng-if',
  templateUrl: './ng-if.component.html',
  styleUrls: ['./ng-if.component.scss']
})
export class NgIfComponent implements OnInit {

  cursos:string[] = ['Angular 2','computação'];
  mostrarCurso:boolean = false;

  constructor() { }

  ngOnInit() {
  }

  exibirCurso(){
    this.mostrarCurso= !this.mostrarCurso;
  }
}
