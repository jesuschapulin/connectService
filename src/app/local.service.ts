import { HttpClient } from '@angular/common/http';
import { Injectable, NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

@Injectable({
    providedIn:'root'
})
export class service{
    constructor(
        private http :HttpClient
      ){
      }
      getInfo() { 
        return this.http.get<any>('http://127.0.0.1:9085/boardInvestigacion/service/ds/getDataPrueba').toPromise()
      }
	  getInfoSpring() { 
        return this.http.get<any>('http://localhost:4000/postulacion/revista/').toPromise()
      }
      getInfoFilters(data:any) { 
		var str=JSON.stringify(data);
		var dataBusqueda=JSON.parse(str);
        var json=   "{\"TITPROYINV\":\""+dataBusqueda.TITPROYINV+"\","+
						"\"TPOPROYINV\":\""+dataBusqueda.TPOPROYINV+"\","+
						"\"ANIOPROYINV\":\""+dataBusqueda.ANIOPROYINV+"\","+
						"\"MESPROYINV\":\""+dataBusqueda.MESPROYINV+"\","+
						"\"ALCPROYINV\":\""+dataBusqueda.ALCPROYINV+"\","+
						"\"PERIIN\":\""+dataBusqueda.PERIIN+"\","+
						"\"PERIFIN\":\""+dataBusqueda.PERIFIN+"\""+
					"}";
        var url='http://127.0.0.1:9085/boardInvestigacion/service/ds/getDataByFilters/'+json;
        return this.http.get<any>(url).toPromise()
      }
      getById(){
        return this.http.get<any>('http://127.0.0.1:9085/boardInvestigacion/service/ds/getDataProyById/34').toPromise()
      }
      getByTit(){
        var url='http://127.0.0.1:9085/boardInvestigacion/service/ds/getDataProyByTitle/'+
        '{"titulo":"solo politica nacional"}'
        return this.http.get<any>(url).toPromise()
      }
      sendInfo() { 
        var jsonInsert='{"TITPROYINV":"prueba 3 de angel",'+
						'"TPOPROYINV":"Artículo",'+
						'"ANIOPROYINV":2021,'+
						'"MESPROYINV":"Octubre",'+
						'"RSMPROYINV":"en este articulo se abordan distintas formas de hacer politica con un enfoque responsable y practico",'+
						'"AUTPROYINV":"jesus",'+
						'"URLPROYINV":"articulo.oa",'+
						'"VOLPROYINV":"01",'+
						'"FTEPROYINV":"Libros",'+
						'"INSPROYINV":"UAEM",'+
						'"AUTPADPROY":"jesus",'+
						'"PARPROYINV":"ninguna",'+
						'"CTDINTPROY":"1",'+
						'"ALCPROYINV":"nacional",'+
						'"PRDPROYINV":"liberado",'+
						'"FECCAPPROY":"",'+
						'"REAPROYINV":"1",'+
						'"AGDREDPROY":"si",'+
						'"TPOACTPROY":"comunicación",'+
						'"INFADCPROY":"Este articulo es una prueba",'+
						'"CVEPAISPRO":"5"'+
						'}';
            var url='http://127.0.0.1:9085/boardInvestigacion/service/ds/sendRegisterOfProy/'+jsonInsert
        return this.http.post<any>(url,"").toPromise()
      }
      editInfo() { 
        var jsonUpdate='{"CVEPROYINV":"62",'+
						'"TITPROYINV":"política social",'+
						'"TPOPROYINV":"Nota periodistica",'+
						'"ANIOPROYINV":"2021",'+
						'"MESPROYINV":"Octubre",'+
						'"RSMPROYINV":"en este articulo se abordan distintas formas de hacer politica con un enfoque responsable y practico",'+
						'"AUTPROYINV":"jesus",'+
						'"URLPROYINV":"articulo.oa",'+
						'"VOLPROYINV":"01",'+
						'"FTEPROYINV":"Libros",'+
						'"INSPROYINV":"UAEM",'+
						'"AUTPADPROY":"jesus",'+
						'"PARPROYINV":"ninguna",'+
						'"CTDINTPROY":"1",'+
						'"ALCPROYINV":"nacional",'+
						'"PRDPROYINV":"liberado",'+
						'"FECCAPPROY":"",'+
						'"REAPROYINV":"1",'+
						'"AGDREDPROY":"si",'+
						'"TPOACTPROY":"comunicación",'+
						'"INFADCPROY":"Este articulo es una prueba",'+
						'"CVEPAISPRO":"30"'+
						'}';
            var url='http://127.0.0.1:9085/boardInvestigacion/service/ds/sendUpdateOfProy/'+jsonUpdate
        return this.http.post<any>(url,"").toPromise()
      }
}