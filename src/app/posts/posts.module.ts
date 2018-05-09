import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PostComponent } from './post/post.component';
import { SharedModule } from '../shared/shared.module';
import { HttpClientModule } from '@angular/common/http';

@NgModule({
	imports: [ CommonModule, SharedModule ],
	exports: [ PostComponent ],
	declarations: [ PostComponent ]
})
export class PostsModule {}
