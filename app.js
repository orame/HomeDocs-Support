(() => {
  const STORAGE_KEY = "homedocs.support.lang";
  const SUPPORTED = ["fr", "en"];

  const STRINGS = {
    fr: {
      "nav.features": "Fonctionnalités",
      "nav.faq": "FAQ",
      "nav.privacy": "Confidentialité",
      "nav.contact": "Contact",
      "cta.getSupport": "Obtenir de l’aide",

      "hero.pill": "Support officiel",
      "hero.title": "Vos documents, enfin simples à retrouver.",
      "hero.subtitle":
        "HomeDocs vous aide à numériser, organiser et rechercher vos documents. Ici vous trouverez la FAQ, les infos de confidentialité et le contact support.",
      "hero.primary": "Voir la FAQ",
      "hero.secondary": "Confidentialité",
      "hero.meta.k1": "Réponse rapide",
      "hero.meta.v1": "FAQ + email",
      "hero.meta.k2": "Données",
      "hero.meta.v2": "Votre contenu reste le vôtre",
      "hero.meta.k3": "iCloud",
      "hero.meta.v3": "Synchronisation via Apple",

      "mock.title": "Recherche",
      "mock.search": "Contrat location 2025",
      "mock.tag1": "Important",
      "mock.tag2": "Maison",
      "mock.tag3": "Fiscalité",
      "mock.note": "Astuce : utilisez des tags pour retrouver plus vite vos documents.",

      "features.title": "Pensé pour le quotidien",
      "features.subtitle": "Numérisez, classez et retrouvez en quelques secondes.",
      "features.f1.title": "Import & Scan",
      "features.f1.body":
        "Importez vos PDFs/images ou scannez vos documents, puis laissez HomeDocs les organiser.",
      "features.f2.title": "Recherche intelligente",
      "features.f2.body":
        "Retrouvez un document par titre ou par tag, et utilisez la recherche plein texte pour chercher directement dans son contenu.",
      "features.f3.title": "Synchronisation iCloud",
      "features.f3.body":
        "Vos documents se synchronisent via iCloud (CloudKit), de façon cohérente entre vos appareils.",

      "faq.title": "FAQ",
      "faq.subtitle": "Les réponses aux questions les plus courantes.",
      "faq.q1.q": "Comment importer un document ?",
      "faq.q1.a":
        "Depuis l’écran Documents, ouvrez le menu “…” puis choisissez : Importer depuis Fichiers, Importer depuis Photos, ou Scanner un document.",
      "faq.q2.q": "Pourquoi la synchronisation prend du temps ?",
      "faq.q2.a":
        "iCloud peut mettre un peu de temps selon le réseau, la taille des documents et la charge Apple. Laissez l’app ouverte quelques minutes et réessayez sur Wi‑Fi.",
      "faq.q3.q": "Où sont stockées mes données ?",
      "faq.q3.a":
        "Les documents et métadonnées sont stockés sur votre appareil et, si activé, synchronisés via iCloud (CloudKit) associé à votre identifiant Apple.",
      "faq.q4.q": "Comment contacter le support ?",
      "faq.q4.a":
        "Envoyez un email avec une courte description du problème et, si possible, une capture d’écran. Pensez à préciser le modèle d’appareil et la version iOS.",

      "privacy.title": "Confidentialité",
      "privacy.intro.p1":
        "HomeDocs est conçu pour que vos documents restent privés. Les fichiers (PDF/images) et le texte OCR sont chiffrés côté app avec AES-GCM 256, et les clés sont protégées via le Trousseau iOS (Keychain).",
      "privacy.intro.p2":
        "La synchronisation iCloud est optionnelle et passe par CloudKit. Aucun document n’est utilisé à des fins publicitaires, et HomeDocs ne vend pas vos données.",
      "privacy.intro.p3":
        "Les exports .hdocs sont toujours chiffrés (avec ou sans mot de passe) afin d’éviter tout export en clair.",
      "privacy.p1.title": "Vos documents restent à vous",
      "privacy.p1.body":
        "Vos fichiers et le texte OCR sont chiffrés sur l’appareil (AES-GCM 256). Les clés sont protégées par le Trousseau iOS.",
      "privacy.p2.title": "Synchronisation (optionnelle)",
      "privacy.p2.body":
        "Si vous activez iCloud, HomeDocs synchronise via CloudKit pour retrouver vos documents sur vos appareils.",
      "privacy.p3.title": "Partage sécurisé (.hdocs)",
      "privacy.p3.body":
        "Les exports .hdocs sont toujours chiffrés. Vous pouvez ajouter un mot de passe, mais même sans, le paquet n’est jamais exporté en clair.",
      "privacy.policy.summary": "Politique de confidentialité — HomeDocs",
      "privacy.policy.updated": "Dernière mise à jour : 20.12.2025",
      "privacy.policy.supportLabel": "Contact support :",
      "privacy.policy.preamble":
        "HomeDocs est une application de gestion de documents personnels (import, organisation, tags, recherche). La confidentialité et le chiffrement sont au cœur du produit.",
      "privacy.policy.s1.title": "1) Données traitées",
      "privacy.policy.s1.body":
        "HomeDocs traite uniquement les données nécessaires aux fonctionnalités de l’app :",
      "privacy.policy.s1.li1": "Documents importés (PDF, images, etc.)",
      "privacy.policy.s1.li2": "Métadonnées associées (nom, dates, tags, organisation)",
      "privacy.policy.s1.li3": "Texte extrait par OCR pour permettre la recherche",
      "privacy.policy.s2.title": "2) Chiffrement et sécurité",
      "privacy.policy.s2.body1": "HomeDocs chiffre vos données au repos (stockage) :",
      "privacy.policy.s2.li1":
        "Fichiers documents (PDF / images) : chiffrés côté app avec AES-GCM 256.",
      "privacy.policy.s2.li2":
        "Texte OCR : chiffré côté app avec AES-GCM 256 via un mécanisme d’“envelope encryption” (clé de chiffrement des données distincte, protégée par une clé maîtresse).",
      "privacy.policy.s2.li3":
        "Gestion des clés : les clés de chiffrement sont stockées dans le Trousseau iOS (Keychain) et protégées par les mécanismes de sécurité d’iOS. Selon la configuration de l’appareil, elles peuvent être synchronisées via iCloud Keychain.",
      "privacy.policy.s2.note":
        "Remarque : HomeDocs ne peut déchiffrer vos contenus que sur des appareils disposant des clés nécessaires.",
      "privacy.policy.s3.title": "3) Synchronisation iCloud (optionnelle)",
      "privacy.policy.s3.body":
        "Si vous activez la synchronisation, HomeDocs utilise CloudKit (iCloud) pour synchroniser les données entre vos appareils. La sécurité du transport et du stockage côté iCloud s’appuie sur les protections de sécurité d’Apple.",
      "privacy.policy.s4.title": "4) Partage et export (.hdocs)",
      "privacy.policy.s4.body1":
        "HomeDocs permet d’exporter un paquet .hdocs contenant vos documents et métadonnées.",
      "privacy.policy.s4.li1":
        "Le paquet .hdocs est toujours chiffré : HomeDocs crée d’abord une archive interne, puis chiffre l’ensemble avec AES-GCM 256.",
      "privacy.policy.s4.li2":
        "Avec mot de passe : une clé de chiffrement est dérivée à partir de votre mot de passe et d’un sel aléatoire.",
      "privacy.policy.s4.li3":
        "Sans mot de passe : le paquet reste chiffré via un mécanisme d’auto-chiffrement interne, afin de ne jamais produire d’export en clair.",
      "privacy.policy.s4.body2":
        "Vous choisissez ensuite librement le canal de transfert (AirDrop, Mail, Messages, etc.). Le destinataire peut importer le paquet dans HomeDocs.",
      "privacy.policy.s5.title": "5) Collecte, publicité, revente",
      "privacy.policy.s5.li1": "HomeDocs ne vend pas vos données.",
      "privacy.policy.s5.li2": "HomeDocs n’utilise pas vos documents à des fins publicitaires.",
      "privacy.policy.s6.title": "6) Support et diagnostics",
      "privacy.policy.s6.body1":
        "Si vous contactez le support, vous pouvez partager des informations (ex. description du problème, modèle d’appareil, version iOS). Merci d’éviter d’envoyer des documents sensibles en pièce jointe sauf nécessité.",
      "privacy.policy.s6.body2":
        "Selon vos réglages iOS et votre consentement, Apple peut également fournir des données de diagnostic (ex. rapports de crash) pour améliorer la stabilité.",
      "privacy.policy.s7.title": "7) Vos choix",
      "privacy.policy.s7.body": "Vous pouvez :",
      "privacy.policy.s7.li1": "supprimer vos documents dans l’app,",
      "privacy.policy.s7.li2": "désactiver iCloud à tout moment dans les réglages iOS,",
      "privacy.policy.s7.li3": "désinstaller l’app (suppression des données locales).",

      "contact.title": "Contact",
      "contact.subtitle": "Une question ? Un souci de synchronisation ? Écrivez-nous.",
      "contact.card.title": "Support email",
      "contact.card.cta": "support@homedocs.app",
      "contact.extra.title": "Informations utiles",
      "contact.extra.li1": "Modèle d’iPhone/iPad",
      "contact.extra.li2": "Version iOS/iPadOS",
      "contact.extra.li3": "Étapes pour reproduire",
      "contact.extra.li4": "Capture d’écran (si possible)",

      "footer.note": "© {{year}} HomeDocs. Tous droits réservés.",
      "footer.privacy": "Confidentialité",
      "footer.contact": "Contact",
    },
    en: {
      "nav.features": "Features",
      "nav.faq": "FAQ",
      "nav.privacy": "Privacy",
      "nav.contact": "Contact",
      "cta.getSupport": "Get support",

      "hero.pill": "Official support",
      "hero.title": "Your documents, finally easy to find.",
      "hero.subtitle":
        "HomeDocs helps you scan, organize, and search your documents. Here you’ll find the FAQ, privacy info, and support contact.",
      "hero.primary": "Read the FAQ",
      "hero.secondary": "Privacy",
      "hero.meta.k1": "Fast help",
      "hero.meta.v1": "FAQ + email",
      "hero.meta.k2": "Data",
      "hero.meta.v2": "Your content stays yours",
      "hero.meta.k3": "iCloud",
      "hero.meta.v3": "Sync via Apple",

      "mock.title": "Search",
      "mock.search": "Rental contract 2025",
      "mock.tag1": "Important",
      "mock.tag2": "Home",
      "mock.tag3": "Taxes",
      "mock.note": "Tip: use tags to find documents faster.",

      "features.title": "Made for everyday life",
      "features.subtitle": "Scan, organize, and find in seconds.",
      "features.f1.title": "Import & Scan",
      "features.f1.body":
        "Import PDFs/images or scan with your camera, then let HomeDocs keep things organized.",
      "features.f2.title": "Smart search",
      "features.f2.body":
        "Find a document by title or tag, and use full-text search to search directly within its content.",
      "features.f3.title": "iCloud Sync",
      "features.f3.body":
        "Your documents sync through iCloud (CloudKit), consistently across your devices.",

      "faq.title": "FAQ",
      "faq.subtitle": "Answers to the most common questions.",
      "faq.q1.q": "How do I import a document?",
      "faq.q1.a":
        "From the Documents screen, open the “…” menu, then choose: Import from Files, Import from Photos, or Scan a document.",
      "faq.q2.q": "Why can syncing take time?",
      "faq.q2.a":
        "iCloud can take a little time depending on network, document size, and Apple’s load. Keep the app open for a few minutes and try again on Wi‑Fi.",
      "faq.q3.q": "Where is my data stored?",
      "faq.q3.a":
        "Documents and metadata are stored on your device and, if enabled, synced via iCloud (CloudKit) tied to your Apple ID.",
      "faq.q4.q": "How do I contact support?",
      "faq.q4.a":
        "Send an email with a short description of the issue and, if possible, a screenshot. Include your device model and iOS version.",

      "privacy.title": "Privacy",
      "privacy.intro.p1":
        "HomeDocs is designed to keep your documents private. Files (PDF/images) and OCR text are encrypted in-app using AES‑GCM 256, and keys are protected via the iOS Keychain.",
      "privacy.intro.p2":
        "iCloud sync is optional and uses CloudKit. No document is used for advertising purposes, and HomeDocs does not sell your data.",
      "privacy.intro.p3":
        "Exports (.hdocs) are always encrypted (with or without a password) to avoid any clear-text export.",
      "privacy.p1.title": "Your documents are yours",
      "privacy.p1.body":
        "Your files and OCR text are encrypted on-device (AES‑GCM 256). Keys are protected by the iOS Keychain.",
      "privacy.p2.title": "Sync (optional)",
      "privacy.p2.body":
        "If you enable iCloud, HomeDocs syncs via CloudKit so you can access your documents across your devices.",
      "privacy.p3.title": "Secure sharing (.hdocs)",
      "privacy.p3.body":
        "Exports (.hdocs) are always encrypted. You can add a password, but even without one, the package is never exported in clear text.",
      "privacy.policy.summary": "Privacy Policy — HomeDocs",
      "privacy.policy.updated": "Last updated: 20.12.2025",
      "privacy.policy.supportLabel": "Support contact:",
      "privacy.policy.preamble":
        "HomeDocs is a personal document management app (import, organization, tags, search). Privacy and encryption are at the core of the product.",
      "privacy.policy.s1.title": "1) Data processed",
      "privacy.policy.s1.body":
        "HomeDocs processes only the data necessary for the app’s features:",
      "privacy.policy.s1.li1": "Imported documents (PDFs, images, etc.)",
      "privacy.policy.s1.li2": "Associated metadata (name, dates, tags, organization)",
      "privacy.policy.s1.li3": "Text extracted via OCR to enable search",
      "privacy.policy.s2.title": "2) Encryption and security",
      "privacy.policy.s2.body1": "HomeDocs encrypts your data at rest (storage):",
      "privacy.policy.s2.li1":
        "Document files (PDF / images): encrypted in-app using AES‑GCM 256.",
      "privacy.policy.s2.li2":
        "OCR text: encrypted in-app using AES‑GCM 256 via an “envelope encryption” mechanism (a distinct data-encryption key protected by a master key).",
      "privacy.policy.s2.li3":
        "Key management: encryption keys are stored in the iOS Keychain and protected by iOS security mechanisms. Depending on device configuration, they may be synced via iCloud Keychain.",
      "privacy.policy.s2.note":
        "Note: HomeDocs can decrypt your content only on devices that have the required keys.",
      "privacy.policy.s3.title": "3) iCloud Sync (optional)",
      "privacy.policy.s3.body":
        "If you enable sync, HomeDocs uses CloudKit (iCloud) to synchronize data across your devices. Transport and storage security on iCloud rely on Apple’s security protections.",
      "privacy.policy.s4.title": "4) Sharing and export (.hdocs)",
      "privacy.policy.s4.body1":
        "HomeDocs lets you export a .hdocs package containing your documents and metadata.",
      "privacy.policy.s4.li1":
        "The .hdocs package is always encrypted: HomeDocs first creates an internal archive, then encrypts the whole bundle using AES‑GCM 256.",
      "privacy.policy.s4.li2":
        "With a password: an encryption key is derived from your password and a random salt.",
      "privacy.policy.s4.li3":
        "Without a password: the package remains encrypted via an internal self-encryption mechanism, so no clear-text export is ever produced.",
      "privacy.policy.s4.body2":
        "You then choose the transfer channel freely (AirDrop, Mail, Messages, etc.). The recipient can import the package into HomeDocs.",
      "privacy.policy.s5.title": "5) Collection, advertising, resale",
      "privacy.policy.s5.li1": "HomeDocs does not sell your data.",
      "privacy.policy.s5.li2": "HomeDocs does not use your documents for advertising purposes.",
      "privacy.policy.s6.title": "6) Support and diagnostics",
      "privacy.policy.s6.body1":
        "If you contact support, you may share information (e.g., issue description, device model, iOS version). Please avoid attaching sensitive documents unless necessary.",
      "privacy.policy.s6.body2":
        "Depending on your iOS settings and consent, Apple may also provide diagnostic data (e.g., crash reports) to improve stability.",
      "privacy.policy.s7.title": "7) Your choices",
      "privacy.policy.s7.body": "You can:",
      "privacy.policy.s7.li1": "delete your documents in the app,",
      "privacy.policy.s7.li2": "disable iCloud at any time in iOS settings,",
      "privacy.policy.s7.li3": "uninstall the app (removes local data).",

      "contact.title": "Contact",
      "contact.subtitle": "Question? Sync issue? Write to us.",
      "contact.card.title": "Support email",
      "contact.card.cta": "support@homedocs.app",
      "contact.extra.title": "Helpful info to include",
      "contact.extra.li1": "iPhone/iPad model",
      "contact.extra.li2": "iOS/iPadOS version",
      "contact.extra.li3": "Steps to reproduce",
      "contact.extra.li4": "Screenshot (if possible)",

      "footer.note": "© {{year}} HomeDocs. All rights reserved.",
      "footer.privacy": "Privacy",
      "footer.contact": "Contact",
    },
  };

  function normalizeLang(value) {
    const v = String(value || "").toLowerCase();
    if (SUPPORTED.includes(v)) return v;
    return "fr";
  }

  function setPressed(lang) {
    document.querySelectorAll("[data-lang]").forEach((btn) => {
      btn.setAttribute("aria-pressed", btn.getAttribute("data-lang") === lang ? "true" : "false");
    });
  }

  function interpolate(text, vars) {
    return String(text).replace(/\{\{(\w+)\}\}/g, (_, k) => (vars && k in vars ? String(vars[k]) : ""));
  }

  function applyStrings(lang) {
    const dict = STRINGS[lang] || STRINGS.fr;
    const year = new Date().getFullYear();

    document.documentElement.lang = lang;
    setPressed(lang);

    document.querySelectorAll("[data-i18n]").forEach((el) => {
      const key = el.getAttribute("data-i18n");
      const value = dict[key];
      if (!value) return;
      el.textContent = interpolate(value, { year });
    });

    // Also adjust title + meta description for nicer sharing/indexing.
    document.title = lang === "en" ? "HomeDocs — Support" : "HomeDocs — Support";
    const metaDesc = document.querySelector('meta[name="description"]');
    if (metaDesc) {
      metaDesc.setAttribute(
        "content",
        lang === "en"
          ? "HomeDocs — scan, organize, and find your documents. Support, FAQ, privacy and contact."
          : "HomeDocs — numérisez, organisez et retrouvez vos documents. Support, FAQ, confidentialité et contact."
      );
    }
  }

  function setLang(lang) {
    const normalized = normalizeLang(lang);
    localStorage.setItem(STORAGE_KEY, normalized);
    applyStrings(normalized);
  }

  const fromStorage = normalizeLang(localStorage.getItem(STORAGE_KEY));
  const fromBrowser = normalizeLang((navigator.language || "fr").slice(0, 2));
  setLang(localStorage.getItem(STORAGE_KEY) ? fromStorage : fromBrowser);

  document.querySelectorAll("[data-lang]").forEach((btn) => {
    btn.addEventListener("click", () => setLang(btn.getAttribute("data-lang")));
  });
})();
