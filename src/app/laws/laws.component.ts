import { Component, OnInit } from '@angular/core';
import { lawsData } from '../lawsData';
@Component({
  selector: 'app-laws',
  templateUrl: './laws.component.html',
  styleUrls: ['./laws.component.scss']
})
export class LawsComponent implements OnInit {

  public laws = lawsData;
  
  constructor() { }

  ngOnInit(): void {
  }

}
