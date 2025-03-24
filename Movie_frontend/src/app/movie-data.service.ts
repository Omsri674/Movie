import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Movie } from './movie';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class MovieDataService {
  get(movieId: number) {
    return this.http.get(this.baseUrl+'get/'+movieId);
  }
 

  private baseUrl: string;

  constructor(private http:HttpClient) { 
    this.baseUrl = 'http://localhost:5577/movies/';
  }
    public getAll(): Observable<Movie[]> {
      return this.http.get<Movie[]>(this.baseUrl+'listall')
      
      
    }

    getMovie(id: number) {
      return this.http.get(this.baseUrl+'get/'+id);
    }

    public save(mov:Movie){
      return this.http.post<Movie>(this.baseUrl+'add',mov);
    }

    public deleteMovie(id:number){
      return this.http.delete(this.baseUrl+'delete/'+id);
    }

    public updateMovie(id:number,mov:Movie){
      return this.http.put(this.baseUrl+'edit/'+id,mov);
    }

    
  
}
