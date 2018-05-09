import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

@Injectable({
	providedIn: 'root'
})
export class ResourceService {
	constructor(private httpClient: HttpClient) {}
	getResource<T>(url: string, property: string): Observable<T[]> {
		return this.httpClient.get<T[]>(url).pipe(
			map((collection: T[]) => {
				return collection.map((data) => data[property]);
			})
		);
	}
}
