import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-projectcard',
  templateUrl: './projectcard.component.html',
  styleUrls: ['./projectcard.component.css']
})
export class ProjectcardComponent implements OnInit {

  @Input()imgSrc: string;
  @Input()title: string;
  @Input()subtitle: string;
  @Input()description: string;

  constructor() { }

  ngOnInit() {
  }

}
