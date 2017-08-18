import { Injectable } from '@angular/core';
import {ToastrService} from 'ngx-toastr';

@Injectable()
export class SharedService {

  constructor(
    private toastr: ToastrService
  ) {
  }

  success(message: string, title?: string) {
    this.toastr.success(message, title);
  }

  error(message: string, title?: string) {
    this.toastr.error(message, title);
  }

  info(message: string, title?: string) {
    this.toastr.error(message, title);
  }

  warning(message: string, title?: string) {
    this.toastr.error(message, title);
  }

}
