import { Component, OnInit } from '@angular/core';
import { definitionsData } from '../definitionsData';
@Component({
  selector: 'app-definitions',
  templateUrl: './definitions.component.html',
  styleUrls: ['./definitions.component.scss']
})
export class DefinitionsComponent implements OnInit {

  public definitions = definitionsData;

  constructor() { }

  ngOnInit(): void {
  }

}
