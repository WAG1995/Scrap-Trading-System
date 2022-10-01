package com.app.controller;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.app.service.AdminService;

@CrossOrigin(origins = "http://localhost:3000")
@RestController
@RequestMapping("/api/admin")
public class AdminController {

	@Autowired
	private AdminService adminService;
	
	public AdminController() {
		System.out.println("In constructor of AdminController");  //to check if successfully run
	}
	
	@GetMapping("/getAllUsers")
	public ResponseEntity<?>  getAllUsersDetails(){
		System.out.println("In getAllUsersDetails()");
		return new ResponseEntity<> (adminService.getAllUsers(), HttpStatus.OK);
	}
	
	
	@GetMapping("/getAllScrapPost")
	public ResponseEntity<?>  getAllScrapPostDetails(){
		System.out.println("In getAllScrapPostDetails()");
		return new ResponseEntity<> (adminService.getAllScrappost(), HttpStatus.OK);
	}
	
	@GetMapping("/getAllFeedback")
	public ResponseEntity<?>  getAllFeedback(){
		System.out.println("In getAllFeedback()");
		return new ResponseEntity<> (adminService.getAllFeedback(), HttpStatus.OK);
	}
	
	@GetMapping("/getAllReport")
	public ResponseEntity<?>  getAllReport(){
		System.out.println("In getAllReport()");
		return new ResponseEntity<> (adminService.getAllReport(), HttpStatus.OK);
	}
	
	@DeleteMapping("/deleteUser/{user_id}")
	public String deleteUserDetails(@PathVariable int user_id) {
		System.out.println("In deleteUserDetails()");
		return adminService.deleteUser(user_id);
	}
	
	@DeleteMapping("/deletePost/{scrap_id}")
	public String deleteScrapPost(@PathVariable int scrap_id) {
		System.out.println("In deleteScrapPost()");
		return adminService.deletePost(scrap_id);
	}
}
