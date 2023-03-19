import {Component, OnDestroy, OnInit} from '@angular/core';
import {ReplaySubject} from 'rxjs';
import {ActivatedRoute} from '@angular/router';

@Component({
  selector: 'app-view-checkout',
  templateUrl: './view-checkout.component.html',
  styleUrls: ['./view-checkout.component.scss']
})
export class ViewCheckoutComponent implements OnInit, OnDestroy {
  private onDestroy = new ReplaySubject(1);

  constructor(
    private route: ActivatedRoute,
  ) {
  }

  ngOnInit() {
  }

  ngOnDestroy() {
    this.onDestroy.next(null);
    this.onDestroy.complete();
  }
}
