# 📋 Feature Backlog – PortugeseBakker

Deze Angular-app wordt uitgebouwd tot een moderne, professionele webshop voor een artisanale Portugese bakkerij. Onderstaande backlog groepeert alle functionele, visuele en backend-features per categorie (**EPIC**), inclusief status.

---

## 🧩 EPIC 1 – Productoverzicht en navigatie

| User Story | Status |
|------------|--------|
| De gebruiker kan een overzicht bekijken van alle pastéis | ✅ Afgewerkt |
| De gebruiker kan details bekijken van een specifieke pastel via een eigen detailpagina | ✅ Afgewerkt |
| De gebruiker kan gebakjes doorzoeken via een zoekveld | ✅ Afgewerkt |
| De gebruiker kan zijn zoekopdracht eenvoudig wissen (reset functionaliteit) | ✅ Afgewerkt |
| De gebruiker kan het aanbod filteren op prijs of categorie (taarten, koekjes, brood...) | ✅ Afgewerkt |
| De gebruiker kan het aanbod sorteren op prijs | ✅ Afgewerkt |
| De gebruiker kan door categorieën navigeren | ✅ Afgewerkt |
| De gebruiker navigeert via een duidelijke, responsive navbar | ✅ Afgewerkt |
| Routing is geconfigureerd met standalone components | ✅ Afgewerkt |
| Lazy loading is voorzien per feature module | 🔜 Gepland |

---

## 💛 EPIC 2 – Favorietenfunctionaliteit

| User Story | Status |
|------------|--------|
| De gebruiker kan een pastel markeren als favoriet | 🔜 Gepland |
| De gebruiker kan een overzicht bekijken van alle gemarkeerde favorieten | 🔜 Gepland |
| De favorieten worden bewaard via localStorage zodat ze behouden blijven | 🔜 Gepland |
| De gebruiker ziet visueel welke pastéis favoriet zijn (bijv. met een ingekleurd hartje) | 🔜 Gepland |

---

## 🛒 EPIC 3 – Webshop en bestelflow (via Supabase)

| User Story | Status |
|------------|--------|
| De gebruiker kan een speciale webshop-pagina openen met het volledige online assortiment | 🔜 Gepland |
| De producten worden opgehaald uit de Supabase database via een API-call | 🔜 Gepland |
| De gebruiker kan producten toevoegen aan een winkelmandje | 🔜 Gepland |
| Het winkelmandje wordt lokaal beheerd (cart service + localStorage) | 🔜 Gepland |
| De gebruiker kan het winkelmandje bekijken en beheren (aantallen aanpassen, verwijderen) | 🔜 Gepland |
| De gebruiker kan de totale prijs zien van zijn bestelling | 🔜 Gepland |
| De gebruiker kan een checkoutformulier invullen (naam, adres, e-mail) | 🔜 Gepland |
| De bestelling wordt doorgestuurd naar de Supabase database | 🔜 Gepland |
| De gebruiker krijgt een bevestigingspagina na een succesvolle bestelling | 🔜 Gepland |
| Een eenvoudige adminpagina toont geplaatste bestellingen vanuit de Supabase DB | 🟡 Optioneel |

---

## 🎨 EPIC 4 – Artisanale vormgeving en gebruikerservaring

| User Story | Status |
|------------|--------|
| De gebruiker wordt verwelkomd op een mooie homepagina met een hero-banner | ✅ Afgewerkt |
| De gebruiker ziet tijdelijke acties of seizoensproducten op de homepagina | 🔜 Gepland |
| De site heeft een warme, artisanale uitstraling dankzij kleuren, typografie en fotografie | 🔜 Gepland |
| De gebruiker ervaart vloeiende overgangen en animaties | 🔜 Gepland |
| De gebruiker kan een fotogalerij bekijken met beelden van de producten en winkel | 🔜 Gepland |
| De site is volledig responsive (desktop, tablet, mobiel) | 🔜 Gepland |

---

## 📞 EPIC 5 – Informatieve pagina’s

| User Story | Status |
|------------|--------|
| De gebruiker kan meer lezen over de bakkerij op een "Over ons"-pagina | 🔜 Gepland |
| De gebruiker kan contact opnemen via een formulier (naam, e-mail, bericht) | 🔜 Gepland |
| Contactformulieren worden doorgestuurd naar Supabase als record in een messages-tabel | 🔜 Gepland |
| De gebruiker ziet de locatie van de winkel via een geïntegreerde kaart | 🔜 Gepland |
| De gebruiker kan klantrecensies lezen op een testimonial-pagina | 🟡 Optioneel |
| De gebruiker kan tijdelijke acties of seizoensproducten bekijken (bv. voor Kerst of Pasen) | 🔜 Gepland |

---

## 🔧 EPIC 6 – Technische optimalisatie en onderhoud

| User Story | Status |
|------------|--------|
| Elke feature wordt lazy-loaded via Angular routing | 🔜 Gepland |
| Componenten zijn standalone volgens Angular 17+ best practices | ✅ Afgewerkt |
| Herbruikbare componenten zijn ondergebracht in de shared/ map | 🔜 Gepland |
| Styling wordt geoptimaliseerd met SCSS of Tailwind | 🔜 Gepland |
| Supabase wordt gebruikt voor het beheren van producten, bestellingen en berichten | 🔜 Gepland |
| Angular-services worden opgezet om te communiceren met Supabase API’s | 🔜 Gepland |
| Er worden Cypress-tests toegevoegd voor belangrijke gebruikersflows | 🔜 Gepland |
| Toegankelijkheid (ARIA, toetsenbordnavigatie) wordt gecontroleerd | 🟡 Optioneel |
| Animaties worden toegevoegd met Angular Animations of GSAP | 🟡 Optioneel |

---

💡 Deze backlog wordt iteratief aangevuld en geprioriteerd op basis van gebruikersfeedback, gebruiksvriendelijkheid, en toekomstige uitbreidingen.

🛠️ Gebouwd met:  
**Angular 17+**, standalone component setup, `app.config.ts` routing, SCSS (of Tailwind), `localStorage`, Supabase backend *(in opbouw)*, en moderne best practices voor frontend ontwikkeling.
