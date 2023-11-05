import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './components/home/home.component';
import { PokedexComponent } from './components/pokedex/pokedex.component';
import { PokelistComponent } from './components/pokelist/pokelist.component';

const routes: Routes = [

  {
    path: '', component: HomeComponent,
  },
  {
    path: 'home', redirectTo: '',
  },
  
  {
    path: '', pathMatch: 'full', redirectTo: 'home',
  },
  {
    path: 'pokelist', component: PokelistComponent,
  },
  {
    path: '**', pathMatch: 'full', redirectTo: 'home'
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
