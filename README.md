Aitäh, see aitas otsa peale. Tegin esialgse lahenduse ära, praegu saadab aega lihtsalt veebileht setInterval-i abil:
https://tarmo.uuu.ee/ar/sandbox/websocket-send-time.html

Ning planets.html saab nüüd oma ajakoodi data.elektron.art käest:
https://tarmo.uuu.ee/ar/sandbox/planets.html

Lähtekood:
https://github.com/tarmoj/ar-test/

---

Praeguseks on baas ja üldine raamistik vast olemas, millelt edasi minna. Tegin hakatuse failiks stars.html, Mikk-Maidu kirjelduse järgi peaks seal ilmuma teatud aegadel tähed, nende vahele tekkima jooned ja sinna lisanduma ka mingil kujul muust datast tulenevaid elemente. Tegin mingi esialgse prootüübi ja vajalikud põhifunktsioonid

https://github.com/tarmoj/ar-test/blob/main/stars.html

https://tarmoj.github.io/ar-test/stars.html

---

Millal miski ilmub, on koodis korraldatud selliste objektide jadana:

const events = [
{time: 1, action: () => createStar("s1", -20, 3, -40, 0.5)}, // time in
{time: 9, action: () => removeStar("s1") },

];

Ning funktsioon checkEvents(time) kutsutakse välja iga sekund ja see kontrollib, milline "action" tuleb käivitada.
Laias laastus pakun välja koostööd, et Mikk-Mait koostab listi, mis sekundil midagi peab juhtuma, loob vajalikud 3d-elemendid jm mudelid ja Kristjan kirjutab need funktsioonid, mis selle asja ära teeks. Mõistagi tasub vahendid hoida pigem ökonoomsed, ehk tõenäoliselt annab ühe funktsiooni aga erinevate parameetritega palju ära teha. Aga vaatame kuidas areneb. Mina oleks nõuga abiks, kuidas oskan ja püüan muusika suhete ja terviku osas kaasa mõelda.
Ning teine asi oleks kogu süsteemi optimeerida, testida, et 3d objektid ei lähe liiga raskeks ja kogu stseen liiga kirjuks jms, et telefon jõuaks seda vedada.

---

Kood asub githubi repos https://github.com/tarmoj/ar-test
Kristjan, sina oled juba kasutaja, Mikk-Mait, kas sul on olnud git-i ja githubiga kogemust? Kas sul on konto? Usun, et oleks tõhus, kui sul oleks ka sinna ligipääs ja saad visuaalelemente sinna üles lükata, aga saab muidu ka teisiti.

Esimese hooga tasuks võtta ette Messiermusics/GalacticQuasarics Part 1.
Nö noot, kus on näha ka tähtkujud, mille järgi mängijad mängivad on siin:
http://live.uuu.ee/messier/
Kui sellest on abi, siis lehekülgede ilmumise ajad on näha siit:
view-source:http://live.uuu.ee/messier/main.js
