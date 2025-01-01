import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root', // Make sure the service is available throughout the application
})
export class SavingsService {
  private currentSavingsSubject = new BehaviorSubject<number>(0); // Initial savings value
  currentSavings$ = this.currentSavingsSubject.asObservable(); // Observable for components to subscribe to

  constructor() {}

  // Method to update savings
  updateSavings(newSavings: number): void {
    this.currentSavingsSubject.next(newSavings); // Update the savings value
  }

  // Method to get current savings
  getCurrentSavings(): number {
    return this.currentSavingsSubject.getValue();
  }
}

