import { CommonModule } from '@angular/common';
import { Component, ElementRef, HostListener, ViewChild } from '@angular/core';
import {MatIconModule} from '@angular/material/icon';
import {MatToolbarModule} from '@angular/material/toolbar';
import {MatButtonModule} from '@angular/material/button';
import {MatDrawer, MatSidenavModule} from '@angular/material/sidenav';
import {MatDividerModule} from '@angular/material/divider';
@Component({
  selector: 'app-navigation',
  standalone: true,
  imports: [CommonModule,MatIconModule,MatToolbarModule,MatSidenavModule, MatButtonModule,MatDividerModule],
  templateUrl: './navigation.component.html',
  styleUrls: ['./navigation.component.scss']
})
export class NavigationComponent {
  @ViewChild('drawer') drawer : any;

  constructor(private elRef: ElementRef) {}

  @HostListener('document:click', ['$event'])
  onClickOutside(event: Event): void {
    if (!this.elRef.nativeElement.contains(event.target) && !this.drawer._elementRef.nativeElement.contains(event.target)) {
      // Close the drawer
      this.drawer.close();
    }
  }
}
