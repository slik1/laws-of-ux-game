import { CdkDrag, CdkDragDrop } from '@angular/cdk/drag-drop';
import { Component, OnInit } from '@angular/core';
import { lawsData } from '../lawsData';
import { SharedService } from '../shared.service';
@Component({
  selector: 'app-laws',
  templateUrl: './laws.component.html',
  styleUrls: ['./laws.component.scss']
})
export class LawsComponent implements OnInit {

  public laws = lawsData;

  constructor(private ss: SharedService) { }

  ngOnInit(): void {
  }

  // drop(event: CdkDragDrop<string[]>) {
  //   this.ss.dropit(event);
  // }

  isCorrectPredicate(item: CdkDrag<number>) {
    //return item.data % 2 === 0; // returns true or false
    console.log("from laws item.data: ", item.data);
    return true;
  }

}
