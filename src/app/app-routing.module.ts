import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

/*Importar os componentes para onde vou ter rotas*/
// import { HomeComponent } from './home/home.component';
import { AppComponent } from './app.component';
// import { ProtegidoComponent } from './protegido/protegido.component';
// import { LiberadoComponent } from './liberado/liberado.component';
import { CriarContaComponent } from './criar-conta/criar-conta.component';
import { HeaderComponent } from './header/header.component';
import { ContentComponent } from './content/content.component';

const routes: Routes = [
  { path: '', component: ContentComponent },
  // { path: 'perfil', component: ProtegidoComponent },
  // { path: 'unlock', component: LiberadoComponent },
  { path: 'create', component: CriarContaComponent},
];

@NgModule({
  exports: [ RouterModule ],
  imports: [ RouterModule.forRoot(routes) ]
})
export class AppRoutingModule { }

