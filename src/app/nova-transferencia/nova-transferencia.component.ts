import { Component, Input, Output } from '@angular/core';
import { EventEmitter } from '@angular/core';

@Component({
  selector: 'app-nova-transferencia',
  templateUrl: './nova-transferencia.component.html',
  styleUrls: ['./nova-transferencia.component.css']
})
export class NovaTransferenciaComponent {
  title = 'nova-transferencia';

  @Input() titulo = '';

  @Output() aoTransferir = new EventEmitter<any>();

  valor: any;
  destino: any;

  transferir(){

    const valorEmitir = { valor: this.valor, destino: this.destino };
    this.aoTransferir.emit(valorEmitir);

    this.limparCampos();

    console.log('Nova Transferencia');

  }

  limparCampos(){
    this.valor = 0;
    this.destino = 0;
  }
}
