package com.app.dao;

import java.util.List;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import com.app.pojos.Report;
import com.app.pojos.User;

@Repository
public interface ReportRepository extends JpaRepository<Report, Integer>{

	List<Report> findByUser(User id);
}
