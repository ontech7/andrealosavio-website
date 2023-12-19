import { Heading, Paragraph } from 'theme-ui';

import Layout from '@/components/layout';
import Section from '@/components/section';
import SectionWrapper from '@/components/section/wrapper';

import Link from '@/components/link';

export default function CookiePolicy() {
  return (
    <Layout
      title="Cookie Policy"
      description="La cookie policy di www.andrealosavio.com"
    >
      <Section id="cookie-policy" bg="lightBlue">
        <SectionWrapper 
          direction={["column", "column"]} 
          ssx={{
            "& h1": { my: "25px" },
            "& h2": { my: "20px" },
            "& h3": { my: "15px" },
            "& p": { mb: "10px" },
            "& a": { color: "darkGreen", fontWeight: 500 }
          }}
        >
          <Heading as="h1" variant="h1" color="black">Cookie Policy di andrealosavio.com</Heading>
          <Paragraph color="black">
            I Cookie sono costituiti da porzioni di codice installate all’interno del browser che assistono il Titolare nell’erogazione del Servizio in base alle finalità descritte. Alcune delle
            finalità di installazione dei Cookie potrebbero, inoltre, necessitare del consenso dell’Utente.
          </Paragraph>
          <Paragraph color="black">Quando l’installazione di Cookies avviene sulla base del consenso, tale consenso può essere revocato liberamente in ogni momento seguendo le istruzioni contenute in questo documento.</Paragraph>

          <Heading as="h2" variant="h2" color="black">Titolare del Trattamento dei Dati</Heading>
          <Paragraph color="black"><b>Andrea Losavio</b> - Milano, Italia</Paragraph>
          <Paragraph color="black"><b>Indirizzo email del Titolare</b>: losavio.business96@gmail.com</Paragraph>
          <Paragraph color="black">
            Dal momento che l’installazione di Cookie e di altri sistemi di tracciamento operata da terze parti tramite i servizi utilizzati all’interno di questo Sito Web non può essere tecnicamente
            controllata dal Titolare, ogni riferimento specifico a Cookie e sistemi di tracciamento installati da terze parti è da considerarsi indicativo. Per ottenere informazioni complete, l’Utente
            è invitato a consultare la privacy policy degli eventuali servizi terzi elencati in questo documento.
          </Paragraph>
          <Paragraph color="black">
            Vista l’oggettiva complessità di identificazione delle tecnologie basate sui Cookie l’Utente è invitato a contattare il Titolare qualora volesse ricevere qualunque approfondimento relativo
            all’utilizzo dei Cookie stessi tramite questo Sito Web.
          </Paragraph>

          <Heading as="h2" variant="h2" color="black">Cookie tecnici e di statistica aggregata</Heading>

          <Heading as="h3" variant="h3" color="black">Attività strettamente necessarie al funzionamento</Heading>
          <Paragraph color="black">
            Questo Sito Web utilizza Cookie per salvare la sessione dell’Utente e per svolgere altre attività strettamente necessarie al funzionamento di questo Sito Web, ad esempio in relazione alla
            distribuzione del traffico.
          </Paragraph>

          <Heading as="h3" variant="h3" color="black">Attività di salvataggio delle preferenze, ottimizzazione e statistica</Heading>
          <Paragraph color="black">
            Questo Sito Web utilizza Cookie per salvare le preferenze di navigazione ed ottimizzare l’esperienza di navigazione dell’Utente. Fra questi Cookie rientrano, ad esempio, quelli per
            impostare la lingua e la valuta o per la gestione di statistiche da parte del Titolare del sito.
          </Paragraph>

          <Heading as="h2" variant="h2" color="black">Altre tipologie di Cookie o strumenti terzi che potrebbero installarne</Heading>
          <Paragraph color="black">
            Alcuni dei servizi elencati di seguito raccolgono statistiche in forma aggregata ed anonima e potrebbero non richiedere il consenso dell’Utente o potrebbero essere gestiti direttamente dal
            Titolare – a seconda di quanto descritto – senza l’ausilio di terzi.
          </Paragraph>
          <Paragraph color="black">
            Qualora fra gli strumenti indicati in seguito fossero presenti servizi gestiti da terzi, questi potrebbero – in aggiunta a quanto specificato ed anche all’insaputa del Titolare – compiere
            attività di tracciamento dell’Utente. Per informazioni dettagliate in merito, si consiglia di consultare le privacy policy dei servizi elencati.
          </Paragraph>

          <Heading as="h2" variant="h2" color="black">Dettagli sul trattamento dei Dati Personali</Heading>
          <Paragraph color="black">I Dati Personali sono raccolti per le seguenti finalità ed utilizzando i seguenti servizi:</Paragraph>

          <Heading as="h3" variant="h3" color="black">Modulo di contatto</Heading>
          <Paragraph color="black">
            L’Utente, compilando con i propri Dati il modulo di contatto, acconsente al loro utilizzo per rispondere alle richieste di informazioni, di preventivo, o di qualunque altra natura indicata
            dall’intestazione del modulo.
          </Paragraph>
          <Paragraph color="black">Dati Personali raccolti: nome, email</Paragraph>

          <Heading as="h3" variant="h3" color="black">Vercel Analytics</Heading>
          <Paragraph color="black">Vercel Analytics è un software di statistica utilizzato da questo Sito Web per analizzare i dati in maniera diretta e senza l’ausilio di terzi.</Paragraph>
          <Paragraph color="black">Dati Personali raccolti: Cookie e Dati di utilizzo.</Paragraph>

          <Heading as="h3" variant="h3" color="black">HotJar</Heading>
          <Paragraph color="black">
            HotJar è un servizio di analisi web fornito da HotJar Ltd. HotJar utilizza i Dati Personali, raccolti in forma anonima su questo sito, allo scopo di tracciare ed esaminare l'utilizzo di
            questo Sito Web, sottoforma di report visuali chiamate "mappe termiche" che permettono di visualizzare quanto tempo gli utenti trascorrono su quali pagine, il tracciamento del cursore e i
            suoi click, e così via, ai fini di migliorare e ottimizzare l'esperienza utente.
          </Paragraph>
          <Paragraph color="black">Dati Personali raccolti: Cookie e Dati di utilizzo.</Paragraph>

          <Heading as="h3" variant="h3" color="black">Google Fonts</Heading>
          <Paragraph color="black">Google Fonts è un servizio di visualizzazione di stili di carattere gestito da Google Inc. che permette a questo Sito Web di integrare tali contenuti all’interno delle proprie pagine.</Paragraph>
          <Paragraph color="black">Dati Personali raccolti: Cookie e Dati di utilizzo.</Paragraph>
          <Paragraph color="black">
            Luogo del trattamento: USA - {" "}
            <Link newTab href="https://policies.google.com/privacy?hl=policies&gl=it">Privacy Policy</Link>
          </Paragraph>

          <Heading as="h2" variant="h2" color="black">Come posso esprimere il consenso all’installazione di Cookie?</Heading>
          <Paragraph color="black">
            In aggiunta a quanto indicato in questo documento, l’Utente può gestire le preferenze relative ai Cookie direttamente all’interno del proprio browser ed impedire – ad esempio – che terze
            parti possano installarne. Tramite le preferenze del browser è inoltre possibile eliminare i Cookie installati in passato, incluso il Cookie in cui venga eventualmente salvato il consenso
            all’installazione di Cookie da parte di questo sito. L’Utente può trovare informazioni su come gestire i Cookie con alcuni dei browser più diffusi ad esempio ai seguenti indirizzi: {" "}
            <Link newTab href="https://support.google.com/chrome/answer/95647?hl=it&p=cpn_cookies">Google Chrome</Link>,{" "}
            <Link newTab href="https://support.mozilla.org/it/kb/protezione-antitracciamento-avanzata-firefox-desktop?redirectslug=Attivare+e+disattivare+i+cookie&redirectlocale=it">Mozilla Firefox</Link>, {" "}
            <Link newTab href="https://support.apple.com/it-it/guide/safari/sfri11471/mac">Apple Safari</Link>,{" "}
            <Link newTab href="https://support.microsoft.com/it-it/windows/eliminare-e-gestire-i-cookie-168dab11-0753-043d-7c16-ede5947fc64d">Microsoft Internet Explorer</Link>{" "}
            e {" "}
            <Link newTab href="https://support.microsoft.com/it-it/microsoft-edge/eliminare-i-cookie-in-microsoft-edge-63947406-40ac-c3b8-57b9-2a946a29ae09">Microsoft Edge</Link>.
          </Paragraph>
          <Paragraph color="black">
            Con riferimento a Cookie installati da terze parti, l’Utente può inoltre gestire le proprie impostazioni e revocare il consenso visitando il relativo link di opt out (qualora disponibile),
            utilizzando gli strumenti descritti nella privacy policy della terza parte o contattando direttamente la stessa.
          </Paragraph>
          <Paragraph color="black">
            Fermo restando quanto precede, l’Utente può avvalersi delle informazioni fornite da {" "}
            <Link href="http://www.youronlinechoices.eu/" newTab rel="noreferrer noopener">EDAA</Link>{" "}
            (UE), Network Advertising Initiative (USA) e {" "}
            <Link href="https://www.aboutads.info/consumers/" newTab rel="noreferrer noopener">Digital Advertising Alliance</Link>{" "}
            (USA),{" "}
            <Link href="https://youradchoices.ca/understanding-online-advertising/" newTab rel="noreferrer noopener">DAAC</Link>{" "}
            (Canada),{" "}
            <Link href="http://www.ddai.info/optout" newTab rel="noreferrer noopener">DDAI</Link>{" "}
            (Giappone) o altri servizi analoghi. Con questi servizi è possibile gestire le preferenze di tracciamento della maggior parte degli strumenti pubblicitari. Il Titolare, pertanto, consiglia
            agli Utenti di utilizzare tali risorse in aggiunta alle informazioni fornite dal presente documento.
          </Paragraph>

          <Heading as="h2" variant="h2" color="black">Definizioni e riferimenti legali</Heading>

          <Heading as="h3" variant="h3" color="black">Dati Personali (o Dati)</Heading>
          <Paragraph color="black">
            Costituisce dato personale qualunque informazione che, direttamente o indirettamente, anche in collegamento con qualsiasi altra informazione, ivi compreso un numero di identificazione
            personale, renda identificata o identificabile una persona fisica.
          </Paragraph>

          <Heading as="h3" variant="h3" color="black">Dati di Utilizzo</Heading>
          <Paragraph color="black">
            Sono le informazioni raccolte automaticamente attraverso questo Sito Web (anche da applicazioni di parti terze integrate in questo Sito Web), tra cui: gli indirizzi IP o i nomi a dominio
            dei computer utilizzati dall’Utente che si connette con questo Sito Web, gli indirizzi in notazione URI (Uniform Resource Identifier), l’orario della richiesta, il metodo utilizzato
            nell’inoltrare la richiesta al server, la dimensione del file ottenuto in risposta, il codice numerico indicante lo stato della risposta dal server (buon fine, errore, ecc.) il paese di
            provenienza, le caratteristiche del browser e del sistema operativo utilizzati dal visitatore, le varie connotazioni temporali della visita (ad esempio il tempo di permanenza su ciascuna
            pagina) e i dettagli relativi all’itinerario seguito all’interno dell’Applicazione, con particolare riferimento alla sequenza delle pagine consultate, ai parametri relativi al sistema
            operativo e all’ambiente informatico dell’Utente.
          </Paragraph>

          <Heading as="h3" variant="h3" color="black">Utente</Heading>
          <Paragraph color="black">L’individuo che utilizza questo Sito Web che, salvo ove diversamente specificato, coincide con l’Interessato.</Paragraph>

          <Heading as="h3" variant="h3" color="black">Interessato</Heading>
          <Paragraph color="black">La persona fisica cui si riferiscono i Dati Personali.</Paragraph>

          <Heading as="h3" variant="h3" color="black">Responsabile del Trattamento (o Responsabile)</Heading>
          <Paragraph color="black">
            La persona fisica, giuridica, la pubblica amministrazione e qualsiasi altro ente che tratta dati personali per conto del Titolare, secondo quanto esposto nella presente privacy policy.
          </Paragraph>

          <Heading as="h3" variant="h3" color="black">Titolare del Trattamento (o Titolare)</Heading>
          <Paragraph color="black">
            La persona fisica o giuridica, l’autorità pubblica, il servizio o altro organismo che, singolarmente o insieme ad altri, determina le finalità e i mezzi del trattamento di dati personali e
            gli strumenti adottati, ivi comprese le misure di sicurezza relative al funzionamento ed alla fruizione di questo Sito Web. Il Titolare del Trattamento, salvo quanto diversamente
            specificato, è il titolare di questo Sito Web.
          </Paragraph>

          <Heading as="h3" variant="h3" color="black">Questo Sito Web(o questa Applicazione)</Heading>
          <Paragraph color="black">Lo strumento hardware o software mediante il quale sono raccolti e trattati i Dati Personali degli Utenti.</Paragraph>

          <Heading as="h3" variant="h3" color="black">Servizio</Heading>
          <Paragraph color="black">Il Servizio fornito da questo Sito Web così come definito nei relativi termini (se presenti) su questo sito/applicazione.</Paragraph>

          <Heading as="h3" variant="h3" color="black">Unione Europea (o UE)</Heading>
          <Paragraph color="black">
            Salvo ove diversamente specificato, ogni riferimento all’Unione Europea contenuto in questo documento si intende esteso a tutti gli attuali stati membri dell’Unione Europea e dello Spazio
            Economico Europeo.
          </Paragraph>

          <Heading as="h3" variant="h3" color="black">Cookie</Heading>
          <Paragraph color="black">Piccola porzione di dati conservata all’interno del dispositivo dell’Utente.</Paragraph>

          <Heading as="h2" variant="h2" color="black">Riferimenti legali</Heading>
          <Paragraph color="black">La presente informativa privacy è redatta sulla base di molteplici ordinamenti legislativi, inclusi gli artt. 13 e 14 del Regolamento (UE) 2016/679.</Paragraph>
          <Paragraph color="black">Ove non diversamente specificato, questa informativa privacy riguarda esclusivamente questo Sito Web.</Paragraph>

          <Paragraph color="black" sx={{ fontStyle: "italic", mt: "20px" }}>Ultima modifica: 18 dicembre 2023</Paragraph>
        </SectionWrapper>
      </Section>
    </Layout>
  )
}