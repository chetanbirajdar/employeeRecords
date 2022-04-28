import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-directives-demo',
  templateUrl: './directives-demo.component.html',
  styleUrls: ['./directives-demo.component.scss']
})
export class DirectivesDemoComponent implements OnInit {

  constructor() { }

  items: string[] = ['chetan', 'atul', 'saylee', 'priya'];

  viewDetails: string;

  ngOnInit() {


  }

  selectEmployee(item: string) {
    this.viewDetails = item;
  }

}
