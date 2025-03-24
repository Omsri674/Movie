import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { Movie } from '../movie';
import { MovieDataService } from '../movie-data.service';
import { ActivatedRoute, Router, RouterModule } from '@angular/router';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-add-movie',
  imports: [
    RouterModule,
    FormsModule,
    CommonModule
  ],
  templateUrl: './add-movie.component.html',
  styleUrl: './add-movie.component.css'
})
export class AddMovieComponent  {
  movie:Movie;

  constructor(
    private moviedataService:MovieDataService,
    private router:Router,
    private route:ActivatedRoute
  ){
    this.movie = new Movie();
  }

  onSubmit(){
    this.moviedataService.save(this.movie).subscribe(()=>this.gotoMovieList());
  }

  gotoMovieList(){
    this.router.navigate(['/list-movie']);
  }

}
