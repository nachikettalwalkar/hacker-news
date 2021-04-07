import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from '@env/environment';

@Injectable({
  providedIn: 'root'
})
export class StoriesService {
  constructor(private httpClient: HttpClient) {}

  topStoryIds() {
    return this.httpClient.get<number[]>(this.getUrl('topstories'));
  }

  bestStoryIds() {
    return this.httpClient.get<number[]>(this.getUrl('beststories'));
  }

  newStoryIds() {
    return this.httpClient.get<number[]>(this.getUrl('newstories'));
  }

  private getUrl(model: string) {
    return `${environment.apiEndpoint}${model}.json`;
  }
}
