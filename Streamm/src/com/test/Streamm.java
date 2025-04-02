package com.test;

import java.util.Arrays;
import java.util.List;
import java.util.stream.Stream;

public class Streamm {
	public static void main(String[] args) {
		
		//Collection stream
		List<Integer> data = Arrays.asList(12,23,45,56,23,32,25,87);
		data.stream().forEach(System.out::println);
		
		System.out.println();
		//array stream
		int[] num = {11,2,3,4,5,6,7,8};
		Arrays.stream(num).forEach(System.out::println);
		
		
		//stream.of()
		Stream<String> str = Stream.of("Apple","Berry","cherry");
		str.forEach(System.out::println);
		
		
		//stream.generate
		Stream<String> genr = Stream.generate(()->"Stream").limit(5);
		genr.forEach(System.out::println);
		
		//stream.iterate 
		Stream<Integer> itr = Stream.iterate(100, n -> n+2).limit(10);
		itr.forEach(System.out::println);
	}

}
