import React from 'react'
import NavBar from "@movit/ui-layout/Navbar/NavBar";

export default function Dsgvo() {
  return (
    <>
      <NavBar/>
      <div className="container pt-5">
        <div className="page--dsgvo col-md-12">
          <div className="tabs tabs-nav-side tabs-nav-shadowed">
            <nav className="tab-nav-menu">
              <h2>Datenschutz</h2>
              <div className="nav nav-tabs" id="nav-tab" role="tablist">
                <button
                  className="nav-link active"
                  id="nav-home-tab"
                  data-bs-toggle="tab"
                  data-bs-target="#nav-home"
                  type="button"
                  role="tab"
                  aria-controls="nav-home"
                  aria-selected="true"
                >
                  Kontaktdaten
                </button>
                <button
                  className="nav-link"
                  id="nav-profile-tab"
                  data-bs-toggle="tab"
                  data-bs-target="#nav-profile"
                  type="button"
                  role="tab"
                  aria-controls="nav-profile"
                  aria-selected="false"
                >
                  Erhebung und Speicherung der Daten
                </button>
                <button
                  className="nav-link"
                  id="nav-contact-tab"
                  data-bs-toggle="tab"
                  data-bs-target="#nav-contact"
                  type="button"
                  role="tab"
                  aria-controls="nav-contact"
                  aria-selected="false"
                >
                  Verschlüsselung
                </button>
                <button
                  className="nav-link"
                  id="nav-disabled-tab"
                  data-bs-toggle="tab"
                  data-bs-target="#nav-disabled"
                  type="button"
                  role="tab"
                  aria-controls="nav-disabled"
                  aria-selected="false"
                >
                  Cookies & Systembedingt Daten
                </button>

                <button
                  className="nav-link"
                  id="nav-disabled-tab"
                  data-bs-toggle="tab"
                  data-bs-target="#nav-disabled"
                  type="button"
                  role="tab"
                  aria-controls="nav-disabled"
                  aria-selected="false"
                >
                  Externe Anbiter
                </button>
                <button
                  className="nav-link"
                  id="nav-disabled-tab"
                  data-bs-toggle="tab"
                  data-bs-target="#nav-disabled"
                  type="button"
                  role="tab"
                  aria-controls="nav-disabled"
                  aria-selected="false"
                >
                  Rechte & Auskunft
                </button>
                <button
                  className="nav-link"
                  id="nav-disabled-tab"
                  data-bs-toggle="tab"
                  data-bs-target="#nav-disabled"
                  type="button"
                  role="tab"
                  aria-controls="nav-disabled"
                  aria-selected="false"
                >
                  Änderung
                </button>
              </div>
            </nav>
            <div className="tab-content" id="nav-tabContent">
              <div
                className="tab-pane fade show active"
                id="nav-home"
                role="tabpanel"
                aria-labelledby="nav-home-tab"
              >
                <h4 className="mt-0">
                  Name und Kontaktdaten des für die Verarbeitung
                  Verantwortlichen sowie des betrieblichen
                  Datenschutzbeauftragten
                </h4>

                <br />

                <div>
                  <p>
                    Diese Datenschutzerklärung gilt für die Datenverarbeitung
                    durch:
                  </p>
                  <p>
                    Verantwortlicher:
                    <b>Movit</b> <br />
                    Zürich, 8049 CH <br />
                    Email: <a href="mailto:info@mymovit.com"> info@movit.ch</a>
                  </p>
                </div>

                <hr />
              </div>

              <div
                className="tab-pane fade"
                id="nav-profile"
                role="tabpanel"
                aria-labelledby="nav-profile-tab"
              >
                <h4 className="mt-0">
                  Erhebung und Speicherung personenbezogener Daten sowie Art und
                  Zweck und deren Verwendung
                </h4>

                <div className="">
                  <p>
                    (1) Beim Aufrufen unserer Website werden durch den auf Ihrem
                    Endgerät zum Einsatz kommenden Browser automatisch
                    Informationen an den Server unserer Website gesendet. Diese
                    Informationen werden temporär in einem sog. Logfile
                    gespeichert. Folgende Informationen werden dabei ohne Ihr
                    Zutun erhoben und gespeichert und nach 30 Tagen automatisch
                    anonymisiert:
                  </p>

                  <ul>
                    <li>IP-Adresse des anfragenden Rechners,</li>
                    <li>Datum und Uhrzeit des Zugriffs,</li>
                    <li>Name und URL der abgerufenen Datei,</li>
                    <li>
                      Website, von der aus der Zugriff erfolgt (Referrer-URL),
                    </li>
                    <li>
                      Browsertyp und –version sowie weitere durch den Browser
                      übermittelte Informationen (wie das Betriebssystem Ihres
                      Rechners, der Name Ihres Access-Providers,
                      Spracheinstellung etc.).
                    </li>
                  </ul>

                  <p>&nbsp;</p>

                  <p>
                    Die genannten Daten werden durch uns zu folgenden Zwecke
                    verarbeitet:
                  </p>

                  <ul>
                    <li>
                      Gewährleistung eines reibungslosen Verbindungsaufbaus der
                      Website,
                    </li>
                    <li>
                      Gewährleistung einer komfortablen Nutzung unserer Website,
                    </li>
                    <li>Auswertung der Systemsicherheit und -stabilität,</li>
                    <li>Kontinuierliche Verbesserung der Website sowie</li>
                    <li>
                      zu weiteren statistischen und administrativen Zwecken.
                    </li>
                  </ul>

                  <p>
                    Grundsätzlich verwenden Wir die erhobenen Daten nicht, um
                    Rückschlüsse auf ihre Person zu ziehen. Im Falle eines
                    Angriffs auf unsere Netzinfrastruktur wird jedoch zur
                    Geltendmachung oder Abwehr von Rechtsansprüchen Ihre
                    erhobene IP-Adresse ausgewertet.
                  </p>

                  <p>
                    Darüber hinaus setzen wir beim Besuch unserer Website
                    Cookies sowie Analysedienste ein.{' '}
                  </p>

                  <p>
                    (2) Neben der rein informatorischen Nutzung unserer Website
                    bieten wir verschiedene Leistungen an, die Sie bei Interesse
                    nutzen können. Dazu müssen Sie in der Regel weitere
                    personenbezogene Daten angeben, die wir zur Erbringung der
                    jeweiligen Leistung nutzen und für die die zuvor genannten
                    Grundsätze zur Datenverarbeitung gelten.
                  </p>
                  <p>
                    (3) Teilweise bedienen wir uns zur Verarbeitung Ihrer Daten
                    externer Dienstleister. Diese wurden von uns sorgfältig
                    ausgewählt und beauftragt, sind an unsere Weisungen gebunden
                    und werden regelmässig kontrolliert.
                  </p>

                  <p>
                    (4) Treten Sie per E-Mail oder Kontaktformular mit uns in
                    Kontakt, werden die von Ihnen gemachten Angaben zum Zwecke
                    der Bearbeitung der Anfrage sowie für mögliche
                    Anschlussfragen gespeichert.
                  </p>
                </div>
              </div>

              <div
                className="tab-pane fade"
                id="nav-contact"
                role="tabpanel"
                aria-labelledby="nav-contact-tab"
              >
                <h4 className="mt-0">HTTP / SSL- Verschlüsselung</h4>
                Um die Sicherheit Ihrer Daten bei der Übertragung zu schützen,
                verwenden wir dem aktuellen Stand der Technik entsprechende
                Verschlüsselungsverfahren (z. B. SSL) über HTTPS.
              </div>

              <div className="tab-pane fade" id="nav-disabled" role="tabpanel">
                <h4 className="mt-0">Cookies &amp; Systembedingt Daten</h4>

                <br />

                <div className="">
                  <p>
                    Wie viele andere Webseiten verwenden wir auch so genannte
                    „Cookies“. Cookies sind kleine Textdateien, die von einem
                    Webseitenserver auf Ihre Festplatte übertragen werden.
                    Hierdurch erhalten wir automatisch bestimmte Daten wie z. B.
                    IP-Adresse, verwendeter Browser, Betriebssystem über Ihren
                    Computer und Ihre Verbindung zum Internet.
                  </p>
                  <p>
                    Cookies können nicht verwendet werden, um Programme zu starten
                    oder Viren auf einen Computer zu übertragen. Anhand der in
                    Cookies enthaltenen Informationen können wir Ihnen die
                    Navigation erleichtern und die korrekte Anzeige unserer
                    Webseiten ermöglichen.
                  </p>
                  <p>
                    Natürlich können Sie unsere Website grundsätzlich auch ohne
                    Cookies betrachten. Internet-Browser sind regelmässig so
                    eingestellt, dass sie Cookies akzeptieren. Sie können die
                    Verwendung von Cookies jederzeit über die Einstellungen Ihres
                    Browsers deaktivieren. Bitte verwenden Sie die Hilfefunktionen
                    Ihres Internetbrowsers, um zu erfahren, wie Sie diese
                    Einstellungen ändern können. Bitte beachten Sie, dass einzelne
                    Funktionen unserer Website möglicherweise nicht funktionieren,
                    wenn Sie die Verwendung von Cookies deaktiviert haben.
                  </p>

                  <hr />

                  <p>
                    Systembedingt übermittelte Daten, einschliesslich Cookies und
                    deren Nutzung, sowie personenbezogene Daten wie etwa
                  </p>
                  <p> Browser/Version</p>
                  <p> Betriebssystem</p>
                  <p> Session</p>
                  <p> Referrer-URL (die zuvor besuchte Seite)</p>
                  <p> Hostname des zugreifenden Computers (IP-Adresse)</p>
                  <p> Uhrzeit der Serveranfrage</p>
                  <p>
                    werden automatisch von Ihrem Computer an uns übertragen und
                    auf unserem Server gespeichert. Mit Ausnahme der
                    strafrechtlichen Verfolgung unerlaubten Gebrauchs unserer
                    Website werden derartige Daten nur zu statistischen und
                    leistungsbezogenen Zwecken ausgewertet. Soweit möglich werden
                    die Daten anonym verarbeitet. Um Ihren Besuch auf unserer
                    Website so angenehm wie möglich zu gestalten, setzen wir wie
                    viele andere Unternehmen auch so genannte „Cookies“ ein.
                    Cookies sind kleine Textdateien, die von einem Webseitenserver
                    auf Ihre Festplatte übertragen werden. Hierdurch erhalten wir
                    automatisch bestimmte Daten wie z.B. IP-Adresse, verwendeter
                    Browser, Betriebssystem über Ihren Computer und Ihre
                    Verbindung zum Internet. Cookies können nicht verwendet
                    werden, um Programme zu starten oder Viren auf einen Computer
                    zu übertragen. Anhand der in Cookies enthaltenen Informationen
                    können wir Ihnen die Navigation erleichtern und die korrekte
                    Anzeige unserer Website ermöglichen. In keinem Fall werden die
                    von uns erfassten Daten an Dritte weitergegeben oder wir ohne
                    Ihre Einwilligung eine Verknüpfung mit personenbezogenen Daten
                    herstellen. Natürlich können Sie unsere Website auch
                    grundsätzlich ohne Cookies betrachten, Internet-Browser sind
                    regelmässig so eingestellt, dass sie Cookies akzeptieren. Sie
                    können die Verwendung von Cookies jederzeit über die
                    Einstellungen Ihres Browsers deaktivieren. Bitte verwenden Sie
                    die Hilfefunktion Ihres Internetbrowsers, um zu erfahren, wie
                    Sie diese Einstellungen ändern können. Bitte beachten Sie,
                    dass einzelne Funktionen unserer Website möglicherweise nicht
                    funktionieren, wenn Sie die Verwendung von Cookies deaktiviert
                    haben. Nach Ihrem Besuch auf unserer Website werden diese
                    Cookies üblicherweise automatisch von Ihrer Festplatte
                    gelöscht.
                  </p>
                </div>
              </div>

              <div
                  className="tab-pane fade"
                  id="nav-contact"
                  role="tabpanel"
                  aria-labelledby="nav-contact-tab"
              >
                <h4 className="mt-0">
                  Ihre Rechte auf Auskunft, Berichtigung, Sperre, Löschung und
                  Widerspruch
                </h4>

                <br />

                <p>
                  Sie haben das Recht, jederzeit Auskunft über Ihre bei uns
                  gespeicherten personenbezogenen Daten zu erhalten. Ebenso haben
                  Sie das Recht auf Berichtigung, Sperrung oder, abgesehen von der
                  vorgeschriebenen Datenspeicherung zur Geschäftsabwicklung,
                  Löschung Ihrer personenbezogenen Daten. Damit eine Sperre von
                  Daten jederzeit berücksichtigt werden kann, müssen diese Daten
                  zu Kontrollzwecken in einer Sperrdatei vorgehalten werden. Sie
                  können auch die Löschung der Daten verlangen, soweit keine
                  gesetzliche Archivierungsverpflichtung besteht. Soweit eine
                  solche Verpflichtung besteht, sperren wir Ihre Daten auf Wunsch.
                  Sie können Änderungen oder den Widerruf einer Einwilligung durch
                  entsprechende Mitteilung an uns mit Wirkung für die Zukunft
                  vornehmen.
                </p>
                <p>
                  Wir speichern Ihre personenbezogenen Daten nur so lange, wie
                  dies zur Erreichung der genannten Zwecke erforderlich ist oder
                  wie es die vom Gesetzgeber vorgesehenen vielfältigen
                  Speicherfristen vorsehen. Nach Fortfall des jeweiligen Zweckes
                  bzw. Ablauf dieser Fristen werden die entsprechenden Daten
                  gemäss den gesetzlichen Vorschriften gesperrt oder gelöscht.
                </p>

                <br />
                <p>
                  <b>Sicherheit </b>
                </p>
                <p>
                  Die von Ihnen erhobenen Daten werden von uns gemäss dem
                  schweizerischem Datenschutzgesetz verarbeitet. Alle Mitarbeiter
                  sind zur Wahrung des Datengeheimnisses und zur Einhaltung der
                  Datenschutzbestimmungen verpflichtet und wurden dementsprechend
                  angewiesen. Bitte nehmen Sie zur Kenntnis, dass Websites
                  Dritter, die über mit unserem Dienstleistungsangebot verknüpfte
                  Links zugänglich sind, unter Umständen anderen, von dieser
                  Datenschutzerklärung abweichenden Bestimmungen unterliegen.{' '}
                </p>
              </div>
            </div>
          </div>
        </div>
        <div className="tabs-content d-none">
          <div
            id="ld-tab-pane-5"
            role="tabpanel"
            className="tabs-pane pl-md-5 fade"
          >
            <h4 className="mt-0">Externe Anbiter</h4>

            <br />

            <p>
              Verwendung von Google APIS / Google Maps Diese Webseite verwendet
              Google Maps API, um geographische Informationen visuell
              darzustellen. Bei der Nutzung von Google Maps werden von Google
              auch Daten über die Nutzung der Kartenfunktionen durch Besucher
              erhoben, verarbeitet und genutzt. Nähere Informationen über die
              Datenverarbeitung durch Google können Sie den
              Google-Datenschutzhinweisen entnehmen. Dort können Sie im
              Datenschutzcenter auch Ihre persönlichen Datenschutz-Einstellungen
              verändern.
            </p>
          </div>

          <div
            id="ld-tab-pane-7"
            role="tabpanel"
            className="tabs-pane pl-md-5 fade"
          >
            <h4 className="mt-0">Änderung unserer Datenschutzbestimmungen</h4>

            <br />

            <p>
              Wir behalten uns vor, diese Datenschutzerklärung gelegentlich
              anzupassen, damit sie stets den aktuellen rechtlichen
              Anforderungen entspricht oder um Änderungen unserer Leistungen in
              der Datenschutzerklärung umzusetzen, z. B. bei der Einführung
              neuer Services. Für Ihren erneuten Besuch gilt dann die neue
              Datenschutzerklärung.
            </p>
          </div>
        </div>
      </div>
    </>
  )
}
