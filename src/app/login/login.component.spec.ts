import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { LoginComponent } from './login.component';
import { Router } from '@angular/router';
import { AppService } from '../app.service';
import { Injectable } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MatCardModule,
  MatFormFieldModule } from '@angular/material';

@Injectable()
class MockAppService {}

@Injectable()
class MockRouter {}

describe('LoginComponent', () => {
  let component;
  let fixture: ComponentFixture<LoginComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [
        FormsModule,
        ReactiveFormsModule,
        MatCardModule,
        MatFormFieldModule
      ],
      declarations: [ LoginComponent ],
      providers: [
        { provide: Router, useClass: MockRouter },
        { provide: AppService, useClass: MockAppService },
      ]
    }).overrideComponent(LoginComponent, {})
    .compileComponents();

    fixture = TestBed.createComponent(LoginComponent);
    component = fixture.debugElement.componentInstance;
  }));

  afterEach(() => {
    component.ngOnDestroy = function() {};
    fixture.destroy();
  });

  it('should create', async () => {
    expect(component).toBeTruthy();
  });

  it('should valid submit', async () => {
    component.error = '';
    component.form = { valid: true };
    component.isValidCredentials = jest.fn().mockReturnValue(true);
    component.router.navigate = jest.fn();
    component.service = component.service || {};
    component.submit();
    expect(component.error).toBeFalsy();
  });

  it('should invalid submit', async () => {
    component.error = '';
    component.form = { valid: false };
    component.isValidCredentials = jest.fn().mockReturnValue(true);
    component.router.navigate = jest.fn();
    component.service = component.service || {};
    component.submit();
    expect(component.error).toBeTruthy();
  });

});
