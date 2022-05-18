import { AfterViewInit, Component, ViewChild } from '@angular/core';
import { TabComponent } from './tab/tab.component';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent implements AfterViewInit {
  title = 'accordion';

  //trying to get element ref from tab component to app component using viewchild
  @ViewChild(TabComponent) child: TabComponent = new TabComponent();

  ngAfterViewInit(): void {
    //this.child.headings
    //this.child.contents
  }

  addTo(heading: string, content: string) {
    this.child.headings.push(heading);
    this.child.contents.push(content);
  }
}
