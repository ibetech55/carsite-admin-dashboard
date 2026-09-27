import { Routes } from '@angular/router';
import { DashboardComponent } from './components/pages/dashboard/dashboard.component';
import { UserComponent } from './components/pages/user/user.component';
import { ModelComponent } from './components/pages/model-component/model-component';
import { ViewMakesComponent } from './pages/view-makes-component/view-makes-component';
import { CreateMakesComponent } from './pages/create-makes-component/create-makes-component';
import { ViewModelsComponent } from './pages/view-models-component/view-models-component';
import { LoginComponent } from './pages/login-component/login-component';
import { SiteTemplate } from './components/template/site-template/site-template';
import { CreateModelComponent } from './pages/create-model-component/create-model-component';
import { MakeDetailsComponent } from './pages/make-details-component/make-details-component';
import { ModelDetailsComponent } from './pages/model-details-component/model-details-component';
import { ImportMakes } from './components/make/import-makes/import-makes';
import { ImportModels } from './components/models/import-models/import-models';
import { ImportMakesComponent } from './pages/import-makes-component/import-makes-component';
import { ImportModelsComponent } from './pages/import-models-component/import-models-component';

export const routes: Routes = [
    {
        path: "",
        component: SiteTemplate,
        children: [
            {
                path: "admin",
                component: DashboardComponent,
            },
            {
                path: "admin/view-makes",
                component: ViewMakesComponent,
            },
            {
                path: "admin/view-make/:makeCode",
                component: MakeDetailsComponent,
            },
            {
                path: "admin/view-models",
                component: ViewModelsComponent,
            },
            {
                path: "admin/view-model/:modelCode",
                component: ModelDetailsComponent,
            },
            {
                path: "admin/create-make",
                component: CreateMakesComponent,
            },
            {
                path: "admin/models",
                component: ModelComponent,
            },
            {
                path: "admin/users",
                component: UserComponent,
            },
            {
                path: "admin/create-model",
                component: CreateModelComponent,
            },
            {
                path: "admin/import-makes",
                component: ImportMakesComponent,
            },
            {
                path: "admin/import-models",
                component: ImportModelsComponent,
            }
        ]
    },
    {
        path: "admin/login",
        component: LoginComponent
    },

];
