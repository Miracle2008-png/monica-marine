
function getPlaceholderImg(name, cat) {
  const colors = {
    'Safety Equipment': ['#0A1628','#2563EB'],
    'Navigation': ['#112240','#1A56DB'],
    'Engine Parts': ['#0d2137','#1e4d8c'],
    'Deck Equipment': ['#0a1f35','#1b5e9e'],
    'Provisions': ['#0f2744','#2471c7'],
    'Electrical': ['#091b30','#1a4f8a'],
    'Maintenance': ['#0c2040','#1c5499'],
  };
  const c = colors[cat] || ['#0A1628','#2563EB'];
  const shortName = name.length > 22 ? name.substring(0,22)+'...' : name;
  const svg = `<svg xmlns="http://www.w3.org/2000/svg" width="400" height="180" viewBox="0 0 400 180">
    <defs><linearGradient id="g" x1="0%" y1="0%" x2="100%" y2="100%"><stop offset="0%" style="stop-color:${c[0]}"/><stop offset="100%" style="stop-color:${c[1]}"/></linearGradient></defs>
    <rect width="400" height="180" fill="url(#g)"/>
    <rect x="0" y="140" width="400" height="40" fill="rgba(0,0,0,0.3)"/>
    <text x="200" y="75" font-family="Montserrat,sans-serif" font-size="13" font-weight="600" fill="rgba(255,255,255,0.9)" text-anchor="middle">${shortName}</text>
    <text x="200" y="158" font-family="Montserrat,sans-serif" font-size="11" fill="rgba(255,255,255,0.7)" text-anchor="middle">${cat}</text>
    <circle cx="200" cy="48" r="18" fill="rgba(255,255,255,0.1)" stroke="rgba(255,255,255,0.3)" stroke-width="1"/>
    <text x="200" y="53" font-family="sans-serif" font-size="16" text-anchor="middle" fill="rgba(255,255,255,0.8)">⚙</text>
  </svg>`;
  return 'data:image/svg+xml;base64,' + btoa(unescape(encodeURIComponent(svg)));
}
/* =============================================
   Monica Marine Nigeria Limited - JavaScript
   Last updated: March 2026
   To add a product: copy one object in PRODUCTS,
   paste it at the end, change the values, save.
============================================= */

/* ---- PAGE NAVIGATION ---- */
let currentPage = 'home';

function showPage(name) {
  document.querySelectorAll('.page').forEach(p => p.classList.remove('active'));
  document.querySelectorAll('.nav-link').forEach(l => l.classList.remove('active'));
  document.getElementById('page-' + name).classList.add('active');
  document.querySelectorAll('.nav-link').forEach(l => {
    if (l.textContent.toLowerCase().includes(name === 'home' ? 'home' : name)) l.classList.add('active');
  });
  window.scrollTo({ top: 0, behavior: 'smooth' });
  currentPage = name;
  if (name === 'shop') renderProducts();
  setTimeout(initReveal, 100);
}

/* ---- NAV SCROLL EFFECT ---- */
window.addEventListener('scroll', () => {
  document.getElementById('navbar').classList.toggle('scrolled', window.scrollY > 40);
});

/* ---- MOBILE MENU ---- */
function toggleMobile() {
  document.getElementById('mobileMenu').classList.toggle('open');
}

/* ---- TOAST NOTIFICATIONS ---- */
function showToast(msg, type = '') {
  const t = document.getElementById('toast');
  t.textContent = msg;
  t.className = 'toast show ' + type;
  setTimeout(() => t.className = 'toast', 3500);
}

/* ---- REVEAL ON SCROLL ---- */
function initReveal() {
  const observer = new IntersectionObserver(entries => {
    entries.forEach(e => { if (e.isIntersecting) e.target.classList.add('visible'); });
  }, { threshold: 0.1 });
  document.querySelectorAll('.reveal').forEach(el => { el.classList.remove('visible'); observer.observe(el); });
}
initReveal();

/* ---- CONTACT FORM ---- */
function submitContact() {
  const first = document.getElementById('cFirst').value.trim();
  const last = document.getElementById('cLast').value.trim();
  const email = document.getElementById('cEmail').value.trim();
  const message = document.getElementById('cMessage').value.trim();
  if (!first || !last) return showToast('Please enter your full name.', 'error');
  if (!email || !email.includes('@')) return showToast('Please enter a valid email address.', 'error');
  if (!message) return showToast('Please enter your message.', 'error');
  showToast('Message sent! Our team will respond within 2 hours.', 'success');
  ['cFirst','cLast','cCompany','cEmail','cPhone','cVessel','cMessage'].forEach(id => {
    document.getElementById(id).value = '';
  });
}

/* =============================================
   SHOP PRODUCTS — All 69 products
   Categories: Safety Equipment | Navigation |
   Engine Parts | Deck Equipment | Provisions |
   Electrical | Maintenance
============================================= */
const PRODUCTS = [
  /* ---- SAFETY EQUIPMENT ---- */
  { id: 1,  name: 'HB-495-20 Breath Test Tubes (10 Pack)',       cat: 'Safety Equipment', sku: 'SE-001', emoji: '🧪', stock: 'In Stock' },
  { id: 2,  name: 'Alcohol Tester Mouthpieces',                  cat: 'Safety Equipment', sku: 'SE-002', emoji: '😷', stock: 'In Stock' },
  { id: 3,  name: 'SOLAS First Aid Kit — Liferaft/Lifeboat',     cat: 'Safety Equipment', sku: 'SE-003', emoji: '🩺', stock: 'In Stock' },
  { id: 4,  name: 'Mareflex MF03 Antispray Tape 75mm x 10m',     cat: 'Safety Equipment', sku: 'SE-004', emoji: '🔵', stock: 'In Stock' },
  { id: 5,  name: 'Marine Safety Signs & Equipment',              cat: 'Safety Equipment', sku: 'SE-005', emoji: '!', stock: 'In Stock' },
  { id: 6,  name: 'Daniamant Lifebuoy Light LBU0271',            cat: 'Safety Equipment', sku: 'SE-006', emoji: '🔦', stock: 'In Stock' },
  { id: 7,  name: 'Holdenbond Retro-Reflective Tape No.330186',  cat: 'Safety Equipment', sku: 'SE-007', emoji: '🪞', stock: 'In Stock' },
  { id: 8,  name: 'Gas Detector Spray',                          cat: 'Safety Equipment', sku: 'SE-008', emoji: '💨', stock: 'In Stock' },
  { id: 9,  name: 'Fire Hose Box & Pipe',                        cat: 'Safety Equipment', sku: 'SE-009', emoji: '🚒', stock: 'In Stock' },
  { id: 10, name: 'Fire Extinguisher 5kg',                       cat: 'Safety Equipment', sku: 'SE-010', emoji: '🧯', stock: 'In Stock' },
  { id: 11, name: 'Hand Glove 800g Red',                         cat: 'Safety Equipment', sku: 'SE-011', emoji: '🧤', stock: 'In Stock' },
  { id: 12, name: 'Hand Glove 800g Yellow',                      cat: 'Safety Equipment', sku: 'SE-012', emoji: '🧤', stock: 'In Stock' },
  { id: 13, name: 'Fire Hose / Fire Water Belt',                 cat: 'Safety Equipment', sku: 'SE-013', emoji: '🔴', stock: 'In Stock' },
  { id: 14, name: 'Holdenbond Spray Spare Test Gas No.331074',   cat: 'Safety Equipment', sku: 'SE-014', emoji: '🫙', stock: 'In Stock' },
  { id: 15, name: 'Alcohol Tester Device',                       cat: 'Safety Equipment', sku: 'SE-015', emoji: '📟', stock: 'In Stock' },
  { id: 16, name: 'Lifebuoy Ring',                               cat: 'Safety Equipment', sku: 'SE-016', emoji: '🔵', stock: 'In Stock' },

  /* ---- NAVIGATION ---- */
  { id: 17, name: 'G Marine-Guard 7x50 Outdoor Binoculars',      cat: 'Navigation', sku: 'NV-001', emoji: '🔭', stock: 'In Stock' },
  { id: 18, name: 'Holdentools Oil Gauging Tape 15m White Steel', cat: 'Navigation', sku: 'NV-002', emoji: '📏', stock: 'In Stock' },
  { id: 19, name: 'Stainless Steel Measuring Tape',               cat: 'Navigation', sku: 'NV-003', emoji: '📐', stock: 'In Stock' },
  { id: 20, name: 'Water Finding Paste',                          cat: 'Navigation', sku: 'NV-004', emoji: '💧', stock: 'In Stock' },
  { id: 21, name: 'Gasoline / Oil Finding Paste',                 cat: 'Navigation', sku: 'NV-005', emoji: '⛽', stock: 'In Stock' },
  { id: 22, name: 'Oil Sample Bottle with Sticker',               cat: 'Navigation', sku: 'NV-006', emoji: '🧴', stock: 'In Stock' },

  /* ---- ENGINE PARTS ---- */
  { id: 23, name: 'Holdenbond Anti-Seize Compound 450g',          cat: 'Engine Parts', sku: 'EP-001', emoji: '🔩', stock: 'In Stock' },
  { id: 24, name: 'Permatex Form-A-Gasket Sealant No.2 311g',     cat: 'Engine Parts', sku: 'EP-002', emoji: 'EP', stock: 'In Stock' },
  { id: 25, name: 'Holdenseals SG80 Superlite Gasket Sheet',      cat: 'Engine Parts', sku: 'EP-003', emoji: '🟢', stock: 'In Stock' },
  { id: 26, name: 'Brindal Multipurpose Grease-3 15kg',           cat: 'Engine Parts', sku: 'EP-004', emoji: '🪣', stock: 'In Stock' },
  { id: 27, name: 'Holdenbond Silicone Grease 100g',              cat: 'Engine Parts', sku: 'EP-005', emoji: '🫙', stock: 'In Stock' },
  { id: 28, name: 'Lithium Base Grease (HCLN Grease) 25pc',       cat: 'Engine Parts', sku: 'EP-006', emoji: '🪣', stock: 'In Stock' },
  { id: 29, name: 'Holdenflex Walnut Shell Grit 20kg',            cat: 'Engine Parts', sku: 'EP-007', emoji: '🌰', stock: 'In Stock' },
  { id: 30, name: 'SP10 (92 pcs)',                                 cat: 'Engine Parts', sku: 'EP-008', emoji: '🔧', stock: 'In Stock' },
  { id: 31, name: 'SP70 (443 pcs)',                                cat: 'Engine Parts', sku: 'EP-009', emoji: '🔧', stock: 'In Stock' },
  { id: 32, name: 'Alone Absessor Packing (0.5m / 65m / 50m)',    cat: 'Engine Parts', sku: 'EP-010', emoji: '🔩', stock: 'In Stock' },
  { id: 33, name: 'VRLA Mercury Battery',                          cat: 'Engine Parts', sku: 'EP-011', emoji: '🔋', stock: 'In Stock' },

  /* ---- DECK EQUIPMENT ---- */
  { id: 34, name: 'Marine Mooring Ropes (Heavy Duty)',            cat: 'Deck Equipment', sku: 'DE-001', emoji: '🪢', stock: 'In Stock' },
  { id: 35, name: 'Red Cable Seals / Locks',                      cat: 'Deck Equipment', sku: 'DE-002', emoji: '🔐', stock: 'In Stock' },
  { id: 36, name: 'Holdenbond Hatch Cover Tape 20M',              cat: 'Deck Equipment', sku: 'DE-003', emoji: '🟦', stock: 'In Stock' },
  { id: 37, name: 'Holdenbond Heavy Duty Sealing Tape 20M',       cat: 'Deck Equipment', sku: 'DE-004', emoji: '🟦', stock: 'In Stock' },
  { id: 38, name: 'Hatch Cover Tape 300mm',                       cat: 'Deck Equipment', sku: 'DE-005', emoji: '🟦', stock: 'In Stock' },
  { id: 39, name: 'Hatch Cover Tape 75mm x 20m',                 cat: 'Deck Equipment', sku: 'DE-006', emoji: '🟦', stock: 'In Stock' },
  { id: 40, name: 'Hatch Cover Tape 150mm x 20m',                cat: 'Deck Equipment', sku: 'DE-007', emoji: '🟦', stock: 'In Stock' },
  { id: 41, name: 'Hatch Cover Tape 100m',                       cat: 'Deck Equipment', sku: 'DE-008', emoji: '🟦', stock: 'In Stock' },
  { id: 42, name: 'Cable Tie Red',                               cat: 'Deck Equipment', sku: 'DE-009', emoji: '🔴', stock: 'In Stock' },
  { id: 43, name: 'Cable Tie Yellow',                            cat: 'Deck Equipment', sku: 'DE-010', emoji: '🟡', stock: 'In Stock' },
  { id: 44, name: 'Supper Tiger Rope',                           cat: 'Deck Equipment', sku: 'DE-011', emoji: '🪢', stock: 'In Stock' },
  { id: 45, name: 'Mooring Rope 20m',                            cat: 'Deck Equipment', sku: 'DE-012', emoji: '🪢', stock: 'In Stock' },
  { id: 46, name: 'Mooring Rope 18m',                            cat: 'Deck Equipment', sku: 'DE-013', emoji: '🪢', stock: 'In Stock' },

  /* ---- PROVISIONS & STORES ---- */
  { id: 47, name: 'Brightmax Floor Cleaner 5L',                  cat: 'Provisions', sku: 'PR-001', emoji: '🧹', stock: 'In Stock' },
  { id: 48, name: 'Brightmax Wax Stripper 5L',                   cat: 'Provisions', sku: 'PR-002', emoji: '🧴', stock: 'In Stock' },
  { id: 49, name: 'SealXpert Heavy Duty Alkali Cleaner 20L',     cat: 'Provisions', sku: 'PR-003', emoji: '🫧', stock: 'In Stock' },
  { id: 50, name: 'Waterless Hand Cleaner (Marine Grade Gel)',   cat: 'Provisions', sku: 'PR-004', emoji: 'HC', stock: 'In Stock' },
  { id: 51, name: 'Furniture Polish',                            cat: 'Provisions', sku: 'PR-005', emoji: '✨', stock: 'In Stock' },
  { id: 52, name: 'Napkin Tissue',                               cat: 'Provisions', sku: 'PR-006', emoji: '🧻', stock: 'In Stock' },

  /* ---- ELECTRICAL ---- */
  { id: 53, name: 'Lead Flash Light',                            cat: 'Electrical', sku: 'EL-001', emoji: '🔦', stock: 'In Stock' },
  { id: 54, name: 'Koehler BrightStar Vision LED Headlamp 200501', cat: 'Electrical', sku: 'EL-002', emoji: '💡', stock: 'In Stock' },
  { id: 55, name: 'Explosion Head Light',                        cat: 'Electrical', sku: 'EL-003', emoji: '💡', stock: 'In Stock' },
  { id: 56, name: 'Electric Drill 900W',                         cat: 'Electrical', sku: 'EL-004', emoji: '🔌', stock: 'In Stock' },

  /* ---- MAINTENANCE & REPAIR ---- */
  { id: 57, name: 'Holdenbond Express Titanium Putty 454g',      cat: 'Maintenance', sku: 'MN-001', emoji: '🔵', stock: 'In Stock' },
  { id: 58, name: 'Holdenbond Steel Putty HB-SP 454g',           cat: 'Maintenance', sku: 'MN-002', emoji: '🔵', stock: 'In Stock' },
  { id: 59, name: 'Holdenbond Steel Stick HB-SS114 114g',        cat: 'Maintenance', sku: 'MN-003', emoji: '🔵', stock: 'In Stock' },
  { id: 60, name: 'Holdenbond Underwater Putty HB-UWP 454g',     cat: 'Maintenance', sku: 'MN-004', emoji: '🔵', stock: 'In Stock' },
  { id: 61, name: 'Holdenbond HT-Aluminum Putty 454g',           cat: 'Maintenance', sku: 'MN-005', emoji: '🔵', stock: 'In Stock' },
  { id: 62, name: 'Holdenbond Quick Pipe Repair Tape',           cat: 'Maintenance', sku: 'MN-006', emoji: '🔵', stock: 'In Stock' },
  { id: 63, name: 'DC-Chem Wear Resistant Putty WR-2',           cat: 'Maintenance', sku: 'MN-007', emoji: '⬛', stock: 'In Stock' },
  { id: 64, name: 'SealXpert Repair Putty (Various)',            cat: 'Maintenance', sku: 'MN-008', emoji: '⬛', stock: 'In Stock' },
  { id: 65, name: 'Devcon Putty 5 Min',                          cat: 'Maintenance', sku: 'MN-009', emoji: '⬛', stock: 'In Stock' },
  { id: 66, name: 'Devcon 102 Normal',                           cat: 'Maintenance', sku: 'MN-010', emoji: '⬛', stock: 'In Stock' },
  { id: 67, name: 'Devcon 102 Black',                            cat: 'Maintenance', sku: 'MN-011', emoji: '⬛', stock: 'In Stock' },
  { id: 68, name: 'Stainless Steel Devcon',                      cat: 'Maintenance', sku: 'MN-012', emoji: '⬛', stock: 'In Stock' },
  { id: 69, name: 'Loctite 495',                                 cat: 'Maintenance', sku: 'MN-013', emoji: '🟡', stock: 'In Stock' },
  { id: 70, name: 'Leak Stopping Tape',                          cat: 'Maintenance', sku: 'MN-014', emoji: '🔵', stock: 'In Stock' },
  { id: 71, name: 'Super Duty Mouldable 25kg',                   cat: 'Maintenance', sku: 'MN-015', emoji: '⬜', stock: 'In Stock' },
  { id: 72, name: 'Insulation Putty',                            cat: 'Maintenance', sku: 'MN-016', emoji: '⬜', stock: 'In Stock' },
  { id: 73, name: 'Pipe Repair Kits',                            cat: 'Maintenance', sku: 'MN-017', emoji: '🔧', stock: 'In Stock' },
  { id: 74, name: 'Silicone Sealant',                            cat: 'Maintenance', sku: 'MN-018', emoji: 'SL', stock: 'In Stock' },

  /* ---- PUBLICATIONS & CHARTS ---- */
  { id: 75, name: 'Ship Navigation Charts',  cat: 'Publications', sku: 'PB-001', emoji: 'NC', stock: 'In Stock' },
  { id: 76, name: 'Admiralty Publications',  cat: 'Publications', sku: 'PB-002', emoji: 'AP', stock: 'In Stock' },
];

let filteredProducts = [...PRODUCTS];
let cart = [];
let activeCategory = 'All';

function fmt(n) { return 'Contact us for price'; }

function renderProducts() {
  const grid = document.getElementById('productsGrid');
  if (!grid) return;
  document.getElementById('shopCount').textContent =
    `Showing ${filteredProducts.length} product${filteredProducts.length !== 1 ? 's' : ''}`;
  grid.innerHTML = filteredProducts.map(p => {
    const hasImg = typeof PRODUCT_IMAGES !== 'undefined' && PRODUCT_IMAGES[p.id];
    const imgSrc = hasImg ? PRODUCT_IMAGES[p.id] : getPlaceholderImg(p.name, p.cat);
    const imgHTML = `<img src="${imgSrc}" alt="${p.name}" style="width:100%;height:180px;object-fit:cover;display:block;">`;
    return `
    <div class="product-card">
      <div class="product-img" style="padding:0;overflow:hidden;height:180px;position:relative;">
        ${imgHTML}
        <div class="product-badge" style="position:absolute;top:10px;left:10px;">
          <span class="badge badge-green">${p.stock}</span>
        </div>
      </div>
      <div class="product-body">
        <div class="product-cat">${p.cat}</div>
        <div class="product-name">${p.name}</div>
        <div class="product-sku">SKU: ${p.sku}</div>
        <div class="product-footer">
          <div class="product-price" style="font-size:12px;color:var(--gray)">Request quote</div>
          <button class="add-btn" onclick="addToCart(${p.id})">Enquire</button>
        </div>
      </div>
    </div>`;
  }).join('');
}


function filterProducts(cat, el) {
  document.querySelectorAll('.sidebar-cat').forEach(c => c.classList.remove('active'));
  el.classList.add('active');
  activeCategory = cat;
  filteredProducts = cat === 'All' ? [...PRODUCTS] : PRODUCTS.filter(p => p.cat === cat);
  renderProducts();
}

function filterStock(type, el) {
  document.querySelectorAll('.sidebar-cat').forEach(c => c.classList.remove('active'));
  el.classList.add('active');
  filteredProducts = [...PRODUCTS].filter(p => activeCategory === 'All' || p.cat === activeCategory);
  renderProducts();
}

function applyPriceFilter() { renderProducts(); }

function sortProducts(val) {
  if (val === 'name') filteredProducts.sort((a, b) => a.name.localeCompare(b.name));
  else filteredProducts = [...PRODUCTS].filter(p => activeCategory === 'All' || p.cat === activeCategory);
  renderProducts();
}

function addToCart(id) {
  const product = PRODUCTS.find(p => p.id === id);
  if (!product) return;
  if (!cart.find(c => c.id === id)) cart.push(product);
  document.getElementById('cartCount').textContent = cart.length;
  document.getElementById('cartBar').classList.add('visible');
  showToast(`${product.name} added to enquiry list!`, 'success');
}

function viewCart() {
  if (cart.length === 0) return showToast('Your enquiry list is empty.', '');
  const items = cart.map(p => `• ${p.name} (${p.sku})`).join('\n');
  alert(`Enquiry List (${cart.length} items):\n\n${items}\n\nPlease contact us:\nPhone: +234 8033025022\nEmail: ceebe.monica@gmail.com\nAddress: 17 Liverpool Road, Apapa, Lagos`);
}
