import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { InicioComponent } from './inicio/inicio.component';
import { ContactoComponent } from './contacto/contacto.component';
import { ProductosComponent } from './productos/productos.component';
import { ForoComponent } from './foro/foro.component';
import { HiloCompletoComponent } from './hilo-completo/hilo-completo.component';
import { DetallesComponent } from './detalles/detalles.component';
import { RegisterComponent } from './register/register.component';
import { LoginComponent } from './login/login.component';
import { PerfilComponent } from './perfil/perfil.component';


const routes: Routes = [
  {path: '', redirectTo: '/inicio', pathMatch: 'full'},
  { path: 'inicio', component: InicioComponent },
  { path: 'productos', component: ProductosComponent },
  { path: 'contacto', component: ContactoComponent },
  { path: 'foro', component: ForoComponent},
  { path: 'registro', component: RegisterComponent},
  { path: 'login', component: LoginComponent},
  { path: 'hilo/:id', component: HiloCompletoComponent},
  { path: 'detalle-producto/:id', component: DetallesComponent},
  { path: 'perfil', component: PerfilComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
