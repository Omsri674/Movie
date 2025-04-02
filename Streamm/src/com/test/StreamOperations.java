package com.test;

import java.util.Arrays;
import java.util.List;
import java.util.stream.Collector;
import java.util.stream.Collectors;
import java.util.stream.Stream;

public class StreamOperations {
	public static void main(String[] args) {
		List<String> names = Arrays.asList("Arun","Bhakya","Charu","Dharun","Eswar");
		
		List<String> namesStream = names.stream().filter(n -> n.length() > 5).collect(Collectors.toList());
		System.out.println(namesStream);
		
		List<String> namesMap = names.stream().map(n ->n.toUpperCase()).collect(Collectors.toList());
		System.out.println(namesMap);
	}

}
