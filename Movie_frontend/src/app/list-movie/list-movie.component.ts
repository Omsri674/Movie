import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { Movie } from '../movie';
import { MovieDataService } from '../movie-data.service';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { Router, RouterModule, Routes, ActivatedRoute } from '@angular/router';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-list-movie',
  imports: [
    RouterModule,
    ReactiveFormsModule,
    FormsModule,
    CommonModule

  ],
  templateUrl: './list-movie.component.html',
  styleUrl: './list-movie.component.css'
})
export class ListMovieComponent implements OnInit{
    http: HttpClient;

     
updateMovie(id: number,mov:Movie) {
  this.moviedataservice.getMovie(id)
  .subscribe(
    data => {
      this.movielist=data           
    },
    error => console.log(error));
}


updateMov(id: number){
    
this.routes.navigate(['/edit',id]);
this.movie.movie_id = Number(this.MovieId); 
this.movie.movie_name = String(this.MovieName); 
this.movie.movie_director = String(this.MovieDirector);
 
 

this.moviedataservice.updateMovie(this.movie.movie_id, this.movie).subscribe(
    data => {
      this.isupdated = true;
      this.moviedataservice.getAll().subscribe(data => {
        this.movies = data;
      })
  },
  error => console.log(error));
}



deleteMovie(id: number) {
  this.moviedataservice.deleteMovie(id)
  .subscribe(
    data => {
      console.log(data);
      this.deleteMessage=true;
      this.moviedataservice.getAll().subscribe(data =>{
        this.movies =data
        })
    },
    error => console.log(error));
}
  movies: Movie[];
  movie: Movie = new Movie();
  constructor(private moviedataservice: MovieDataService
    ,private routes:Router
    ,private route:ActivatedRoute
  ) { }

     deleteMessage=false;
     productlist:any;
     isupdated = false;
     movielist:any;

  ngOnInit(): void {
      this.moviedataservice.getAll().subscribe(data => {
        this.movies = data;
      });
  }


  
  get MovieName(): any{
    return this.moviedataservice.get('movie_name');
  }

  get MovieDirector():any{
    return this.moviedataservice.get('movie_director');
  }



  get MovieId():any{
    return this.moviedataservice.get('movie_id');
  }

  changeisUpdate(){
    this.isupdated=false;
  }

}
