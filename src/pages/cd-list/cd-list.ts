import { LendCdPage } from './../lend-cd/lend-cd';
import { Cd } from './../../models/cd';
import { Component } from '@angular/core';
import { ModalController, MenuController } from 'ionic-angular';
import { MediaService } from '../../services/media.service';

@Component({
  selector: 'page-cd-list',
  templateUrl: 'cd-list.html',
})
export class CdListPage {

  cdsList: Cd[];

  constructor(public modalCtrl: ModalController,
              private mediaService: MediaService,
              private menuCtrl: MenuController) { }

  ionViewWillEnter() {
    this.cdsList = this.mediaService.cdsList.slice();
  }

  onLoadCd(index: number) {
    let modal = this.modalCtrl.create(LendCdPage,{index:index});
    modal.present();
  }

  onToggleMenu() {
    this.menuCtrl.open();
  }
}
