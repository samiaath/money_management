import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class ExpenseService {
  private apiUrl = 'http://localhost:5000/api/depenses'; // Backend route for depenses

  constructor(private http: HttpClient) {}
  addExpense(expense: { amount: string, date: string, category: string, description: string }) {
    return this.http.post(this.apiUrl, expense);
  }
  getAllDepenses(): Observable<any> {
    return this.http.get<any>(this.apiUrl);
  }
  

  createDepense(newDepense: any): Observable<any> {
    return this.http.post(this.apiUrl, newDepense);
  }

  getDepenseById(id: number): Observable<any> {
    return this.http.get<any>(${this.apiUrl}/${id});
  }

  

  deleteDepense(id: number): Observable<any> {
    return this.http.delete<any>(${this.apiUrl}/${id});
  }
}
localhost