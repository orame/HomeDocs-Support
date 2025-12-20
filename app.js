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
        "Depuis l’écran Documents, utilisez le bouton d’ajout pour importer un PDF/image ou scanner avec l’appareil photo.",
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
      "privacy.subtitle": "Transparence sur les données utilisées par HomeDocs.",
      "privacy.p1.title": "Vos documents restent à vous",
      "privacy.p1.body":
        "HomeDocs est conçu pour traiter vos documents localement autant que possible. Si vous activez iCloud, la synchronisation passe par CloudKit d’Apple.",
      "privacy.p2.title": "Support",
      "privacy.p2.body":
        "Lorsque vous contactez le support par email, vous nous envoyez les informations que vous choisissez de partager. Évitez d’envoyer des documents sensibles.",
      "privacy.p3.title": "Améliorations",
      "privacy.p3.body":
        "Nous pouvons utiliser des retours anonymisés (ex : description de bug) pour améliorer l’app. Si vous voyez un comportement inattendu, contactez-nous.",
      "privacy.disclaimer":
        "Remarque : adaptez ce texte à votre politique de confidentialité finale (selon vos features exactes).",

      "contact.title": "Contact",
      "contact.subtitle": "Une question ? Un souci de synchronisation ? Écrivez-nous.",
      "contact.card.title": "Support email",
      "contact.card.cta": "support@homedocs.app",
      "contact.card.hint": "Astuce : indiquez votre version iOS + une capture d’écran.",
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
        "From the Documents screen, use the add button to import a PDF/image or scan with the camera.",
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
      "privacy.subtitle": "Transparency about the data HomeDocs uses.",
      "privacy.p1.title": "Your documents are yours",
      "privacy.p1.body":
        "HomeDocs is designed to process your documents locally as much as possible. If you enable iCloud, syncing goes through Apple’s CloudKit.",
      "privacy.p2.title": "Support",
      "privacy.p2.body":
        "When you contact support by email, you send only what you choose to share. Avoid sending sensitive documents.",
      "privacy.p3.title": "Improvements",
      "privacy.p3.body":
        "We may use anonymized feedback (e.g., bug descriptions) to improve the app. If you notice unexpected behavior, contact us.",
      "privacy.disclaimer":
        "Note: adapt this section to your final privacy policy (based on your exact features).",

      "contact.title": "Contact",
      "contact.subtitle": "Question? Sync issue? Write to us.",
      "contact.card.title": "Support email",
      "contact.card.cta": "support@homedocs.app",
      "contact.card.hint": "Tip: include your iOS version + a screenshot.",
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
