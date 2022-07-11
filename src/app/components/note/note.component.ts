import { Component, OnInit } from '@angular/core';
import { Note } from 'src/app/models/note';
import { NoteService } from 'src/app/services/note.service';

@Component({
  selector: 'app-note',
  templateUrl: './note.component.html',
  styleUrls: ['./note.component.css']
})
export class NoteComponent implements OnInit {

  notes:any;
  allNotes:Note[] = [];
  currentNote:any;
  constructor(private noteService:NoteService) { }

  ngOnInit(): void {
    this.getNotes();
    
  }

  getNotes(){
    this.noteService.getNotes().subscribe((response) => {
      this.notes = response;
      this.allNotes = this.notes.data;
    })
  }

  isClicked(note:Note){
    this.currentNote = note;
    // pop-up çıkartılacak olan kısım burası olacak (tetiklenecek)
  }

  getCurrentNoteClass(note:Note){
    if(note == this.currentNote){
      return "list-group-item active";
    }else{
      return "list-group-item";
    }
  }
}
