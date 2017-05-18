package com.cardplus.spring.repository;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.data.mongodb.core.MongoTemplate;
import org.springframework.data.mongodb.core.query.Criteria;
import org.springframework.data.mongodb.core.query.Query;

import com.cardplus.model.User;

public class UserRepositoryImpl {
	 @Autowired 
	 MongoTemplate mongoTemplate;
	 
	public List<User> findUsersByCodeWithManualQuery(String code){
		List<User> users = null;
		Query query = new Query();
		query.addCriteria(Criteria.where("country.code").is(code));
		users = mongoTemplate.find(query, User.class);
		
		return users;
	}
}
