import { Component, OnInit } from '@angular/core';
import { ImobileProducts } from '../models/mobileProducts';
import { mobileProduct } from '../const/mobileProducts';

@Component({
  selector: 'app-mobile',
  templateUrl: './mobile.component.html',
  styleUrls: ['./mobile.component.scss']
})
export  class MobileComponent implements OnInit {
 mobileArray: Array<ImobileProducts> = []
  constructor() { }

  ngOnInit(): void {
    this.mobileArray = mobileProduct;
  }

}
