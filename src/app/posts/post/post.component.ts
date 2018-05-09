import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { ResourceService } from '../../shared/resources.service';
import { Post } from '../post.interface';

@Component({
	selector: 'app-post',
	templateUrl: './post.component.html',
	styleUrls: [ './post.component.css' ]
})
export class PostComponent implements OnInit {
	url = 'https://jsonplaceholder.typicode.com/posts';
	posts$: Observable<Post[]>;
	constructor(private resourceService: ResourceService) {
		this.posts$ = this.resourceService.getResource<Post>(this.url, 'title');
	}

	ngOnInit() {}
}
