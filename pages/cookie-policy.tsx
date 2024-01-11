import type { NextPage } from 'next';

import Link from '@/components/ui/core/link';
import Text from '@/components/ui/core/text';

import Layout from '@/components/layout';
import Section from '@/components/ui/common/section';
import SectionWrapper from '@/components/ui/common/section/wrapper';

const CookiePolicyPage: NextPage = () => {
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
            "& a": { color: "darkGreen", fontWeight: "medium" }
          }}
        >
          <Text as="h1" color="black">Cookie Policy di andrealosavio.com</Text>
          <Text color="black">
            I Cookie sono costituiti da porzioni di codice installate all’interno del browser che assistono il Titolare nell’erogazione del Servizio in base alle finalità descritte. Alcune delle
            finalità di installazione dei Cookie potrebbero, inoltre, necessitare del consenso dell’Utente.
          </Text>
          <Text color="black">Quando l’installazione di Cookies avviene sulla base del consenso, tale consenso può essere revocato liberamente in ogni momento seguendo le istruzioni contenute in questo documento.</Text>

          <Text as="h2" color="black">Titolare del Trattamento dei Dati</Text>
          <Text color="black"><b>Andrea Losavio</b> - Milano, Italia</Text>
          <Text color="black"><b>Indirizzo email del Titolare</b>: losavio.business96@gmail.com</Text>
          <Text color="black">
            Dal momento che l’installazione di Cookie e di altri sistemi di tracciamento operata da terze parti tramite i servizi utilizzati all’interno di questo Sito Web non può essere tecnicamente
            controllata dal Titolare, ogni riferimento specifico a Cookie e sistemi di tracciamento installati da terze parti è da considerarsi indicativo. Per ottenere informazioni complete, l’Utente
            è invitato a consultare la privacy policy degli eventuali servizi terzi elencati in questo documento.
          </Text>
          <Text color="black">
            Vista l’oggettiva complessità di identificazione delle tecnologie basate sui Cookie l’Utente è invitato a contattare il Titolare qualora volesse ricevere qualunque approfondimento relativo
            all’utilizzo dei Cookie stessi tramite questo Sito Web.
          </Text>

          <Text as="h2" color="black">Cookie tecnici e di statistica aggregata</Text>

          <Text as="h3" color="black">Attività strettamente necessarie al funzionamento</Text>
          <Text color="black">
            Questo Sito Web utilizza Cookie per salvare la sessione dell’Utente e per svolgere altre attività strettamente necessarie al funzionamento di questo Sito Web, ad esempio in relazione alla
            distribuzione del traffico.
          </Text>

          <Text as="h3" color="black">Attività di salvataggio delle preferenze, ottimizzazione e statistica</Text>
          <Text color="black">
            Questo Sito Web utilizza Cookie per salvare le preferenze di navigazione ed ottimizzare l’esperienza di navigazione dell’Utente. Fra questi Cookie rientrano, ad esempio, quelli per
            impostare la lingua e la valuta o per la gestione di statistiche da parte del Titolare del sito.
          </Text>

          <Text as="h2" color="black">Altre tipologie di Cookie o strumenti terzi che potrebbero installarne</Text>
          <Text color="black">
            Alcuni dei servizi elencati di seguito raccolgono statistiche in forma aggregata ed anonima e potrebbero non richiedere il consenso dell’Utente o potrebbero essere gestiti direttamente dal
            Titolare – a seconda di quanto descritto – senza l’ausilio di terzi.
          </Text>
          <Text color="black">
            Qualora fra gli strumenti indicati in seguito fossero presenti servizi gestiti da terzi, questi potrebbero – in aggiunta a quanto specificato ed anche all’insaputa del Titolare – compiere
            attività di tracciamento dell’Utente. Per informazioni dettagliate in merito, si consiglia di consultare le privacy policy dei servizi elencati.
          </Text>

          <Text as="h2" color="black">Dettagli sul trattamento dei Dati Personali</Text>
          <Text color="black">I Dati Personali sono raccolti per le seguenti finalità ed utilizzando i seguenti servizi:</Text>

          <Text as="h3" color="black">Modulo di contatto</Text>
          <Text color="black">
            L’Utente, compilando con i propri Dati il modulo di contatto, acconsente al loro utilizzo per rispondere alle richieste di informazioni, di preventivo, o di qualunque altra natura indicata
            dall’intestazione del modulo.
          </Text>
          <Text color="black">Dati Personali raccolti: nome, email</Text>

          <Text as="h3" color="black">Vercel Analytics</Text>
          <Text color="black">Vercel Analytics è un software di statistica utilizzato da questo Sito Web per analizzare i dati in maniera diretta e senza l’ausilio di terzi.</Text>
          <Text color="black">Dati Personali raccolti: Cookie e Dati di utilizzo.</Text>

          <Text as="h3" color="black">HotJar</Text>
          <Text color="black">
            HotJar è un servizio di analisi web fornito da HotJar Ltd. HotJar utilizza i Dati Personali, raccolti in forma anonima su questo sito, allo scopo di tracciare ed esaminare l'utilizzo di
            questo Sito Web, sottoforma di report visuali chiamate "mappe termiche" che permettono di visualizzare quanto tempo gli utenti trascorrono su quali pagine, il tracciamento del cursore e i
            suoi click, e così via, ai fini di migliorare e ottimizzare l'esperienza utente.
          </Text>
          <Text color="black">Dati Personali raccolti: Cookie e Dati di utilizzo.</Text>

          <Text as="h3" color="black">Google Fonts</Text>
          <Text color="black">Google Fonts è un servizio di visualizzazione di stili di carattere gestito da Google Inc. che permette a questo Sito Web di integrare tali contenuti all’interno delle proprie pagine.</Text>
          <Text color="black">Dati Personali raccolti: Cookie e Dati di utilizzo.</Text>
          <Text color="black">
            Luogo del trattamento: USA - {" "}
            <Link target="_blank" href="https://policies.google.com/privacy?hl=policies&gl=it">Privacy Policy</Link>
          </Text>

          <Text as="h2" color="black">Come posso esprimere il consenso all’installazione di Cookie?</Text>
          <Text color="black">
            In aggiunta a quanto indicato in questo documento, l’Utente può gestire le preferenze relative ai Cookie direttamente all’interno del proprio browser ed impedire – ad esempio – che terze
            parti possano installarne. Tramite le preferenze del browser è inoltre possibile eliminare i Cookie installati in passato, incluso il Cookie in cui venga eventualmente salvato il consenso
            all’installazione di Cookie da parte di questo sito. L’Utente può trovare informazioni su come gestire i Cookie con alcuni dei browser più diffusi ad esempio ai seguenti indirizzi: {" "}
            <Link target="_blank" href="https://support.google.com/chrome/answer/95647?hl=it&p=cpn_cookies">Google Chrome</Link>,{" "}
            <Link target="_blank" href="https://support.mozilla.org/it/kb/protezione-antitracciamento-avanzata-firefox-desktop?redirectslug=Attivare+e+disattivare+i+cookie&redirectlocale=it">Mozilla Firefox</Link>, {" "}
            <Link target="_blank" href="https://support.apple.com/it-it/guide/safari/sfri11471/mac">Apple Safari</Link>,{" "}
            <Link target="_blank" href="https://support.microsoft.com/it-it/windows/eliminare-e-gestire-i-cookie-168dab11-0753-043d-7c16-ede5947fc64d">Microsoft Internet Explorer</Link>{" "}
            e {" "}
            <Link target="_blank" href="https://support.microsoft.com/it-it/microsoft-edge/eliminare-i-cookie-in-microsoft-edge-63947406-40ac-c3b8-57b9-2a946a29ae09">Microsoft Edge</Link>.
          </Text>
          <Text color="black">
            Con riferimento a Cookie installati da terze parti, l’Utente può inoltre gestire le proprie impostazioni e revocare il consenso visitando il relativo link di opt out (qualora disponibile),
            utilizzando gli strumenti descritti nella privacy policy della terza parte o contattando direttamente la stessa.
          </Text>
          <Text color="black">
            Fermo restando quanto precede, l’Utente può avvalersi delle informazioni fornite da {" "}
            <Link href="http://www.youronlinechoices.eu/" target="_blank" rel="noreferrer noopener">EDAA</Link>{" "}
            (UE), Network Advertising Initiative (USA) e {" "}
            <Link href="https://www.aboutads.info/consumers/" target="_blank" rel="noreferrer noopener">Digital Advertising Alliance</Link>{" "}
            (USA),{" "}
            <Link href="https://youradchoices.ca/understanding-online-advertising/" target="_blank" rel="noreferrer noopener">DAAC</Link>{" "}
            (Canada),{" "}
            <Link href="http://www.ddai.info/optout" target="_blank" rel="noreferrer noopener">DDAI</Link>{" "}
            (Giappone) o altri servizi analoghi. Con questi servizi è possibile gestire le preferenze di tracciamento della maggior parte degli strumenti pubblicitari. Il Titolare, pertanto, consiglia
            agli Utenti di utilizzare tali risorse in aggiunta alle informazioni fornite dal presente documento.
          </Text>

          <Text as="h2" color="black">Definizioni e riferimenti legali</Text>

          <Text as="h3" color="black">Dati Personali (o Dati)</Text>
          <Text color="black">
            Costituisce dato personale qualunque informazione che, direttamente o indirettamente, anche in collegamento con qualsiasi altra informazione, ivi compreso un numero di identificazione
            personale, renda identificata o identificabile una persona fisica.
          </Text>

          <Text as="h3" color="black">Dati di Utilizzo</Text>
          <Text color="black">
            Sono le informazioni raccolte automaticamente attraverso questo Sito Web (anche da applicazioni di parti terze integrate in questo Sito Web), tra cui: gli indirizzi IP o i nomi a dominio
            dei computer utilizzati dall’Utente che si connette con questo Sito Web, gli indirizzi in notazione URI (Uniform Resource Identifier), l’orario della richiesta, il metodo utilizzato
            nell’inoltrare la richiesta al server, la dimensione del file ottenuto in risposta, il codice numerico indicante lo stato della risposta dal server (buon fine, errore, ecc.) il paese di
            provenienza, le caratteristiche del browser e del sistema operativo utilizzati dal visitatore, le varie connotazioni temporali della visita (ad esempio il tempo di permanenza su ciascuna
            pagina) e i dettagli relativi all’itinerario seguito all’interno dell’Applicazione, con particolare riferimento alla sequenza delle pagine consultate, ai parametri relativi al sistema
            operativo e all’ambiente informatico dell’Utente.
          </Text>

          <Text as="h3" color="black">Utente</Text>
          <Text color="black">L’individuo che utilizza questo Sito Web che, salvo ove diversamente specificato, coincide con l’Interessato.</Text>

          <Text as="h3" color="black">Interessato</Text>
          <Text color="black">La persona fisica cui si riferiscono i Dati Personali.</Text>

          <Text as="h3" color="black">Responsabile del Trattamento (o Responsabile)</Text>
          <Text color="black">
            La persona fisica, giuridica, la pubblica amministrazione e qualsiasi altro ente che tratta dati personali per conto del Titolare, secondo quanto esposto nella presente privacy policy.
          </Text>

          <Text as="h3" color="black">Titolare del Trattamento (o Titolare)</Text>
          <Text color="black">
            La persona fisica o giuridica, l’autorità pubblica, il servizio o altro organismo che, singolarmente o insieme ad altri, determina le finalità e i mezzi del trattamento di dati personali e
            gli strumenti adottati, ivi comprese le misure di sicurezza relative al funzionamento ed alla fruizione di questo Sito Web. Il Titolare del Trattamento, salvo quanto diversamente
            specificato, è il titolare di questo Sito Web.
          </Text>

          <Text as="h3" color="black">Questo Sito Web(o questa Applicazione)</Text>
          <Text color="black">Lo strumento hardware o software mediante il quale sono raccolti e trattati i Dati Personali degli Utenti.</Text>

          <Text as="h3" color="black">Servizio</Text>
          <Text color="black">Il Servizio fornito da questo Sito Web così come definito nei relativi termini (se presenti) su questo sito/applicazione.</Text>

          <Text as="h3" color="black">Unione Europea (o UE)</Text>
          <Text color="black">
            Salvo ove diversamente specificato, ogni riferimento all’Unione Europea contenuto in questo documento si intende esteso a tutti gli attuali stati membri dell’Unione Europea e dello Spazio
            Economico Europeo.
          </Text>

          <Text as="h3" color="black">Cookie</Text>
          <Text color="black">Piccola porzione di dati conservata all’interno del dispositivo dell’Utente.</Text>

          <Text as="h2" color="black">Riferimenti legali</Text>
          <Text color="black">La presente informativa privacy è redatta sulla base di molteplici ordinamenti legislativi, inclusi gli artt. 13 e 14 del Regolamento (UE) 2016/679.</Text>
          <Text color="black">Ove non diversamente specificato, questa informativa privacy riguarda esclusivamente questo Sito Web.</Text>

          <Text color="black" ssx={{ fontStyle: "italic", mt: "20px" }}>Ultima modifica: 18 dicembre 2023</Text>
        </SectionWrapper>
      </Section>
    </Layout>
  )
}

export default CookiePolicyPage;