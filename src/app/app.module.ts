import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FilterPipe } from './productos/filter.pipe';
import { FormsModule } from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { InicioComponent } from './inicio/inicio.component';
import { ContactoComponent } from './contacto/contacto.component';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import { ProductosComponent } from './productos/productos.component';
import { ForoComponent } from './foro/foro.component';
import { ForoService } from './service/foro.service';
import { HiloCompletoComponent } from './hilo-completo/hilo-completo.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { DetallesComponent } from './detalles/detalles.component';
import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './register/register.component';
import { PerfilComponent } from './perfil/perfil.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { AuthService } from './service/auth.service';
import { HttpClientModule } from '@angular/common/http';

@NgModule({
  declarations: [
    AppComponent,
    InicioComponent,
    ContactoComponent,
    HeaderComponent,
    FooterComponent,
    ProductosComponent,
    FilterPipe,
    ForoComponent,
    HiloCompletoComponent,
    DetallesComponent,
    LoginComponent,
    RegisterComponent,
    PerfilComponent,
    DashboardComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    NgbModule,
    HttpClientModule
  ],
  providers: [ForoService, AuthService],
  bootstrap: [AppComponent]
})
export class AppModule { }
