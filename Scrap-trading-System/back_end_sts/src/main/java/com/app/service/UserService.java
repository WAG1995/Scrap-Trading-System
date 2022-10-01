package com.app.service;

import java.util.List;
import java.util.Optional;

import com.app.pojos.BidDetails;
import com.app.pojos.Feedback;
import com.app.pojos.Report;
import com.app.pojos.ScrapPost;
import com.app.pojos.User;

public interface UserService {

	User adduser(User t_user);

	ScrapPost addscrappost(ScrapPost scrappost);

	// to get all scrappost
	List<ScrapPost> getAllScrappost();

	// to delete post
	String deletePost(Integer Id);

	List<ScrapPost> getcitySP(String city);

	List<ScrapPost> getweightSP(Double weight);

	User findByUsername(String username);

	BidDetails addbid(BidDetails biddetails);
	
	Feedback sendfeedback(Feedback feedback);
	
	Report sendreport(Report report);
	
	User authenticateUser(String username, String password);
	
	Optional<ScrapPost> findById(Integer Id);
	
	
	Optional<ScrapPost> findByUser(int user_id);
}
