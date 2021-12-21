import { FormsModule, NgForm } from '@angular/forms';
import { Component, OnInit, ViewChild } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-add-property',
  templateUrl: './add-property.component.html',
  styleUrls: ['./add-property.component.css']
})
export class AddPropertyComponent implements OnInit {
  @ViewChild('Form') addPropertyForm!: NgForm
  constructor(private router: Router, private forms: FormsModule) { }

  ngOnInit(): void {
  }

  onBack() {
    this.router.navigate(['/'])
  }

  onSubmit(){
    console.log(this.addPropertyForm)
  }
}
