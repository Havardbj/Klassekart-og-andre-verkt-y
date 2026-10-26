# Klassekart: slik legger du appen ut på nett

Denne mappen inneholder hele appen:

| Fil | Hva den gjør |
|---|---|
| `index.html` | Selve appen |
| `manifest.webmanifest` | Navn og ikon når appen legges på startskjermen |
| `sw.js` | Gjør at appen virker uten nett |
| `icons/` | App-ikoner |

**Viktig om personvern:** Det er bare selve programmet som legges på nett. Elevnavn, fravær, regler og nivå lagres **kun i nettleseren på enheten** til den som bruker appen, og sendes aldri noe sted.

---

## Del 1: Publiser gratis med GitHub Pages (ca. 10 minutter)

1. Gå til **github.com** og lag en konto. Bruk gjerne jobb-e-posten.
2. Trykk **+** øverst til høyre og velg **New repository**.
   - Repository name: `klassekart`
   - Velg **Public**. Gratisversjonen av GitHub Pages krever at koden er offentlig. Det er greit, fordi det ikke ligger noen elevdata i den.
   - Trykk **Create repository**.
3. På siden som kommer, trykker du lenken **uploading an existing file**.
   - Dra inn **alt innholdet i denne mappen**: `index.html`, `manifest.webmanifest`, `sw.js` og **hele mappen `icons`**.
   - Sjekk at `icons/…`-filene er med i listen før du går videre.
   - Trykk **Commit changes**.
4. Gå til **Settings → Pages** i menyen til venstre.
   - Under *Build and deployment* velger du **Source: Deploy from a branch**.
   - Velg **Branch: main** og mappe **/ (root)**, og trykk **Save**.
5. Vent 1–2 minutter og last siden på nytt. Adressen vises øverst, for eksempel:
   **`https://brukernavnet-ditt.github.io/klassekart/`**

Dette er lenken du åpner selv og deler med kolleger.

---

## Del 2: Installer appen på telefon, nettbrett og PC

**Android (Chrome):** Åpne adressen, trykk **⋮** øverst til høyre og velg **Installer app** eller **Legg til på startskjermen**.

**iPhone og iPad (Safari):** Åpne adressen i **Safari**, trykk **Del-knappen** (firkant med pil opp) og velg **Legg til på Hjem-skjerm**.

**PC eller Mac (Chrome/Edge):** Åpne adressen og trykk installer-ikonet i adressefeltet, eller velg menyen og **Installer Klassekart**.

Appen får eget ikon, åpnes i fullskjerm og virker uten nett etter at den er åpnet én gang.

---

## Del 3: Flytt klassene du allerede har

Hver enhet har sin egen lagring. Klassene i den gamle filen må derfor flyttes over:

1. Åpne den gamle filen (`klassekart_v3.html`) på PC-en og velg **⋯ → Eksporter backup**.
2. Åpne den nye appen og velg **⋯ → Importer backup**, og velg backup-filen.
3. Gjenta punkt 2 på hver enhet du vil bruke, for eksempel mobilen.

**iPhone og iPad:** **Installer appen på Hjem-skjermen først, og importer etterpå inne i appen.** En installert app på iPhone har egen lagring, atskilt fra Safari.

**Backup-filen inneholder personopplysninger om elever.** Flytt den via skolens OneDrive eller Teams, ikke med privat e-post.

---

## Del 4: Oppdatere appen senere

1. Gå til `klassekart` på GitHub, velg **Add file → Upload files**, last opp den nye `index.html` og trykk **Commit changes**.
2. Åpne `sw.js` på GitHub (blyant-ikonet) og øk versjonen på linjen `const VERSJON = "klassekart-1.0.0";`, for eksempel til `1.0.1`. Lagre med **Commit changes**.
3. Alle får den nye versjonen neste gang de åpner appen og har nett. Av og til må appen åpnes to ganger.

Klassene og innstillingene til brukerne påvirkes ikke av en oppdatering.

---

## Del 5: Før du deler med kolleger

- **Snakk med IKT-ansvarlig.** Vis til **⋯ → Om og personvern** i appen. Der står det at alt lagres lokalt, og at ingen opplysninger sendes noe sted.
- Første gang appen åpnes, vises en kort **Kom i gang**-veiledning. Den finnes også under **⋯ → Kom i gang**.
- På delte eller lånte enheter kan alle data slettes under **⋯ → Om og personvern → Slett alle klasser på denne enheten**.

## Greit å vite

- **Lyd på iPhone:** Tidtakeren og hjulet høres ikke når lydløs-bryteren på siden av telefonen er på.
- **Teste uten å publisere:** Dobbeltklikker du `index.html` på PC-en, virker appen som før. Den kan bare ikke installeres som app før den ligger på en nettadresse.
- **Tømmer du nettleserdata eller avinstallerer appen,** slettes klassene på den enheten. Ta backup jevnlig.
