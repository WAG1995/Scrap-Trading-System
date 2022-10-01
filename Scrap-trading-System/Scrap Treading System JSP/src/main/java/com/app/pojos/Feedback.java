package com.app.pojos;

import javax.persistence.CascadeType;
import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.JoinColumn;
import javax.persistence.ManyToOne;
import javax.persistence.OneToMany;
import javax.persistence.Table;

import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;


//+-------------+--------------+------+-----+---------+-------+
//| Field       | Type         | Null | Key | Default | Extra |
//+-------------+--------------+------+-----+---------+-------+
//| feedback_id | int          | NO   | PRI | NULL    |       |
//| user_id     | int          | NO   | MUL | NULL    |       |
//| description | varchar(150) | NO   |     | NULL    |       |
//+-------------+--------------+------+-----+---------+-------+

@Entity
@Table(name = "feedback")
@AllArgsConstructor
@NoArgsConstructor
@Data
public class Feedback extends BaseEntity{

	@ManyToOne(cascade = CascadeType.MERGE)
	@JoinColumn(name = "user_id",nullable = false)
	private User user;  //to add user_id as foreign key (one user -> many feedback)
	
	
	@Column(nullable = false, length = 150)
	private String  description;
}
