package com.app.dao;

import java.time.LocalDate;
import java.util.List;


import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;


import com.app.pojos.ScrapPost;
import com.app.pojos.User;
@Repository
public interface ScrapRepository extends JpaRepository<ScrapPost, Integer> {

		//find all scrapost by specific weight
		List<ScrapPost> findByWeight(Double weight);
	
		//find all scrapost by specific material
		List<ScrapPost> findByMaterialType(String materialType);
		
		//find all scrapost by uploading date	
		List<ScrapPost> findByUploadingDate(LocalDate uploadingDate);
		
		//find all scrapost by location/city
		List<ScrapPost> findByCity(String city);
		
	
		}

