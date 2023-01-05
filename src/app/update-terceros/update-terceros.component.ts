import { Component, Input, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { FormsService } from '../services/forms.service';
import { TercerosServiceService } from '../services/terceros-service.service';

@Component({
  selector: 'app-update-terceros',
  templateUrl: './update-terceros.component.html',
  styleUrls: ['./update-terceros.component.scss']
})
export class UpdateTercerosComponent implements OnInit {
  name='registerTerceros';
  form:any={};
  id:number;
  @Input() childMessage: any={};

  // tercerosUpdate:any;
  terceroById:any;
  submissionData:any={data:{}};
 tercerofron:any={}
   options: Object = {
     submitMessage: '',
     disableAlerts: true,
     noAlerts: true
   };

   constructor(
    public formService:FormsService,
    public activatedRoute:ActivatedRoute,
    public tercerosServices:TercerosServiceService,
    public router:Router
    ) { 
      let idObject = this.activatedRoute.snapshot.url;
    
    for(var i=0; i<idObject.length;i++){
      var element = idObject[i];
      let enteroId = new Number(element.path);    
      this.id = enteroId.valueOf();
      // console.log("this is the idddd",this.id);
    }
  }

  ngOnInit(): void {
    let formioRegister = this.formService.getFormByName(this.name).subscribe((data)=>{
        
      console.log("respuesta de la api FormRegister",data);
          let array:any[]=[];
          array.push(data);
          const map = array.map((x)=>{
            return{
              formName:x.formName
            }
          });
          for(var w =0;w<map.length;w++){
        var elementw= map[w];
        let parser = JSON.parse(elementw.formName[0].content);
        // console.log("here the parser",parser);
        console.log("her the object before update===>>>>",typeof(parser));
        // parser = Object.assign({},this.terceroById)
        console.log("here the parserrrr",parser);
        
        this.form = parser;    
              
          }
        });
      }
update(){
  console.log("the submit in update is here");
  console.log(this.submissionData);
  let userTest = this.tercerosServices.getOneTerceros(this.id).subscribe((data)=>{
        
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
        this.terceroById = {
          id:elementw.terceros.id,
          base_retencion:elementw.terceros.base_retencion,
          celular:elementw.terceros.celular,
          cupo_credito:elementw.terceros.cupo_credito,
          digito:elementw.terceros.digito,
          direccion:elementw.terceros.direccion,
          documento:elementw.terceros.documento,
          email:elementw.terceros.email,
          estado:elementw.terceros.estado,
          id_actividad_ciiu:elementw.terceros.id_actividad_ciiu,
          id_cuenta_retencion:elementw.terceros.id_cuenta_retencion,
          id_lista_precio:elementw.terceros.id_lista_precio,
          id_municipio:elementw.terceros.id_municipio,
          id_tipo_documento:elementw.terceros.id_municipio,
          id_tipo_forma_pago:elementw.terceros.id_tipo_forma_pago,
          id_tipo_regimen:elementw.terceros.id_tipo_regimen,
          id_tipo_tercero:elementw.terceros.id_tipo_tercero,
          nombre_tercero: elementw.terceros.nombre_tercero,
          plazo:elementw.terceros.plazo,
          primer_apellido:elementw.terceros.primer_apellido,
          primer_nombre:elementw.terceros.primer_nombre,
          retencion_porcentaje:elementw.terceros.retencion_porcentaje,
          segundo_apellido:elementw.terceros.segundo_apellido,
          segundo_nombre: elementw.terceros.segundo_nombre,
          telefono: elementw.terceros.telefono
           
        }
        console.log("here the tercerosId===>>>",this.terceroById);
        // this.form = Object.assign({},this.terceroById);
        // console.log(this.form);
        
    });
    let tercerosUpdate= {
      id:this.id,
      base_retencion:this.submissionData.data.base_retencion,
      celular:this.submissionData.data.celular,
      cupo_credito:this.submissionData.data.cupo_credito,
      digito:this.submissionData.data.digito,
      direccion:this.submissionData.data.direccion,
      documento:this.submissionData.data.documento,
      email:this.submissionData.data.email,
      estado:this.submissionData.data.estado,
      id_actividad_ciiu:this.submissionData.data.id_actividad_ciiu,
      id_cuenta_retencion:this.submissionData.data.id_cuenta_retencion,
      id_lista_precio:this.submissionData.data.id_lista_precio,
      id_municipio:this.submissionData.data.id_municipio,
      id_tipo_documento:this.submissionData.data.id_municipio,
      id_tipo_forma_pago:this.submissionData.data.id_tipo_forma_pago,
      id_tipo_regimen:this.submissionData.data.id_tipo_regimen,
      id_tipo_tercero:this.submissionData.data.id_tipo_tercero,
      nombre_tercero: this.submissionData.data.nombre_tercero,
      plazo:this.submissionData.data.plazo,
      primer_apellido:this.submissionData.data.primer_apellido,
      primer_nombre:this.submissionData.data.primer_nombre,
      retencion_porcentaje:this.submissionData.data.retencion_porcentaje,
      segundo_apellido:this.submissionData.data.segundo_apellido,
      segundo_nombre: this.submissionData.data.segundo_nombre,
      telefono: this.submissionData.data.telefono,
      id_cuenta_reteica:this.submissionData.data.id_cuenta_reteica,
      reteica_porcentaje:this.submissionData.data.reteica_porcentaje 
           }  
        // var idUrl = this.id; //segunda forma de traer el id que se me ocurrio viendo las propiedades
        // this.router.navigate([`/terceros/detail/${idUrl}`]);
        
  let user = this.tercerosServices.updateTerceros(tercerosUpdate).subscribe((data)=>{
    console.log("here the data in updateservice",tercerosUpdate);
        
    console.log("respuesta de la api FormById",data);
       
        var idUrl = this.id; //segunda forma de traer el id que se me ocurrio viendo las propiedades
        this.router.navigate([`/terceros/detail/${idUrl}`]);
      })
}
}
