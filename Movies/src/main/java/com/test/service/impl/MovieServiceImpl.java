package com.test.service.impl;

import java.util.List;
import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.test.dao.MovieDao;
import com.test.entity.Movies;
import com.test.service.MovieService;

@Service
public class MovieServiceImpl implements MovieService{

	@Autowired
	MovieDao dao;
	@Override
	public String addMovie(Movies movies) {
		
		return dao.addMovie(movies);
	}

	@Override
	public String editMovie(Movies movies) {
		
		return dao.editMovie(movies);
	}

	@Override
	public List<Movies> getAllMovies() {
		
		return dao.getAllMovies();
	}

	@Override
	public List<Movies> deleteMovie(int id) {
		
		return dao.deleteMovie(id);
	}

	@Override
	public Optional<Movies> getMovie(int id) {
		
		return dao.getMovie(id);
	}

}
