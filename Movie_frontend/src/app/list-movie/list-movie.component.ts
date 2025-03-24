import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { Movie } from '../movie';
import { MovieDataService } from '../movie-data.service';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';

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


updateMovie(id: number,mov:Movie) {
  this.moviedataservice.getMovie(id)
  .subscribe(
    data => {
      this.studentlist=data           
    },
    error => console.log(error));
}


updateMov(id: number){
  this.moviedataservice.getMovie(id);
 this.movie.movie_id=this.MovieId.value;
 this.movie.movie_name=this.MovieName.value;
 this.movie.movie_director=this.MovieDirector.value;
 
 

 this.moviedataservice.updateMovie(this.movie.student_id,this.movie).subscribe(
  data => {     
    this.isupdated=true;
    this.moviedataservice.getAll().subscribe(data =>{
      this.movies =data
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
  constructor(private moviedataservice: MovieDataService) { }

     deleteMessage=false;
     productlist:any;
     isupdated = false;
     movielist:any;

  ngOnInit(): void {
      this.moviedataservice.getAll().subscribe(data => {
        this.movies = data;
      });
  }


  
  get MovieName(){
    return this.moviedataservice.get('movie_name');
  }

  get MovieDirector(){
    return this.moviedataservice.get('movie_director');
  }



  get MovieId(){
    return this.moviedataservice.get('movie_id');
  }

  changeisUpdate(){
    this.isupdated=false;
  }

}
