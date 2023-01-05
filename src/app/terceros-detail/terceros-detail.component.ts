import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { FormsService } from '../services/forms.service';
import { TercerosServiceService } from '../services/terceros-service.service';

@Component({
  selector: 'app-terceros-detail',
  templateUrl: './terceros-detail.component.html',
  styleUrls: ['./terceros-detail.component.scss']
})
export class TercerosDetailComponent implements OnInit {
  messagefromParent: string = 'mesaaageee';
  id:number;
  terceroId:any=[];
  terceroFron:any=[];  
  submissionData:any={data:{}};
  options: Object = {
    submitMessage: '',
    disableAlerts: true,
    noAlerts: true
  };
  constructor(
    public tercerosService:TercerosServiceService,
    public formService:FormsService,
    public activatedRoute:ActivatedRoute,
    public router:Router
  ) { 
    let idObject = this.activatedRoute.snapshot.url;
    
    for(var i=0; i<idObject.length;i++){
      var element = idObject[i];
      let enteroId = new Number(element.path);    
      this.id = enteroId.valueOf();
      console.log("this is the idddd",this.id);
       //segunda forma de traer el id que se me ocurrio viendo las propiedades
  }
  }

  ngOnInit(): void {
    let  tercero = this.tercerosService.getOneTercerosForDetail(this.id).subscribe((data)=>{
        
      console.log("respuesta de la api FormById",data);
          let array:any[]=[];
          array.push(data);
          const map = array.map((x)=>{
            return{
              terceros:x.terceros
            }
          });
          console.log("here the maaaappp",map);
          
          for(var w =0;w<map.length;w++){
            var elementw= map[w];
          }
        console.log("here the elementoooo",elementw.terceros);
        this.terceroId = {
          id:elementw.terceros.id,
          Tipo_tercero:elementw.terceros.Tipo_tercero,
          actividad:elementw.terceros.actividad,
          base_retencion:elementw.terceros.base_retencion,
          celular:elementw.terceros.celular,
          cupo_credito:elementw.terceros.cupo_credito,
          digito:elementw.terceros.digito,
          direccion:elementw.terceros.direccion,
          documento:elementw.terceros.documento,
          email:elementw.terceros.email,
          estado:elementw.terceros.estado,
          forma_pago:elementw.terceros.forma_pago,
          id_cuenta_reteica:elementw.terceros.id_cuenta_reteica,
          id_cuenta_retencion:elementw.terceros.id_cuenta_retencion,
          id_lista_precio:elementw.terceros.id_lista_precio,
          municipio:elementw.terceros.municipio,
          nombre_tercero:elementw.terceros.nombre_tercero,
          plazo:elementw.terceros.plazo,
          primer_apellido: elementw.terceros.primer_apellido,
          primer_nombre:elementw.terceros.primer_nombre,
          reteica_porcentaje:elementw.terceros.reteica_porcentaje,
          retencion_porcentaje:elementw.terceros.retencion_porcentaje,
          segundo_apellido:elementw.terceros.segundo_apellido,
          segundo_nombre: elementw.terceros.segundo_nombre,
          telefono:elementw.terceros.telefono,
          tipo_documento:elementw.terceros.tipo_documento,
          tipo_regimen: elementw.terceros.tipo_regimen 
        }
        console.log("here the terceroID",this.terceroId);
    this.terceroFron=this.terceroId;
    })
      }

 delete(){
    let  tercero = this.tercerosService.deleteTerceros(this.id).subscribe((data)=>{
        
      console.log("respuesta de la api FormById",data);
      var idUrl = this.id; //segunda forma de traer el id que se me ocurrio viendo las propiedades
      this.router.navigate([`/terceros/list`]);
    })

 }
}
