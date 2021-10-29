import { CdkDrag, CdkDragDrop, moveItemInArray, transferArrayItem } from '@angular/cdk/drag-drop';
import { Component, OnInit, ViewEncapsulation } from '@angular/core';
import { definitionsData } from '../definitionsData';
import { SharedService } from '../shared.service';
@Component({
  selector: 'app-definitions',
  templateUrl: './definitions.component.html',
  styleUrls: ['./definitions.component.scss'],
  encapsulation: ViewEncapsulation.None
})
export class DefinitionsComponent implements OnInit {

  public definitions = definitionsData;

  currentDefinitionIndex: number = 0;

  constructor(private ss: SharedService) { }

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


  drop(event: any) {
    console.log('you in definitions.component.ts drop() event.item.data: ', event.item.data);
    console.log('you in definitions.component.ts definitions: ', this.definitions);
    this.ss.dropit(event);
  }


  /** Predicate function that only allows even numbers to be dropped into a list. */
  definitionPredicate(item: CdkDrag<number>) {
    console.log('item.data: ', item.data);
    return true;
    //return item.data % 2 === 0; // returns true or false
  }
  




}
