import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './components/header/header.component';
import { FooterComponent } from './components/footer/footer.component';
import { BodyMainpageComponent } from './components/body-mainpage/body-mainpage.component';
import { InicioSesionComponent } from './components/inicio-sesion/inicio-sesion.component';
import { RegistroComponent } from './components/registro/registro.component';
import { AdministradoresMainpageComponent } from './components/administradores-mainpage/administradores-mainpage.component';
import { TablaProductosAdminComponent } from './components/tabla-productos-admin/tabla-productos-admin.component';
import { TablaClientesAdminComponent } from './components/tabla-clientes-admin/tabla-clientes-admin.component';
import { TablaProductoresAdminComponent } from './components/tabla-productores-admin/tabla-productores-admin.component';
import { HttpClientModule } from '@angular/common/http'
import { ClientesService } from './services/clientes-admin/clientes.service';
@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    BodyMainpageComponent,
    InicioSesionComponent,
    RegistroComponent,
    AdministradoresMainpageComponent,
    TablaProductosAdminComponent,
    TablaClientesAdminComponent,
    TablaProductoresAdminComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule
  ],
  providers: [ClientesService],
  bootstrap: [AppComponent]
})
export class AppModule { }
