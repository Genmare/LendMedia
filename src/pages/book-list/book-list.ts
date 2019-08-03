import { LendBookPage } from './../lend-book/lend-book';
import { MediaService } from './../../services/media.service';
import { Component } from '@angular/core';
import { ModalController, MenuController } from 'ionic-angular';
import { Book } from '../../models/book';

@Component({
  selector: 'page-book-list',
  templateUrl: 'book-list.html',
})
export class BookListPage {

  booksList: Book[];

  constructor(private modalCtrl: ModalController,
              private mediaService: MediaService,
              private menuCtrl: MenuController) { }

  ionViewWillEnter() {
    this.booksList = this.mediaService.booksList.slice();
  }

  onLoadBook(index: number) {
    let modal = this.modalCtrl.create(LendBookPage,{index: index});
    modal.present();
  }

  onToggleMenu() {
    this.menuCtrl.open();
  }
}
