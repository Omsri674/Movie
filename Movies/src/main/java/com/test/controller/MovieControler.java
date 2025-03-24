package com.test.controller;

import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.test.entity.Movies;
import com.test.service.MovieService;

import java.util.List;
import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;



@RestController
@RequestMapping("/movies")
@CrossOrigin("http://localhost:4200/")
public class MovieControler {
	
	@Autowired
	MovieService movieService;
	
	@GetMapping("/listall")
	public Optional<Movies> getMovie(@PathVariable int id) {
		return movieService.getMovie(id);
	}
	
	@GetMapping("/listall/{id}")
	public List<Movies> getAllMovies() {
		return movieService.getAllMovies();
	}
	
	@PostMapping("/add")
	public List<Movies> addMovie(@RequestBody Movies mov ) {
		
		
		 movieService.addMovie(mov);
		 return movieService.getAllMovies();
	}
	
	@PutMapping("edit/{id}")
	public List<Movies> editMovie(@PathVariable int id, @RequestBody Movies mov) {
		mov.setMovie_id(id);
		
		 movieService.editMovie(mov);
		 return movieService.getAllMovies();
	}
	
	@DeleteMapping("delete/{id}")
	public List<Movies> deleteMovie(@PathVariable int id){
		return movieService.deleteMovie(id);
	}
	

}
