"use client";

/* eslint-disable @next/next/no-img-element -- preoptimised local assets must remain portable in the static Netlify export */

import { useEffect, useMemo, useState } from "react";
import type { ReactNode } from "react";
import {
  algorithmicModes,
  cases,
  gameLevers,
  glossary,
  mediaMechanisms,
  mentalArchitecture,
  modernFrames,
  powerSources,
  practiceProtocols,
  psychologyMechanisms,
  references,
  traditions,
} from "./manual-data";

type Thinker = {
  monogram: string;
  name: string;
  dates: string;
  tradition: string;
  summary: string;
  thesis: string;
  concepts: string[];
  strength: string;
  danger: string;
};

const thinkers: Thinker[] = [
  {
    monogram: "M",
    name: "Nicolás Maquiavelo",
    dates: "1469-1527",
    tradition: "Florencia · Realismo político",
    summary: "Leer fuerzas reales, reputación, oportunidad e instituciones antes de decidir.",
    thesis:
      "El poder se conserva leyendo la situación efectiva, combinando capacidad, oportunidad, reputación e instituciones. El príncipe no agota su pensamiento: los Discursos muestran que el conflicto ordenado y la participación también pueden sostener la libertad republicana.",
    concepts: ["virtù", "fortuna", "necesidad", "apariencia", "instituciones"],
    strength:
      "Obliga a mirar incentivos, correlaciones de fuerza y consecuencias reales, no sólo intenciones declaradas.",
    danger:
      "Convertir el realismo en cinismo y atribuirle la frase «el fin justifica los medios», que no aparece así en su obra.",
  },
  {
    monogram: "S",
    name: "Sun Tzu",
    dates: "Tradición textual, siglos V-III a. C.",
    tradition: "China · Estrategia militar",
    summary: "Crear ventaja mediante información, terreno, ritmo y adaptación antes del choque.",
    thesis:
      "La mejor estrategia reduce el coste del conflicto: información, preparación, terreno, ritmo y adaptación permiten deshacer la resistencia antes del choque. Su contexto es la guerra; trasladarlo a la convivencia exige límites éticos estrictos.",
    concepts: ["información", "engaño", "shi", "vacío y lleno", "adaptación"],
    strength:
      "Enseña a no confundir movimiento con progreso y a crear condiciones antes de actuar.",
    danger:
      "Tratar a colegas, ciudadanos o familiares como enemigos y convertir toda relación en una campaña encubierta.",
  },
  {
    monogram: "H",
    name: "Han Feizi",
    dates: "c. 280-233 a. C.",
    tradition: "China · Fajia o tradición legalista",
    summary: "Estabilizar la autoridad mediante reglas, cargo y verificación del desempeño.",
    thesis:
      "La autoridad estable no debe depender de la virtud excepcional del gobernante. Se apoya en estándares públicos, técnicas administrativas y el poder del cargo; controla a los agentes comparando lo prometido con lo realizado.",
    concepts: ["fa", "shu", "shi", "xing-ming", "premio y sanción"],
    strength:
      "Anticipa problemas de agencia, favoritismo, métricas, delegación y rendición de cuentas.",
    danger:
      "Confundir gobierno mediante reglas con Estado de derecho: si el soberano no está limitado, la norma puede ser sólo un instrumento de dominación.",
  },
];

const laws = [
  {
    number: "01",
    title: "La percepción condiciona lo que cuenta como verdad",
    short: "Antes de decidir sobre los hechos, las personas interpretan señales, relatos y marcos.",
    principle:
      "Maquiavelo analiza la reputación; Sun Tzu, la apariencia estratégica; Han Feizi, el ocultamiento de preferencias. Antes de decidir, las personas interpretan señales, relatos y marcos.",
    correction:
      "La percepción no sustituye mágicamente a la realidad. Un relato puede dominar durante un tiempo, pero los costes materiales, la evidencia y las instituciones pueden desmentirlo.",
    defense:
      "Separar hecho, interpretación e interés. Pedir evidencia verificable, buscar el dato omitido y comparar versiones independientes.",
  },
  {
    number: "02",
    title: "La información es una fuente de poder",
    short: "Conocer capacidades, límites y preferencias permite anticipar; ocultarlos reduce la respuesta ajena.",
    principle:
      "Quien conoce capacidades, restricciones y preferencias puede anticipar decisiones. La asimetría informativa amplía el margen de maniobra y reduce el del otro.",
    correction:
      "«Preguntar mucho y revelar poco» puede proteger en una negociación, pero como norma relacional destruye confianza y cooperación.",
    defense:
      "Definir qué información es legítimo solicitar, documentar acuerdos y no entregar datos sensibles sin finalidad, reciprocidad y garantías.",
  },
  {
    number: "03",
    title: "La estrategia busca el punto de menor resistencia",
    short: "La ventaja suele surgir al cambiar de terreno, secuencia o regla, no al aumentar el choque.",
    principle:
      "Sun Tzu recomienda evitar la fortaleza y actuar donde la configuración es favorable. En política, el terreno puede ser jurídico, simbólico, económico u organizativo.",
    correction:
      "Buscar un «hueco» no autoriza a explotar vulnerabilidades personales. El criterio ético es cambiar condiciones, no dañar a la persona.",
    defense:
      "Preguntar quién eligió el terreno, qué alternativas quedaron fuera y si las reglas pueden ser revisadas por todas las partes.",
  },
  {
    number: "04",
    title: "Premios y sanciones moldean conducta",
    short: "Beneficios, pérdidas y normas sociales cambian conductas, pero también producen adaptación y resistencia.",
    principle:
      "Han Feizi habla de los dos mangos; Maquiavelo observa esperanza y temor. La psicología moderna confirma que los incentivos, las pérdidas y las normas sociales influyen.",
    correction:
      "No existe una «precisión quirúrgica» universal: las personas interpretan, resisten y aprenden. El miedo produce obediencia superficial y puede destruir la información que el poder necesita.",
    defense:
      "Hacer visibles los incentivos, limitar sanciones arbitrarias, permitir apelación y medir efectos secundarios, no sólo obediencia inmediata.",
  },
  {
    number: "05",
    title: "La estructura suele pesar más que el carisma",
    short: "Cargos, reglas, recursos, agenda e infraestructura hacen que el poder sea repetible.",
    principle:
      "El cargo, las reglas, el acceso a recursos, la agenda y la infraestructura hacen repetible el poder. Sun Tzu prepara el terreno; Han Feizi diseña una administración que no dependa del héroe.",
    correction:
      "Ningún diseño vuelve «inevitable» un resultado: siempre hay error, contingencia, resistencia y consecuencias no previstas.",
    defense:
      "Auditar quién define las reglas, quién queda clasificado por ellas, quién puede impugnarlas y si las decisiones son reversibles.",
  },
];

const navGroups = [
  {
    label: "Entender",
    items: [
      ["apertura", "Definición y rutas"],
      ["modelo", "El modelo de seis palancas"],
      ["trilogia", "Maquiavelo, Sun Tzu y Han Feizi"],
      ["leyes", "Cinco regularidades"],
    ],
  },
  {
    label: "Ver el sistema",
    items: [
      ["tablero", "Estructura y atención"],
      ["sociologia", "Sociología del poder"],
      ["evidencia", "Mente y obediencia"],
      ["algoritmos", "Poder algorítmico"],
    ],
  },
  {
    label: "Actuar y limitar",
    items: [
      ["diagnostico", "Diagnóstico práctico"],
      ["autonomia", "Autonomía estratégica"],
      ["contrapesos", "Legitimidad y contrapoder"],
    ],
  },
  {
    label: "Profundizar",
    items: [
      ["juego", "Teoría de juegos"],
      ["culturas", "Tradiciones comparadas"],
      ["casos", "Casos"],
      ["glosario", "Glosario"],
      ["fuentes", "Fuentes"],
    ],
  },
] as const;

const leverQuestions = [
  "¿Quién decide qué opciones existen?",
  "¿Quién recibe el beneficio y quién soporta el coste?",
  "¿Quién sabe, quién debe creer y qué puede comprobarse?",
  "¿Quién fija el orden, el plazo y lo que queda fuera?",
  "¿Quién puede rechazar el acuerdo sin sufrir un daño desproporcionado?",
  "¿Quién puede coordinar, legitimar, bloquear o retirar cooperación?",
];

const leverSymbols = ["▦", "±", "◉", "→", "↗", "◎"];

const readingRoutes = [
  {
    time: "10 min",
    title: "Quiero entenderlo",
    text: "Lee la definición, las seis palancas y las cinco regularidades. Obtendrás el mapa completo sin entrar todavía en la teoría.",
    href: "#modelo",
    action: "Empezar por el mapa",
  },
  {
    time: "25 min",
    title: "Quiero aplicarlo",
    text: "Ve al diagnóstico, los protocolos y los contrapesos. Sirve para organizaciones, negociación, crisis y evaluación de mensajes.",
    href: "#diagnostico",
    action: "Ir al manual práctico",
  },
  {
    time: "Lectura larga",
    title: "Quiero profundizar",
    text: "Abre los apartados de ciencia, teoría de juegos, tradiciones culturales, casos y fuentes cuando necesites fundamento o contexto.",
    href: "#trilogia",
    action: "Entrar en la teoría",
  },
];

function DepthDisclosure({
  label,
  title,
  description,
  children,
}: {
  label: string;
  title: string;
  description: string;
  children: ReactNode;
}) {
  return (
    <details className="depth-disclosure">
      <summary>
        <span>{label}</span>
        <div>
          <strong>{title}</strong>
          <small>{description}</small>
        </div>
      </summary>
      <div className="depth-content">{children}</div>
    </details>
  );
}

export default function Home() {
  const [query, setQuery] = useState("");
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    const onScroll = () => {
      const max = document.documentElement.scrollHeight - window.innerHeight;
      setProgress(max > 0 ? (window.scrollY / max) * 100 : 0);
    };
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const normalizedQuery = query.trim().toLocaleLowerCase("es");
  const filteredThinkers = useMemo(
    () =>
      thinkers.filter((thinker) =>
        [thinker.name, thinker.tradition, thinker.thesis, ...thinker.concepts]
          .join(" ")
          .toLocaleLowerCase("es")
          .includes(normalizedQuery),
      ),
    [normalizedQuery],
  );

  return (
    <main>
      <div className="reading-progress" style={{ width: `${progress}%` }} />

      <header className="topbar">
        <a className="brand" href="#inicio" aria-label="Volver al inicio">
          <span className="brand-mark">PR</span>
          <span>
            <strong>Los Manuales del Poder Real</strong>
            <small>Edición crítica y comparada</small>
          </span>
        </a>
        <nav aria-label="Acciones del manual">
          <a href="#indice">Índice</a>
          <button type="button" data-action="print" onClick={() => window.print()}>
            Imprimir / PDF
          </button>
        </nav>
      </header>

      <section className="hero" id="inicio">
        <div className="hero-orbit orbit-one" />
        <div className="hero-orbit orbit-two" />
        <div className="hero-copy">
          <p className="eyebrow">Sociología · Política · Psicología · Inteligencia artificial</p>
          <h1>Cómo funciona el poder cuando nadie lo llama poder.</h1>
          <p className="hero-lead">
            Una guía para reconocer quién configura las opciones, los incentivos, la información y la
            agenda; comprender por qué obedecemos, cooperamos o resistimos; y ejercer autoridad sin
            convertirla en dominación.
          </p>
          <div className="hero-actions">
            <a className="primary-action" href="#modelo">Entenderlo en 10 minutos</a>
            <a className="secondary-action" href="#diagnostico">Ir al manual práctico</a>
          </div>
          <p className="edition">Edición 2.3 · Angel A. Urbina · 2026</p>
        </div>
        <figure className="hero-visual">
          <div className="hero-visual-frame">
            <img
              src="/atlas/hero-tablero.webp"
              alt="Tablero de ajedrez dibujado como un plano técnico, con un caballo oscuro iluminado en el centro"
              width="950"
              height="820"
            />
          </div>
          <figcaption>
            <span>01</span>
            Antes del movimiento ya existen posiciones, reglas, información y salidas desiguales.
          </figcaption>
        </figure>
      </section>

      <section className="orientation" id="apertura">
        <div className="section-label">00 · Orientación</div>
        <div className="orientation-grid">
          <div>
            <h2>El poder es la capacidad de cambiar lo que otros pueden hacer, saber, esperar o rechazar.</h2>
            <p className="definition-line">
              No reside sólo en una persona. También vive en el cargo, la norma, el presupuesto, la
              tecnología, la reputación, la agenda y la dependencia.
            </p>
          </div>
          <div className="orientation-facts">
            <article>
              <span>01</span>
              <div>
                <h3>Dónde mirar</h3>
                <p>Opciones, costes, información, orden de decisión, capacidad de salida y legitimidad.</p>
              </div>
            </article>
            <article>
              <span>02</span>
              <div>
                <h3>Cuándo se vuelve dominación</h3>
                <p>Cuando faltan límites, razones públicas, participación, revisión y reparación.</p>
              </div>
            </article>
          </div>
        </div>
        <div className="reading-routes" aria-label="Rutas de lectura">
          {readingRoutes.map((route, index) => (
            <article key={route.title}>
              <span>{String(index + 1).padStart(2, "0")} · {route.time}</span>
              <h3>{route.title}</h3>
              <p>{route.text}</p>
              <a href={route.href}>{route.action} →</a>
            </article>
          ))}
        </div>
        <div className="thesis-strip">
          <article>
            <span>1</span>
            <strong>Influencia</strong>
            <p>Intenta orientar una decisión; puede ser abierta, discutible y legítima.</p>
          </article>
          <article>
            <span>2</span>
            <strong>Autoridad</strong>
            <p>Facultad reconocida para decidir dentro de un mandato y unos límites.</p>
          </article>
          <article>
            <span>3</span>
            <strong>Coerción</strong>
            <p>Modifica conducta mediante una amenaza creíble de sanción o pérdida.</p>
          </article>
          <article>
            <span>4</span>
            <strong>Manipulación</strong>
            <p>Oculta una intención o explota una vulnerabilidad para impedir una elección informada.</p>
          </article>
        </div>
      </section>

      <div className="manual-shell">
        <aside className="manual-index" id="indice">
          <p>Mapa del manual</p>
          {navGroups.map((group) => (
            <div className="nav-group" key={group.label}>
              <strong>{group.label}</strong>
              {group.items.map(([id, label], index) => (
                <a href={`#${id}`} key={id}>
                  <span>{String(index + 1).padStart(2, "0")}</span>
                  {label}
                </a>
              ))}
            </div>
          ))}
          <label className="search-box">
            <span>Buscar en los autores</span>
            <input
              id="author-search"
              type="search"
              value={query}
              onChange={(event) => setQuery(event.target.value)}
              placeholder="Ej.: información"
            />
          </label>
          <div className="ethics-note">
            <strong>Criterio de uso</strong>
            <p>Comprender para reconocer, limitar y resistir; no para explotar vulnerabilidades.</p>
          </div>
        </aside>

        <div className="manual-content">
          <section className="chapter core-model" id="modelo">
            <div className="chapter-kicker">01 · El mapa esencial</div>
            <h2>Seis palancas explican cómo el poder cambia una situación</h2>
            <p className="chapter-intro">
              Empieza aquí. En vez de memorizar decenas de teorías, busca estas seis palancas. Una
              persona o institución gana poder cuando puede mover varias a la vez mientras los demás
              dependen de sus decisiones y carecen de contrapesos.
            </p>

            <div className="chapter-compass">
              <p><strong>Idea clave</strong>El poder no es una sustancia que alguien «posee»; es una relación entre capacidades y dependencias.</p>
              <p><strong>Cómo se ve</strong>Opciones estrechas, costes desiguales, información asimétrica, agenda cerrada, salida cara o legitimidad concentrada.</p>
              <p><strong>Pregunta guía</strong>¿Qué puede cambiar este actor para que la conducta de los demás cambie sin una orden directa?</p>
            </div>

            <div className="power-definition">
              <span>Heurística de lectura</span>
              <p><strong>Poder práctico</strong> = control de palancas + dependencia ajena − contrapesos efectivos</p>
              <small>No es una fórmula matemática ni una puntuación universal. Sirve para ordenar preguntas.</small>
            </div>

            <div className="core-lever-grid">
              {gameLevers.map((item, index) => (
                <article key={item.lever}>
                  <div className="lever-mark" aria-hidden="true">
                    <span>{leverSymbols[index]}</span>
                    <small>{String(index + 1).padStart(2, "0")}</small>
                  </div>
                  <h3>{item.lever}</h3>
                  <p>{item.changes}</p>
                  <strong>{leverQuestions[index]}</strong>
                </article>
              ))}
            </div>

            <div className="quick-diagnostic">
              <div>
                <p className="eyebrow">Diagnóstico de bolsillo</p>
                <h3>Describe la situación en cinco pasos</h3>
              </div>
              <ol>
                <li><strong>Actor:</strong> quién intenta cambiar una conducta, decisión o agenda.</li>
                <li><strong>Palanca:</strong> qué regla, recurso, dato, secuencia, salida o alianza controla.</li>
                <li><strong>Dependencia:</strong> qué perdería la otra parte si se negara.</li>
                <li><strong>Legitimidad:</strong> qué razón vuelve aceptable o inevitable la intervención.</li>
                <li><strong>Contrapeso:</strong> quién puede revisar, detener, corregir o reparar.</li>
              </ol>
            </div>

            <div className="model-limits">
              <strong>Tres límites para no confundir análisis con justificación</strong>
              <div>
                <p><span>Equilibrio ≠ justicia.</span> Una situación estable puede ser coercitiva o profundamente desigual.</p>
                <p><span>Influencia ≠ control total.</span> Las personas interpretan, resisten, se organizan y producen efectos imprevistos.</p>
                <p><span>Predicción ≠ permiso.</span> Reconocer una vulnerabilidad no autoriza a explotarla.</p>
              </div>
            </div>
            <a className="route-next" href="#trilogia">
              <span>Ruta breve · siguiente</span>
              <strong>Ver qué aporta cada uno de los tres clásicos →</strong>
            </a>
          </section>

          <section className="chapter" id="trilogia">
            <div className="chapter-kicker">02 · Los tres manuales</div>
            <h2>Tres culturas, tres problemas, una pregunta común</h2>
            <p className="chapter-intro">
              Los tres autores estudian cómo actuar con incertidumbre e intereses en conflicto, pero no
              dicen lo mismo ni escriben para el mismo mundo. Maquiavelo lee la política; Sun Tzu diseña
              las condiciones del conflicto; Han Feizi organiza la administración.
            </p>

            <div className="chapter-compass">
              <p><strong>Maquiavelo</strong>Leer fuerzas, reputación, conflicto, instituciones y oportunidad.</p>
              <p><strong>Sun Tzu</strong>Preparar información, terreno y ritmo para reducir el coste del choque.</p>
              <p><strong>Han Feizi</strong>Separar el cargo de la persona y comparar mandato con resultados.</p>
            </div>

            <div className="thinker-grid" aria-live="polite">
              {filteredThinkers.map((thinker) => (
                <article
                  className="thinker-card"
                  data-search-text={[thinker.name, thinker.tradition, thinker.thesis, ...thinker.concepts].join(" ")}
                  key={thinker.name}
                >
                  <header>
                    <div className="monogram">{thinker.monogram}</div>
                    <div>
                      <h3>{thinker.name}</h3>
                      <p>{thinker.dates}</p>
                    </div>
                  </header>
                  <p className="tradition">{thinker.tradition}</p>
                  <p className="thinker-summary">{thinker.summary}</p>
                  <ul className="concept-list">
                    {thinker.concepts.map((concept) => <li key={concept}>{concept}</li>)}
                  </ul>
                  <details className="card-details">
                    <summary>Ver idea completa y cautelas</summary>
                    <div className="card-details-body">
                      <p>{thinker.thesis}</p>
                      <dl>
                        <div>
                          <dt>Aporta</dt>
                          <dd>{thinker.strength}</dd>
                        </div>
                        <div>
                          <dt>Exige cautela</dt>
                          <dd>{thinker.danger}</dd>
                        </div>
                      </dl>
                    </div>
                  </details>
                </article>
              ))}
              {filteredThinkers.length === 0 && (
                <p className="empty-state">No hay coincidencias. Prueba con percepción, estrategia, normas o instituciones.</p>
              )}
            </div>

            <div className="comparison-band">
              <div>
                <span>Maquiavelo</span>
                <strong>Legibilidad política</strong>
                <p>Leer actores, reputaciones, conflictos y fortuna.</p>
              </div>
              <div>
                <span>Sun Tzu</span>
                <strong>Configuración estratégica</strong>
                <p>Preparar información, ritmo, terreno y coste.</p>
              </div>
              <div>
                <span>Han Feizi</span>
                <strong>Diseño administrativo</strong>
                <p>Hacer comparables mandato, desempeño y sanción.</p>
              </div>
            </div>
            <a className="route-next" href="#leyes">
              <span>Ruta breve · saltar la profundización</span>
              <strong>Continuar con las cinco regularidades →</strong>
            </a>
          </section>

          <section className="chapter atlas" id="tablero">
            <div className="chapter-kicker">03 · Estructura y atención</div>
            <h2>Dos capas para leer el poder: la estructura y la atención</h2>
            <p className="chapter-intro">
              La estructura decide qué puede hacerse; la atención influye en qué parece importante.
              Una lectura completa añade una tercera capa: quién puede revisar y cambiar el diseño.
            </p>

            <div className="chapter-compass">
              <p><strong>Idea clave</strong>El tablero orienta la acción antes de que aparezca una orden.</p>
              <p><strong>Cómo se ve</strong>Reglas, métricas, valores por defecto, rankings, plazos y categorías.</p>
              <p><strong>Pregunta guía</strong>¿Qué opción o consecuencia queda fuera del campo visible?</p>
            </div>

            <DepthDisclosure
              label="Atlas visual"
              title="Ver las láminas y el análisis de la atención"
              description="Imágenes de los documentos aportados, contexto, identidad y canales de decisión."
            >

            <div className="source-banner">
              <span>Material incorporado</span>
              <p>
                14 láminas del PDF <em>The Illuminated Board</em> y 15 diapositivas de la presentación{" "}
                <em>The Power Blueprint</em>. Las imágenes se reproducen con atribución al archivo y a
                la página o diapositiva de origen; sus afirmaciones se someten a la evidencia y a los
                límites desarrollados en este manual.
              </p>
            </div>

            <figure className="document-figure document-figure-wide">
              <img
                src="/atlas/tablero-iluminado.webp"
                alt="Plano técnico titulado El Tablero Iluminado, presentado como una arquitectura de decisiones, influencia y poder"
                width="1600"
                height="893"
                loading="lazy"
              />
              <figcaption>
                <strong>La metáfora central.</strong> Un tablero no determina cada movimiento, pero
                distribuye posiciones, recorridos posibles y costes. Fuente visual: <em>The Illuminated
                Board</em>, lámina 1.
              </figcaption>
            </figure>

            <div className="layer-map" aria-label="Tres capas del diagnóstico del poder">
              <article>
                <span>01 · Estructura</span>
                <h3>¿Qué puede hacerse?</h3>
                <p>
                  Instituciones, recursos, reglas, agenda, métricas y valores predeterminados delimitan
                  el campo antes de que una persona elija. Aquí operan la posición de Maquiavelo, el
                  terreno de Sun Tzu y el diseño administrativo de Han Feizi.
                </p>
              </article>
              <article>
                <span>02 · Atención</span>
                <h3>¿Qué parece importante?</h3>
                <p>
                  El orden, el contexto y la saliencia orientan la evaluación. Influyen, pero no dictan
                  mecánicamente la conducta: memoria, experiencia, deliberación y desacuerdo también
                  intervienen.
                </p>
              </article>
              <article>
                <span>03 · Corrección</span>
                <h3>¿Quién puede cambiarlo?</h3>
                <p>
                  Transparencia, pluralidad, consentimiento, recurso y reversibilidad convierten una
                  arquitectura de influencia en un sistema discutible. Sin esta capa, el diseño se
                  aproxima a la dominación.
                </p>
              </article>
            </div>

            <div className="visual-pair">
              <figure className="document-figure">
                <img
                  src="/atlas/macro-micro.webp"
                  alt="Diagrama de Venn que cruza macroestrategia y micropsicología"
                  width="1500"
                  height="844"
                  loading="lazy"
                />
                <figcaption>
                  <strong>Escalas conectadas.</strong> La psicología no sustituye el análisis de
                  instituciones, y la estructura no borra la agencia individual. Fuente visual:{" "}
                  <em>The Power Blueprint</em>, diapositiva 3.
                </figcaption>
              </figure>
              <figure className="document-figure">
                <img
                  src="/atlas/atencion-foco.webp"
                  alt="Cubo oscuro bajo un foco amarillo que ilustra cómo la atención confiere importancia"
                  width="1500"
                  height="844"
                  loading="lazy"
                />
                <figcaption>
                  <strong>Lo focal parece causal.</strong> Preguntar qué queda fuera del foco es una
                  defensa contra el encuadre selectivo. Fuente visual: <em>The Power Blueprint</em>,
                  diapositiva 9.
                </figcaption>
              </figure>
            </div>

            <div className="attention-lab">
              <div>
                <p className="eyebrow">El instante previo</p>
                <h3>La decisión empieza antes de la petición, pero no termina allí.</h3>
              </div>
              <div className="attention-lab-notes">
                <article>
                  <span>Contexto</span>
                  <h4>La primera señal propone una lente.</h4>
                  <p>
                    Orden, música, imágenes, pregunta inicial o valor predeterminado pueden volver un
                    criterio más accesible. La defensa es explicitar otros criterios antes de decidir.
                  </p>
                </article>
                <article>
                  <span>Identidad</span>
                  <h4>Una etiqueta puede pedir coherencia automática.</h4>
                  <p>
                    «¿Eres el tipo de persona que…?» desplaza la evaluación desde la propuesta hacia la
                    imagen de uno mismo. Conviene juzgar la petición por sus méritos, no por la identidad impuesta.
                  </p>
                </article>
                <article>
                  <span>Canal</span>
                  <h4>El medio distribuye tiempo y capacidad de revisión.</h4>
                  <p>
                    El texto facilita comparar datos y conservar registro; lo audiovisual puede mostrar
                    relaciones y experiencia. Ningún canal es neutral ni activa un único «modo cerebral».
                  </p>
                </article>
              </div>
            </div>

            </DepthDisclosure>

            <h3 className="subsection-title">Una ruta de lectura en seis movimientos</h3>
            <div className="board-route">
              {[
                ["Localizar", "Actores, cargos, dependencias y recursos que sostienen la situación."],
                ["Dibujar", "Opciones visibles, opciones ausentes, reglas y puntos de salida."],
                ["Separar", "Hechos verificables, interpretaciones, emociones e intereses."],
                ["Desenfocar", "Buscar qué dato, grupo o consecuencia queda fuera del marco dominante."],
                ["Contrastar", "Comparar obediencia inmediata con aprendizaje, confianza y verdad disponible."],
                ["Corregir", "Introducir voz, apelación, revisión independiente y reversibilidad."],
              ].map(([title, text], index) => (
                <article key={title}>
                  <span>{String(index + 1).padStart(2, "0")}</span>
                  <div><h4>{title}</h4><p>{text}</p></div>
                </article>
              ))}
            </div>

            <DepthDisclosure
              label="Dos consecuencias"
              title="Miedo informativo y autodominio"
              description="Por qué el control rápido ciega a una organización y por qué regularse no significa volverse opaco."
            >
            <div className="visual-essay">
              <figure className="document-figure">
                <img
                  src="/atlas/seguridad-terror.webp"
                  alt="Comparación visual entre un ciclo de miedo, ocultamiento y ceguera y otro de seguridad psicológica, verdad y confianza"
                  width="1600"
                  height="893"
                  loading="lazy"
                />
                <figcaption>
                  Fuente visual: <em>The Illuminated Board</em>, lámina 12.
                </figcaption>
              </figure>
              <div>
                <p className="eyebrow">El coste informativo del miedo</p>
                <h3>El control rápido puede volver ciego al centro.</h3>
                <p>
                  El miedo puede aumentar el cumplimiento visible y, al mismo tiempo, reducir la calidad
                  de la información ascendente. Cuando comunicar errores, dudas o desacuerdos amenaza el
                  estatus o el empleo, el sistema aprende a representar normalidad. La sección de
                  evidencia distingue el conocido dato del 85 % de una regla universal y explica por qué
                  la seguridad psicológica es una condición de aprendizaje, no simple amabilidad.
                </p>
                <a href="#evidencia">Examinar la evidencia →</a>
              </div>
            </div>

            <div className="visual-essay visual-essay-reverse">
              <div>
                <p className="eyebrow">El tablero interior</p>
                <h3>Autodominio no significa volverse opaco.</h3>
                <p>
                  Pausar, nombrar la emoción y revisar el propio interés protege el juicio. Convertirse
                  deliberadamente en alguien ilegible, en cambio, puede deteriorar vínculos y rendición
                  de cuentas. La autonomía estratégica madura combina regulación emocional con razones
                  que otros puedan conocer y discutir.
                </p>
                <a href="#autonomia">Ir al manual de autonomía →</a>
              </div>
              <figure className="document-figure">
                <img
                  src="/atlas/tablero-interior.webp"
                  alt="Diagrama geométrico de un ojo con un núcleo dorado que representa el autodominio"
                  width="1500"
                  height="844"
                  loading="lazy"
                />
                <figcaption>
                  Fuente visual: <em>The Power Blueprint</em>, diapositiva 15.
                </figcaption>
              </figure>
            </div>
            </DepthDisclosure>
          </section>

          <section className="chapter game-theory" id="juego">
            <div className="chapter-kicker">04 · Profundización estratégica</div>
            <h2>El poder modifica el juego antes de intentar ganar una jugada</h2>
            <p className="chapter-intro">
              La teoría de juegos formaliza una intuición ya presentada en el mapa: quien puede cambiar
              reglas, información, incentivos o alternativas no participa simplemente en el juego;
              interviene en su arquitectura.
            </p>

            <div className="chapter-compass">
              <p><strong>Idea clave</strong>Una estrategia depende de lo que harán los demás y de lo que cada parte sabe.</p>
              <p><strong>Utilidad</strong>Ayuda a estudiar negociación, compromiso, señales, coaliciones y cooperación repetida.</p>
              <p><strong>Límite</strong>Un equilibrio describe estabilidad; no demuestra legitimidad, justicia ni bienestar.</p>
            </div>

            <DepthDisclosure
              label="Profundización"
              title="Abrir teoría de juegos y arquitectura institucional"
              description="Modelo formal, BATNA, mecanismos, señales, compromisos, coaliciones y juegos repetidos."
            >

            <div className="register-grid" aria-label="Cuatro registros para estudiar el poder">
              <article>
                <span>01 · Describir</span>
                <h3>¿Qué ocurre?</h3>
                <p>Actores, recursos, dependencias, reglas, decisiones, exclusiones y resultados observables.</p>
              </article>
              <article>
                <span>02 · Explicar</span>
                <h3>¿Por qué ocurre?</h3>
                <p>Mecanismos, incentivos, información, historia, cognición y condiciones que hacen probable el resultado.</p>
              </article>
              <article>
                <span>03 · Juzgar</span>
                <h3>¿Es legítimo?</h3>
                <p>Derechos, consentimiento, justicia, proporcionalidad, dignidad y distribución de beneficios y daños.</p>
              </article>
              <article>
                <span>04 · Actuar</span>
                <h3>¿Qué puede hacerse?</h3>
                <p>Decisión, negociación, organización y defensa dentro de límites legales, verificables y corregibles.</p>
              </article>
            </div>

            <div className="game-model">
              <div>
                <p className="eyebrow">Modelo mínimo</p>
                <h3>G = (N, S, U, I, R)</h3>
                <p>
                  Una representación útil contiene <strong>jugadores (N)</strong>,{" "}
                  <strong>estrategias (S)</strong>,{" "}<strong>resultados valorados o pagos (U)</strong>,{" "}
                  <strong>información (I)</strong> y <strong>reglas y secuencia (R)</strong>. No toda relación
                  humana es un juego cerrado,
                  pero el esquema obliga a preguntar qué variable se da por supuesta.
                </p>
              </div>
              <div className="game-heuristic">
                <span>Heurística de poder</span>
                <strong>capacidad de alterar S, U, I o R de otros</strong>
                <i>+</i>
                <strong>capacidad de conservar alternativas y acción colectiva propias</strong>
                <p>
                  No es una ecuación académica ni produce una puntuación universal. Es una guía para
                  localizar dependencia, margen de salida y control sobre la arquitectura.
                </p>
              </div>
            </div>

            <h3 className="subsection-title">Seis palancas que cambian la situación práctica</h3>
            <div className="game-table" role="table" aria-label="Palancas estratégicas del poder y salvaguardas">
              <div className="game-row game-head" role="row">
                <span>Palanca</span><span>Qué cambia</span><span>Cómo aparece</span><span>Salvaguarda</span>
              </div>
              {gameLevers.map((item) => (
                <div className="game-row" role="row" key={item.lever}>
                  <strong data-label="Palanca">{item.lever}</strong>
                  <span data-label="Qué cambia">{item.changes}</span>
                  <span data-label="Cómo aparece">{item.practice}</span>
                  <span data-label="Salvaguarda">{item.safeguard}</span>
                </div>
              ))}
            </div>

            <div className="strategy-pair">
              <article>
                <p className="eyebrow">Autonomía negociadora</p>
                <h3>BATNA: poder decir no sin caer al vacío</h3>
                <p>
                  La mejor alternativa a un acuerdo negociado fija qué ocurre si no se pacta. Una
                  alternativa sólida suele elevar el umbral de aceptación y reducir dependencia, pero
                  no se resume en un cociente: importan tiempo, autoridad, liquidez, información,
                  apoyo colectivo, legalidad y coste para terceros.
                </p>
                <ol>
                  <li>Enumerar alternativas reales y quién controla cada una.</li>
                  <li>Estimar coste, demora, incertidumbre y efectos sobre otras personas.</li>
                  <li>Mejorar la alternativa antes de negociar, sin fingirla.</li>
                  <li>Definir umbral de reserva y señales que obligan a pausar.</li>
                  <li>Revisarla cuando cambian los hechos; no convertirla en amenaza ritual.</li>
                </ol>
              </article>
              <article>
                <p className="eyebrow">Diseño de mecanismos</p>
                <h3>Las reglas deben funcionar con información privada e intereses distintos</h3>
                <p>
                  El diseño de mecanismos invierte la pregunta: parte del resultado institucional y
                  estudia qué reglas pueden producirlo bajo supuestos explícitos. No ofrece una máquina
                  neutral; alguien elige el objetivo, las variables y los daños aceptables.
                </p>
                <dl>
                  <div><dt>Incentivos</dt><dd>¿La conducta compatible con la regla también es conveniente para quien participa?</dd></div>
                  <div><dt>Participación</dt><dd>¿Entrar es preferible a la alternativa disponible, sin dependencia fabricada?</dd></div>
                  <div><dt>Información</dt><dd>¿Qué puede revelarse o verificarse y qué permanece imposible de observar?</dd></div>
                  <div><dt>Robustez</dt><dd>¿Qué ocurre con colusión, error, exclusión, coste, apelación y efectos externos?</dd></div>
                </dl>
                <p className="mechanism-note">
                  Los mecanismos Vickrey-Clarke-Groves pueden alinear revelación veraz y asignación
                  eficiente bajo supuestos concretos, como pagos cuasilineales. No son una receta
                  universal: equilibrio presupuestario, colusión, distribución y legitimidad siguen abiertos.
                </p>
              </article>
            </div>

            <h3 className="subsection-title">Compromiso, señales, coaliciones y memoria</h3>
            <div className="strategic-concepts">
              <article>
                <span>Compromiso</span>
                <h3>Hacer creíble una promesa puede exigir limitarse.</h3>
                <p>
                  Reputación, contrato, garantía o control externo vuelven una conducta más previsible.
                  La autolimitación puede crear confianza; la rigidez extrema puede producir chantaje,
                  escalada o incapacidad de corregir un error. Mover primero tampoco concede una ventaja
                  universal: depende de información, capacidad de compromiso y respuesta del seguidor.
                </p>
              </article>
              <article>
                <span>Señal y selección</span>
                <h3>La información vale cuando puede distinguir tipos o intenciones.</h3>
                <p>
                  Una señal es informativa si resulta costoso fingirla o puede verificarse. Interrogar,
                  probar o certificar puede reducir incertidumbre, pero exige pertinencia, privacidad y
                  ausencia de discriminación.
                </p>
              </article>
              <article>
                <span>Coalición</span>
                <h3>El número de aliados no equivale a poder: importa la posición pivotal.</h3>
                <p>
                  El índice Shapley-Shubik estima pivotalidad bajo un modelo de votación; no mide por sí
                  solo influencia, persuasión ni legitimidad. La hipótesis de coalición mínima ganadora
                  depende de supuestos restrictivos: coaliciones amplias pueden aportar estabilidad,
                  información y aceptación.
                </p>
              </article>
              <article>
                <span>Juego repetido</span>
                <h3>La expectativa de futuro puede sostener cooperación, no la garantiza.</h3>
                <p>
                  Los teoremas folk requieren condiciones sobre paciencia, observación y resultados
                  posibles. Con ruido, una represalia permanente es frágil: reciprocidad, reparación,
                  perdón condicionado e instituciones fiables suelen proteger mejor la cooperación.
                </p>
              </article>
            </div>

            </DepthDisclosure>

            <div className="model-limits">
              <strong>Tres límites que ningún modelo estratégico debe borrar</strong>
              <div>
                <p><span>Equilibrio ≠ justicia.</span> Una situación estable puede ser coercitiva, desigual o indeseable.</p>
                <p><span>Utilidad ≠ valor humano.</span> Una función de preferencia no contiene por sí sola dignidad, derechos ni bien común.</p>
                <p><span>Predicción ≠ permiso.</span> Saber que una vulnerabilidad existe no autoriza a explotarla.</p>
              </div>
            </div>
          </section>

          <section className="chapter" id="leyes">
            <div className="chapter-kicker">05 · Síntesis de los clásicos</div>
            <h2>Cinco regularidades: qué observar y cómo defenderse</h2>
            <p className="chapter-intro">
              No son leyes naturales ni instrucciones para manipular. Son patrones frecuentes que
              permiten reconocer una dinámica, comprobar sus límites y elegir una defensa.
            </p>
            <div className="laws-list">
              {laws.map((law) => (
                <article className="law" key={law.number}>
                  <div className="law-number">{law.number}</div>
                  <div>
                    <h3>{law.title}</h3>
                    <p className="law-summary">{law.short}</p>
                    <details className="card-details law-expand">
                      <summary>Ver explicación, límite y defensa</summary>
                      <div className="card-details-body">
                        <p>{law.principle}</p>
                        <div className="law-details">
                          <p><strong>Corrección crítica</strong>{law.correction}</p>
                          <p><strong>Defensa</strong>{law.defense}</p>
                        </div>
                      </div>
                    </details>
                  </div>
                </article>
              ))}
            </div>
            <a className="route-next" href="#diagnostico">
              <span>Ruta práctica</span>
              <strong>Aplicar el mapa a una situación real →</strong>
            </a>
          </section>

          <section className="chapter" id="culturas">
            <div className="chapter-kicker">06 · Tradiciones comparadas</div>
            <h2>El poder no tiene una sola genealogía</h2>
            <p className="chapter-intro">
              Otras culturas no son notas al pie de Europa. Cada tradición formula de manera distinta
              la relación entre autoridad, conflicto, virtud, prosperidad, comunidad y resistencia.
              Abre sólo la región que necesites comparar.
            </p>
            <div className="chapter-compass">
              <p><strong>Cómo leer</strong>Compara problemas y mecanismos, no palabras aisladas.</p>
              <p><strong>Qué evita</strong>La falsa idea de que existe una única teoría universal del mando.</p>
              <p><strong>Pregunta guía</strong>¿Quién limita a quien gobierna y qué imagen del ser humano presupone?</p>
            </div>
            <div className="method-note">
              <strong>Cinco preguntas para leer a cualquier autor</strong>
              <ol>
                <li>¿De dónde procede la capacidad de mandar?</li>
                <li>¿Cómo describe la naturaleza y los intereses humanos?</li>
                <li>¿Qué mecanismo convierte una orden en conducta?</li>
                <li>¿Qué hace frágil al régimen?</li>
                <li>¿Quién limita a quien gobierna?</li>
              </ol>
            </div>
            <div className="tradition-stack">
              {traditions.map((tradition, traditionIndex) => (
                <details key={tradition.region} open={traditionIndex === 0}>
                  <summary>
                    <span>{String(traditionIndex + 1).padStart(2, "0")}</span>
                    <div>
                      <strong>{tradition.region}</strong>
                      <small>{tradition.period}</small>
                    </div>
                    <p>{tradition.question}</p>
                  </summary>
                  <div className="tradition-body">
                    {tradition.thinkers.map((thinker) => (
                      <article key={thinker.name}>
                        <header>
                          <h3>{thinker.name}</h3>
                          <span>{thinker.dates}</span>
                        </header>
                        <p className="concept-line">{thinker.concepts}</p>
                        <p>{thinker.contribution}</p>
                        <p className="limit-line"><strong>Límite de lectura</strong>{thinker.limit}</p>
                      </article>
                    ))}
                  </div>
                </details>
              ))}
            </div>
          </section>

          <section className="chapter" id="sociologia">
            <div className="chapter-kicker">07 · De la orden a la normalidad</div>
            <h2>La sociología moderna descubre varias caras del poder</h2>
            <p className="chapter-intro">
              El poder actúa en cuatro niveles: decide, excluye asuntos de la agenda, moldea preferencias
              y construye infraestructuras. Distinguirlos evita usar «poder» como una palabra que lo explica todo.
            </p>
            <div className="chapter-compass">
              <p><strong>Decisión</strong>Quién obtiene una conducta concreta.</p>
              <p><strong>Agenda y sentido</strong>Qué no llega a discutirse y qué parece normal.</p>
              <p><strong>Infraestructura</strong>Qué permite o impide el entorno antes de cualquier orden.</p>
            </div>
            <div className="dimensions-map">
              <div><span>1</span><strong>Decisión</strong><p>A obtiene de B una conducta que B no habría elegido.</p></div>
              <div><span>2</span><strong>Agenda</strong><p>Algunos conflictos no llegan a convertirse en asuntos decidibles.</p></div>
              <div><span>3</span><strong>Preferencia</strong><p>La normalidad moldea lo que parece deseable, realista o imaginable.</p></div>
              <div><span>4</span><strong>Infraestructura</strong><p>El entorno técnico define acciones posibles antes de toda orden.</p></div>
            </div>
            <DepthDisclosure
              label="Autores"
              title="Recorrer la genealogía sociológica"
              description="De Hobbes, Locke y Montesquieu a Marx, Weber, Gramsci, Arendt, Foucault, Lukes, Scott y Ostrom."
            >
            <div className="frames-timeline">
              {modernFrames.map((frame, index) => (
                <article key={frame.name}>
                  <div className="timeline-marker"><span>{index + 1}</span></div>
                  <div>
                    <header><h3>{frame.name}</h3><span>{frame.dates}</span></header>
                    <p className="frame-key">{frame.key}</p>
                    <p>{frame.idea}</p>
                  </div>
                </article>
              ))}
            </div>
            </DepthDisclosure>
            <div className="synthesis-box">
              <p className="eyebrow">Síntesis</p>
              <h3>Mandar, excluir de la agenda, normalizar y diseñar infraestructura son operaciones distintas.</h3>
              <p>
                Un actor puede perder una votación y conservar el poder de definir los indicadores; puede
                carecer de cargo y dominar la reputación; puede no censurar una voz y, sin embargo, hacerla
                invisible mediante ranking. Diagnosticar exige precisar el mecanismo.
              </p>
            </div>
          </section>

          <section className="chapter evidence" id="evidencia">
            <div className="chapter-kicker">08 · Psicología y estructura mental</div>
            <h2>Somos influenciables, pero no programables</h2>
            <p className="chapter-intro">
              La mente selecciona información, busca seguridad, protege identidad y aprende de otras
              personas. Esas capacidades hacen posible la cooperación y también abren vulnerabilidades.
              El contexto cambia probabilidades; no elimina conciencia, resistencia ni responsabilidad.
            </p>
            <div className="chapter-compass">
              <p><strong>Idea clave</strong>La influencia funciona porque la mente es limitada, social y predictiva.</p>
              <p><strong>Error frecuente</strong>Convertir un experimento concreto en una ley eterna sobre «la naturaleza humana».</p>
              <p><strong>Defensa general</strong>Pausa, contraste, disenso protegido, criterios previos y responsabilidad identificable.</p>
            </div>

            <DepthDisclosure
              label="Evidencia"
              title="Revisar estudios y mecanismos psicológicos"
              description="Replicación, seguridad psicológica, conformidad, obediencia, identidad, disonancia y arquitectura de elección."
            >
            <div className="evidence-grid">
              <article>
                <span className="evidence-tag">Hallazgo original</span>
                <h3>Clase social y conducta vial</h3>
                <p>
                  Piff y colaboradores observaron en 2012 que los conductores de vehículos de mayor
                  estatus infringían más ciertas normas viales y presentaron experimentos convergentes.
                  El estudio es relevante, pero no demuestra que toda persona con poder deje de ver a
                  los demás como personas.
                </p>
                <p className="evidence-caveat">
                  Dos replicaciones de campo preregistradas publicadas en 2023 no reprodujeron la
                  asociación. La conclusión responsable es contextual: privilegio, distancia y falta de
                  rendición de cuentas pueden reducir la atención a otros, no que la riqueza determine
                  automáticamente la ética.
                </p>
              </article>
              <article>
                <span className="evidence-tag">Atribución corregida</span>
                <h3>El 85 % y el silencio organizativo</h3>
                <p>
                  La cifra procede de un estudio exploratorio de Milliken, Morrison y Hewlin (2003), no
                  de una estimación universal de Amy Edmondson. Se refería a profesionales y directivos
                  que declararon haber callado alguna cuestión o preocupación al menos una vez.
                </p>
                <p className="evidence-caveat">
                  El miedo a consecuencias negativas fue uno de varios motivos. La aportación de Edmondson
                  es el marco de seguridad psicológica: equipos capaces de plantear errores, dudas y
                  discrepancias sin temor interpersonal aprenden mejor.
                </p>
              </article>
            </div>
            <h3 className="subsection-title">Ocho mecanismos psicológicos que el poder puede activar</h3>
            <div className="psych-grid">
              {psychologyMechanisms.map((mechanism) => (
                <article key={mechanism.name}>
                  <header>
                    <h4>{mechanism.name}</h4>
                    <span>{mechanism.authors}</span>
                  </header>
                  <p>{mechanism.effect}</p>
                  <dl>
                    <div><dt>Señales</dt><dd>{mechanism.signs}</dd></div>
                    <div><dt>Defensa</dt><dd>{mechanism.defense}</dd></div>
                  </dl>
                </article>
              ))}
            </div>
            <div className="evidence-warning">
              <strong>Cómo leer los experimentos clásicos</strong>
              <p>
                Asch y Milgram demostraron posibilidades bajo condiciones concretas, no porcentajes
                eternos de conformistas u obedientes. Muestras, época, situación experimental,
                interpretación y replicación importan. La conclusión útil es institucional: diseñar
                contextos donde disentir y detenerse sea viable.
              </p>
            </div>
            </DepthDisclosure>
            <h3 className="subsection-title">Lo que el poder revela sobre la estructura mental humana</h3>
            <p className="section-prologue">
              La posibilidad de influir no demuestra que el ser humano sea irracional ni programable.
              Muestra una mente encarnada, social y limitada que necesita seleccionar información,
              anticipar a otros, pertenecer y preservar una narración coherente de sí misma. Esas mismas
              capacidades producen vulnerabilidad, cooperación, resistencia y aprendizaje.
            </p>
            <div className="mind-grid">
              {mentalArchitecture.map((item, index) => (
                <article key={item.name}>
                  <header>
                    <span>{String(index + 1).padStart(2, "0")}</span>
                    <h4>{item.name}</h4>
                  </header>
                  <p>{item.reveals}</p>
                  <details className="card-details compact-details">
                    <summary>Ver vulnerabilidad y capacidad</summary>
                    <div className="card-details-body">
                      <dl>
                        <div><dt>Vulnerabilidad</dt><dd>{item.vulnerability}</dd></div>
                        <div><dt>Capacidad</dt><dd>{item.capacity}</dd></div>
                      </dl>
                    </div>
                  </details>
                </article>
              ))}
            </div>
            <div className="human-thesis">
              <p className="eyebrow">Tesis antropológica</p>
              <h3>Somos estratégicos, pero no sólo estratégicos.</h3>
              <p>
                Buscamos seguridad, estatus, sentido y pertenencia; calculamos de manera incompleta;
                imitamos y cooperamos; defendemos identidades y también somos capaces de revisarlas.
                Por eso ningún manual controla personas como piezas. El poder modifica probabilidades y
                costes dentro de relaciones vivas, donde existen interpretación, conciencia, organización,
                azar y resistencia.
              </p>
            </div>
            <DepthDisclosure
              label="Propaganda"
              title="Examinar cómo se orientan agenda, marco y emoción"
              description="Ocho mecanismos mediáticos, señales de detección y contramedidas."
            >
            <h3 className="subsection-title">De la propaganda masiva a la persuasión personalizada</h3>
            <div className="media-table" role="table" aria-label="Mecanismos de propaganda y defensas">
              <div className="media-row media-head" role="row">
                <span>Mecanismo</span><span>Qué modifica</span><span>Cómo detectarlo</span><span>Contramedida</span>
              </div>
              {mediaMechanisms.map((mechanism) => (
                <div className="media-row" role="row" key={mechanism.name}>
                  <strong data-label="Mecanismo">{mechanism.name}</strong>
                  <span data-label="Qué modifica">{mechanism.changes}</span>
                  <span data-label="Cómo detectarlo">{mechanism.diagnostic}</span>
                  <span data-label="Contramedida">{mechanism.safeguard}</span>
                </div>
              ))}
            </div>
            </DepthDisclosure>
            <blockquote>
              <p>El miedo compra silencio con rapidez, pero cobra intereses en forma de ceguera.</p>
              <footer>Principio de diagnóstico organizativo</footer>
            </blockquote>
          </section>

          <section className="chapter" id="algoritmos">
            <div className="chapter-kicker">09 · Inteligencia artificial</div>
            <h2>Cuando el poder se convierte en un bucle de datos</h2>
            <p className="chapter-intro">
              La IA no «manda» por sí sola. El poder está en la organización que decide qué datos
              recoger, qué objetivo optimizar, qué errores aceptar y si una persona puede comprender,
              impugnar o abandonar el sistema.
            </p>
            <div className="chapter-compass">
              <p><strong>Idea clave</strong>Datos, inferencia, ranking e intervención forman un bucle que aprende de la reacción.</p>
              <p><strong>Riesgo</strong>La asimetría se multiplica cuando hay opacidad, dependencia, personalización y escala.</p>
              <p><strong>Pregunta guía</strong>¿Quién responde por el objetivo, el dato, el error y la reparación?</p>
            </div>
            <div className="algorithm-loop" aria-label="Bucle de poder algorítmico">
              {[
                ["01", "Observar", "Recoger conducta y contexto"],
                ["02", "Inferir", "Estimar rasgos y probabilidades"],
                ["03", "Ordenar", "Puntuar, filtrar y priorizar"],
                ["04", "Intervenir", "Recomendar, incentivar o bloquear"],
                ["05", "Aprender", "Medir reacción y ajustar el modelo"],
              ].map(([number, title, text]) => (
                <div key={number}><span>{number}</span><strong>{title}</strong><p>{text}</p></div>
              ))}
            </div>
            <DepthDisclosure
              label="Aplicaciones"
              title="Abrir las siete formas de poder algorítmico"
              description="Dataficación, perfilado, ranking, microsegmentación, decisión automatizada, trabajo e IA persuasiva."
            >
            <div className="algorithmic-grid">
              {algorithmicModes.map((mode) => (
                <article key={mode.name}>
                  <h3>{mode.name}</h3>
                  <p>{mode.description}</p>
                  <dl>
                    <div><dt>Riesgo</dt><dd>{mode.risk}</dd></div>
                    <div><dt>Salvaguarda</dt><dd>{mode.safeguard}</dd></div>
                  </dl>
                </article>
              ))}
            </div>
            </DepthDisclosure>
            <div className="risk-formula">
              <div>
                <p className="eyebrow">Heurística, no ley científica</p>
                <h3>Riesgo de dominación algorítmica</h3>
              </div>
              <div className="formula">
                <span>asimetría × opacidad × dependencia × escala</span>
                <hr />
                <span>contestabilidad × reversibilidad</span>
              </div>
              <p>
                El riesgo aumenta cuando una parte ve mucho y explica poco, la persona no puede abandonar
                el sistema, una decisión se replica a gran escala y el daño es difícil de revertir. Una
                «revisión humana» sólo cuenta si tiene información, tiempo y autoridad para cambiar el resultado.
              </p>
            </div>
            <DepthDisclosure
              label="Gobernanza"
              title="Abrir marco jurídico y estándares de gestión del riesgo"
              description="Unión Europea, Consejo de Europa, UNESCO y NIST, con fecha de situación explícita."
            >
            <div className="law-context">
              <div>
                <span>Unión Europea · situación al 2 de agosto de 2026</span>
                <h3>La manipulación dañina no es sólo un problema ético</h3>
              </div>
              <p>
                El Reglamento Europeo de IA aplica un enfoque basado en riesgo. Las prohibiciones de
                determinadas prácticas -incluidas formas de manipulación dañina, explotación de
                vulnerabilidades y puntuación social bajo los supuestos de la norma- comenzaron a
                aplicarse el 2 de febrero de 2025. Las reglas de gobernanza y los deberes para modelos de
                propósito general rigen desde agosto de 2025; desde el 2 de agosto de 2026 se aplican,
                entre otras, reglas de transparencia y el marco de supervisión. Tras las modificaciones
                de 2026, determinados sistemas de alto riesgo tienen transiciones hasta diciembre de
                2027 o agosto de 2028. Siempre debe consultarse el texto vigente para el caso concreto.
              </p>
              <ul>
                <li><strong>Consejo de Europa:</strong> derechos humanos, democracia y Estado de derecho durante todo el ciclo de vida.</li>
                <li><strong>UNESCO:</strong> dignidad, bienestar, prevención del daño, diversidad y supervisión.</li>
                <li><strong>NIST AI RMF:</strong> gobernar, mapear, medir y gestionar riesgos de forma continua.</li>
              </ul>
            </div>
            </DepthDisclosure>
          </section>

          <section className="chapter" id="diagnostico">
            <div className="chapter-kicker">10 · Manual práctico</div>
            <h2>Diagnosticar antes de actuar</h2>
            <p className="chapter-intro">
              Un buen diagnóstico sustituye etiquetas vagas por una explicación comprobable: quién
              intenta producir qué cambio, con qué palanca, sobre qué dependencia y bajo qué límites.
            </p>

            <div className="chapter-compass">
              <p><strong>Primero</strong>Describe la conducta o decisión que está cambiando, no la personalidad del actor.</p>
              <p><strong>Después</strong>Localiza la palanca, la dependencia y la justificación que sostiene la intervención.</p>
              <p><strong>Por último</strong>Comprueba si hay voz, salida, revisión, reversibilidad y reparación.</p>
            </div>

            <div className="diagnostic-sequence" aria-label="Diagnóstico paso a paso">
              {[
                ["1", "Delimita", "¿Qué decisión concreta, en qué arena y durante qué periodo?"],
                ["2", "Dibuja actores", "¿Quién decide, ejecuta, obedece, se beneficia y soporta el riesgo?"],
                ["3", "Localiza palancas", "¿Qué reglas, costes, datos, secuencia, salida o coalición cambian la conducta?"],
                ["4", "Mide dependencia", "¿Qué alternativa real tiene cada parte si rechaza la propuesta?"],
                ["5", "Contrasta razones", "¿La finalidad, la evidencia y los efectos pueden conocerse y discutirse?"],
                ["6", "Prueba límites", "¿Quién puede detener, revisar, corregir y reparar sin represalias?"],
              ].map(([number, title, question]) => (
                <article key={number}>
                  <span>{number}</span>
                  <div><h3>{title}</h3><p>{question}</p></div>
                </article>
              ))}
            </div>

            <DepthDisclosure
              label="Mapa completo"
              title="Consultar fuentes de poder y ciclo del control social"
              description="Ocho fuentes, diez momentos del ciclo y la pregunta de control correspondiente a cada uno."
            >
            <div className="power-table" role="table" aria-label="Fuentes del poder y contrapesos">
              <div className="power-row power-head" role="row">
                <span>Fuente</span><span>Recurso principal</span><span>Manifestación</span><span>Contrapeso</span>
              </div>
              {powerSources.map((item) => (
                <div className="power-row" role="row" key={item.source}>
                  <strong data-label="Fuente">{item.source}</strong>
                  <span data-label="Recurso principal">{item.resource}</span>
                  <span data-label="Manifestación">{item.visible}</span>
                  <span data-label="Contrapeso">{item.counterweight}</span>
                </div>
              ))}
            </div>
            <h3 className="subsection-title">El ciclo habitual del control social</h3>
            <div className="control-cycle">
              {[
                ["Definir", "Nombrar el problema y el comportamiento esperado", "¿Quién impuso la definición?"],
                ["Hacer legible", "Registrar población, territorio, actividad o riesgo", "¿Qué se pierde al medir?"],
                ["Clasificar", "Asignar categorías, perfiles o niveles", "¿Quién corrige el dato?"],
                ["Ordenar atención", "Hacer visible una opción y marginal otra", "¿Existe pluralidad real?"],
                ["Incentivar", "Distribuir beneficio, fricción, prestigio o sanción", "¿El incentivo es proporcional?"],
                ["Normalizar", "Convertir repetición en expectativa social", "¿Disentir tiene coste oculto?"],
                ["Vigilar", "Detectar desviaciones respecto del estándar", "¿Hay límites de finalidad y tiempo?"],
                ["Corregir", "Recompensar, sancionar, excluir o reeducar", "¿Existe audiencia y recurso?"],
                ["Legitimar", "Explicar el sistema como necesario, justo o inevitable", "¿La justificación admite prueba?"],
                ["Aprender", "Modificar reglas según resultados y resistencia", "¿Aprenden también los afectados?"],
              ].map(([title, action, question], index) => (
                <article key={title}>
                  <span>{String(index + 1).padStart(2, "0")}</span>
                  <h4>{title}</h4>
                  <p>{action}</p>
                  <strong>{question}</strong>
                </article>
              ))}
            </div>
            </DepthDisclosure>
            <div className="diagnostic-card">
              <h3>Plantilla de una frase</h3>
              <p>
                <strong>[Actor]</strong> utiliza <strong>[recurso]</strong> mediante <strong>[mecanismo]</strong>
                en <strong>[arena]</strong> para modificar <strong>[conducta o agenda]</strong>; el riesgo
                aumenta por <strong>[asimetría]</strong> y disminuye si existe <strong>[contrapeso verificable]</strong>.
              </p>
            </div>
            <h3 className="subsection-title">Cómo se ejerce en la práctica: tres protocolos responsables</h3>
            <p className="section-prologue">
              Ejercer poder significa convertir una intención en capacidad coordinada: comprender el
              sistema, obtener información fiable, fijar prioridades, movilizar recursos, construir
              acuerdos y responder por las consecuencias. Los protocolos siguientes hacen operativa esa
              secuencia sin convertir a las personas en objetivos clandestinos.
            </p>
            <div className="protocol-stack">
              {practiceProtocols.map((protocol, index) => (
                <article key={protocol.context}>
                  <header>
                    <span>{String(index + 1).padStart(2, "0")}</span>
                    <div><h4>{protocol.context}</h4><p>{protocol.objective}</p></div>
                  </header>
                  <details className="card-details protocol-details">
                    <summary>Ver pasos y límite de actuación</summary>
                    <div className="card-details-body">
                      <ol>
                        {protocol.steps.map((step) => <li key={step}>{step}</li>)}
                      </ol>
                      <p className="protocol-guardrail"><strong>Límite</strong>{protocol.guardrail}</p>
                    </div>
                  </details>
                </article>
              ))}
            </div>
            <div className="abuse-alert">
              <div>
                <span>Patrones de captura</span>
                <h3>Cuando la estrategia cruza la frontera del abuso</h3>
              </div>
              <p>
                Sobornos, fondos ocultos, crisis fabricadas, vigilancia sin finalidad ni debido proceso,
                purgas retaliatorias, pruebas de lealtad, desinformación rutinaria, chantaje mediante
                dependencia y desactivación de auditorías no son «maestría del poder». Son señales de
                corrupción, coerción o captura institucional. Deben documentarse, someterse a canales
                seguros y revisión independiente, y tratarse conforme a la ley y a la protección de las personas.
              </p>
            </div>
            <a className="route-next" href="#autonomia">
              <span>Ruta práctica · siguiente</span>
              <strong>Recuperar capacidad de elección →</strong>
            </a>
          </section>

          <section className="chapter" id="casos">
            <div className="chapter-kicker">11 · Casos comparados</div>
            <h2>El poder se comprende mejor siguiendo sus huellas</h2>
            <p className="chapter-intro">
              Cada caso aplica la misma secuencia: infraestructura, información, conducta premiada,
              ceguera producida y contrapeso ausente. Son ejercicios de comparación, no pruebas de leyes universales.
            </p>
            <DepthDisclosure
              label="Seis casos"
              title="Abrir ejercicios históricos y contemporáneos"
              description="Qin, Florencia, administración colonial, totalitarismo, recomendación algorítmica y gestión por métricas."
            >
            <div className="case-grid">
              {cases.map((item, index) => (
                <article key={item.title}>
                  <span className="case-number">Caso {String(index + 1).padStart(2, "0")}</span>
                  <h3>{item.title}</h3>
                  <p>{item.context}</p>
                  <dl>
                    <div><dt>Qué observar</dt><dd>{item.observe}</dd></div>
                    <div><dt>Lección</dt><dd>{item.lesson}</dd></div>
                  </dl>
                </article>
              ))}
            </div>
            </DepthDisclosure>
          </section>

          <section className="chapter" id="autonomia">
            <div className="chapter-kicker">12 · Aplicación defensiva</div>
            <h2>Tres hábitos para recuperar capacidad de elección</h2>
            <p className="chapter-intro">
              La autonomía empieza antes de una gran decisión. Pausar, aclarar las reglas y separar
              persona, papel e interés reduce la urgencia inducida y permite responder a la situación real.
            </p>
            <div className="chapter-compass">
              <p><strong>Pausa</strong>Regula la primera reacción antes de aceptar el marco ajeno.</p>
              <p><strong>Pregunta</strong>Convierte reglas implícitas en criterios que pueden examinarse.</p>
              <p><strong>Separa</strong>Distingue identidad, función, interés y conducta observable.</p>
            </div>
            <div className="practice-grid">
              <article>
                <span>Sun Tzu</span>
                <h3>La pausa deliberativa</h3>
                <p>
                  Antes de responder a una tensión, respirar y comprobar qué se ha pedido realmente. La
                  pausa no sirve para fabricar incertidumbre, sino para recuperar juicio y evitar que la
                  activación emocional decida por nosotros.
                </p>
              </article>
              <article>
                <span>Han Feizi</span>
                <h3>Preguntar antes de comprometer</h3>
                <p>
                  Aclarar objetivo, criterios, autoridad, datos y consecuencias antes de formular una
                  propuesta. Preguntar no es extraer debilidades: es impedir que una decisión se tome con
                  reglas implícitas.
                </p>
              </article>
              <article>
                <span>Maquiavelo</span>
                <h3>Separar persona, papel e interés</h3>
                <p>
                  Un ataque puede defender estatus, recursos o una posición institucional. Distinguir la
                  identidad del actor y la función que ocupa reduce la ofensa personal y mejora el mapa
                  del conflicto.
                </p>
              </article>
            </div>
            <div className="self-mastery">
              <div className="self-mastery-number">∞</div>
              <div>
                <p className="eyebrow">El límite interior</p>
                <h3>El poder sobre uno mismo no elimina el poder social, pero evita que la primera reacción se convierta en amo.</h3>
                <p>
                  Marco Aurelio representa esta tradición de autodominio: atender al juicio propio,
                  aceptar lo que no depende de uno y actuar con justicia en lo que sí depende. La meta no
                  es volverse inescrutable, sino menos gobernable por el miedo, la ira, la vanidad y la
                  urgencia inducida.
                </p>
              </div>
            </div>
            <a className="route-next" href="#contrapesos">
              <span>Ruta práctica · siguiente</span>
              <strong>Evaluar legitimidad y diseñar contrapesos →</strong>
            </a>
          </section>

          <section className="chapter" id="contrapesos">
            <div className="chapter-kicker">13 · Legitimidad y contrapoder</div>
            <h2>El criterio no es ausencia de poder, sino poder limitado y corregible</h2>
            <p className="chapter-intro">
              La autoridad legítima coordina sin hacerse irrevocable. Quien resulta afectado debe poder
              conocer las reglas, participar, disentir, organizarse, recurrir y obtener reparación.
            </p>
            <div className="chapter-compass">
              <p><strong>Legítimo</strong>Mandato limitado, razón pública, evidencia y proporcionalidad.</p>
              <p><strong>Corregible</strong>Participación, revisión independiente, reversibilidad y reparación.</p>
              <p><strong>Abusivo</strong>Secreto, dependencia fabricada, castigo del disenso e irreversibilidad.</p>
            </div>
            <div className="legitimacy-grid">
              {[
                ["Legalidad", "La autoridad actúa dentro de competencias y normas públicas."],
                ["Finalidad legítima", "La intervención responde a un problema real y explícito."],
                ["Necesidad", "No existe una alternativa menos intrusiva igualmente eficaz."],
                ["Proporcionalidad", "El daño y la carga no exceden el beneficio perseguido."],
                ["Transparencia", "Reglas, responsables y razones pueden ser conocidos."],
                ["Participación", "Las personas afectadas intervienen antes, no sólo después."],
                ["Contestabilidad", "Hay revisión independiente con capacidad de cambiar el resultado."],
                ["Reversibilidad", "El sistema permite detener, reparar y aprender del daño."],
                ["No discriminación", "Se miden impactos y no se naturalizan desventajas históricas."],
                ["Rendición de cuentas", "Una persona o institución responde por decisiones y omisiones."],
              ].map(([title, text]) => (
                <article key={title}><h3>{title}</h3><p>{text}</p></article>
              ))}
            </div>
            <div className="domination-contrast">
              <div>
                <span>Gobierno legítimo</span>
                <p>Regla pública · finalidad limitada · evidencia · participación · recurso · reparación</p>
              </div>
              <div>
                <span>Dominación abusiva</span>
                <p>Secreto · arbitrariedad · dependencia · personalización opaca · castigo del disenso · irreversibilidad</p>
              </div>
            </div>
            <DepthDisclosure
              label="Auditorías"
              title="Abrir listas de comprobación para mensajes, organizaciones e IA"
              description="Preguntas operativas para detectar manipulación, captura, métricas ciegas y revisión humana ficticia."
            >
            <h3 className="subsection-title">Diagnóstico de manipulación en cinco minutos</h3>
            <div className="audit-list">
              {[
                "¿Qué conducta concreta intenta producir este mensaje?",
                "¿Qué emoción activa antes de ofrecer evidencia: miedo, ira, culpa, orgullo o urgencia?",
                "¿Presenta un falso dilema o borra opciones intermedias?",
                "¿Confunde popularidad, autoridad o repetición con prueba?",
                "¿Hay un enemigo homogéneo al que se atribuye intención maligna colectiva?",
                "¿Qué dato base, comparación o contexto falta?",
                "¿Quién financia, selecciona o distribuye el mensaje?",
                "¿Reciben distintos grupos versiones incompatibles?",
                "¿Puedo demorar la decisión sin sufrir un castigo artificial?",
                "¿Qué fuente independiente podría refutarlo?",
              ].map((item, index) => (
                <div key={item}><span>{String(index + 1).padStart(2, "0")}</span><p>{item}</p></div>
              ))}
            </div>
            <div className="audit-columns">
              <article>
                <p className="eyebrow">Organización</p>
                <h3>Auditar una estructura de poder</h3>
                <ul>
                  <li>¿Quién fija objetivos e indicadores?</li>
                  <li>¿Qué trabajo valioso queda fuera de la métrica?</li>
                  <li>¿Quién puede modificar datos y quién sólo soporta su efecto?</li>
                  <li>¿Se castiga al mensajero de información adversa?</li>
                  <li>¿La supervisión es simétrica o sólo descendente?</li>
                  <li>¿Existe canal seguro, investigación independiente y reparación?</li>
                  <li>¿Se publican errores, excepciones y efectos por grupos?</li>
                  <li>¿Los cargos rotan y las decisiones dejan trazabilidad?</li>
                </ul>
              </article>
              <article>
                <p className="eyebrow">IA y compras públicas o empresariales</p>
                <h3>Doce preguntas antes de implantar</h3>
                <ul>
                  <li>¿Qué decisión mejora y qué alternativa no algorítmica existe?</li>
                  <li>¿Cuál es la base jurídica y la finalidad de los datos?</li>
                  <li>¿Qué población estuvo ausente del entrenamiento o prueba?</li>
                  <li>¿Qué error es más grave y quién lo sufre?</li>
                  <li>¿Cómo se prueba rendimiento por subgrupos y contexto?</li>
                  <li>¿La explicación permite realmente impugnar?</li>
                  <li>¿Quién tiene autoridad para anular la recomendación?</li>
                  <li>¿Se registra cuándo y por qué se anula?</li>
                  <li>¿Cómo se detectan deriva, uso secundario y dependencia?</li>
                  <li>¿Puede cambiarse de proveedor y portar datos?</li>
                  <li>¿Qué incidentes deben notificarse y a quién?</li>
                  <li>¿Qué condición obliga a suspender el sistema?</li>
                </ul>
              </article>
            </div>
            </DepthDisclosure>
            <div className="counterpower-map">
              <h3>Cinco familias de contrapoder</h3>
              <div>
                <article><span>01</span><strong>Jurídico</strong><p>Derechos, juez, recurso, límites competenciales.</p></article>
                <article><span>02</span><strong>Organizado</strong><p>Sindicatos, asociaciones, prensa, oposición, comunidad.</p></article>
                <article><span>03</span><strong>Epistémico</strong><p>Datos abiertos, ciencia, pluralidad experta, denunciantes.</p></article>
                <article><span>04</span><strong>Económico</strong><p>Negociación, competencia, redistribución y protección social.</p></article>
                <article><span>05</span><strong>Técnico</strong><p>Interoperabilidad, auditoría, privacidad y control del usuario.</p></article>
              </div>
            </div>
          </section>

          <section className="chapter" id="glosario">
            <div className="chapter-kicker">14 · Referencia</div>
            <h2>Conceptos para nombrar con precisión</h2>
            <p className="chapter-intro">
              Usa el glosario cuando una palabra resulte ambigua. Nombrar con precisión evita llamar
              manipulación a toda influencia y neutralidad a toda estructura.
            </p>
            <DepthDisclosure
              label="Glosario"
              title="Abrir definiciones operativas"
              description="Conceptos de estrategia, sociología, psicología, administración y gobernanza algorítmica."
            >
            <dl className="glossary-grid">
              {glossary.map(([term, definition]) => (
                <div key={term}><dt>{term}</dt><dd>{definition}</dd></div>
              ))}
            </dl>
            </DepthDisclosure>
          </section>

          <section className="chapter sources" id="fuentes">
            <div className="chapter-kicker">15 · Fuentes y método</div>
            <h2>Una bibliografía para verificar y continuar</h2>
            <p className="chapter-intro">
              Las afirmaciones históricas, filosóficas, psicológicas, jurídicas y tecnológicas no tienen
              el mismo tipo de evidencia. La bibliografía permite volver a las obras y comprobar cada registro.
            </p>
            <DepthDisclosure
              label="Bibliografía"
              title="Abrir fuentes primarias y lecturas de ampliación"
              description="Obras clásicas, teoría política, evidencia empírica, regulación y estándares de IA."
            >
            <ol>
              {references.map((reference) => (
                <li key={reference.label}>
                  <strong>{reference.label}.</strong>{" "}
                  {reference.href ? (
                    <a href={reference.href} target="_blank" rel="noreferrer">{reference.text}</a>
                  ) : reference.text}
                </li>
              ))}
            </ol>
            <div className="source-note">
              <strong>Nota metodológica.</strong> Se distinguen obras primarias, interpretaciones y
              evidencia empírica. Las fechas antiguas son aproximadas cuando la autoría o composición es
              debatida. Las analogías entre estrategia militar, administración imperial y relaciones
              contemporáneas son heurísticas: no convierten ciudadanos, compañeros o familiares en adversarios.
            </div>
            </DepthDisclosure>
          </section>
        </div>
      </div>

      <footer className="site-footer">
        <div>
          <strong>Los Manuales del Poder Real</strong>
          <p>Comprender el tablero para preservar la libertad de juicio.</p>
          <small>Autor y editor · Angel A. Urbina · 2026</small>
        </div>
        <a href="#inicio">Volver arriba ↑</a>
      </footer>
    </main>
  );
}
