package com.app.pojos;

import java.time.LocalDate;
import java.util.List;

import javax.persistence.CascadeType;
import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.FetchType;
import javax.persistence.JoinColumn;
import javax.persistence.ManyToOne;
import javax.persistence.OneToMany;
import javax.persistence.Table;

import com.fasterxml.jackson.annotation.JsonIgnore;

import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

//+----------------+--------------+------+-----+---------+-------+
//| Field          | Type         | Null | Key | Default | Extra |
//+----------------+--------------+------+-----+---------+-------+
//| scrap_id       | int          | NO   | PRI | NULL    |       |
//| user_id        | int          | NO   | MUL | NULL    |       |
//| weight         | decimal(2,0) | NO   |     | NULL    |       |
//| material_type  | varchar(45)  | NO   |     | NULL    |       |
//| uploading_date | date         | NO   |     | NULL    |       |
//| scrap_image    | varchar(100) | NO   |     | NULL    |       |
//| no-bid_id         | int          | NO   | MUL | NULL    |       |
//+----------------+--------------+------+-----+---------+-------+
//city


@Entity
@Table(name = "scrap_post")
@NoArgsConstructor
@AllArgsConstructor
@Data
public class ScrapPost extends BaseEntity{

	//@JsonIgnore
	@ManyToOne(fetch = FetchType.EAGER)
	@JoinColumn(name = "user_id", nullable = false)
	private User user;
	
	@Column(nullable = false,length = 20)
	private String city;
	
	@Column(nullable = false)
	private Double weight;
	
	@Column(nullable = false)
	private String materialType;
	
	@Column(nullable = false)
	private LocalDate uploadingDate;
	
	@Column(nullable = false)
	private String scrapImage;
	
	@JsonIgnore
	@OneToMany(mappedBy = "scrappost",orphanRemoval = true)
	private List<BidDetails> bidDetails;
	
//	@ManyToOne(cascade = CascadeType.ALL)
//	@JoinColumn(name = "bid_id",nullable = false)
//	private BidDetails bidDetails1;

}
