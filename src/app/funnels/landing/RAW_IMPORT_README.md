## Historique de l'import du raw code (`formConfig.json`)

Contexte:
- Nous avons utilisé un import du fichier `formConfig.json` et injecté un bloc `window.leadFormOfflineSettings` dans `page.tsx` pour un mode "offline".
- Selon le support LeadCapture, ce "raw code/offline" peut empêcher la collecte automatique des leads via le pixel.
- Décision: conserver `formConfig.json` dans le repo (pour référence/backup), mais ne plus l'importer ni l'injecter sur la page.

Anciennes lignes (désactivées):

```tsx
// import formConfig from './formConfig.json'
// <Script id="leadcapture-offline" strategy="beforeInteractive">{`window.leadFormOfflineSettings = ${JSON.stringify(formConfig)};`}</Script>
// <script id="leadFormOfflineSettings" type="application/json" dangerouslySetInnerHTML={{ __html: JSON.stringify(formConfig) }} />
```

Implémentation actuelle (recommandée par LeadCapture):

```tsx
<Script id="leadcapture-pixel" src="https://api.useleadbot.com/lead-bots/get-pixel-script.js" strategy="afterInteractive" async />
<Script id="leadcapture-token" strategy="beforeInteractive">{`window.form_token = "GLFT-CS0KX7L8X717S68QV365GCMO7II";`}</Script>
<div id="leadforms-embd-form"></div>
```

Note:
- Si vous devez réactiver un fallback "offline", réintroduisez l'import et l'injection ci‑dessus, mais privilégiez toujours la configuration via l’interface LeadCapture et l’allowlist d’URL.


