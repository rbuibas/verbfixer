import { Injectable } from '@angular/core';
import { Verb } from './verb';

@Injectable({
  providedIn: 'root'
})
export class VerbHandlerService {

  verbs: Verb[];

  simpleVerbs: any[];

  constructor() {
    this.preloadTestVerbs();
  }

  private preloadTestVerbs() {
    this.simpleVerbs.push(
      {
        inf: 'parler',
        def: '',
        conj: {
          pres: {
            je: 'parle',
            tu: 'parles',
            il: 'parle',
            nous: 'parlons',
            vous: 'parlez',
            ils: 'parlent'
          }
        }
      }
    );

    this.simpleVerbs.push(
      {
        inf: 'etre',
        def: '',
        conj: {
          pres: {
            je: 'suis',
            tu: 'es',
            il: 'est',
            nous: 'sommes',
            vous: 'etes',
            ils: 'sont'
          }
        }
      }
    );
  }

}
