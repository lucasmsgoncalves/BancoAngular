import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NgModule } from '@angular/core';
import { FormsModule} from '@angular/forms';
import { AppComponent } from './app.component';
import { MaterializeModule } from 'angular2-materialize';
import { AppRoutingModule } from './/app-routing.module';
import { HomeComponent } from './home/home.component';
import { ProtegidoComponent } from './protegido/protegido.component';
import { LiberadoComponent } from './liberado/liberado.component';
import { RouterModule } from '@angular/router';
import { MatDialogModule } from '@angular/material/dialog';
import { HeaderComponent } from './header/header.component';
import { ContentComponent } from './content/content.component';
import { FooterComponent } from './footer/footer.component';
import { CriarContaComponent } from './criar-conta/criar-conta.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    ProtegidoComponent,
    LiberadoComponent,
    HeaderComponent,
    ContentComponent,
    FooterComponent,
    CriarContaComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    AppRoutingModule,
    RouterModule,
    BrowserAnimationsModule,
    MatDialogModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
