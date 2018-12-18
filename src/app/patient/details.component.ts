import { Component, OnInit, Inject } from '@angular/core';

@Component({
  selector: 'app-details',
  templateUrl: './details.component.html',
  styleUrls: ['./details.component.scss']
})
export class DetailsComponent implements OnInit {

  steps: [];
  constructor(@Inject('StepServiceA') public stepServiceA) {
    this.steps = stepServiceA.steps;
   }

  ngOnInit() {
  }

}
