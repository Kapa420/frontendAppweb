import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './components/header/header.component';
import { BodyMainpageComponent } from './components/body-mainpage/body-mainpage.component';
import { InicioSesionComponent } from './components/inicio-sesion/inicio-sesion.component';
import { RegistroComponent } from './components/registro/registro.component';
import { AdministradoresMainpageComponent } from './components/administradores-mainpage/administradores-mainpage.component';
import { TablaProductosAdminComponent } from './components/tabla-productos-admin/tabla-productos-admin.component';
import { TablaClientesAdminComponent } from './components/tabla-clientes-admin/tabla-clientes-admin.component';
import { TablaProductoresAdminComponent } from './components/tabla-productores-admin/tabla-productores-admin.component';
import { HttpClientModule } from '@angular/common/http'
import { ClientesService } from './services/clientes-admin/clientes.service';
import { BotonModalAgregarClienteComponent } from './components/boton-modal-agregar-cliente/boton-modal-agregar-cliente.component';
import { FormularioAgregarClienteComponent } from './components/formulario-agregar-cliente/formulario-agregar-cliente.component';
import { SesionClientesComponent } from './components/sesion-clientes/sesion-clientes.component';
import { SesionProductoresComponent } from './components/sesion-productores/sesion-productores.component';
import { NotfoundComponent } from './components/notfound/notfound.component';
import { DatosClientesComponent } from './components/datos-clientes/datos-clientes.component';
import { ActualizarDatosComponent } from './components/actualizar-datos/actualizar-datos.component';
import { DatosProductoresComponent } from './components/datos-productores/datos-productores.component';
import { ActDatosProductoresComponent } from './components/act-datos-productores/act-datos-productores.component';
import { ReactiveFormsModule } from '@angular/forms';
import { ModalActualizadoComponent } from './components/modal-actualizado/modal-actualizado.component';
import { FooterComponent } from './components/footer/footer.component';


@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    BodyMainpageComponent,
    InicioSesionComponent,
    RegistroComponent,
    AdministradoresMainpageComponent,
    TablaProductosAdminComponent,
    TablaClientesAdminComponent,
    TablaProductoresAdminComponent,
    BotonModalAgregarClienteComponent,
    FormularioAgregarClienteComponent,
    SesionClientesComponent,
    SesionProductoresComponent,
    NotfoundComponent,
    DatosClientesComponent,
    ActualizarDatosComponent,
    DatosProductoresComponent,
    ActDatosProductoresComponent,
    ModalActualizadoComponent,
    FooterComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule,
  ],

  providers: [ClientesService],
  bootstrap: [AppComponent]
})
export class AppModule { }
