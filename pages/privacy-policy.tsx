import { Heading, Paragraph } from 'theme-ui';

import Layout from '@/components/layout';
import Section from '@/components/section';
import SectionWrapper from '@/components/section/wrapper';

import Link from '@/components/link';

export default function PrivacyPolicy() {
  return (
    <Layout
      title="Privacy Policy"
      description="La privacy policy di www.andrealosavio.com"
    >
      <Section id="privacy-policy">
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
          <Heading as="h1" variant="h1" color="black">Privacy Policy di andrealosavio.com</Heading>
          <Paragraph color="black">Questo Sito Web raccoglie alcuni Dati Personali dei propri Utenti</Paragraph>

          <Heading as="h2" variant="h2" color="black">Titolare del Trattamento dei Dati</Heading>
          <Paragraph color="black"><b>Andrea Losavio</b> - Milano, Italia</Paragraph>
          <Paragraph color="black"><b>Indirizzo email del Titolare</b>: losavio.business96@gmail.com</Paragraph>

          <Heading as="h2" variant="h2" color="black">Tipologie di Dati Raccolti</Heading>
          <Paragraph color="black">
            Fra i Dati Personali raccolti da questo Sito Web, in modo autonomo o tramite terze parti, ci sono: Cookie; Dati di utilizzo; email; nome; Dati comunicati durante l’utilizzo del servizio.
          </Paragraph>
          <Paragraph color="black">
            Dettagli completi su ciascuna tipologia di dati raccolti sono forniti nelle sezioni dedicate di questa privacy policy o mediante specifici testi informativi visualizzati prima della
            raccolta dei dati stessi. I Dati Personali possono essere liberamente forniti dall’Utente o, nel caso di Dati di Utilizzo, raccolti automaticamente durante l’uso di questo Sito Web. Se non
            diversamente specificato, tutti i Dati richiesti da questo Sito Web sono obbligatori. Se l’Utente rifiuta di comunicarli, potrebbe essere impossibile per questo Sito Web fornire il
            Servizio. Nei casi in cui questo Sito Web indichi alcuni Dati come facoltativi, gli Utenti sono liberi di astenersi dal comunicare tali Dati, senza che ciò abbia alcuna conseguenza sulla
            disponibilità del Servizio o sulla sua operatività. Gli Utenti che dovessero avere dubbi su quali Dati siano obbligatori, sono incoraggiati a contattare il Titolare. L’eventuale utilizzo
            di Cookie – o di altri strumenti di tracciamento – da parte di questo Sito Web o dei titolari dei servizi terzi utilizzati da questo Sito Web, ove non diversamente precisato, ha la
            finalità di fornire il Servizio richiesto dall’Utente, oltre alle ulteriori finalità descritte nel presente documento e nella Cookie Policy, se disponibile.
          </Paragraph>
          <Paragraph color="black">
            L’Utente si assume la responsabilità dei Dati Personali di terzi ottenuti, pubblicati o condivisi mediante questo Sito Web e garantisce di avere il diritto di comunicarli o diffonderli,
            liberando il Titolare da qualsiasi responsabilità verso terzi.
          </Paragraph>

          <Heading as="h2" variant="h2" color="black">Modalità e luogo del trattamento dei Dati raccolti</Heading>

          <Heading as="h3" variant="h3" color="black">Modalità di trattamento</Heading>
          <Paragraph color="black">
            Il Titolare adotta le opportune misure di sicurezza volte ad impedire l’accesso, la divulgazione, la modifica o la distruzione non autorizzate dei Dati Personali. Il trattamento viene
            effettuato mediante strumenti informatici e/o telematici, con modalità organizzative e con logiche strettamente correlate alle finalità indicate. Oltre al Titolare, in alcuni casi,
            potrebbero avere accesso ai Dati altri soggetti coinvolti nell’organizzazione di questo Sito Web (personale amministrativo, commerciale, marketing, legali, amministratori di sistema)
            ovvero soggetti esterni (come fornitori di servizi tecnici terzi, corrieri postali, hosting provider, società informatiche, agenzie di comunicazione) nominati anche, se necessario,
            Responsabili del Trattamento da parte del Titolare. L’elenco aggiornato dei Responsabili potrà sempre essere richiesto al Titolare del Trattamento.
          </Paragraph>

          <Heading as="h3" variant="h3" color="black">Base giuridica del trattamento</Heading>
          <Paragraph color="black">Il Titolare tratta Dati Personali relativi all’Utente in caso sussista una delle seguenti condizioni:</Paragraph>
          <ul>
            <li>
              l’Utente ha prestato il consenso per una o più finalità specifiche; Nota: in alcuni ordinamenti il Titolare può essere autorizzato a trattare Dati Personali senza che debba sussistere il
              consenso dell’Utente o un’altra delle basi giuridiche specificate di seguito, fino a quando l’Utente non si opponga (“opt-out”) a tale trattamento. Ciò non è tuttavia applicabile qualora
              il trattamento di Dati Personali sia regolato dalla legislazione europea in materia di protezione dei Dati Personali;
            </li>
            <li>il trattamento è necessario all’esecuzione di un contratto con l’Utente e/o all’esecuzione di misure precontrattuali;</li>
            <li>il trattamento è necessario per adempiere un obbligo legale al quale è soggetto il Titolare;</li>
            <li>il trattamento è necessario per l’esecuzione di un compito di interesse pubblico o per l’esercizio di pubblici poteri di cui è investito il Titolare;</li>
            <li>il trattamento è necessario per il perseguimento del legittimo interesse del Titolare o di terzi.</li>
          </ul>
          <Paragraph color="black">
            È comunque sempre possibile richiedere al Titolare di chiarire la concreta base giuridica di ciascun trattamento ed in particolare di specificare se il trattamento sia basato sulla legge,
            previsto da un contratto o necessario per concludere un contratto.
          </Paragraph>

          <Heading as="h3" variant="h3" color="black">Luogo</Heading>
          <Paragraph color="black">
            I Dati sono trattati presso le sedi operative del Titolare ed in ogni altro luogo in cui le parti coinvolte nel trattamento siano localizzate. Per ulteriori informazioni, contatta il
            Titolare. I Dati Personali dell’Utente potrebbero essere trasferiti in un paese diverso da quello in cui l’Utente si trova. Per ottenere ulteriori informazioni sul luogo del trattamento
            l’Utente può fare riferimento alla sezione relativa ai dettagli sul trattamento dei Dati Personali.
          </Paragraph>
          <Paragraph color="black">
            L’Utente ha diritto a ottenere informazioni in merito alla base giuridica del trasferimento di Dati al di fuori dell’Unione Europea o ad un’organizzazione internazionale di diritto
            internazionale pubblico o costituita da due o più paesi, come ad esempio l’ONU, nonché in merito alle misure di sicurezza adottate dal Titolare per proteggere i Dati.
          </Paragraph>
          <Paragraph color="black">
            L’Utente può verificare se abbia luogo uno dei trasferimenti appena descritti esaminando la sezione di questo documento relativa ai dettagli sul trattamento di Dati Personali o chiedere
            informazioni al Titolare contattandolo agli estremi riportati in apertura.
          </Paragraph>

          <Heading as="h3" variant="h3" color="black">Periodo di conservazione</Heading>
          <Paragraph color="black">I Dati sono trattati e conservati per il tempo richiesto dalle finalità per le quali sono stati raccolti.</Paragraph>
          <Paragraph color="black">Pertanto:</Paragraph>
          <ul>
            <li>
              I Dati Personali raccolti per scopi collegati all’esecuzione di un contratto tra il Titolare e l’Utente saranno trattenuti sino a quando sia completata l’esecuzione di tale contratto.
            </li>
            <li>
              I Dati Personali raccolti per finalità riconducibili all’interesse legittimo del Titolare saranno trattenuti sino al soddisfacimento di tale interesse. L’Utente può ottenere ulteriori
              informazioni in merito all’interesse legittimo perseguito dal Titolare nelle relative sezioni di questo documento o contattando il Titolare.
            </li>
          </ul>
          <Paragraph color="black">
            Quando il trattamento è basato sul consenso dell’Utente, il Titolare può conservare i Dati Personali più a lungo sino a quando detto consenso non venga revocato. Inoltre, il Titolare
            potrebbe essere obbligato a conservare i Dati Personali per un periodo più lungo in ottemperanza ad un obbligo di legge o per ordine di un’autorità.
          </Paragraph>
          <Paragraph color="black">
            Al termine del periodo di conservazione i Dati Personali saranno cancellati. Pertanto, allo spirare di tale termine il diritto di accesso, cancellazione, rettificazione ed il diritto alla
            portabilità dei Dati non potranno più essere esercitati.
          </Paragraph>

          <Heading as="h2" variant="h2" color="black">Finalità del Trattamento dei Dati raccolti</Heading>
          <Paragraph color="black">
            I Dati dell’Utente sono raccolti per consentire al Titolare di fornire i propri Servizi, così come per le seguenti finalità: Affiliazione commerciale, Commento dei contenuti, Contattare
            l’Utente, Gestione dei pagamenti, Gestione delle richieste di supporto e contatto, Gestione contatti e invio di messaggi, Interazione con social network e piattaforme esterne,
            Ottimizzazione e distribuzione del traffico, Pubblicità, Remarketing e behavioral targeting, Hosting ed infrastruttura backend, Statistica, Visualizzazione di contenuti da piattaforme
            esterne e Interazione con le piattaforme di live chat.
          </Paragraph>
          <Paragraph color="black">
            Per ottenere ulteriori informazioni dettagliate sulle finalità del trattamento e sui Dati Personali concretamente rilevanti per ciascuna finalità, l’Utente può fare riferimento alle
            relative sezioni di questo documento.
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

          <Heading as="h2" variant="h2" color="black">Diritti dell'Utente</Heading>
          <Paragraph color="black">Gli Utenti possono esercitare determinati diritti con riferimento ai Dati trattati dal Titolare.</Paragraph>
          <Paragraph color="black">In particolare, l’Utente ha il diritto di:</Paragraph>
          <ul>
            <li><b>revocare il consenso in ogni momento.</b> L’Utente può revocare il consenso al trattamento dei propri Dati Personali precedentemente espresso.</li>
            <li>
              <b>opporsi al trattamento dei propri Dati.</b> L’Utente può opporsi al trattamento dei propri Dati quando esso avviene su una base giuridica diversa dal consenso. Ulteriori dettagli sul
              diritto di opposizione sono indicati nella sezione sottostante.
            </li>
            <li>
              <b>accedere ai propri Dati.</b> L’Utente ha diritto ad ottenere informazioni sui Dati trattati dal Titolare, su determinati aspetti del trattamento ed a ricevere una copia dei Dati
              trattati.
            </li>
            <li><b>verificare e chiedere la rettificazione.</b> L’Utente può verificare la correttezza dei propri Dati e richiederne l’aggiornamento o la correzione.</li>
            <li>
              <b>ottenere la limitazione del trattamento.</b> Quando ricorrono determinate condizioni, l’Utente può richiedere la limitazione del trattamento dei propri Dati. In tal caso il Titolare
              non tratterà i Dati per alcun altro scopo se non la loro conservazione.
            </li>
            <li>
              <b>ottenere la cancellazione o rimozione dei propri Dati Personali.</b>
              Quando ricorrono determinate condizioni, l’Utente può richiedere la cancellazione dei propri Dati da parte del Titolare.
            </li>
            <li>
              <b>ricevere i propri Dati o farli trasferire ad altro titolare.</b>
              L’Utente ha diritto di ricevere i propri Dati in formato strutturato, di uso comune e leggibile da dispositivo automatico e, ove tecnicamente fattibile, di ottenerne il trasferimento
              senza ostacoli ad un altro titolare. Questa disposizione è applicabile quando i Dati sono trattati con strumenti automatizzati ed il trattamento è basato sul consenso dell’Utente, su un
              contratto di cui l’Utente è parte o su misure contrattuali ad esso connesse.
            </li>
            <li><b>proporre reclamo.</b> L’Utente può proporre un reclamo all’autorità di controllo della protezione dei dati personali competente o agire in sede giudiziale.</li>
          </ul>

          <Heading as="h3" variant="h3" color="black">Dettagli sul diritto di opposizione</Heading>
          <Paragraph color="black">
            Quando i Dati Personali sono trattati nell’interesse pubblico, nell’esercizio di pubblici poteri di cui è investito il Titolare oppure per perseguire un interesse legittimo del Titolare,
            gli Utenti hanno diritto ad opporsi al trattamento per motivi connessi alla loro situazione particolare.
          </Paragraph>
          <Paragraph color="black">
            Si fa presente agli Utenti che, ove i loro Dati fossero trattati con finalità di marketing diretto, possono opporsi al trattamento senza fornire alcuna motivazione. Per scoprire se il
            Titolare tratti dati con finalità di marketing diretto gli Utenti possono fare riferimento alle rispettive sezioni di questo documento.
          </Paragraph>

          <Heading as="h3" variant="h3" color="black">Come esercitare i diritti</Heading>
          <Paragraph color="black">
            Per esercitare i diritti dell’Utente, gli Utenti possono indirizzare una richiesta agli estremi di contatto del Titolare indicati in questo documento. Le richieste sono depositate a titolo
            gratuito e evase dal Titolare nel più breve tempo possibile, in ogni caso entro un mese.
          </Paragraph>

          <Heading as="h2" variant="h2" color="black">Cookie Policy</Heading>
          <Paragraph color="black">
            Questo Sito Web fa utilizzo di Cookie. Per saperne di più e per prendere visione dell’informativa dettagliata, l’Utente può consultare la {" "}
            <Link newTab href="/cookie-policy">Cookie Policy</Link>.
          </Paragraph>

          <Heading as="h2" variant="h2" color="black">Ulteriori informazioni sul trattamento</Heading>

          <Heading as="h3" variant="h3" color="black">Difesa in giudizio</Heading>
          <Paragraph color="black">
            I Dati Personali dell’Utente possono essere utilizzati da parte del Titolare in giudizio o nelle fasi preparatorie alla sua eventuale instaurazione per la difesa da abusi nell’utilizzo di
            questo Sito Web o dei Servizi connessi da parte dell’Utente. L’Utente dichiara di essere consapevole che il Titolare potrebbe essere obbligato a rivelare i Dati per ordine delle autorità
            pubbliche.
          </Paragraph>

          <Heading as="h3" variant="h3" color="black">Informative specifiche</Heading>
          <Paragraph color="black">
            Su richiesta dell’Utente, in aggiunta alle informazioni contenute in questa privacy policy, questo Sito Web potrebbe fornire all’Utente delle informative aggiuntive e contestuali
            riguardanti Servizi specifici, o la raccolta ed il trattamento di Dati Personali.
          </Paragraph>

          <Heading as="h3" variant="h3" color="black">Log di sistema e manutenzione</Heading>
          <Paragraph color="black">
            Per necessità legate al funzionamento ed alla manutenzione, questo Sito Web e gli eventuali servizi terzi da essa utilizzati potrebbero raccogliere log di sistema, ossia file che
            registrano le interazioni e che possono contenere anche Dati Personali, quali l’indirizzo IP Utente.
          </Paragraph>

          <Heading as="h3" variant="h3" color="black">Informazioni non contenute in questa policy</Heading>
          <Paragraph color="black">Ulteriori informazioni in relazione al trattamento dei Dati Personali potranno essere richieste in qualsiasi momento al Titolare del Trattamento utilizzando gli estremi di contatto.</Paragraph>

          <Heading as="h3" variant="h3" color="black">Risposta alle richieste “Do Not Track”</Heading>
          <Paragraph color="black">
            Questo Sito Web non supporta le richieste “Do Not Track”. Per scoprire se gli eventuali servizi di terze parti utilizzati le supportino, l’Utente è invitato a consultare le rispettive
            privacy policy.
          </Paragraph>

          <Heading as="h3" variant="h3" color="black">Modifiche a questa privacy policy</Heading>
          <Paragraph color="black">
            Il Titolare del Trattamento si riserva il diritto di apportare modifiche alla presente privacy policy in qualunque momento dandone informazione agli Utenti su questa pagina e, se
            possibile, su questo Sito Web nonché, qualora tecnicamente e legalmente fattibile, inviando una notifica agli Utenti attraverso uno degli estremi di contatto di cui è in possesso il
            Titolare . Si prega dunque di consultare regolarmente questa pagina, facendo riferimento alla data di ultima modifica indicata in fondo.
          </Paragraph>
          <Paragraph color="black">Qualora le modifiche interessino trattamenti la cui base giuridica è il consenso, il Titolare provvederà a raccogliere nuovamente il consenso dell’Utente, se necessario.</Paragraph>

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