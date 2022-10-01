package com.app.dao;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import com.app.pojos.BidDetails;


@Repository
public interface BidDetailsRepository extends JpaRepository<BidDetails, Integer>{

	
}
