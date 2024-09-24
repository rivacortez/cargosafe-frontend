import {Component, HostListener, OnInit, signal} from '@angular/core';
import { RouterOutlet } from '@angular/router';
import {LeftSidebarComponent} from "./public/components/left-sidebar/left-sidebar.component";
import {MainComponent} from "./main/main.component";
import {LanguageSwitcherComponent} from "./public/components/language-switcher/language-switcher.component";
import {ToolbarContentComponent} from "./public/components/toolbar-content/toolbar-content.component";

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, LeftSidebarComponent, MainComponent, LanguageSwitcherComponent, ToolbarContentComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent  implements OnInit {



  isLeftSidebarCollapsed = signal<boolean>(false);
  screenWidth = signal<number>(window.innerWidth);

  @HostListener('window:resize')
  onResize() {
    this.screenWidth.set(window.innerWidth);
    if (this.screenWidth() < 768) {
      this.isLeftSidebarCollapsed.set(true);
    }
  }

  ngOnInit(): void {
    this.isLeftSidebarCollapsed.set(this.screenWidth() < 768);
  }

  changeIsLeftSidebarCollapsed(isLeftSidebarCollapsed: boolean): void {
    this.isLeftSidebarCollapsed.set(isLeftSidebarCollapsed);
  }
}
