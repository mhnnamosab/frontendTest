import { ComponentFixture, TestBed, async } from '@angular/core/testing';
import { Observable, of } from 'rxjs';
import { AdsSectionComponent } from './ads-section.component';
import { FakeApiService } from 'src/app/shared/services/fakeApi/fakeApi.service';

describe('AdsSectionComponent', () => {
  let component: AdsSectionComponent;
  let fixture: ComponentFixture<AdsSectionComponent>;
  let fakeApiServiceSpy: jasmine.SpyObj<FakeApiService>;

  beforeEach(() => {
    const spy = jasmine.createSpyObj('FakeApiService', ['get']);

    TestBed.configureTestingModule({
      declarations: [AdsSectionComponent],
      providers: [{ provide: FakeApiService, useValue: spy }],
    }).compileComponents();

    fakeApiServiceSpy = TestBed.inject(FakeApiService) as jasmine.SpyObj<FakeApiService>;
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AdsSectionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create the component', () => {
    expect(component).toBeTruthy();
  });

  it('should fetch Ads data', () => {
    const mockData = [
      {
        "id":1,
        "url":"assets/images/ads1.png"   
    },
    {
        "id":2,
        "url":"assets/images/ads2.png"   
    },
    {
        "id":3,
        "url":"assets/images/ads3.png"   
    },
    {
        "id":4,
        "url":"assets/images/ads4.png"   
    },
    {
        "id":5,
        "url":"assets/images/ads5.png"   
    },
    {
        "id":6,
        "url":"assets/images/ads6.png"   
    },
    {
        "id":7,
        "url":"assets/images/ads7.png"   
    }
    ]
    fakeApiServiceSpy.get.and.returnValue(of(mockData));

    component.ngOnInit();
    component.$adsList.subscribe(res => {
      expect(res).toEqual(mockData);
    })
  });


});
