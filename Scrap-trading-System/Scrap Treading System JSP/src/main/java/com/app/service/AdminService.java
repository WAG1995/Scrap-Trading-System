package com.app.service;

import java.util.List;

import com.app.pojos.Feedback;
import com.app.pojos.Report;
import com.app.pojos.ScrapPost;
import com.app.pojos.User;

public interface AdminService {

		//to get all scrappost
		 List<ScrapPost> getAllScrappost();
	
		//to get all Users
		 List<User> getAllUsers();
		 
		 //to delete User 
		 String deleteUser(Integer Id);
		 
		//to delete post 
		 String deletePost(Integer Id);
		 
		 List<Feedback> getAllFeedback();
		 
		 List<Report> getAllReport();
}
