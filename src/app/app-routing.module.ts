import { NgModule } from '@angular/core'
import { RouterModule, Routes } from '@angular/router'
import { CadastrarUsuarioComponent } from './cadastrar-usuario/cadastrar-usuario.component'
import { ListarUsuariosComponent } from './listar-usuarios/listar-usuarios.component'

const routes: Routes = [
  { path: 'cadastrarUsuario', component: CadastrarUsuarioComponent },
  { path: 'listarUsuarios', component: ListarUsuariosComponent }  
]

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})

export class AppRoutingModule { }