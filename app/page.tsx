"use client";

/* eslint-disable @next/next/no-img-element -- preoptimised local assets must remain portable in the static Netlify export */

import { useEffect, useMemo, useState } from "react";
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
    principle:
      "El cargo, las reglas, el acceso a recursos, la agenda y la infraestructura hacen repetible el poder. Sun Tzu prepara el terreno; Han Feizi diseña una administración que no dependa del héroe.",
    correction:
      "Ningún diseño vuelve «inevitable» un resultado: siempre hay error, contingencia, resistencia y consecuencias no previstas.",
    defense:
      "Auditar quién define las reglas, quién queda clasificado por ellas, quién puede impugnarlas y si las decisiones son reversibles.",
  },
];

const navItems = [
  ["apertura", "Tesis central"],
  ["trilogia", "Los tres manuales"],
  ["tablero", "Atlas del tablero invisible"],
  ["juego", "Teoría de juegos y poder"],
  ["leyes", "Cinco leyes silenciosas"],
  ["culturas", "Mapa intercultural"],
  ["sociologia", "Sociología del poder"],
  ["evidencia", "Psicología y propaganda"],
  ["algoritmos", "Poder algorítmico"],
  ["diagnostico", "Modelo de diagnóstico"],
  ["casos", "Casos comparados"],
  ["autonomia", "Autonomía estratégica"],
  ["contrapesos", "Contrapesos y auditorías"],
  ["glosario", "Glosario"],
  ["fuentes", "Fuentes y notas"],
];

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
          <h1>El poder rara vez se presenta con su nombre verdadero.</h1>
          <p className="hero-lead">
            Un manual crítico y práctico para comprender cómo se construyen la influencia, la obediencia
            y el control; qué explican la ciencia y la filosofía sobre sus mecanismos; y cómo preservar
            autonomía, legitimidad y capacidad de corrección dentro del tablero real.
          </p>
          <div className="hero-actions">
            <a className="primary-action" href="#apertura">Comenzar la lectura</a>
            <a className="secondary-action" href="#autonomia">Ir a las defensas</a>
          </div>
          <p className="edition">Edición 2.1 · Agosto de 2026 · Tarragona</p>
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
            El tablero existe antes del movimiento: posiciones, reglas, visibilidad y margen de salida.
          </figcaption>
        </figure>
      </section>

      <section className="orientation" id="apertura">
        <div className="section-label">00 · Tesis central</div>
        <div className="orientation-grid">
          <div>
            <h2>El poder real no es sólo fuerza: es capacidad de estructurar posibilidades.</h2>
          </div>
          <div className="prose-large">
            <p>
              El texto de partida acierta al desplazar la mirada desde la autoridad visible hacia la
              información, la percepción y el diseño del entorno. Esta edición añade una precisión
              decisiva: el poder nunca es completamente invisible ni infalible. Deja huellas en quién
              puede hablar, qué opciones aparecen, cómo se reparte el riesgo y quién tiene derecho a
              corregir una decisión.
            </p>
            <p>
              El control social tampoco es siempre ilegítimo. Toda sociedad coordina conductas mediante
              leyes, normas y expectativas. La frontera entre gobierno y dominación depende de la
              legalidad, necesidad, proporcionalidad, transparencia, participación, posibilidad de
              impugnación y reparación.
            </p>
          </div>
        </div>
        <div className="thesis-strip">
          <article>
            <span>1</span>
            <strong>Observar</strong>
            <p>Quién define la situación y qué datos puede ver.</p>
          </article>
          <article>
            <span>2</span>
            <strong>Clasificar</strong>
            <p>Qué categorías convierten a personas en casos administrables.</p>
          </article>
          <article>
            <span>3</span>
            <strong>Orientar</strong>
            <p>Cómo se ordenan opciones, incentivos, relatos y atención.</p>
          </article>
          <article>
            <span>4</span>
            <strong>Corregir</strong>
            <p>Quién puede cuestionar, apelar y reparar el resultado.</p>
          </article>
        </div>
      </section>

      <div className="manual-shell">
        <aside className="manual-index" id="indice">
          <p>Índice de lectura</p>
          {navItems.map(([id, label], index) => (
            <a href={`#${id}`} key={id}>
              <span>{String(index).padStart(2, "0")}</span>
              {label}
            </a>
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
          <section className="chapter" id="trilogia">
            <div className="chapter-kicker">01 · Los tres manuales</div>
            <h2>Tres culturas, tres problemas, una pregunta común</h2>
            <p className="chapter-intro">
              ¿Cómo puede una autoridad actuar en un mundo incierto, con información incompleta y
              agentes cuyos intereses no siempre coinciden con los suyos? Maquiavelo responde desde la
              fragilidad de los Estados italianos; Sun Tzu, desde la guerra; Han Feizi, desde la crisis
              administrativa de los Reinos Combatientes.
            </p>

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
                  <p>{thinker.thesis}</p>
                  <ul className="concept-list">
                    {thinker.concepts.map((concept) => <li key={concept}>{concept}</li>)}
                  </ul>
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
          </section>

          <section className="chapter atlas" id="tablero">
            <div className="chapter-kicker">02 · Atlas del tablero invisible</div>
            <h2>Dos capas para leer el poder: la estructura y la atención</h2>
            <p className="chapter-intro">
              <em>El Tablero Iluminado</em> representa la arquitectura de decisiones; <em>The Power
              Blueprint</em> enlaza esa escala institucional con la psicología de la atención. Esta
              edición combina ambos materiales como un método de diagnóstico: observar qué opciones
              existen, qué se vuelve relevante y qué mecanismos permiten corregir el rumbo.
            </p>

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
          </section>

          <section className="chapter game-theory" id="juego">
            <div className="chapter-kicker">03 · Teoría de juegos y arquitectura del poder</div>
            <h2>El poder modifica el juego antes de intentar ganar una jugada</h2>
            <p className="chapter-intro">
              El documento <em>Manual Práctico del Poder</em> aporta una intuición fértil: una persona
              poderosa no sólo elige dentro de un conjunto de opciones; puede influir en las reglas, la
              información, los incentivos, la secuencia y la posibilidad de salir. Esta edición conserva
              esa intuición, corrige las fórmulas aparentes y separa análisis estratégico de permiso moral.
            </p>

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
                  <strong>{item.lever}</strong>
                  <span>{item.changes}</span>
                  <span>{item.practice}</span>
                  <span>{item.safeguard}</span>
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
            <div className="chapter-kicker">04 · Síntesis crítica</div>
            <h2>Las cinco leyes silenciosas del poder</h2>
            <p className="chapter-intro">
              Se presentan como regularidades analíticas, no como leyes naturales ni mandatos. Cada una
              incluye el límite que impide convertir una intuición útil en una doctrina de abuso.
            </p>
            <div className="laws-list">
              {laws.map((law) => (
                <article className="law" key={law.number}>
                  <div className="law-number">{law.number}</div>
                  <div>
                    <h3>{law.title}</h3>
                    <p>{law.principle}</p>
                    <div className="law-details">
                      <p><strong>Corrección crítica</strong>{law.correction}</p>
                      <p><strong>Defensa</strong>{law.defense}</p>
                    </div>
                  </div>
                </article>
              ))}
            </div>
          </section>

          <section className="chapter" id="culturas">
            <div className="chapter-kicker">05 · Mapa intercultural</div>
            <h2>El poder no tiene una sola genealogía</h2>
            <p className="chapter-intro">
              Las tradiciones políticas no responden a una misma pregunta ni usan las mismas categorías.
              Compararlas no significa declararlas equivalentes: permite descubrir qué presupone cada
              teoría sobre la persona, el conflicto, la autoridad, el conocimiento y el bien común.
            </p>
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
            <div className="chapter-kicker">06 · De la soberanía a la vida cotidiana</div>
            <h2>La sociología moderna descubre varias caras del poder</h2>
            <p className="chapter-intro">
              El poder no sólo ordena. También decide qué llega a discutirse, produce categorías,
              distribuye recursos, forma hábitos y convierte ciertas interpretaciones en sentido común.
              Estas lentes son complementarias: ninguna explica por sí sola todas las situaciones.
            </p>
            <div className="dimensions-map">
              <div><span>1</span><strong>Decisión</strong><p>A obtiene de B una conducta que B no habría elegido.</p></div>
              <div><span>2</span><strong>Agenda</strong><p>Algunos conflictos no llegan a convertirse en asuntos decidibles.</p></div>
              <div><span>3</span><strong>Preferencia</strong><p>La normalidad moldea lo que parece deseable, realista o imaginable.</p></div>
              <div><span>4</span><strong>Infraestructura</strong><p>El entorno técnico define acciones posibles antes de toda orden.</p></div>
            </div>
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
            <div className="chapter-kicker">07 · Psicología, obediencia y propaganda</div>
            <h2>El poder cambia la atención, pero la evidencia no autoriza determinismos</h2>
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
                  <dl>
                    <div><dt>Vulnerabilidad</dt><dd>{item.vulnerability}</dd></div>
                    <div><dt>Capacidad</dt><dd>{item.capacity}</dd></div>
                  </dl>
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
            <h3 className="subsection-title">De la propaganda masiva a la persuasión personalizada</h3>
            <div className="media-table" role="table" aria-label="Mecanismos de propaganda y defensas">
              <div className="media-row media-head" role="row">
                <span>Mecanismo</span><span>Qué modifica</span><span>Cómo detectarlo</span><span>Contramedida</span>
              </div>
              {mediaMechanisms.map((mechanism) => (
                <div className="media-row" role="row" key={mechanism.name}>
                  <strong>{mechanism.name}</strong>
                  <span>{mechanism.changes}</span>
                  <span>{mechanism.diagnostic}</span>
                  <span>{mechanism.safeguard}</span>
                </div>
              ))}
            </div>
            <blockquote>
              <p>El miedo compra silencio con rapidez, pero cobra intereses en forma de ceguera.</p>
              <footer>Principio de diagnóstico organizativo</footer>
            </blockquote>
          </section>

          <section className="chapter" id="algoritmos">
            <div className="chapter-kicker">08 · Inteligencia artificial y gobierno algorítmico</div>
            <h2>Cuando el poder se convierte en un bucle de datos</h2>
            <p className="chapter-intro">
              La IA no inventa la dominación, pero altera su escala, velocidad, opacidad y capacidad de
              personalización. El cambio decisivo no es que una máquina «mande»: es que observar,
              clasificar, ordenar e intervenir puedan integrarse en un sistema que aprende de la reacción.
            </p>
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
            <div className="law-context">
              <div>
                <span>Unión Europea · situación al 2 de agosto de 2026</span>
                <h3>La manipulación dañina no es sólo un problema ético</h3>
              </div>
              <p>
                El Reglamento Europeo de IA aplica un enfoque basado en riesgo. Las prohibiciones de
                determinadas prácticas -incluidas formas de manipulación dañina, explotación de
                vulnerabilidades y puntuación social bajo los supuestos de la norma- son aplicables desde
                el 2 de febrero de 2025. La mayor parte del Reglamento pasa a ser aplicable el 2 de agosto
                de 2026, con excepciones y transiciones específicas.
              </p>
              <ul>
                <li><strong>Consejo de Europa:</strong> derechos humanos, democracia y Estado de derecho durante todo el ciclo de vida.</li>
                <li><strong>UNESCO:</strong> dignidad, bienestar, prevención del daño, diversidad y supervisión.</li>
                <li><strong>NIST AI RMF:</strong> gobernar, mapear, medir y gestionar riesgos de forma continua.</li>
              </ul>
            </div>
          </section>

          <section className="chapter" id="diagnostico">
            <div className="chapter-kicker">09 · Modelo integrado de diagnóstico</div>
            <h2>Localizar la fuente, el mecanismo y el contrapeso</h2>
            <p className="chapter-intro">
              Decir «esto es poder» es el comienzo, no el diagnóstico. Hay que identificar qué recurso
              produce dependencia, dónde opera, con qué visibilidad, durante cuánto tiempo y bajo qué
              posibilidad de corrección.
            </p>
            <div className="power-table" role="table" aria-label="Fuentes del poder y contrapesos">
              <div className="power-row power-head" role="row">
                <span>Fuente</span><span>Recurso principal</span><span>Manifestación</span><span>Contrapeso</span>
              </div>
              {powerSources.map((item) => (
                <div className="power-row" role="row" key={item.source}>
                  <strong>{item.source}</strong>
                  <span>{item.resource}</span>
                  <span>{item.visible}</span>
                  <span>{item.counterweight}</span>
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
                  <ol>
                    {protocol.steps.map((step) => <li key={step}>{step}</li>)}
                  </ol>
                  <p className="protocol-guardrail"><strong>Límite</strong>{protocol.guardrail}</p>
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
          </section>

          <section className="chapter" id="casos">
            <div className="chapter-kicker">10 · Seis casos comparados</div>
            <h2>El poder se comprende mejor siguiendo sus huellas</h2>
            <p className="chapter-intro">
              Los casos no prueban leyes universales. Funcionan como ejercicios: identifican una
              infraestructura, la información que produce, los comportamientos que premia y el tipo de
              ceguera que puede generar.
            </p>
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
          </section>

          <section className="chapter" id="autonomia">
            <div className="chapter-kicker">11 · Aplicación defensiva</div>
            <h2>Autonomía estratégica: pausa, preguntas y separación de papeles</h2>
            <p className="chapter-intro">
              Las prácticas siguientes no buscan desestabilizar al otro. Reducen la impulsividad, hacen
              visible el conflicto de intereses y protegen la capacidad de elegir.
            </p>
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
          </section>

          <section className="chapter" id="contrapesos">
            <div className="chapter-kicker">12 · Contrapoder, legitimidad y auditoría</div>
            <h2>El criterio no es ausencia de poder, sino poder limitado y corregible</h2>
            <p className="chapter-intro">
              Una sociedad sin influencia, normas ni autoridad no existe. La cuestión democrática es si
              las personas afectadas pueden comprender, participar, disentir, organizarse, recurrir y
              reparar. El contrapoder no destruye coordinación: impide que una sola perspectiva se vuelva irrevocable.
            </p>
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
            <div className="chapter-kicker">13 · Glosario operativo</div>
            <h2>Conceptos para nombrar con precisión</h2>
            <p className="chapter-intro">
              El vocabulario reduce dos errores: llamar manipulación a toda influencia y llamar
              neutralidad a toda estructura. Las definiciones son breves puertas de entrada, no sustitutos de las obras.
            </p>
            <dl className="glossary-grid">
              {glossary.map(([term, definition]) => (
                <div key={term}><dt>{term}</dt><dd>{definition}</dd></div>
              ))}
            </dl>
          </section>

          <section className="chapter sources" id="fuentes">
            <div className="chapter-kicker">14 · Fuentes y lecturas de ampliación</div>
            <h2>Una bibliografía para continuar el mapa</h2>
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
          </section>
        </div>
      </div>

      <footer className="site-footer">
        <div>
          <strong>Los Manuales del Poder Real</strong>
          <p>Comprender el tablero para preservar la libertad de juicio.</p>
        </div>
        <a href="#inicio">Volver arriba ↑</a>
      </footer>
    </main>
  );
}
