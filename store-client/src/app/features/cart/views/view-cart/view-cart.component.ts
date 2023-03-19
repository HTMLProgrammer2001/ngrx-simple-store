import {Component, OnDestroy, OnInit} from '@angular/core';
import {CartFacadeService} from '../../services/cart.facade.service';
import {ReplaySubject} from 'rxjs';
import {ActivatedRoute} from '@angular/router';

@Component({
  selector: 'app-view-cart',
  templateUrl: './view-cart.component.html',
  styleUrls: ['./view-cart.component.scss']
})
export class ViewCartComponent implements OnInit, OnDestroy {
  private onDestroy = new ReplaySubject(1);

  constructor(
    private route: ActivatedRoute,
    private cartFacadeService: CartFacadeService,
  ) {
  }

  ngOnInit() {
  }

  ngOnDestroy() {
    this.onDestroy.next(null);
    this.onDestroy.complete();
  }
}
