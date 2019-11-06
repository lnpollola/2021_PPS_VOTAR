import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './componentes/home/home.component';
import { HeaderComponent } from './componentes/header/header.component';
import {
  MatFormFieldModule,
  MatAutocompleteModule,
  MatButtonModule,
  MatButtonToggleModule,
  MatCardModule,
  MatCheckboxModule,
  MatChipsModule,
  MatDatepickerModule,
  MatDialogModule,
  MatExpansionModule,
  MatGridListModule,
  MatIconModule,
  MatInputModule,
  MatListModule,
  MatMenuModule,
  MatNativeDateModule,
  MatProgressBarModule,
  MatProgressSpinnerModule,
  MatRadioModule,
  MatRippleModule,
  MatSelectModule,
  MatSidenavModule,
  MatSliderModule,
  MatSlideToggleModule,
  MatSnackBarModule,
  MatStepperModule,
  MatTableModule,
  MatTabsModule,
  MatToolbarModule,
  MatTooltipModule,
  
} from '@angular/material';
import { EliminoMailPipe } from './pipes/elimino-mail.pipe';
import { FooterComponent } from './componentes/footer/footer.component';
import { AngularFontAwesomeModule } from 'angular-font-awesome';
import { SlickCarouselModule } from 'ngx-slick-carousel';
import { LoginComponent } from './componentes/login/login.component';
import { FirebaseService } from "../app/servicios/firebase.service";
import { ReactiveFormsModule  } from '@angular/forms';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { FormsModule } from '@angular/forms';
import { UsuariosComponent } from './componentes/usuarios/usuarios.component';
import { ClienteComponent } from './componentes/cliente/cliente.component';
import { AboutComponent } from './componentes/about/about.component';
import { RegistroComponent } from './componentes/registro/registro.component';
import { ContactComponent } from './componentes/contact/contact.component';
import { MapComponent } from './componentes/map/map.component';
import { LetraYcolorDirective } from './directivas/letra-ycolor.directive';
import { FileSelectDirective } from 'ng2-file-upload';
@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    HeaderComponent,
    EliminoMailPipe,
    FooterComponent,
    LoginComponent,
    UsuariosComponent,
    ClienteComponent,
    AboutComponent,
    RegistroComponent,
    ContactComponent,
    MapComponent,
    LetraYcolorDirective,
    FileSelectDirective
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    MatCardModule,
    AngularFontAwesomeModule,
    SlickCarouselModule,
    ReactiveFormsModule,
    BrowserAnimationsModule,
    FormsModule,
    //material    
    MatFormFieldModule,    
    MatAutocompleteModule,
    MatButtonModule,
    MatButtonToggleModule,
    MatCardModule,
    MatCheckboxModule,
    MatChipsModule,
    MatDatepickerModule,
    MatDialogModule,
    MatExpansionModule,
    MatGridListModule,
    MatIconModule,
    MatInputModule,
    MatListModule,
    MatMenuModule,
    MatProgressBarModule,
    MatProgressSpinnerModule,
    MatRadioModule,
    MatRippleModule,
    MatSelectModule,
    MatSidenavModule,
    MatSlideToggleModule,
    MatSliderModule,
    MatSnackBarModule,
    MatStepperModule,
    MatTableModule,
    MatTabsModule,
    MatToolbarModule,
    MatTooltipModule,
    MatNativeDateModule
  ],
  entryComponents: [
    LoginComponent,
  ],
  providers: [FirebaseService],
  bootstrap: [AppComponent]
})
export class AppModule { }
