package com.app.dao;

import java.util.List;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.stereotype.Repository;

import com.app.pojos.BidDetails;
import com.app.pojos.ScrapPost;


@Repository
public interface BidDetailsRepository extends JpaRepository<BidDetails, Integer>{

	@Query("select b from BidDetails b  where scrap_id= :scrap_id")
	List<BidDetails>  findByScrapPost(ScrapPost scrap_id);
	
}
