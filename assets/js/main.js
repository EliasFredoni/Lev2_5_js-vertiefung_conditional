let bundesland = document.getElementById('bundeslandInfo');
let bundeslandErgebnis = document.getElementById('bundeslandInfoErgebnis');

let check = () => {
    switch (bundesland.value) {
        case 'baden-württemberg':
            bundeslandErgebnis.innerHTML = 'Baden-Württemberg hat 10,880 Mio Einwohner und Stuttgart ist die Hauptstadt';
            break;
        case 'bayern':
            bundeslandErgebnis.innerHTML = 'Bayern hat 12,844 Mio Einwohner und München ist die Hauptstadt';
            break;
        case 'berlin':
            bundeslandErgebnis.innerHTML = 'Berlin hat 3,520 Mio Einwohner und Berlin ist die Hauptstadt';
            break;
        case 'brandenburg':
            bundeslandErgebnis.innerHTML = 'Brandenburg hat 2,485 Mio Einwohner und Potsdam ist die Hauptstadt';
            break;
        case 'bremen':
            bundeslandErgebnis.innerHTML = 'Bremen hat 0,671 Mio Einwohner und Bremen ist die Hauptstadt';
            break;
        case 'hamburg':
            bundeslandErgebnis.innerHTML = 'Hamburg hat 1,787 Mio Einwohner und Hamburg ist die Hauptstadt';
            break;
        case 'hessen':
            bundeslandErgebnis.innerHTML = 'Hessen hat 6,176 Mio Einwohner und Wiesbaden ist die Hauptstadt';
            break;
        case 'mecklenburg-vorpommern':
            bundeslandErgebnis.innerHTML = 'Mecklenburg-Vorpommern hat 1,612 Mio Einwohner und Schwerin ist die Hauptstadt';
            break;
        case 'niedersachsen':
            bundeslandErgebnis.innerHTML = 'Niedersachsen hat 7,927 Mio Einwohner und Hannover ist die Hauptstadt';
            break;
        case 'nordrhein-westfalen':
            bundeslandErgebnis.innerHTML = 'Nordrhein-Westfalen hat 17,865 Mio Einwohner und Düsseldorf ist die Hauptstadt';
            break;
        case 'rheinland-pfalz':
            bundeslandErgebnis.innerHTML = 'Rheinland-Pfalz hat 4,053 Mio Einwohner und Mainz ist die Hauptstadt';
            break;
        case 'saarland':
            bundeslandErgebnis.innerHTML = 'Saarland hat 0,996 Mio Einwohner und Saarbrücken ist die Hauptstadt';
            break;
        case 'sachsen':
            bundeslandErgebnis.innerHTML = 'Sachsen hat 4,085 Mio Einwohner und Dresden ist die Hauptstadt';
            break;
        case 'sachsen-anhalt':
            bundeslandErgebnis.innerHTML = 'Sachsen-Anhalt hat 2,245 Mio Einwohner und Magdeburg ist die Hauptstadt';
            break;
        case 'schleswig-holstein':
            bundeslandErgebnis.innerHTML = 'Schleswig-Holstein hat 2,859 Mio Einwohner und Kiel ist die Hauptstadt';
            break;
        case 'thüringen':
            bundeslandErgebnis.innerHTML = 'Thüringen hat 2,171 Mio Einwohner und Erfurt ist die Hauptstadt';
            break;
        default:
            bundeslandErgebnis.innerHTML = 'Ein solches Bundesland gibt es in Deutschland nicht.';
    }
}

console.log(bundeslandInfoErgebnis);



