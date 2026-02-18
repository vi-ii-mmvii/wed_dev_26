import { Component, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ActivatedRoute } from '@angular/router';
import { HousingService } from '../housing';
import { HousingLocation } from '../housinglocation';

@Component({
  selector: 'app-details',
  imports: [CommonModule],
  templateUrl: './details.html',
  styleUrl: './details.css',
})
export class Details {
  route = inject(ActivatedRoute);
  housingService = inject(HousingService);
  housingLocation: HousingLocation | undefined;

  constructor() {
    const id = Number(this.route.snapshot.params['id']);
    this.housingLocation = this.housingService.getHousingLocationById(id);
  }

  submitApplication(firstName: string, lastName: string, email: string) {
    this.housingService.submitApplication(firstName, lastName, email);
  }
}
