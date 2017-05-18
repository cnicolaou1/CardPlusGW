package com.cardplus.model;

import java.io.Serializable;

import org.springframework.data.mongodb.core.mapping.Document;

@Document
public class Country implements Serializable{
	/**
	 * 
	 */
	private static final long serialVersionUID = -9111754512563047942L;

	private String code;
	private String description;
	
	public Country() {
	}
	
	public String getCode() {
		return code;
	}

	public void setCode(String code) {
		this.code = code;
	}

	public String getDescription() {
		return description;
	}

	public void setDescription(String description) {
		this.description = description;
	}
}