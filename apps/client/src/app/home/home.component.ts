import { Component, OnInit } from '@angular/core';
import { StoriesService } from '@hn/core-data';
import { Router, Event, NavigationEnd } from '@angular/router';

@Component({
  selector: 'hn-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {
  stories: number[] = [];
  storyChunks: number[][];
  currentPageStories: number[] = [];
  currentPageName: string;

  pageSize: number = 10;
  pageSizeOptions: number[] = [10, 20, 50];

  constructor(
    private storiesService: StoriesService,
    private router: Router,) {
    router.events.subscribe((event: Event) => {
      if (event instanceof NavigationEnd) {
        switch(event.url) {
          case "/top-stories":
            this.currentPageName = "Top Stories";
            this.getTopStories();
            break;
          case "/new-stories":
            this.currentPageName = "New Stories";
            this.getNewStories();
            break;
          case "/best-stories":
            this.currentPageName = "Editor's Pick";
            this.getBestStories();
            break;
          case "/":
            this.currentPageName = "Top Stories";
            this.getTopStories();
            break;
          default:
            this.currentPageName = "Top Stories";
            this.getTopStories();
            break;
        }
      }
    });
  }

  ngOnInit(): void {
    
  }

  getIdsFromStories(ids: number[], pageSize: number): number[][] {
    return ids.map((e, i) => {
      return i % pageSize === 0 ? this.stories.slice(i, i + pageSize) : null;
    }).filter(e => { return e; });
  }

  handlePage(e) {
    if(e.pageIndex === 0) {
      this.storyChunks = [];
      this.currentPageStories = this.getIdsFromStories(this.stories, e.pageSize)[0];
    } else {
      this.storyChunks = this.getIdsFromStories(this.stories, e.pageSize);
      this.currentPageStories = this.getStoryChunkAtIndex(e.pageIndex);
    }
  }

  getStoryChunkAtIndex(index: number) {
    return this.storyChunks[index];
  }

  getBestStories() {
    this.storiesService.bestStoryIds().subscribe((ids) => {
      this.stories = ids;
      this.currentPageStories = this.getIdsFromStories(ids, 10)[0];
    });
  }

  getNewStories() {
    this.storiesService.newStoryIds().subscribe((ids) => {
      this.stories = ids;
      this.currentPageStories = this.getIdsFromStories(ids, 10)[0];
    });
  }

  getTopStories() {
    this.storiesService.topStoryIds().subscribe((ids) => {
      this.stories = ids;
      this.currentPageStories = this.getIdsFromStories(ids, 10)[0];
    });
  }
}
