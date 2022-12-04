import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { FormBuilder } from '@angular/forms';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'app-viewuser',
  templateUrl: './viewuser.component.html',
  styleUrls: ['./viewuser.component.css']
})
export class ViewuserComponent implements OnInit {

  @Input()
  public userInfo:any;

  @Output()
  public closeModel: EventEmitter<void> = new EventEmitter<void>();


  constructor(private modalService: NgbModal,  private fb:FormBuilder) { }

  ngOnInit(): void {
  }

  close() {
    this.closeModel.emit();
  }

}
