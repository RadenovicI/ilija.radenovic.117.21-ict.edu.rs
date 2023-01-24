window.addEventListener("load",function(){
    document.getElementById("forma").reset();
    
    //navigacija
    var navLinkovi = new Array("about.html","#service","#team","#testmonial");
    var navTekst = new Array("O autoru","Najtraženije","Osoblje","Utisci");
    var ispis="";
    for(let i=0;i<navLinkovi.length;i++){
        ispis+= `<li class="nav-item">
                    <a class="nav-link" href="${navLinkovi[i]}">${navTekst[i]}</a>
                </li>`;
    }
    document.querySelector("#navbar-center").innerHTML=ispis;


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
    var radnoVremeDaniAbout = new Array("Ponedeljak-Petak: ","Subota: ","Nedelja: ");
    var radnoVremeAbout=new Array("08:00 - 23:00","12:00 - 00:00","Zatvoreno");
    var ispis=""
        for(i=0;i<radnoVremeDaniAbout.length;i++){
            if(i==0){
                ispis+=`<h3 class="section-title">Radno vreme:</h3>`
                ispis+=`<p class="mb-1 font-weight-bold">${radnoVremeDaniAbout[i]}<span class="font-weight-normal pl-2 text-muted">${radnoVremeAbout[i]}</span></p>`
            }
            else{
                ispis+=`<p class="mb-1 font-weight-bold">${radnoVremeDaniAbout[i]}<span class="font-weight-normal pl-2 text-muted">${radnoVremeAbout[i]}</span></p>`}
            document.getElementById("about-top-left").innerHTML = ispis;
        }
    
        var nizSlikeLinkovi = new Array("assets/imgs/pizza.jpg",    "assets/imgs/hotdog.jpg","assets/imgs/sandwich-open.jpg","assets/imgs/sandwich.jpg")
        var nizSlikeAlt = new Array("Pica","Hot Dog","Rol Sendvič - otvoren","Rol Sendvič")
        var ispis="";
        for(let i in nizSlikeAlt){
        if(i==2 || i==3){
            ispis+=`<div class="col">
            <img alt="${nizSlikeAlt[i]}" src="${nizSlikeLinkovi[i]}" class="square-size" class="w-100 rounded shadow">
        </div>`;
        document.getElementById("about-bottom-left").innerHTML = ispis;
        }
        
        else{
        ispis+=`<div class="col">
        <img alt="${nizSlikeAlt[i]}" src="${nizSlikeLinkovi[i]}" class="square-size" class="w-100 rounded shadow">
        </div>`;
        document.getElementById("about-top-right").innerHTML = ispis;
        if(i==1) {ispis=""};
        }
        }

        //izdvojeno - najtraženije
        var nizSlikeFeatured = new Array("assets/imgs/burger.jpg",
        "assets/imgs/capriciossa.jpg","assets/imgs/piletina.jpg","assets/imgs/srpska.jpg","assets/imgs/pecenica.jpg","assets/imgs/margarita.jpg");
        var nizSlikeAltFeatured = new Array("Rol Sendvič Burger","Kaprićoza","Rol sendvič piletina","Pica - Srpska","Rol sendvič pečenica","Margarita");
        var nizNazivFeatured = new Array("Rol Sendvič - Burger","Kaprićoza","Rol sendvič - Piletina","Vesuvio","Pečenica","Margarita");
        var nizCeneFeatured = new Array("350 rsd","1010 rsd - 50cm","320 rsd","920 rsd - 50cm","200 rsd","800 rsd - 50 cm");
        var nizOpisFeatured = new Array("susam namaz, pileći file, sir, krastavčići","pelat, sir, šunka, pečurke, origano ,masline","susam namaz, pileći file, sir, krastavčići","pelat, sir, šunka, masline, origano","namaz, pečenica, sir, krastavčići","pelat, sir, masline, origano");
        
        var ispisFeatured=""
        for(let i = 0; i<nizSlikeFeatured.length;i++){
            ispisFeatured+=`<div class="col-md-6 mb-4">
            <div class="custom-list">
                <div class="img-holder">
                    <img src="${nizSlikeFeatured[i]}" alt="${nizSlikeAlt[i]}">
                </div>
                <div class="info">
                    <div class="head clearfix">
                        <h5 class="title float-left">${nizNazivFeatured[i]}</h5>
                        <p class="float-right text-primary">${nizCeneFeatured[i]}</p>
                    </div>
                    <div class="body">
                        <p>${nizOpisFeatured[i]}</p>
                    </div>
                </div>
            </div>
        </div>`
        }
        document.getElementById("block-featured").innerHTML=ispisFeatured;

        //jelovnik

        var dugmePizza = document.getElementById("btn-pizza");
        var dugmeSandwich = document.getElementById("btn-sandwich");
        var meniBlok= `<div class="row text-left">`;
        var divMeniBlok=document.getElementById("menu-block");

        for(let i=0;i<6;i++){
            let pizzaIme=new Array("<b>Margarita</b>", "<b>Funghi</b>", "<b>Vesuvio</b>", "<b>Capriciossa</b>", "<b>Tonno</b>", "<b>Carbonara</b>");
            let pizzaOpis=new Array("pelat, sir, masline, origano", 
                                    "pelat, sir, pečurke, origano, masline", 
                                    "pelat, sir, šunka, masline, origano", 
                                    "pelat, sir, šunka, pečurke, origano ,masline",
                                    "pelat, sir, tuna, masline, origano", 
                                    "pavlaka, jaje, pančeta, masline, parmezan");
            let pizzaCena=new Array("32cm - 470 rsd </br> 50cm - 800 rsd",
                                    "32cm - 520 rsd </br> 50cm - 930 rsd",
                                    "32cm - 530 rsd </br> 50cm - 980 rsd",
                                    "32cm - 550 rsd </br> 50cm - 1010 rsd",
                                    "32cm - 610 rsd </br> 50cm - 1150 rsd",
                                    "32cm - 660 rsd </br> 50cm - 1150 rsd");
    
            if(i>2){
                meniBlok+=
            `<div class="col-md-6 my-4">
                <div class="pb-3 mx-3 d-block text-dark text-decoration-none border border-left-0 border-top-0 border-right-0">
                    <div class="d-flex">
                        <div class="flex-grow-1">${pizzaIme[i]}
                            <p class="mt-2 mb-0">${pizzaOpis[i]}</p>
                        </div>
                                <h6 class="float-right text-primary">${pizzaCena[i]}</h6>
                        
                    </div>
                </div>
            </div>`
            }                       
            else{
            meniBlok+=
            `<div class="col-md-6 my-4">
                <div class="pb-3 mx-3 d-block text-dark text-decoration-none border border-left-0 border-top-0 border-right-0">
                    <div class="d-flex">
                        <div class="flex-grow-1">${pizzaIme[i]}
                            <p class="mt-1 mb-0">${pizzaOpis[i]}</p>
                        </div>
                                <h6 class="float-right text-primary">${pizzaCena[i]}</h6>
                        
                    </div>
                </div>
            </div>`
            } 
        }
        
        meniBlok+=`</div>`
        divMeniBlok.innerHTML=meniBlok;
        meniBlok= `<div class="row text-left">`

        dugmePizza.addEventListener("click",function(){
        dugmePizza.setAttribute("disabled","disabled");
        dugmeSandwich.removeAttribute(disabled="disabled");
        for(let i=0;i<6;i++){
            let pizzaIme=new Array("<b>Margarita</b>", "<b>Funghi</b>", "<b>Vesuvio</b>", "<b>Capriciossa</b>", "<b>Tonno</b>", "<b>Carbonara</b>");
            let pizzaOpis=new Array("pelat, sir, masline, origano", 
                                    "pelat, sir, pečurke, origano, masline", 
                                    "pelat, sir, šunka, masline, origano", 
                                    "pelat, sir, šunka, pečurke, origano ,masline",
                                    "pelat, sir, tuna, masline, origano", 
                                    "pavlaka, jaje, pančeta, masline, parmezan");
            let pizzaCena=new Array("32cm - 470 rsd </br> 50cm - 800 rsd",
                                    "32cm - 520 rsd </br> 50cm - 930 rsd",
                                    "32cm - 530 rsd </br> 50cm - 980 rsd",
                                    "32cm - 550 rsd </br> 50cm - 1010 rsd",
                                    "32cm - 610 rsd </br> 50cm - 1150 rsd",
                                    "32cm - 660 rsd </br> 50cm - 1150 rsd");
    
            if(i>2){
                meniBlok+=
            `<div class="col-md-6 my-4">
                <div class="pb-3 mx-3 d-block text-dark text-decoration-none border border-left-0 border-top-0 border-right-0">
                    <div class="d-flex">
                        <div class="flex-grow-1">${pizzaIme[i]}
                            <p class="mt-2 mb-0">${pizzaOpis[i]}</p>
                        </div>
                                <h6 class="float-right text-primary">${pizzaCena[i]}</h6>
                        
                    </div>
                </div>
            </div>`
            }                       
            else{
            meniBlok+=
            `<div class="col-md-6 my-4">
                <div class="pb-3 mx-3 d-block text-dark text-decoration-none border border-left-0 border-top-0 border-right-0">
                    <div class="d-flex">
                        <div class="flex-grow-1">${pizzaIme[i]}
                            <p class="mt-1 mb-0">${pizzaOpis[i]}</p>
                        </div>
                                <h6 class="float-right text-primary">${pizzaCena[i]}</h6>
                        
                    </div>
                </div>
            </div>`
            }
            
           
        }
        meniBlok+=`</div>`
        divMeniBlok.innerHTML=meniBlok;
        meniBlok= `<div class="row text-left">`
        })
        dugmeSandwich.addEventListener("click",function(){
            dugmeSandwich.setAttribute("disabled","disabled");
            dugmePizza.removeAttribute(disabled="disabled");
            for(let i=0;i<6;i++){
                let pizzaIme=new Array("<b>Šunka</b>", "<b>Pečenica</b>", "<b>Kulen</b>", "<b>Mix</b>", "<b>Slaninica</b>", "<b>Piletina</b>");
                let pizzaOpis=new Array("namaz, šunka, sir,         krastavčići", 
                                        "namaz, pečenica, sir, krastavčići", 
                                        "namaz, kulen, sir, krastavčići", 
                                        "namaz, šunka, kulen, pečenica, sir, krastavčići",
                                        "pavlaka, sir, kuvano jaje, paradajz", 
                                        "susam namaz, pileći file, sir, krastavčići");
                let pizzaCena=new Array("180 rsd",
                                        "200 rsd",
                                        "210 rsd",
                                        "250 rsd",
                                        "300 rsd",
                                        "320 rsd");
        
                if(i>2){
                    meniBlok+=
                `<div class="col-md-6 my-4">
                    <div class="pb-3 mx-3 d-block text-dark text-decoration-none border border-left-0 border-top-0 border-right-0">
                        <div class="d-flex">
                            <div class="flex-grow-1">${pizzaIme[i]}
                                <p class="mt-2 mb-0">${pizzaOpis[i]}</p>
                            </div>
                                    <h6 class="float-right text-primary">${pizzaCena[i]}</h6>
                            
                        </div>
                    </div>
                </div>`
                }
                else{
                meniBlok+=
                `<div class="col-md-6 my-4">
                    <div class="pb-3 mx-3 d-block text-dark text-decoration-none border border-left-0 border-top-0 border-right-0">
                        <div class="d-flex">
                            <div class="flex-grow-1">${pizzaIme[i]}
                                <p class="mt-1 mb-0">${pizzaOpis[i]}</p>
                            </div>
                                    <h6 class="float-right text-primary">${pizzaCena[i]}</h6>
                            
                        </div>
                    </div>
                </div>`
                }
            }
            meniBlok+=`</div>`
            divMeniBlok.innerHTML=meniBlok;
            meniBlok= `<div class="row text-left">`
        })
        
        //osoblje

        var radnikSlika = new Array("assets/imgs/chef-1.jpg","assets/imgs/chef-2.jpg","assets/imgs/chef-3.jpg");
        var radnikSlikaAlt = new Array("Pizza Majstor","Pomoćni radnik 1","Pomoćni radnik 2");
        var radnikIme = new Array("Marko Marković","Marija Marić","Aleksandar Andrić");
        var radnikOpis = new Array("Pica majstor po struci i malo je reći iskusan u svom poslu. Dodatan rad i iskustvo u inostranstvu doprinosi boljem kvalitetu testa i brzini pripreme svakog jela, a pritom kvalitet i ukus ostaju nenadmašivi","Pomoćni radnik ali jednako bitan član našeg kolektiva. Svaki rol-sendvič ima dozu umerenosti, ali i savršenstva zbog njenog truda i želje da svaki bude isti kao i prethodni.","Za razliku od ostalih radnika koji su radili u inostranstvu, naš pomoćni pica majstor se dobro uklapa u rad sa ostatkom radnog osoblja. Još uvek u obuci, ali kompetentan po pitanju veština.");
        var ispisRadnici = "";
        for (let i = 0;i<radnikSlika.length;i++){
            ispisRadnici += `<div class="col-md-4 my-3">
            <div class="team-wrapper text-center">
                <img src="${radnikSlika[i]}" class="circle-120 rounded-circle mb-3 shadow" alt="${radnikSlikaAlt[i]}">
                <h5 class="my-3">${radnikIme[i]}</h5>
                <p>${radnikOpis[i]}</p>
            </div>
        </div>`
        }
        document.getElementById("block-staff").innerHTML = ispisRadnici;

        //forma
    
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
})