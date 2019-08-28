import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { MediaService } from '../../../services/media.service';
import { Book } from '../../../models/book';
import { Component, OnInit } from '@angular/core';
import { NavParams, ViewController } from 'ionic-angular';

@Component({
  selector: 'page-lend-book',
  templateUrl: 'lend-book.html',
})
export class LendBookPage implements OnInit{

  index: number;
  book: Book;
  nameForm: FormGroup;
  name: string;

  constructor(private navParams: NavParams,
              private viewCtrl: ViewController,
              private mediaService: MediaService,
              private formBuilder: FormBuilder) {
  }

  ngOnInit() {
    this.index = this.navParams.get('index');
    this.book = this.mediaService.booksList[this.index];
    this.initForm();
  }

  dismissModal() {
    this.viewCtrl.dismiss();
  }

  onToggleBook() {
    this.book.isLend = !this.book.isLend;
    if(this.book.isLend) {
      this.name = this.nameForm.get('name').value;
      console.log('name', this.name);
    }
  }

  initForm() {
    this.nameForm = this.formBuilder.group({
      name: ['', Validators.required]
    });
  }
}
