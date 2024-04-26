import { Component, OnInit } from '@angular/core';
declare var paypal: any;


@Component({
  selector: 'app-checkout2',
  templateUrl: './checkout2.component.html',
  styleUrls: ['./checkout2.component.css']
})
export class Checkout2Component implements OnInit {
  
  ngOnInit() {
    paypal.Buttons({
      createOrder: (data: any, actions: any) => {
        return actions.order.create({
          purchase_units: [{
            amount: {
              value: '150.00',
              currency_code: 'USD'
            }
          }]
        });
      },
      onApprove: (data: any, actions: any) => {
        return actions.order.capture().then((details: any) => {
          alert('تم الدفع بنجاح من ' + details.payer.name.given_name);
        });
      }
    }).render('#paypal-button-container');
  }
}