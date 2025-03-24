package com.test.repository;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import com.test.entity.Movies;

@Repository
public interface MovieRepository extends JpaRepository<Movies, Integer> {

}
