package com.test.service;

import java.util.List;
import java.util.Optional;

import com.test.entity.Movies;

public interface MovieService {

	
	public String addMovie(Movies movies);
	public String editMovie(Movies movies);
	public List<Movies> getAllMovies();
	public Optional<Movies> getMovie(int id);
	public List<Movies> deleteMovie(int id); 
}
