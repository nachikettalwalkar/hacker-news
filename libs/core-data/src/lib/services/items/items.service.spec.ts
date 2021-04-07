import { TestBed } from '@angular/core/testing';
import { ItemsService } from './items.service';
import { Item } from '@hn/api-interfaces';
import {
  HttpClientTestingModule,
  HttpTestingController,
} from '@angular/common/http/testing';
import { mockItem } from '@hn/testing';


describe('ItemsService', () => {
  let service: ItemsService;
  const model = 'item';
  let httpTestingController: HttpTestingController;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [HttpClientTestingModule],
    });
    httpTestingController = TestBed.inject(HttpTestingController);
    service = TestBed.inject(ItemsService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });


  describe('should call http.', () => {
    it('get() on service.items()', () => {
      service.items(mockItem).subscribe((res) => {
        expect(res).toEqual(mockItem);
      });

      const req = httpTestingController.expectOne(service['getUrl'](model));
      req.flush([mockItem]);
      httpTestingController.verify();
    });

    it('get(url(model.id)) on service.find(model.id)', () => {
      service.getItem(mockItem.id).subscribe((res) => {
        expect(res).toEqual(mockItem);
      });

      const req = httpTestingController.expectOne(
        service['getUrlWithId'](mockItem.id)
      );
      req.flush(mockItem);
      httpTestingController.verify();
    });
  });
});
