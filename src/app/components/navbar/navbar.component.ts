import { Component } from "@angular/core";

@Component({
  selector: "app-navbar",
  templateUrl: "./navbar.component.html",
  styleUrls: ["./navbar.component.css"],
})
export class NavbarComponent {
  activeTab = "about";
  expandedNav = false;

  constructor() {
    this.setActiveTab(this.getActiveTab());
  }

  getActiveTab() {
    return new URL(window.location.href).hash.substring(2);
  }

  setActiveTab(activeTab: string) {
    this.activeTab = activeTab;
  }

  toggleNav() {
    this.expandedNav = !this.expandedNav;
  }
}
