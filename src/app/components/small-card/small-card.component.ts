import { Component, Input, OnInit } from '@angular/core';
import { RouterModule } from '@angular/router'; // Importando RouterModule

@Component({
  selector: 'app-small-card',
  standalone: true,  // Marcando o componente como standalone
  imports: [RouterModule],  // Importando RouterModule aqui também
  templateUrl: './small-card.component.html',
  styleUrls: ['./small-card.component.css'] // Corrigido "styleUrl" para "styleUrls"
})
export class SmallCardComponent implements OnInit {

  @Input() photoCover: string = "";
  @Input() cardTitle: string = "";
  @Input() Id: string = "0";

  constructor() { }

  ngOnInit(): void { }
}
