package com.app.service;

import java.util.List;
import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import com.app.dao.BidDetailsRepository;
import com.app.dao.FeedbackRepository;
import com.app.dao.ReportRepository;
import com.app.dao.ScrapRepository;
import com.app.dao.UserRepository;

import com.app.pojos.BidDetails;

import com.app.pojos.Feedback;
import com.app.pojos.Report;
import com.app.pojos.ScrapPost;
import com.app.pojos.User;

@Service
@Transactional
public class UserServiceImpl implements UserService {

	@Autowired
	private  ScrapRepository scrapRepo;
	
	@Autowired
	private UserRepository userRepo;
	
	@Autowired
	private BidDetailsRepository bidRepo;
	
	@Autowired
	private FeedbackRepository feedRepo;
	
	@Autowired
	private ReportRepository reportRepo;
		
	@Override
	public List<ScrapPost> getAllScrappost() {
		
		return scrapRepo.findAll();    // to get all scrapPost
	}

	@Override
	public String deletePost(Integer Id) {
		scrapRepo.deleteById(Id);
		return "ScrapPost of ID "+Id +"Deleted Succesfully" ;    //delete post uploaded by same user
	}

	@Override
	public User adduser(User tuser) {				//transient user=tuser
		return userRepo.save(tuser);
	}

	@Override
	public ScrapPost addscrappost(ScrapPost scrappost) {
		return scrapRepo.save(scrappost);
	}

	@Override
	public List<ScrapPost> getcitySP(String city) {
		return scrapRepo.findByCity(city);
	}

	@Override
	public List<ScrapPost> getweightSP(Double weight) {
		return scrapRepo.findByWeight(weight);
	}

	@Override
	public User findByUsername(String username) {
		return  userRepo.findByUsername(username);
	}

	@Override
	public BidDetails addbid(BidDetails biddetails) {
		return bidRepo.save(biddetails);
	}

	@Override
	public Feedback sendfeedback(Feedback feedback) {
		return feedRepo.save(feedback);
	}

	@Override
	public Report sendreport(Report report) {
		return reportRepo.save(report);
	}

	@Override
	public User authenticateUser(String username, String password) {
		return userRepo.findByUsernameAndPassword(username, password)
				.orElseThrow(() -> new RuntimeException("User login failed : Invalid Credentials"));
	}

	@Override
	public ScrapPost findById(Integer Id) {
		return scrapRepo.getById(Id);
	}
	

	

}
