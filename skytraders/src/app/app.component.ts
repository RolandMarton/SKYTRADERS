import { Component } from '@angular/core';
import { MatIconRegistry } from "@angular/material/icon";
import { DomSanitizer } from "@angular/platform-browser";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

  constructor( private matIconRegistry: MatIconRegistry, private domSanitizer: DomSanitizer) {
    this.matIconRegistry.addSvgIcon("EN_Icon", this.domSanitizer.bypassSecurityTrustResourceUrl("./assets/svg/Country icons.svg"));
    this.matIconRegistry.addSvgIcon("Logo", this.domSanitizer.bypassSecurityTrustResourceUrl("./assets/svg/Logo.svg"));
    this.matIconRegistry.addSvgIcon("Ellipse", this.domSanitizer.bypassSecurityTrustResourceUrl("./assets/svg/Ellipse.svg"));
    this.matIconRegistry.addSvgIcon("Heart", this.domSanitizer.bypassSecurityTrustResourceUrl("./assets/svg/Heart.svg"));
    this.matIconRegistry.addSvgIcon("ChatCircle", this.domSanitizer.bypassSecurityTrustResourceUrl("./assets/svg/ChatCircle.svg"));
  }

}
