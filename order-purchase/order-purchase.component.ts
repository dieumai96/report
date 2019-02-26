import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'ngx-order-purchase',
  templateUrl: './order-purchase.component.html',
  styleUrls: ['./order-purchase.component.scss']
})
export class OrderPurchaseComponent implements OnInit {

  constructor() { }

  ngOnInit() {
    $('body').removeAttr('style');
    $('.pace-active').css('display', 'none');
  }

}
