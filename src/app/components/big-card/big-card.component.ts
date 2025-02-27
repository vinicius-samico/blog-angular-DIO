import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-big-card',
  templateUrl: './big-card.component.html',
  styleUrls: ['./big-card.component.css'] // Corrigido "styleUrl" para "styleUrls"
})
export class BigCardComponent implements OnInit {

  @Input() photoCover: string = ""; // Corrigido erro de sintaxe
  @Input() cardTitle: string = " ";
  @Input() cardDescription: string = "";

  constructor() { }

  ngOnInit(): void { }
}

