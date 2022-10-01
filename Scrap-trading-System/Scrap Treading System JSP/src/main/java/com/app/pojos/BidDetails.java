package com.app.pojos;

import java.util.List;

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


//+----------+--------------+------+-----+---------+-------+
//| Field    | Type         | Null | Key | Default | Extra |
//+----------+--------------+------+-----+---------+-------+
//| bid_id   | int          | NO   | PRI | NULL    |       |
//| user_id  | int          | NO   | MUL | NULL    |       |
//| scrap_id | int          | NO   | MUL | NULL    |       |
//| bid_amt  | decimal(6,3) | NO   |     | NULL    |       |
//+----------+--------------+------+-----+---------+-------+


@Entity
@Table(name = "bid_details")
@NoArgsConstructor
@AllArgsConstructor
@Data
public class BidDetails extends BaseEntity{

	@ManyToOne(cascade =CascadeType.MERGE)
	@JoinColumn(name = "scrap_id",nullable = false)
	private ScrapPost scrappost;
	
	@ManyToOne(cascade = CascadeType.MERGE)
	@JoinColumn(name = "user_id",nullable = false)
	private User user;

	@Column
	private Double bidAmt;
	
//	@OneToMany(mappedBy = "bidDetails1")
//	private List<ScrapPost> Scrappost1;
	

}
