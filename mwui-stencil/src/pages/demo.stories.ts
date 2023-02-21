import "../global/global.css";
import "../../../mwui-token-farm/dist/css/MW_core.css";
import logo from "../../.storybook/public/mw_logo_full_white.svg";
import chart from "../../.storybook/public/chart.svg";
import tokenIcon from "../../.storybook/public/token_icon.svg";
import tokenCloud from "../../.storybook/public/token_cloud.svg";

export default {
  title: "Pages/Demo",
};

const Template = (): string => `
<div style="font-family: Poppins">
  <section>
    <div
      style="
        color: white;
        background: radial-gradient(
          50% 50% at 50% 100%,
          #170099 0%,
          #1d184b 100%
        );
        display: flex;
        justify-content: center;
        flex-direction: column;
        align-items: center;
      "
    >
      <img
        style="margin-top: 55px"
        width="230"
        src="${logo}"
        alt="maibornwolff logo"
      />
      <h1 style="margin-top: 112px; margin-bottom: 60px">
        Approach to Design Systems
      </h1>
      <mw-icon
        style="margin-bottom: 30px"
        icon="arrow_circle_down"
        size="large"
      ></mw-icon>
    </div>
  </section>
  <section>
    <div style="width: 548px; margin: 0 auto; margin-top: 80px">
      <p
      class="caption-bold"
        style="
          margin-bottom: 16px;
          text-transform: uppercase;
          color: var(--mw-core-color-pink-500);
        "
      >
        Aktuelle Herausforderungen
      </p>
      <h2 style="margin-bottom: 24px">
        Design Systeme sind Skalierungsbooster
      </h2>
      <p class="lead">
        Schnell und effizient in den Markt eintreten und weitere Produktlinien
        einführen – vor diesen Aufgaben stehen Unternehmen. Eine
        Herausforderung, denn Design- und Entwicklungsressourcen sind knapp. So
        helfen unsere smarten Design Systeme.
      </p>
    </div>
    <div
      style="
        width: 900px;
        margin: 0 auto;
        margin-top: 80px;
        display: grid;
        grid-template-columns: 453px 453px;
        grid-column-gap: 24px;
        grid-row-gap: 24px;
      "
    >
      <div
        style="
          padding: 8px;
          border-radius: 44px 44px 0px 44px;
          background: linear-gradient(
            89.61deg,
            #ed2985 7.41%,
            #0bd2ff 50.86%,
            #3cfa50 94.3%
          );
        "
      >
        <div
          style="
            box-sizing: border-box;
            height: 100%;
            border-radius: 36px 36px 0px 36px;
            padding: 48px;
            background: white;
          "
        >
          <h3 style="margin-top: 0px">Skalierbarkeit schaffen</h3>
          <p>
            Um neue Märkte zu erschließen, braucht es eine hohe Dichte an
            Experimenten. Diese erfordern Ressourcen & eine schnelle und
            efﬁziente Umsetzung von Ideen.
          </p>
        </div>
      </div>

      <div
        style="
          padding: 8px;
          border-radius: 44px 44px 44px 0px;
          background: linear-gradient(
            90deg,
            #3cfa50 0%,
            #0bd2ff 48.01%,
            #ed2985 100%
          );
        "
      >
        <div
          style="
            box-sizing: border-box;
            height: 100%;
            border-radius: 36px 36px 36px 0px;
            padding: 48px;
            background: white;
          "
        >
          <h3 style="margin-top: 0px">Konsequent standardisiert</h3>
          <p>
            Design- und Frontend Komponenten, so wie leicht verständliche
            Richtlinien haben eine essenzielle Funktion: Sie sorgen für ein
            einheitliches, konsistentes Produktportfolio. Automatisierte
            Standards helfen hier bei der Umsetzung.
          </p>
        </div>
      </div>

      <div
        style="
          padding: 8px;
          border-radius: 44px 0px 44px 44px;
          background: linear-gradient(
            89.61deg,
            #ed2985 7.41%,
            #0bd2ff 50.86%,
            #3cfa50 94.3%
          );
        "
      >
        <div
          style="
            box-sizing: border-box;
            height: 100%;
            border-radius: 36px 0px 36px 36px;
            padding: 48px;
            background: white;
          "
        >
          <h3 style="margin-top: 0px">Raum für Innovation bieten</h3>
          <p>
            Designer brauchen Raum, um sich mit echten Innovationen zu
            beschäftigen. Eine smarte Bibliothek an UI-Komponenten schafft ihnen
            diesen. So haben sie Zeit, herauszuarbeiten, was wirklich wichtig
            ist: Was wollen Ihre Nutzer*innen?
          </p>
        </div>
      </div>

      <div
        style="
          padding: 8px;
          border-radius: 0px 44px 44px 44px;
          background: linear-gradient(
            90deg,
            #3cfa50 0%,
            #0bd2ff 48.01%,
            #ed2985 100%
          );
        "
      >
        <div
          style="
            box-sizing: border-box;
            height: 100%;
            border-radius: 0px 36px 36px 36px;
            padding: 48px;
            background: white;
          "
        >
          <h3 style="margin-top: 0px">Implementierungsaufwände reduzieren</h3>
          <p>
            Statt Designs für neue Anwendungen erneut zu konzipieren und zu
            erstellen, werden vorhandene Komponenten automatisch wieder
            verwertet. Ihre IT dankt es Ihnen!
          </p>
        </div>
      </div>
    </div>
    <div style="width: 548px; margin: 0 auto; margin-top: 80px">
      <p
      class="caption-bold"
        style="
          margin-bottom: 16px;
          text-transform: uppercase;
          color: var(--mw-core-color-pink-500);
        "
      >
        Lösungen
      </p>
      <h2 style="margin-bottom: 24px">
        Smarte Design Systeme halbieren die Entwicklungszeit bis zum
        Markteintritt
      </h2>
      <p class="lead" style="font-weight: 700">Zeit- und Kostenersparnis</p>
      <p class="lead">
        Nutzen Sie Frameworks für das UI Design. Sie erhalten mehr Freiraum für
        essenzielle Aufgaben in der Produktentwicklung und Ihre Systeme
        skalieren schneller. Ein integratives Design System bewahrt Ihr Team vor
        Stress und schafft positive Nutzererfahrungen. Zudem erleichtert es die
        Kommunikation zwischen Design und Entwicklung.
      </p>
      <p class="lead" style="font-weight: 700">Einheitlicher Auftritt</p>
      <p class="lead">
        Schaffen Sie ein efﬁzientes Nutzerverhalten über alle Anwendungen
        hinweg. Begeistern Sie ihre Anwender*innen mit einem einheitlichen
        Brand-Design.
      </p>
    </div>
  </section>
  <section
    style="
      margin-top: 80px;
      color: white;
      padding: 50px;
      background: radial-gradient(
        50% 50% at 50% 100%,
        #170099 0%,
        #1d184b 100%
      );
    "
  >
    <div
      style="
        width: 619px;
        margin: 0 auto;
        display: flex;
        gap: 36px;
        flex-direction: row;
        align-items: center;
      "
    >
      <img src="${chart}" width="357" alt="design systems diagram" />
      <div
        style="
          width: 262px;
          height: 100%;
          padding: 4px;
          border-radius: 0px 44px 44px 44px;
          background: linear-gradient(
            89.61deg,
            #ed2985 7.41%,
            #0bd2ff 50.86%,
            #3cfa50 94.3%
          );
        "
      >
        <div
          style="
            border-radius: 0px 40px 40px 40px;
            padding: 48px;
            background: #1d184b;
          "
        >
          <h3 style="margin-top: 0px">Einsparung eröffnet neue Potentiale</h3>
          <p style="color: var(--mw-semantic-color-fg-on-dark)">Mehr Zeit für User-Research & Test = Innovationsbooster</p>
        </div>
      </div>
    </div>
  </section>
  <section>
    <div style="width: 548px; margin: 0 auto; margin-top: 80px">
      <p
      class="caption-bold"
        style="
          margin-bottom: 16px;
          text-transform: uppercase;
          color: var(--mw-core-color-pink-500);
        "
      >
        Im Detail
      </p>
      <h2 style="margin-bottom: 24px">Das Design System</h2>
      <p class="lead" style="font-weight: 700">Definition</p>
      <p class="lead">
        Ein Design System ist eine „Digitale Bibliothek“. Sie beinhaltet klare
        Regeln, Prinzipien und wiederverwendbare Komponenten. Das Design System
        ist die „Single Source of Truth“ für die strategisch-gestalterische
        Ausrichtung einer Marke und/oder eines Produktes oder Services.
      </p>
      <p class="lead" style="font-weight: 700">Das System im Einsatz</p>
      <p class="lead">
        Mithilfe einer Komponentenbibliothek bildet unser tokenbasiertes,
        integratives Design System eine einheitliche, wiederverwendbare sowie
        erweiterbare Basis für Ihre unterschiedlichsten Softwareprojekte.
      </p>
      <p class="lead">
        Das System wird direkt in den Entwicklungsprozess integriert. Dadurch
        können neue Applikationen automatisch und deckungsgleich erstellt,
        implementiert oder ergänzt werden.
      </p>
      <p class="lead">
        Über das Design System Portal kann das gesamte Team auf alle Inhalte
        zugreifen und synchron an Projekten arbeiten.
      </p>
    </div>
  </section>
  <section>
    <div
      style="
        margin-top: 80px;
        height: 520px;
        background: radial-gradient(
          50% 50% at 50% 0%,
          #170099 0%,
          #1d184b 100%
        );
      "
    >
      <div
        style="
          height: 100%;
          width: 1025px;
          margin: 0 auto;
          display: flex;
          gap: 36px;
          flex-direction: row;
          align-items: center;
        "
      >
        <img src="${tokenCloud}" width="548" alt="workflow" />
        <div
          style="
            width: 448px;
            padding: 4px;
            border-radius: 44px 44px 44px 0px;
            background: linear-gradient(
              89.61deg,
              #ed2985 7.41%,
              #0bd2ff 50.86%,
              #3cfa50 94.3%
            );
          "
        >
          <div
            style="
              color: white;
              border-radius: 40px 40px 40px 0px;
              padding: 48px;
              background: #1d184b;
              display: flex;
              flex-direction: column;
            "
          >
            <img src="${tokenIcon}" alt="token icon" style="align-self: center" />
            <p>
              Tokens sind die Schnittstelle zwischen Design und Code.
              Anpassungen können über die Tokens automatisch vom Design zum Code
              gespielt werden und umgekehrt. Dadurch sind Designﬁles und
              Entwicklungsstände ohne Mehraufwand immer auf dem gleichen Stand.
            </p>
          </div>
        </div>
      </div>
    </div>
    <div
      style="
        color: white;
        height: 680px;
        display: flex;
        align-items: center;
        transform: rotate(-180deg);
        background: linear-gradient(
            27.04deg,
            #1e194b 67.78%,
            rgba(30, 25, 75, 0) 91.08%
          ),
          conic-gradient(
            from -57.06deg at 67.64% -63.49%,
            #1e194b -72.22deg,
            #1d184b 118.71deg,
            #ed2985 202.24deg,
            #0bd2ff 236.17deg,
            #3cfa50 262.36deg,
            #1e194b 287.78deg,
            #1d184b 478.71deg
          );
      "
    >
      <div style="transform: rotate(-180deg); width: 834px; margin: 0 auto; position: relative">
        <p class="quote">
          Design Systeme sind komplex. Es braucht Prozess- und
          Technologiekompetenzen, damit es einen Mehrwert für das Unternehmen
          schafft.
        </p>
        <p class="quote">
          Wir erleben bei unseren Kunden, dass oft an dieser Stelle die letzten
          20 Prozent fehlen. Damit das System ganzheitlich genutzt wird, setzen
          wir genau dort an.
        </p>
        <p style="color: var(--mw-semantic-color-fg-on-dark)">Christian Loos, Geschäftsführer MaibornWolff</p>
        <p
          style="
            font-family: 'Rockwell';
            margin: 0 !important;
            position: absolute;
            top: 70px;
            left: -70px;
            font-size: 210px;
            color: var(--mw-core-color-pink-500);
          "
        >
          “
        </p>
      </div>
    </div>
  </section>
  <section>
    <div style="width: 548px; margin: 0 auto; margin-top: 80px">
      <p
      class="caption-bold"
        style="
          margin-bottom: 16px;
          text-transform: uppercase;
          color: var(--mw-core-color-pink-500);
        "
      >
        Unser Ansatz
      </p>
      <h2 style="margin-bottom: 24px">Auf Ihre Bedürfnisse zugeschnitten</h2>
      <p class="lead" style="font-weight: 700">
        Ihr Design System bauen wir auf 3 Säulen auf:
      </p>
      <ul class="lead">
        <li>Organisation & Prozesse</li>
        <li>Design</li>
        <li>Softwareentwicklung & Umsetzung</li>
      </ul>
      <p class="lead">
        Uns ist es wichtig, dass Ihr Team in Zukunft selbstständig mit dem
        Design System umgehen, pﬂegen und erweitern kann. Dafür passen wir es
        genau an Ihre Bedürfnisse an.
      </p>
      <p class="lead">
        Wichtige Leitplanken sind dabei Checkup & Analyse der Designprozesse,
        TechStack Screening, Scoping des Projektes, die nahtlose Integration und
        das Coaching der Teams.
      </p>
    </div>
  </section>
  <section
    style="margin-top: 80px; height: 350px; background: #eef1f3"
  ></section>
</div>

`;

export const Page = Template.bind({});
Page.args = {};
