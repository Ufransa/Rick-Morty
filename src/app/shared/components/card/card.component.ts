import { Component, Input } from '@angular/core';
import { Result } from '../../../interfaces/character.interface';

@Component({
  selector: 'shared-card',
  templateUrl: './card.component.html'
})

export class CardComponent {

  @Input()
  public rickAndMorty!: Result

}
