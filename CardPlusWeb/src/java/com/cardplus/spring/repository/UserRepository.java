package com.cardplus.spring.repository;

import java.util.List;

import org.springframework.data.mongodb.repository.Query;
import org.springframework.data.repository.CrudRepository;
import org.springframework.stereotype.Repository;

import com.cardplus.model.User;

@Repository("UserRepository")
public interface UserRepository extends CrudRepository<User, String>{
	public User findById(String id);	
	
	public List<User> findByEmail(String email);
    public List<User> findByFirstName(String firstName);	
    public List<User> findByLastName(String lastName);
    public User findByIdNumber(String idNumber);
    public List<User> findByCountryCode(String code);
    
    @Query("{'country.code': '?0' }")
    public List<User> findUsersByCode(String code);   
    
}
