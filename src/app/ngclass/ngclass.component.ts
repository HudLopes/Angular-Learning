import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-ngclass',
  templateUrl: './ngclass.component.html',
  styleUrls: ['./ngclass.component.scss']
})
export class NgclassComponent implements OnInit {

  tarefa:any = {
       desc: 'descrição da tarefa',
       responsavel: {
         usuario: 'Hudson'
       }
  };

  constructor() { }

  ngOnInit() {
  }

}
