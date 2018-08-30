package com.ag.spring.cassandra.noteapp.demo;

import java.util.UUID;

import org.springframework.data.cassandra.core.mapping.PrimaryKey;
import org.springframework.data.cassandra.core.mapping.Table;

@Table
public class Note {
	
	@PrimaryKey
	private UUID id;
	
	private String name;
	private String contents;
	private String author;
	
	public Note() {}

	public UUID getId() {
		return id;
	}

	public void setId(UUID id) {
		this.id = id;
	}

	public String getName() {
		return name;
	}

	public void setName(String name) {
		this.name = name;
	}

	public String getContents() {
		return contents;
	}

	public void setContents(String contents) {
		this.contents = contents;
	}

	public String getAuthor() {
		return author;
	}

	public void setAuthor(String author) {
		this.author = author;
	};
	
	@Override
	public String toString() {
		return "Note [id=" + id + ", name=" + name + ", author=" + author + ", contents=" + contents
				+ "]";
	}
	
	

}
