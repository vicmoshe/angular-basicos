import { Component } from '@angular/core';

@Component({
  selector: 'app-listado',
  templateUrl: './listado.component.html'
})


export class ListadoComponent  {

heroes: string[] = ['Plumas', 'Papel', 'Tinta', 'Rodillo'];

// heroeBorrado: string|undefined='';
heroeBorrado: string='';


borrarHeroe(){
  this.heroeBorrado = this.heroes.shift() || '';

  // console.log('Borrando los cambios.....')
}

}
