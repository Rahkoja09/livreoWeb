'use client';

import { useEffect } from 'react';

// ⚠️ REMPLACE CETTE URL PAR LE VRAI LIEN MEDIAFIRE DE TON APK
const APK_DOWNLOAD_URL =
  'https://www.dropbox.com/scl/fi/y7uetkowdmgne08edkdve/livreo.apk?rlkey=9hn48fuf09iaxgtv1tp7j6v19&st=bestykx5&dl=1';

// ⚠️ REMPLACE 'VOTRE_PIXEL_ID_META' PAR TON VRAI ID META PIXEL
const META_PIXEL_ID = '2222341575292345';



function DownloadButton({ large = false }: { large?: boolean }) {
  return (
    <a
      href={APK_DOWNLOAD_URL}
      download
      onClick={() => {
        if (typeof window !== 'undefined' && (window as any).fbq)
          (window as any).fbq('track', 'Lead', { content_name: 'app_download_click' });
      }}
      className="inline-flex items-center justify-center gap-2 font-bold transition-colors w-full sm:w-auto"
      style={{
        background: 'var(--mb-ink)',
        color: '#fff',
        height: large ? '56px' : '48px',
        paddingLeft: large ? '32px' : '24px',
        paddingRight: large ? '32px' : '24px',
        borderRadius: '0',
        fontSize: large ? '15px' : '13px',
        letterSpacing: '0.02em',
      }}
      aria-label="Télécharger l'application Livreo pour Android"
      onMouseEnter={(e) => (e.currentTarget.style.background = '#0f1d35')}
      onMouseLeave={(e) => (e.currentTarget.style.background = 'var(--mb-ink)')}
    >
      <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
        <path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4" />
        <polyline points="7 10 12 15 17 10" />
        <line x1="12" y1="15" x2="12" y2="3" />
      </svg>
      Télécharger l&apos;application
    </a>
  );
}

export default function Home() {
  useEffect(() => {
    /* eslint-disable prefer-spread, prefer-rest-params, @typescript-eslint/no-unused-expressions */
    (function (f: any, b: any, e: any, v: any) {
      if (f.fbq) return;
      const n: any = (f.fbq = function () {
        n.callMethod ? n.callMethod.apply(n, arguments) : n.queue.push(arguments);
      });
      if (!f._fbq) f._fbq = n;
      n.push = n;
      n.loaded = !0;
      n.version = '2.0';
      n.queue = [];
      const t: any = b.createElement(e);
      t.async = !0;
      t.src = v;
      const s: any = b.getElementsByTagName(e)[0];
      s.parentNode.insertBefore(t, s);
    })(window, document, 'script', 'https://connect.facebook.net/en_US/fbevents.js');
    /* eslint-enable prefer-spread, prefer-rest-params, @typescript-eslint/no-unused-expressions */
    (window as any).fbq('init', META_PIXEL_ID);
    (window as any).fbq('track', 'PageView');

    const onKey = (e: KeyboardEvent) => {
      if (e.key === 'g' || e.key === 'G') document.body.classList.toggle('grid-on');
    };
    window.addEventListener('keydown', onKey);

    const alignOptical = () => {
      const els = document.querySelectorAll<HTMLElement>('.mb-optical');
      let ctx: CanvasRenderingContext2D | null = null;
      els.forEach((el) => {
        el.style.marginLeft = '0px';
        const cs = getComputedStyle(el);
        const ch = (el.textContent || '').trim()[0];
        if (!ch) return;
        if (!ctx) { const cvs = document.createElement('canvas'); ctx = cvs.getContext('2d'); }
        if (!ctx) return;
        const testCh = cs.textTransform === 'uppercase' ? ch.toUpperCase() : ch;
        ctx.font = `${cs.fontStyle} ${cs.fontWeight} ${cs.fontSize} ${cs.fontFamily}`;
        ctx.textAlign = 'left';
        const abl = ctx.measureText(testCh).actualBoundingBoxLeft;
        if (isFinite(abl)) el.style.marginLeft = `${abl.toFixed(2)}px`;
      });
    };
    const run = () => alignOptical();
    if ((document as any).fonts?.ready) (document as any).fonts.ready.then(run);
    else setTimeout(run, 400);
    window.addEventListener('resize', run);
    return () => { window.removeEventListener('keydown', onKey); window.removeEventListener('resize', run); };
  }, []);

  return (
    <main className="mb-grid" style={{ paddingTop: 'calc(var(--bl)*5)', paddingBottom: 'calc(var(--bl)*12)' }}>
      <div className="mb-guides" aria-hidden="true">
        {Array.from({ length: 12 }).map((_, i) => <span key={i} />)}
      </div>

      {/* ════════════════════ MASTHEAD ════════════════════ */}
      <header className="mb-band" style={{ paddingBottom: 'calc(var(--bl)*4)' }}>
        <div className="col-span-7 md:col-span-5 flex items-center gap-3">
          <img src="/logo.png" alt="Livreo" className="h-7 md:h-8 w-auto" />
          <span className="mb-mono hidden sm:inline">Madagascar</span>
        </div>
        <nav className="col-span-5 md:col-span-7 hidden md:grid" style={{ gridTemplateColumns: 'repeat(3, 1fr)', gap: 'var(--gutter)' }}>
          <a href="#how" className="mb-link text-center">Comment ça marche</a>
          <a href="#install" className="mb-link text-center">Installation</a>
          <a href="#download" className="mb-link text-center">Télécharger</a>
        </nav>
        <div className="col-span-5 md:hidden text-right">
          <a href="#download" className="mb-kicker mb-kicker--accent">Télécharger →</a>
        </div>
      </header>
      <hr className="mb-rule" />

      {/* ════════════════════ HERO ════════════════════ */}
      <section className="mb-band" style={{ paddingTop: 'calc(var(--bl)*8)', paddingBottom: 'calc(var(--bl)*8)' }}>
        <div className="col-span-12 md:col-span-4">
          <p className="mb-kicker mb-kicker--accent">Application Livreo</p>
        </div>

        {/* Display headline — reduced size */}
        <div className="col-span-12 md:col-span-11" style={{ marginTop: 'calc(var(--bl)*3)' }}>
          <h1 className="mb-optical mb-display" style={{ fontSize: 'clamp(32px, 7vw, 76px)' }}>
            Vous êtes livreur&nbsp;?
            <br />
            <span style={{ color: 'var(--mb-accent)' }}>ou vous en cherchez un&nbsp;?</span>
          </h1>
        </div>

        {/* Lead — full width on mobile, cols 1/7 on desktop */}
        <div className="col-span-12 md:col-span-7" style={{ marginTop: 'calc(var(--bl)*5)' }}>
          <p className="mb-body--lead">
            <span style={{ color: 'var(--mb-accent)', fontWeight: 700 }}>Gagnez</span> votre propre argent en tant que livreur. Ou <span style={{ color: 'var(--mb-accent)', fontWeight: 700 }}>publiez</span> une offre et trouvez un livreur vérifié en moins de cinq minutes. Une seule application pour expédier vos colis ou travailler à Madagascar, partout.
          </p>
          <div style={{ height: 'calc(var(--bl)*4)' }} />
          {/* Download button in hero — prominent */}
          <DownloadButton large />
          <div style={{ height: 'calc(var(--bl)*2)' }} />
          <p className="mb-mono">Gratuit • 25 Mo • Android 7+</p>
        </div>

        {/* Compiled text block — FULL WIDTH, centered on page, subtle (40% opacity).
            Dense typographic poster: varied sizes, vertical piliers, controlled overlap.
            Note: Madagascar is OUTSIDE the 40% opacity block (navy 100%, full strength). */}
        <div className="col-span-12" style={{ marginTop: 'calc(var(--bl)*8)', display: 'flex', flexDirection: 'column', justifyContent: 'center', alignItems: 'center', width: '100vw', marginLeft: 'calc(50% - 50vw)', position: 'relative' }}>
          <div style={{ position: 'relative', width: '100%', maxWidth: '520px', opacity: 0.4, padding: '0 16px' }}>

            {/* Vertical pilier gauche — GRATUIT (desktop only, hidden mobile) */}
            <span
              className="mb-optical hidden md:block"
              style={{
                position: 'absolute',
                left: -8,
                top: 4,
                writingMode: 'vertical-rl',
                transform: 'rotate(180deg)',
                fontSize: 'clamp(28px, 5vw, 44px)',
                fontWeight: 800,
                letterSpacing: '-0.02em',
                textTransform: 'uppercase',
                color: 'var(--mb-ink)',
              }}
            >
              Gratuit
            </span>

            {/* Vertical pilier droit — SÉCURISÉ (desktop only, hidden mobile) */}
            <span
              className="mb-optical hidden md:block"
              style={{
                position: 'absolute',
                right: -8,
                top: 4,
                writingMode: 'vertical-rl',
                fontSize: 'clamp(28px, 5vw, 44px)',
                fontWeight: 800,
                letterSpacing: '-0.02em',
                textTransform: 'uppercase',
                color: 'var(--mb-accent)',
              }}
            >
              Sécurisé
            </span>

            {/* Bloc central dense */}
            <div style={{ padding: '0 48px', textAlign: 'center' }}>

              {/* Mots moyens en flux — Gratuit / Rapide / Facile / Revenu / Sécurisé (mobile shows all inline) */}
              <div style={{ display: 'flex', flexWrap: 'wrap', gap: '4px 12px', alignItems: 'baseline', justifyContent: 'center' }}>
                <span style={{ fontSize: 'clamp(22px, 5vw, 32px)', fontWeight: 800, color: 'var(--mb-ink)' }} className="md:hidden">Gratuit</span>
                <span style={{ fontSize: '14px', color: 'var(--mb-ink-soft)' }} className="md:hidden">·</span>
                <span style={{ fontSize: 'clamp(20px, 4vw, 28px)', fontWeight: 700, color: 'var(--mb-ink)' }}>Rapide</span>
                <span style={{ fontSize: '14px', color: 'var(--mb-ink-soft)' }}>·</span>
                <span style={{ fontSize: 'clamp(18px, 3.5vw, 24px)', fontWeight: 600, color: 'var(--mb-ink)' }}>Facile</span>
                <span style={{ fontSize: '14px', color: 'var(--mb-ink-soft)' }}>·</span>
                <span style={{ fontSize: 'clamp(20px, 4vw, 28px)', fontWeight: 700, color: 'var(--mb-accent)' }}>Revenu</span>
                <span style={{ fontSize: '14px', color: 'var(--mb-ink-soft)' }} className="md:hidden">·</span>
                <span style={{ fontSize: 'clamp(22px, 5vw, 32px)', fontWeight: 800, color: 'var(--mb-accent)' }} className="md:hidden">Sécurisé</span>
              </div>

              {/* Petits mots spec */}
              <div style={{ marginTop: '14px', display: 'grid', gridTemplateColumns: 'auto 1fr', gap: '4px 16px', textAlign: 'left', justifyContent: 'center' }} className="mb-mono">
                <span>Plateforme</span><span style={{ color: 'var(--mb-ink)' }}>Android 7+</span>
                <span>Poids</span><span style={{ color: 'var(--mb-ink)' }}>25 Mo</span>
                <span>Prix</span><span style={{ color: 'var(--mb-ink)' }}>Gratuit</span>
                <span>Livreur</span><span style={{ color: 'var(--mb-ink)' }}>Vérifié CIN</span>
                <span>Paiement</span><span style={{ color: 'var(--mb-ink)' }}>Espèces / Mobile Money</span>
              </div>
            </div>
          </div>

          {/* Madagascar — OUTSIDE the 40% opacity block. Navy 100%, bold, large, full strength. */}
          <p style={{ marginTop: 'calc(var(--bl)*4)', textAlign: 'center', letterSpacing: '0.2em', textTransform: 'uppercase', fontSize: 'clamp(16px, 3vw, 20px)', color: '#182C50', fontWeight: 800 }}>
            Madagascar
          </p>
        </div>
      </section>

      <hr className="mb-rule" />

      {/* ════════════════════ MANIFESTO ════════════════════ */}
      <section className="mb-band" style={{ paddingTop: 'calc(var(--bl)*10)', paddingBottom: 'calc(var(--bl)*10)' }}>
        <div className="col-span-12 md:col-span-4">
          <span className="mb-optical mb-numeral" style={{ fontSize: 'clamp(80px, 16vw, 180px)' }}>5</span>
          <div style={{ height: 'calc(var(--bl)*2)' }} />
          <p className="mb-mono">minutes, au plus</p>
        </div>
        <div className="col-span-12 md:col-span-8 md:col-start-6" style={{ marginTop: 'calc(var(--bl)*3)' }}>
          <p className="mb-kicker">Le principe</p>
          <div style={{ height: 'calc(var(--bl)*2)' }} />
          {/* Section headline — reduced */}
          <h2 className="mb-optical mb-headline" style={{ fontSize: 'clamp(22px, 3.5vw, 38px)' }}>
            Un livreur vérifié, trouvé pour vous.
          </h2>
          <div style={{ height: 'calc(var(--bl)*4)' }} />
          <p className="mb-body">
            Vous publiez votre offre — adresse, prix, description du colis.
            L&apos;application trouve automatiquement un livreur disponible
            près de vous. Vous n&apos;avez rien à chercher, personne à appeler.
          </p>
          <div style={{ height: 'calc(var(--bl)*3)' }} />
          <p className="mb-body">
            Chaque livreur partenaire fournit sa carte d&apos;identité avant
            sa première course. Votre colis est entre de bonnes mains, du
            ramassage jusqu&apos;à la livraison.
          </p>
        </div>
      </section>

      <hr className="mb-rule" />

      {/* ════════════════════ COMMENT ÇA MARCHE ════════════════════ */}
      <section id="how" className="mb-band" style={{ paddingTop: 'calc(var(--bl)*10)', paddingBottom: 'calc(var(--bl)*10)' }}>
        <div className="col-span-12 md:col-span-8" style={{ marginBottom: 'calc(var(--bl)*6)' }}>
          <p className="mb-kicker">Comment ça marche</p>
          <div style={{ height: 'calc(var(--bl)*2)' }} />
          {/* Section headline — reduced */}
          <h2 className="mb-optical mb-headline" style={{ fontSize: 'clamp(20px, 3vw, 32px)' }}>
            Deux façons d&apos;utiliser Livreo.
          </h2>
        </div>

        <article className="col-span-12 md:col-span-6" style={{ marginBottom: 'calc(var(--bl)*4)' }}>
          <p className="mb-mono">01 / Expéditeur</p>
          <div style={{ height: 'calc(var(--bl)*2)' }} />
          <h3 className="mb-subhead" style={{ fontSize: '18px' }}>
            Envoyez un colis en trois étapes.
          </h3>
          <div style={{ height: 'calc(var(--bl)*2)' }} />
          <ol className="mb-body" style={{ listStyle: 'none', padding: 0, margin: 0 }}>
            {['Publiez votre offre : adresse, prix, description.', "L'application trouve un livreur vérifié près de vous.", "Suivez la livraison en temps réel jusqu'au destinataire."].map((t, i) => (
              <li key={i} style={{ display: 'grid', gridTemplateColumns: '24px 1fr', gap: '12px', marginBottom: 'calc(var(--bl)*2)' }}>
                <span className="mb-mono" style={{ color: 'var(--mb-accent)' }}>{i + 1}.</span>
                <span>{t}</span>
              </li>
            ))}
          </ol>
        </article>

        <article className="col-span-12 md:col-span-6">
          <p className="mb-mono">02 / Livreur</p>
          <div style={{ height: 'calc(var(--bl)*2)' }} />
          <h3 className="mb-subhead" style={{ fontSize: '18px' }}>
            Gagnez votre propre argent, à votre rythme.
          </h3>
          <div style={{ height: 'calc(var(--bl)*2)' }} />
          <ol className="mb-body" style={{ listStyle: 'none', padding: 0, margin: 0 }}>
            {['Recevez des offres de livraison autour de votre position.', 'Acceptez celles qui vous conviennent, quand vous voulez.', 'Livrez. Le client vous paie directement, en espèces ou Mobile Money.'].map((t, i) => (
              <li key={i} style={{ display: 'grid', gridTemplateColumns: '24px 1fr', gap: '12px', marginBottom: 'calc(var(--bl)*2)' }}>
                <span className="mb-mono" style={{ color: 'var(--mb-accent)' }}>{i + 1}.</span>
                <span>{t}</span>
              </li>
            ))}
          </ol>
        </article>
      </section>

      <hr className="mb-rule" />

      {/* ════════════════════ INSTALLATION ════════════════════ */}
      <section id="install" className="mb-band" style={{ paddingTop: 'calc(var(--bl)*10)', paddingBottom: 'calc(var(--bl)*10)' }}>
        <div className="col-span-12 md:col-span-8" style={{ marginBottom: 'calc(var(--bl)*6)' }}>
          <p className="mb-kicker">Installation</p>
          <div style={{ height: 'calc(var(--bl)*2)' }} />
          <h2 className="mb-optical mb-headline" style={{ fontSize: 'clamp(20px, 3vw, 32px)' }}>
            Trois étapes pour installer l&apos;application.
          </h2>
        </div>

        {[
          { n: '01', t: 'Téléchargez le fichier APK.', d: "Cliquez sur le bouton Télécharger. Le fichier se sauvegarde dans votre dossier Téléchargements." },
          { n: '02', t: 'Autorisez l\'installation.', d: "Android peut afficher un avertissement. Autorisez votre navigateur (Chrome, Opera) à installer des applications." },
          { n: '03', t: 'Ouvrez et créez votre compte.', d: "Lancez Livreo, créez votre compte, choisissez votre profil — expéditeur ou livreur — et commencez." },
        ].map((s, i) => (
          <article key={i} className="col-span-12 md:col-span-4" style={{ marginBottom: 'calc(var(--bl)*4)' }}>
            <p className="mb-mono">Étape {s.n}</p>
            <div style={{ height: 'calc(var(--bl)*2)' }} />
            <h3 className="mb-subhead" style={{ fontSize: '16px' }}>{s.t}</h3>
            <div style={{ height: 'calc(var(--bl)*2)' }} />
            <p className="mb-body">{s.d}</p>
          </article>
        ))}
      </section>

      <hr className="mb-rule" />

      {/* ════════════════════ DOWNLOAD CTA ════════════════════ */}
      <section id="download" className="mb-band" style={{ paddingTop: 'calc(var(--bl)*12)', paddingBottom: 'calc(var(--bl)*8)' }}>
        <div className="col-span-12">
          <p className="mb-kicker mb-kicker--accent">Télécharger</p>
          <div style={{ height: 'calc(var(--bl)*3)' }} />
          {/* Download CTA — reduced from 32→76 to 28→56 */}
          <h2 className="mb-optical mb-display" style={{ fontSize: 'clamp(28px, 6vw, 56px)' }}>
            Livreo. Gratuit,
            <br />
            <span style={{ color: 'var(--mb-accent)' }}>pour commencer.</span>
          </h2>
          <div style={{ height: 'calc(var(--bl)*5)' }} />
          <DownloadButton large />
          <div style={{ height: 'calc(var(--bl)*3)' }} />
          <p className="mb-mono">APK Android • 25 Mo • Android 7+ • Madagascar</p>
        </div>
      </section>

      {/* ════════════════════ FOOTER ════════════════════ */}
      <hr className="mb-rule" />
      <footer className="mb-band" style={{ paddingTop: 'calc(var(--bl)*6)', paddingBottom: 'calc(var(--bl)*4)' }}>
        <div className="col-span-12 md:col-span-4">
          <img src="/logo.png" alt="Livreo" className="h-6 mb-2" />
          <p className="mb-mono">Madagascar · Site officiel</p>
        </div>
        <div className="col-span-6 md:col-span-4">
          <p className="mb-mono">Application de livraison</p>
        </div>
      </footer>
    </main>
  );
}
