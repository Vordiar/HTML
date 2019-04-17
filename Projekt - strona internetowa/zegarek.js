function dzisiejsza_data()
{
    var dzisiaj = new Date();
    var dzien = dzisiaj.getDate();
    if (dzien < 10) dzien = "0" + dzien;
    var miesiac = dzisiaj.getMonth() + 1;
    if (miesiac < 10) miesiac = "0" + miesiac;
    var rok = dzisiaj.getFullYear();

    var data = document.getElementById("kalendarz").innerHTML = dzien + "-" + miesiac + "-" + rok;
    setTimeout("dzisiejsza_data()", 1000);
}

function aktualna_godzina()
{
    var dzisiaj= new Date();

    var godzina = dzisiaj.getHours();
    if (godzina < 10) godzina = "0" + godzina;
    var minuta = dzisiaj.getMinutes();
    if (minuta < 10) minuta = "0" + minuta;
    var sekunda = dzisiaj.getSeconds();
    if (sekunda < 10) sekunda = "0" + sekunda;

    var czas = document.getElementById("zegar").innerHTML = godzina + ":" + minuta + ":" + sekunda;
    setTimeout("aktualna_godzina()", 1000);
}

function tabela(mis_id,nazwa,data,opis)
{
    this.mis_id = mis_id;
    this.nazwa = nazwa;
    this.data = data;
    this.opis = opis;
}

var Tabela = new Array();
Tabela[0] = new tabela(1,'Apollo 1', '27-01-1967r.', 'Katastrofa w czasie treningu, brak startu');
Tabela[1] = new tabela(2, 'Apollo 4', '09-11-1967r.', 'Pierwszy start rakiety Saturn V.');
Tabela[2] = new tabela(3, 'Apollo 5', '22-01-1968r.', 'Bezzalogowy lot statku LM.');
Tabela[3] = new tabela(4, 'Apollo 6', '04-04-1968r.', 'Drugi bezzalogowy lot rakiety Saturn V');
Tabela[4] = new tabela(5, 'Apollo 7', '11-10-1968r.', 'Pierwszy start zalogowy rakiety Saturn IB');
Tabela[5] = new tabela(6, 'Apollo 8', '21-12-1968r.', 'Pierwszy start zalogowy rakiety Saturn V');
Tabela[6] = new tabela(7, 'Apollo 9', '03-03-1969r.', 'Testy LM na orbicie okoloziemskiej');
Tabela[7] = new tabela(8, 'Apollo 10', '18-05-1969r.', 'Testy LM na orbicie okoloksiezycowej');
Tabela[8] = new tabela(9, 'Apollo 11', '16-07-1969r.', 'PIERWSZE LADOWANIE NA KSIEZYCU!');
Tabela[9] = new tabela(10, 'Apollo 12', '14-11-1969r.', 'Ladowanie w poblizu sondy Surveyor 3');
Tabela[10] = new tabela(11, 'Apollo 13', '11-04-1970r.', 'Awaryjny powrot na Ziemie po wybuchu w rakiecie');
Tabela[11] = new tabela(12, 'Apollo 14', '31-01-1971r.', 'Pierwsza gra w golfa w kosmosie');
Tabela[12] = new tabela(13, 'Apollo 15', '26-07-1971r.', 'Pierwsza misja z pojazdem LRV');
Tabela[13] = new tabela(14, 'Apollo 16', '16-04-1972r.', 'Badanie wyzyny ksiezycowej kamera z ultrafioletem');
Tabela[14] = new tabela(15, 'Apollo 17', '07-12-1972r.', 'Ostatnie ladowanie na Ksiezycu');

function wyswietl(Tab)
{
    var txt = '';
    for (var x = 0; x < Tab.length; x++) {
        txt += '<tr>';
        txt += '<td>' + Tab[x].mis_id + '</td>';
        txt += '<td>' + Tab[x].nazwa + '</td>';
        txt += '<td>' + Tab[x].data + '</td>';
        txt += '<td>' + Tab[x].opis + '</td>';
        txt += '</tr>';
    }
    var trescTab = document.getElementById("rekordy");
    trescTab.innerHTML = txt;
}

function policzBMI()
{
    var waga = document.bmiForm.waga.value
    var wzrost = document.bmiForm.wzrost.value
    if (waga > 0 && wzrost > 0)
    {
        var finalBmi = waga / (wzrost / 100 * wzrost / 100)
        document.bmiForm.bmi.value = finalBmi
        if (finalBmi < 18.5)
        {
            document.bmiForm.meaning.value = "Nie mozesz leciec w kosmos. Za malo wazysz. :("
        }
        if (finalBmi > 18.5 && finalBmi < 25)
        {
            document.bmiForm.meaning.value = "Bedzie z Ciebie swietny astronauta! Twoja waga jest idealna. :D"
        }
        if (finalBmi > 25) {
            document.bmiForm.meaning.value = "Niestety za duzo wazysz i nie zmiescisz sie w rakiecie. :("
        }
    }
    else {
        alert("Uzupelnij poprawnie dane")
    }
}

