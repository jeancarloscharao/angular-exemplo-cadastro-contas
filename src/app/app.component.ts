import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'cadastro-app';

  transferencias: any[] = [];
 



  transferir($event: any){
    
    const transferencia = {...$event, data: new Date() }
    this.transferencias.push(transferencia);
    
  }
  
}
