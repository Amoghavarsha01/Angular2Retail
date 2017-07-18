import { Component, Input } from '@angular/core';
import { FormsModule } from '@angular/forms';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Amoghavarsha angular app';
  @Input() productAdded : string;
  addProduct(event){
    alert("Added product " + this.productAdded);

  }
  getProduct(event){
    alert("Get product " + event);
  }
  removeProduct(event){
    this.productAdded = "Changed!! hahhahahaha";
    alert("Remove product " + event);
  }
  
}
