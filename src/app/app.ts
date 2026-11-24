import { Component, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { HttpService } from './http-service';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet],
  templateUrl: './app.html',
  styleUrl: './app.css',
})
export class App {
  protected readonly title = 'Maarechet';
  constructor(private httpService: HttpService) { }
contactList = signal<any[]>([]);

 ngOnInit() {
    this.getcontactsfromservice();
  }

  getcontactsfromservice() {
   this.httpService.
    getSomthing().subscribe((data)=>{
      this.contactList.set(data);
    })
    
  }
}
