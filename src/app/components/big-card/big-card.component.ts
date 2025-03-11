import { Component, Input, OnInit } from '@angular/core';
import { RouterModule } from '@angular/router'; // Importando RouterModule

@Component({
  selector: 'app-big-card',
  standalone: true,  // Marcando o componente como standalone
  imports: [RouterModule],  // Importando RouterModule aqui também
  templateUrl: './big-card.component.html',
  styleUrls: ['./big-card.component.css'] // Corrigido "styleUrl" para "styleUrls"
})
export class BigCardComponent implements OnInit {

  @Input() photoCover: string = "";
  @Input() cardTitle: string = " ";
  @Input() cardDescription: string = "";
  @Input() Id: string = "0";

  constructor() { }

  ngOnInit(): void { }
}


