import { Component, OnInit } from '@angular/core';
import {Router} from '@angular/router';
import {SharedService} from '../../../shared.service';
import {BsModalRef, BsModalService} from 'ngx-bootstrap';

@Component({
  selector: 'app-create-event',
  templateUrl: './create-event.component.html',
  styleUrls: ['./create-event.component.css']
})
export class CreateEventComponent {

  public isDirty: boolean = true;

  constructor(
    private router: Router
  ) {
  }

  cancel() {
    this.router.navigate(['/events']);
  }

}
