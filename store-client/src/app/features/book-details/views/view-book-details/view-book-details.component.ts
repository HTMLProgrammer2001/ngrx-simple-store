import {Component, OnDestroy, OnInit} from '@angular/core';
import {BookDetailsFacadeService} from '../../services/book-details.facade.service';
import {ReplaySubject} from 'rxjs';
import {BookDetailsMapperService} from '../../services/book-details.mapper.service';
import {ActivatedRoute} from '@angular/router';

@Component({
  selector: 'app-view-book-details',
  templateUrl: './view-book-details.component.html',
  styleUrls: ['./view-book-details.component.scss']
})
export class ViewBookDetailsComponent implements OnInit, OnDestroy {
  public bookId: number;
  private onDestroy = new ReplaySubject(1);

  constructor(
    private route: ActivatedRoute,
    private bookFacadeService: BookDetailsFacadeService,
    private bookMapperService: BookDetailsMapperService
  ) {
    this.bookId = Number(this.route.snapshot.paramMap.get('id'));
  }

  ngOnInit() {
  }

  ngOnDestroy() {
    this.onDestroy.next(null);
    this.onDestroy.complete();
  }
}
