
let glavnaSlika = document.querySelector('#glavnaGalerija');
let naslov = document.querySelector('.naslovGalerija');
let tekst = document.querySelector('.tekstGalerija');

let slike = ['sunce3.jpg','scuti.jpg','supernova.jpg','nebula.jpg','belipatuljak.jpg'];
let naslovi = ['Sunce','UY Scuti - crveni dzin','Supernova','Nebula - maglina', 'Beli patuljak'];
let tekstovi=[];

tekstovi[0]='Sunce je zvezda precnika 1,3 miliona km, centar Sučevog sistema, po cemu je on i dobio ime, oko njega kruzi 8 planeta sa svojim satelitima i nekoliko patuljastih planeta, asteroida, kometa, meteora i cestica kosmicke prasine. Toliko je veliko da u njega Zemlja moze stati 1,3 miliona puta, a staro je vise od 4,5 milijarde godina. Prosecna udaljenost Zemlje od Sunca je oko 150 miliona kilometara, a to rastojanje je jedna astronomska jedinica i zbog toga suncevim zracima treba oko 8,3 minuta da dodju do Zemlje. Sunce "gori" jer dolazi do fuzije jezgara vodonika u helijum i to ispusta nuklearnu energiju koja je najveca energija nama poznata, u tom procesu ispustaju se fotoni u vidu Suncevog zracenja koji nama na zemlji dolaze kao svetlost i toplota. Postoje solarni vetrovi koje Sunce izbacuje, to su elektroni i protoni koji velikom brzinom napustaju Sunce i magnetsko polje zemlje ih rasipa, ova pojava se na zemlji vidi kao Aurora borealis ili Polarna svetla, mogu se videti na severnim delovima Evrope ';

tekstovi[1]='UY Scuti je najveca zvezda otkrivena u nasoj galaksiji Mlecni put. Veca je od sunca otprilike 1700 puta, sto znaci da bi jedna pored druge izgledale kao buba i fudbalska lopta. Od Zemlje je udaljena oko 10 000 svetlosnih godina, sto znaci da nikada necemo moci izbliza da je vidimo. Njena temperatura iznosi oko 3 300 kelvina i izgleda kao crveni gigant. Kada bi se stavila na mesto Sunca razorila bi ceo Suncev sistem i progutala sve planete njega. Otkrivena je 1860. od strane nemackih astronoma i tada je dobila naziv BD-12 5055, koji je ubrzo promenjen u UY Scuti. Otkriveno je da u sebi sadrzi neke vrste metala i veruje se da ce tokom godina pregoreti i da ce taj metal porusiti gravitaciju zvezde, sto ce dovesti do supernove, odnosno eksplozije same zvezde, koja bi mogla da obasja vise od pola galaksije i napravi veliku stetu u Mlecnom putu, ali predvidja se da se to nece desiti jos par stotina godina pd sada.';

tekstovi[2]='Zavrsavanjem evolucije zvezda zavrsava se i njen zivot, moze okoncati supernovom. Supernova je neobicna mocna pojava, u njoj zvezda eksplodira i njeno rasipanje napravi veliku kolicinu energije pracenu ogromnim bljeskom. Retka je pojava kod zvezda jer je vecina zvezda malo i takvog sastava da nista ne bi izazvalo supernovu. Do sada su uocene 3 supernove u nasoj galaksiji i posto taj proces traje nekoliko nedelja ili meseci, retke su sanse da se neka supernova uoci golim okom u zivotnom periodu coveka. Iako je ovaj dogadjaj veoma surov jer jedna zvezda izumre i raspadne se u milione delova, nama je prelep prizor gledati ih. Supernove se uglavnom desavaju kod zvezda koje su preko 10 puta vece od Sunca, postoje dve vrste supernova, tip II i tip Ia, kod tipa II jezgro zvezda postaje nestabilno, gravitacija se uzburka i zvezda eksplodira, a kod tipa Ia se zvezda nalazi pored belog patuljka i prebacuje svoj materijal na njega dok ne eksplodira ';

tekstovi[3]='Nakon uticaja supernove nekada se njen ostatak prosiri i razdvoji po galaksji, a nekada ostane nerazlozen, ostatak supernove se naziva maglina (lat-nebula, nebulae), veoma lep prizor zvezdane prasine, kometa i asteroida koji su ostali blizu jedni drugima po zavrsetku supernove. Tako znamo da se supernova dogodila i otprilike se moze izracunati koliko je proslo od tog trenutka. Uglavnom imaju izgled slican oku ali nekada mogu biti i elipsastog ili cilindricnog oblika. Izgledaju kao male galaksijice unutar galaksije. Uocene su jos davnih dana istorije, cak i pre nove ere, ali svi su mislili da su to jata zvezda dok se nije otkrilo poreklo maglina. Najpoznatije magline su Karina i Orao, od delova nebula se cesto tokom vremena gasovi i cestice akumuliraju i pri tome nastaju nove patuljaste zvezde i planete.';

tekstovi[4]='Mirniji nacin zavrsetka evolucije i zivota zvezde je da se ona pretvori u belog patuljka. Ova pojava je cesta kod malih i srednjih zvezda. Pretposlednja faza evolucije zvezde je da postane crveni div, tada ispusta svoje omotace oko sebe u vidu gasa, a od preostalog materijala formira se jezgro koje je sacinjeno od ugljenika i kiseonika. Posto jezgro nema vise izvor energije (helijum se ne sagoreva), ono pocinje da se zgusnjava i hladi, postoji ogranicenje gustine koje zvezda moze da ima i ukoliko ga ona prekoraci u toku vremena dolazi do supernove, kada se to ne desi postepenim hladjenjem posle par milijardi godina zvezda se potpuno ugasi i prestane da sija i bude vidljiv, medjutim koliko mi znamo ni jedan beli patuljak u nasoj galaksiji nije skroz sagoreo jer je proces veoma dug, a po proceni nije proslo dovoljno od velikog praska i nastanka galaksije da bi stigao da se ugasi i da sagori neki patuljak.';



function promeni(ind){
    glavnaSlika.src = 'images/' + slike[ind];
    naslov.innerHTML = naslovi[ind];
    tekst.innerHTML = tekstovi[ind];
}

const proveraMejl=/^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/;
const proveraSifre  = /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[a-zA-Z]).{8,}$/;

const mejl = document.querySelector('#mejl');
const sifra = document.querySelector('sifra');

function ProveriMejl(email){
    return proveraMejl.test(email);
}

function ProveriSifru(password){
    return proveraSifre.test(password);
}
