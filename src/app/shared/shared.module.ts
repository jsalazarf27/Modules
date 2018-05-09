import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CardComponent } from './card/card.component';
import { ResourceService } from './resources.service';
import { HttpClientModule } from '@angular/common/http';

@NgModule({
	imports: [ CommonModule, HttpClientModule ],
	declarations: [ CardComponent ],
	exports: [ CardComponent ],
	providers: [ ResourceService ]
})
export class SharedModule {}
