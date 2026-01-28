import { Routes } from '@angular/router';
import { BlogComponent } from './components/blog/blog.component';
import { PrivacyComponent } from './components/privacy/privacy.component';
import { TermsComponent } from './components/terms/terms.component';
import { ContactComponent } from './components/contact/contact.component';

export const routes: Routes = [
    { path: '', component: BlogComponent },
    { path: 'privacy', component: PrivacyComponent },
    { path: 'terms', component: TermsComponent },
    { path: 'contact', component: ContactComponent },
    { path: '**', redirectTo: '' }
];
