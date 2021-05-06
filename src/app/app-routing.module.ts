import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { GenresComponent } from './pages/genres/genres/genres.component';
import { HomeComponent } from './pages/home/home/home.component';

const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'genres', component: GenresComponent },
  { path: '**', pathMatch: 'full', redirectTo: 'home' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
