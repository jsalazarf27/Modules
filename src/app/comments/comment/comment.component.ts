import { Observable } from 'rxjs';
import { ResourceService } from './../../shared/resources.service';
import { Component, OnInit } from '@angular/core';

@Component({
	selector: 'app-comment',
	templateUrl: './comment.component.html',
	styleUrls: [ './comment.component.css' ]
})
export class CommentComponent implements OnInit {
	url = 'https://jsonplaceholder.typicode.com/comments';
	comments$: Observable<Comment[]>;
	constructor(private resourceService: ResourceService) {
		this.comments$ = this.resourceService.getResource<Comment>(this.url, 'body');
	}

	ngOnInit() {}
}
