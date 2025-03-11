import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { BigCardComponent } from './components/big-card/big-card.component';
import { MenuBarComponent } from "./components/menu-bar/menu-bar.component";
import { HomeComponent } from "./pages/home/home.component";

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, BigCardComponent, HomeComponent, MenuBarComponent],
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'] // Correção aqui (plural)
})
export class AppComponent {
  title = 'angular-blog';
}
