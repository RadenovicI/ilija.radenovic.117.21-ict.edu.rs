function dohvatanjeJsonPodataka(jsonPutanja,niz){
    $.ajax({
        url:"assets/json/"+jsonPutanja,
        method:"get",
        dataType: "json",
        success:niz,
        error:function(jqXHR,exception){
            var msg = '';
            if (jqXHR.status === 0) {
            msg = 'Not connect.\n Verify Network.';
            } else if (jqXHR.status == 404) {
            msg = 'Requested page not found. [404]';
            } else if (jqXHR.status == 500) {
            msg = 'Internal Server Error [500].';
            } else if (exception === 'parsererror') {
            msg = 'Requested JSON parse failed.';
            } else if (exception === 'timeout') {
            msg = 'Time out error.';
            } else if (exception === 'abort') {
            msg = 'Ajax request aborted.';
            } else {
            msg = 'Uncaught Error.\n' + jqXHR.responseText;
            }
            console.log(msg);
        },
    });
}

function ispisNavigacije(nizObjekata){
    var ispis = "";
    for(let objekat of nizObjekata){
        ispis += `<li class="nav-item">
        <a class="nav-link" href=${objekat.link}>${objekat.text}</a>
        </li>`;
    }
    document.querySelector("#navbar-center").innerHTML = ispis;
}

function ispisRadnoVreme(nizObjekata){
    var ispis = `<h3 class="section-title">Radno vreme:</h3>`;
    for(let objekat of nizObjekata){
        ispis +=`<p class="mb-1 font-weight-bold">${objekat.dani}<span
                class="font-weight-normal pl-2 text-muted">${objekat.pocetakRadnogVremena} ${objekat.krajRadnogVremena ? `- ` + objekat.krajRadnogVremena : ""}</span></p>`
    }
    document.querySelector("#about-top-left").innerHTML = ispis;
}

function aboutSlike(nizObjekata){
    var ispis="";
    for(let objekat of nizObjekata){
        if(objekat.alt == "Pica" || objekat.alt == "Hot Dog"){
            ispis+=`<div class="col">
            <img alt="${objekat.alt}" src="${objekat.src}" class="square-size" class="w-100 rounded shadow">
            </div>`;
            document.getElementById("about-top-right").innerHTML = ispis;  
        }
    }
}

function aboutSlike2(nizObjekata){
    var ispis = "";
    for(let objekat of nizObjekata){
        if(objekat.alt == "Sendvic" || objekat.alt == "Sendvic - otvoren"){
            ispis+=`<div class="col">
            <img alt="${objekat.alt}" src="${objekat.src}" class="square-size" class="w-100 rounded shadow">
            </div>`;
            document.getElementById("about-bottom-left").innerHTML = ispis;  
        }
    }
}

function featured(nizObjekata){
    var ispis=""
    if(nizObjekata != null){
        for(let objekat of nizObjekata){
            if(objekat.id == 3 || objekat.id == 6 || objekat.id == 9 || objekat.id == 2){
                ispis+=`<div class="col-md-6 mb-4">
                <div class="custom-list">
                    <div class="img-holder">
                        <img src="${objekat.src}" alt="${objekat.alt}">
                    </div>
                    <div class="info">
                        <div class="head clearfix">
                        <h5 class="title float-left">${objekat.naziv}</h5>`
                        for(let obj of objekat.velicina){
                            if(obj.cm == 50){continue;}
                            ispis+=`<p class="float-right text-primary">${obj.cm} cm - ${obj.cena}</p>
                            </div>
                            <div class="body">`
                    }
                    ispis+=`<p>${objekat.sastojci}</p></div></div></div></div>`
            }
        }
    }
    document.getElementById("block-featured").innerHTML=ispis;
}

function filtriranjeJelovnik(nizElemenata){
    let filtriraniNiz = [];

    if(document.getElementById("filter-dostava").checked && document.getElementById("filter-sendvici").checked && document.getElementById("filter-pice").checked){
        filtriraniNiz = nizElemenata.filter(el=>el.besplatnaDostava == true);
    }
    else if(document.getElementById("filter-dostava").checked){
        if(document.getElementById("filter-pice").checked){
            filtriraniNiz = nizElemenata.filter(el=>el.besplatnaDostava == true);
            filtriraniNiz = filtriraniNiz.filter(el=>el.kategorija == "Pice");
        }
        else if(document.getElementById("filter-sendvici").checked){
            filtriraniNiz = nizElemenata.filter(el=>el.besplatnaDostava == true);
            filtriraniNiz = filtriraniNiz.filter(el=>el.kategorija == "Sendviči");
        }
        else filtriraniNiz = nizElemenata.filter(el => el.besplatnaDostava == true);
    }

    else if (document.getElementById("filter-sendvici").checked){
        if(document.getElementById("filter-pice").checked){
            filtriraniNiz = nizElemenata;
        }
        else if(document.getElementById("filter-dostava").checked){
            filtriraniNiz = nizElemenata.filter(el=>el.besplatnaDostava == true);
            filtriraniNiz = filtriraniNiz.filter(el=>el.kategorija == "Sendviči");
        }
        else filtriraniNiz = nizElemenata.filter(el=>el.kategorija == "Sendviči")
    }

    else if (document.getElementById("filter-pice").checked){
        if(document.getElementById("filter-sendvici").checked){
            filtriraniNiz = nizElemenata;
        }
        else if(document.getElementById("filter-dostava").checked){
            filtriraniNiz = nizElemenata.filter(el=>el.besplatnaDostava == true);
            filtriraniNiz = filtriraniNiz.filter(el=>el.kategorija == "Pice");
        }
        else filtriraniNiz = nizElemenata.filter(el=>el.kategorija == "Pice")
    }
    else {
        return nizElemenata;
    }

    return filtriraniNiz;
}

function sortJelovnik(nizElemenata){
    var sortiraniElementi = [];
    let tipSortiranja = $("#sortiranje").val();

    if(tipSortiranja=="0"){
        sortiraniElementi = nizElemenata;
    }
    else{
        sortiraniElementi = nizElemenata.sort(function(a,b){

            if(tipSortiranja=="1"){
                if(a.naziv < b.naziv){
                    return -1;
                }
                else if(a.naziv > b.naziv){
                    return 1;
                }
                else{
                    return 0;
                }
            }

            if(tipSortiranja=="2"){
                if(a.naziv < b.naziv){
                    return 1;
                }
                else if(a.naziv > b.naziv){
                    return -1;
                }
                else{
                    return 0;
                }
            }

            if(tipSortiranja=="3"){
                if(a.indeksPopularnosti < b.indeksPopularnosti){
                    return 1
                }
                else if(a.indeksPopularnosti > b.indeksPopularnosti){
                    return -1
                }
                else {
                    return 0
                }
            }

            if(tipSortiranja=="4"){
                if(a.indeksPopularnosti > b.indeksPopularnosti){
                    return 1;
                }
                else if(a.indeksPopularnosti<b.indeksPopularnosti){
                    return -1;
                }
                else {
                    return 0;
                }
            }
            

        })
    }
    return sortiraniElementi;
}

function dodajULocalStorage(naziv,vrednost){
    localStorage.setItem(naziv,JSON.stringify(vrednost));
}
function dohvatiIzLocalStorage(naziv){
    return JSON.parse(localStorage.getItem(naziv));
}

function prikazProizvoda(niz){
    var ispis = "";
    if(niz.length == 0){
        ispis+= `<p>Trenutno nema dostupnih proizvoda</p>`
        return ispis;
    }
        for(let objekat of niz){
                if(objekat.kategorija == "Pice"){
                ispis+= `<div class="col-md-11 my-4">
                <div class="pb-3 mx-3 d-block text-dark text-decoration-none border border-left-0 border-top-0 border-right-0">
                    <div class="d-flex">
                        <div class="flex-grow-1">
                            <b>${objekat.naziv}</b>
                            <p class="mt-1 mb-0">${objekat.sastojci}</p>
                        </div>`
                        for(let obj of objekat.velicina){
                            ispis+=`<h6 class="text-primary">${obj.cm} cm - ${obj.cena} rsd &nbsp
                            `}
                        ispis+=`</h6></div>
                        </div>
                    </div>`
                }
                else{
                    ispis+= `<div class="col-md-11 my-4">
                        <div class="pb-3 mx-3 d-block text-dark text-decoration-none border border-left-0 border-top-0 border-right-0">
                            <div class="d-flex">
                                <div class="flex-grow-1 padding-class">
                                    <b>${objekat.naziv}</b>
                                    <p class="mt-1 mb-0">${objekat.sastojci}</p>
                                </div>
                                <h6 class="text-primary">${objekat.cena} rsd
                                </h6></div>
                        </div>
                    </div>`
                }
            }
            $('#menu-block').html(ispis);
}

function ispisOsoblje(niz){
    var ispisRadnici = "";
    for(let objekat of niz){
        ispisRadnici += `<div class="col-md-4 my-3">
        <div class="team-wrapper text-center">
            <img src="${objekat.slika.src}" class="circle-120 rounded-circle mb-3 shadow" alt="${objekat.slika.alt}">
            <h5 class="my-3">${objekat.ime}</h5>
            <p>${objekat.opis}</p>
        </div>
    </div>`
    }
    document.getElementById("block-staff").innerHTML = ispisRadnici;
}

function izmenjeniPodaci(){
    var elementi = dohvatiIzLocalStorage("proizvodi");
    elementi = sortJelovnik(elementi);
    elementi = filtriranjeJelovnik(elementi);
    prikazProizvoda(elementi);
}

function ispisUtisaka(niz){
    let ispis=""
    for(let objekat of niz){
        ispis+=`<div class="col-md-4 my-3 my-md-0">
                    <div class="card">
                        <div class="card-body">
                            <div class="media align-items-center mb-3">
                                <img class="mr-3" src="${objekat.slika.src}" alt="${objekat.slika.alt}">
                                <div class="media-body">
                                    <h6 class="mt-1 mb-0">${objekat.ime} ${objekat.prezime}</h6>
                                    <small class="text-muted mb-0">${objekat.zanimanje}</small>     
                                </div>
                            </div>
                            <p class="mb-0">${objekat.tekst}</p>
                        </div>
                    </div>
                </div>`
    }
    $("#utisci").html(ispis);
}

function filterSortReset(){
    this.document.getElementById("sortiranje").value = 0
    this.document.getElementById("filter-dostava").checked = false
    this.document.getElementById("filter-pice").checked = false
    this.document.getElementById("filter-sendvici").checked = false
}
window.addEventListener("load",function(){

    if(this.window.location.pathname.includes("index.html") || this.window.location.pathname == "/ilija.radenovic.117.21-ict.edu.rs/"){
        filterSortReset();
        //navigacija
        dohvatanjeJsonPodataka("navigacija.json",function(niz){
            ispisNavigacije(niz);
        });
        //header
        var header=document.querySelector("#header-block");

        var slika = document.createElement("img");
        slika.setAttribute("src","assets/imgs/logo.jpg");
        slika.setAttribute("alt","Logo Picerije")
        slika.classList.add("logo");
        header.appendChild(slika);

        var podnaslov=document.createElement("h1");
        podnaslov.classList.add("subtitle");
        var podNaslovTekst = document.createTextNode("Samo najkvalitetnije");
        podnaslov.appendChild(podNaslovTekst);
        header.appendChild(podnaslov);

        var naslov= document.createElement("h1");
        naslov.classList.add("title");
        var naslovTekst=document.createTextNode("Dobrodošli u našu piceriju");
        naslov.appendChild(naslovTekst);
        header.appendChild(naslov);

        //about
        dohvatanjeJsonPodataka("radnovreme.json",function(niz){
            ispisRadnoVreme(niz);
        });

        dohvatanjeJsonPodataka("about-slike.json",function(niz){
            aboutSlike(niz);
        });

        dohvatanjeJsonPodataka("about-slike.json",function(niz){
            aboutSlike2(niz);
        });

        //izdvojeno - najtraženije
        dohvatanjeJsonPodataka("proizvodi.json",function(niz){
            featured(niz,null);
        });

        //jelovnik
        dohvatanjeJsonPodataka("proizvodi.json",function(niz){
            prikazProizvoda(niz);
            dodajULocalStorage("proizvodi",niz);
        })

        $(document).on("change","#sortiranje",izmenjeniPodaci);
        $(document).on("change","#filter-dostava",izmenjeniPodaci);
        $(document).on("change","#filter-pice",izmenjeniPodaci);
        $(document).on("change","#filter-sendvici",izmenjeniPodaci);

        //osoblje
        dohvatanjeJsonPodataka("osoblje.json",function(niz){
            ispisOsoblje(niz);
        })

        //utisci
        dohvatanjeJsonPodataka("utisci.json",function(niz){
            ispisUtisaka(niz);
        })
    }


    if(document.location.pathname.includes("signup.html")){
        //forma
        document.getElementById("forma").reset();
        dohvatanjeJsonPodataka("navigacija.json",function(niz){
            ispisNavigacije(niz);
        })

        document.getElementById("forma-dugme").addEventListener("click",function(){
            var regExIme = /^([A-ZŠĐĆČŽ][a-zšđćčž]{2,15})\s([A-ZŠĐĆČŽ][a-zšđćčž]{2,15})$/;
            var regExMail = /^[a-z]{2,10}\.[a-z]{2,10}(@gmail.com)$/;
            var regExPass = /^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[!@#\$%\^&\*])(?=.{8,})/;

            function prikazivanjeDivaZaObavestenje(obavestenje){
                document.getElementById(obavestenje).classList.remove("sakrij");
            }
            function sakrivanjeDivaZaObavestenje(obavestenje){
                document.getElementById(obavestenje).classList.add("sakrij");
            }


            var poljeIme = document.getElementById("ime").value;
            var poljePass = document.getElementById("password").value;
            var poljeMail = document.getElementById("mail").value;
            var gradLista = document.getElementById("lista").value;
            var polRadio = document.getElementsByName("flexRadioDefault");
            var checkDugme = document.getElementById("check-button").checked;
            var greske=0;
            var pom=1
            if(!regExIme.test(poljeIme)){
                prikazivanjeDivaZaObavestenje("ime-obavestenje");
                pom=1;
            }
            else{
                sakrivanjeDivaZaObavestenje("ime-obavestenje");
                pom=0;
            }
            greske+=pom;
            pom=1;
            if(!regExMail.test(poljeMail)){
                prikazivanjeDivaZaObavestenje("mail-obavestenje");
                pom=1
            }
            else{
                sakrivanjeDivaZaObavestenje("mail-obavestenje");
                pom=0
            }
            greske+=pom;
            pom=1;
            if(gradLista==0){
                prikazivanjeDivaZaObavestenje("lista-obavestenje");
                pom=1;
            }
            else{
                sakrivanjeDivaZaObavestenje("lista-obavestenje");
                pom=0
            }
            greske+=pom;
            pom=1;

            if(!regExPass.test(poljePass)){
                prikazivanjeDivaZaObavestenje("pass-obavestenje");
                pom=1;
            }
            else{
                sakrivanjeDivaZaObavestenje("pass-obavestenje");
                pom=0;
            }
            greske+=pom;
            pom=1;

            for(var i=0;i<polRadio.length;i++){
                if(!polRadio[0].checked && !polRadio[1].checked){
                    pom=1;
                    prikazivanjeDivaZaObavestenje("pol-radio-obavestenje")
                }
                else {
                    sakrivanjeDivaZaObavestenje("pol-radio-obavestenje");
                    pom=0;
                }
            }

            greske+=pom;
            pom=1;
            if (!checkDugme){
                prikazivanjeDivaZaObavestenje("check-obavestenje");
            pom=1;
            }
            else {
                sakrivanjeDivaZaObavestenje("check-obavestenje");
                pom=0;
            }
            greske+=pom;
            pom=1;
            if(greske==0){
            prikazivanjeDivaZaObavestenje("uspesno");
            prikazivanjeDivaZaObavestenje("loading-plugin");
            setTimeout(function(){window.location.reload(1)},3000);
            pom=1;
            }
            else{
                document.getElementById("uspesno").classList.add("sakrij");pom=0;
            }
        })
    }
})