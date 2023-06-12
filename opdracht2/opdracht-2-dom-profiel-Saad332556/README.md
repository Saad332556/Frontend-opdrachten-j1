# FE-S2-P3-Opdracht2

Onderwijs Online Link: https://mboutrecht.onderwijsonline.nl/elearning/lesson/XNY0OGqP
In te leveren:
- script.js
- EXTRA: profile.scss en profile.css

# Opdracht: DOM Profiel
Als je index.html opent zul je al een complete HTML structuur zien staan. Ook is er al styling toegevoegt. 
Dus als je index.html in de browser bekijkt dan zul je al een pagina zien staan met hier en daar wat inhoud.

Het is de bedoeling van deze opdracht om de pagina te vullen met inhoud zoals hieronder te zien is. 

![opdr2](https://user-images.githubusercontent.com/51715045/153872832-beef36fa-29c3-4859-ac7a-5800daccca82.png)

1. Het is nu de bedoeling om de pagina van inhoud te voorzien door middel van Javascript. 
Open script.js. Op regel 3 wordt er een element geselecteerd. 
En op regel 4 word er een afbeelding bij het src attribuut ingevuld. 
Zorg dat er een foto naar keuze wordt ingeladen. 
![opdr2-1](https://user-images.githubusercontent.com/51715045/153872854-80588970-a3d3-4db9-b0a6-f1af60dce900.png)

 
2. Door de functie querySelector te gebruiken. Kan je elementen selecteren door CSS selectors te gebruiken. 
Hierdoor kunnen we gebruik maken van meerdere functies en ook verschillende attributen veranderen zoals src. 
Maar ook innerHTML is te veranderen. Oftewel de inhoud van een element. 
Op regel 8 wordt er een h3 element met de klasse name geselecteerd. 
En op regel 9 wordt de innerHTML gevuld met een naam. 
Verander de naam naar jouw eigen naam. 
 
3. Nu is het de bedoeling om de de onderstaande elementen te gaan voorzien van inhoud. 
Per element zul je een variabele aan moeten maken en het element moeten selecteren door de querySelector functie te gebruiken. Daarna kan je de innerHTML aanpassen en inhoud toevoegen. 
  - span.birthday
  Voeg een verjaardag toe.
  - span.email
  Voeg een e-mail toe.
  - p.profile
  Voeg een persoonlijke beschrijving toe.
 
4. Als je dat hebt ingevuld, is het nu tijd om opleidingen en banen aan te vullen. 
Per opleiding en baan is eigenlijk dezelfde informatie nodig en dus ook dezelfde HTML structuur. 
Dus we gaan eerst een array maken van de opleidingen. 
Neem de onderstaande variabelen en structuur over. De inhoud kan je aanpassen. 
LET GOED OP ALLE TEKENS!!!
![opdr2-2](https://user-images.githubusercontent.com/51715045/153872884-b0f114ff-fd60-49bd-a569-3e70d56058b0.png)
 
5. Met de array die nu is gedefinieerd kunnen we de inhoud van het opleidings element gaan vullen. 
In het onderstaande voorbeeld wordt het UL element geselecteerd in het div element met de klasse education. 
Daarna wordt er door de array heen geloopt en wordt er een nieuw list-item element aangemaakt. 
En wordt de innerlijke HTML van het element gevuld met de informatie over de opleiding. Als dat is gedefinieerd wordt het toegevoegd aan het UL element. 
Neem het onderstaande voorbeeld over. 
![opdr2-3](https://user-images.githubusercontent.com/51715045/153872908-e2f76ffb-7ee0-487d-a082-efcd26c3aa32.png)
 
6. Alle opleidingen wordt nu toegevoegd. Nu is het de bedoeling om ook de banen aan te vullen. 
Je kan hiervoor stap 4 gebruiken.
Maak een jobsArr en vul deze met informatie over de banen. Verander "school" uiteraard in "business". 
 
7. Als dat is gelukt kan je nu ook het UL element in het div element met de klasse jobs selecteren. 
En deze gaan vullen met de informatie over de banen. 
Je kan hiervoor stap 5 gebruiken. 
Zorg dat de informatie van de banen met een foreach loop in het UL element wordt ingeladen. 
De HTML structuur is hetzelfde als die van de opleidingen. 

# EXTRA opdracht: Pas de styling verder aan.
1. Het profiel heeft al een styling meegekregen, maar deze styling is nog vrij basis. 
Maak een nieuw bestand aan in de map scss en noem deze profile.scss.

2. Zet een nieuwe sass-compiler op. En voeg styling toe om de pagina er nog beter uit te laten zien. 
