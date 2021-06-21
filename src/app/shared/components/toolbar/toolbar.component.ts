import { Router } from '@angular/router';
import {
  Component,
  EventEmitter,
  OnDestroy,
  OnInit,
  Output,
} from '@angular/core';
import { FormControl } from '@angular/forms';
import { Observable, Subject } from 'rxjs';

@Component({
  selector: 'app-toolbar',
  templateUrl: './toolbar.component.html',
  styleUrls: ['./toolbar.component.css'],
})
export class ToolbarComponent implements OnInit, OnDestroy {

  @Output() onTyping = new EventEmitter<string>();

  constructor(private router: Router) { }

  filtroFilme = '';
  debounce: Subject<string> = new Subject<string>();

  myControl = new FormControl();
  
  filteredOptions!: Observable<string[]>;

  ngOnInit(): void {

    this.sendit(this.filtroFilme);

  }

  ngOnDestroy(): void {
    this.debounce.unsubscribe();
  }


  sendit(data: string) {
    console.log("Value", data);
    return this.router.navigateByUrl('/home/' + data);
  }
  clickHome() {
    return this.router.navigateByUrl('/home/');
  }
}
