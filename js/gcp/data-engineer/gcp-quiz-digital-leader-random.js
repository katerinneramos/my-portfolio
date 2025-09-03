document.addEventListener("DOMContentLoaded", () => {
    // Preguntas organizadas por tema
    const questionsByTopic = {
        "0": [ // Fundamentos de la Nube y Google Cloud
            {
                question: "¿Cuál es una de las principales ventajas de utilizar una nube pública como Google Cloud en comparación con una infraestructura on-premise?",
                answer: "Escalabilidad bajo demanda sin necesidad de inversión en hardware físico.",
                type: "multiple",
                options: [
                    "Mayor control sobre el hardware y la red.",
                    "Escalabilidad bajo demanda sin necesidad de inversión en hardware físico.",
                    "Menor seguridad en comparación con una solución on-premise.",
                    "Mayor costo operativo en todos los casos."
                ],
                explanation: "La nube pública permite escalar recursos según la demanda sin inversiones iniciales en hardware, reduciendo costos y mejorando la flexibilidad."
            },
            {
                question: "Caso de Estudio: Una empresa de retail quiere mejorar su infraestructura de TI para manejar picos de tráfico en días de grandes ofertas. ¿Qué estrategia en Google Cloud permitiría manejar estos picos de tráfico eficientemente?",
                answer: "Autoscaling en Google Kubernetes Engine o Compute Engine.",
                type: "multiple",
                options: [
                    "Mantener servidores adicionales encendidos todo el tiempo.",
                    "Autoscaling en Google Kubernetes Engine o Compute Engine.",
                    "Usar un solo servidor grande para soportar todo el tráfico.",
                    "Aumentar manualmente la capacidad de los servidores antes del evento."
                ],
                explanation: "El autoscaling en GKE o Compute Engine permite ajustar automáticamente los recursos según la demanda, optimizando costos y rendimiento."
            },
            {
                question: "¿Cuál de los siguientes modelos de servicio en la nube proporciona control total sobre el sistema operativo y la infraestructura de red?",
                answer: "Infrastructure as a Service (IaaS).",
                type: "multiple",
                options: [
                    "Software as a Service (SaaS).",
                    "Platform as a Service (PaaS).",
                    "Infrastructure as a Service (IaaS).",
                    "Database as a Service (DBaaS)."
                ],
                explanation: "IaaS proporciona control total sobre máquinas virtuales, redes y almacenamiento, a diferencia de PaaS y SaaS, que abstraen más niveles de la infraestructura."
            },
            {
                question: "Caso de Estudio: Una empresa quiere adoptar Google Cloud pero tiene preocupaciones sobre seguridad y cumplimiento normativo. ¿Qué servicio de Google Cloud proporciona herramientas de monitoreo y cumplimiento?",
                answer: "Security Command Center.",
                type: "multiple",
                options: [
                    "Cloud Logging.",
                    "Security Command Center.",
                    "Compute Engine.",
                    "Cloud Functions."
                ],
                explanation: "Security Command Center ofrece herramientas avanzadas de monitoreo, detección de amenazas y cumplimiento normativo en Google Cloud."
            },
            {
                question: "¿Cuál es un beneficio clave de usar Google Cloud Storage para almacenar datos empresariales?",
                answer: "Alta durabilidad y disponibilidad global.",
                type: "multiple",
                options: [
                    "Bajo rendimiento en comparación con discos locales.",
                    "Alta durabilidad y disponibilidad global.",
                    "Requiere administración constante del hardware.",
                    "No permite escalabilidad automatizada."
                ],
                explanation: "Google Cloud Storage ofrece alta disponibilidad y durabilidad gracias a la replicación de datos en múltiples ubicaciones."
            },
            {
                question: "¿Cuál es un beneficio clave del modelo de nube frente a la infraestructura on-premises?",
                answer: "Escalabilidad elástica",
                type: "multiple",
                options: [
                    "Costos fijos previsibles",
                    "Menos requisitos de seguridad",
                    "Escalabilidad elástica",
                    "Menor latencia garantizada"
                ],
                explanation: "La nube permite escalar recursos dinámicamente según la demanda, a diferencia de la infraestructura on-premises."
            },
            {
                question: "En Google Cloud, ¿qué principio de seguridad sigue el modelo de IAM (Identity and Access Management)?",
                answer: "Principio de privilegio mínimo",
                type: "multiple",
                options: [
                    "Acceso total por defecto",
                    "Principio de privilegio mínimo",
                    "Acceso basado en redes",
                    "Seguridad basada en contraseñas"
                ],
                explanation: "IAM en Google Cloud sigue el principio de privilegio mínimo, otorgando solo los permisos necesarios a cada usuario."
            },
            {
                question: "¿Cuál de las siguientes opciones describe un servicio IaaS en Google Cloud?",
                answer: "Compute Engine",
                type: "multiple",
                options: [
                    "Cloud Functions",
                    "BigQuery",
                    "Compute Engine",
                    "Cloud Run"
                ],
                explanation: "Compute Engine es un servicio IaaS (Infrastructure as a Service) que proporciona máquinas virtuales en Google Cloud."
            },
            {
                question: "¿Qué ventaja ofrece Google Cloud en comparación con una infraestructura on-premises en términos de mantenimiento?",
                answer: "Mantenimiento gestionado por Google",
                type: "multiple",
                options: [
                    "Mayor personalización del hardware",
                    "Mantenimiento gestionado por Google",
                    "Costos fijos sin variaciones",
                    "Acceso ilimitado a hardware físico"
                ],
                explanation: "Google Cloud gestiona el mantenimiento y actualizaciones de la infraestructura, reduciendo la carga operativa para los clientes."
            },
            {
                question: "¿Qué servicio de Google Cloud permite gestionar y optimizar costos en múltiples proyectos?",
                answer: "Billing Account Management",
                type: "multiple",
                options: [
                    "Cloud Monitoring",
                    "Billing Account Management",
                    "IAM Policies",
                    "Cloud Spanner"
                ],
                explanation: "Billing Account Management permite centralizar la gestión y optimización de costos en Google Cloud."
            }
        ],
        "1": [ // Casos de Uso de Google Cloud
            {
                question: "Caso de Estudio: Una empresa financiera necesita procesar transacciones en tiempo real para detectar fraudes. ¿Qué servicio de Google Cloud es más adecuado para manejar datos en streaming?",
                answer: "Cloud Pub/Sub.",
                type: "multiple",
                options: [
                    "Cloud Storage.",
                    "Cloud Pub/Sub.",
                    "BigQuery.",
                    "Firestore."
                ],
                explanation: "Cloud Pub/Sub permite la ingesta de datos en tiempo real y su procesamiento con herramientas como Dataflow, ideal para la detección de fraudes."
            },
            {
                question: "Caso de Estudio: Una empresa de e-commerce quiere personalizar las recomendaciones de productos para cada usuario en tiempo real. ¿Qué combinación de servicios en Google Cloud es más adecuada?",
                answer: "BigQuery ML y AI Platform.",
                type: "multiple",
                options: [
                    "Compute Engine y Cloud Storage.",
                    "BigQuery ML y AI Platform.",
                    "Cloud Functions y Firestore.",
                    "App Engine y Memorystore."
                ],
                explanation: "BigQuery ML permite entrenar modelos de machine learning sobre grandes volúmenes de datos, mientras que AI Platform permite su despliegue y escalabilidad."
            },
            {
                question: "Caso de Estudio: Un medio de comunicación digital quiere transcribir y traducir en tiempo real entrevistas en diferentes idiomas. ¿Qué servicios de Google Cloud debería usar?",
                answer: "Cloud Speech-to-Text y Cloud Translation API.",
                type: "multiple",
                options: [
                    "Cloud Speech-to-Text y Cloud Translation API.",
                    "BigQuery y Dataflow.",
                    "Compute Engine y Memorystore.",
                    "Cloud Run y Firestore."
                ],
                explanation: "Cloud Speech-to-Text permite transcribir audio en texto, y Cloud Translation API traduce ese texto automáticamente a diferentes idiomas."
            },
            {
                question: "Caso de Estudio: Una empresa de logística necesita optimizar rutas de entrega con base en datos de tráfico en tiempo real. ¿Qué servicio de Google Cloud es ideal para este caso?",
                answer: "Google Maps Platform.",
                type: "multiple",
                options: [
                    "BigQuery.",
                    "Google Maps Platform.",
                    "Cloud Spanner.",
                    "Looker."
                ],
                explanation: "Google Maps Platform proporciona datos de tráfico en tiempo real y herramientas de optimización de rutas."
            },
            {
                question: "Caso de Estudio: Una empresa de videojuegos quiere analizar el comportamiento de los jugadores y detectar anomalías en sus servidores en tiempo real. ¿Qué solución es más eficiente?",
                answer: "Cloud Logging y BigQuery.",
                type: "multiple",
                options: [
                    "Cloud Logging y BigQuery.",
                    "Cloud Spanner y Dataflow.",
                    "Firestore y AI Platform.",
                    "App Engine y Cloud SQL."
                ],
                explanation: "Cloud Logging captura eventos en tiempo real y BigQuery permite analizarlos para detectar patrones y anomalías."
            },
            {
                question: "Caso de Estudio: Una empresa farmacéutica necesita analizar grandes volúmenes de datos genómicos para desarrollar nuevos medicamentos. ¿Qué servicio de Google Cloud permite procesar estos datos de manera escalable?",
                answer: "Cloud Life Sciences.",
                type: "multiple",
                options: [
                    "BigQuery.",
                    "Cloud Life Sciences.",
                    "Cloud Run.",
                    "Memorystore."
                ],
                explanation: "Cloud Life Sciences proporciona herramientas especializadas para procesar datos biológicos y realizar análisis genómicos a gran escala."
            },
            {
                question: "Caso de Estudio: Una entidad gubernamental quiere garantizar la seguridad de sus datos almacenados en la nube. ¿Qué herramienta de Google Cloud ofrece monitoreo avanzado y detección de amenazas?",
                answer: "Security Command Center.",
                type: "multiple",
                options: [
                    "Cloud IAM.",
                    "Security Command Center.",
                    "Cloud SQL.",
                    "Dataflow."
                ],
                explanation: "Security Command Center ayuda a detectar amenazas, vulnerabilidades y configuraciones incorrectas en los recursos de Google Cloud."
            },
            {
                question: "Caso de Estudio: Una empresa de streaming de video quiere ofrecer contenido con la menor latencia posible a usuarios globales. ¿Qué solución de Google Cloud es más adecuada?",
                answer: "Cloud CDN.",
                type: "multiple",
                options: [
                    "Cloud CDN.",
                    "Cloud SQL.",
                    "BigQuery ML.",
                    "Dataproc."
                ],
                explanation: "Cloud CDN almacena en caché contenido en ubicaciones cercanas a los usuarios, reduciendo la latencia y mejorando la experiencia."
            },
            {
                question: "Caso de Estudio: Una empresa automotriz quiere entrenar modelos de IA con datos de sensores de vehículos conectados. ¿Qué servicio de Google Cloud es ideal para este caso?",
                answer: "Vertex AI.",
                type: "multiple",
                options: [
                    "Vertex AI.",
                    "Cloud Spanner.",
                    "Cloud SQL.",
                    "App Engine."
                ],
                explanation: "Vertex AI permite entrenar, desplegar y gestionar modelos de machine learning con grandes volúmenes de datos."
            },
            {
                question: "Caso de Estudio: Una empresa de salud necesita analizar imágenes médicas y detectar anomalías automáticamente. ¿Qué servicio de Google Cloud es más adecuado?",
                answer: "Cloud Vision AI.",
                type: "multiple",
                options: [
                    "BigQuery.",
                    "Cloud Vision AI.",
                    "Cloud SQL.",
                    "Dataproc."
                ],
                explanation: "Cloud Vision AI permite el análisis de imágenes y la detección de patrones en datos médicos mediante inteligencia artificial."
            }
        ],
        "2": [ // Seguridad y Cumplimiento en Google Cloud
            {
                question: "¿Qué servicio de Google Cloud permite la gestión centralizada de claves de cifrado para cumplir con requisitos de seguridad y cumplimiento?",
                answer: "Cloud Key Management Service (KMS)",
                type: "multiple",
                options: [
                    "Cloud Identity-Aware Proxy (IAP)",
                    "Cloud Key Management Service (KMS)",
                    "Cloud Armor",
                    "Cloud Security Command Center (SCC)"
                ],
                explanation: "Cloud KMS permite la gestión, rotación y control de claves de cifrado usadas en otros servicios de Google Cloud."
            },
            {
                question: "Una empresa necesita controlar el acceso a recursos en Google Cloud basándose en la identidad del usuario y la sensibilidad de los datos. ¿Qué servicio es más adecuado para este escenario?",
                answer: "BeyondCorp Enterprise",
                type: "multiple",
                options: [
                    "Cloud VPN",
                    "BeyondCorp Enterprise",
                    "Cloud Interconnect",
                    "Cloud Identity"
                ],
                explanation: "BeyondCorp Enterprise permite acceso seguro sin VPN, basado en identidad y contexto del usuario."
            },
            {
                question: "¿Qué servicio de Google Cloud proporciona visibilidad centralizada sobre amenazas de seguridad y vulnerabilidades en todos los proyectos?",
                answer: "Cloud Security Command Center (SCC)",
                type: "multiple",
                options: [
                    "Cloud IAM",
                    "Cloud Security Command Center (SCC)",
                    "Cloud Logging",
                    "Cloud Audit Logs"
                ],
                explanation: "SCC ayuda a detectar, analizar y responder a amenazas de seguridad en entornos de Google Cloud."
            },
            {
                question: "¿Qué técnica permite a una organización controlar cómo se usan y comparten datos sensibles en Google Cloud?",
                answer: "Data Loss Prevention (DLP)",
                type: "multiple",
                options: [
                    "Identity and Access Management (IAM)",
                    "Cloud Logging",
                    "Data Loss Prevention (DLP)",
                    "Cloud VPN"
                ],
                explanation: "DLP ayuda a identificar y proteger datos sensibles mediante reglas de detección y anonimización."
            },
            {
                question: "Una empresa necesita cumplir con regulaciones estrictas y asegurarse de que sus datos se almacenen en una región específica. ¿Qué servicio permite cumplir con este requisito?",
                answer: "Assured Workloads",
                type: "multiple",
                options: [
                    "Cloud Armor",
                    "Assured Workloads",
                    "Cloud Data Loss Prevention",
                    "Cloud KMS"
                ],
                explanation: "Assured Workloads permite configurar entornos en Google Cloud que cumplan con requisitos regulatorios específicos."
            },
            {
                question: "¿Cuál es la mejor práctica para garantizar que solo usuarios autorizados accedan a recursos críticos en Google Cloud?",
                answer: "Implementar autenticación multifactor (MFA) con Cloud Identity",
                type: "multiple",
                options: [
                    "Implementar autenticación multifactor (MFA) con Cloud Identity",
                    "Usar Cloud NAT para restringir accesos externos",
                    "Permitir acceso con claves SSH sin restricciones",
                    "Habilitar Cloud CDN para proteger recursos internos"
                ],
                explanation: "La autenticación multifactor reduce el riesgo de accesos no autorizados a recursos críticos."
            },
            {
                question: "¿Qué servicio permite restringir el tráfico entrante a aplicaciones en Google Cloud basándose en reglas de seguridad personalizadas?",
                answer: "Cloud Armor",
                type: "multiple",
                options: [
                    "Cloud CDN",
                    "Cloud Armor",
                    "Cloud DNS",
                    "Cloud Run"
                ],
                explanation: "Cloud Armor protege aplicaciones contra ataques DDoS y permite definir reglas de acceso basadas en IP y geolocalización."
            },
            {
                question: "¿Cuál es la mejor estrategia para minimizar el impacto de un incidente de seguridad en Google Cloud?",
                answer: "Implementar el principio de privilegio mínimo y segmentar redes con VPC Service Controls",
                type: "multiple",
                options: [
                    "Permitir acceso ilimitado a usuarios internos",
                    "Usar una única cuenta de servicio para todos los recursos",
                    "Implementar el principio de privilegio mínimo y segmentar redes con VPC Service Controls",
                    "Evitar el uso de Cloud IAM para permisos granulares"
                ],
                explanation: "El principio de privilegio mínimo y VPC Service Controls ayudan a limitar el acceso y reducir el impacto de incidentes."
            },
            {
                question: "¿Qué servicio permite centralizar la gestión de identidades y accesos en Google Cloud para cumplir con normativas de seguridad?",
                answer: "Cloud Identity",
                type: "multiple",
                options: [
                    "Cloud Interconnect",
                    "Cloud Identity",
                    "Cloud NAT",
                    "Cloud Functions"
                ],
                explanation: "Cloud Identity facilita la administración de identidades y accesos en entornos empresariales."
            },
            {
                question: "Una empresa quiere asegurar que solo dispositivos de confianza puedan acceder a recursos en Google Cloud. ¿Qué servicio debe usar?",
                answer: "Endpoint Verification con BeyondCorp Enterprise",
                type: "multiple",
                options: [
                    "Cloud VPN",
                    "Endpoint Verification con BeyondCorp Enterprise",
                    "Cloud Run",
                    "Cloud Storage"
                ],
                explanation: "Endpoint Verification permite validar dispositivos antes de conceder acceso a recursos en la nube."
            }
        ],
        "3": [ // Seguridad y Gobernanza de Datos
            {
                question: "¿Qué servicio de Google Cloud permite la gestión centralizada de claves de cifrado para cumplir con requisitos de seguridad y cumplimiento?",
                answer: "Cloud Key Management Service (KMS)",
                type: "multiple",
                options: [
                    "Cloud Identity-Aware Proxy (IAP)",
                    "Cloud Key Management Service (KMS)",
                    "Cloud Armor",
                    "Cloud Security Command Center (SCC)"
                ],
                explanation: "Cloud KMS permite la gestión, rotación y control de claves de cifrado usadas en otros servicios de Google Cloud."
            },
            {
                question: "Una empresa necesita controlar el acceso a recursos en Google Cloud basándose en la identidad del usuario y la sensibilidad de los datos. ¿Qué servicio es más adecuado para este escenario?",
                answer: "BeyondCorp Enterprise",
                type: "multiple",
                options: [
                    "Cloud VPN",
                    "BeyondCorp Enterprise",
                    "Cloud Interconnect",
                    "Cloud Identity"
                ],
                explanation: "BeyondCorp Enterprise permite acceso seguro sin VPN, basado en identidad y contexto del usuario."
            },
            {
                question: "¿Qué servicio de Google Cloud proporciona visibilidad centralizada sobre amenazas de seguridad y vulnerabilidades en todos los proyectos?",
                answer: "Cloud Security Command Center (SCC)",
                type: "multiple",
                options: [
                    "Cloud IAM",
                    "Cloud Security Command Center (SCC)",
                    "Cloud Logging",
                    "Cloud Audit Logs"
                ],
                explanation: "SCC ayuda a detectar, analizar y responder a amenazas de seguridad en entornos de Google Cloud."
            },
            {
                question: "¿Qué técnica permite a una organización controlar cómo se usan y comparten datos sensibles en Google Cloud?",
                answer: "Data Loss Prevention (DLP)",
                type: "multiple",
                options: [
                    "Identity and Access Management (IAM)",
                    "Cloud Logging",
                    "Data Loss Prevention (DLP)",
                    "Cloud VPN"
                ],
                explanation: "DLP ayuda a identificar y proteger datos sensibles mediante reglas de detección y anonimización."
            },
            {
                question: "Una empresa necesita cumplir con regulaciones estrictas y asegurarse de que sus datos se almacenen en una región específica. ¿Qué servicio permite cumplir con este requisito?",
                answer: "Assured Workloads",
                type: "multiple",
                options: [
                    "Cloud Armor",
                    "Assured Workloads",
                    "Cloud Data Loss Prevention",
                    "Cloud KMS"
                ],
                explanation: "Assured Workloads permite configurar entornos en Google Cloud que cumplan con requisitos regulatorios específicos."
            },
            {
                question: "¿Qué servicio de Google Cloud permite definir políticas de gobernanza de datos para asegurar el cumplimiento normativo?",
                answer: "Dataplex",
                type: "multiple",
                options: [
                    "Cloud DLP",
                    "Dataplex",
                    "Cloud Audit Logs",
                    "BigQuery Data Governance"
                ],
                explanation: "Dataplex facilita la gobernanza de datos mediante políticas de seguridad y control de acceso."
            },
            {
                question: "Una empresa quiere prevenir la exfiltración de datos en su entorno de Google Cloud. ¿Qué servicio es el más adecuado para este caso?",
                answer: "VPC Service Controls",
                type: "multiple",
                options: [
                    "Cloud VPN",
                    "VPC Service Controls",
                    "Cloud Armor",
                    "Cloud IAM"
                ],
                explanation: "VPC Service Controls ayuda a prevenir la exfiltración de datos restringiendo el acceso a servicios y API en Google Cloud."
            },
            {
                question: "¿Qué servicio de Google Cloud permite la auditoría y monitoreo de actividades en proyectos y organizaciones?",
                answer: "Cloud Audit Logs",
                type: "multiple",
                options: [
                    "Cloud IAM",
                    "Cloud Audit Logs",
                    "Cloud Security Command Center",
                    "BigQuery"
                ],
                explanation: "Cloud Audit Logs proporciona registros detallados de actividades y eventos de seguridad en Google Cloud."
            },
            {
                question: "Para cumplir con el principio de mínimo privilegio en la gestión de accesos en Google Cloud, ¿qué herramienta se debe utilizar?",
                answer: "Cloud IAM con políticas de roles personalizados",
                type: "multiple",
                options: [
                    "Cloud IAM con políticas de roles personalizados",
                    "Cloud VPN",
                    "Cloud NAT",
                    "Cloud Functions"
                ],
                explanation: "Cloud IAM con roles personalizados permite aplicar el principio de mínimo privilegio asignando permisos específicos a cada usuario."
            },
            {
                question: "Una organización necesita cifrar datos sensibles almacenados en BigQuery. ¿Qué opción es la más recomendada?",
                answer: "BigQuery Customer-Managed Encryption Keys (CMEK)",
                type: "multiple",
                options: [
                    "BigQuery Customer-Managed Encryption Keys (CMEK)",
                    "Cloud SQL",
                    "Cloud NAT",
                    "Cloud DNS"
                ],
                explanation: "CMEK permite a las organizaciones gestionar sus propias claves de cifrado para proteger datos en BigQuery."
            }
        ],
        "4": [ // Transformación Digital con Google Cloud
            {
                question: "¿Qué servicio de Google Cloud permite la gestión centralizada de claves de cifrado para cumplir con requisitos de seguridad y cumplimiento?",
                answer: "Cloud Key Management Service (KMS)",
                type: "multiple",
                options: [
                    "Cloud Identity-Aware Proxy (IAP)",
                    "Cloud Key Management Service (KMS)",
                    "Cloud Armor",
                    "Cloud Security Command Center (SCC)"
                ],
                explanation: "Cloud KMS permite la gestión, rotación y control de claves de cifrado usadas en otros servicios de Google Cloud."
            },
            {
                question: "Una empresa necesita controlar el acceso a recursos en Google Cloud basándose en la identidad del usuario y la sensibilidad de los datos. ¿Qué servicio es más adecuado para este escenario?",
                answer: "BeyondCorp Enterprise",
                type: "multiple",
                options: [
                    "Cloud VPN",
                    "BeyondCorp Enterprise",
                    "Cloud Interconnect",
                    "Cloud Identity"
                ],
                explanation: "BeyondCorp Enterprise permite acceso seguro sin VPN, basado en identidad y contexto del usuario."
            },
            {
                question: "¿Qué servicio de Google Cloud proporciona visibilidad centralizada sobre amenazas de seguridad y vulnerabilidades en todos los proyectos?",
                answer: "Cloud Security Command Center (SCC)",
                type: "multiple",
                options: [
                    "Cloud IAM",
                    "Cloud Security Command Center (SCC)",
                    "Cloud Logging",
                    "Cloud Audit Logs"
                ],
                explanation: "SCC ayuda a detectar, analizar y responder a amenazas de seguridad en entornos de Google Cloud."
            },
            {
                question: "¿Qué técnica permite a una organización controlar cómo se usan y comparten datos sensibles en Google Cloud?",
                answer: "Data Loss Prevention (DLP)",
                type: "multiple",
                options: [
                    "Identity and Access Management (IAM)",
                    "Cloud Logging",
                    "Data Loss Prevention (DLP)",
                    "Cloud VPN"
                ],
                explanation: "DLP ayuda a identificar y proteger datos sensibles mediante reglas de detección y anonimización."
            },
            {
                question: "Una empresa necesita cumplir con regulaciones estrictas y asegurarse de que sus datos se almacenen en una región específica. ¿Qué servicio permite cumplir con este requisito?",
                answer: "Assured Workloads",
                type: "multiple",
                options: [
                    "Cloud Armor",
                    "Assured Workloads",
                    "Cloud Data Loss Prevention",
                    "Cloud KMS"
                ],
                explanation: "Assured Workloads permite configurar entornos en Google Cloud que cumplan con requisitos regulatorios específicos."
            },
            {
                question: "¿Qué servicio de Google Cloud permite definir políticas de gobernanza de datos para asegurar el cumplimiento normativo?",
                answer: "Dataplex",
                type: "multiple",
                options: [
                    "Cloud DLP",
                    "Dataplex",
                    "Cloud Audit Logs",
                    "BigQuery Data Governance"
                ],
                explanation: "Dataplex facilita la gobernanza de datos mediante políticas de seguridad y control de acceso."
            },
            {
                question: "Una empresa quiere prevenir la exfiltración de datos en su entorno de Google Cloud. ¿Qué servicio es el más adecuado para este caso?",
                answer: "VPC Service Controls",
                type: "multiple",
                options: [
                    "Cloud VPN",
                    "VPC Service Controls",
                    "Cloud Armor",
                    "Cloud IAM"
                ],
                explanation: "VPC Service Controls ayuda a prevenir la exfiltración de datos restringiendo el acceso a servicios y API en Google Cloud."
            },
            {
                question: "¿Qué servicio de Google Cloud permite la auditoría y monitoreo de actividades en proyectos y organizaciones?",
                answer: "Cloud Audit Logs",
                type: "multiple",
                options: [
                    "Cloud IAM",
                    "Cloud Audit Logs",
                    "Cloud Security Command Center",
                    "BigQuery"
                ],
                explanation: "Cloud Audit Logs proporciona registros detallados de actividades y eventos de seguridad en Google Cloud."
            },
            {
                question: "Para cumplir con el principio de mínimo privilegio en la gestión de accesos en Google Cloud, ¿qué herramienta se debe utilizar?",
                answer: "Cloud IAM con políticas de roles personalizados",
                type: "multiple",
                options: [
                    "Cloud IAM con políticas de roles personalizados",
                    "Cloud VPN",
                    "Cloud NAT",
                    "Cloud Functions"
                ],
                explanation: "Cloud IAM con roles personalizados permite aplicar el principio de mínimo privilegio asignando permisos específicos a cada usuario."
            },
            {
                question: "Una organización necesita cifrar datos sensibles almacenados en BigQuery. ¿Qué opción es la más recomendada?",
                answer: "BigQuery Customer-Managed Encryption Keys (CMEK)",
                type: "multiple",
                options: [
                    "BigQuery Customer-Managed Encryption Keys (CMEK)",
                    "Cloud SQL",
                    "Cloud NAT",
                    "Cloud DNS"
                ],
                explanation: "CMEK permite a las organizaciones gestionar sus propias claves de cifrado para proteger datos en BigQuery."
            }
        ],
        "5": [ // Inteligencia Artificial y Analítica en Google Cloud
            {
                question: "¿Qué servicio de Google Cloud permite construir, entrenar e implementar modelos de machine learning a gran escala?",
                answer: "Vertex AI",
                type: "multiple",
                options: [
                    "BigQuery ML",
                    "TensorFlow",
                    "Vertex AI",
                    "AI Platform"
                ],
                explanation: "Vertex AI es la plataforma de machine learning unificada de Google Cloud que permite entrenar y desplegar modelos con mayor eficiencia."
            },
            {
                question: "Una empresa desea analizar grandes volúmenes de datos en tiempo real. ¿Qué servicio de Google Cloud es más adecuado?",
                answer: "BigQuery con Dataflow",
                type: "multiple",
                options: [
                    "BigQuery con Dataflow",
                    "Cloud Pub/Sub",
                    "Cloud Storage",
                    "Looker"
                ],
                explanation: "BigQuery con Dataflow permite procesar y analizar datos en tiempo real utilizando pipelines escalables."
            },
            {
                question: "¿Qué servicio de Google Cloud proporciona análisis de datos en tiempo real basado en eventos?",
                answer: "Cloud Pub/Sub",
                type: "multiple",
                options: [
                    "Cloud Pub/Sub",
                    "BigQuery",
                    "Vertex AI",
                    "Cloud SQL"
                ],
                explanation: "Cloud Pub/Sub permite la transmisión y el procesamiento de datos en tiempo real mediante un modelo de mensajería distribuida."
            },
            {
                question: "¿Qué herramienta de Google Cloud permite realizar análisis exploratorio y visualización de datos sin necesidad de escribir consultas SQL complejas?",
                answer: "Looker",
                type: "multiple",
                options: [
                    "BigQuery",
                    "Looker",
                    "Google Data Studio",
                    "TensorFlow"
                ],
                explanation: "Looker permite analizar y visualizar datos a través de una interfaz intuitiva, facilitando la exploración sin necesidad de SQL avanzado."
            },
            {
                question: "¿Cuál de las siguientes opciones permite ejecutar modelos de machine learning directamente en BigQuery?",
                answer: "BigQuery ML",
                type: "multiple",
                options: [
                    "BigQuery ML",
                    "Vertex AI",
                    "Cloud ML Engine",
                    "TensorFlow Extended"
                ],
                explanation: "BigQuery ML permite entrenar y ejecutar modelos de machine learning directamente en BigQuery utilizando SQL."
            },
            {
                question: "¿Qué servicio permite la creación de modelos de machine learning con un enfoque de AutoML en Google Cloud?",
                answer: "Vertex AI AutoML",
                type: "multiple",
                options: [
                    "BigQuery ML",
                    "Vertex AI AutoML",
                    "Cloud TPU",
                    "Cloud Dataprep"
                ],
                explanation: "Vertex AI AutoML permite a los usuarios sin experiencia en machine learning entrenar modelos personalizados con facilidad."
            },
            {
                question: "Una empresa quiere analizar sentimientos en comentarios de clientes. ¿Qué servicio de Google Cloud es el más adecuado?",
                answer: "Cloud Natural Language API",
                type: "multiple",
                options: [
                    "Vertex AI",
                    "Cloud Natural Language API",
                    "BigQuery ML",
                    "Cloud Speech-to-Text"
                ],
                explanation: "Cloud Natural Language API permite analizar sentimientos, extraer entidades y clasificar texto de manera automatizada."
            },
            {
                question: "¿Qué servicio de Google Cloud permite el reconocimiento y clasificación de imágenes sin necesidad de entrenar modelos manualmente?",
                answer: "Vertex AI Vision AutoML",
                type: "multiple",
                options: [
                    "Cloud Vision API",
                    "Vertex AI Vision AutoML",
                    "TensorFlow",
                    "BigQuery ML"
                ],
                explanation: "Vertex AI Vision AutoML permite la clasificación y reconocimiento de imágenes mediante un enfoque de AutoML."
            },
            {
                question: "Una empresa necesita realizar un análisis de tendencias de datos en tiempo real con dashboards interactivos. ¿Qué combinación de servicios es la más adecuada?",
                answer: "BigQuery + Looker",
                type: "multiple",
                options: [
                    "BigQuery + Looker",
                    "Cloud Dataflow + Pub/Sub",
                    "Cloud Functions + Cloud SQL",
                    "Vertex AI + Cloud Storage"
                ],
                explanation: "BigQuery permite el análisis de datos a gran escala, mientras que Looker facilita la visualización y creación de dashboards interactivos."
            },
            {
                question: "¿Qué servicio de Google Cloud permite procesar grandes volúmenes de datos en streaming y batch?",
                answer: "Cloud Dataflow",
                type: "multiple",
                options: [
                    "Cloud Dataflow",
                    "Cloud Dataproc",
                    "Cloud Bigtable",
                    "Cloud Composer"
                ],
                explanation: "Cloud Dataflow es un servicio serverless para el procesamiento de datos en streaming y batch basado en Apache Beam."
            }
        ],
        "6": [ // Redes y Conectividad en Google Cloud
            {
                question: "Una empresa necesita conectar su infraestructura on-premises con Google Cloud de forma segura y con baja latencia. ¿Qué servicio de conectividad es el más adecuado?",
                answer: "Cloud Interconnect",
                type: "multiple",
                options: [
                    "Cloud VPN",
                    "Cloud Interconnect",
                    "Cloud CDN",
                    "Cloud NAT"
                ],
                explanation: "Cloud Interconnect proporciona conexiones dedicadas y de alta velocidad entre Google Cloud y la infraestructura on-premises."
            },
            {
                question: "Para optimizar costos y rendimiento en el tráfico entre regiones dentro de Google Cloud, ¿qué servicio se recomienda?",
                answer: "Cloud Network Tiers",
                type: "multiple",
                options: [
                    "Cloud Load Balancing",
                    "Cloud Network Tiers",
                    "Cloud Interconnect",
                    "Cloud VPN"
                ],
                explanation: "Cloud Network Tiers permite elegir entre opciones de red Premium y Standard para optimizar costos y rendimiento."
            },
            {
                question: "Una empresa necesita distribuir tráfico globalmente y balancearlo automáticamente según la proximidad del usuario. ¿Qué servicio de Google Cloud debería usar?",
                answer: "Cloud Load Balancing",
                type: "multiple",
                options: [
                    "Cloud Load Balancing",
                    "Cloud CDN",
                    "Cloud VPN",
                    "Cloud NAT"
                ],
                explanation: "Cloud Load Balancing permite distribuir tráfico globalmente y ajustarse automáticamente a la demanda."
            },
            {
                question: "¿Qué servicio de Google Cloud permite proteger aplicaciones contra ataques DDoS a nivel de red?",
                answer: "Cloud Armor",
                type: "multiple",
                options: [
                    "Cloud Armor",
                    "Cloud Firewall",
                    "Cloud CDN",
                    "Cloud VPN"
                ],
                explanation: "Cloud Armor ofrece protección contra ataques DDoS y permite definir reglas de seguridad a nivel de red."
            },
            {
                question: "Una empresa necesita que su red tenga direcciones IP públicas sin exponer sus recursos directamente a internet. ¿Qué servicio debería usar?",
                answer: "Cloud NAT",
                type: "multiple",
                options: [
                    "Cloud NAT",
                    "Cloud VPN",
                    "Cloud Interconnect",
                    "Cloud Armor"
                ],
                explanation: "Cloud NAT permite que las instancias sin IP públicas accedan a internet sin ser accesibles directamente desde fuera."
            },
            {
                question: "¿Qué servicio de Google Cloud se recomienda para establecer una conexión segura y encriptada entre una red on-premises y Google Cloud?",
                answer: "Cloud VPN",
                type: "multiple",
                options: [
                    "Cloud VPN",
                    "Cloud Interconnect",
                    "Cloud NAT",
                    "Cloud Load Balancing"
                ],
                explanation: "Cloud VPN permite establecer conexiones seguras y encriptadas entre redes on-premises y Google Cloud."
            },
            {
                question: "Una empresa quiere mejorar la latencia y reducir costos en la entrega de contenido estático a nivel global. ¿Qué servicio de Google Cloud es el más adecuado?",
                answer: "Cloud CDN",
                type: "multiple",
                options: [
                    "Cloud CDN",
                    "Cloud Load Balancing",
                    "Cloud Interconnect",
                    "Cloud NAT"
                ],
                explanation: "Cloud CDN permite almacenar en caché contenido estático en ubicaciones distribuidas globalmente para mejorar la latencia y reducir costos."
            },
            {
                question: "¿Cuál es la mejor opción para conectar múltiples VPCs en Google Cloud de forma eficiente y escalable?",
                answer: "VPC Peering",
                type: "multiple",
                options: [
                    "VPC Peering",
                    "Cloud VPN",
                    "Cloud Interconnect",
                    "Cloud Armor"
                ],
                explanation: "VPC Peering permite conectar redes VPC dentro de Google Cloud de manera eficiente sin necesidad de túneles o gateways."
            },
            {
                question: "Una empresa necesita definir reglas avanzadas de firewall a nivel de red para proteger sus cargas de trabajo en Google Cloud. ¿Qué servicio debería usar?",
                answer: "Google Cloud Firewall",
                type: "multiple",
                options: [
                    "Google Cloud Firewall",
                    "Cloud Armor",
                    "Cloud NAT",
                    "Cloud VPN"
                ],
                explanation: "Google Cloud Firewall permite definir reglas avanzadas de control de tráfico para proteger los recursos de red."
            },
            {
                question: "¿Qué servicio de Google Cloud permite interconectar redes híbridas con latencias ultra bajas y alta disponibilidad?",
                answer: "Dedicated Interconnect",
                type: "multiple",
                options: [
                    "Dedicated Interconnect",
                    "Cloud VPN",
                    "Partner Interconnect",
                    "Cloud NAT"
                ],
                explanation: "Dedicated Interconnect proporciona conexiones de baja latencia y alta disponibilidad entre Google Cloud y redes on-premises."
            }
        ],
        "7": [ // Gestión y Gobernanza en Google Cloud
            {
                question: "Una empresa necesita conectar su infraestructura on-premises con Google Cloud de forma segura y con baja latencia. ¿Qué servicio de conectividad es el más adecuado?",
                answer: "Cloud Interconnect",
                type: "multiple",
                options: [
                    "Cloud VPN",
                    "Cloud Interconnect",
                    "Cloud CDN",
                    "Cloud NAT"
                ],
                explanation: "Cloud Interconnect proporciona conexiones dedicadas y de alta velocidad entre Google Cloud y la infraestructura on-premises."
            },
            {
                question: "Para optimizar costos y rendimiento en el tráfico entre regiones dentro de Google Cloud, ¿qué servicio se recomienda?",
                answer: "Cloud Network Tiers",
                type: "multiple",
                options: [
                    "Cloud Load Balancing",
                    "Cloud Network Tiers",
                    "Cloud Interconnect",
                    "Cloud VPN"
                ],
                explanation: "Cloud Network Tiers permite elegir entre opciones de red Premium y Standard para optimizar costos y rendimiento."
            },
            {
                question: "Una empresa necesita distribuir tráfico globalmente y balancearlo automáticamente según la proximidad del usuario. ¿Qué servicio de Google Cloud debería usar?",
                answer: "Cloud Load Balancing",
                type: "multiple",
                options: [
                    "Cloud Load Balancing",
                    "Cloud CDN",
                    "Cloud VPN",
                    "Cloud NAT"
                ],
                explanation: "Cloud Load Balancing permite distribuir tráfico globalmente y ajustarse automáticamente a la demanda."
            },
            {
                question: "¿Qué servicio de Google Cloud permite proteger aplicaciones contra ataques DDoS a nivel de red?",
                answer: "Cloud Armor",
                type: "multiple",
                options: [
                    "Cloud Armor",
                    "Cloud Firewall",
                    "Cloud CDN",
                    "Cloud VPN"
                ],
                explanation: "Cloud Armor ofrece protección contra ataques DDoS y permite definir reglas de seguridad a nivel de red."
            },
            {
                question: "Una empresa necesita que su red tenga direcciones IP públicas sin exponer sus recursos directamente a internet. ¿Qué servicio debería usar?",
                answer: "Cloud NAT",
                type: "multiple",
                options: [
                    "Cloud NAT",
                    "Cloud VPN",
                    "Cloud Interconnect",
                    "Cloud Armor"
                ],
                explanation: "Cloud NAT permite que las instancias sin IP públicas accedan a internet sin ser accesibles directamente desde fuera."
            },
            {
                question: "¿Qué servicio de Google Cloud se recomienda para establecer una conexión segura y encriptada entre una red on-premises y Google Cloud?",
                answer: "Cloud VPN",
                type: "multiple",
                options: [
                    "Cloud VPN",
                    "Cloud Interconnect",
                    "Cloud NAT",
                    "Cloud Load Balancing"
                ],
                explanation: "Cloud VPN permite establecer conexiones seguras y encriptadas entre redes on-premises y Google Cloud."
            },
            {
                question: "Una empresa quiere mejorar la latencia y reducir costos en la entrega de contenido estático a nivel global. ¿Qué servicio de Google Cloud es el más adecuado?",
                answer: "Cloud CDN",
                type: "multiple",
                options: [
                    "Cloud CDN",
                    "Cloud Load Balancing",
                    "Cloud Interconnect",
                    "Cloud NAT"
                ],
                explanation: "Cloud CDN permite almacenar en caché contenido estático en ubicaciones distribuidas globalmente para mejorar la latencia y reducir costos."
            },
            {
                question: "¿Cuál es la mejor opción para conectar múltiples VPCs en Google Cloud de forma eficiente y escalable?",
                answer: "VPC Peering",
                type: "multiple",
                options: [
                    "VPC Peering",
                    "Cloud VPN",
                    "Cloud Interconnect",
                    "Cloud Armor"
                ],
                explanation: "VPC Peering permite conectar redes VPC dentro de Google Cloud de manera eficiente sin necesidad de túneles o gateways."
            },
            {
                question: "Una empresa necesita definir reglas avanzadas de firewall a nivel de red para proteger sus cargas de trabajo en Google Cloud. ¿Qué servicio debería usar?",
                answer: "Google Cloud Firewall",
                type: "multiple",
                options: [
                    "Google Cloud Firewall",
                    "Cloud Armor",
                    "Cloud NAT",
                    "Cloud VPN"
                ],
                explanation: "Google Cloud Firewall permite definir reglas avanzadas de control de tráfico para proteger los recursos de red."
            },
            {
                question: "¿Qué servicio de Google Cloud permite interconectar redes híbridas con latencias ultra bajas y alta disponibilidad?",
                answer: "Dedicated Interconnect",
                type: "multiple",
                options: [
                    "Dedicated Interconnect",
                    "Cloud VPN",
                    "Partner Interconnect",
                    "Cloud NAT"
                ],
                explanation: "Dedicated Interconnect proporciona conexiones de baja latencia y alta disponibilidad entre Google Cloud y redes on-premises."
            },
            {
                question: "¿Cuál es el servicio de Google Cloud que permite gestionar identidades y permisos de acceso de manera centralizada?",
                answer: "Cloud Identity & Access Management (IAM)",
                type: "multiple",
                options: [
                    "Cloud Identity & Access Management (IAM)",
                    "Cloud Security Command Center",
                    "Cloud Firewall",
                    "Cloud Armor"
                ],
                explanation: "IAM permite gestionar identidades y permisos de acceso a los recursos en Google Cloud."
            }
        ]
    };


    //Obtener el tema desde la URL
    const urlParams = new URLSearchParams(window.location.search);
    const lessonIndex = urlParams.get("lesson");
    const questions = questionsByTopic[lessonIndex] || [];

    if (questions.length === 0) {
        alert("No hay preguntas disponibles para este tema.");
        window.location.href = "../../index.html";
    }

    function shuffleArray(array) {
        return array.sort(() => Math.random() - 0.5);
    }

    const shuffledQuestions = shuffleArray(questions);

    let currentIndex = 0;
    let score = 0;
    const totalQuestions = shuffledQuestions.length;
    let playerName = "";
    let timer;
    let timeLeft = 60; // Timer: 60 segundos por pregunta

    const questionElement = document.getElementById("question-text");
    const optionsContainer = document.getElementById("options-container");
    const answerInput = document.getElementById("answer-input");
    const nextButton = document.getElementById("next-btn");
    const timerElement = document.getElementById("timer");
    const scoreElement = document.getElementById("score");
    const resultMessage = document.getElementById("result-message");
    const questionCounter = document.getElementById("question-counter");
    const startScreen = document.getElementById("start-screen");
    const gameScreen = document.getElementById("game-screen");
    const playerNameInput = document.getElementById("player-name");
    const startGameButton = document.getElementById("start-game-btn");
    const backButton = document.getElementById("back-btn");
    const quitButton = document.getElementById("quit-btn");

    // Función para cargar el ranking
    function loadRanking() {
        const rankingElement = document.getElementById("ranking");
        const rankings = JSON.parse(localStorage.getItem("rankings")) || [];
        rankingElement.innerHTML = "<h2>Ranking de Mejores Puntajes</h2>";
        rankings.slice(0, 5).forEach((entry, index) => {
            const rankingItem = document.createElement("p");
            rankingItem.textContent = `${index + 1}. ${entry.name} - ${entry.score} puntos`;
            rankingElement.appendChild(rankingItem);
        });
    }

    // Función para iniciar el juego
    startGameButton.addEventListener("click", () => {
        playerName = playerNameInput.value.trim();
        if (playerName) {
            startScreen.style.display = "none";
            gameScreen.style.display = "block";
            loadQuestion();
        } else {
            alert("Por favor, ingresa tu nombre.");
        }
    });

    // Volver a la pantalla de inicio
    backButton.addEventListener("click", () => {
        resetGame(); // Reiniciar el estado del juego
        startScreen.style.display = "block";
        gameScreen.style.display = "none";
    });

    // Salir del juego
    quitButton.addEventListener("click", () => {
        if (confirm("¿Estás seguro de que quieres salir del juego?")) {
            resetGame(); // Reiniciar el estado del juego
            startScreen.style.display = "block";
            gameScreen.style.display = "none";
        }
    });

    // Función para reiniciar el juego
    function resetGame() {
        currentIndex = 0;
        score = 0;
        resultMessage.textContent = "";
        scoreElement.style.display = "none";
        nextButton.style.display = "none";
        timeLeft = 60; // Reiniciar el temporizador
        clearInterval(timer);
        timerElement.textContent = `Tiempo: ${timeLeft}s`;
    }

    // Función para cargar la pregunta actual
    function loadQuestion() {
        const currentQuestion = shuffledQuestions[currentIndex];
        questionElement.textContent = currentQuestion.question;
        optionsContainer.innerHTML = "";
        resultMessage.textContent = "";
        questionCounter.textContent = `Pregunta ${currentIndex + 1} de ${shuffledQuestions.length}`;

        timer = setInterval(() => {
            timeLeft--;
            timerElement.textContent = `Tiempo: ${timeLeft}s`;
            if (timeLeft === 0) {
                clearInterval(timer);
                nextButton.style.display = "block";
                resultMessage.textContent = `Tiempo agotado. La respuesta correcta era: ${currentQuestion.answer}`;
                resultMessage.style.color = "red";
            }
        }, 1000);

        currentQuestion.options.forEach(option => {
            const button = document.createElement("button");
            button.textContent = option;
            button.classList.add("option-btn");
            button.addEventListener("click", () => checkAnswer(option));
            optionsContainer.appendChild(button);
        });

        nextButton.style.display = "none";
    } // Ocultar el botón "Siguiente" hasta que se responda

    // Función para comprobar si la respuesta es correcta
    function checkAnswer(answer) {
        clearInterval(timer); // Detiene el temporizador cuando se responde

        const currentQuestion = shuffledQuestions[currentIndex];
        const userAnswer = currentQuestion.type === "text"
            ? answerInput.value.trim().toLowerCase().replace(/\s+/g, '')
            : answer.toLowerCase().replace(/\s+/g, '');

        if (userAnswer === currentQuestion.answer.toLowerCase().replace(/\s+/g, '')) {
            score += 10;
            resultMessage.textContent = "✅ ¡Respuesta correcta!";
            resultMessage.style.color = "green";
        } else {
            resultMessage.innerHTML = `❌ Incorrecto. La respuesta correcta es: <b>${currentQuestion.answer}</b>.<br><i>${currentQuestion.explanation}</i>`;
            resultMessage.style.color = "red";
        }

        nextButton.style.display = "block"; // Mostrar el botón "Siguiente"
    }


    // Función para manejar la acción de presionar Enter en el campo de respuesta
    answerInput.addEventListener("keydown", (event) => {
        if (event.key === "Enter") {
            checkAnswer(answerInput.value);
        }
    });

    // Función para avanzar a la siguiente pregunta
    nextButton.addEventListener("click", () => {
        currentIndex++;
        timeLeft = 60; // Reiniciar el temporizador para la siguiente pregunta
        clearInterval(timer);
        if (currentIndex < totalQuestions) {
            loadQuestion();
        } else {
            endGame();
        }
    });

    // Función para terminar el juego
    function endGame() {
        scoreElement.textContent = `¡Juego terminado! Tu puntaje final es: ${score}`;
        scoreElement.style.display = "block";
        nextButton.style.display = "none";
        saveScore();
    }

    // Guardar el puntaje en el ranking local
    function saveScore() {
        let rankings = JSON.parse(localStorage.getItem("rankings")) || [];
        rankings.push({ name: playerName, score, date: new Date().toLocaleString() });
        rankings.sort((a, b) => b.score - a.score);
        rankings = rankings.slice(0, 10); // Mantener solo el top 10
        localStorage.setItem("rankings", JSON.stringify(rankings));
        loadRanking(); // Actualizar el ranking después de guardar el puntaje
    }

    // Cargar el ranking en la pantalla de inicio
    loadRanking();

    // Iniciar la pantalla de bienvenida
    startScreen.style.display = "block";
    gameScreen.style.display = "none";
});
