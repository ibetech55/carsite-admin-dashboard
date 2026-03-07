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

export const routes: Routes = [
    {
        path: "",
        component: SiteTemplate,
        children: [
            {
                path: "",
                component: DashboardComponent,
            },
            {
                path: "view-makes",
                component: ViewMakesComponent,
            },
            {
                path: "view-models",
                component: ViewModelsComponent,
            },
            {
                path: "create-make",
                component: CreateMakesComponent,
            },
            {
                path: "models",
                component: ModelComponent,
            },
            {
                path: "users",
                component: UserComponent,
            },
            {
                path: "create-model",
                component: CreateModelComponent,
            },
        ]
    },
    {
        path: "login",
        component: LoginComponent
    },

];
