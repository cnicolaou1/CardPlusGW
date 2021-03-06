package com.cardplus.model;

import java.util.UUID;

import org.springframework.data.annotation.Id;
import org.springframework.data.annotation.Version;

public abstract class AbstractBO {
	
	@Id
	private String id=UUID.randomUUID().toString();
	@Version
	protected Long version;

	public String getId() {
		return id;
	}

	public void setId(String id) {
		this.id = id;
	}
	
	public Long getVersion() {
		return version;
	}

	public void setVersion(Long version) {
		this.version = version;
	}
}
