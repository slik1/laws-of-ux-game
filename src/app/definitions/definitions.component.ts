import { Component, OnInit, ViewEncapsulation } from '@angular/core';
import { definitionsData } from '../definitionsData';
@Component({
  selector: 'app-definitions',
  templateUrl: './definitions.component.html',
  styleUrls: ['./definitions.component.scss'],
  encapsulation: ViewEncapsulation.None
})
export class DefinitionsComponent implements OnInit {

  public definitions = definitionsData;

  currentDefinitionIndex: number = 0;

  constructor() { }

  ngOnInit(): void {
  }

  next(){
    if(this.currentDefinitionIndex === (this.definitions.length - 1)){
      //you're at the end!
      console.log('you at end');
    }else{
      this.currentDefinitionIndex ++;
    }
    console.log('this.currentDefinitionIndex: ', this.currentDefinitionIndex);
  }
  prev(){
    if(this.currentDefinitionIndex === 0){
      //you're at the beginning!
      console.log('you at beginning');
    }else{
      this.currentDefinitionIndex --;
    }
    console.log('this.currentDefinitionIndex: ', this.currentDefinitionIndex);
  }

}
