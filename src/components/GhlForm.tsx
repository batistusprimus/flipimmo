"use client"
import Script from 'next/script'

export default function GhlForm() {
  return (
    <div>
      <iframe
        src="/widget/survey/jU2pMLHhxzoM1H5n0OH9"
        style={{ border: 'none', width: '100%' }}
        scrolling="no"
        id="jU2pMLHhxzoM1H5n0OH9"
        title="survey"
      />
      <Script src="https://link.msgsndr.com/js/form_embed.js" strategy="afterInteractive" />
    </div>
  )
}


