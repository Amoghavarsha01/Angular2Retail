import { Component, Input } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { UserService } from './app.service';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  providers: [UserService]
})
export class AppComponent {
  constructor(private userService: UserService) {}
  title = 'Amoghavarsha angular app';
  profile = {};
  @Input() productAdded : string;
  addProduct(event){
    //alert("Added product " + this.productAdded);
    console.log("Entered addProduct");
    this.userService.addProduct().subscribe(data => this.profile = data);

  }
  getProduct(event){
    alert("Get product " + event);
  }
  removeProduct(event){
    this.productAdded = "Changed!! hahhahahaha";
    alert("Remove product " + event);
  }
  
}
