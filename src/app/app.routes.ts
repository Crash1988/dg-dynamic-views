import { Routes } from '@angular/router';
import { JsonViewEditorComponent } from './json-view-editor/json-view-editor.component';

export const routes: Routes = [
    {
        path: 'json-editor',
        title: 'Dynamic View',
        component: JsonViewEditorComponent,
        // resolve: { viewFields: DynamicFieldViewResolver },
        pathMatch: 'full',
      },
    {
        path: '**',
        redirectTo: 'json-editor',
        pathMatch: 'full',

    }

];
