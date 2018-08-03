import { Component, OnInit } from '@angular/core';
import { GrammarService } from '../../gramatika/grammar.service';

@Component({
  selector: 'app-playground',
  templateUrl: './playground.component.html',
  styleUrls: ['./playground.component.css']
})
export class PlaygroundComponent implements OnInit {

  constructor(private gramm: GrammarService) { }

  ngOnInit() {
  }

  public getVerb(): string {
    return this.gramm.getRandomVerb();
  }

}
