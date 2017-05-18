package com.cardplus.rest;

import java.util.List;

import javax.servlet.http.HttpServletResponse;
import javax.ws.rs.Consumes;
import javax.ws.rs.DELETE;
import javax.ws.rs.GET;
import javax.ws.rs.POST;
import javax.ws.rs.PUT;
import javax.ws.rs.Path;
import javax.ws.rs.PathParam;
import javax.ws.rs.Produces;
import javax.ws.rs.core.Context;
import javax.ws.rs.core.MediaType;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Component;

import com.cardplus.model.User;
import com.cardplus.service.UserService;

//The component attribute is needed below in order for the spring bean injection(Autowire) to work
@Component
@Path("/user")
public class UserRest {
	@Autowired
	private UserService userService;
	
	@GET
	@Path("getAllUsers")
	@Produces(MediaType.APPLICATION_JSON)
	public List<User> getAllUsers(@Context HttpServletResponse response) {
		response.addHeader("Access-Control-Allow-Origin", "*"); 
		response.addHeader("Access-Control-Allow-Credentials","true");
		return userService.getUsers();
	}
	
	@GET
	@Path("getUser/{id}")
	@Produces(MediaType.APPLICATION_JSON)
	public User getUser(@PathParam("id") String id, @Context HttpServletResponse response) {
		response.addHeader("Access-Control-Allow-Origin", "*"); 
		response.addHeader("Access-Control-Allow-Credentials","true");
		
		return userService.findById(id);
	}
	
	@PUT
	@Path("createUser")
	@Produces(MediaType.APPLICATION_JSON)
	@Consumes(MediaType.APPLICATION_JSON)
	public User createUser(User user) {
		return userService.saveUser(user);
	}
	
	@POST
	@Path("updateUser")
	@Produces(MediaType.APPLICATION_JSON)
	@Consumes(MediaType.APPLICATION_JSON)
	public User updateUser(User user) {
		return userService.saveUser(user);
	}
	
	@DELETE
	@Path("deleteUser/{id}")
	public void deleteUser(@PathParam("id") String id) {
		userService.deleteUser(id);
	}
	
//	@GET
//	@Path("{param}")
//	@Produces(MediaType.APPLICATION_JSON)
//	public User printPath(@PathParam("param") String msg) {
//		return createUser(msg);
//	}
//
//	@GET
//	@Path("/print")
//	@Produces(MediaType.APPLICATION_JSON)
//	public User printParam(@QueryParam("param") String msg) {
//		return createUser(msg);
//	}
}
