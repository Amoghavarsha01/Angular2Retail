import { Component, Input } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { MyHttpService } from './app.addProductService';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  providers: [MyHttpService]
})
export class AppComponent {
  constructor(private myHttp: MyHttpService) {
    }

  title = 'Amoghavarsha';
  @Input() addPro:string;
  addProduct(event){
    this.myHttp.getProductObservable("http://localhost:8080").subscribe(
            data => console.log("data : " + data)
        );
    console.log("product name : ", this.addPro);
    alert("Add product click " + this.addPro);
  }
  getProduct(event){
    console.log("product name : " + this.addPro);
  }
  removeProduct(event){
    console.log("product name : " + this.addPro);
  }
}
