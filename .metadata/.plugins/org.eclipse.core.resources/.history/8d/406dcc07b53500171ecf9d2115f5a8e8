package com.cardplus.service;

import java.io.Serializable;
import java.util.ArrayList;
import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.cardplus.model.User;
import com.cardplus.spring.repository.UserRepository;
import com.cardplus.spring.repository.UserRepositoryImpl;

@Service
public class UserService implements Serializable{
	
	private static final long serialVersionUID = 7389500167835299205L;
	
	@Autowired
	UserRepository userRepository;
	@Autowired
	UserRepositoryImpl userRepositoryImpl;
	
	public List<User> getUserByFirstName(String firstName){
		return userRepository.findByFirstName(firstName);
	}
	
	public List<User> getByUsersByCountryCode(String code){
		return userRepository.findUsersByCode(code);
	}
	
	public List<User> getUsers(){
		List<User> users = new ArrayList<User>();
		Iterable<User> it = userRepository.findAll();
		
		if(it instanceof List){
			users = (List<User>)it;
		}else{
			userRepository.findAll().forEach(users::add);
		}
		
		return users;
	}
	
	public User findById(String id){
		return userRepository.findById(id);
	}
	
	public User saveUser(User user){
		return userRepository.save(user);
	}
	
	public void deleteUser(String id){
		userRepository.delete(id);
	}
}
