package com.app.controller;

import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;
import javax.servlet.http.HttpSession;
import javax.validation.Valid;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.stereotype.Controller;
import org.springframework.ui.Model;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.ModelAttribute;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestParam;



import com.app.pojos.BidDetails;
import com.app.pojos.Feedback;
import com.app.pojos.Report;
import com.app.pojos.ScrapPost;
import com.app.pojos.User;
import com.app.service.UserService;

@CrossOrigin(origins = "http://localhost:3000")
@Controller
@RequestMapping("/user")
public class UserController {

	@Autowired
	private UserService userservice;
	

	public UserController() {				//constructor
		System.out.println("In UserController's Constructor");
	}
	
	
	
	@GetMapping("/login")
	public String showLoginForm() {
		System.out.println("in show login form");
		return "/user/login";			// AVN : /WEB-INF/views/user/login.jsp
	}
	
	@PostMapping("/login") 
	public String processLoginForm(@RequestParam String username, @RequestParam String password, Model map,
			HttpSession session) {
		System.out.println("in process login form " + username + " " + password + " " + map);
		try {
			
			String admin1u = "kazias";
			String admin1p = "219086";
			String admin2u = "shaikhomair";
			String admin2p = "219174";

			if ((username == admin1u && password == admin1p) || (username == admin2u && password == admin2p)) {
				User user = userservice.authenticateUser(username, password);
				session.setAttribute("user_info", user);
				return "redirect:/admin/getAllScrapPost";
			}

			else {
				User user = userservice.authenticateUser(username, password);
				session.setAttribute("user_info", user);
				return "redirect:/user/getAllScrapPost";
			}
			
//			User user = userservice.authenticateUser(username, password);
//			session.setAttribute("user_info", user);
//			String admin1u="kazias";
//
//		String admin2u="shaikhomair";
//			if((username== admin1u) || (username== admin2u))
//			{return "redirect:/admin/getAllScrapPost";}
//			else
//			{return "redirect:/user/getAllScrapPost";}
			
		} catch (RuntimeException e) {
			System.out.println("err in class " + getClass() + "in  process login form " + e);
			map.addAttribute("message", "Invalid Login , Please retry.....");
			return "/user/login";
		}

	}
	
	
	
	@GetMapping("/getAllScrapPost")
	public String  getAllScrapPostDetails(Model map){
		System.out.println("In getAllScrapPostDetails()");
		 new ResponseEntity<> (userservice.getAllScrappost(), HttpStatus.OK);
		 map.addAttribute("allscrappost", userservice.getAllScrappost());
		 return "/user/getAllScrapPost";
	}
	
	//need to add getscrapPost by relative userID.
	
//	@GetMapping("/getScrapPostById")
//	public String showSPiIDForm() {
//		System.out.println("in show getScrapPostById form");
//		return "/user/getScrapPostById";			
//	}
	
	
	
	@GetMapping("/getScrapPostById")
	public String getScrapPostById(@RequestParam int scrap_id,Model map) {
		System.out.println("In getScrapPostById()");
		new ResponseEntity<> (userservice.findById(scrap_id), HttpStatus.OK);
		 map.addAttribute("getScrapPostById", userservice.findById(scrap_id));
		return "/user/getScrapPostById";
	}
		
	
	
	@GetMapping("/addUser")
	public String showAddUserForm() {
		System.out.println("in show adduser form");
		return "/user/addUser";			
	}
	
	@PostMapping("/addUser")
	public String adduser(@RequestBody @Valid @ModelAttribute("user") User user,Model map) {
		map.addAttribute("addUser", userservice.adduser(user));
		return "/user/addUser" ;
	}
	
	
	
	@GetMapping("/addScrapPost")
	public String showAddScrapPostForm() {
		System.out.println("in show addScrapPost form");
		return "/user/addScrapPost";			
	}
	
	@PostMapping("/addScrapPost")
	public String addscrappost(@RequestBody @Valid ScrapPost scrappost,Model map) {
		map.addAttribute("addScrapPost", userservice.addscrappost(scrappost));
		return "/user/addScrapPost" ;
	}
	
	
	
	@GetMapping("/addBid")
	public String showAddBidForm() {
		System.out.println("in show addBid form");
		return "/user/addBid";			
	}
	
	@PostMapping("/addBid")
	public String addbid(@RequestBody @Valid BidDetails biddetails,Model map) {
		map.addAttribute("addBid", userservice.addbid(biddetails));
		return "/user/addBid";
		}
	
	
	@GetMapping("/sendFeedback")
	public String showSendFeedbackForm() {
		System.out.println("in show sendFeedback form");
		return "/user/sendFeedback";			
	}
	
	@PostMapping("/sendFeedback")
	public String sendfeedback(@RequestBody @Valid Feedback feedback,Model map) {
		map.addAttribute("sendFeedback", userservice.sendfeedback(feedback));
		return "/user/sendFeedback";
		}
		
	
	
	@GetMapping("/sendReport")
	public String showSendReportForm() {
		System.out.println("in show sendReport form");
		return "/user/sendReport";			
	}
	
	@PostMapping("/sendReport")//Email
	public String sendreport(@RequestBody @Valid Report report,Model map) {
		map.addAttribute("sendReport", userservice.sendreport(report));
		return "/user/sendReport";
		}
	
	
	
	@DeleteMapping("/deletePost/{scrap_id}")
	public String deleteScrapPost(@PathVariable int scrap_id,Model map) {
		System.out.println("In deleteScrapPost()");
		map.addAttribute("deletePost", userservice.deletePost(scrap_id));
		return "/user/getAllScrapPost";
	}
	
	
	
	@GetMapping("/logout")
	public String userLogout(HttpSession session, Model map, HttpServletRequest request, HttpServletResponse resp) {
		System.out.println("in user logout");
		map.addAttribute("user_info", session.getAttribute("user_info"));
		session.invalidate();
		resp.setHeader("refresh", "3;url="+request.getContextPath());
		return "/user/logout";
	}

	
}
