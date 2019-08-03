import { BrowserModule } from '@angular/platform-browser'
import { NgModule } from '@angular/core'
import { FormsModule } from '@angular/forms'
import { AppComponent } from './app.component'
import { AppRoutingModule } from './app-routing.module'
import { CadastrarUsuarioComponent } from './cadastrar-usuario/cadastrar-usuario.component'
import { ListarUsuariosComponent } from './listar-usuarios/listar-usuarios.component'
import { WarningAlertComponent } from './warning-alert/warning-alert.component'
import { SuccessAlertComponent } from './success-alert/success-alert.component';
import { DataBindingComponent } from './data-binding/data-binding.component';
import { InputColorComponent } from './input-color/input-color.component'

@NgModule({
  declarations: [
    AppComponent,
    CadastrarUsuarioComponent,
    ListarUsuariosComponent,
    WarningAlertComponent,
    SuccessAlertComponent,
    DataBindingComponent,
    InputColorComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
