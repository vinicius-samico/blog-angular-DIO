import { RouterModule, Routes } from '@angular/router';
import { ContentComponent } from './pages/content/content.component';
import { HomeComponent } from './pages/home/home.component';

export const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'content/:id', component: ContentComponent } // Ajustado para aceitar ID
];

// Adicione a exportação do RouterModule para uso no AppComponent
export const AppRoutingModule = RouterModule.forRoot(routes);
