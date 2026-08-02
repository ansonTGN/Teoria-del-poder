export type Tradition = {
  region: string;
  period: string;
  question: string;
  thinkers: Array<{
    name: string;
    dates: string;
    concepts: string;
    contribution: string;
    limit: string;
  }>;
};

export const traditions: Tradition[] = [
  {
    region: "China clásica",
    period: "Primaveras y Otoños · Reinos Combatientes",
    question: "¿Se gobierna mejor mediante ejemplo, armonía, utilidad o disciplina?",
    thinkers: [
      {
        name: "Confucio",
        dates: "551-479 a. C.",
        concepts: "virtud, rito, rectificación de los nombres",
        contribution:
          "El orden durable nace del ejemplo moral, de roles inteligibles y de prácticas que convierten el autocontrol en hábito. La vergüenza y el reconocimiento pueden orientar mejor que el castigo desnudo.",
        limit:
          "La armonía puede silenciar desacuerdos y naturalizar jerarquías familiares, políticas o de género.",
      },
      {
        name: "Laozi / Daodejing",
        dates: "texto compuesto, aprox. s. IV-III a. C.",
        concepts: "wuwei, suavidad, simplicidad, no exhibición",
        contribution:
          "El gobierno menos invasivo preserva capacidades espontáneas; la rigidez genera la fuerza que termina quebrándola. El dirigente eficaz no ocupa todo el espacio social.",
        limit:
          "La baja visibilidad puede ser humildad o una forma difícil de auditar de dirección indirecta.",
      },
      {
        name: "Mozi",
        dates: "c. 470-391 a. C.",
        concepts: "cuidado imparcial, mérito, frugalidad, condena de la guerra ofensiva",
        contribution:
          "Evalúa políticas por el beneficio y el daño que producen, cuestiona privilegios heredados y defiende seleccionar por capacidad.",
        limit:
          "Su ideal de conformidad ascendente puede concentrar la definición de lo correcto y reducir pluralismo.",
      },
      {
        name: "Shang Yang",
        dates: "c. 390-338 a. C.",
        concepts: "estándares uniformes, registro, responsabilidad mutua, capacidad estatal",
        contribution:
          "Muestra cómo reglas impersonales, fiscalidad, censos y recompensas pueden transformar un Estado más allá del linaje aristocrático.",
        limit:
          "La movilización total de la sociedad para agricultura y guerra convierte la administración en máquina de obediencia.",
      },
    ],
  },
  {
    region: "India y Asia meridional",
    period: "Tradiciones de artha, dhamma y resistencia no violenta",
    question: "¿Cómo se relacionan seguridad, prosperidad, deber y autocontención?",
    thinkers: [
      {
        name: "Kautilya / Arthashastra",
        dates: "datación y autoría debatidas; núcleo antiguo",
        concepts: "siete miembros del Estado, mandala, tesoro, inteligencia, danda",
        contribution:
          "Analiza el Estado como sistema de gobernante, ministros, territorio, fortificaciones, tesoro, fuerza y aliados. Integra economía, administración, diplomacia e información.",
        limit:
          "Normaliza vigilancia, operaciones encubiertas y una razón de Estado que exige una lectura histórica, no imitación literal.",
      },
      {
        name: "Ashoka",
        dates: "reinó c. 268-232 a. C.",
        concepts: "dhamma, edictos, bienestar, tolerancia, arrepentimiento tras Kalinga",
        contribution:
          "Sus inscripciones muestran legitimación mediante autocontención imperial, obras públicas, cuidado y comunicación moral distribuida por el territorio.",
        limit:
          "El paternalismo benevolente sigue definiendo desde arriba la conducta correcta y no equivale a participación democrática.",
      },
      {
        name: "M. K. Gandhi",
        dates: "1869-1948",
        concepts: "satyagraha, ahimsa, no cooperación, disciplina colectiva",
        contribution:
          "El poder depende también de la cooperación de quienes obedecen. Retirar apoyo de forma organizada y no violenta puede transformar una asimetría material.",
        limit:
          "La no violencia requiere organización, seguridad y contexto; no debe imponerse moralmente a quienes afrontan violencia inmediata.",
      },
    ],
  },
  {
    region: "Grecia y Roma",
    period: "Ciudad, imperio y constitución mixta",
    question: "¿Qué régimen convierte poder en gobierno estable y vida común?",
    thinkers: [
      {
        name: "Platón",
        dates: "c. 427-347 a. C.",
        concepts: "educación, guardianes, conocimiento, mito político",
        contribution:
          "Ve la formación del deseo y de la imaginación como condición del orden. El poder educativo precede al mando visible.",
        limit:
          "El gobierno de quienes se consideran poseedores de conocimiento superior abre la puerta al elitismo epistémico.",
      },
      {
        name: "Aristóteles",
        dates: "384-322 a. C.",
        concepts: "regímenes, clase media, ley, virtud cívica, constitución",
        contribution:
          "Distingue gobierno para el bien común y desviación en interés de quien manda; valora el equilibrio social y la adecuación institucional al contexto.",
        limit:
          "Su ciudadanía excluía a mujeres, esclavos y extranjeros; la teoría debe separarse de esas exclusiones históricas.",
      },
      {
        name: "Tucídides",
        dates: "c. 460-c. 400 a. C.",
        concepts: "miedo, honor, interés, dilema de seguridad",
        contribution:
          "Expone cómo percepciones de amenaza, prestigio y cálculo material empujan a actores hacia conflictos que ninguno controla por completo.",
        limit:
          "El realismo descriptivo no convierte la dominación del fuerte en norma moral.",
      },
      {
        name: "Polibio",
        dates: "c. 200-c. 118 a. C.",
        concepts: "anaciclosis, constitución mixta, controles recíprocos",
        contribution:
          "La combinación de elementos monárquicos, aristocráticos y democráticos puede frenar la degeneración de cada forma pura.",
        limit:
          "El equilibrio formal no basta cuando riqueza, información o violencia están radicalmente concentradas.",
      },
    ],
  },
  {
    region: "Mundo islámico, persa y norteafricano",
    period: "Administración, justicia y ciclos dinásticos",
    question: "¿Qué hace posible que una dinastía nazca, gobierne y decaiga?",
    thinkers: [
      {
        name: "Nizam al-Mulk",
        dates: "1018-1092",
        concepts: "justicia, administración, inspección, consejo, espejo de príncipes",
        contribution:
          "El Siyasatnama vincula autoridad con burocracia competente, conocimiento del territorio y reputación de justicia.",
        limit:
          "La inspección secreta y la centralidad del soberano pueden reforzar una corte desconfiada y poco contestable.",
      },
      {
        name: "Ibn Jaldún",
        dates: "1332-1406",
        concepts: "asabiyya, poder real, fiscalidad, ciudad, ciclo dinástico",
        contribution:
          "La cohesión permite acción colectiva y conquista; el lujo, la distancia y la carga fiscal pueden erosionar la solidaridad que fundó el régimen.",
        limit:
          "Asabiyya no debe reducirse a tribalismo ni trasladarse mecánicamente a Estados modernos complejos.",
      },
    ],
  },
  {
    region: "Tradición política haudenosaunee",
    period: "Gran Ley de la Paz · Confederación iroquesa",
    question: "¿Cómo impedir que la unidad suprima la autonomía de sus partes?",
    thinkers: [
      {
        name: "Gran Ley de la Paz",
        dates: "tradición oral y constitucional de datación discutida",
        concepts: "consejo, consenso, naciones confederadas, responsabilidad de las madres de clan",
        contribution:
          "Ofrece una tradición no europea de autoridad distribuida, deliberación entre unidades políticas y remoción de dirigentes que incumplen obligaciones.",
        limit:
          "Debe estudiarse desde fuentes indígenas y sin convertirla en un antecedente simplificado de instituciones estadounidenses.",
      },
    ],
  },
  {
    region: "África y pensamiento anticolonial",
    period: "Colonialismo, independencia y poder poscolonial",
    question: "¿Cómo sobrevive la dominación cuando termina la ocupación formal?",
    thinkers: [
      {
        name: "Frantz Fanon",
        dates: "1925-1961",
        concepts: "deshumanización, interiorización, violencia colonial, élite nacional",
        contribution:
          "El colonialismo reorganiza cuerpo, identidad y deseo; la independencia fracasa si una burguesía intermediaria conserva la estructura de extracción.",
        limit:
          "Su tratamiento de la violencia exige contexto y no puede convertirse en glorificación abstracta.",
      },
      {
        name: "Kwame Nkrumah",
        dates: "1909-1972",
        concepts: "neocolonialismo, dependencia, soberanía económica",
        contribution:
          "La bandera y el gobierno nacional pueden coexistir con control externo mediante crédito, comercio, empresas y asistencia condicionada.",
        limit:
          "La denuncia de dependencia no justifica concentración interna ni eliminación de oposición.",
      },
      {
        name: "Amílcar Cabral",
        dates: "1924-1973",
        concepts: "cultura, liberación, estructura de clase, retorno a las fuentes",
        contribution:
          "La cultura es terreno de resistencia y la élite liberadora debe renunciar a reproducir privilegios si quiere transformar la estructura.",
        limit:
          "La unidad anticolonial no elimina diferencias sociales ni garantiza pluralismo tras la independencia.",
      },
      {
        name: "Achille Mbembe",
        dates: "1957-",
        concepts: "necropolítica, fronteras, exposición diferencial a la muerte",
        contribution:
          "Amplía la biopolítica al preguntar quién es colocado en espacios donde vivir es precario, prescindible o permanentemente amenazado.",
        limit:
          "Es una lente crítica amplia; requiere análisis empírico para no homogeneizar experiencias políticas distintas.",
      },
    ],
  },
  {
    region: "América Latina",
    period: "Pedagogía crítica y colonialidad",
    question: "¿Cómo se vuelve normal una jerarquía dentro del conocimiento cotidiano?",
    thinkers: [
      {
        name: "Paulo Freire",
        dates: "1921-1997",
        concepts: "educación bancaria, diálogo, concientización, praxis",
        contribution:
          "La educación puede depositar obediencia o producir sujetos capaces de nombrar su mundo y transformarlo colectivamente.",
        limit:
          "La pedagogía emancipadora también debe aceptar desacuerdo y evitar que el educador defina de antemano la conciencia correcta.",
      },
      {
        name: "Aníbal Quijano",
        dates: "1928-2018",
        concepts: "colonialidad del poder, raza, trabajo, conocimiento",
        contribution:
          "La clasificación racial, la división internacional del trabajo y la jerarquía epistémica sobreviven al colonialismo jurídico.",
        limit:
          "La categoría es potente, pero no reemplaza el estudio de instituciones, clases y trayectorias nacionales concretas.",
      },
      {
        name: "Enrique Dussel",
        dates: "1934-2023",
        concepts: "exterioridad, ética de la liberación, poder obediencial",
        contribution:
          "La legitimidad se juzga desde quienes sufren exclusión; el poder democrático debe obedecer al poder originario de la comunidad.",
        limit:
          "La invocación del pueblo necesita procedimientos que impidan que una voz se proclame su representante único.",
      },
    ],
  },
];

export const modernFrames = [
  { name: "Thomas Hobbes", dates: "1588-1679", key: "Seguridad y soberanía", idea: "El temor a la violencia recíproca hace racional instituir un poder común. La pregunta crítica es cuánto debe cederse para obtener seguridad y quién controla al protector." },
  { name: "John Locke", dates: "1632-1704", key: "Consentimiento y límites", idea: "El gobierno protege derechos y pierde legitimidad cuando viola el mandato recibido. Consentimiento, ley y derecho de resistencia limitan la obediencia." },
  { name: "Montesquieu", dates: "1689-1755", key: "El poder frena al poder", idea: "La libertad política requiere distribución de funciones y contrapesos; no basta la virtud personal del gobernante." },
  { name: "Jean-Jacques Rousseau", dates: "1712-1778", key: "Voluntad general", idea: "La libertad civil exige leyes que los ciudadanos se dan como cuerpo político. El riesgo aparece cuando una facción identifica su voluntad con la totalidad." },
  { name: "Alexis de Tocqueville", dates: "1805-1859", key: "Mayoría y despotismo suave", idea: "La igualdad puede convivir con conformismo, aislamiento y tutela administrativa. Asociaciones y prensa plural sostienen contrapesos cotidianos." },
  { name: "Karl Marx", dates: "1818-1883", key: "Producción y clase", idea: "Controlar medios de producción estructura dependencia, tiempo y capacidad política; las ideas dominantes no están separadas de esa base material." },
  { name: "Max Weber", dates: "1864-1920", key: "Legitimidad y burocracia", idea: "La dominación estable reclama legitimidad tradicional, carismática o legal-racional. La burocracia aporta previsibilidad, pero puede encerrar decisiones en una jaula de competencias y expedientes." },
  { name: "Gramsci", dates: "1891-1937", key: "Hegemonía", idea: "Una clase dirige cuando su visión se vuelve sentido común mediante escuela, cultura, medios, iglesias y sociedad civil, no sólo coerción estatal." },
  { name: "Mosca, Pareto y Michels", dates: "Élites, 1896-1911", key: "Organización y oligarquía", idea: "Minorías organizadas gobiernan mayorías dispersas; incluso partidos democráticos tienden a profesionalizar una dirección. La tendencia no es destino si existen rotación, transparencia y bases capaces de fiscalizar." },
  { name: "Hannah Arendt", dates: "1906-1975", key: "Poder, violencia y aislamiento", idea: "El poder surge cuando las personas actúan concertadamente; la violencia es un instrumento que puede destruir ese soporte. El totalitarismo prospera sobre atomización y pérdida de mundo común." },
  { name: "Michel Foucault", dates: "1926-1984", key: "Disciplina y gobierno", idea: "El poder produce sujetos, saberes y normalidad. Examen, vigilancia, clasificación y gestión de poblaciones operan en instituciones capilares, no sólo desde un centro soberano." },
  { name: "Pierre Bourdieu", dates: "1930-2002", key: "Capital y violencia simbólica", idea: "Capital económico, cultural, social y simbólico se convierten entre sí dentro de campos. La dominación es más eficaz cuando sus categorías parecen naturales incluso a quienes perjudican." },
  { name: "Jürgen Habermas", dates: "1929-", key: "Esfera pública", idea: "La legitimidad requiere comunicación susceptible de crítica. Dinero, poder administrativo y concentración mediática pueden colonizar la formación pública de voluntad." },
  { name: "Steven Lukes", dates: "1941-", key: "Tres dimensiones", idea: "Poder es decidir; impedir que ciertos asuntos lleguen a la agenda; y moldear percepciones de modo que conflictos posibles ni siquiera se formulen." },
  { name: "James C. Scott", dates: "1936-2024", key: "Legibilidad y resistencia", idea: "El Estado simplifica realidades para administrarlas; los esquemas fallan cuando borran conocimiento local. Los subordinados conservan discursos ocultos y resistencias cotidianas." },
  { name: "Elinor Ostrom", dates: "1933-2012", key: "Gobernanza policéntrica", idea: "Comunidades pueden gestionar bienes comunes mediante reglas adaptadas, seguimiento, sanciones graduadas y resolución accesible de conflictos; ni mercado ni centro estatal poseen una solución universal." },
];

export const gameLevers = [
  {
    lever: "Reglas y opciones",
    changes: "Qué estrategias existen, quién puede usarlas y qué acciones quedan prohibidas o fuera de alcance.",
    practice: "Competencias, requisitos, contratos, estándares, acceso a infraestructura y derecho de veto.",
    safeguard: "Reglas públicas, participación, igualdad de acceso, revisión y posibilidad real de salida.",
  },
  {
    lever: "Incentivos y costes",
    changes: "Qué resultado parece conveniente, arriesgado o demasiado costoso para cada actor.",
    practice: "Presupuesto, salario, precio, promoción, sanción, seguro, fricción y distribución del riesgo.",
    safeguard: "Proporcionalidad, métricas múltiples, efectos distributivos y prohibición de represalias.",
  },
  {
    lever: "Información y señales",
    changes: "Qué sabe cada parte, qué puede verificar y qué cree sobre capacidades, intenciones y límites.",
    practice: "Datos, secreto, auditoría, reputación, credenciales, informes, filtraciones y comunicación pública.",
    safeguard: "Trazabilidad, contraste independiente, protección de datos y sanción del fraude, no del desacuerdo.",
  },
  {
    lever: "Secuencia y agenda",
    changes: "Quién mueve primero, qué se decide antes y qué opción aparece como predeterminada.",
    practice: "Orden del día, calendario, procedimiento, paquete de votación, plazo y valor por defecto.",
    safeguard: "Tiempo suficiente, agenda discutible, alternativas visibles y prohibición de urgencias artificiales.",
  },
  {
    lever: "Salida y BATNA",
    changes: "Cuánto puede rechazar una parte sin quedar expuesta a un daño desproporcionado.",
    practice: "Alternativa laboral, proveedor sustituto, ahorro, apoyo jurídico, coalición y opción no negociada.",
    safeguard: "Portabilidad, protección social, competencia, asesoramiento y ausencia de penalizaciones abusivas.",
  },
  {
    lever: "Coalición y legitimidad",
    changes: "Quién puede actuar conjuntamente, bloquear, validar una decisión o retirar cooperación.",
    practice: "Alianzas, sindicatos, partidos, asociaciones, expertos, comunidades y opinión pública.",
    safeguard: "Pluralismo, transparencia de intereses, voz de minorías y reglas contra captura y corrupción.",
  },
];

export const mentalArchitecture = [
  {
    name: "Atención limitada",
    reveals: "No procesamos todo el entorno: seleccionamos señales y confundimos con facilidad lo visible con lo importante.",
    vulnerability: "Saliencia, repetición, agenda y urgencia pueden estrechar el campo de juicio.",
    capacity: "Pausar, cambiar de marco, comparar bases y pedir qué quedó fuera del foco.",
  },
  {
    name: "Predicción bajo incertidumbre",
    reveals: "La mente busca patrones, causas e intenciones para reducir incertidumbre y anticipar la conducta ajena.",
    vulnerability: "Un relato simple o un líder seguro pueden parecer preferibles a una realidad ambigua.",
    capacity: "Trabajar con probabilidades, hipótesis rivales, escenarios y actualización ante evidencia.",
  },
  {
    name: "Referencia y pérdida",
    reveals: "Evaluamos resultados respecto de un punto de referencia; perder puede pesar más que una ganancia comparable.",
    vulnerability: "Amenazas al estatus, la propiedad o la identidad inducen decisiones defensivas y riesgo.",
    capacity: "Fijar criterios antes de la presión y revisar si el punto de referencia fue impuesto.",
  },
  {
    name: "Estatus y reconocimiento",
    reveals: "Somos sensibles a rango, prestigio, deferencia y humillación porque señalan acceso, seguridad y pertenencia.",
    vulnerability: "La adulación, la vergüenza pública y la competición de rango desvían del interés material.",
    capacity: "Separar dignidad de jerarquía, rotar voz y evaluar razones sin convertirlas en pruebas de lealtad.",
  },
  {
    name: "Pertenencia e identidad",
    reveals: "La cooperación humana se apoya en vínculos, normas y categorías de nosotros y ellos.",
    vulnerability: "Amenaza, pureza y culpa colectiva pueden cerrar el grupo y deshumanizar al exterior.",
    capacity: "Activar identidades cruzadas, objetivos comunes y reglas universales de trato.",
  },
  {
    name: "Reciprocidad y tiempo",
    reveals: "Recordamos cooperación, engaño y reparación; la reputación conecta el presente con interacciones futuras.",
    vulnerability: "La reciprocidad puede convertirse en deuda, clientelismo o espiral de venganza.",
    capacity: "Hacer explícitas las obligaciones, limitar favores y permitir perdón condicionado y reparación.",
  },
  {
    name: "Coherencia y autojustificación",
    reveals: "Protegemos identidad, inversión previa y pertenencia reinterpretando hechos incómodos.",
    vulnerability: "Coste hundido, obediencia gradual y compromiso público vuelven difícil rectificar.",
    capacity: "Preacordar criterios de salida, registrar predicciones y premiar la corrección honesta.",
  },
  {
    name: "Reflexividad moral",
    reveals: "No somos calculadoras pasivas: podemos examinar motivos, rechazar órdenes y crear normas compartidas.",
    vulnerability: "La fatiga, el aislamiento y la difusión de responsabilidad debilitan esa capacidad.",
    capacity: "Tiempo, comunidad, educación crítica, responsabilidad personal e instituciones de recurso.",
  },
];

export const practiceProtocols = [
  {
    context: "Entrada en una organización · primeros 90 días",
    objective: "Construir capacidad de acción sin confundir rapidez con captura del sistema.",
    steps: [
      "Dibujar organigrama formal, red informal, dependencias, vetos y personas afectadas.",
      "Verificar mandato, límites legales, presupuesto, indicadores y decisiones ya comprometidas.",
      "Triangular información: dato operativo, experiencia de primera línea y evidencia externa.",
      "Definir la propia BATNA y la de la organización sin usar dependencia personal como palanca.",
      "Elegir una mejora reversible que produzca aprendizaje y confianza antes que espectáculo.",
      "Instalar disenso protegido, registro de conflictos de interés y una revisión a 30, 60 y 90 días.",
    ],
    guardrail: "No comprar lealtad, fabricar crisis ni apartar controles para consolidar una posición.",
  },
  {
    context: "Negociación",
    objective: "Cambiar el acuerdo posible sin degradar la libertad de decisión de la otra parte.",
    steps: [
      "Separar posiciones declaradas, intereses, restricciones, autoridad y personas afectadas.",
      "Definir BATNA, umbral de reserva y coste de no acuerdo; no inventar una alternativa.",
      "Acordar criterios verificables y compartir la información necesaria para evaluarlos.",
      "Explorar paquetes y compensaciones antes de repartir una cantidad fija.",
      "Hacer concesiones condicionales, recíprocas y registradas; evitar favores personales ocultos.",
      "Usar una pausa cuando aparece urgencia, amenaza identitaria o ambigüedad decisiva.",
      "Cerrar por escrito: obligaciones, contingencias, revisión, salida y reparación.",
    ],
    guardrail: "Una mentira puede alterar una decisión; también destruye reputación, consentimiento y validez del acuerdo.",
  },
  {
    context: "Crisis",
    objective: "Decidir con velocidad preservando verdad, derechos y capacidad de corregir el error.",
    steps: [
      "Proteger primero a las personas, la continuidad esencial y la evidencia.",
      "Separar hechos confirmados, hipótesis, incertidumbres y decisiones irreversibles.",
      "Asignar derechos de decisión por tiempo limitado y documentar cada excepción.",
      "Abrir un canal seguro para malas noticias y prohibir represalias contra quien alerta de buena fe.",
      "Contrastar con una célula independiente o equipo rojo que no dependa del relato dominante.",
      "Comunicar lo sabido, lo ignorado, el criterio de acción y la próxima actualización.",
      "Cerrar la excepción, auditar daños y realizar una revisión posterior con afectados.",
    ],
    guardrail: "Una emergencia no legitima purgas, vigilancia ilimitada, culpables prefabricados ni secreto permanente.",
  },
];

export const psychologyMechanisms = [
  { name: "Conformidad", authors: "Solomon Asch", effect: "La unanimidad aparente hace dudar del propio juicio, sobre todo cuando la situación es ambigua o el coste de disentir es visible.", signs: "Consenso instantáneo, ausencia de objeciones, votación pública antes de deliberar.", defense: "Recoger opiniones independientes primero, permitir disenso privado y nombrar un crítico rotatorio." },
  { name: "Obediencia a la autoridad", authors: "Stanley Milgram", effect: "Una autoridad legítima, la escalada gradual y la difusión de responsabilidad pueden sostener acciones que el sujeto rechazaría aisladamente.", signs: "«Sólo sigo el procedimiento», fragmentación de tareas, distancia respecto al afectado.", defense: "Responsabilidad personal explícita, derecho a detener el proceso, supervisión independiente y contacto con consecuencias." },
  { name: "Disonancia cognitiva", authors: "Leon Festinger", effect: "Tras invertir identidad, esfuerzo o reputación, tendemos a reinterpretar información para proteger coherencia interna.", signs: "Justificaciones crecientes, coste hundido, hostilidad hacia evidencia que amenaza pertenencia.", defense: "Revisiones preacordadas, criterios de salida y normalizar cambiar de opinión ante nueva evidencia." },
  { name: "Identidad social", authors: "Tajfel y Turner", effect: "Categorías mínimas bastan para favorecer al propio grupo; amenaza y competición endurecen fronteras.", signs: "Nosotros/ellos, pureza, culpa colectiva, homogeneización del exogrupo.", defense: "Objetivos compartidos, identidades cruzadas, individuación y reglas universales de dignidad." },
  { name: "Pensamiento grupal", authors: "Irving Janis", effect: "Cohesión, aislamiento y liderazgo directivo pueden producir autocensura e ilusión de unanimidad.", signs: "Racionalización, guardianes de información, presión al disidente, ausencia de planes alternativos.", defense: "Equipos independientes, premortem, experto externo y decisión final después de una segunda reunión." },
  { name: "Justificación del sistema", authors: "Jost y colaboradores", effect: "Las personas pueden defender arreglos existentes para reducir incertidumbre, incluso cuando les perjudican.", signs: "«Siempre fue así», moralización del statu quo, culpar exclusivamente al individuo.", defense: "Comparar instituciones alternativas y hacer visibles costes estructurales y beneficiarios." },
  { name: "Dominancia social", authors: "Sidanius y Pratto", effect: "Individuos e instituciones difieren en su preferencia por jerarquías entre grupos; mitos legitimadores estabilizan desigualdad.", signs: "Jerarquía presentada como natural, merecimiento sin analizar punto de partida.", defense: "Medición de resultados por grupos, reglas antidiscriminatorias y representación efectiva." },
  { name: "Arquitectura de elección", authors: "Thaler, Sunstein y crítica posterior", effect: "Orden, opción por defecto, fricción y saliencia cambian conducta sin prohibir alternativas.", signs: "Casillas preseleccionadas, cancelar difícil, urgencia artificial, recorrido asimétrico.", defense: "Elección fácil y simétrica, explicación de objetivos, opción de salida y evaluación distributiva." },
];

export const mediaMechanisms = [
  { name: "Agenda-setting", changes: "Sobre qué pensamos", diagnostic: "Un asunto domina cobertura mientras otros desaparecen.", safeguard: "Comparar agendas, no sólo opiniones dentro de una agenda." },
  { name: "Framing", changes: "Cómo se define el problema", diagnostic: "Metáforas, causas y responsables vienen incorporados en el vocabulario.", safeguard: "Reformular el mismo hecho en marcos alternativos y comprobar qué queda oculto." },
  { name: "Priming", changes: "Con qué criterio evaluamos", diagnostic: "La exposición repetida vuelve un indicador especialmente disponible.", safeguard: "Fijar criterios antes de consumir la campaña o el debate." },
  { name: "Espiral del silencio", changes: "Quién cree poder hablar", diagnostic: "Una mayoría percibida intimida aunque no sea mayoría real.", safeguard: "Canales confidenciales, datos sobre distribución real de opiniones y protección del disenso." },
  { name: "Repetición", changes: "Familiaridad y sensación de verdad", diagnostic: "El mismo enunciado reaparece sin evidencia nueva.", safeguard: "Rastrear la fuente originaria y separar número de repeticiones de número de pruebas." },
  { name: "Propaganda afectiva", changes: "Atención, amenaza y pertenencia", diagnostic: "Urgencia, enemigo moral absoluto, imágenes intensas y soluciones simples.", safeguard: "Pausa, verificación lateral, contexto base y rechazo de deshumanización." },
  { name: "Astroturfing", changes: "Percepción de apoyo espontáneo", diagnostic: "Mensajes coordinados se presentan como voces independientes.", safeguard: "Transparencia de patrocinio, analizar patrones temporales y no inferir consenso de volumen." },
  { name: "Microsegmentación", changes: "El mensaje que cada grupo ve", diagnostic: "Promesas incompatibles y anuncios no observables por el público general.", safeguard: "Repositorios públicos de anuncios, límites a datos sensibles y auditoría de segmentación." },
];

export const powerSources = [
  { source: "Coercitiva", resource: "Fuerza, sanción, capacidad de excluir", visible: "Amenaza, policía, despido, bloqueo", counterweight: "Legalidad, proporcionalidad, juez independiente, debido proceso" },
  { source: "Legal-administrativa", resource: "Competencia, expediente, clasificación", visible: "Permisos, formularios, inspección, indicador", counterweight: "Motivación, simplificación, audiencia, recurso y revisión" },
  { source: "Económica", resource: "Propiedad, crédito, salario, acceso", visible: "Dependencia, precio, contrato, deuda", counterweight: "Competencia, negociación colectiva, protección social, fiscalidad" },
  { source: "Informacional", resource: "Datos, secreto, conocimiento experto", visible: "Asimetría, filtración selectiva, opacidad", counterweight: "Acceso, transparencia, pluralidad experta, trazabilidad" },
  { source: "Organizativa", resource: "Red, coordinación, agenda", visible: "Quién convoca, conecta y reparte tareas", counterweight: "Rotación, actas, participación de base, descentralización" },
  { source: "Cultural-simbólica", resource: "Prestigio, lenguaje, normalidad", visible: "Etiqueta, currículo, ceremonia, reputación", counterweight: "Pluralismo, educación crítica, representación, libertad artística" },
  { source: "Psicológica-afectiva", resource: "Miedo, esperanza, culpa, pertenencia", visible: "Urgencia, vergüenza, premio social", counterweight: "Seguridad psicológica, pausa, apoyo colectivo, límites" },
  { source: "Tecnológica-infraestructural", resource: "Código, plataforma, estándar, cómputo", visible: "Default, ranking, interoperabilidad, cierre", counterweight: "Auditoría, portabilidad, estándares abiertos, opción humana" },
];

export const algorithmicModes = [
  { name: "Dataficación", description: "Convierte conducta en registros medibles. Lo que no entra en el esquema tiende a desaparecer de la decisión.", risk: "La categoría sustituye a la persona; propósito secundario no consentido.", safeguard: "Minimización, límites de finalidad, calidad y derecho a corregir datos." },
  { name: "Perfilado e inferencia", description: "Estima preferencias, riesgo, afinidad o propensión a partir de señales directas e indirectas.", risk: "Atributos sensibles inferidos, correlación tomada por causa, profecía autocumplida.", safeguard: "Justificación de variables, pruebas por grupos, prohibición de inferencias innecesarias." },
  { name: "Ranking y recomendación", description: "Ordena qué se ve primero y, por tanto, qué parece relevante, popular o posible.", risk: "Amplificación de extremos, burbujas, dependencia de objetivos comerciales opacos.", safeguard: "Opciones cronológicas, control del usuario, métricas de diversidad y explicación del objetivo." },
  { name: "Microtargeting", description: "Adapta mensaje, momento y formato a segmentos o individuos.", risk: "Persuasión no observable, explotación de vulnerabilidades y promesas incompatibles.", safeguard: "Bibliotecas públicas, límites a datos sensibles, transparencia y exclusión voluntaria." },
  { name: "Decisión automatizada", description: "Prioriza, recomienda o ejecuta decisiones en empleo, crédito, servicios o seguridad.", risk: "Escala del error, automatización de desigualdad, apelación ficticia.", safeguard: "Evaluación de impacto, revisión humana real, motivación comprensible y reparación." },
  { name: "Gestión algorítmica del trabajo", description: "Asigna tareas, mide ritmo, puntúa desempeño y disciplina mediante software.", risk: "Vigilancia permanente, intensificación, métricas sin contexto y pérdida de autonomía.", safeguard: "Información y negociación con trabajadores, límites de vigilancia y revisión contextual." },
  { name: "IA generativa persuasiva", description: "Produce mensajes personalizados, conversación a escala y apariencia de relación social.", risk: "Antropomorfismo, dependencia emocional, desinformación y simulación de consenso.", safeguard: "Identidad clara de la IA, límites a personalización sensible, procedencia y supervisión." },
];

export const cases = [
  { title: "Qin: capacidad y fragilidad del control total", context: "La estandarización, el registro y la disciplina ayudaron a unificar; la dureza, el trabajo forzado y la baja tolerancia a información adversa erosionaron legitimidad.", observe: "Capacidad administrativa no equivale a resiliencia. Un sistema que castiga al mensajero aprende tarde.", lesson: "Medir obediencia sin medir verdad crea un Estado informado por el miedo." },
  { title: "Florencia: conflicto, reputación e instituciones", context: "Maquiavelo vio alternarse república, facciones, intervención extranjera y señorío. Su realismo nace de una ciudad donde ninguna posición era segura.", observe: "El Príncipe explica adquisición y conservación; los Discursos, cómo instituciones y conflicto popular pueden defender libertad.", lesson: "Reducir a Maquiavelo al engaño borra su pregunta republicana." },
  { title: "Censo, mapa y administración colonial", context: "Clasificar población, territorio y propiedad hizo gobernables realidades complejas para poderes externos.", observe: "Las categorías describen y a la vez reorganizan identidades, derechos y recursos.", lesson: "Toda base de datos pública debe auditar qué mundo simplifica y quién paga el error." },
  { title: "Totalitarismo: aislamiento y realidad ficticia", context: "Arendt subraya atomización, terror e ideología capaz de aislar a las personas de experiencias compartidas.", observe: "La propaganda es más fuerte cuando desaparecen relaciones y espacios capaces de contradecirla.", lesson: "Proteger asociaciones, confianza horizontal y hechos comunes es infraestructura democrática." },
  { title: "Plataforma de recomendación", context: "Un sistema maximiza permanencia y reacción. No ordena prohibiendo, sino seleccionando millones de pequeñas exposiciones.", observe: "Objetivo técnico, incentivos comerciales y psicología de atención se acoplan en un bucle de aprendizaje.", lesson: "La libertad de elegir pierde contenido si una sola arquitectura decide qué llega a ser elegible." },
  { title: "Almacén dirigido por métricas", context: "Un panel puntúa velocidad y errores, pero ignora dificultad, seguridad, cooperación y conocimiento tácito.", observe: "El indicador se vuelve meta; trabajadores adaptan conducta, ocultan incidencias o evitan tareas complejas.", lesson: "Combinar métricas, contexto humano, voz de plantilla y derecho a corregir la puntuación." },
];

export const glossary = [
  ["Asabiyya", "Cohesión o solidaridad grupal en Ibn Jaldún; fuente de acción colectiva y poder dinástico."],
  ["BATNA", "Mejor alternativa a un acuerdo negociado. No es una fórmula de poder, sino la opción disponible si no hay acuerdo y una referencia para decidir cuándo rechazarlo."],
  ["Biopolítica", "Gestión de procesos vitales de poblaciones: salud, natalidad, riesgo, circulación y seguridad."],
  ["Compromiso creíble", "Promesa o advertencia que otros consideran probable porque existen capacidad, incentivos, reputación o límites observables que sostienen su cumplimiento."],
  ["Coerción", "Modificación de conducta mediante amenaza creíble de daño, sanción o privación."],
  ["Contestabilidad", "Posibilidad efectiva de conocer, impugnar y obtener revisión de una decisión."],
  ["Diseño de mecanismos", "Diseño de reglas para coordinar decisiones cuando los participantes poseen información e intereses distintos; exige explicitar objetivo, supuestos, participación e incentivos."],
  ["Dominación", "Relación estable de obediencia asimétrica; puede reclamar legitimidad o sostenerse por coerción y dependencia."],
  ["Equilibrio de Nash", "Perfil de estrategias en el que ningún jugador mejora cambiando unilateralmente, dadas las estrategias de los demás. Describe estabilidad estratégica, no justicia ni bienestar."],
  ["Fa", "En el pensamiento fajia, estándares, modelos o normas objetivables; no equivale sin más a Estado de derecho."],
  ["Gobernamentalidad", "Racionalidades y técnicas para conducir conductas, incluidas formas de autogobierno."],
  ["Hegemonía", "Dirección cultural y moral que convierte intereses particulares en sentido común ampliamente aceptado."],
  ["Legibilidad", "Simplificación de una realidad compleja para hacerla visible y administrable desde un centro."],
  ["Legitimidad", "Creencia y justificación de que una autoridad tiene derecho a mandar bajo ciertas normas."],
  ["Juego repetido", "Interacción cuyos participantes esperan volver a encontrarse; reputación, reciprocidad y posibilidad de reparación pueden sostener cooperación bajo condiciones concretas."],
  ["Microtargeting", "Personalización de mensajes para segmentos pequeños o individuos a partir de datos."],
  ["Poder simbólico", "Capacidad de imponer categorías de percepción que son reconocidas como legítimas."],
  ["Propaganda", "Comunicación sistemática orientada a organizar percepciones, emociones y conducta en favor de una causa o actor."],
  ["Señal", "Acción o información observable usada para comunicar una cualidad o intención; resulta informativa cuando fingirla es difícil o puede verificarse."],
  ["Shapley-Shubik", "Índice que estima la probabilidad de que un actor sea pivotal en órdenes posibles de formación de una mayoría. Depende del modelo de votación y no mide por sí solo influencia real."],
  ["Shi", "Ventaja o autoridad derivada de la posición y de la configuración, no sólo de cualidades personales."],
  ["Shu", "Técnicas administrativas del gobernante para nombrar, verificar y controlar a sus agentes."],
  ["Violencia simbólica", "Dominación que opera mediante categorías incorporadas y reconocimiento de un orden como natural."],
  ["Xing-ming", "Comparación entre forma o desempeño efectivo y el nombre, cargo o promesa declarada."],
];

export const references = [
  { label: "Machiavelli", text: "The Prince; Discourses on Livy. Véase también Stanford Encyclopedia of Philosophy.", href: "https://plato.stanford.edu/entries/machiavelli/" },
  { label: "Sun Tzu", text: "The Art of War, traducción de Lionel Giles.", href: "https://www.gutenberg.org/files/132/132-h/132-h.htm" },
  { label: "Han Feizi", text: "Han Feizi: Basic Writings, trad. Burton Watson; Legalism in Chinese Philosophy.", href: "https://plato.stanford.edu/entries/chinese-legalism/" },
  { label: "Kautilya", text: "Arthashastra, trad. R. Shamasastry; ediciones críticas modernas de Patrick Olivelle.", href: "https://archive.org/details/in.gov.ignca.900" },
  { label: "Ibn Jaldún", text: "The Muqaddimah, trad. Franz Rosenthal.", href: "https://pmc.ncbi.nlm.nih.gov/articles/PMC12177447/" },
  { label: "Weber", text: "Economy and Society (1922): dominación legítima y burocracia." },
  { label: "Gramsci", text: "Selections from the Prison Notebooks (1971): hegemonía y sociedad civil." },
  { label: "Arendt", text: "The Origins of Totalitarianism (1951); On Violence (1970)." },
  { label: "Foucault", text: "Discipline and Punish; The History of Sexuality I; Security, Territory, Population.", href: "https://plato.stanford.edu/entries/foucault/" },
  { label: "Bourdieu", text: "Language and Symbolic Power (1991); Distinction (1979)." },
  { label: "Lukes", text: "Power: A Radical View (1974/2005)." },
  { label: "Scott", text: "Domination and the Arts of Resistance (1990); Seeing Like a State (1998)." },
  { label: "Ostrom", text: "Governing the Commons (1990)." },
  { label: "Fanon", text: "The Wretched of the Earth (1961)." },
  { label: "Freire", text: "Pedagogy of the Oppressed (1968/1970)." },
  { label: "Quijano", text: "Coloniality of Power, Eurocentrism, and Latin America (2000)." },
  { label: "Mbembe", text: "Necropolitics (2003/2019)." },
  { label: "El Tablero Iluminado", text: "The Illuminated Board, PDF ilustrado de 14 láminas aportado para esta edición (2026). Las láminas se tratan como material de síntesis y se contrastan con las fuentes empíricas citadas." },
  { label: "The Power Blueprint", text: "Presentación ilustrada de 15 diapositivas aportada para esta edición (2026). Sus modelos visuales se emplean como heurísticas de diagnóstico, no como leyes psicológicas." },
  { label: "Manual Práctico del Poder", text: "Documento aportado para esta edición (2026): teoría de juegos, estrategia y realpolitik. Sus modelos se incorporan críticamente; las fórmulas no estandarizadas se reformulan como heurísticas y las prácticas abusivas se analizan como señales de alerta." },
  { label: "Teoría de juegos", text: "Nash, Harsanyi y Selten: fundamentos y refinamientos del análisis de equilibrios; síntesis oficial del Premio Sveriges Riksbank 1994.", href: "https://www.nobelprize.org/prizes/economic-sciences/1994/press-release/" },
  { label: "Información asimétrica", text: "Akerlof, Spence y Stiglitz: mercados con información desigual; síntesis oficial del Premio Sveriges Riksbank 2001.", href: "https://www.nobelprize.org/prizes/economic-sciences/2001/popular-information/" },
  { label: "Diseño de mecanismos", text: "Hurwicz, Maskin y Myerson: instituciones, información privada e incentivos; síntesis oficial del Premio Sveriges Riksbank 2007.", href: "https://www.nobelprize.org/prizes/economic-sciences/2007/popular-information/" },
  { label: "Negociación y BATNA", text: "Harvard Program on Negotiation: recursos sobre alternativas al acuerdo, umbrales de reserva y negociación basada en intereses.", href: "https://www.pon.harvard.edu/category/daily/batna/" },
  { label: "Schelling", text: "The Strategy of Conflict (1960): compromiso, coordinación, amenazas y puntos focales." },
  { label: "Juegos repetidos", text: "Fudenberg y Maskin (1986), The Folk Theorem in Repeated Games with Discounting or with Incomplete Information.", href: "https://maskin.scholars.harvard.edu/publications/folk-theorem-repeated-games-discounting-or-incomplete-information" },
  { label: "Cooperación recíproca", text: "Axelrod y Hamilton (1981), The Evolution of Cooperation; resultado dependiente de las condiciones del modelo y del torneo.", href: "https://www.science.org/doi/10.1126/science.7466396" },
  { label: "Poder pivotal", text: "Shapley y Shubik (1954), A Method for Evaluating the Distribution of Power in a Committee System.", href: "https://ideas.repec.org/a/cup/apsrev/v48y1954i03p787-792_00.html" },
  { label: "Coaliciones", text: "Riker, The Theory of Political Coalitions (1962), leído junto con críticas a la hipótesis de coalición mínima ganadora.", href: "https://www.cambridge.org/core/journals/american-political-science-review/article/hollow-victory-the-minimum-winning-coalition/B35FBC191CC349F9885A771471C7BFBA" },
  { label: "Teoría prospectiva", text: "Kahneman y Tversky (1979): decisiones bajo riesgo, puntos de referencia y aversión a la pérdida; los parámetros varían según persona y contexto.", href: "https://web.mit.edu/curhan/www/docs/Articles/15341_Readings/Behavioral_Decision_Theory/Kahneman_Tversky_1979_Prospect_theory.pdf" },
  { label: "Cialdini", text: "Pre-Suasion: A Revolutionary Way to Influence and Persuade (2016); Influence, New and Expanded (2021)." },
  { label: "Psicología social", text: "Asch (1951); Milgram (1963); Festinger (1957); Tajfel y Turner (1979); Janis (1972)." },
  { label: "Silencio organizativo", text: "Milliken, Morrison y Hewlin (2003).", href: "https://onlinelibrary.wiley.com/doi/10.1111/1467-6486.00387" },
  { label: "Seguridad psicológica", text: "Edmondson (1999).", href: "https://web.mit.edu/curhan/www/docs/Articles/15341_Readings/Group_Performance/Edmondson%20Psychological%20safety.pdf" },
  { label: "Clase social y ética", text: "Piff et al. (2012), con cautela por replicaciones posteriores.", href: "https://www.pnas.org/doi/10.1073/pnas.1118373109" },
  { label: "Poder digital", text: "Lessig, Code; Pasquale, The Black Box Society; Zuboff, The Age of Surveillance Capitalism." },
  { label: "Desigualdad automatizada", text: "O'Neil, Weapons of Math Destruction; Eubanks, Automating Inequality; Noble, Algorithms of Oppression; Benjamin, Race After Technology." },
  { label: "Reglamento europeo de IA", text: "Reglamento (UE) 2024/1689 y calendario oficial de aplicación.", href: "https://digital-strategy.ec.europa.eu/en/policies/regulatory-framework-ai" },
  { label: "Consejo de Europa", text: "Convenio Marco sobre IA, derechos humanos, democracia y Estado de derecho (CETS 225).", href: "https://www.coe.int/en/web/artificial-intelligence/the-framework-convention-on-artificial-intelligence" },
  { label: "UNESCO", text: "Recomendación sobre la Ética de la Inteligencia Artificial (2021).", href: "https://www.unesco.org/en/legal-affairs/recommendation-ethics-artificial-intelligence" },
  { label: "NIST", text: "AI Risk Management Framework 1.0 y perfil de IA generativa.", href: "https://www.nist.gov/itl/ai-risk-management-framework" },
];
