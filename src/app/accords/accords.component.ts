import { Component, Input, OnInit } from '@angular/core';
import { AccordionType } from '../types/accordion-type';

@Component({
  selector: 'app-accords',
  templateUrl: './accords.component.html',
  styleUrls: ['./accords.component.scss'],
})
export class AccordsComponent implements OnInit {
  isShow: boolean = false;
  constructor() {}

  ngOnInit(): void {}

  accordionData: AccordionType[] = [
    {
      title: 'title-1',
      content: 'hi how are you title 1?',
      isShow: false,
    },
    {
      title: 'title-2',
      content: 'hi how are you title 2?',
      isShow: false,
    },
    {
      title: 'title-3',
      content: 'hi how are you title 3?',
      isShow: false,
    },
  ];

  openAccordion(item: AccordionType) {
    //debugger;
    this.isShow = !this.isShow;
  }
}
