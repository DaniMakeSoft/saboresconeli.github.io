<!DOCTYPE html>
<html lang="es">
<head>
<meta charset="UTF-8">
<meta name="viewport" content="width=device-width, initial-scale=1.0">
<title>Sabores con Eli — Repostería artesanal y comida para llevar</title>
<style>
  @import url('https://fonts.googleapis.com/css2?family=Fraunces:opsz,wght@9..144,400;9..144,600;9..144,700&family=Work+Sans:wght@400;500;600;700&family=Space+Mono:wght@400;700&display=swap');

  :root{
    --cocoa: #2B1810;
    --cocoa-light: #4A2E1D;
    --cream: #FBF3E4;
    --paper: #FFFCF6;
    --rose: #D89AA6;
    --rose-deep: #B5677A;
    --gold: #B8892B;
    --ink: #2B1810;
    --ink-soft: #6B584C;
  }

  *{box-sizing:border-box; margin:0; padding:0;}
  html{scroll-behavior:smooth;}
  body{
    font-family:'Work Sans', sans-serif;
    background:var(--cream);
    color:var(--ink);
    line-height:1.55;
    overflow-x:hidden;
  }
  img,svg{display:block; max-width:100%;}
  a{color:inherit; text-decoration:none;}
  ul{list-style:none;}
  .container{max-width:1120px; margin:0 auto; padding:0 24px;}
  .eyebrow{
    font-family:'Space Mono', monospace;
    font-size:.72rem;
    letter-spacing:.14em;
    text-transform:uppercase;
    color:var(--rose-deep);
    display:flex; align-items:center; gap:8px;
  }
  .eyebrow::before{content:''; width:18px; height:1px; background:var(--gold);}
  h1,h2,h3{font-family:'Fraunces', serif; font-weight:600; color:var(--cocoa); line-height:1.1;}
  section{padding:96px 0;}
  @media(max-width:640px){ section{padding:64px 0;} }

  .btn{
    display:inline-flex; align-items:center; justify-content:center; gap:8px;
    padding:14px 28px; border-radius:100px; font-weight:600; font-size:.95rem;
    cursor:pointer; border:2px solid transparent; transition:transform .15s ease, box-shadow .15s ease;
  }
  .btn:active{transform:scale(.97);}
  .btn-primary{background:var(--rose-deep); color:var(--paper);}
  .btn-primary:hover{box-shadow:0 8px 20px -6px rgba(181,103,122,.6);}
  .btn-outline{border-color:var(--cocoa); color:var(--cocoa);}
  .btn-outline:hover{background:var(--cocoa); color:var(--cream);}

  /* ===== HEADER ===== */
  header{
    position:sticky; top:0; z-index:50;
    background:var(--cocoa); color:var(--cream);
    border-bottom:1px solid rgba(251,243,228,.12);
  }
  .nav-wrap{display:flex; align-items:center; justify-content:space-between; height:76px;}
  .logo{font-family:'Fraunces', serif; font-size:1.35rem; font-weight:700; color:var(--cream); letter-spacing:.01em;}
  .logo span{color:var(--rose);}
  nav ul{display:flex; gap:32px; font-size:.92rem;}
  nav a{opacity:.85; transition:opacity .15s;}
  nav a:hover{opacity:1;}
  .nav-cta{display:flex; align-items:center; gap:18px;}
  .burger{display:none; flex-direction:column; gap:5px; cursor:pointer; background:none; border:none;}
  .burger span{width:24px; height:2px; background:var(--cream);}

  @media(max-width:860px){
    nav{position:fixed; top:76px; left:0; right:0; background:var(--cocoa); flex-direction:column;
        max-height:0; overflow:hidden; transition:max-height .3s ease;}
    nav.open{max-height:300px;}
    nav ul{flex-direction:column; padding:20px 24px; gap:20px;}
    .burger{display:flex;}
    .nav-cta .btn-primary{display:none;}
  }

  /* ===== HERO ===== */
  .hero{padding:80px 0 40px; overflow:visible;}
  .hero-grid{display:grid; grid-template-columns:1.1fr .9fr; gap:56px; align-items:center;}
  @media(max-width:900px){ .hero-grid{grid-template-columns:1fr; text-align:center;} .hero-grid .eyebrow{justify-content:center;} }
  .hero h1{font-size:clamp(2.3rem, 4.2vw, 3.6rem); margin:18px 0 20px;}
  .hero p{color:var(--ink-soft); font-size:1.08rem; max-width:480px; margin-bottom:32px;}
  @media(max-width:900px){ .hero p{margin-left:auto; margin-right:auto;} }
  .hero-actions{display:flex; gap:16px; flex-wrap:wrap;}
  @media(max-width:900px){ .hero-actions{justify-content:center;} }

  .hero-art{position:relative; display:flex; justify-content:center;}
  .badge-seal{position:absolute; top:-18px; right:8px; width:110px; height:110px; animation:spin 18s linear infinite;}
  @media(max-width:900px){ .badge-seal{right:calc(50% - 170px); top:-10px;} }
  @keyframes spin{ to{ transform:rotate(360deg); } }
  @media (prefers-reduced-motion: reduce){ .badge-seal{animation:none;} }

  /* strip */
  .usp-strip{background:var(--paper); border-top:1px solid #EBE0CC; border-bottom:1px solid #EBE0CC;}
  .usp-grid{display:grid; grid-template-columns:repeat(3,1fr); gap:24px; padding:32px 0;}
  @media(max-width:760px){ .usp-grid{grid-template-columns:1fr; text-align:center;} }
  .usp-item{display:flex; align-items:center; gap:14px;}
  @media(max-width:760px){ .usp-item{flex-direction:column;} }
  .usp-item svg{flex-shrink:0; width:34px; height:34px; color:var(--rose-deep);}
  .usp-item h3{font-family:'Work Sans'; font-size:1rem; font-weight:600;}
  .usp-item p{font-size:.86rem; color:var(--ink-soft);}

  /* ===== MENU ===== */
  .menu-head{text-align:center; max-width:600px; margin:0 auto 40px;}
  .menu-head .eyebrow{justify-content:center;}
  .menu-head h2{font-size:clamp(1.8rem,3vw,2.4rem); margin-top:14px;}

  .tabs{display:flex; justify-content:center; gap:10px; margin-bottom:44px; flex-wrap:wrap;}
  .tab-btn{
    font-family:'Space Mono', monospace; font-size:.82rem; text-transform:uppercase; letter-spacing:.05em;
    padding:10px 20px; border-radius:100px; border:1.5px solid var(--cocoa); background:transparent; color:var(--cocoa);
    cursor:pointer; transition:all .15s;
  }
  .tab-btn.active, .tab-btn:hover{background:var(--cocoa); color:var(--cream);}

  .menu-grid{display:none; grid-template-columns:repeat(2,1fr); gap:28px;}
  .menu-grid.active{display:grid;}
  @media(max-width:700px){ .menu-grid{grid-template-columns:1fr;} }

  .ticket{
    background:var(--paper);
    padding:22px 22px 30px;
    border-top:3px dashed var(--rose-deep);
    position:relative;
    box-shadow:0 10px 30px -18px rgba(43,24,16,.35);
  }
  .ticket::before, .ticket::after{
    content:''; position:absolute; top:-10px; width:20px; height:20px; border-radius:50%; background:var(--cream);
  }
  .ticket::before{left:-10px;}
  .ticket::after{right:-10px;}
  .ticket-zigzag{
    position:absolute; left:0; right:0; bottom:0; height:12px;
    background-image:
      linear-gradient(45deg, transparent 6px, var(--paper) 6px),
      linear-gradient(-45deg, transparent 6px, var(--paper) 6px);
    background-size:12px 12px;
    background-position:bottom left, bottom left;
    background-color:var(--cream);
    transform:translateY(100%);
  }
  .ticket-row{display:flex; justify-content:space-between; align-items:baseline; gap:12px; margin-bottom:6px;}
  .ticket-row h3{font-family:'Work Sans'; font-weight:600; font-size:1.05rem; color:var(--ink);}
  .ticket-price{font-family:'Space Mono', monospace; font-weight:700; color:var(--rose-deep); white-space:nowrap;}
  .ticket p{font-size:.88rem; color:var(--ink-soft); margin-bottom:10px;}
  .chip{
    display:inline-block; font-family:'Space Mono'; font-size:.68rem; text-transform:uppercase;
    padding:3px 9px; border-radius:100px; background:rgba(184,137,43,.14); color:var(--gold); letter-spacing:.04em;
  }

  /* ===== ABOUT ===== */
  .about{background:var(--cocoa); color:var(--cream);}
  .about .eyebrow{color:var(--rose);}
  .about .eyebrow::before{background:var(--rose);}
  .about-grid{display:grid; grid-template-columns:.85fr 1.15fr; gap:56px; align-items:center;}
  @media(max-width:860px){ .about-grid{grid-template-columns:1fr;} }
  .about h2{color:var(--cream); font-size:clamp(1.8rem,3vw,2.3rem); margin:14px 0 18px;}
  .about p{color:#E3D3C6; max-width:520px;}
  .about-visual{
    aspect-ratio:4/5; border-radius:6px;
    background:
      radial-gradient(circle at 30% 25%, rgba(216,154,166,.35), transparent 55%),
      repeating-linear-gradient(135deg, rgba(251,243,228,.06) 0 2px, transparent 2px 22px),
      var(--cocoa-light);
    border:1px solid rgba(251,243,228,.15);
    display:flex; align-items:center; justify-content:center;
  }
  .about-visual span{font-family:'Space Mono'; font-size:.75rem; color:rgba(251,243,228,.45); text-align:center; padding:20px;}

  /* ===== HOURS/LOCATION ===== */
  .hours-grid{display:grid; grid-template-columns:1fr 1fr; gap:56px;}
  @media(max-width:860px){ .hours-grid{grid-template-columns:1fr;} }
  .hours-table{width:100%; border-collapse:collapse; margin-top:22px;}
  .hours-table tr{border-bottom:1px solid #E5D8C3;}
  .hours-table td{padding:14px 4px; font-size:.95rem;}
  .hours-table td:first-child{font-weight:600; color:var(--cocoa);}
  .hours-table td:last-child{text-align:right; font-family:'Space Mono'; font-size:.88rem; color:var(--ink-soft);}

  .map-box{
    background:var(--paper); border:1px solid #EBE0CC; border-radius:8px; padding:28px;
    display:flex; flex-direction:column; gap:16px; height:100%;
  }
  .map-box svg{width:36px; height:36px; color:var(--rose-deep);}
  .map-box address{font-style:normal; color:var(--ink-soft); line-height:1.6;}

  /* ===== FOOTER ===== */
  footer{background:var(--cocoa); color:var(--cream); padding:56px 0 28px;}
  .footer-grid{display:grid; grid-template-columns:1.3fr 1fr 1fr; gap:40px; margin-bottom:40px;}
  @media(max-width:700px){ .footer-grid{grid-template-columns:1fr; text-align:center;} }
  footer h4{font-family:'Space Mono'; font-size:.75rem; text-transform:uppercase; letter-spacing:.08em; color:var(--rose); margin-bottom:16px;}
  footer p, footer a{color:#D8C7B8; font-size:.92rem;}
  footer .brand{font-family:'Fraunces'; font-size:1.3rem; color:var(--cream); margin-bottom:10px;}
  .footer-links li{margin-bottom:10px;}
  .footer-links a:hover{color:var(--cream);}
  .foot-bottom{border-top:1px solid rgba(251,243,228,.12); padding-top:22px; text-align:center; font-size:.8rem; color:#B39F8E;}

  /* reveal animation */
  .reveal{opacity:0; transform:translateY(18px); transition:opacity .6s ease, transform .6s ease;}
  .reveal.in{opacity:1; transform:translateY(0);}
  @media (prefers-reduced-motion: reduce){ .reveal{opacity:1; transform:none; transition:none;} }
</style>
</head>
<body>

<header>
  <div class="container nav-wrap">
    <a href="#top" class="logo">Sabores <span>con Eli</span></a>
    <nav id="nav">
      <ul>
        <li><a href="#menu">Menú</a></li>
        <li><a href="#nosotros">Sobre nosotros</a></li>
        <li><a href="#horarios">Horarios y ubicación</a></li>
        <li><a href="#contacto">Contacto</a></li>
      </ul>
    </nav>
    <div class="nav-cta">
      <a href="https://wa.me/34600000000" target="_blank" class="btn btn-primary" style="padding:10px 20px; font-size:.85rem;">Pedir por WhatsApp</a>
      <button class="burger" id="burger" aria-label="Abrir menú"><span></span><span></span><span></span></button>
    </div>
  </div>
</header>

<main id="top">

  <!-- HERO -->
  <section class="hero">
    <div class="container hero-grid">
      <div>
        <p class="eyebrow">Repostería artesanal · Para llevar</p>
        <h1>Dulces recién hechos,<br>listos para llevar.</h1>
        <p>En Sabores con Eli horneamos cada mañana tartas, bollería y platos para llevar con ingredientes de cercanía. Encarga con antelación y recógelo cuando te venga bien, sin colas ni esperas.</p>
        <div class="hero-actions">
          <a href="#menu" class="btn btn-primary">Ver el menú</a>
          <a href="#horarios" class="btn btn-outline">Cómo llegar</a>
        </div>
      </div>
      <div class="hero-art">
        <svg viewBox="0 0 320 320" width="100%" style="max-width:340px;">
          <ellipse cx="160" cy="255" rx="120" ry="16" fill="#00000010"/>
          <rect x="70" y="230" width="180" height="14" rx="4" fill="#4A2E1D"/>
          <path d="M85 230 L95 150 Q160 130 225 150 L235 230 Z" fill="#D89AA6"/>
          <path d="M95 150 Q160 128 225 150 L221 168 Q160 150 99 168 Z" fill="#FBF3E4"/>
          <path d="M92 150 Q100 132 112 148 Q120 132 132 148 Q140 132 152 148 Q160 132 168 148 Q176 132 188 148 Q196 132 208 148 Q216 132 228 150 Q222 158 92 158 Z" fill="#FBF3E4"/>
          <circle cx="160" cy="122" r="10" fill="#B5677A"/>
          <circle cx="130" cy="160" r="4" fill="#B8892B"/>
          <circle cx="180" cy="165" r="4" fill="#B8892B"/>
          <circle cx="150" cy="172" r="4" fill="#B8892B"/>
        </svg>
        <svg class="badge-seal" viewBox="0 0 120 120">
          <circle cx="60" cy="60" r="52" fill="#B5677A"/>
          <circle cx="60" cy="60" r="52" fill="none" stroke="#FBF3E4" stroke-width="2" stroke-dasharray="2 5"/>
          <path id="circlePath" d="M60,20 A40,40 0 1 1 59.9,20" fill="none"/>
          <text font-family="Space Mono, monospace" font-size="9.5" fill="#FBF3E4" letter-spacing="2">
            <textPath href="#circlePath" startOffset="0%">★ HECHO A MANO ★ SABORES CON ELI ★</textPath>
          </text>
        </svg>
      </div>
    </div>
  </section>

  <!-- USP STRIP -->
  <div class="usp-strip">
    <div class="container usp-grid">
      <div class="usp-item">
        <svg fill="none" stroke="currentColor" stroke-width="1.6" viewBox="0 0 24 24"><path d="M12 2v6M12 2c-3 2-5 5-5 9a5 5 0 0010 0c0-4-2-7-5-9z"/></svg>
        <div><h3>Ingredientes de cercanía</h3><p>Proveedores locales, cada día.</p></div>
      </div>
      <div class="usp-item">
        <svg fill="none" stroke="currentColor" stroke-width="1.6" viewBox="0 0 24 24"><rect x="3" y="7" width="18" height="14" rx="2"/><path d="M8 7V5a4 4 0 018 0v2"/></svg>
        <div><h3>Recogida en tienda</h3><p>Encarga online, recoge sin esperar.</p></div>
      </div>
      <div class="usp-item">
        <svg fill="none" stroke="currentColor" stroke-width="1.6" viewBox="0 0 24 24"><path d="M12 21s-7-4.5-9.5-9A5.5 5.5 0 0112 6a5.5 5.5 0 019.5 6c-2.5 4.5-9.5 9-9.5 9z"/></svg>
        <div><h3>Encargos personalizados</h3><p>Tartas a medida para tu celebración.</p></div>
      </div>
    </div>
  </div>

  <!-- MENU -->
  <section id="menu">
    <div class="container">
      <div class="menu-head reveal">
        <p class="eyebrow">Nuestra selección</p>
        <h2>El menú de hoy</h2>
      </div>

      <div class="tabs reveal">
        <button class="tab-btn active" data-tab="tartas">Tartas</button>
        <button class="tab-btn" data-tab="bolleria">Bollería</button>
        <button class="tab-btn" data-tab="salado">Salado para llevar</button>
      </div>

      <div class="container" style="padding:0;">
        <div class="menu-grid active" id="tartas">
          <div class="ticket reveal">
            <div class="ticket-row"><h3>Tarta de queso al horno</h3><span class="ticket-price">18,50 €</span></div>
            <p>Receta tradicional, textura cremosa y un toque de limón.</p>
            <span class="chip">Sin gluten</span>
            <div class="ticket-zigzag"></div>
          </div>
          <div class="ticket reveal">
            <div class="ticket-row"><h3>Tarta de zanahoria</h3><span class="ticket-price">21,00 €</span></div>
            <p>Bizcocho especiado con cobertura de queso crema.</p>
            <div class="ticket-zigzag"></div>
          </div>
          <div class="ticket reveal">
            <div class="ticket-row"><h3>Tarta de chocolate 70%</h3><span class="ticket-price">22,50 €</span></div>
            <p>Bizcocho húmedo, ganache intenso y virutas de cacao.</p>
            <div class="ticket-zigzag"></div>
          </div>
          <div class="ticket reveal">
            <div class="ticket-row"><h3>Tarta de fruta de temporada</h3><span class="ticket-price">23,00 €</span></div>
            <p>Base de crema pastelera con la fruta del día.</p>
            <div class="ticket-zigzag"></div>
          </div>
        </div>

        <div class="menu-grid" id="bolleria">
          <div class="ticket reveal">
            <div class="ticket-row"><h3>Croissant de mantequilla</h3><span class="ticket-price">1,80 €</span></div>
            <p>Hojaldrado a diario, crujiente por fuera y tierno por dentro.</p>
            <div class="ticket-zigzag"></div>
          </div>
          <div class="ticket reveal">
            <div class="ticket-row"><h3>Napolitana de chocolate</h3><span class="ticket-price">2,10 €</span></div>
            <p>Doble relleno de chocolate negro.</p>
            <div class="ticket-zigzag"></div>
          </div>
          <div class="ticket reveal">
            <div class="ticket-row"><h3>Roscón de canela</h3><span class="ticket-price">2,40 €</span></div>
            <p>Glaseado suave y un toque de canela de Ceilán.</p>
            <div class="ticket-zigzag"></div>
          </div>
          <div class="ticket reveal">
            <div class="ticket-row"><h3>Palmera de chocolate</h3><span class="ticket-price">1,90 €</span></div>
            <p>Hojaldre caramelizado bañado en chocolate.</p>
            <div class="ticket-zigzag"></div>
          </div>
        </div>

        <div class="menu-grid" id="salado">
          <div class="ticket reveal">
            <div class="ticket-row"><h3>Empanada de atún</h3><span class="ticket-price">4,50 €</span></div>
            <p>Masa casera, ración individual para llevar.</p>
            <div class="ticket-zigzag"></div>
          </div>
          <div class="ticket reveal">
            <div class="ticket-row"><h3>Quiche de verduras</h3><span class="ticket-price">4,90 €</span></div>
            <p>De temporada, con base crujiente.</p>
            <span class="chip">Vegetariano</span>
            <div class="ticket-zigzag"></div>
          </div>
          <div class="ticket reveal">
            <div class="ticket-row"><h3>Focaccia rellena</h3><span class="ticket-price">5,20 €</span></div>
            <p>Jamón, queso y tomate seco.</p>
            <div class="ticket-zigzag"></div>
          </div>
          <div class="ticket reveal">
            <div class="ticket-row"><h3>Ensaladilla para llevar</h3><span class="ticket-price">3,80 €</span></div>
            <p>Receta casera, envase de 400 g.</p>
            <div class="ticket-zigzag"></div>
          </div>
        </div>
      </div>
    </div>
  </section>

  <!-- ABOUT -->
  <section class="about" id="nosotros">
    <div class="container about-grid">
      <div class="about-visual reveal"><span>[ Espacio para foto de Eli<br>en el obrador ]</span></div>
      <div class="reveal">
        <p class="eyebrow">Sobre nosotros</p>
        <h2>Hecho a mano, cada día, por Eli.</h2>
        <p>Sabores con Eli nació de la idea de llevar la repostería de siempre a quienes no tienen tiempo de hacerla en casa. Cada tarta, cada pieza de bollería y cada plato para llevar se prepara desde cero en nuestro obrador, con recetas propias e ingredientes de proveedores cercanos.</p>
      </div>
    </div>
  </section>

  <!-- HORARIOS / UBICACIÓN -->
  <section id="horarios">
    <div class="container hours-grid">
      <div class="reveal">
        <p class="eyebrow">Horario</p>
        <h2>¿Cuándo estamos abiertos?</h2>
        <table class="hours-table">
          <tr><td>Lunes – Viernes</td><td>08:00 – 20:30</td></tr>
          <tr><td>Sábado</td><td>09:00 – 14:30</td></tr>
          <tr><td>Domingo</td><td>Cerrado</td></tr>
        </table>
      </div>
      <div class="reveal">
        <div class="map-box">
          <svg fill="none" stroke="currentColor" stroke-width="1.6" viewBox="0 0 24 24"><path d="M12 21s-7-6-7-11a7 7 0 0114 0c0 5-7 11-7 11z"/><circle cx="12" cy="10" r="2.5"/></svg>
          <div>
            <h3 style="font-family:'Work Sans'; font-size:1.05rem; margin-bottom:8px;">Visítanos</h3>
            <address>Calle Ejemplo, 12<br>28000 Madrid</address>
          </div>
          <a href="https://www.google.com/maps/search/?api=1&query=Sabores+con+Eli" target="_blank" class="btn btn-outline" style="align-self:flex-start; margin-top:8px;">Abrir en Google Maps</a>
        </div>
      </div>
    </div>
  </section>

</main>

<footer id="contacto">
  <div class="container footer-grid">
    <div>
      <p class="brand">Sabores <span style="color:var(--rose);">con Eli</span></p>
      <p>Repostería artesanal y comida para llevar, hecha cada día en nuestro obrador.</p>
    </div>
    <div>
      <h4>Contacto</h4>
      <ul class="footer-links">
        <li><a href="tel:+34600000000">600 00 00 00</a></li>
        <li><a href="mailto:hola@saboresconeli.com">hola@saboresconeli.com</a></li>
        <li><a href="https://wa.me/34600000000" target="_blank">WhatsApp</a></li>
      </ul>
    </div>
    <div>
      <h4>Síguenos</h4>
      <ul class="footer-links">
        <li><a href="#" target="_blank">Instagram</a></li>
        <li><a href="#" target="_blank">Facebook</a></li>
      </ul>
    </div>
  </div>
  <div class="container foot-bottom">
    © <span id="year"></span> Sabores con Eli. Todos los derechos reservados.
  </div>
</footer>

<script>
  document.getElementById('year').textContent = new Date().getFullYear();

  // Menú móvil
  const burger = document.getElementById('burger');
  const nav = document.getElementById('nav');
  burger.addEventListener('click', () => nav.classList.toggle('open'));
  nav.querySelectorAll('a').forEach(a => a.addEventListener('click', () => nav.classList.remove('open')));

  // Tabs del menú
  const tabBtns = document.querySelectorAll('.tab-btn');
  const grids = document.querySelectorAll('.menu-grid');
  tabBtns.forEach(btn => {
    btn.addEventListener('click', () => {
      tabBtns.forEach(b => b.classList.remove('active'));
      grids.forEach(g => g.classList.remove('active'));
      btn.classList.add('active');
      document.getElementById(btn.dataset.tab).classList.add('active');
    });
  });

  // Animación de aparición al hacer scroll
  const revealEls = document.querySelectorAll('.reveal');
  const io = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add('in');
        io.unobserve(entry.target);
      }
    });
  }, { threshold: 0.15 });
  revealEls.forEach(el => io.observe(el));
</script>

</body>
</html>
