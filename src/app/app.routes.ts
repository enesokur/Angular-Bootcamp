import { Routes } from '@angular/router';
import { HomePageComponent } from './pages/home-page/home-page.component';
import { NotFoundPageComponent } from './pages/not-found-page/not-found-page.component';
import { CreateBrandPageComponent } from './pages/create-brand-page/create-brand-page.component';
import { BrandListComponent } from './features/brands/components/brand-list/brand-list.component';

export const routes: Routes = [
    {
        path: '',
        pathMatch: 'full',
        redirectTo: 'home',
    },
    {
        path: 'home',
        component: HomePageComponent,
        children: [
            {
                path: 'brands',
                component: BrandListComponent
            },
            {
                path: 'createbrands',
                component: CreateBrandPageComponent
            }
        ]
    },
    {
        path: '**',
        component: NotFoundPageComponent
    }
];
