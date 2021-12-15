import { Component, Input, OnInit, Output } from '@angular/core';
import { Note } from 'src/app/interfaces/note';
import { NoteService } from 'src/app/services/note.service';
// import { EventEmitter } from 'stream';
import { EventEmitter } from '@angular/core';

@Component({
  selector: 'app-note-row',
  templateUrl: './note-row.component.html',
  styleUrls: ['./note-row.component.css']
})
export class NoteRowComponent implements OnInit {
  @Input() note!: Note;
  @Output("openDialog") openDialog: EventEmitter<any> = new EventEmitter();

  constructor(private noteService: NoteService) { }

  ngOnInit(): void {

  }

  edit() {

    this.openDialog.emit();
    
  }

delete(note: Note) {
  this.noteService.deleteNote(note); // Using Service

  //this.store.collection('notes').doc(id).delete();
}

}