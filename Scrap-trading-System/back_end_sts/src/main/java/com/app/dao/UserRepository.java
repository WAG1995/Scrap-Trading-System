package com.app.dao;

import java.util.List;
import java.util.Optional;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.stereotype.Repository;

import com.app.pojos.BidDetails;
import com.app.pojos.ScrapPost;
//import com.app.pojos.Customer;
import com.app.pojos.User;


@Repository
public interface UserRepository extends JpaRepository<User, Integer> {

	//find all users by email
	List<User> findByEmail(String email);
	
	//find all users by name
	List<User> findByFullname(String fullname);
	
	User findByUsername(String username);
	
    
	Optional<User> findByUsernameAndPassword(String username, String password);
	

	
	
	
	
}
