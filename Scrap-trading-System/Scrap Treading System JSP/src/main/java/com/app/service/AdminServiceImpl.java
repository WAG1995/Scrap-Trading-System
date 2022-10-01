package com.app.service;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import com.app.dao.FeedbackRepository;
import com.app.dao.ReportRepository;
import com.app.dao.ScrapRepository;
import com.app.dao.UserRepository;
import com.app.pojos.Feedback;
import com.app.pojos.Report;
import com.app.pojos.ScrapPost;
import com.app.pojos.User;

@Service
@Transactional
public class AdminServiceImpl implements AdminService {

	@Autowired
	private ScrapRepository scrapRepo;
	
	@Autowired
	private UserRepository userRepo;
	
	@Autowired
	private FeedbackRepository feedrepo;
	
	@Autowired
	private ReportRepository reportrepo;
	
	
	@Override
	public List<ScrapPost> getAllScrappost() {
		return scrapRepo.findAll();    // to get all scrapPost
	}

	@Override
	public List<User> getAllUsers() {
		return userRepo.findAll();    // to get info of all users
	}
	
	

	@Override
	public String deleteUser(Integer Id) {
		 userRepo.deleteById(Id);
		 return "User of ID "+Id +"Deleted Succesfully" ;      //delete any users post with given id
	}

	@Override
	public String deletePost(Integer Id) {
		scrapRepo.deleteById(Id);
		return "ScrapPost of ID "+Id +"Deleted Succesfully" ;   //delete any scrap post with given id
	}

	@Override
	public List<Feedback> getAllFeedback() {
		return feedrepo.findAll();
	}

	@Override
	public List<Report> getAllReport() {
		return reportrepo.findAll();
	}

}
