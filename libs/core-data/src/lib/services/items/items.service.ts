import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from '@env/environment';
import { forkJoin, Observable } from 'rxjs';
import { mergeMap } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class ItemsService {

  constructor(private httpClient: HttpClient) { }

  items(ids: Observable<any>) {
    return ids.pipe(
      mergeMap((obsIds) => forkJoin(obsIds.map((id) => this.getItem(id)))),
    );
  }

  getItem(id): Observable<any> {
    return this.httpClient.get(this.getUrl(`item/${id}.json`));
  }

  private getUrl(model: string) {
    return `${environment.apiEndpoint}${model}`;
  }
}
