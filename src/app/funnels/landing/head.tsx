export default function Head() {
  return (
    <>
      <link rel="dns-prefetch" href="https://widget.prod.getleadforms.com" />
      <link rel="preconnect" href="https://widget.prod.getleadforms.com" crossOrigin="anonymous" />
      <link rel="dns-prefetch" href="https://api.useleadbot.com" />
      <link rel="preconnect" href="https://api.useleadbot.com" crossOrigin="anonymous" />
      <link rel="preload" as="script" href="https://widget.prod.getleadforms.com/" crossOrigin="anonymous" fetchPriority="high" />
      {/* LeadForms Pixel (head) */}
      <script async type="text/javascript" src="https://api.useleadbot.com/lead-bots/get-pixel-script.js"></script>
      <script
        // Définit le token global pour LeadForms
        dangerouslySetInnerHTML={{
          __html: `window.form_token = "GLFT-CS0KX7L8X717S68QV365GCMO7II";`,
        }}
      />
    </>
  );
}

