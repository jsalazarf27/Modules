import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CardComponent } from './card/card.component';
import { HttpClientModule } from '@angular/common/http';
import { ResourceService } from './resources.service';

@NgModule({
	imports: [ CommonModule, HttpClientModule ],
	declarations: [ CardComponent ],
	exports: [ CardComponent ],
	providers: [ ResourceService ]
})
export class SharedModule {}
