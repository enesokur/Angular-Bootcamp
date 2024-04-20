import { Component } from '@angular/core';
import { CreateBrandFormComponent } from '../../features/brands/components/create-brand-form/create-brand-form.component';

@Component({
  selector: 'app-create-brand-page',
  standalone: true,
  imports: [CreateBrandFormComponent],
  templateUrl: './create-brand-page.component.html',
  styleUrl: './create-brand-page.component.css'
})
export class CreateBrandPageComponent {

}
