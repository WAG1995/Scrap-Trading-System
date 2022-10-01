package com.app.pojos;

import java.util.List;

import javax.persistence.CascadeType;
import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.FetchType;
import javax.persistence.ForeignKey;
import javax.persistence.JoinColumn;
import javax.persistence.OneToMany;
import javax.persistence.OneToOne;
import javax.persistence.Table;

import com.fasterxml.jackson.annotation.JsonIgnore;

import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

//+-------------+--------------+------+-----+---------+-------+
//| Field       | Type         | Null | Key | Default | Extra |
//+-------------+--------------+------+-----+---------+-------+
//| user_id     | int          | NO   | PRI | NULL    |       |
//| fullname_us | varchar(45)  | NO   |     | NULL    |       |
//| email_us    | varchar(45)  | NO   |     | NULL    |       |
//| contact_us  | int          | NO   |     | NULL    |       |
//| address     | varchar(100) | NO   |     | NULL    |       |
//| login_id    | int          | NO   | MUL | NULL    |       |
//+-------------+--------------+------+-----+---------+-------+


@Entity
@Table(name = "user")
@AllArgsConstructor
@NoArgsConstructor
@Data
public class User extends BaseEntity{

	@Column(length = 45)
	private String fullname;
	
	@Column(length = 45,unique = true)
	private String email;
	
	@Column(nullable = false,length = 10,unique = true)
	private String contactNo;
	
	@Column(length = 45)
	private String address;
	
	@Column(length =40 )
	private String username;
	
	@Column(length =40 )
	private String password;
	
		
//	@OneToOne(cascade = CascadeType.ALL)     // to add login_id as foreign key in this table
//	@JoinColumn(name = "loginId")
//	private Login login;

	@JsonIgnore
	@OneToMany(mappedBy = "user")
	private List<ScrapPost> scrappost;
	
	@JsonIgnore
	@OneToMany(mappedBy = "user")
	private List<Feedback> feedback;
	
	@JsonIgnore
	@OneToMany(mappedBy = "user")
	private List<Report> report;
}
