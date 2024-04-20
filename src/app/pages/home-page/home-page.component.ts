import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { MainLayoutComponent } from '../../shared/layouts/main-layout/main-layout.component';
import { ModelsListComponent } from '../../features/models/components/models-list/models-list.component';
import { BrandListComponent } from '../../features/brands/components/brand-list/brand-list.component';
import { RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-home-page',
  standalone: true,
  imports: [CommonModule,MainLayoutComponent,ModelsListComponent,BrandListComponent,RouterOutlet],
  templateUrl: './home-page.component.html',
  styleUrl: './home-page.component.css'
})
export class HomePageComponent {











  /*counter : number = 0;

  sumCounter( sum : number){
    this.counter += sum;
  }*/
}
