import { Component, OnInit } from '@angular/core'

@Component({
  selector: 'app-listar-usuarios',
  templateUrl: './listar-usuarios.component.html',
  styleUrls: ['./listar-usuarios.component.css']
})
export class ListarUsuariosComponent implements OnInit {
  listaNomes: String[] = []
  constructor() { }

  ngOnInit() {
  }

  adicionarNome = (nome: String) => this.listaNomes.push(nome)
}
