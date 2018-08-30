package com.ag.spring.cassandra.noteapp.demo;

import java.util.UUID;

import org.springframework.data.cassandra.repository.CassandraRepository;

public interface NoteRepo extends CassandraRepository<Note, UUID> {
	
}
