import { BrowserModule } from '@angular/platform-browser'
import { NgModule } from '@angular/core'
import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module'
import { CadastrarUsuarioComponent } from './cadastrar-usuario/cadastrar-usuario.component'
import { ListarUsuariosComponent } from './listar-usuarios/listar-usuarios.component'

@NgModule({
  declarations: [
    AppComponent,
    CadastrarUsuarioComponent,
    ListarUsuariosComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
