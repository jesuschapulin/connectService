import { Component } from '@angular/core';
import { service } from './local.service';
import "@fontsource/open-sans/500.css"; // All styles included.
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Systemas internos redalyc';
  headers= [      "agdredproy",
                  "alcproyinv",
                  "anioproyinv",
                  "autpadproy",
                  "autproyinv",
                  "ctdintproy",
                  "cvepaispro",
                  "cveproyinv",
                  "feccapproy",
                  "fteproyinv",
                  "infadcproy",
                  "insproyinv",
                  "mesproyinv",
                  "parproyinv",
                  "prdproyinv",
                  "reaproyinv",
                  "rsmproyinv",
                  "titproyinv",
                  "tpoactproy",
                  "tpoproyinv",
                  "urlproyinv",
                  "volproyinv"
                    ];
  data:any;
  stateSidebar="show";
  dataBusqueda= {"TITPROYINV":"",
                  "TPOPROYINV":"",
                  "ANIOPROYINV":"",
                  "MESPROYINV":"",
                  "ALCPROYINV":"",
                  "PERIIN":"",
                  "PERIFIN":""
                    };
  listaTipos= [ "Articulo",
                "Nota periodistica",
                "Capitulo de libro",
                "Reseña",
                "Resumen"
              ];
  listaAlcances= [ "Nacional",
                    "Internacional",
                    "Continental"
  ];
  listaAnios= [ "2021",
                "2020",
                "2019",
                "2018",
                "2017",
                "2016",
                "2015"
  ];
  listaMeses= [ "Enero",
                "Febrero",
                "Marzo",
                "Abril",
                "Mayo",
                "Junio",
                "Julio",
                "Agosto",
                "Septiembre",
                "Octubre",
                "Noviembre",
                "Diciembre"
  ];
  inicios= [ "2021",
                "2020",
                "2019",
                "2018",
                "2017",
                "2016",
                "2015"
  ];
  finales= [ "2021",
                "2020",
                "2019",
                "2018",
                "2017",
                "2016",
                "2015"
  ];
  constructor(
    private service :service
  ){
  }
  ngOnInit(){
    //this.service.getInfo().then(console.log);

    //this.service.getById().then(console.log);

    //this.service.getByTit().then(console.log);

    //this.service.editInfo().then(console.log);

    this.prepareSearch();
    //this.service.sendInfoTest().then(console.log);
  }
  createNewRegister(){
    this.service.sendInfo().then(console.log);
  }
  trySpringService(){
    this.service.getInfoSpring().then(res=>{
      alert(res);
    });
  }
  prepareSearch(){
    console.log("cadena 1 a buscar:::"+this.dataBusqueda.TITPROYINV+"::"+this.dataBusqueda.TPOPROYINV);
    this.service.getInfoFilters(this.dataBusqueda).then(res=>{
      var str=JSON.stringify(res);
      this.data=JSON.parse(str);
      console.log(this.data);
    });
  }
  eventHandler(event:any) {
    if(event.keyCode===13){
      this.prepareSearch();
      console.log(event, event.keyCode, event.keyIdentifier);
    }
 } 
 redimensionarSB(){
  this.stateSidebar=this.stateSidebar=="show" ? "hidden" : this.stateSidebar=="hidden" ? "show" : this.stateSidebar;
 }
}
