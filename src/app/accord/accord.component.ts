import { Component, Input, OnInit } from '@angular/core';
import { AccordionType } from '../types/accordion-type';

@Component({
  selector: 'app-accord',
  templateUrl: './accord.component.html',
  styleUrls: ['./accord.component.scss'],
})
export class AccordComponent implements OnInit {
  @Input() accord: AccordionType = {
    title: '',
    content: '',
    isShow: false,
  };

  constructor() {}

  ngOnInit(): void {}
}
