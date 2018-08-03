import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class GrammarService {

  constructor() { }

  verbs = ['parler', 'parler', 'parler', 'parler', 'parler', 'parler'];

  public getRandomVerb(): string {
    return this.verbs[Math.floor(Math.random() * this.verbs.length)];
  }

}
