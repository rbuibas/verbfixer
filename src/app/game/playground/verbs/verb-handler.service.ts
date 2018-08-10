import { Injectable } from '@angular/core';
import { Verb } from './verb';

@Injectable({
  providedIn: 'root'
})
export class VerbHandlerService {

  verbs: Verb[] = new Array<any>();

  simpleVerbs: any[] = new Array<any>();

  constructor() {
    this.preloadTestVerbs();
  }

  public getSpecificVerb(inf: string) {
    return this.simpleVerbs.find((x) => {
      return x.inf === inf;
    }, {});
  }

  public getListOfVerbs() {
    return this.simpleVerbs.map((x) => x = x.inf);
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
