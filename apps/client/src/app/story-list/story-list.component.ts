import { Component, Input, OnInit, OnChanges, SimpleChanges } from '@angular/core';
import { ItemsService } from '@hn/core-data';
import { Observable, of } from 'rxjs';
import { getFormattedDate } from '../utils/date-util';

@Component({
  selector: 'hn-story-list',
  templateUrl: './story-list.component.html',
  styleUrls: ['./story-list.component.scss']
})
export class StoryListComponent implements OnInit, OnChanges {
  @Input() currentPageStories: number[];

  storyItems$: Observable<any>;
  constructor(private itemsService: ItemsService,) { }

  ngOnInit(): void {
    this.storyItems$ = this.getStoryItems(of(this.currentPageStories));
  }

  ngOnChanges(changes: SimpleChanges) {
    if(changes.hasOwnProperty('currentPageStories')) {
      this.storyItems$ = this.getStoryItems(of(this.currentPageStories));
    }
  }

  showUserDetails(user) {
    console.log(user);
  }

  getTime(time) {
    return getFormattedDate(time);
  }

  getComments(item) {
    if(item.hasOwnProperty('kids')){
      return (item.kids).length;
    } else {
      return 0;
    }
  }

  getUrl(item) {
    if(item.hasOwnProperty('url')){
      return item.url;
    } else {
      return null;
    }
  }

  getStoryItems(ids: Observable<any>) {
    return this.itemsService.items(ids);
  }
}
