import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-tab',
  templateUrl: './tab.component.html',
  styleUrls: ['./tab.component.scss'],
})
export class TabComponent implements OnInit {
  //active: boolean=false;;

  constructor() {}

  ngOnInit(): void {}

  headings: string[] = ['heading1', 'heading2', 'heading3', 'heading4'];
  contents: string[] = ['content1', 'content2', 'content3', 'content4'];
}
