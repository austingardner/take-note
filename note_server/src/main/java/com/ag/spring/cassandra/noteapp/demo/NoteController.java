package com.ag.spring.cassandra.noteapp.demo;

import java.util.Collection;
import java.util.List;
import java.util.stream.Collectors;

import javax.security.auth.message.callback.PrivateKeyCallback.Request;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;

import com.datastax.driver.core.utils.UUIDs;
import com.fasterxml.jackson.databind.ObjectMapper;
import com.fasterxml.jackson.databind.node.ObjectNode;

@CrossOrigin("http://localhost:3000") //NOTE:: this is the port address of wherever your client is running!!
@RestController
@RequestMapping("/api")
public class NoteController {
	
	@Autowired 
	NoteRepo noteRepository;
	
//	@GetMapping("/notes")
//	//public List<Note> getNotes(@RequestParam String email) {
//	public List<Note> getNotes(@RequestBody String email) throws JSONException {	
//		//System.out.println("user email: " + email);
//		JSONObject json_obj = new JSONObject(email);
//		String str_email = json_obj.getString("email");
//		System.out.println(str_email);
//		
//		System.out.println("sending all notes");
//		
//		return noteRepository.findAll();
//	}
	
	@GetMapping("/notes")
	//public List<Note> getNotes(@RequestParam String email) {
	public List<Note> getNotes(@RequestParam String email) {	
		//System.out.println("user email: " + email);
		
			System.out.println(email);
			
			System.out.println("sending all notes");
			
			return noteRepository.findAll().stream()
					.filter(Note -> email.equals(Note.getAuthor()))
					.collect(Collectors.toList());
			// TODO Auto-generated catch block
		
		
	}
	
	/*
	 * 
	 * @GetMapping("/good-chocolates")
	@CrossOrigin("http://localhost:3000")
	public Collection<Chocolate> goodChocolates(){
		return chocoRepository.findAll().stream()
				.filter(this::isGreat)
				.collect(Collectors.toList());
	}
	
	private boolean isGreat(Chocolate chocolate)
	{
		return !chocolate.getName().equals("Hershey") && 
				!chocolate.getName().equals("Godiva") && 
				!chocolate.getName().equals("Reese's");
	}
	 * 
	 */
	
	@PostMapping("/notes/new")
	public ResponseEntity<Note> makeNote(@RequestBody Note note){
		System.out.println("making new note with name: " + note.getName());
		
		note.setId(UUIDs.timeBased());
		Note res = noteRepository.save(note);
		return new ResponseEntity<Note>(res, HttpStatus.OK);
		
	}
	
	
	
}
