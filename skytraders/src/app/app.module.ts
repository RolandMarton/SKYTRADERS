import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { MatIconModule } from "@angular/material/icon";
import { HttpClientModule } from "@angular/common/http";
import { AppRoutingModule } from './app-routing.module';

import { AppComponent } from './app.component';
import { HeaderComponent } from "./components/header/header.component";
import { NavbarComponent } from "./components/header/navbar/navbar.component";
import { HeaderContentComponent } from './components/header/header-content/header-content.component';
import { FooterComponent } from './components/footer/footer.component';
import { LogoComponent } from './components/logo/logo.component';
import { NavLinksComponent } from './components/nav-links/nav-links.component';
import { LanguageDropDownComponent } from './components/language-drop-down/language-drop-down.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    NavbarComponent,
    HeaderComponent,
    HeaderComponent,
    NavbarComponent,
    HeaderContentComponent,
    FooterComponent,
    LogoComponent,
    NavLinksComponent,
    LanguageDropDownComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    MatIconModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
