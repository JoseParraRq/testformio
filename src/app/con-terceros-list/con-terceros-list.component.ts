import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { TercerosServiceService } from '../services/terceros-service.service';


@Component({
  selector: 'app-con-terceros-list',
  templateUrl: './con-terceros-list.component.html',
  styleUrls: ['./con-terceros-list.component.scss']
})
export class ConTercerosListComponent implements OnInit {

  terceros:any[]= [];
  // tipoDocumento
  constructor(
    public tercerosService:TercerosServiceService,
    public router:Router
  ) { 
 
  }

  ngOnInit(): void {
    this.tercerosService.getAllTercerosForList().subscribe(
      res=>{
        let array:any[]=[];
        let array1:any[]=[];
        console.log("res from api comṕonent",res);
        array.push(res);
      const map = array.map((x)=>{
        return{
terceros:x.terceros
        }
      });
console.log("here the amppp",map);
   
for(var i=0;i<map.length;i++){
var element = map[i];
}
console.log("here the element into the array 1",element.terceros);
this.terceros = element.terceros;   
      })
    }

}
