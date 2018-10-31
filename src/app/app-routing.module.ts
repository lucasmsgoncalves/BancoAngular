import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

/*Importar os componentes para onde vou ter rotas*/
import { HomeComponent } from './home/home.component';
import { AppComponent } from './app.component';
import { ProtegidoComponent } from './protegido/protegido.component';
import { LiberadoComponent } from './liberado/liberado.component';

const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'perfil', component: ProtegidoComponent },
  { path: 'unlock', component: LiberadoComponent },
];

@NgModule({
  exports: [ RouterModule ],
  imports: [ RouterModule.forRoot(routes) ]
})
export class AppRoutingModule { }

