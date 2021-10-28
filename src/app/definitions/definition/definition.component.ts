import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-definition',
  templateUrl: './definition.component.html',
  styleUrls: ['./definition.component.scss']
})
export class DefinitionComponent implements OnInit {

  @Input() text:string | undefined;

  constructor() { }

  ngOnInit(): void {
  }

}
