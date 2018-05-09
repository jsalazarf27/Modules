import { SharedModule } from './../shared/shared.module';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CommentComponent } from './comment/comment.component';
import { HttpClientModule } from '@angular/common/http';

@NgModule({
	imports: [ CommonModule, SharedModule, HttpClientModule ],
	exports: [ CommentComponent ],
	declarations: [ CommentComponent ]
})
export class CommentsModule {}
