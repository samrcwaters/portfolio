import { Component, OnInit } from "@angular/core";

@Component({
  selector: "app-navbar",
  templateUrl: "./navbar.component.html",
  styleUrls: ["./navbar.component.css"],
})
export class NavbarComponent implements OnInit {
  activeTab = "about";

  constructor() {
    this.setActiveTab(this.getActiveTab());
  }

  ngOnInit() {}

  getActiveTab() {
    return new URL(window.location.href).hash.substring(2);
  }

  setActiveTab(activeTab: string) {
    this.activeTab = activeTab;
  }
}
