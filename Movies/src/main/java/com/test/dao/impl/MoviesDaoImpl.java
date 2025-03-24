package com.test.dao.impl;

import java.util.List;
import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Repository;

import com.test.dao.MovieDao;
import com.test.entity.Movies;
import com.test.repository.MovieRepository;

@Repository
public  class MoviesDaoImpl implements MovieDao{
	
	@Autowired
	MovieRepository movieRepository;

	@Override
	public String addMovie(Movies movies) {
		movieRepository.save(movies);
		return "Movie added successfully...!";
	}

	@Override
	public String editMovie(Movies movies) {
		
		movieRepository.save(movies);
		return "Movie added successfully...!";
	}

	@Override
	public List<Movies> getAllMovies() {
		
		return movieRepository.findAll();
		
	}

	@Override
	public List<Movies> deleteMovie(int id) {
		
		movieRepository.deleteById(id);
		
		return movieRepository.findAll();
	}

	@Override
	public Optional<Movies> getMovie(int id) {
		
		return movieRepository.findById(id);
	}

}
