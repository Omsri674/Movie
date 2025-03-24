import { Routes } from '@angular/router';
import { ListMovieComponent } from './list-movie/list-movie.component';
import { AddMovieComponent } from './add-movie/add-movie.component';

export const routes: Routes = [
    {path: '', redirectTo: 'list-movie', pathMatch: 'full'},
    {path: 'list-movie', component: ListMovieComponent},
    {path: 'add-movie', component: AddMovieComponent}
];
