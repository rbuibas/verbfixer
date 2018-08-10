import { Component, OnInit } from '@angular/core';
import { GrammarService } from '../../gramatika/grammar.service';
import { VerbHandlerService } from './verbs/verb-handler.service';
import { FormControl } from '@angular/forms';

@Component({
  selector: 'app-playground',
  templateUrl: './playground.component.html',
  styleUrls: ['./playground.component.css']
})
export class PlaygroundComponent implements OnInit {

  verb: any;
  public selectedVerb;
  verbs = ['être',
  'avoir',
  'aller',
  'faire',
  'dire',
  'pouvoir',
  'vouloir',
  'savoir',
  'voir',
  'devoir',
  'venir',
  'suivre',
  'parler',
  'prendre',
  'croire',
  'aimer',
  'falloir',
  'passer',
  'penser',
  'attendr',
  'trouver',
  'laisser',
  'arriver',
  'donner',
  'regarde',
  'appeler'];

  verbControl = new FormControl();

  jaConj = '';

  constructor(
    private gramm: GrammarService,
    private verbHandler: VerbHandlerService
    ) { }

  ngOnInit() {
     // this.verbs = this.verbHandler.getListOfVerbs();
  }

  public validateCojugations() {
    this.jaConj = 'NO';
  }

  public loadVerb(verb: string) {
    this.getVerb(verb);
  }

  public getListOfVerbs() {
    return this.verbs;
  }

  public getVerb(inf: string): any {
    // return this.gramm.getRandomVerb();
    // this.verb = this.verbHandler.getSpecificVerb(inf);
  }
}
