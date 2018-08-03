import { Component, OnInit } from '@angular/core';
import { GrammarService } from '../../gramatika/grammar.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  constructor(private gramm: GrammarService) { }
  private _buttonTitle = '';

  color = 'primary';
  mode = 'determinate';
  value = 50;
  bufferValue = 75;

  public get buttonTitle() {
    return this._buttonTitle;
  }
  public set buttonTitle(value) {
    this._buttonTitle = value;
  }

  ngOnInit() {
    setTimeout(() => {
      this.buttonTitle = this.gramm.getRandomVerb();
    }, 5000);
  }

  public getRandomVerb(): String {
    return this.gramm.getRandomVerb();
  }

  private delay(t, v) {
    return new Promise((resolve) => {
        setTimeout(resolve.bind(null, v), t);
    });
 }

}
