import {ChangeDetectionStrategy, Component, ViewChild} from '@angular/core';
import { CdkVirtualScrollViewport } from '@angular/cdk/scrolling';

@Component({
  selector: 'app-virtual',
  templateUrl: './virtual.component.html',
  styleUrls: ['./virtual.component.css'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class VirtualComponent {

  @ViewChild(CdkVirtualScrollViewport) viewport: CdkVirtualScrollViewport

 personas = Array(500).fill(0);

 final(){
   this.viewport.scrollToIndex(this.personas.length)
 }

 principio(){
   this.viewport.scrollToIndex(0)
 }

 mitad(){
   this.viewport.scrollToIndex(this.personas.length / 2)
 }

  }


