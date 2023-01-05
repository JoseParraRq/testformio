import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Product } from '../interfaces/productInterface';
import { FormsService } from '../services/forms.service';
import { ProductServiceService } from '../services/product-service.service';

@Component({
  selector: 'app-edit-product',
  templateUrl: './edit-product.component.html',
  styleUrls: ['./edit-product.component.scss']
})
export class EditProductComponent implements OnInit {

  name = 'productUpdateQ';
  form: any = {};
  id: number;
  productUpdate: any = {};
  productById: any = {};
  submissionData: any = { data: {} };

  options: Object = {
    submitMessage: '',
    disableAlerts: true,
    noAlerts: true
  };

  constructor(
    public formService: FormsService,
    public activatedRoute: ActivatedRoute,
    public productService: ProductServiceService,
    public router: Router
  ) {
    let idObject = this.activatedRoute.snapshot.url;

    for (var i = 0; i < idObject.length; i++) {
      var element = idObject[i];
      let enteroId = new Number(element.path);
      this.id = enteroId.valueOf();
      // console.log("this is the idddd",this.id);
    }
  }

  ngOnInit(): void {
    let formioRegister = this.formService.getFormByName(this.name).subscribe((data) => {

      let array: any[] = [];
      array.push(data);
      const map = array.map((x) => {
        return {
          formName: x.formName
        }
      });
      for (var w = 0; w < map.length; w++) {
        var elementw = map[w];
        let parser = JSON.parse(elementw.formName[0].content);

        this.form = parser;

      }
    });
    let productTest = this.productService.getProductById(this.id).subscribe((data) => {

      console.log("respuesta de la api FormById", data);
      let array: any[] = [];
      array.push(data);
      const map = array.map((x) => {
        return {
          product: x.product
        }
      });
      console.log("here the maaaappp", map);

      for (var w = 0; w < map.length; w++) {
        var elementw = map[w];
      }
      console.log("here the elementoooo", elementw.product[0]);

      this.productById = {
        id: elementw.product[0].id,
        product_name: elementw.product[0].product_name,
        name_category: elementw.product[0].name_category,
        email: elementw.product[0].email,
        quantity: elementw.product[0].quantity
      };
      console.log("here the productById", this.productById);

    });

  }

  update() {
    console.log("the submit in update is here");
    console.log(this.submissionData);
   
    this.productUpdate = {
      productId: this.id,
      product_name: this.productById.product_name,
      name_category: this.productById.name_category,
      email: this.productById.email,
      quantity: this.submissionData.data.quantity
    };
    console.log("here the product update",this.productUpdate);
    
    let product = this.productService.updateProduct(this.productUpdate).subscribe((data) => {
      console.log("here the data in updateservice", this.productUpdate);

      console.log("respuesta de la api FormById", data);
      var idUrl = this.id; //segunda forma de traer el id que se me ocurrio viendo las propiedades
      this.router.navigate([`/product/detail/${idUrl}`]);
    })
  }
}
