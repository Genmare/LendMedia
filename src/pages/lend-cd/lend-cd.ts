import { MediaService } from './../../services/media.service';
import { Component, OnInit } from '@angular/core';
import { NavParams, ViewController } from 'ionic-angular';
import { Cd } from '../../models/cd';

@Component({
  selector: 'page-lend-cd',
  templateUrl: 'lend-cd.html',
})
export class LendCdPage implements OnInit{

  index: number;
  cd: Cd;

  constructor(public navParams: NavParams,
              private viewCtrl: ViewController,
              private mediaService: MediaService) {
  }

  ngOnInit() {
    this.index = this.navParams.get('index');
    this.cd = this.mediaService.cdsList[this.index];
  }

  dismissModal() {
    this.viewCtrl.dismiss();
  }

  onToggleBook() {
    this.cd.isLend = !this.cd.isLend;
  }
}
