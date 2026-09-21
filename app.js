/**
 * NexusPOS PRO - Universal Product Sales Terminal
 * Pure Vanilla JavaScript Architecture
 * Designed for Mobile, Tablet, Laptop & Desktop Screens
 */

// ==========================================================================
// 1. DATA INITIALIZATION: UNIVERSAL RETAIL PRODUCTS & CUSTOMERS
// ==========================================================================

const RETAIL_PRODUCTS = [
  // Electronics & Gadgets
  {
    id: "prod-el-001",
    name: "Wireless ANC Bluetooth Earbuds Pro",
    category: "electronics",
    brand: "Sony",
    price: 34.99,
    wholesalePrice: 24.00,
    sku: "EL-001",
    barcode: "8901001",
    stock: 35,
    unit: "Pcs",
    warranty: "1 Yr Warranty",
    image: "https://images.unsplash.com/photo-1590658268037-6bf12165a8df?auto=format&fit=crop&w=300&q=80"
  },
  {
    id: "prod-el-002",
    name: "20,000mAh Fast Charging Power Bank",
    category: "electronics",
    brand: "Anker",
    price: 28.50,
    wholesalePrice: 19.50,
    sku: "EL-002",
    barcode: "8901002",
    stock: 22,
    unit: "Pcs",
    warranty: "6 Mo Warranty",
    image: "https://images.unsplash.com/photo-1609091839311-d5365f9ff1c5?auto=format&fit=crop&w=300&q=80"
  },
  {
    id: "prod-el-003",
    name: "Ergonomic Silent Wireless Mouse",
    category: "electronics",
    brand: "Logitech",
    price: 18.99,
    wholesalePrice: 12.00,
    sku: "EL-003",
    barcode: "8901003",
    stock: 42,
    unit: "Pcs",
    warranty: "1 Yr Warranty",
    image: "https://images.unsplash.com/photo-1527864550417-7fd91fc51a46?auto=format&fit=crop&w=300&q=80"
  },
  {
    id: "prod-el-004",
    name: "Smart LED Desk Lamp with Dimmer",
    category: "electronics",
    brand: "Philips",
    price: 26.00,
    wholesalePrice: 18.00,
    sku: "EL-004",
    barcode: "8901004",
    stock: 4, // Low Stock
    unit: "Pcs",
    warranty: "1 Yr Warranty",
    image: "https://images.unsplash.com/photo-1507473885765-e6ed057f782c?auto=format&fit=crop&w=300&q=80"
  },

  // Fashion & Apparel
  {
    id: "prod-fa-001",
    name: "Premium Breathable Cotton Polo Shirt",
    category: "fashion",
    brand: "Polo Ralph",
    price: 22.00,
    wholesalePrice: 14.50,
    sku: "FA-001",
    barcode: "8902001",
    stock: 50,
    unit: "Pcs",
    warranty: "7 Days Return",
    image: "https://images.unsplash.com/photo-1581655353564-df123a1eb820?auto=format&fit=crop&w=300&q=80"
  },
  {
    id: "prod-fa-002",
    name: "Stretch Denim Jeans Slim Fit (Navy)",
    category: "fashion",
    brand: "Levi's",
    price: 38.00,
    wholesalePrice: 26.00,
    sku: "FA-002",
    barcode: "8902002",
    stock: 28,
    unit: "Pcs",
    warranty: "7 Days Return",
    image: "https://images.unsplash.com/photo-1542272604-787c3835535d?auto=format&fit=crop&w=300&q=80"
  },
  {
    id: "prod-fa-003",
    name: "Genuine Leather Bi-fold Men's Wallet",
    category: "fashion",
    brand: "Fossil",
    price: 19.99,
    wholesalePrice: 13.00,
    sku: "FA-003",
    barcode: "8902003",
    stock: 15,
    unit: "Pcs",
    warranty: "Official Brand",
    image: "https://images.unsplash.com/photo-1627123424574-724758594e93?auto=format&fit=crop&w=300&q=80"
  },
  {
    id: "prod-fa-004",
    name: "Breathable Lightweight Running Shoes",
    category: "fashion",
    brand: "Nike",
    price: 49.50,
    wholesalePrice: 33.00,
    sku: "FA-004",
    barcode: "8902004",
    stock: 8,
    unit: "Pairs",
    warranty: "1 Mo Service",
    image: "https://images.unsplash.com/photo-1542291026-7eec264c27ff?auto=format&fit=crop&w=300&q=80"
  },

  // Beauty & Cosmetics
  {
    id: "prod-be-001",
    name: "Vitamin C Radiance Booster Face Serum 30ml",
    category: "beauty",
    brand: "The Ordinary",
    price: 16.50,
    wholesalePrice: 10.50,
    sku: "CS-001",
    barcode: "8903001",
    stock: 30,
    unit: "Box",
    warranty: "100% Original",
    image: "https://images.unsplash.com/photo-1620916566398-39f1143ab7be?auto=format&fit=crop&w=300&q=80"
  },
  {
    id: "prod-be-002",
    name: "Velvet Matte Long-Stay Hydrating Lipstick",
    category: "beauty",
    brand: "MAC",
    price: 12.99,
    wholesalePrice: 8.00,
    sku: "CS-002",
    barcode: "8903002",
    stock: 45,
    unit: "Pcs",
    warranty: "Authentic",
    image: "https://images.unsplash.com/photo-1586495777744-4413f21062fa?auto=format&fit=crop&w=300&q=80"
  },
  {
    id: "prod-be-003",
    name: "Daily UV Defense Sunscreen SPF 50+",
    category: "beauty",
    brand: "La Roche-Posay",
    price: 14.25,
    wholesalePrice: 9.50,
    sku: "CS-003",
    barcode: "8903003",
    stock: 25,
    unit: "Tube",
    warranty: "Imported",
    image: "https://images.unsplash.com/photo-1556228720-195a672e8a03?auto=format&fit=crop&w=300&q=80"
  },

  // Super Shop & Groceries
  {
    id: "prod-gr-001",
    name: "Organic Cold Pressed Olive Oil 1L",
    category: "groceries",
    brand: "Bertolli",
    price: 14.90,
    wholesalePrice: 11.00,
    sku: "GR-001",
    barcode: "8904001",
    stock: 35,
    unit: "Bottle",
    warranty: "Fresh Batch",
    image: "https://images.unsplash.com/photo-1474979266404-7eaacbcd87c5?auto=format&fit=crop&w=300&q=80"
  },
  {
    id: "prod-gr-002",
    name: "Premium Royal Basmati Rice (5kg Bag)",
    category: "groceries",
    brand: "Daawat",
    price: 13.50,
    wholesalePrice: 10.00,
    sku: "GR-002",
    barcode: "8904002",
    stock: 20,
    unit: "Bag",
    warranty: "Export Grade",
    image: "https://images.unsplash.com/photo-1586201375761-83865001e31c?auto=format&fit=crop&w=300&q=80"
  },
  {
    id: "prod-gr-003",
    name: "Pure Natural Wildflower Honey Jar 500g",
    category: "groceries",
    brand: "Dabur",
    price: 9.75,
    wholesalePrice: 6.80,
    sku: "GR-003",
    barcode: "8904003",
    stock: 3, // Low Stock
    unit: "Jar",
    warranty: "Pure Grade",
    image: "https://images.unsplash.com/photo-1587049352846-4a222e784d38?auto=format&fit=crop&w=300&q=80"
  },

  // Stationery & Office
  {
    id: "prod-st-001",
    name: "Smooth Flow Gel Pen Pack (10 Pcs Box)",
    category: "stationery",
    brand: "Pilot",
    price: 5.99,
    wholesalePrice: 3.80,
    sku: "ST-001",
    barcode: "8905001",
    stock: 80,
    unit: "Box",
    warranty: "Brand New",
    image: "https://images.unsplash.com/photo-1583485088034-697b5bc54ccd?auto=format&fit=crop&w=300&q=80"
  },
  {
    id: "prod-st-002",
    name: "Hardcover Executive A5 Ruled Notebook",
    category: "stationery",
    brand: "Moleskine",
    price: 8.50,
    wholesalePrice: 5.20,
    sku: "ST-002",
    barcode: "8905002",
    stock: 32,
    unit: "Pcs",
    warranty: "192 Pages",
    image: "https://images.unsplash.com/photo-1544716278-ca5e3f4abd8c?auto=format&fit=crop&w=300&q=80"
  },

  // Hardware & Tools
  {
    id: "prod-hw-001",
    name: "Precision Magnetic Screwdriver 32-in-1 Kit",
    category: "hardware",
    brand: "Bosch",
    price: 24.50,
    wholesalePrice: 16.00,
    sku: "HW-001",
    barcode: "8906001",
    stock: 18,
    unit: "Set",
    warranty: "Lifetime Tool",
    image: "https://images.unsplash.com/photo-1581147036324-c17ac41dfa6c?auto=format&fit=crop&w=300&q=80"
  },
  {
    id: "prod-hw-002",
    name: "Digital Auto-Ranging Multimeter with Probes",
    category: "hardware",
    brand: "Fluke",
    price: 32.00,
    wholesalePrice: 22.00,
    sku: "HW-002",
    barcode: "8906002",
    stock: 5, // Low Stock
    unit: "Unit",
    warranty: "1 Yr Warranty",
    image: "https://images.unsplash.com/photo-1581092160607-ee22621dd758?auto=format&fit=crop&w=300&q=80"
  }
];

const INITIAL_CUSTOMERS = [
  { id: "cust-01", name: "Rahim Chowdhury", phone: "+880 1711-223344", points: 240, dueBalance: 0, deposit: 150.00, invoiceCount: 18, tier: "Gold VIP" },
  { id: "cust-02", name: "Tanvir Ahmed", phone: "+880 1819-998877", points: 450, dueBalance: 120.50, deposit: 0.00, invoiceCount: 24, tier: "Platinum" },
  { id: "cust-03", name: "Sarah Jenkins", phone: "+1 (555) 234-5678", points: 120, dueBalance: 0, deposit: 50.00, invoiceCount: 8, tier: "Silver" },
  { id: "cust-04", name: "Michael Chang", phone: "+1 (555) 876-5432", points: 65, dueBalance: 45.00, deposit: 25.00, invoiceCount: 5, tier: "Bronze" }
];

const BRANCH_DETAILS = {
  "Main Branch (Downtown HQ)": {
    title: "NEXUS RETAIL SUPERSTORE",
    address: "Plot #42, Commercial Zone, City Center",
    phone: "+1 (800) 555-0199",
    bin: "BIN/VAT #99283719"
  },
  "Airport Express Store": {
    title: "NEXUS EXPRESS TERMINAL",
    address: "Terminal 3 Departure Concourse, Gate 14",
    phone: "+1 (800) 555-0200",
    bin: "BIN/VAT #99283720"
  },
  "North City Showroom": {
    title: "NEXUS NORTH CITY SHOWROOM",
    address: "North Avenue Mall, Level 2, Suite 210",
    phone: "+1 (800) 555-0201",
    bin: "BIN/VAT #99283721"
  },
  "Uptown Mega Store": {
    title: "NEXUS UPTOWN MEGA STORE",
    address: "88 Grand Blvd, Uptown Fashion Arcade",
    phone: "+1 (800) 555-0202",
    bin: "BIN/VAT #99283722"
  }
};

const PAYMENT_ACCOUNTS_META = {
  cash_register: { id: "cash_register", name: "Cash Drawer (Drawer #01)", method: "cash" },
  city_bank: { id: "city_bank", name: "City Bank (Corporate ****8821)", method: "card" },
  brac_bank: { id: "brac_bank", name: "BRAC Bank (Merchant ****4419)", method: "card" },
  dbbl: { id: "dbbl", name: "DBBL (Core ****1092)", method: "bank" },
  bkash: { id: "bkash", name: "bKash (Merchant 01700-000000)", method: "mobile" },
  nagad: { id: "nagad", name: "Nagad (Enterprise 01800-000000)", method: "mobile" }
};

const PAYMENT_TERMS_META = {
  standard: "Standard Retail T&C (7 Days Return / Exchange)",
  warranty: "Electronics Warranty (1-Year Official Warranty)",
  final_sale: "Final Clearance Sale (Non-Returnable / No Refund)",
  wholesale: "Wholesale Credit Terms (Net 15 Days Payment)",
  grocery: "FMCG & Groceries (24h Replacement for Perishables)"
};

// ==========================================================================
// 2. STATE MANAGEMENT
// ==========================================================================
const POS_STATE = {
  products: [...RETAIL_PRODUCTS],
  customers: [...INITIAL_CUSTOMERS],
  cart: [], // { id, name, image, price, wholesalePrice, sku, qty, discount, discountType, note, warranty, imei, unit }
  heldOrders: [],
  pricingMode: "retail", // "retail" or "wholesale"
  shippingCost: 0,
  activeCatalogTab: "all", // "all", "category", "brand"
  activeCategory: "all",
  activeBrand: "all",
  searchQuery: "",
  activeCustomer: {
    name: "Walk-in Customer",
    phone: "General Retail Sale",
    points: 0,
    dueBalance: 0,
    deposit: 0,
    invoiceCount: 0,
    isWalkIn: true
  },
  selectedBranch: "Main Branch (Downtown HQ)",
  selectedBiller: "Alex Smith (Terminal 01)",
  selectedSalesman: "Alex Smith (Sales Rep #101)",
  orderReference: "",
  activeImeiItemId: null,
  cartDiscountType: "percent", // "percent" or "flat"
  cartDiscountValue: 0,
  appliedCoupon: null, // { code, type, value, desc }
  taxRate: 0.05, // 5% VAT
  taxEnabled: true,
  currency: "USD",
  currencySymbol: "$",
  soundEnabled: true,
  currentOrderNumber: generateOrderNumber(),
  shiftSales: 1480.50,
  shiftInvoices: 38,
  shiftFloat: 200.00,
  shiftCashSales: 820.50,
  shiftCardSales: 360.00,
  shiftMobileSales: 200.00,
  shiftDueSales: 100.00,
  activeNumpadTarget: null, // { type: "item-qty", id: string } or { type: "cash" }
  activeDiscountTargetItemId: null,
  activeNoteTargetItemId: null,
  itemDiscountType: "percent",
  selectedPaymentMethod: "cash", // "cash", "card", "mobile", "due"
  paymentRows: [
    { id: 1, method: "cash", account: "cash_register", amount: 0, trxRef: "" }
  ],
  salesNote: "",
  paymentNote: "",
  termsAndConditions: "standard",
  tenderedCash: 0,
  mobileActiveTab: "catalog", // "catalog" or "cart"
  cartDensity: "compact", // "compact" (dense table view for 20-50+ items) or "comfortable"
  cartFilterQuery: "",
  cartSortBy: "recent",
  lastUpdatedItemId: null,
  isCatalogCollapsed: false,
  activeProductEditItemId: null,
  productEditDiscMode: "percent",
  recentReceipts: [
    {
      invoiceNum: "#ORD-1045",
      date: "2026-09-20 04:15 PM",
      customer: "Rahim Chowdhury",
      customerPhone: "+880 1711-223344",
      branch: "Main Branch (Downtown HQ)",
      biller: "Alex Smith (Terminal 01)",
      salesman: "Alex Smith (#101)",
      reference: "REF-9812",
      itemsCount: 3,
      grandTotal: 145.50,
      paymentMethod: "CASH",
      tendered: 150.00,
      changeDue: 4.50,
      pricingMode: "Retail Sale",
      subtotal: 138.57,
      discountAmount: 0,
      taxAmount: 6.93,
      items: [
        { id: "prod-el-001", name: "Premium Wireless Noise-Cancelling Headphones", price: 89.99, qty: 1, discount: 0, discountType: "percent", warranty: "1 Yr Warranty", sku: "EL-001", imei: "356891084920194" },
        { id: "prod-fa-001", name: "Classic 100% Cotton Crewneck T-Shirt", price: 22.00, qty: 2, discount: 0, discountType: "percent", warranty: "7 Days Return", sku: "FA-001" }
      ]
    },
    {
      invoiceNum: "#ORD-1046",
      date: "2026-09-20 05:40 PM",
      customer: "Tanvir Ahmed",
      customerPhone: "+880 1819-998877",
      branch: "Main Branch (Downtown HQ)",
      biller: "Alex Smith (Terminal 01)",
      salesman: "Sarah Connor (#102)",
      reference: "PO-4421",
      itemsCount: 1,
      grandTotal: 120.50,
      paymentMethod: "DUE",
      tendered: 0,
      changeDue: 0,
      pricingMode: "Retail Sale",
      subtotal: 114.76,
      discountAmount: 0,
      taxAmount: 5.74,
      items: [
        { id: "prod-el-002", name: "Ultra HD Smart 4K Curved LED Display 32-inch", price: 249.00, qty: 1, discount: 50, discountType: "flat", warranty: "2 Years Extended", sku: "EL-002", imei: "882940192849102" }
      ]
    },
    {
      invoiceNum: "#ORD-1047",
      date: "2026-09-21 11:20 AM",
      customer: "Sarah Jenkins",
      customerPhone: "+1 (555) 234-5678",
      branch: "Airport Express Store",
      biller: "Sarah Connor (Terminal 02)",
      salesman: "Emma Watson (#104)",
      reference: "AIR-7721",
      itemsCount: 2,
      grandTotal: 58.20,
      paymentMethod: "CARD",
      tendered: 58.20,
      changeDue: 0,
      pricingMode: "Retail Sale",
      subtotal: 55.43,
      discountAmount: 0,
      taxAmount: 2.77,
      items: [
        { id: "prod-be-001", name: "Vitamin C Radiance Booster Face Serum 30ml", price: 16.50, qty: 2, discount: 0, discountType: "percent", warranty: "Authentic", sku: "CS-001" },
        { id: "prod-hw-001", name: "Precision Magnetic Screwdriver 32-in-1 Kit", price: 24.50, qty: 1, discount: 0, discountType: "percent", warranty: "Lifetime Tool", sku: "HW-001" }
      ]
    }
  ],
  recentTransactions: [
    {
      trxId: "TRX-94812",
      orderRef: "#ORD-1045",
      timestamp: "2026-09-20 04:15 PM",
      customer: "Rahim Chowdhury",
      biller: "Alex Smith",
      method: "CASH",
      amount: 145.50,
      change: 4.50,
      status: "Settled"
    },
    {
      trxId: "TRX-94813",
      orderRef: "#ORD-1046",
      timestamp: "2026-09-20 05:40 PM",
      customer: "Tanvir Ahmed",
      biller: "Alex Smith",
      method: "DUE",
      amount: 120.50,
      change: 0.00,
      status: "Due Ledger"
    },
    {
      trxId: "TRX-94814",
      orderRef: "#ORD-1047",
      timestamp: "2026-09-21 11:20 AM",
      customer: "Sarah Jenkins",
      biller: "Sarah Connor",
      method: "CARD",
      amount: 58.20,
      change: 0.00,
      status: "Settled"
    },
    {
      trxId: "TRX-94815",
      orderRef: "#ORD-1044",
      timestamp: "2026-09-20 02:10 PM",
      customer: "Walk-in Customer",
      biller: "David Miller",
      method: "MOBILE",
      amount: 85.00,
      change: 0.00,
      status: "Settled"
    }
  ]
};

function generateOrderNumber() {
  const rand = Math.floor(1000 + Math.random() * 9000);
  return `#ORD-${rand}`;
}

// ==========================================================================
// 3. SYNTHESIZED WEB AUDIO ENGINE (ZERO ASSET DEPENDENCY)
// ==========================================================================
class SoundFX {
  constructor() {
    this.ctx = null;
  }

  init() {
    if (!this.ctx) {
      const AudioCtx = window.AudioContext || window.webkitAudioContext;
      this.ctx = new AudioCtx();
    }
  }

  playBeep() {
    if (!POS_STATE.soundEnabled) return;
    try {
      this.init();
      const osc = this.ctx.createOscillator();
      const gain = this.ctx.createGain();
      osc.type = "sine";
      osc.frequency.setValueAtTime(1750, this.ctx.currentTime);
      gain.gain.setValueAtTime(0.15, this.ctx.currentTime);
      gain.gain.exponentialRampToValueAtTime(0.001, this.ctx.currentTime + 0.07);
      osc.connect(gain);
      gain.connect(this.ctx.destination);
      osc.start();
      osc.stop(this.ctx.currentTime + 0.07);
    } catch (e) {
      console.warn("Audio error:", e);
    }
  }

  playSuccess() {
    if (!POS_STATE.soundEnabled) return;
    try {
      this.init();
      const now = this.ctx.currentTime;
      [523.25, 659.25, 783.99, 1046.50].forEach((freq, i) => {
        const osc = this.ctx.createOscillator();
        const gain = this.ctx.createGain();
        osc.type = "triangle";
        osc.frequency.setValueAtTime(freq, now + i * 0.06);
        gain.gain.setValueAtTime(0.18, now + i * 0.06);
        gain.gain.exponentialRampToValueAtTime(0.001, now + i * 0.06 + 0.25);
        osc.connect(gain);
        gain.connect(this.ctx.destination);
        osc.start(now + i * 0.06);
        osc.stop(now + i * 0.06 + 0.25);
      });
    } catch (e) {
      console.warn("Audio error:", e);
    }
  }

  playPop() {
    if (!POS_STATE.soundEnabled) return;
    try {
      this.init();
      const osc = this.ctx.createOscillator();
      const gain = this.ctx.createGain();
      osc.type = "sine";
      osc.frequency.setValueAtTime(440, this.ctx.currentTime);
      osc.frequency.exponentialRampToValueAtTime(220, this.ctx.currentTime + 0.08);
      gain.gain.setValueAtTime(0.12, this.ctx.currentTime);
      gain.gain.exponentialRampToValueAtTime(0.001, this.ctx.currentTime + 0.08);
      osc.connect(gain);
      gain.connect(this.ctx.destination);
      osc.start();
      osc.stop(this.ctx.currentTime + 0.08);
    } catch (e) {
      console.warn("Audio error:", e);
    }
  }

  playError() {
    if (!POS_STATE.soundEnabled) return;
    try {
      this.init();
      const osc = this.ctx.createOscillator();
      const gain = this.ctx.createGain();
      osc.type = "sawtooth";
      osc.frequency.setValueAtTime(260, this.ctx.currentTime);
      gain.gain.setValueAtTime(0.16, this.ctx.currentTime);
      gain.gain.exponentialRampToValueAtTime(0.001, this.ctx.currentTime + 0.16);
      osc.connect(gain);
      gain.connect(this.ctx.destination);
      osc.start();
      osc.stop(this.ctx.currentTime + 0.16);
    } catch (e) {
      console.warn("Audio error:", e);
    }
  }
}

const soundManager = new SoundFX();

// ==========================================================================
// 4. DOM REFERENCES
// ==========================================================================
const DOM = {
  liveClock: document.getElementById("liveClock"),
  headerTotalSales: document.getElementById("headerTotalSales"),
  headerInvoiceCount: document.getElementById("headerInvoiceCount"),
  branchSelect: document.getElementById("branchSelect"),
  branchAddressDisplay: document.getElementById("branchAddressDisplay"),
  billerSelect: document.getElementById("billerSelect"),
  salesmanSelect: document.getElementById("salesmanSelect"),
  orderLiveDateTime: document.getElementById("orderLiveDateTime"),
  btnOpenRecentReceipts: document.getElementById("btnOpenRecentReceipts"),
  btnOpenTransactionsModal: document.getElementById("btnOpenTransactionsModal"),
  currencySelect: document.getElementById("currencySelect"),
  soundToggleBtn: document.getElementById("soundToggleBtn"),
  soundIcon: document.getElementById("soundIcon"),
  btnOpenHeldOrders: document.getElementById("btnOpenHeldOrders"),
  heldOrdersBadge: document.getElementById("heldOrdersBadge"),
  btnOpenShortcuts: document.getElementById("btnOpenShortcuts"),

  // Mobile View Elements
  posWorkspace: document.getElementById("posWorkspace"),
  btnMobileTabCatalog: document.getElementById("btnMobileTabCatalog"),
  btnMobileTabCart: document.getElementById("btnMobileTabCart"),
  btnMobileTabReceipts: document.getElementById("btnMobileTabReceipts"),
  btnMobileTabTransactions: document.getElementById("btnMobileTabTransactions"),
  mobileCartCountBadge: document.getElementById("mobileCartCountBadge"),
  mobileStickyCartBar: document.getElementById("mobileStickyCartBar"),
  mobileBarItemCount: document.getElementById("mobileBarItemCount"),
  mobileBarTotalPrice: document.getElementById("mobileBarTotalPrice"),
  btnMobileGoToCart: document.getElementById("btnMobileGoToCart"),
  headerMetaGroup: document.getElementById("headerMetaGroup"),
  btnToggleMobileMeta: document.getElementById("btnToggleMobileMeta"),
  mobileStoreLabel: document.getElementById("mobileStoreLabel"),
  btnToggleLeftSidebar: document.getElementById("btnToggleLeftSidebar"),
  btnCloseLeftSidebar: document.getElementById("btnCloseLeftSidebar"),
  posLeftSidebar: document.getElementById("posLeftSidebar"),
  posLeftSidebarBackdrop: document.getElementById("posLeftSidebarBackdrop"),
  cashierBadgeHeader: document.getElementById("cashierBadgeHeader"),

  // Catalog Sidebar Elements
  salesCatalogSection: document.getElementById("salesCatalogSection"),
  btnToggleCatalogSidebar: document.getElementById("btnToggleCatalogSidebar"),
  btnReopenCatalogFloating: document.getElementById("btnReopenCatalogFloating"),
  productSearchInput: document.getElementById("productSearchInput"),
  barcodeStatusBtn: document.getElementById("barcodeStatusBtn"),
  btnOpenCustomItem: document.getElementById("btnOpenCustomItem"),
  catalogModeSwitcher: document.getElementById("catalogModeSwitcher"),
  tabCatalogAll: document.getElementById("tabCatalogAll"),
  tabCatalogCategory: document.getElementById("tabCatalogCategory"),
  tabCatalogBrand: document.getElementById("tabCatalogBrand"),
  badgeAllCount: document.getElementById("badgeAllCount"),
  badgeCatCount: document.getElementById("badgeCatCount"),
  badgeBrandCount: document.getElementById("badgeBrandCount"),
  catalogActiveFilterBar: document.getElementById("catalogActiveFilterBar"),
  btnFilterBack: document.getElementById("btnFilterBack"),
  filterBackLabel: document.getElementById("filterBackLabel"),
  filterTypeTag: document.getElementById("filterTypeTag"),
  filterNameTag: document.getElementById("filterNameTag"),
  filterCountChip: document.getElementById("filterCountChip"),
  btnClearCatalogFilter: document.getElementById("btnClearCatalogFilter"),
  viewProductsGrid: document.getElementById("viewProductsGrid"),
  productsGrid: document.getElementById("productsGrid"),
  catalogEmptyState: document.getElementById("catalogEmptyState"),
  viewCategoriesGrid: document.getElementById("viewCategoriesGrid"),
  categoryCardsGrid: document.getElementById("categoryCardsGrid"),
  viewBrandsGrid: document.getElementById("viewBrandsGrid"),
  brandCardsGrid: document.getElementById("brandCardsGrid"),

  // Right Section & Cart
  currentOrderNumber: document.getElementById("currentOrderNumber"),
  orderReferenceInputDeck: document.getElementById("orderReferenceInputDeck"),
  btnGenerateRefNumber: document.getElementById("btnGenerateRefNumber"),
  cartTotalItemsCountBadge: document.getElementById("cartTotalItemsCountBadge"),
  cartUniqueLinesBadge: document.getElementById("cartUniqueLinesBadge"),
  cartTotalUnitsCount: document.getElementById("cartTotalUnitsCount"),
  btnToggleCartDensity: document.getElementById("btnToggleCartDensity"),
  densityIcon: document.getElementById("densityIcon"),
  densityText: document.getElementById("densityText"),
  cartSearchFilterInput: document.getElementById("cartSearchFilterInput"),
  btnClearCartSearch: document.getElementById("btnClearCartSearch"),
  cartSortSelect: document.getElementById("cartSortSelect"),
  pricingModeSwitch: document.getElementById("pricingModeSwitch"),
  btnCustomerSelector: document.getElementById("btnCustomerSelector"),
  customerSelectorWrapper: document.getElementById("customerSelectorWrapper"),
  customerDropdownMenu: document.getElementById("customerDropdownMenu"),
  custDropdownSearchInput: document.getElementById("custDropdownSearchInput"),
  btnClearCustDropdownSearch: document.getElementById("btnClearCustDropdownSearch"),
  custDropdownList: document.getElementById("custDropdownList"),
  btnDropdownOpenAddCustomer: document.getElementById("btnDropdownOpenAddCustomer"),
  custDropdownArrow: document.getElementById("custDropdownArrow"),
  btnQuickAddCustomer: document.getElementById("btnQuickAddCustomer"),
  btnResetWalkIn: document.getElementById("btnResetWalkIn"),
  selectedCustomerName: document.getElementById("selectedCustomerName"),
  selectedCustomerPhone: document.getElementById("selectedCustomerPhone"),
  customerPointsBadge: document.getElementById("customerPointsBadge"),
  customerPointsValue: document.getElementById("customerPointsValue"),
  customerDueBadge: document.getElementById("customerDueBadge"),
  customerDueValue: document.getElementById("customerDueValue"),
  btnHoldCart: document.getElementById("btnHoldCart"),
  btnClearCart: document.getElementById("btnClearCart"),
  cartTableHead: document.getElementById("cartTableHead"),
  cartItemsList: document.getElementById("cartItemsList"),
  cartEmptyState: document.getElementById("cartEmptyState"),

  // Summary & Checkout
  summaryTotalUnits: document.getElementById("summaryTotalUnits"),
  summarySubtotal: document.getElementById("summarySubtotal"),
  summaryDiscountCell: document.getElementById("summaryDiscountCell"),
  summaryDiscountLabel: document.getElementById("summaryDiscountLabel"),
  summaryDiscountAmount: document.getElementById("summaryDiscountAmount"),
  summaryDiscountInput: document.getElementById("summaryDiscountInput"),
  btnToggleOrderDiscMode: document.getElementById("btnToggleOrderDiscMode"),
  summaryCourierRow: document.getElementById("summaryCourierRow"),
  summaryCourierFee: document.getElementById("summaryCourierFee"),
  summaryShippingInput: document.getElementById("summaryShippingInput"),
  summaryShippingPrefix: document.getElementById("summaryShippingPrefix"),
  vatRateSelect: document.getElementById("vatRateSelect"),
  summaryTax: document.getElementById("summaryTax"),
  cartCouponInput: document.getElementById("cartCouponInput"),
  btnApplyCoupon: document.getElementById("btnApplyCoupon"),
  appliedCouponTag: document.getElementById("appliedCouponTag"),
  appliedCouponText: document.getElementById("appliedCouponText"),
  btnRemoveCoupon: document.getElementById("btnRemoveCoupon"),
  orderEarnedPointsBadge: document.getElementById("orderEarnedPointsBadge"),
  orderEarnedPoints: document.getElementById("orderEarnedPoints"),
  summaryGrandTotal: document.getElementById("summaryGrandTotal"),
  btnTriggerPayment: document.getElementById("btnTriggerPayment"),

  // Payment Modal
  paymentModalOverlay: document.getElementById("paymentModalOverlay"),
  btnClosePayModal: document.getElementById("btnClosePayModal"),
  btnCancelPayment: document.getElementById("btnCancelPayment"),
  modalCustomerProfileDeck: document.getElementById("modalCustomerProfileDeck"),
  modalCustProfileName: document.getElementById("modalCustProfileName"),
  modalCustProfileTier: document.getElementById("modalCustProfileTier"),
  modalCustProfilePhone: document.getElementById("modalCustProfilePhone"),
  modalCustInvoicesCount: document.getElementById("modalCustInvoicesCount"),
  modalCustPreviousDue: document.getElementById("modalCustPreviousDue"),
  modalCustDepositBalance: document.getElementById("modalCustDepositBalance"),
  modalCustRunningPoints: document.getElementById("modalCustRunningPoints"),
  modalPayableTotal: document.getElementById("modalPayableTotal"),
  modalTotalTendered: document.getElementById("modalTotalTendered"),
  modalFinancialStatusTile: document.getElementById("modalFinancialStatusTile"),
  modalStatusLabel: document.getElementById("modalStatusLabel"),
  modalChangeDue: document.getElementById("modalChangeDue"),
  modalOrderBadge: document.getElementById("modalOrderBadge"),
  modalCustomerBadge: document.getElementById("modalCustomerBadge"),
  cashTenderGroup: document.getElementById("cashTenderGroup"),
  cashReceivedInput: document.getElementById("cashReceivedInput"),
  modalCurrencyPrefix: document.getElementById("modalCurrencyPrefix"),
  paymentRowsContainer: document.getElementById("paymentRowsContainer"),
  btnAddPaymentRow: document.getElementById("btnAddPaymentRow"),
  dueNoticeBox: document.getElementById("dueNoticeBox"),
  dueCustomerTargetName: document.getElementById("dueCustomerTargetName"),
  modalDueNoticeAmount: document.getElementById("modalDueNoticeAmount"),
  modalSalesNote: document.getElementById("modalSalesNote"),
  modalPaymentNote: document.getElementById("modalPaymentNote"),
  modalTermsConditionsSelect: document.getElementById("modalTermsConditionsSelect"),
  orderReferenceInput: document.getElementById("orderReferenceInput"),
  btnModalGenerateRef: document.getElementById("btnModalGenerateRef"),
  modalPaymentSummaryBadge: document.getElementById("modalPaymentSummaryBadge"),
  btnConfirmPaymentAndPrint: document.getElementById("btnConfirmPaymentAndPrint"),

  // Thermal Receipt Modal
  receiptModalOverlay: document.getElementById("receiptModalOverlay"),
  btnCloseReceiptModal: document.getElementById("btnCloseReceiptModal"),
  btnPrintReceiptBtn: document.getElementById("btnPrintReceiptBtn"),
  btnNextOrder: document.getElementById("btnNextOrder"),
  recInvoiceNum: document.getElementById("recInvoiceNum"),
  recDate: document.getElementById("recDate"),
  recPricingMode: document.getElementById("recPricingMode"),
  recCustomer: document.getElementById("recCustomer"),
  recCustomerPhone: document.getElementById("recCustomerPhone"),
  recBranchTitle: document.getElementById("recBranchTitle"),
  recBranchAddress: document.getElementById("recBranchAddress"),
  recBranchName: document.getElementById("recBranchName"),
  recBiller: document.getElementById("recBiller"),
  recSalesman: document.getElementById("recSalesman"),
  recRefRow: document.getElementById("recRefRow"),
  recRefNum: document.getElementById("recRefNum"),
  recCustPhoneRow: document.getElementById("recCustPhoneRow"),
  receiptItemsTbody: document.getElementById("receiptItemsTbody"),
  recSubtotal: document.getElementById("recSubtotal"),
  recDiscountRow: document.getElementById("recDiscountRow"),
  recDiscount: document.getElementById("recDiscount"),
  recCourierRow: document.getElementById("recCourierRow"),
  recCourierFee: document.getElementById("recCourierFee"),
  recTax: document.getElementById("recTax"),
  recGrandTotal: document.getElementById("recGrandTotal"),
  recPayMethod: document.getElementById("recPayMethod"),
  recTendered: document.getElementById("recTendered"),
  recChangeDue: document.getElementById("recChangeDue"),
  recDueRow: document.getElementById("recDueRow"),
  recDueAmount: document.getElementById("recDueAmount"),
  recSalesNoteRow: document.getElementById("recSalesNoteRow"),
  recSalesNote: document.getElementById("recSalesNote"),
  recPaymentNoteRow: document.getElementById("recPaymentNoteRow"),
  recPaymentNote: document.getElementById("recPaymentNote"),
  recTermsNotice: document.getElementById("recTermsNotice"),
  receiptBarcodeSvg: document.getElementById("receiptBarcodeSvg"),
  recBarcodeText: document.getElementById("recBarcodeText"),

  // Held Orders Modal
  heldOrdersModalOverlay: document.getElementById("heldOrdersModalOverlay"),
  btnCloseHeldModal: document.getElementById("btnCloseHeldModal"),
  btnCloseHeldOrdersBottom: document.getElementById("btnCloseHeldOrdersBottom"),
  heldOrdersList: document.getElementById("heldOrdersList"),
  noHeldOrdersMsg: document.getElementById("noHeldOrdersMsg"),

  // Custom Item Modal
  customItemModalOverlay: document.getElementById("customItemModalOverlay"),
  btnCloseCustomItemModal: document.getElementById("btnCloseCustomItemModal"),
  btnCancelCustomItem: document.getElementById("btnCancelCustomItem"),
  btnAddCustomItemSubmit: document.getElementById("btnAddCustomItemSubmit"),
  customItemName: document.getElementById("customItemName"),
  customItemPrice: document.getElementById("customItemPrice"),
  customItemQty: document.getElementById("customItemQty"),
  customItemWarranty: document.getElementById("customItemWarranty"),

  // Customer Modal
  customerModalOverlay: document.getElementById("customerModalOverlay"),
  btnCloseCustomerModal: document.getElementById("btnCloseCustomerModal"),
  btnCloseCustModalBottom: document.getElementById("btnCloseCustModalBottom"),
  customerSearchInput: document.getElementById("customerSearchInput"),
  customerSearchResults: document.getElementById("customerSearchResults"),
  newCustName: document.getElementById("newCustName"),
  newCustPhone: document.getElementById("newCustPhone"),
  newCustAddress: document.getElementById("newCustAddress"),
  btnSaveNewCustomer: document.getElementById("btnSaveNewCustomer"),
  btnSelectWalkIn: document.getElementById("btnSelectWalkIn"),

  // Shipping Delivery Charge
  summaryCourierRow: document.getElementById("summaryCourierRow"),
  summaryCourierFee: document.getElementById("summaryCourierFee"),

  // Shortcuts Modal
  shortcutsModalOverlay: document.getElementById("shortcutsModalOverlay"),
  btnCloseShortcutsModal: document.getElementById("btnCloseShortcutsModal"),
  btnCloseShortcutsBottom: document.getElementById("btnCloseShortcutsBottom"),

  // Shift Drawer Summary Modal
  btnOpenShiftModal: document.getElementById("btnOpenShiftModal"),
  shiftSummaryModalOverlay: document.getElementById("shiftSummaryModalOverlay"),
  btnCloseShiftModal: document.getElementById("btnCloseShiftModal"),
  btnCloseShiftModalBottom: document.getElementById("btnCloseShiftModalBottom"),
  btnPrintShiftReport: document.getElementById("btnPrintShiftReport"),
  shiftOpeningFloat: document.getElementById("shiftOpeningFloat"),
  shiftCashInDrawer: document.getElementById("shiftCashInDrawer"),
  shiftCashSales: document.getElementById("shiftCashSales"),
  shiftCardSales: document.getElementById("shiftCardSales"),
  shiftMobileSales: document.getElementById("shiftMobileSales"),
  shiftDueSales: document.getElementById("shiftDueSales"),
  shiftTotalInvoices: document.getElementById("shiftTotalInvoices"),
  shiftTotalRevenue: document.getElementById("shiftTotalRevenue"),

  // Virtual Numpad Modal
  numpadModalOverlay: document.getElementById("numpadModalOverlay"),
  btnCloseNumpadModal: document.getElementById("btnCloseNumpadModal"),
  numpadTargetLabel: document.getElementById("numpadTargetLabel"),
  numpadDisplayValue: document.getElementById("numpadDisplayValue"),
  btnNumpadSubmit: document.getElementById("btnNumpadSubmit"),

  // Item-Level Discount Modal
  itemDiscountModalOverlay: document.getElementById("itemDiscountModalOverlay"),
  btnCloseItemDiscModal: document.getElementById("btnCloseItemDiscModal"),
  itemDiscTargetName: document.getElementById("itemDiscTargetName"),
  btnDiscTypePercent: document.getElementById("btnDiscTypePercent"),
  btnDiscTypeFlat: document.getElementById("btnDiscTypeFlat"),
  itemDiscValueInput: document.getElementById("itemDiscValueInput"),
  btnCancelItemDisc: document.getElementById("btnCancelItemDisc"),

  // Product Item Note Modal
  itemNoteModalOverlay: document.getElementById("itemNoteModalOverlay"),
  btnCloseItemNoteModal: document.getElementById("btnCloseItemNoteModal"),
  itemNoteModalThumb: document.getElementById("itemNoteModalThumb"),
  itemNoteModalName: document.getElementById("itemNoteModalName"),
  itemNoteModalSku: document.getElementById("itemNoteModalSku"),
  itemNoteModalPrice: document.getElementById("itemNoteModalPrice"),
  itemNoteCharCount: document.getElementById("itemNoteCharCount"),
  itemNoteTextarea: document.getElementById("itemNoteTextarea"),
  btnClearItemNote: document.getElementById("btnClearItemNote"),
  btnCancelItemNote: document.getElementById("btnCancelItemNote"),
  btnSaveItemNote: document.getElementById("btnSaveItemNote"),

  // Modal 13: Product Edit Modal (Price, VAT, Promo, Discount)
  productEditModalOverlay: document.getElementById("productEditModalOverlay"),
  btnCloseProductEditModal: document.getElementById("btnCloseProductEditModal"),
  productEditThumb: document.getElementById("productEditThumb"),
  productEditName: document.getElementById("productEditName"),
  productEditSku: document.getElementById("productEditSku"),
  productEditBarcode: document.getElementById("productEditBarcode"),
  productEditUnitBadge: document.getElementById("productEditUnitBadge"),
  productEditCartQty: document.getElementById("productEditCartQty"),
  btnApplyRegularRate: document.getElementById("btnApplyRegularRate"),
  promoRegularPriceDisplay: document.getElementById("promoRegularPriceDisplay"),
  btnApplyPromoRate: document.getElementById("btnApplyPromoRate"),
  promoSavingsBadge: document.getElementById("promoSavingsBadge"),
  promoOfferPriceDisplay: document.getElementById("promoOfferPriceDisplay"),
  btnApplyWholesaleRate: document.getElementById("btnApplyWholesaleRate"),
  promoWholesalePriceDisplay: document.getElementById("promoWholesalePriceDisplay"),
  summaryEditQtyLine: document.getElementById("summaryEditQtyLine"),
  summaryEditPriceEach: document.getElementById("summaryEditPriceEach"),
  summaryEditGross: document.getElementById("summaryEditGross"),
  summaryEditNetTotal: document.getElementById("summaryEditNetTotal"),
  btnResetProductEdit: document.getElementById("btnResetProductEdit"),
  btnCancelProductEdit: document.getElementById("btnCancelProductEdit"),
  btnSaveProductEdit: document.getElementById("btnSaveProductEdit"),
  productPriceTierSelect: document.getElementById("productPriceTierSelect"),
  modalUnitPriceInput: document.getElementById("modalUnitPriceInput"),
  activeTierBadge: document.getElementById("activeTierBadge"),
  pricingTierBanner: document.getElementById("pricingTierBanner"),
  tierBannerIcon: document.getElementById("tierBannerIcon"),
  tierBannerTitle: document.getElementById("tierBannerTitle"),
  tierBannerDesc: document.getElementById("tierBannerDesc"),
  tierSavingsChip: document.getElementById("tierSavingsChip"),
  optRegularRate: document.getElementById("optRegularRate"),
  optPromoRate: document.getElementById("optPromoRate"),
  optWholesaleRate: document.getElementById("optWholesaleRate"),
  optCustomRate: document.getElementById("optCustomRate"),
  productEditFixedWarranty: document.getElementById("productEditFixedWarranty"),
  productEditImeiSection: document.getElementById("productEditImeiSection"),
  btnModalQtyMinus: document.getElementById("btnModalQtyMinus"),
  modalQtyVal: document.getElementById("modalQtyVal"),
  btnModalQtyPlus: document.getElementById("btnModalQtyPlus"),
  btnClearAllImeis: document.getElementById("btnClearAllImeis"),
  productEditImeiList: document.getElementById("productEditImeiList"),

  // Modal 12: Recent Receipts
  recentReceiptsModalOverlay: document.getElementById("recentReceiptsModalOverlay"),
  btnCloseRecentReceiptsModal: document.getElementById("btnCloseRecentReceiptsModal"),
  btnCloseRecentReceiptsBottom: document.getElementById("btnCloseRecentReceiptsBottom"),
  recentReceiptsSearchInput: document.getElementById("recentReceiptsSearchInput"),
  recentReceiptsBranchFilter: document.getElementById("recentReceiptsBranchFilter"),
  recentReceiptsTbody: document.getElementById("recentReceiptsTbody"),
  recentReceiptsCountLabel: document.getElementById("recentReceiptsCountLabel"),

  // Modal 13: Recent Transactions
  recentTransactionsModalOverlay: document.getElementById("recentTransactionsModalOverlay"),
  btnCloseTransactionsModal: document.getElementById("btnCloseTransactionsModal"),
  btnCloseTransactionsBottom: document.getElementById("btnCloseTransactionsBottom"),
  trxKpiTotalSales: document.getElementById("trxKpiTotalSales"),
  trxKpiCash: document.getElementById("trxKpiCash"),
  trxKpiCard: document.getElementById("trxKpiCard"),
  trxKpiDue: document.getElementById("trxKpiDue"),
  trxFilterTabs: document.getElementById("trxFilterTabs"),
  recentTransactionsTbody: document.getElementById("recentTransactionsTbody"),
  recentTrxCountLabel: document.getElementById("recentTrxCountLabel"),

  // Modal 14: Item IMEI Scanner & Input
  itemImeiModalOverlay: document.getElementById("itemImeiModalOverlay"),
  btnCloseItemImeiModal: document.getElementById("btnCloseItemImeiModal"),
  btnCancelItemImei: document.getElementById("btnCancelItemImei"),
  btnSaveItemImei: document.getElementById("btnSaveItemImei"),
  btnClearItemImei: document.getElementById("btnClearItemImei"),
  itemImeiInput: document.getElementById("itemImeiInput"),
  imeiItemTargetName: document.getElementById("imeiItemTargetName"),
  btnGenerateSampleImei: document.getElementById("btnGenerateSampleImei"),

  // Modal 15: Executive POS Calculator
  btnOpenCalculatorModal: document.getElementById("btnOpenCalculatorModal"),
  calculatorModalOverlay: document.getElementById("calculatorModalOverlay"),
  btnCloseCalculatorModal: document.getElementById("btnCloseCalculatorModal"),
  btnCloseCalculatorBottom: document.getElementById("btnCloseCalculatorBottom"),
  calcExpressionPreview: document.getElementById("calcExpressionPreview"),
  calcMainDisplay: document.getElementById("calcMainDisplay"),
  calcMemIndicator: document.getElementById("calcMemIndicator"),
  btnCalcCopyDisplay: document.getElementById("btnCalcCopyDisplay"),
  btnCalcCopyResult: document.getElementById("btnCalcCopyResult"),
  btnCalcApplyCash: document.getElementById("btnCalcApplyCash"),
  btnCalcClearHistory: document.getElementById("btnCalcClearHistory"),
  calcHistoryList: document.getElementById("calcHistoryList"),

  toastContainer: document.getElementById("toastContainer")
};

// ==========================================================================
// 5. HELPER FUNCTIONS: CURRENCY & TOASTS
// ==========================================================================
function escapeHtml(str) {
  if (!str) return "";
  return String(str)
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/"/g, "&quot;")
    .replace(/'/g, "&#039;");
}

function formatCurrency(amount) {
  const symbol = POS_STATE.currencySymbol || "$";
  let converted = amount;
  if (POS_STATE.currency === "BDT") converted = amount * 118;
  else if (POS_STATE.currency === "EUR") converted = amount * 0.92;
  else if (POS_STATE.currency === "GBP") converted = amount * 0.78;
  else if (POS_STATE.currency === "INR") converted = amount * 83.5;
  else if (POS_STATE.currency === "SAR") converted = amount * 3.75;
  else if (POS_STATE.currency === "AED") converted = amount * 3.67;
  return `${symbol}${converted.toLocaleString("en-US", { minimumFractionDigits: 2, maximumFractionDigits: 2 })}`;
}

function setCurrency(curr) {
  POS_STATE.currency = curr;
  if (curr === "BDT") {
    POS_STATE.currencySymbol = "৳";
    POS_STATE.shippingCost = 60;
    POS_STATE.shiftFloat = 20000;
  } else if (curr === "EUR") {
    POS_STATE.currencySymbol = "€";
    POS_STATE.shippingCost = 5;
    POS_STATE.shiftFloat = 200;
  } else if (curr === "GBP") {
    POS_STATE.currencySymbol = "£";
    POS_STATE.shippingCost = 4;
    POS_STATE.shiftFloat = 180;
  } else if (curr === "INR") {
    POS_STATE.currencySymbol = "₹";
    POS_STATE.shippingCost = 50;
    POS_STATE.shiftFloat = 15000;
  } else if (curr === "SAR") {
    POS_STATE.currencySymbol = "﷼";
    POS_STATE.shippingCost = 20;
    POS_STATE.shiftFloat = 750;
  } else if (curr === "AED") {
    POS_STATE.currencySymbol = "د.إ";
    POS_STATE.shippingCost = 20;
    POS_STATE.shiftFloat = 750;
  } else {
    POS_STATE.currency = "USD";
    POS_STATE.currencySymbol = "$";
    POS_STATE.shippingCost = 5;
    POS_STATE.shiftFloat = 200;
  }

  if (DOM.currencySelect && DOM.currencySelect.value !== POS_STATE.currency) {
    DOM.currencySelect.value = POS_STATE.currency;
  }
  if (DOM.modalCurrencyPrefix) {
    DOM.modalCurrencyPrefix.textContent = POS_STATE.currencySymbol;
  }

  renderProductCatalog();
  renderCart();
  calculateTotals();
  showToast(`Currency set to ${POS_STATE.currency} (${POS_STATE.currencySymbol})`);
}
window.setCurrency = setCurrency;

function showToast(message, type = "success") {
  const toast = document.createElement("div");
  toast.className = `pos-toast toast-${type}`;
  let icon = '<i class="fa-solid fa-circle-check"></i>';
  if (type === "warning") icon = '<i class="fa-solid fa-triangle-exclamation"></i>';
  if (type === "danger") icon = '<i class="fa-solid fa-circle-xmark"></i>';
  toast.innerHTML = `${icon} <span>${message}</span>`;
  DOM.toastContainer.appendChild(toast);

  setTimeout(() => {
    toast.style.opacity = "0";
    toast.style.transform = "translateY(8px)";
    toast.style.transition = "all 0.3s ease";
    setTimeout(() => toast.remove(), 300);
  }, 2200);
}

// Get effective unit price based on Retail vs Wholesale mode
function getEffectivePrice(product) {
  return POS_STATE.pricingMode === "wholesale" && product.wholesalePrice
    ? product.wholesalePrice
    : product.price;
}

// ==========================================================================
// 6. RENDER PRODUCT CATALOG & BROWSING ENGINE (ALL, CATEGORY, BRAND)
// ==========================================================================
const CATEGORIES_META = {
  electronics: {
    id: "electronics",
    title: "Electronics & Gadgets",
    icon: "fa-headphones",
    color: "#2563eb",
    image: "https://images.unsplash.com/photo-1505740420928-5e560c06d30e?auto=format&fit=crop&w=300&q=80"
  },
  fashion: {
    id: "fashion",
    title: "Fashion & Apparel",
    icon: "fa-shirt",
    color: "#c026d3",
    image: "https://images.unsplash.com/photo-1489987707025-afc232f7ea0f?auto=format&fit=crop&w=300&q=80"
  },
  beauty: {
    id: "beauty",
    title: "Beauty & Cosmetics",
    icon: "fa-wand-magic-sparkles",
    color: "#e11d48",
    image: "https://images.unsplash.com/photo-1522335789203-aabd1fc54bc9?auto=format&fit=crop&w=300&q=80"
  },
  groceries: {
    id: "groceries",
    title: "Super Shop & FMCG",
    icon: "fa-basket-shopping",
    color: "#16a34a",
    image: "https://images.unsplash.com/photo-1542838132-92c53300491e?auto=format&fit=crop&w=300&q=80"
  },
  stationery: {
    id: "stationery",
    title: "Stationery & Office",
    icon: "fa-pen-ruler",
    color: "#d97706",
    image: "https://images.unsplash.com/photo-1583485088034-697b5bc54ccd?auto=format&fit=crop&w=300&q=80"
  },
  hardware: {
    id: "hardware",
    title: "Hardware & Tools",
    icon: "fa-screwdriver-wrench",
    color: "#475569",
    image: "https://images.unsplash.com/photo-1581147036324-c17ac41dfa6c?auto=format&fit=crop&w=300&q=80"
  }
};

const BRAND_META = {
  "Sony": {
    logo: "https://logo.clearbit.com/sony.com",
    fallback: "https://images.unsplash.com/photo-1590658268037-6bf12165a8df?auto=format&fit=crop&w=150&q=80"
  },
  "Anker": {
    logo: "https://logo.clearbit.com/anker.com",
    fallback: "https://images.unsplash.com/photo-1609091839311-d5365f9ff1c5?auto=format&fit=crop&w=150&q=80"
  },
  "Logitech": {
    logo: "https://logo.clearbit.com/logitech.com",
    fallback: "https://images.unsplash.com/photo-1527864550417-7fd91fc51a46?auto=format&fit=crop&w=150&q=80"
  },
  "Philips": {
    logo: "https://logo.clearbit.com/philips.com",
    fallback: "https://images.unsplash.com/photo-1507473885765-e6ed057f782c?auto=format&fit=crop&w=150&q=80"
  },
  "Polo Ralph": {
    logo: "https://logo.clearbit.com/ralphlauren.com",
    fallback: "https://images.unsplash.com/photo-1581655353564-df123a1eb820?auto=format&fit=crop&w=150&q=80"
  },
  "Levi's": {
    logo: "https://logo.clearbit.com/levi.com",
    fallback: "https://images.unsplash.com/photo-1542272604-787c3835535d?auto=format&fit=crop&w=150&q=80"
  },
  "Fossil": {
    logo: "https://logo.clearbit.com/fossil.com",
    fallback: "https://images.unsplash.com/photo-1627123424574-724758594e93?auto=format&fit=crop&w=150&q=80"
  },
  "Nike": {
    logo: "https://logo.clearbit.com/nike.com",
    fallback: "https://images.unsplash.com/photo-1542291026-7eec264c27ff?auto=format&fit=crop&w=150&q=80"
  },
  "The Ordinary": {
    logo: "https://logo.clearbit.com/theordinary.com",
    fallback: "https://images.unsplash.com/photo-1620916566398-39f1143ab7be?auto=format&fit=crop&w=150&q=80"
  },
  "MAC": {
    logo: "https://logo.clearbit.com/maccosmetics.com",
    fallback: "https://images.unsplash.com/photo-1586495777744-4413f21062fa?auto=format&fit=crop&w=150&q=80"
  },
  "La Roche-Posay": {
    logo: "https://logo.clearbit.com/laroche-posay.us",
    fallback: "https://images.unsplash.com/photo-1556228720-195a672e8a03?auto=format&fit=crop&w=150&q=80"
  },
  "Bertolli": {
    logo: "https://logo.clearbit.com/bertolli.com",
    fallback: "https://images.unsplash.com/photo-1474979266404-7eaacbcd87c5?auto=format&fit=crop&w=150&q=80"
  },
  "Daawat": {
    logo: "https://logo.clearbit.com/daawat.com",
    fallback: "https://images.unsplash.com/photo-1586201375761-83865001e31c?auto=format&fit=crop&w=150&q=80"
  },
  "Dabur": {
    logo: "https://logo.clearbit.com/dabur.com",
    fallback: "https://images.unsplash.com/photo-1587049352846-4a222e784d38?auto=format&fit=crop&w=150&q=80"
  },
  "Pilot": {
    logo: "https://logo.clearbit.com/pilotpen.com",
    fallback: "https://images.unsplash.com/photo-1583485088034-697b5bc54ccd?auto=format&fit=crop&w=150&q=80"
  },
  "Moleskine": {
    logo: "https://logo.clearbit.com/moleskine.com",
    fallback: "https://images.unsplash.com/photo-1544716278-ca5e3f4abd8c?auto=format&fit=crop&w=150&q=80"
  },
  "Bosch": {
    logo: "https://logo.clearbit.com/bosch.com",
    fallback: "https://images.unsplash.com/photo-1581147036324-c17ac41dfa6c?auto=format&fit=crop&w=150&q=80"
  },
  "Fluke": {
    logo: "https://logo.clearbit.com/fluke.com",
    fallback: "https://images.unsplash.com/photo-1581092160607-ee22621dd758?auto=format&fit=crop&w=150&q=80"
  }
};

function getBrandVisual(brandName, categoryId) {
  if (BRAND_META[brandName]) {
    return BRAND_META[brandName];
  }
  const productWithBrand = POS_STATE.products.find(p => p.brand === brandName && p.image);
  const fallbackImg = productWithBrand ? productWithBrand.image : (CATEGORIES_META[categoryId]?.image || "https://images.unsplash.com/photo-1526170375885-4d8ecf77b99f?auto=format&fit=crop&w=150&q=80");
  const cleanDomain = brandName.toLowerCase().replace(/[^a-z0-9]/g, "") + ".com";
  return {
    logo: `https://logo.clearbit.com/${cleanDomain}`,
    fallback: fallbackImg
  };
}

function updateCatalogBadges() {
  if (DOM.badgeAllCount) DOM.badgeAllCount.textContent = POS_STATE.products.length;
  if (DOM.badgeCatCount) DOM.badgeCatCount.textContent = Object.keys(CATEGORIES_META).length;
  const uniqueBrands = new Set(POS_STATE.products.map(p => p.brand).filter(Boolean));
  if (DOM.badgeBrandCount) DOM.badgeBrandCount.textContent = uniqueBrands.size;
}

function updateCatalogFilterBreadcrumb() {
  if (!DOM.catalogActiveFilterBar) return;
  if (POS_STATE.activeCategory !== "all") {
    DOM.catalogActiveFilterBar.style.display = "flex";
    if (DOM.filterBackLabel) DOM.filterBackLabel.textContent = "Back to Categories";
    if (DOM.filterTypeTag) DOM.filterTypeTag.textContent = "Category:";
    const catObj = CATEGORIES_META[POS_STATE.activeCategory];
    if (DOM.filterNameTag) DOM.filterNameTag.textContent = catObj ? catObj.title : POS_STATE.activeCategory;
    const count = POS_STATE.products.filter(p => p.category === POS_STATE.activeCategory).length;
    if (DOM.filterCountChip) DOM.filterCountChip.textContent = `${count} ${count === 1 ? 'item' : 'items'}`;
  } else if (POS_STATE.activeBrand !== "all") {
    DOM.catalogActiveFilterBar.style.display = "flex";
    if (DOM.filterBackLabel) DOM.filterBackLabel.textContent = "Back to Brands";
    if (DOM.filterTypeTag) DOM.filterTypeTag.textContent = "Brand:";
    if (DOM.filterNameTag) DOM.filterNameTag.textContent = POS_STATE.activeBrand;
    const count = POS_STATE.products.filter(p => p.brand === POS_STATE.activeBrand).length;
    if (DOM.filterCountChip) DOM.filterCountChip.textContent = `${count} ${count === 1 ? 'item' : 'items'}`;
  } else {
    DOM.catalogActiveFilterBar.style.display = "none";
  }
}

function renderProductCatalog() {
  const query = POS_STATE.searchQuery.toLowerCase().trim();
  const category = POS_STATE.activeCategory;
  const brand = POS_STATE.activeBrand;

  const filtered = POS_STATE.products.filter(item => {
    const matchesCat = category === "all" || item.category === category;
    const matchesBrand = brand === "all" || item.brand === brand;
    const matchesQuery = !query || 
      item.name.toLowerCase().includes(query) ||
      item.sku.toLowerCase().includes(query) ||
      (item.barcode && item.barcode.includes(query)) ||
      (item.brand && item.brand.toLowerCase().includes(query));
    return matchesCat && matchesBrand && matchesQuery;
  });

  if (DOM.productsGrid) {
    DOM.productsGrid.innerHTML = "";

    if (filtered.length === 0) {
      if (DOM.catalogEmptyState) DOM.catalogEmptyState.style.display = "flex";
    } else {
      if (DOM.catalogEmptyState) DOM.catalogEmptyState.style.display = "none";
      filtered.forEach(product => {
        const card = document.createElement("div");
        card.className = "product-card";
        card.setAttribute("data-id", product.id);

        const activePrice = getEffectivePrice(product);

        // Stock Badge
        let stockBadge = "";
        if (product.stock <= 0) {
          stockBadge = `<span class="stock-tag stock-out"><i class="fa-solid fa-circle-xmark"></i> Out of Stock</span>`;
        } else if (product.stock <= 5) {
          stockBadge = `<span class="stock-tag stock-low"><i class="fa-solid fa-triangle-exclamation"></i> Only ${product.stock} ${product.unit || 'Pcs'}</span>`;
        } else {
          stockBadge = `<span class="stock-tag stock-in"><i class="fa-solid fa-check"></i> ${product.stock} ${product.unit || 'Pcs'}</span>`;
        }

        // Warranty Tag
        const warrantyBadge = product.warranty
          ? `<span class="warranty-tag"><i class="fa-solid fa-shield-halved"></i> ${product.warranty}</span>`
          : "";

        // Pricing Tier Label
        const priceSubLabel = POS_STATE.pricingMode === "wholesale" ? "Wholesale Rate" : "Retail Price";

        const brandPrefix = product.brand ? `${escapeHtml(product.brand)} • ` : "";

        card.innerHTML = `
          <div class="card-img-wrapper">
            <img src="${product.image}" alt="${product.name}" class="card-img" loading="lazy" onerror="this.src='https://images.unsplash.com/photo-1526170375885-4d8ecf77b99f?auto=format&fit=crop&w=300&q=80'" />
            ${stockBadge}
            ${warrantyBadge}
            <span class="sku-tag">${product.sku}</span>
          </div>
          <div class="card-body">
            <div class="card-meta">
              <span class="item-category">${brandPrefix}${product.category}</span>
              <span class="item-title">${product.name}</span>
            </div>
            <div class="card-footer">
              <div class="price-box">
                <span class="item-price">${formatCurrency(activePrice)}</span>
                <span class="item-sub-price">${priceSubLabel}</span>
              </div>
              <button class="btn-add-quick" title="Add to Cart">
                <i class="fa-solid fa-plus"></i>
              </button>
            </div>
          </div>
        `;

        card.addEventListener("click", () => {
          addToCart(product);
        });

        DOM.productsGrid.appendChild(card);
      });
    }
  }

  updateCatalogBadges();
  updateCatalogFilterBreadcrumb();
}

function renderCategoryGrid() {
  if (!DOM.categoryCardsGrid) return;
  const query = POS_STATE.searchQuery.toLowerCase().trim();
  const catEntries = Object.values(CATEGORIES_META);
  const filtered = catEntries.filter(cat => {
    return !query || cat.title.toLowerCase().includes(query) || cat.id.toLowerCase().includes(query);
  });

  DOM.categoryCardsGrid.innerHTML = filtered.map(cat => {
    const count = POS_STATE.products.filter(p => p.category === cat.id).length;
    const catImg = cat.image || "https://images.unsplash.com/photo-1526170375885-4d8ecf77b99f?auto=format&fit=crop&w=300&q=80";
    return `
      <div class="category-browser-card" data-cat="${cat.id}">
        <div class="category-card-img-wrap">
          <img src="${catImg}" alt="${escapeHtml(cat.title)}" class="category-card-img" loading="lazy" onerror="this.onerror=null; this.src='https://images.unsplash.com/photo-1526170375885-4d8ecf77b99f?auto=format&fit=crop&w=300&q=80';" />
          <span class="category-card-icon-badge">
            <i class="fa-solid ${cat.icon}"></i>
          </span>
        </div>
        <div class="category-card-title">${escapeHtml(cat.title)}</div>
        <span class="category-card-count">${count} Products</span>
        <div class="category-browse-hint">
          <span>Browse</span> <i class="fa-solid fa-arrow-right"></i>
        </div>
      </div>
    `;
  }).join("");

  DOM.categoryCardsGrid.querySelectorAll(".category-browser-card").forEach(card => {
    card.addEventListener("click", () => {
      const catId = card.getAttribute("data-cat");
      filterCatalogByCategory(catId);
    });
  });
}

function renderBrandGrid() {
  if (!DOM.brandCardsGrid) return;
  const query = POS_STATE.searchQuery.toLowerCase().trim();

  // Aggregate distinct brands from products
  const brandsMap = {};
  POS_STATE.products.forEach(p => {
    const b = p.brand || "Generic";
    if (!brandsMap[b]) {
      brandsMap[b] = { name: b, count: 0, category: p.category };
    }
    brandsMap[b].count++;
  });

  const brandsList = Object.values(brandsMap).filter(b => {
    return !query || b.name.toLowerCase().includes(query) || b.category.toLowerCase().includes(query);
  });

  DOM.brandCardsGrid.innerHTML = brandsList.map(b => {
    const catObj = CATEGORIES_META[b.category];
    const catLabel = catObj ? catObj.title.split("&")[0].trim() : b.category;
    const visual = getBrandVisual(b.name, b.category);
    return `
      <div class="brand-browser-card" data-brand="${escapeHtml(b.name)}">
        <div class="brand-logo-wrap">
          <img src="${visual.logo}" alt="${escapeHtml(b.name)}" class="brand-logo-img" loading="lazy" onerror="this.onerror=null; this.src='${visual.fallback}';" />
        </div>
        <div class="brand-card-name">${escapeHtml(b.name)}</div>
        <div class="brand-card-category">${escapeHtml(catLabel)}</div>
        <span class="brand-card-count">${b.count} ${b.count === 1 ? 'Item' : 'Items'}</span>
      </div>
    `;
  }).join("");

  DOM.brandCardsGrid.querySelectorAll(".brand-browser-card").forEach(card => {
    card.addEventListener("click", () => {
      const brandName = card.getAttribute("data-brand");
      filterCatalogByBrand(brandName);
    });
  });
}

function switchCatalogTab(tab) {
  POS_STATE.activeCatalogTab = tab;

  if (DOM.catalogModeSwitcher) {
    DOM.catalogModeSwitcher.querySelectorAll(".catalog-mode-btn").forEach(btn => {
      if (btn.getAttribute("data-catalog-tab") === tab) {
        btn.classList.add("active");
      } else {
        btn.classList.remove("active");
      }
    });
  }

  updateCatalogBadges();

  if (tab === "all") {
    POS_STATE.activeCategory = "all";
    POS_STATE.activeBrand = "all";
    if (DOM.viewProductsGrid) DOM.viewProductsGrid.style.display = "block";
    if (DOM.viewCategoriesGrid) DOM.viewCategoriesGrid.style.display = "none";
    if (DOM.viewBrandsGrid) DOM.viewBrandsGrid.style.display = "none";
    updateCatalogFilterBreadcrumb();
    renderProductCatalog();
  } else if (tab === "category") {
    if (DOM.viewProductsGrid) DOM.viewProductsGrid.style.display = "none";
    if (DOM.viewCategoriesGrid) DOM.viewCategoriesGrid.style.display = "block";
    if (DOM.viewBrandsGrid) DOM.viewBrandsGrid.style.display = "none";
    if (DOM.catalogActiveFilterBar) DOM.catalogActiveFilterBar.style.display = "none";
    renderCategoryGrid();
  } else if (tab === "brand") {
    if (DOM.viewProductsGrid) DOM.viewProductsGrid.style.display = "none";
    if (DOM.viewCategoriesGrid) DOM.viewCategoriesGrid.style.display = "none";
    if (DOM.viewBrandsGrid) DOM.viewBrandsGrid.style.display = "block";
    if (DOM.catalogActiveFilterBar) DOM.catalogActiveFilterBar.style.display = "none";
    renderBrandGrid();
  }

  soundManager.playPop();
}

function filterCatalogByCategory(catId) {
  POS_STATE.activeCategory = catId;
  POS_STATE.activeBrand = "all";
  if (DOM.viewProductsGrid) DOM.viewProductsGrid.style.display = "block";
  if (DOM.viewCategoriesGrid) DOM.viewCategoriesGrid.style.display = "none";
  if (DOM.viewBrandsGrid) DOM.viewBrandsGrid.style.display = "none";
  updateCatalogFilterBreadcrumb();
  renderProductCatalog();
  soundManager.playPop();
}

function filterCatalogByBrand(brandName) {
  POS_STATE.activeBrand = brandName;
  POS_STATE.activeCategory = "all";
  if (DOM.viewProductsGrid) DOM.viewProductsGrid.style.display = "block";
  if (DOM.viewCategoriesGrid) DOM.viewCategoriesGrid.style.display = "none";
  if (DOM.viewBrandsGrid) DOM.viewBrandsGrid.style.display = "none";
  updateCatalogFilterBreadcrumb();
  renderProductCatalog();
  soundManager.playPop();
}

function clearCatalogFilter() {
  POS_STATE.activeCategory = "all";
  POS_STATE.activeBrand = "all";
  updateCatalogFilterBreadcrumb();
  renderProductCatalog();
  soundManager.playPop();
}

window.switchCatalogTab = switchCatalogTab;
window.filterCatalogByCategory = filterCatalogByCategory;
window.filterCatalogByBrand = filterCatalogByBrand;
window.clearCatalogFilter = clearCatalogFilter;

// ==========================================================================
// 7. CART ENGINE (HIGH CAPACITY & RETAIL FEATURES)
// ==========================================================================

function addToCart(product, customQty = 1) {
  soundManager.playBeep();

  const existingIndex = POS_STATE.cart.findIndex(i => i.id === product.id);

  if (existingIndex > -1) {
    POS_STATE.cart[existingIndex].qty += customQty;
  } else {
    POS_STATE.cart.push({
      id: product.id,
      name: product.name,
      image: product.image || "",
      price: product.price,
      regularPrice: product.regularPrice || Math.round(product.price * 1.25 * 100) / 100,
      promotionalPrice: product.price,
      wholesalePrice: product.wholesalePrice || product.price,
      customPrice: null,
      sku: product.sku || "RETAIL-SKU",
      barcode: product.barcode || "",
      unit: product.unit || "Pcs",
      batch: product.batch || "BTH-01 (12/26)",
      batches: product.batches || [
        { no: "BTH-01 (12/26)" },
        { no: "BTH-02 (06/27)" },
        { no: "BTH-03 (10/27)" }
      ],
      warranty: product.warranty || "Standard",
      qty: customQty,
      discount: 0,
      discountType: "percent",
      note: "",
      taxExempt: false,
      customVatRate: null
    });
  }

  // Set pulse highlight target
  POS_STATE.lastUpdatedItemId = product.id;

  renderCart();
  calculateTotals();
  showToast(`Added ${product.name} to cart`);
}

// Execute Barcode Quick Scan from Cart Header
function executeBarcodeQuickScan(explicitCode = null) {
  if (!DOM.cartSearchFilterInput) return;
  const raw = explicitCode !== null ? explicitCode : DOM.cartSearchFilterInput.value;
  const code = (raw || "").trim();
  if (!code) return;

  const query = code.toLowerCase();
  const scanBox = DOM.cartSearchFilterInput.closest(".cart-barcode-scan-box") || DOM.cartSearchFilterInput.parentElement;

  // 1. Exact Barcode Match
  let matched = POS_STATE.products.find(p => p.barcode && p.barcode.toLowerCase() === query);

  // 2. Exact SKU Match
  if (!matched) {
    matched = POS_STATE.products.find(p => p.sku && p.sku.toLowerCase() === query);
  }

  // 3. Exact Product Name Match
  if (!matched) {
    matched = POS_STATE.products.find(p => p.name.toLowerCase() === query);
  }

  // 4. Single Partial Match (Barcode or SKU contains query)
  if (!matched) {
    const partials = POS_STATE.products.filter(p => 
      (p.barcode && p.barcode.toLowerCase().includes(query)) ||
      (p.sku && p.sku.toLowerCase().includes(query))
    );
    if (partials.length === 1) {
      matched = partials[0];
    }
  }

  if (matched) {
    addToCart(matched);

    if (scanBox) {
      scanBox.classList.remove("scan-error");
      scanBox.classList.add("scan-success");
      setTimeout(() => scanBox.classList.remove("scan-success"), 600);
    }

    DOM.cartSearchFilterInput.value = "";
    if (DOM.btnClearCartSearch) DOM.btnClearCartSearch.style.display = "none";
    DOM.cartSearchFilterInput.focus();
  } else {
    soundManager.playError();

    if (scanBox) {
      scanBox.classList.remove("scan-success");
      scanBox.classList.add("scan-error");
      setTimeout(() => scanBox.classList.remove("scan-error"), 500);
    }

    showToast(`Barcode / SKU "${code}" not found in inventory`, "error");
    DOM.cartSearchFilterInput.select();
  }
}

function updateCartItemQty(itemId, newQty) {
  const index = POS_STATE.cart.findIndex(i => i.id === itemId);
  if (index === -1) return;

  if (newQty <= 0) {
    removeFromCart(itemId);
  } else {
    POS_STATE.cart[index].qty = parseInt(newQty, 10);
    POS_STATE.lastUpdatedItemId = itemId;
    soundManager.playPop();
    renderCart();
    calculateTotals();
  }
}

function removeFromCart(itemId) {
  POS_STATE.cart = POS_STATE.cart.filter(i => i.id !== itemId);
  soundManager.playPop();
  renderCart();
  calculateTotals();
  showToast("Item removed from cart", "warning");
}

function setItemNote(itemId) {
  openItemNoteModal(itemId);
}

function clearCart(silent = false) {
  if (POS_STATE.cart.length === 0) return;
  
  if (!silent) {
    const confirmClear = confirm("Are you sure you want to clear all items from the current cart?");
    if (!confirmClear) return;
  }

  POS_STATE.cart = [];
  POS_STATE.tenderedCash = 0;
  POS_STATE.cartFilterQuery = "";
  if (DOM.cartSearchFilterInput) DOM.cartSearchFilterInput.value = "";
  if (DOM.btnClearCartSearch) DOM.btnClearCartSearch.style.display = "none";
  DOM.changeDueBox.classList.remove("visible");
  soundManager.playPop();
  renderCart();
  calculateTotals();
  if (!silent) showToast("Cart cleared", "warning");
}

const RETAIL_UNITS = [
  "Pcs",
  "Box",
  "Pack",
  "Set",
  "Pairs",
  "Kg",
  "Gm",
  "Ltr",
  "Bottle",
  "Bag",
  "Tube",
  "Jar",
  "Dzn",
  "Roll",
  "Meter",
  "Unit"
];

function renderUnitSelectOptions(currentUnit) {
  let list = [...RETAIL_UNITS];
  if (currentUnit && !list.some(u => u.toLowerCase() === currentUnit.toLowerCase())) {
    list.unshift(currentUnit);
  }
  return list
    .map(u => `<option value="${u}" ${u.toLowerCase() === (currentUnit || '').toLowerCase() ? 'selected' : ''}>${u}</option>`)
    .join("");
}

function renderBatchSelectOptions(item) {
  const batches = item.batches || [
    { no: "BTH-01 (12/26)" },
    { no: "BTH-02 (06/27)" },
    { no: "BTH-03 (10/27)" }
  ];
  const active = item.batch || batches[0].no;
  return batches
    .map(b => `<option value="${escapeHtml(b.no)}" ${b.no === active ? 'selected' : ''}>${escapeHtml(b.no)}</option>`)
    .join("");
}

function renderWarrantySelectOptions(activeWarranty) {
  const warranties = [
    { value: "", label: "No Warranty" },
    { value: "7 Days Return", label: "7 Days Return" },
    { value: "1 Mo Service", label: "1 Mo Service" },
    { value: "6 Months Replacement", label: "6 Mo Replace" },
    { value: "1 Yr Warranty", label: "1 Yr Warranty" },
    { value: "2 Years Extended", label: "2 Yrs Extended" },
    { value: "Lifetime Tool", label: "Lifetime Tool" },
    { value: "Official Brand", label: "Official Brand" }
  ];
  const active = activeWarranty || "";
  return warranties
    .map(w => `<option value="${w.value}" ${w.value === active ? 'selected' : ''}>${w.label}</option>`)
    .join("");
}

function getAmountFitClass(formattedStr) {
  if (!formattedStr) return "";
  const len = String(formattedStr).trim().length;
  if (len >= 13) return "amount-micro";
  if (len >= 9) return "amount-condensed";
  return "";
}

function recalculateLineAndTotals(item, row) {
  const basePrice = POS_STATE.pricingMode === "wholesale" && item.wholesalePrice ? item.wholesalePrice : item.price;
  const uPrice = item.customPrice !== null && item.customPrice !== undefined ? item.customPrice : basePrice;
  const rTotal = uPrice * item.qty;
  let d = 0;
  if (item.discount > 0) {
    d = item.discountType === "flat" ? Math.min(rTotal, item.discount * item.qty) : (rTotal * item.discount) / 100;
  }
  const lTotal = Math.max(0, rTotal - d);
  const formattedTotal = formatCurrency(lTotal);
  const totalTextEl = row.querySelector(".cart-box-total .total-text");
  if (totalTextEl) {
    totalTextEl.textContent = formattedTotal;
    totalTextEl.className = `total-text ${getAmountFitClass(formattedTotal)}`;
  }
  let strikethroughEl = row.querySelector(".cart-box-total .total-strikethrough");
  if (d > 0) {
    const formattedRaw = formatCurrency(rTotal);
    if (strikethroughEl) {
      strikethroughEl.textContent = formattedRaw;
      strikethroughEl.className = `total-strikethrough ${getAmountFitClass(formattedRaw)}`;
      strikethroughEl.style.display = "inline-block";
    } else {
      const totalBox = row.querySelector(".cart-box-total");
      if (totalBox) {
        strikethroughEl = document.createElement("span");
        strikethroughEl.className = `total-strikethrough ${getAmountFitClass(formattedRaw)}`;
        strikethroughEl.textContent = formattedRaw;
        totalBox.appendChild(strikethroughEl);
      }
    }
  } else if (strikethroughEl) {
    strikethroughEl.style.display = "none";
  }
  const totalBox = row.querySelector(".cart-box-total");
  if (totalBox) {
    totalBox.title = `Line Net Total: ${formattedTotal}. Click to view details.`;
  }
  calculateTotals();
}

function renderCart() {
  const cartList = DOM.cartItemsList;
  const items = POS_STATE.cart;

  const existingRows = cartList.querySelectorAll(".cart-item-row, .cart-filter-empty-msg");
  existingRows.forEach(r => r.remove());

  const totalUnits = items.reduce((sum, i) => sum + i.qty, 0);

  // Update High-Volume Header Metrics
  if (DOM.cartUniqueLinesBadge) DOM.cartUniqueLinesBadge.textContent = `${items.length} Lines`;
  if (DOM.cartTotalUnitsCount) DOM.cartTotalUnitsCount.textContent = `${totalUnits} Pcs`;
  DOM.cartTotalItemsCountBadge.textContent = `${totalUnits} Items`;
  DOM.mobileCartCountBadge.textContent = totalUnits;
  DOM.mobileBarItemCount.textContent = totalUnits;

  // Toggle View Density Class
  const isCompact = POS_STATE.cartDensity === "compact";
  cartList.classList.toggle("dense-mode", isCompact);
  if (DOM.cartTableHead) {
    DOM.cartTableHead.classList.toggle("dense-mode", isCompact);
  }
  if (DOM.btnToggleCartDensity) {
    DOM.btnToggleCartDensity.classList.toggle("active-tool", isCompact);
  }
  if (DOM.densityIcon) {
    DOM.densityIcon.className = isCompact ? "fa-solid fa-table-cells-large" : "fa-solid fa-list-ul";
  }
  if (DOM.densityText) {
    DOM.densityText.textContent = isCompact ? "Compact" : "Comfortable";
  }

  if (items.length === 0) {
    DOM.cartEmptyState.style.display = "flex";
    DOM.mobileStickyCartBar.classList.remove("visible");
    return;
  }

  DOM.cartEmptyState.style.display = "none";

  // Show sticky mobile bottom bar when on mobile and on catalog tab
  if (window.innerWidth <= 768 && POS_STATE.mobileActiveTab === "catalog") {
    DOM.mobileStickyCartBar.classList.add("visible");
  } else {
    DOM.mobileStickyCartBar.classList.remove("visible");
  }

  // Sort Items
  let displayItems = [...items];

  // Sorting
  if (POS_STATE.cartSortBy === "name") {
    displayItems.sort((a, b) => a.name.localeCompare(b.name));
  } else if (POS_STATE.cartSortBy === "price-desc") {
    displayItems.sort((a, b) => b.price - a.price);
  } else if (POS_STATE.cartSortBy === "qty-desc") {
    displayItems.sort((a, b) => b.qty - a.qty);
  }

  // Render each item with index numbering
  let targetPulseElement = null;

  displayItems.forEach((item, idx) => {
    const row = document.createElement("div");
    row.className = "cart-item-row";
    row.setAttribute("data-id", item.id);

    // Apply pulse glow if this was the recently touched item
    if (item.id === POS_STATE.lastUpdatedItemId) {
      row.classList.add("item-pulse");
      targetPulseElement = row;
    }

    // Determine active rate (retail vs wholesale vs custom override)
    const basePrice = POS_STATE.pricingMode === "wholesale" && item.wholesalePrice ? item.wholesalePrice : item.price;
    const unitPrice = item.customPrice !== null && item.customPrice !== undefined ? item.customPrice : basePrice;
    const rawTotal = unitPrice * item.qty;
    let itemDisc = 0;
    if (item.discount > 0) {
      itemDisc = item.discountType === "flat" ? Math.min(rawTotal, item.discount * item.qty) : (rawTotal * item.discount) / 100;
    }
    const lineTotal = Math.max(0, rawTotal - itemDisc);

    const origProd = POS_STATE.products.find(p => p.id === item.id || p.sku === item.sku);
    const stockAvail = origProd ? origProd.stock : 50;

    const stockBadge = `
      <span class="cart-stock-avail-tag" title="Warehouse stock available"><i class="fa-solid fa-boxes-stacked"></i> ${stockAvail}</span>
    `;

    const customPriceBadge = (item.customPrice !== null && item.customPrice !== undefined)
      ? `<span class="cart-custom-badge" title="Custom Unit Price Override">PRICE MOD</span>`
      : "";

    const taxExemptBadge = item.taxExempt
      ? `<span class="cart-tax-exempt-badge" title="Tax Exempt (0% VAT)">EXEMPT</span>`
      : "";

    const noteSnippet = item.note ? escapeHtml(item.note) : "";
    const noteIcon = item.note ? "fa-solid fa-note-sticky" : "fa-regular fa-note-sticky";
    const noteBadge = `
      <button type="button" class="btn-cart-note ${item.note ? 'filled' : 'empty'}" onclick="event.stopPropagation(); openItemNoteModal('${item.id}')" title="${item.note ? 'Note: ' + noteSnippet : 'Add Note / Instructions'}" aria-label="Item Note">
        <i class="${noteIcon}"></i>
      </button>
    `;

    let discBtnLabel = "0%";
    if (item.discount > 0) {
      discBtnLabel = item.discountType === "flat" ? `-${formatCurrency(item.discount)}` : `-${item.discount}%`;
    }

    let taxLabel = "5%";
    if (item.taxExempt) {
      taxLabel = "0% Ex";
    } else if (item.customVatRate !== null && item.customVatRate !== undefined) {
      taxLabel = `${item.customVatRate}%`;
    } else {
      const defaultTax = POS_STATE.taxRate !== undefined ? POS_STATE.taxRate : 5;
      taxLabel = `${defaultTax}%`;
    }

    const itemImage = item.image || "https://images.unsplash.com/photo-1526170375885-4d8ecf77b99f?w=100";

    row.innerHTML = `
      <span class="cart-row-index">#${idx + 1}</span>

      <div class="cart-row-info">
        <img class="cart-item-thumb" src="${itemImage}" alt="${item.name}" loading="lazy" />
        <div class="cart-row-text">
          <div class="cart-row-name-wrap">
            <span class="cart-row-name" title="${item.name}">${item.name}</span>
            <i class="fa-solid fa-pen-to-square row-edit-hint" title="Edit Pricing, VAT & Discount"></i>
          </div>
          <div class="cart-row-badges">
            <span class="cart-sku-tag">${item.sku}</span>
            ${stockBadge}
            ${customPriceBadge}
            ${taxExemptBadge}
            ${noteBadge}
          </div>
        </div>
      </div>

      <!-- 1. Batch Dropdown Box -->
      <div class="cart-box-batch" onclick="event.stopPropagation();">
        <select class="cart-batch-select" title="Batch / Lot Number">
          ${renderBatchSelectOptions(item)}
        </select>
      </div>

      <!-- 2. Quantity Box (Clean Direct Numeric Input, No +/- Buttons) -->
      <div class="cart-box-qty" onclick="event.stopPropagation();">
        <input type="number" class="cart-qty-input" value="${item.qty}" min="1" max="9999" title="Quantity" />
      </div>

      <!-- 3. Unit Dropdown Box -->
      <div class="cart-box-unit" onclick="event.stopPropagation();">
        <select class="cart-unit-select" title="Sales Unit">
          ${renderUnitSelectOptions(item.unit || 'Pcs')}
        </select>
      </div>

      <!-- 4. Unit Price Box (Directly Editable Numeric Input) -->
      <div class="cart-box-price" title="Unit Price (${POS_STATE.currencySymbol}). Type to edit." onclick="event.stopPropagation();">
        <input type="number" step="any" min="0" class="cart-price-input" value="${Number(unitPrice).toFixed(2)}" placeholder="0.00" title="Unit Price" />
      </div>

      <!-- 5. Discount Box (Directly Editable with % or $ Mode Toggle) -->
      <div class="cart-box-disc ${item.discount > 0 ? 'has-disc' : ''}" title="Discount. Click toggle button to switch % or ${POS_STATE.currencySymbol}." onclick="event.stopPropagation();">
        <input type="number" step="any" min="0" class="cart-disc-input" value="${item.discount > 0 ? item.discount : ''}" placeholder="0" title="Discount Value" />
        <button type="button" class="btn-disc-mode-toggle" title="Toggle Discount Mode (% or ${POS_STATE.currencySymbol})">${item.discountType === 'flat' ? POS_STATE.currencySymbol : '%'}</button>
      </div>

      <!-- 6. Tax / VAT Box (Directly Editable Percentage Input) -->
      <div class="cart-box-tax ${item.taxExempt ? 'tax-exempt' : ''}" title="Tax / VAT Rate (%). Type 0 for tax exempt." onclick="event.stopPropagation();">
        <input type="number" step="any" min="0" max="100" class="cart-tax-input" value="${item.taxExempt ? 0 : (item.customVatRate !== null && item.customVatRate !== undefined ? item.customVatRate : (POS_STATE.taxRate || 5))}" placeholder="0" title="Tax Rate (%)" />
        <span class="tax-unit-suffix">%</span>
      </div>

      <!-- 7. Total Box (Calculated Net Total) -->
      <div class="cart-box-total" title="Line Net Total: ${formatCurrency(lineTotal)}. Click to edit." onclick="event.stopPropagation(); openProductEditModal('${item.id}');">
        <span class="total-text ${getAmountFitClass(formatCurrency(lineTotal))}">${formatCurrency(lineTotal)}</span>
        ${itemDisc > 0 ? `<span class="total-strikethrough ${getAmountFitClass(formatCurrency(rawTotal))}">${formatCurrency(rawTotal)}</span>` : ''}
      </div>

      <!-- 8. Action Box -->
      <div class="cart-box-action" onclick="event.stopPropagation();">
        <button type="button" class="btn-row-action btn-del" title="Remove Item">
          <i class="fa-solid fa-trash-can"></i>
        </button>
      </div>
    `;

    // Clicking row opens Product Edit Modal
    row.addEventListener("click", () => {
      openProductEditModal(item.id);
    });

    const batchSelect = row.querySelector(".cart-batch-select");
    const qtyInput = row.querySelector(".cart-qty-input");
    const unitSelect = row.querySelector(".cart-unit-select");
    const priceInput = row.querySelector(".cart-price-input");
    const discInput = row.querySelector(".cart-disc-input");
    const discModeBtn = row.querySelector(".btn-disc-mode-toggle");
    const taxInput = row.querySelector(".cart-tax-input");
    const totalBox = row.querySelector(".cart-box-total");
    const btnDel = row.querySelector(".btn-del");

    if (batchSelect) {
      batchSelect.addEventListener("click", (e) => e.stopPropagation());
      batchSelect.addEventListener("change", (e) => {
        e.stopPropagation();
        item.batch = e.target.value;
        showToast(`Batch set to ${item.batch}`);
      });
    }

    if (qtyInput) {
      qtyInput.addEventListener("click", (e) => e.stopPropagation());
      qtyInput.addEventListener("input", (e) => {
        const val = parseInt(e.target.value, 10);
        if (!isNaN(val) && val > 0) {
          item.qty = val;
          recalculateLineAndTotals(item, row);
        }
      });
      qtyInput.addEventListener("change", (e) => {
        e.stopPropagation();
        const val = parseInt(e.target.value, 10);
        updateCartItemQty(item.id, isNaN(val) || val < 1 ? 1 : val);
      });
      qtyInput.addEventListener("keydown", (e) => {
        if (e.key === "Enter") qtyInput.blur();
      });
    }

    if (unitSelect) {
      unitSelect.addEventListener("click", (e) => e.stopPropagation());
      unitSelect.addEventListener("change", (e) => {
        e.stopPropagation();
        const newUnit = e.target.value;
        item.unit = newUnit;
        POS_STATE.lastUpdatedItemId = item.id;
        renderCart();
        calculateTotals();
        showToast(`Updated unit to ${newUnit} for ${item.name}`);
      });
    }

    if (priceInput) {
      priceInput.addEventListener("click", (e) => e.stopPropagation());
      priceInput.addEventListener("input", (e) => {
        const val = parseFloat(e.target.value);
        if (!isNaN(val) && val >= 0) {
          item.customPrice = val;
          recalculateLineAndTotals(item, row);
        }
      });
      priceInput.addEventListener("change", (e) => {
        e.stopPropagation();
        const val = parseFloat(e.target.value);
        const cleanVal = isNaN(val) || val < 0 ? 0 : val;
        item.customPrice = cleanVal;
        priceInput.value = cleanVal.toFixed(2);
        recalculateLineAndTotals(item, row);
      });
      priceInput.addEventListener("keydown", (e) => {
        if (e.key === "Enter") priceInput.blur();
      });
    }

    if (discInput) {
      discInput.addEventListener("click", (e) => e.stopPropagation());
      discInput.addEventListener("input", (e) => {
        const val = parseFloat(e.target.value);
        item.discount = isNaN(val) || val < 0 ? 0 : val;
        const discBox = row.querySelector(".cart-box-disc");
        if (discBox) discBox.classList.toggle("has-disc", item.discount > 0);
        recalculateLineAndTotals(item, row);
      });
      discInput.addEventListener("change", (e) => {
        e.stopPropagation();
        const val = parseFloat(e.target.value);
        const cleanVal = isNaN(val) || val < 0 ? 0 : val;
        item.discount = cleanVal;
        discInput.value = cleanVal > 0 ? cleanVal : "";
        recalculateLineAndTotals(item, row);
      });
      discInput.addEventListener("keydown", (e) => {
        if (e.key === "Enter") discInput.blur();
      });
    }

    if (discModeBtn) {
      discModeBtn.addEventListener("click", (e) => {
        e.stopPropagation();
        item.discountType = item.discountType === "flat" ? "percent" : "flat";
        discModeBtn.textContent = item.discountType === "flat" ? POS_STATE.currencySymbol : "%";
        discModeBtn.title = `Toggle Discount Mode (% or ${POS_STATE.currencySymbol})`;
        recalculateLineAndTotals(item, row);
        showToast(`Discount mode: ${item.discountType === "flat" ? "Flat (" + POS_STATE.currencySymbol + ")" : "Percentage (%)"}`);
      });
    }

    if (taxInput) {
      taxInput.addEventListener("click", (e) => e.stopPropagation());
      taxInput.addEventListener("input", (e) => {
        const val = parseFloat(e.target.value);
        if (!isNaN(val) && val >= 0) {
          item.customVatRate = val;
          item.taxExempt = (val === 0);
          const taxBox = row.querySelector(".cart-box-tax");
          if (taxBox) taxBox.classList.toggle("tax-exempt", item.taxExempt);
          calculateTotals();
        }
      });
      taxInput.addEventListener("change", (e) => {
        e.stopPropagation();
        const val = parseFloat(e.target.value);
        const cleanVal = isNaN(val) || val < 0 ? 0 : val;
        item.customVatRate = cleanVal;
        item.taxExempt = (cleanVal === 0);
        taxInput.value = cleanVal;
        calculateTotals();
      });
      taxInput.addEventListener("keydown", (e) => {
        if (e.key === "Enter") taxInput.blur();
      });
    }

    if (totalBox) {
      totalBox.addEventListener("click", (e) => {
        e.stopPropagation();
        openProductEditModal(item.id);
      });
    }

    if (btnDel) {
      btnDel.addEventListener("click", (e) => {
        e.stopPropagation();
        removeFromCart(item.id);
      });
    }

    cartList.appendChild(row);
  });

  // Auto-scroll to recently added item
  if (targetPulseElement) {
    setTimeout(() => {
      targetPulseElement.scrollIntoView({ behavior: "smooth", block: "nearest" });
    }, 50);
  }
  POS_STATE.lastUpdatedItemId = null;
}

window.removeFromCart = removeFromCart;
window.setItemNote = setItemNote;

// ==========================================================================
// 8. BILLING CALCULATIONS & TOTALS
// ==========================================================================
function calculateTotals() {
  const items = POS_STATE.cart;
  const totalUnits = items.reduce((sum, i) => sum + i.qty, 0);

  let subtotal = 0;
  let totalItemDiscount = 0;

  items.forEach(i => {
    const basePrice = POS_STATE.pricingMode === "wholesale" && i.wholesalePrice ? i.wholesalePrice : i.price;
    const unitPrice = i.customPrice !== null && i.customPrice !== undefined ? i.customPrice : basePrice;
    const lineGross = unitPrice * i.qty;
    let itemDisc = 0;
    if (i.discount > 0) {
      itemDisc = i.discountType === "flat" ? Math.min(lineGross, i.discount * i.qty) : (lineGross * i.discount) / 100;
    }
    totalItemDiscount += itemDisc;
    const lineNet = Math.max(0, lineGross - itemDisc);
    subtotal += lineNet;
  });

  const positiveSubtotal = Math.max(0, subtotal);

  // Cart / Order Level Discount (% or Flat)
  let discountAmount = 0;
  if (POS_STATE.cartDiscountValue > 0) {
    if (POS_STATE.cartDiscountType === "flat") {
      discountAmount = Math.min(positiveSubtotal, POS_STATE.cartDiscountValue);
    } else {
      discountAmount = (positiveSubtotal * POS_STATE.cartDiscountValue) / 100;
    }
  }

  const taxableAmount = Math.max(0, positiveSubtotal - discountAmount);

  // Calculate VAT based on item-level exemption and custom rates
  let taxAmount = 0;
  if (POS_STATE.taxEnabled) {
    items.forEach(i => {
      if (i.taxExempt) return;
      const baseP = POS_STATE.pricingMode === "wholesale" && i.wholesalePrice ? i.wholesalePrice : i.price;
      const itemPrice = i.customPrice !== null && i.customPrice !== undefined ? i.customPrice : baseP;
      const gross = itemPrice * i.qty;
      let disc = 0;
      if (i.discount > 0) {
        disc = i.discountType === "flat" ? Math.min(gross, i.discount * i.qty) : (gross * i.discount) / 100;
      }
      const net = Math.max(0, gross - disc);
      const effectiveNet = positiveSubtotal > 0 ? net * (1 - discountAmount / positiveSubtotal) : net;
      const rate = (i.customVatRate !== null && i.customVatRate !== undefined) ? i.customVatRate / 100 : POS_STATE.taxRate;
      taxAmount += effectiveNet * rate;
    });
  }

  // Shipping Cost
  const shippingFee = Math.max(0, parseFloat(POS_STATE.shippingCost) || 0);

  const grandTotal = Math.max(0, taxableAmount + taxAmount + shippingFee);

  const formattedSubtotal = formatCurrency(subtotal);
  const formattedTax = formatCurrency(taxAmount);
  const formattedShipping = formatCurrency(shippingFee);
  const formattedGrandTotal = formatCurrency(grandTotal);

  if (DOM.summaryTotalUnits) DOM.summaryTotalUnits.textContent = totalUnits;
  if (DOM.summarySubtotal) {
    DOM.summarySubtotal.textContent = formattedSubtotal;
    DOM.summarySubtotal.title = `Subtotal: ${formattedSubtotal}`;
    DOM.summarySubtotal.className = `matrix-value ${getAmountFitClass(formattedSubtotal)}`;
  }

  // Display Discount Amount, Input & Mode in Matrix
  if (DOM.summaryDiscountInput && document.activeElement !== DOM.summaryDiscountInput) {
    DOM.summaryDiscountInput.value = POS_STATE.cartDiscountValue > 0 ? POS_STATE.cartDiscountValue : (POS_STATE.cartDiscountValue === 0 ? "0" : "");
  }
  if (DOM.btnToggleOrderDiscMode) {
    const isPercent = POS_STATE.cartDiscountType === "percent";
    DOM.btnToggleOrderDiscMode.textContent = isPercent ? "%" : (POS_STATE.currencySymbol || "$");
    DOM.btnToggleOrderDiscMode.title = isPercent ? "Mode: Percentage (click to switch to Flat)" : "Mode: Flat Amount (click to switch to %)";
  }
  if (DOM.summaryDiscountAmount) {
    const formattedDisc = discountAmount > 0 ? `-${formatCurrency(discountAmount)}` : formatCurrency(0);
    DOM.summaryDiscountAmount.textContent = formattedDisc;
    DOM.summaryDiscountAmount.title = `Discount: ${formattedDisc}`;
    DOM.summaryDiscountAmount.className = `matrix-value ${getAmountFitClass(formattedDisc)}`;
  }
  if (DOM.summaryDiscountLabel) {
    if (discountAmount > 0) {
      DOM.summaryDiscountLabel.style.display = "inline-block";
      DOM.summaryDiscountLabel.textContent = `-${formatCurrency(discountAmount)}`;
      DOM.summaryDiscountLabel.title = `Actual Deduction: -${formatCurrency(discountAmount)} (${POS_STATE.cartDiscountType === "flat" ? "Flat" : POS_STATE.cartDiscountValue + "%"})`;
    } else {
      DOM.summaryDiscountLabel.style.display = "none";
    }
  }

  // Display Shipping Fee & Input in Matrix
  if (DOM.summaryShippingPrefix) {
    DOM.summaryShippingPrefix.textContent = POS_STATE.currencySymbol || "$";
  }
  if (DOM.summaryShippingInput && document.activeElement !== DOM.summaryShippingInput) {
    DOM.summaryShippingInput.value = POS_STATE.shippingCost > 0 ? POS_STATE.shippingCost : (POS_STATE.shippingCost === 0 ? "0" : "");
  }
  if (DOM.summaryCourierFee) {
    DOM.summaryCourierFee.textContent = formattedShipping;
    DOM.summaryCourierFee.title = `Shipping Fee: ${formattedShipping}`;
    DOM.summaryCourierFee.className = `matrix-value ${getAmountFitClass(formattedShipping)}`;
  }

  if (DOM.summaryTax) {
    DOM.summaryTax.textContent = formattedTax;
    DOM.summaryTax.title = `Tax Amount: ${formattedTax}`;
    DOM.summaryTax.className = `matrix-value matrix-tax-val ${getAmountFitClass(formattedTax)}`;
  }

  // Synchronize VAT Rate Dropdown
  if (DOM.vatRateSelect && document.activeElement !== DOM.vatRateSelect) {
    const currentRateStr = String(POS_STATE.taxRate);
    if (DOM.vatRateSelect.value !== currentRateStr) {
      DOM.vatRateSelect.value = currentRateStr;
    }
  }

  // Calculate & Display Dynamic Earned Loyalty Points (1 Pt per $10 spent)
  const earnedPoints = grandTotal > 0 ? Math.floor(grandTotal / 10) : 0;
  if (DOM.orderEarnedPoints) {
    DOM.orderEarnedPoints.textContent = `+${earnedPoints} Pts`;
  }

  // Synchronize Applied Coupon Tag
  if (DOM.appliedCouponTag) {
    if (POS_STATE.appliedCoupon) {
      DOM.appliedCouponTag.style.display = "inline-flex";
      if (DOM.appliedCouponText) {
        DOM.appliedCouponText.textContent = `${POS_STATE.appliedCoupon.code} (${POS_STATE.appliedCoupon.desc})`;
      }
    } else {
      DOM.appliedCouponTag.style.display = "none";
    }
  }

  if (DOM.summaryGrandTotal) {
    DOM.summaryGrandTotal.textContent = formattedGrandTotal;
    DOM.summaryGrandTotal.title = `Grand Total: ${formattedGrandTotal}`;
    DOM.summaryGrandTotal.className = `total-number-compact ${formattedGrandTotal.length >= 13 ? 'total-micro' : (formattedGrandTotal.length >= 9 ? 'total-condensed' : '')}`;
  }

  // Sync with mobile sticky bottom bar
  if (DOM.mobileBarTotalPrice) {
    DOM.mobileBarTotalPrice.textContent = formattedGrandTotal;
  }
  return { subtotal, discountAmount, taxAmount, courierFee: shippingFee, grandTotal, totalUnits };
}

// ==========================================================================
// 9. PARK / HOLD CART FUNCTIONALITY (RETAIL SALESMAN BENEFIT)
// ==========================================================================
function holdCurrentCart() {
  if (POS_STATE.cart.length === 0) {
    showToast("Cannot hold an empty cart", "warning");
    return;
  }

  const heldOrder = {
    orderNumber: POS_STATE.currentOrderNumber,
    timestamp: new Date().toLocaleTimeString([], { hour: "2-digit", minute: "2-digit" }),
    customer: { ...POS_STATE.activeCustomer },
    pricingMode: POS_STATE.pricingMode,
    cart: [...POS_STATE.cart],
    discountPercent: POS_STATE.discountPercent,
    taxEnabled: POS_STATE.taxEnabled,
    total: calculateTotals().grandTotal
  };

  POS_STATE.heldOrders.push(heldOrder);
  DOM.heldOrdersBadge.textContent = POS_STATE.heldOrders.length;

  clearCart(true);
  POS_STATE.currentOrderNumber = generateOrderNumber();
  DOM.currentOrderNumber.textContent = POS_STATE.currentOrderNumber;

  soundManager.playSuccess();
  showToast(`Order ${heldOrder.orderNumber} parked successfully! Ready for next customer.`);
}

function renderHeldOrdersList() {
  const container = DOM.heldOrdersList;
  container.innerHTML = "";

  if (POS_STATE.heldOrders.length === 0) {
    DOM.noHeldOrdersMsg.style.display = "block";
  } else {
    DOM.noHeldOrdersMsg.style.display = "none";
    POS_STATE.heldOrders.forEach((held, idx) => {
      const card = document.createElement("div");
      card.className = "held-card";
      card.innerHTML = `
        <div class="held-meta-left">
          <span class="held-order-num">${held.orderNumber} &bull; ${held.customer.name}</span>
          <span class="held-time">Parked at ${held.timestamp} &bull; ${held.pricingMode.toUpperCase()}</span>
          <span class="held-summary">${held.cart.length} items &bull; Total: ${formatCurrency(held.total)}</span>
        </div>
        <div class="held-actions">
          <button class="btn-resume-held" data-idx="${idx}"><i class="fa-solid fa-play"></i> Resume</button>
          <button class="btn-delete-held" data-idx="${idx}" title="Discard Order"><i class="fa-solid fa-trash"></i></button>
        </div>
      `;

      card.querySelector(".btn-resume-held").addEventListener("click", () => resumeHeldOrder(idx));
      card.querySelector(".btn-delete-held").addEventListener("click", () => discardHeldOrder(idx));

      container.appendChild(card);
    });
  }
}

function resumeHeldOrder(idx) {
  if (POS_STATE.cart.length > 0) {
    const ok = confirm("Resuming will replace your current active cart. Proceed?");
    if (!ok) return;
  }

  const order = POS_STATE.heldOrders.splice(idx, 1)[0];
  DOM.heldOrdersBadge.textContent = POS_STATE.heldOrders.length;

  POS_STATE.cart = order.cart;
  POS_STATE.currentOrderNumber = order.orderNumber;
  POS_STATE.activeCustomer = order.customer;
  POS_STATE.pricingMode = order.pricingMode;
  POS_STATE.discountPercent = order.discountPercent;
  POS_STATE.taxEnabled = order.taxEnabled;

  // Update Pricing Switch UI
  DOM.pricingModeSwitch.querySelectorAll(".mode-btn").forEach(b => {
    b.classList.toggle("active", b.getAttribute("data-mode") === POS_STATE.pricingMode);
  });

  updateCustomerDisplay();
  DOM.currentOrderNumber.textContent = POS_STATE.currentOrderNumber;
  DOM.heldOrdersModalOverlay.classList.remove("active");

  renderCart();
  calculateTotals();
  soundManager.playSuccess();
  showToast(`Resumed Order ${order.orderNumber}`);
}

function discardHeldOrder(idx) {
  POS_STATE.heldOrders.splice(idx, 1);
  DOM.heldOrdersBadge.textContent = POS_STATE.heldOrders.length;
  renderHeldOrdersList();
  showToast("Parked order discarded", "warning");
}

// ==========================================================================
// 10. PAYMENT & RETAIL 80mm RECEIPT GENERATOR
// ==========================================================================

function openPaymentModal() {
  if (POS_STATE.cart.length === 0) {
    showToast("Cart is empty! Scan or select products first.", "warning");
    return;
  }

  const totals = calculateTotals();
  const payable = POS_STATE.currency === "BDT" ? totals.grandTotal * 118 : totals.grandTotal;

  if (DOM.modalPayableTotal) DOM.modalPayableTotal.textContent = `${POS_STATE.currencySymbol}${payable.toFixed(2)}`;
  if (DOM.modalCurrencyPrefix) DOM.modalCurrencyPrefix.textContent = POS_STATE.currencySymbol;
  if (DOM.modalOrderBadge) DOM.modalOrderBadge.textContent = POS_STATE.currentOrderNumber;
  if (DOM.modalCustomerBadge) DOM.modalCustomerBadge.textContent = POS_STATE.activeCustomer.name;

  // Populate Customer Profile & Ledger Deck if registered customer, else hide
  if (DOM.modalCustomerProfileDeck) {
    if (!POS_STATE.activeCustomer.isWalkIn) {
      DOM.modalCustomerProfileDeck.style.display = "block";
      if (DOM.modalCustProfileName) DOM.modalCustProfileName.textContent = POS_STATE.activeCustomer.name;
      if (DOM.modalCustProfileTier) DOM.modalCustProfileTier.textContent = POS_STATE.activeCustomer.tier || "VIP Customer";
      if (DOM.modalCustProfilePhone) DOM.modalCustProfilePhone.textContent = POS_STATE.activeCustomer.phone || "";
      if (DOM.modalCustInvoicesCount) DOM.modalCustInvoicesCount.textContent = `${POS_STATE.activeCustomer.invoiceCount || 0} Orders`;
      if (DOM.modalCustPreviousDue) DOM.modalCustPreviousDue.textContent = formatCurrency(POS_STATE.activeCustomer.dueBalance || 0);
      if (DOM.modalCustDepositBalance) DOM.modalCustDepositBalance.textContent = formatCurrency(POS_STATE.activeCustomer.deposit || 0);
      if (DOM.modalCustRunningPoints) DOM.modalCustRunningPoints.textContent = `${(POS_STATE.activeCustomer.points || 0).toLocaleString()} Pts`;
    } else {
      DOM.modalCustomerProfileDeck.style.display = "none";
    }
  }

  // Initialize payment rows with single primary row matching total payable
  POS_STATE.paymentRows = [
    { id: 1, method: "cash", account: "cash_register", amount: parseFloat(payable.toFixed(2)), trxRef: "" }
  ];

  // Pre-fill notes
  if (DOM.modalSalesNote) DOM.modalSalesNote.value = POS_STATE.salesNote || "";
  if (DOM.modalPaymentNote) DOM.modalPaymentNote.value = POS_STATE.paymentNote || "";
  if (DOM.modalTermsConditionsSelect) DOM.modalTermsConditionsSelect.value = POS_STATE.termsAndConditions || "standard";
  if (DOM.orderReferenceInput) DOM.orderReferenceInput.value = POS_STATE.orderReference || "";

  renderPaymentRows();
  updatePaymentCalculations();

  DOM.paymentModalOverlay.classList.add("active");
  setTimeout(() => {
    const mainInput = document.getElementById("cashReceivedInput");
    if (mainInput) {
      mainInput.focus();
      mainInput.select();
    }
  }, 150);
}

function renderPaymentRows() {
  if (!DOM.paymentRowsContainer) return;
  DOM.paymentRowsContainer.innerHTML = "";

  POS_STATE.paymentRows.forEach((row, index) => {
    const rowEl = document.createElement("div");
    rowEl.className = "split-pay-row";
    rowEl.setAttribute("data-row-id", row.id);

    const accountsOptions = Object.values(PAYMENT_ACCOUNTS_META).map(acc => {
      const isSelected = row.account === acc.id ? "selected" : "";
      return `<option value="${acc.id}" ${isSelected}>${escapeHtml(acc.name)}</option>`;
    }).join("");

    rowEl.innerHTML = `
      <div class="pay-field-method">
        <label class="pay-field-micro-label">Method</label>
        <select class="pay-row-select pay-row-method-select">
          <option value="cash" ${row.method === "cash" ? "selected" : ""}>💵 Cash</option>
          <option value="card" ${row.method === "card" ? "selected" : ""}>💳 Card</option>
          <option value="mobile" ${row.method === "mobile" ? "selected" : ""}>📱 Micro Wallet</option>
          <option value="bank" ${row.method === "bank" ? "selected" : ""}>🏦 Bank</option>
        </select>
      </div>
      <div class="pay-field-account">
        <label class="pay-field-micro-label">Account</label>
        <select class="pay-row-select pay-row-account-select">
          ${accountsOptions}
        </select>
      </div>
      <div class="pay-field-amount">
        <label class="pay-field-micro-label">Amount</label>
        <div class="pay-amount-input-wrap">
          <span class="pay-curr-tag">${POS_STATE.currencySymbol}</span>
          <input type="number" step="any" class="pay-row-amount-input" ${index === 0 ? 'id="cashReceivedInput"' : ''} value="${row.amount !== 0 ? row.amount : ''}" placeholder="0.00" />
        </div>
      </div>
      ${index > 0 ? `<button type="button" class="btn-del-pay-row" title="Remove method">&times;</button>` : ''}
    `;

    const methodSelect = rowEl.querySelector(".pay-row-method-select");
    const accountSelect = rowEl.querySelector(".pay-row-account-select");
    const amountInput = rowEl.querySelector(".pay-row-amount-input");
    const delBtn = rowEl.querySelector(".btn-del-pay-row");

    methodSelect.addEventListener("change", (e) => {
      row.method = e.target.value;
      if (row.method === "cash") row.account = "cash_register";
      else if (row.method === "card") row.account = "city_bank";
      else if (row.method === "mobile") row.account = "bkash";
      else if (row.method === "bank") row.account = "dbbl";
      accountSelect.value = row.account;
      soundManager.playPop();
      updatePaymentCalculations();
    });

    accountSelect.addEventListener("change", (e) => {
      row.account = e.target.value;
    });

    amountInput.addEventListener("input", (e) => {
      row.amount = parseFloat(e.target.value) || 0;
      updatePaymentCalculations();
    });

    if (delBtn) {
      delBtn.addEventListener("click", () => {
        removePaymentRow(row.id);
      });
    }

    DOM.paymentRowsContainer.appendChild(rowEl);
  });

  DOM.cashReceivedInput = document.getElementById("cashReceivedInput");
}

function addSplitPaymentRow() {
  const totals = calculateTotals();
  const payable = POS_STATE.currency === "BDT" ? totals.grandTotal * 118 : totals.grandTotal;
  const currentTotalPaid = POS_STATE.paymentRows.reduce((sum, r) => sum + (parseFloat(r.amount) || 0), 0);
  const remaining = Math.max(0, payable - currentTotalPaid);

  const nextId = (POS_STATE.paymentRows.length > 0 ? Math.max(...POS_STATE.paymentRows.map(r => r.id)) : 0) + 1;
  const usedMethods = new Set(POS_STATE.paymentRows.map(r => r.method));
  let nextMethod = "card";
  let nextAccount = "city_bank";
  if (usedMethods.has("card") && !usedMethods.has("mobile")) {
    nextMethod = "mobile";
    nextAccount = "bkash";
  } else if (usedMethods.has("card") && usedMethods.has("mobile")) {
    nextMethod = "bank";
    nextAccount = "dbbl";
  }

  POS_STATE.paymentRows.push({
    id: nextId,
    method: nextMethod,
    account: nextAccount,
    amount: parseFloat(remaining.toFixed(2)),
    trxRef: ""
  });

  soundManager.playPop();
  renderPaymentRows();
  updatePaymentCalculations();

  const newRowInput = DOM.paymentRowsContainer.querySelector(`[data-row-id="${nextId}"] .pay-row-amount-input`);
  if (newRowInput) {
    newRowInput.focus();
    newRowInput.select();
  }
}

function removePaymentRow(rowId) {
  if (POS_STATE.paymentRows.length <= 1) return;
  POS_STATE.paymentRows = POS_STATE.paymentRows.filter(r => r.id !== rowId);
  soundManager.playPop();
  renderPaymentRows();
  updatePaymentCalculations();
}

function updatePaymentCalculations() {
  const totals = calculateTotals();
  const payable = POS_STATE.currency === "BDT" ? totals.grandTotal * 118 : totals.grandTotal;
  const totalPaid = POS_STATE.paymentRows.reduce((sum, r) => sum + (parseFloat(r.amount) || 0), 0);

  if (DOM.modalPayableTotal) {
    DOM.modalPayableTotal.textContent = `${POS_STATE.currencySymbol}${payable.toFixed(2)}`;
  }
  if (DOM.modalTotalTendered) {
    DOM.modalTotalTendered.textContent = `${POS_STATE.currencySymbol}${totalPaid.toFixed(2)}`;
  }

  const statusTile = DOM.modalFinancialStatusTile;
  const statusLabel = DOM.modalStatusLabel;
  const changeDueEl = DOM.modalChangeDue;
  const dueNotice = DOM.dueNoticeBox;
  const summaryBadge = DOM.modalPaymentSummaryBadge;

  if (statusTile) {
    statusTile.classList.remove("status-settled", "status-change", "status-due");
  }

  const diff = totalPaid - payable;
  const tolerance = 0.005;

  if (diff > tolerance) {
    const changeAmount = diff;
    if (statusTile) statusTile.classList.add("status-change");
    if (statusLabel) statusLabel.innerHTML = `<i class="fa-solid fa-hand-holding-dollar"></i> Change Return`;
    if (changeDueEl) changeDueEl.textContent = `${POS_STATE.currencySymbol}${changeAmount.toFixed(2)}`;
    if (dueNotice) dueNotice.style.display = "none";
    if (summaryBadge) {
      summaryBadge.className = "footer-status-chip";
      summaryBadge.style.background = "#ecfdf5";
      summaryBadge.style.borderColor = "#a7f3d0";
      summaryBadge.style.color = "#059669";
      summaryBadge.innerHTML = `<i class="fa-solid fa-check"></i> Return Change: ${POS_STATE.currencySymbol}${changeAmount.toFixed(2)}`;
    }
  } else if (diff < -tolerance) {
    const dueAmount = Math.abs(diff);
    if (statusTile) statusTile.classList.add("status-due");
    if (statusLabel) statusLabel.innerHTML = `<i class="fa-solid fa-triangle-exclamation"></i> Due Balance`;
    if (changeDueEl) changeDueEl.textContent = `${POS_STATE.currencySymbol}${dueAmount.toFixed(2)}`;
    if (dueNotice) {
      dueNotice.style.display = "block";
      const noticeAmount = document.getElementById("modalDueNoticeAmount");
      if (noticeAmount) noticeAmount.textContent = `${POS_STATE.currencySymbol}${dueAmount.toFixed(2)}`;
      if (DOM.dueCustomerTargetName) DOM.dueCustomerTargetName.textContent = POS_STATE.activeCustomer.name;
    }
    if (summaryBadge) {
      summaryBadge.className = "footer-status-chip";
      summaryBadge.style.background = "#fff1f2";
      summaryBadge.style.borderColor = "#fecdd3";
      summaryBadge.style.color = "#be123c";
      summaryBadge.innerHTML = `<i class="fa-solid fa-file-invoice-dollar"></i> Due Amount: ${POS_STATE.currencySymbol}${dueAmount.toFixed(2)}`;
    }
  } else {
    if (statusTile) statusTile.classList.add("status-settled");
    if (statusLabel) statusLabel.innerHTML = `<i class="fa-solid fa-circle-check"></i> Paid in Full`;
    if (changeDueEl) changeDueEl.textContent = `${POS_STATE.currencySymbol}0.00`;
    if (dueNotice) dueNotice.style.display = "none";
    if (summaryBadge) {
      summaryBadge.className = "footer-status-chip";
      summaryBadge.style.background = "#f8fafc";
      summaryBadge.style.borderColor = "#cbd5e1";
      summaryBadge.style.color = "#334155";
      summaryBadge.innerHTML = `<i class="fa-solid fa-shield-check"></i> Exact Amount Settled`;
    }
  }
}

// Backward compatibility helper
function updateModalChangeCalculation() {
  updatePaymentCalculations();
}

function updateModalPaymentMethodUI() {
  updatePaymentCalculations();
}

function handleQuickTender(type) {
  const totals = calculateTotals();
  const payable = POS_STATE.currency === "BDT" ? totals.grandTotal * 118 : totals.grandTotal;

  if (type === "exact") {
    POS_STATE.paymentRows = [
      { id: 1, method: POS_STATE.paymentRows[0]?.method || "cash", account: POS_STATE.paymentRows[0]?.account || "cash_register", amount: parseFloat(payable.toFixed(2)), trxRef: POS_STATE.paymentRows[0]?.trxRef || "" }
    ];
  } else if (type === "clear") {
    POS_STATE.paymentRows = [
      { id: 1, method: POS_STATE.paymentRows[0]?.method || "cash", account: POS_STATE.paymentRows[0]?.account || "cash_register", amount: 0, trxRef: POS_STATE.paymentRows[0]?.trxRef || "" }
    ];
  } else if (type === "round") {
    let rounded = Math.ceil(payable);
    if (rounded % 10 !== 0) rounded = Math.ceil(rounded / 10) * 10;
    if (rounded < payable) rounded += 10;
    POS_STATE.paymentRows[0].amount = rounded;
  } else {
    const addVal = parseFloat(type) || 0;
    POS_STATE.paymentRows[0].amount = (parseFloat(POS_STATE.paymentRows[0].amount) || 0) + addVal;
  }

  soundManager.playPop();
  renderPaymentRows();
  updatePaymentCalculations();

  if (DOM.cashReceivedInput) {
    DOM.cashReceivedInput.focus();
    DOM.cashReceivedInput.select();
  }
}

function confirmPaymentAndGenerateReceipt() {
  const totals = calculateTotals();
  const payable = POS_STATE.currency === "BDT" ? totals.grandTotal * 118 : totals.grandTotal;
  const totalPaid = POS_STATE.paymentRows.reduce((sum, r) => sum + (parseFloat(r.amount) || 0), 0);

  const diff = totalPaid - payable;
  const isDueSale = diff < -0.005;
  const dueAmount = isDueSale ? Math.abs(diff) : 0;
  const changeDue = diff > 0.005 ? diff : 0;

  if (isDueSale && POS_STATE.activeCustomer.isWalkIn) {
    showToast("Due / Credit sale requires a registered customer! Please select customer.", "warning");
    DOM.paymentModalOverlay.classList.remove("active");
    DOM.customerModalOverlay.classList.add("active");
    renderCustomerSearchResults();
    return;
  }

  if (isDueSale) {
    const baseDueAmt = POS_STATE.currency === "BDT" ? dueAmount / 118 : dueAmount;
    POS_STATE.activeCustomer.dueBalance += baseDueAmt;
    updateCustomerDisplay();
    showToast(`Due balance of ${formatCurrency(baseDueAmt)} logged to ${POS_STATE.activeCustomer.name}'s account!`);
  }

  // Increment customer invoice count for registered customer
  if (!POS_STATE.activeCustomer.isWalkIn) {
    POS_STATE.activeCustomer.invoiceCount = (POS_STATE.activeCustomer.invoiceCount || 0) + 1;
    const existing = POS_STATE.customers.find(c => c.id === POS_STATE.activeCustomer.id);
    if (existing) {
      existing.invoiceCount = POS_STATE.activeCustomer.invoiceCount;
      existing.dueBalance = POS_STATE.activeCustomer.dueBalance;
    }
  }

  // Update Shift Sales Breakdown
  POS_STATE.paymentRows.forEach(row => {
    const rowAmt = parseFloat(row.amount) || 0;
    if (rowAmt <= 0) return;
    const baseAmt = POS_STATE.currency === "BDT" ? rowAmt / 118 : rowAmt;
    if (row.method === "cash") POS_STATE.shiftCashSales += baseAmt;
    else if (row.method === "card") POS_STATE.shiftCardSales += baseAmt;
    else if (row.method === "mobile") POS_STATE.shiftMobileSales += baseAmt;
    else if (row.method === "bank") POS_STATE.shiftCardSales += baseAmt;
  });

  if (isDueSale) {
    const baseDueAmt = POS_STATE.currency === "BDT" ? dueAmount / 118 : dueAmount;
    POS_STATE.shiftDueSales += baseDueAmt;
  }

  POS_STATE.shiftSales += totals.grandTotal;
  POS_STATE.shiftInvoices += 1;
  DOM.headerTotalSales.textContent = formatCurrency(POS_STATE.shiftSales);
  DOM.headerInvoiceCount.textContent = POS_STATE.shiftInvoices;

  soundManager.playSuccess();

  let modeLabel = "Retail Sale";
  if (POS_STATE.pricingMode === "wholesale") modeLabel = "Wholesale Sale";

  const branchName = POS_STATE.selectedBranch || "Main Branch (Downtown HQ)";
  const billerName = POS_STATE.selectedBiller || "Alex Smith (Terminal 01)";
  const salesmanName = POS_STATE.selectedSalesman || "Alex Smith (Sales Rep #101)";
  const refNum = (DOM.orderReferenceInput ? DOM.orderReferenceInput.value.trim() : "") || POS_STATE.orderReference || "";
  const salesNote = DOM.modalSalesNote ? DOM.modalSalesNote.value.trim() : "";
  const paymentNote = DOM.modalPaymentNote ? DOM.modalPaymentNote.value.trim() : "";
  const selectedTermsKey = DOM.modalTermsConditionsSelect ? DOM.modalTermsConditionsSelect.value : "standard";
  const termsText = PAYMENT_TERMS_META[selectedTermsKey] || PAYMENT_TERMS_META.standard;

  const now = new Date();
  const orderDateStr = now.toLocaleDateString("en-GB", { day: '2-digit', month: 'short', year: 'numeric' }) + " " + now.toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' });

  const activeRowsWithAmount = POS_STATE.paymentRows.filter(r => (parseFloat(r.amount) || 0) > 0);
  const paymentMethodSummary = activeRowsWithAmount.length > 0
    ? activeRowsWithAmount.map(r => `${r.method.toUpperCase()} (${POS_STATE.currencySymbol}${parseFloat(r.amount).toFixed(2)})`).join(" + ")
    : (isDueSale ? "DUE / CREDIT" : "CASH");

  const receiptData = {
    invoiceNum: POS_STATE.currentOrderNumber,
    date: orderDateStr,
    customer: POS_STATE.activeCustomer.name,
    customerPhone: POS_STATE.activeCustomer.phone,
    pricingMode: modeLabel,
    branch: branchName,
    biller: billerName,
    salesman: salesmanName,
    reference: refNum,
    salesNote: salesNote,
    paymentNote: paymentNote,
    terms: termsText,
    items: JSON.parse(JSON.stringify(POS_STATE.cart)),
    subtotal: totals.subtotal,
    discountAmount: totals.discountAmount,
    discountType: POS_STATE.cartDiscountType,
    discountValue: POS_STATE.cartDiscountValue,
    courierFee: totals.courierFee || 0,
    taxAmount: totals.taxAmount,
    grandTotal: totals.grandTotal,
    paymentMethod: paymentMethodSummary,
    paymentRows: JSON.parse(JSON.stringify(POS_STATE.paymentRows)),
    tendered: totalPaid,
    changeDue: changeDue,
    dueAmount: dueAmount
  };

  // Add to Recent Receipts list
  POS_STATE.recentReceipts.unshift({
    ...receiptData,
    itemsCount: POS_STATE.cart.reduce((s, i) => s + i.qty, 0)
  });

  // Add to Recent Transactions list
  const primaryMethod = POS_STATE.paymentRows[0]?.method?.toUpperCase() || (isDueSale ? "DUE" : "CASH");
  const newTrx = {
    trxId: `TRX-${Math.floor(10000 + Math.random() * 90000)}`,
    orderRef: POS_STATE.currentOrderNumber,
    timestamp: orderDateStr,
    customer: POS_STATE.activeCustomer.name,
    biller: billerName.split(" (")[0],
    method: POS_STATE.paymentRows.length > 1 ? `SPLIT (${primaryMethod}+)` : primaryMethod,
    amount: totals.grandTotal,
    change: changeDue,
    status: isDueSale ? "Due Ledger" : "Settled"
  };
  POS_STATE.recentTransactions.unshift(newTrx);

  // Populate Printable Receipt
  populateReceiptModal(receiptData);

  DOM.paymentModalOverlay.classList.remove("active");
  DOM.receiptModalOverlay.classList.add("active");
}

function populateReceiptModal(data) {
  DOM.recInvoiceNum.textContent = data.invoiceNum;
  DOM.recDate.textContent = data.date;
  DOM.recPricingMode.textContent = data.pricingMode;
  DOM.recCustomer.textContent = data.customer;

  // Branch Info (Item 3)
  if (DOM.recBranchTitle) {
    const branchInfo = BRANCH_DETAILS[data.branch] || BRANCH_DETAILS["Main Branch (Downtown HQ)"];
    DOM.recBranchTitle.textContent = branchInfo.title;
    if (DOM.recBranchAddress) {
      DOM.recBranchAddress.textContent = `${branchInfo.address} • Hotline: ${branchInfo.phone}`;
    }
  }
  if (DOM.recBranchName) DOM.recBranchName.textContent = data.branch ? data.branch.split(" (")[0] : "Main Branch";

  // Biller & Salesman (Items 1 & 2)
  if (DOM.recBiller) DOM.recBiller.textContent = data.biller ? data.biller.split(" (")[0] : "Alex Smith";
  if (DOM.recSalesman) DOM.recSalesman.textContent = data.salesman ? data.salesman.split(" (")[0] : "Alex Smith";

  // Reference Number (Item 6)
  if (DOM.recRefRow) {
    if (data.reference) {
      DOM.recRefRow.style.display = "inline";
      if (DOM.recRefNum) DOM.recRefNum.textContent = data.reference;
    } else {
      DOM.recRefRow.style.display = "none";
    }
  }

  // Customer Contact
  if (DOM.recCustPhoneRow) {
    if (data.customerPhone && data.customerPhone !== "General Retail Sale") {
      DOM.recCustPhoneRow.style.display = "flex";
      if (DOM.recCustomerPhone) DOM.recCustomerPhone.textContent = data.customerPhone;
    } else {
      DOM.recCustPhoneRow.style.display = "none";
    }
  }

  DOM.receiptItemsTbody.innerHTML = "";
  data.items.forEach(item => {
    const tr = document.createElement("tr");
    const unitPrice = POS_STATE.pricingMode === "wholesale" && item.wholesalePrice ? item.wholesalePrice : item.price;
    const rawTotal = unitPrice * item.qty;
    let itemDisc = 0;
    if (item.discount > 0) {
      itemDisc = item.discountType === "flat" ? Math.min(rawTotal, item.discount * item.qty) : (rawTotal * item.discount) / 100;
    }
    const lineTotal = Math.max(0, rawTotal - itemDisc);
    const warrantyText = item.warranty ? ` &bull; <small style="color:#0284c7; font-weight:600;"><i class="fa-solid fa-shield-halved"></i> ${escapeHtml(item.warranty)}</small>` : "";
    let imeiText = "";
    if (Array.isArray(item.imeis) && item.imeis.length > 0) {
      if (item.imeis.length === 1) {
        imeiText = `<br/><small style="color:#0369a1; font-family:var(--font-mono); font-weight:700;"><i class="fa-solid fa-mobile-screen"></i> IMEI: ${escapeHtml(item.imeis[0])}</small>`;
      } else {
        const list = item.imeis.map((val, idx) => `#${idx + 1}: ${escapeHtml(val)}`).join(", ");
        imeiText = `<br/><small style="color:#0369a1; font-family:var(--font-mono); font-weight:700;"><i class="fa-solid fa-mobile-screen"></i> IMEIs (${item.imeis.length}): ${list}</small>`;
      }
    } else if (item.imei) {
      imeiText = `<br/><small style="color:#0369a1; font-family:var(--font-mono); font-weight:700;"><i class="fa-solid fa-mobile-screen"></i> IMEI: ${escapeHtml(item.imei)}</small>`;
    }

    tr.innerHTML = `
      <td>
        <strong style="display:block;">${item.name}</strong>
        <small style="color:#64748b; font-family:var(--font-mono);">${item.sku}${warrantyText}</small>
        ${imeiText}
        ${serialText}
      </td>
      <td>x${item.qty}</td>
      <td class="text-right">${formatCurrency(unitPrice)}</td>
      <td class="text-right">${formatCurrency(lineTotal)}</td>
    `;
    DOM.receiptItemsTbody.appendChild(tr);
  });

  DOM.recSubtotal.textContent = formatCurrency(data.subtotal);

  if (data.discountAmount > 0) {
    DOM.recDiscountRow.style.display = "table-row";
    const discLabel = data.discountType === "flat" ? " (Flat)" : ` (${data.discountValue}%)`;
    DOM.recDiscount.textContent = `-${formatCurrency(data.discountAmount)}${discLabel}`;
  } else {
    DOM.recDiscountRow.style.display = "none";
  }

  if (data.courierFee > 0 && DOM.recCourierRow) {
    DOM.recCourierRow.style.display = "table-row";
    DOM.recCourierFee.textContent = formatCurrency(data.courierFee);
  } else if (DOM.recCourierRow) {
    DOM.recCourierRow.style.display = "none";
  }

  DOM.recTax.textContent = formatCurrency(data.taxAmount);
  DOM.recGrandTotal.textContent = formatCurrency(data.grandTotal);
  DOM.recPayMethod.textContent = data.paymentMethod === "DUE" ? "DUE / CREDIT" : data.paymentMethod;
  DOM.recTendered.textContent = `${POS_STATE.currencySymbol}${data.tendered.toFixed(2)}`;
  DOM.recChangeDue.textContent = `${POS_STATE.currencySymbol}${data.changeDue.toFixed(2)}`;

  if (DOM.recDueRow) {
    if (data.dueAmount > 0) {
      DOM.recDueRow.style.display = "table-row";
      if (DOM.recDueAmount) DOM.recDueAmount.textContent = `${POS_STATE.currencySymbol}${data.dueAmount.toFixed(2)}`;
    } else {
      DOM.recDueRow.style.display = "none";
    }
  }

  if (DOM.recSalesNoteRow) {
    if (data.salesNote) {
      DOM.recSalesNoteRow.style.display = "table-row";
      if (DOM.recSalesNote) DOM.recSalesNote.textContent = data.salesNote;
    } else {
      DOM.recSalesNoteRow.style.display = "none";
    }
  }

  if (DOM.recPaymentNoteRow) {
    if (data.paymentNote) {
      DOM.recPaymentNoteRow.style.display = "table-row";
      if (DOM.recPaymentNote) DOM.recPaymentNote.textContent = data.paymentNote;
    } else {
      DOM.recPaymentNoteRow.style.display = "none";
    }
  }

  if (DOM.recTermsNotice && data.terms) {
    DOM.recTermsNotice.innerHTML = `
      <strong>Terms & Conditions:</strong><br />
      &bull; ${escapeHtml(data.terms)}<br />
      &bull; Official warranty claims require this physical invoice copy.<br />
      &bull; Electrical & electronic goods covered under brand warranty.
    `;
  }

  generateBarcodeSvg(data.invoiceNum);
}

function generateBarcodeSvg(code) {
  const svg = DOM.receiptBarcodeSvg;
  svg.innerHTML = "";
  let x = 10;
  const numBars = 45;
  for (let i = 0; i < numBars; i++) {
    const width = (i % 3 === 0 || i % 7 === 0) ? 3 : 1.5;
    const rect = document.createElementNS("http://www.w3.org/2000/svg", "rect");
    rect.setAttribute("x", x);
    rect.setAttribute("y", "0");
    rect.setAttribute("width", width);
    rect.setAttribute("height", "32");
    rect.setAttribute("fill", "#0f172a");
    svg.appendChild(rect);
    x += width + 2;
  }
  DOM.recBarcodeText.textContent = `CODE-128 // ${code}`;
}

function startNewOrder() {
  DOM.receiptModalOverlay.classList.remove("active");
  clearCart(true);
  POS_STATE.currentOrderNumber = generateOrderNumber();
  DOM.currentOrderNumber.textContent = POS_STATE.currentOrderNumber;
  POS_STATE.orderReference = "";
  if (DOM.orderReferenceInputDeck) DOM.orderReferenceInputDeck.value = "";
  if (DOM.orderReferenceInput) DOM.orderReferenceInput.value = "";
  POS_STATE.activeCustomer = { name: "Walk-in Customer", phone: "General Retail Sale", points: 0, dueBalance: 0, isWalkIn: true };
  POS_STATE.selectedPaymentMethod = "cash";
  updateCustomerDisplay();
  DOM.productSearchInput.focus();
  showToast("Ready for next transaction!");
}

// ==========================================================================
// 12. RECENT RECEIPTS & INVOICES MODAL (Item 9)
// ==========================================================================
function openRecentReceiptsModal() {
  if (typeof closeLeftDrawer === "function") closeLeftDrawer();
  if (!DOM.recentReceiptsModalOverlay) return;
  DOM.recentReceiptsModalOverlay.classList.add("active");
  if (DOM.recentReceiptsSearchInput) DOM.recentReceiptsSearchInput.value = "";
  if (DOM.recentReceiptsBranchFilter) DOM.recentReceiptsBranchFilter.value = "all";
  renderRecentReceiptsTable();
  if (DOM.recentReceiptsSearchInput) setTimeout(() => DOM.recentReceiptsSearchInput.focus(), 150);
}

function renderRecentReceiptsTable(query = "") {
  if (!DOM.recentReceiptsTbody) return;
  const q = (query || "").toLowerCase().trim();
  const branchFilter = DOM.recentReceiptsBranchFilter ? DOM.recentReceiptsBranchFilter.value : "all";

  const list = POS_STATE.recentReceipts.filter(r => {
    const matchesBranch = branchFilter === "all" || r.branch === branchFilter;
    const matchesQ = !q ||
      r.invoiceNum.toLowerCase().includes(q) ||
      (r.customer && r.customer.toLowerCase().includes(q)) ||
      (r.customerPhone && r.customerPhone.toLowerCase().includes(q)) ||
      (r.salesman && r.salesman.toLowerCase().includes(q)) ||
      (r.reference && r.reference.toLowerCase().includes(q));
    return matchesBranch && matchesQ;
  });

  DOM.recentReceiptsTbody.innerHTML = "";

  if (list.length === 0) {
    DOM.recentReceiptsTbody.innerHTML = `
      <tr>
        <td colspan="9" style="text-align:center; padding: 24px; color: var(--text-muted);">
          <i class="fa-solid fa-receipt" style="font-size:1.8rem; opacity:0.3; margin-bottom:6px; display:block;"></i>
          No receipts matching current search or branch filter.
        </td>
      </tr>
    `;
  } else {
    list.forEach(r => {
      const tr = document.createElement("tr");
      const methodBadge = `<span class="badge-${(r.paymentMethod || 'cash').toLowerCase()}">${r.paymentMethod}</span>`;
      const shortBranch = r.branch ? r.branch.split(" (")[0] : "Main Branch";
      const shortSalesman = r.salesman ? r.salesman.split(" (")[0] : "Alex Smith";

      tr.innerHTML = `
        <td><strong style="color:var(--primary); font-family:var(--font-mono);">${r.invoiceNum}</strong></td>
        <td style="white-space:nowrap; font-size:0.75rem;">${r.date}</td>
        <td><strong>${r.customer}</strong></td>
        <td><span style="font-size:0.75rem; color:var(--text-muted);">${shortBranch}</span></td>
        <td>${shortSalesman}</td>
        <td style="font-family:var(--font-mono);">${r.itemsCount || r.items?.length || 1} pcs</td>
        <td class="text-right" style="font-weight:700; font-family:var(--font-mono);">${formatCurrency(r.grandTotal)}</td>
        <td>${methodBadge}</td>
        <td class="text-center" style="white-space:nowrap;">
          <button type="button" class="btn-tool-compact" onclick="reprintRecentReceipt('${r.invoiceNum}')" title="Print / View Receipt" style="margin-right:4px;">
            <i class="fa-solid fa-print"></i>
          </button>
          <button type="button" class="btn-tool-compact" onclick="reloadReceiptToCart('${r.invoiceNum}')" title="Reload items into active cart">
            <i class="fa-solid fa-rotate-left"></i>
          </button>
        </td>
      `;
      DOM.recentReceiptsTbody.appendChild(tr);
    });
  }

  if (DOM.recentReceiptsCountLabel) {
    DOM.recentReceiptsCountLabel.textContent = `Showing ${list.length} of ${POS_STATE.recentReceipts.length} recorded receipts`;
  }
}

function reprintRecentReceipt(invoiceNum) {
  const r = POS_STATE.recentReceipts.find(item => item.invoiceNum === invoiceNum);
  if (!r) {
    showToast("Receipt not found", "warning");
    return;
  }
  populateReceiptModal(r);
  if (DOM.recentReceiptsModalOverlay) DOM.recentReceiptsModalOverlay.classList.remove("active");
  DOM.receiptModalOverlay.classList.add("active");
}

function reloadReceiptToCart(invoiceNum) {
  const r = POS_STATE.recentReceipts.find(item => item.invoiceNum === invoiceNum);
  if (!r || !r.items || r.items.length === 0) {
    showToast("No items found to reload", "warning");
    return;
  }
  POS_STATE.cart = JSON.parse(JSON.stringify(r.items));
  if (r.customer && r.customer !== "Walk-in Customer") {
    const existing = POS_STATE.customers.find(c => c.name === r.customer);
    if (existing) {
      POS_STATE.activeCustomer = { ...existing, isWalkIn: false };
    }
  }
  renderCart();
  calculateTotals();
  updateCustomerDisplay();
  if (DOM.recentReceiptsModalOverlay) DOM.recentReceiptsModalOverlay.classList.remove("active");
  soundManager.playSuccess();
  showToast(`Reloaded ${r.items.length} items from ${invoiceNum} into cart!`);
}

// ==========================================================================
// 13. RECENT TRANSACTIONS LEDGER MODAL (Item 11)
// ==========================================================================
function openRecentTransactionsModal() {
  if (typeof closeLeftDrawer === "function") closeLeftDrawer();
  if (!DOM.recentTransactionsModalOverlay) return;
  DOM.recentTransactionsModalOverlay.classList.add("active");
  renderRecentTransactionsTable("all");
}

function renderRecentTransactionsTable(filter = "all") {
  if (!DOM.recentTransactionsTbody) return;

  const totalSales = POS_STATE.recentTransactions.reduce((s, t) => s + (t.status !== "Cancelled" ? t.amount : 0), 0);
  const cashSales = POS_STATE.recentTransactions.filter(t => t.method === "CASH").reduce((s, t) => s + t.amount, 0);
  const cardSales = POS_STATE.recentTransactions.filter(t => t.method === "CARD" || t.method === "MOBILE").reduce((s, t) => s + t.amount, 0);
  const dueSales = POS_STATE.recentTransactions.filter(t => t.method === "DUE").reduce((s, t) => s + t.amount, 0);

  if (DOM.trxKpiTotalSales) DOM.trxKpiTotalSales.textContent = formatCurrency(totalSales);
  if (DOM.trxKpiCash) DOM.trxKpiCash.textContent = formatCurrency(cashSales);
  if (DOM.trxKpiCard) DOM.trxKpiCard.textContent = formatCurrency(cardSales);
  if (DOM.trxKpiDue) DOM.trxKpiDue.textContent = formatCurrency(dueSales);

  const list = POS_STATE.recentTransactions.filter(t => {
    if (filter === "all") return true;
    return t.method === filter.toUpperCase();
  });

  DOM.recentTransactionsTbody.innerHTML = "";

  if (list.length === 0) {
    DOM.recentTransactionsTbody.innerHTML = `
      <tr>
        <td colspan="9" style="text-align:center; padding: 24px; color: var(--text-muted);">
          No transactions matching filter "${filter}".
        </td>
      </tr>
    `;
  } else {
    list.forEach(t => {
      const tr = document.createElement("tr");
      const methodBadge = `<span class="badge-${(t.method || 'cash').toLowerCase()}">${t.method}</span>`;
      const statusBadge = t.status === "Settled" 
        ? `<span class="badge-paid"><i class="fa-solid fa-check"></i> Settled</span>`
        : `<span class="badge-due"><i class="fa-solid fa-clock"></i> Due Ledger</span>`;

      tr.innerHTML = `
        <td><strong style="font-family:var(--font-mono); color:var(--text-main);">${t.trxId}</strong></td>
        <td><span style="color:var(--primary); font-family:var(--font-mono);">${t.orderRef}</span></td>
        <td style="font-size:0.75rem; color:var(--text-muted);">${t.timestamp}</td>
        <td><strong>${t.customer}</strong></td>
        <td>${t.biller}</td>
        <td>${methodBadge}</td>
        <td class="text-right" style="font-weight:700; font-family:var(--font-mono);">${formatCurrency(t.amount)}</td>
        <td class="text-right" style="font-family:var(--font-mono);">${formatCurrency(t.change || 0)}</td>
        <td class="text-center">${statusBadge}</td>
      `;
      DOM.recentTransactionsTbody.appendChild(tr);
    });
  }

  if (DOM.recentTrxCountLabel) {
    DOM.recentTrxCountLabel.textContent = `Showing ${list.length} of ${POS_STATE.recentTransactions.length} shift transactions`;
  }
}

// ==========================================================================
// 14. ITEM IMEI / SERIAL NUMBER MODAL (Item 4)
// ==========================================================================
function openItemImeiModal(itemId) {
  const item = POS_STATE.cart.find(i => i.id === itemId);
  if (!item) return;

  POS_STATE.activeImeiItemId = itemId;
  if (DOM.imeiItemTargetName) DOM.imeiItemTargetName.textContent = item.name;
  if (DOM.imeiItemTargetSku) DOM.imeiItemTargetSku.textContent = `SKU: ${item.sku}`;
  if (DOM.itemImeiInput) {
    DOM.itemImeiInput.value = item.imei || "";
  }

  if (DOM.itemImeiModalOverlay) {
    DOM.itemImeiModalOverlay.classList.add("active");
    setTimeout(() => {
      if (DOM.itemImeiInput) DOM.itemImeiInput.focus();
    }, 150);
  }
}

function saveItemImei() {
  if (!POS_STATE.activeImeiItemId) return;
  const item = POS_STATE.cart.find(i => i.id === POS_STATE.activeImeiItemId);
  if (!item) return;

  const imeiVal = DOM.itemImeiInput ? DOM.itemImeiInput.value.trim() : "";
  item.imei = imeiVal || null;

  if (DOM.itemImeiModalOverlay) DOM.itemImeiModalOverlay.classList.remove("active");
  soundManager.playSuccess();
  renderCart();
  showToast(item.imei ? `IMEI saved for ${item.name}` : `IMEI cleared for ${item.name}`);
}

function clearItemImei() {
  if (!POS_STATE.activeImeiItemId) return;
  const item = POS_STATE.cart.find(i => i.id === POS_STATE.activeImeiItemId);
  if (!item) return;

  item.imei = null;
  if (DOM.itemImeiInput) DOM.itemImeiInput.value = "";
  if (DOM.itemImeiModalOverlay) DOM.itemImeiModalOverlay.classList.remove("active");
  renderCart();
  showToast(`IMEI removed from ${item.name}`, "info");
}

// ==========================================================================
// 11. CUSTOMER SELECTOR & DUE / CREDIT MANAGEMENT
// ==========================================================================
function updateCustomerDisplay() {
  DOM.selectedCustomerName.textContent = POS_STATE.activeCustomer.name;
  if (DOM.selectedCustomerPhone) {
    DOM.selectedCustomerPhone.textContent = POS_STATE.activeCustomer.phone;
    DOM.selectedCustomerPhone.style.display = "none";
  }

  // Only the customer name is shown in the walk-in customer pill
  if (DOM.customerPointsBadge) DOM.customerPointsBadge.style.display = "none";
  if (DOM.customerDueBadge) DOM.customerDueBadge.style.display = "none";

  if (DOM.btnCustomerSelector) {
    DOM.btnCustomerSelector.title = POS_STATE.activeCustomer.isWalkIn
      ? "Click to Select Customer (F8)"
      : `${POS_STATE.activeCustomer.name} - Click to Change Customer (F8)`;
  }
}

function renderCustomerSearchResults(query = "") {
  const list = DOM.customerSearchResults;
  list.innerHTML = "";
  const filtered = POS_STATE.customers.filter(c => 
    c.name.toLowerCase().includes(query.toLowerCase()) || c.phone.includes(query)
  );

  if (filtered.length === 0) {
    list.innerHTML = `<div style="color:var(--text-subtle); padding:10px; font-size:0.85rem;">No customer found. Register new customer below.</div>`;
    return;
  }

  filtered.forEach(cust => {
    const item = document.createElement("div");
    item.style.cssText = `
      padding: 8px 12px;
      border: 1px solid var(--border-color);
      border-radius: var(--radius-md);
      cursor: pointer;
      display: flex;
      justify-content: space-between;
      align-items: center;
      transition: background 0.15s;
    `;

    const dueBadge = cust.dueBalance > 0
      ? `<span class="cust-due-badge"><i class="fa-solid fa-circle-exclamation"></i> Due: ${formatCurrency(cust.dueBalance)}</span>`
      : "";

    item.innerHTML = `
      <div>
        <strong style="font-size:0.88rem; display:block;">${cust.name}</strong>
        <span style="font-size:0.72rem; color:var(--text-muted);">${cust.phone} &bull; ${cust.tier}</span>
      </div>
      <div style="display:flex; gap:6px; align-items:center;">
        ${dueBadge}
        <span class="cust-points-badge"><i class="fa-solid fa-star"></i> ${cust.points} Pts</span>
      </div>
    `;

    item.addEventListener("mouseenter", () => item.style.background = "var(--primary-light)");
    item.addEventListener("mouseleave", () => item.style.background = "white");
    item.addEventListener("click", () => {
      POS_STATE.activeCustomer = { ...cust, isWalkIn: false };
      updateCustomerDisplay();
      DOM.customerModalOverlay.classList.remove("active");
      showToast(`Selected customer: ${cust.name}`);
    });

    list.appendChild(item);
  });
}

function toggleCustomerDropdown(forceState) {
  if (!DOM.customerDropdownMenu) return;
  const isCurrentlyActive = DOM.customerDropdownMenu.classList.contains("active");
  const willBeOpen = typeof forceState === "boolean" ? forceState : !isCurrentlyActive;

  if (willBeOpen) {
    DOM.customerDropdownMenu.style.display = "flex";
    DOM.customerDropdownMenu.classList.add("active");
    if (DOM.btnCustomerSelector) {
      DOM.btnCustomerSelector.classList.add("active");
      DOM.btnCustomerSelector.setAttribute("aria-expanded", "true");
    }
    renderCustomerDropdownSuggestions(DOM.custDropdownSearchInput ? DOM.custDropdownSearchInput.value : "");
    if (DOM.custDropdownSearchInput) {
      setTimeout(() => {
        DOM.custDropdownSearchInput.focus();
        DOM.custDropdownSearchInput.select();
      }, 50);
    }
  } else {
    DOM.customerDropdownMenu.style.display = "none";
    DOM.customerDropdownMenu.classList.remove("active");
    if (DOM.btnCustomerSelector) {
      DOM.btnCustomerSelector.classList.remove("active");
      DOM.btnCustomerSelector.setAttribute("aria-expanded", "false");
    }
  }
}

function selectCustomerFromDropdown(customerId) {
  if (customerId === "walk-in") {
    POS_STATE.activeCustomer = {
      name: "Walk-in Customer",
      phone: "General Retail Sale",
      points: 0,
      dueBalance: 0,
      deposit: 0,
      invoiceCount: 0,
      isWalkIn: true
    };
  } else {
    const cust = POS_STATE.customers.find(c => c.id === customerId);
    if (cust) {
      POS_STATE.activeCustomer = { ...cust, isWalkIn: false };
    }
  }
  updateCustomerDisplay();
  toggleCustomerDropdown(false);
  soundManager.playPop();
  showToast(`Customer: ${POS_STATE.activeCustomer.name}`);
}

function renderCustomerDropdownSuggestions(query = "") {
  if (!DOM.custDropdownList) return;
  const trimmed = (query || "").trim().toLowerCase();
  DOM.custDropdownList.innerHTML = "";

  // 1. Walk-in Customer Item (Shown if matching or query empty)
  const isWalkInMatch = !trimmed || "walk-in customer general retail sale".includes(trimmed);
  if (isWalkInMatch) {
    const isWalkInActive = POS_STATE.activeCustomer.isWalkIn;
    const walkInItem = document.createElement("div");
    walkInItem.className = `cust-dropdown-item ${isWalkInActive ? "selected" : ""}`;
    walkInItem.setAttribute("data-cust-id", "walk-in");
    walkInItem.innerHTML = `
      <div class="cust-item-avatar walk-in-avatar">
        <i class="fa-solid fa-person-walking"></i>
      </div>
      <div class="cust-item-meta">
        <div class="cust-item-name-row">
          <strong class="cust-item-name">Walk-in Customer</strong>
          <span class="cust-item-badge-std">Default</span>
        </div>
        <div class="cust-item-sub">Standard retail checkout (No account)</div>
      </div>
      ${isWalkInActive ? '<i class="fa-solid fa-check cust-item-checked"></i>' : ''}
    `;
    walkInItem.addEventListener("click", () => selectCustomerFromDropdown("walk-in"));
    DOM.custDropdownList.appendChild(walkInItem);
  }

  // 2. Registered Customers matching query
  const filtered = POS_STATE.customers.filter(c =>
    c.name.toLowerCase().includes(trimmed) ||
    c.phone.replace(/[\\s()-]/g, "").includes(trimmed.replace(/[\\s()-]/g, "")) ||
    (c.tier && c.tier.toLowerCase().includes(trimmed))
  );

  if (filtered.length === 0 && !isWalkInMatch) {
    DOM.custDropdownList.innerHTML = `
      <div class="cust-dropdown-empty">
        <i class="fa-solid fa-user-slash"></i>
        <span>No customer found for "${escapeHtml(query)}"</span>
      </div>
    `;
    return;
  }

  filtered.forEach(cust => {
    const isSelected = !POS_STATE.activeCustomer.isWalkIn && POS_STATE.activeCustomer.id === cust.id;
    const item = document.createElement("div");
    item.className = `cust-dropdown-item ${isSelected ? "selected" : ""}`;
    item.setAttribute("data-cust-id", cust.id);

    // Get initials for avatar
    const initials = cust.name
      .split(" ")
      .map(part => part[0])
      .join("")
      .substring(0, 2)
      .toUpperCase() || "C";

    // Build chips: Due, Deposit, Points, Invoices
    let chipsHtml = "";
    if (cust.dueBalance > 0) {
      chipsHtml += `<span class="cust-chip cust-chip-due"><i class="fa-solid fa-circle-exclamation"></i> Due: ${formatCurrency(cust.dueBalance)}</span>`;
    }
    if (cust.deposit > 0) {
      chipsHtml += `<span class="cust-chip cust-chip-deposit"><i class="fa-solid fa-piggy-bank"></i> Adv: ${formatCurrency(cust.deposit)}</span>`;
    }
    chipsHtml += `<span class="cust-chip cust-chip-pts"><i class="fa-solid fa-star"></i> ${cust.points} Pts</span>`;
    chipsHtml += `<span class="cust-chip cust-chip-inv"><i class="fa-solid fa-file-invoice"></i> ${cust.invoiceCount || 0} Inv</span>`;

    item.innerHTML = `
      <div class="cust-item-avatar">${escapeHtml(initials)}</div>
      <div class="cust-item-meta">
        <div class="cust-item-name-row">
          <strong class="cust-item-name">${escapeHtml(cust.name)}</strong>
          <span class="cust-item-tier">${escapeHtml(cust.tier || "VIP")}</span>
        </div>
        <div class="cust-item-sub">${escapeHtml(cust.phone)}</div>
        <div class="cust-item-chips">${chipsHtml}</div>
      </div>
      ${isSelected ? '<i class="fa-solid fa-check cust-item-checked"></i>' : ''}
    `;

    item.addEventListener("click", () => selectCustomerFromDropdown(cust.id));
    DOM.custDropdownList.appendChild(item);
  });
}

// ==========================================================================
// 12. MOBILE VIEW SWITCHER & NAVIGATION
// ==========================================================================
function switchMobileView(tab) {
  POS_STATE.mobileActiveTab = tab;
  if (DOM.posWorkspace) DOM.posWorkspace.setAttribute("data-mobile-active", tab);

  if (DOM.btnMobileTabReceipts) DOM.btnMobileTabReceipts.classList.remove("active");
  if (DOM.btnMobileTabTransactions) DOM.btnMobileTabTransactions.classList.remove("active");

  if (tab === "catalog") {
    if (DOM.btnMobileTabCatalog) DOM.btnMobileTabCatalog.classList.add("active");
    if (DOM.btnMobileTabCart) DOM.btnMobileTabCart.classList.remove("active");
    if (POS_STATE.cart.length > 0 && window.innerWidth <= 768) {
      if (DOM.mobileStickyCartBar) DOM.mobileStickyCartBar.classList.add("visible");
    }
  } else if (tab === "cart") {
    if (DOM.btnMobileTabCart) DOM.btnMobileTabCart.classList.add("active");
    if (DOM.btnMobileTabCatalog) DOM.btnMobileTabCatalog.classList.remove("active");
    if (DOM.mobileStickyCartBar) DOM.mobileStickyCartBar.classList.remove("visible");
  }
}

// Left Collapsible Terminal Navigation Drawer
function openLeftDrawer() {
  if (DOM.posLeftSidebar) DOM.posLeftSidebar.classList.add("open");
  if (DOM.posLeftSidebarBackdrop) DOM.posLeftSidebarBackdrop.classList.add("active");
  if (DOM.headerMetaGroup) DOM.headerMetaGroup.classList.add("open");
  soundManager.playPop();
}

function closeLeftDrawer() {
  if (DOM.posLeftSidebar) DOM.posLeftSidebar.classList.remove("open");
  if (DOM.posLeftSidebarBackdrop) DOM.posLeftSidebarBackdrop.classList.remove("active");
  if (DOM.headerMetaGroup) DOM.headerMetaGroup.classList.remove("open");
}

function toggleLeftDrawer() {
  if (DOM.posLeftSidebar && DOM.posLeftSidebar.classList.contains("open")) {
    closeLeftDrawer();
  } else {
    openLeftDrawer();
  }
}

// Toggle / Collapse Product Catalog Sidebar (Desktop & Tablet)
function toggleCatalogSidebar(forceCollapse = null) {
  const shouldCollapse = forceCollapse !== null ? forceCollapse : !POS_STATE.isCatalogCollapsed;
  POS_STATE.isCatalogCollapsed = shouldCollapse;

  if (shouldCollapse) {
    if (DOM.posWorkspace) DOM.posWorkspace.classList.add("catalog-collapsed");
    if (DOM.salesCatalogSection) DOM.salesCatalogSection.classList.add("collapsed");
    soundManager.playPop();
    showToast("Product Catalog hidden (Cart expanded)", "info");
  } else {
    if (DOM.posWorkspace) DOM.posWorkspace.classList.remove("catalog-collapsed");
    if (DOM.salesCatalogSection) DOM.salesCatalogSection.classList.remove("collapsed");
    soundManager.playPop();
    showToast("Product Catalog opened", "info");
    setTimeout(() => {
      if (DOM.productSearchInput) {
        DOM.productSearchInput.focus();
        DOM.productSearchInput.select();
      }
    }, 200);
  }
}
window.toggleCatalogSidebar = toggleCatalogSidebar;

// ==========================================================================
// 13. RETAIL SUPERPOWERS: NUMPAD, ITEM DISCOUNT & SHIFT CASH DRAWER
// ==========================================================================

// --- VIRTUAL NUMPAD ENGINE ---
function openItemNumpad(itemId) {
  const item = POS_STATE.cart.find(i => i.id === itemId);
  if (!item) return;
  POS_STATE.activeNumpadTarget = { type: "item-qty", id: itemId };
  if (DOM.numpadTargetLabel) {
    DOM.numpadTargetLabel.textContent = `Set Quantity for: ${item.name}`;
  }
  if (DOM.numpadDisplayValue) {
    DOM.numpadDisplayValue.textContent = String(item.qty);
  }
  DOM.numpadModalOverlay.classList.add("active");
  soundManager.playPop();
}
window.openItemNumpad = openItemNumpad;

function closeNumpadModal() {
  DOM.numpadModalOverlay.classList.remove("active");
  POS_STATE.activeNumpadTarget = null;
}

function handleNumpadKey(key) {
  if (!DOM.numpadDisplayValue) return;
  let cur = DOM.numpadDisplayValue.textContent.trim();
  if (key === "C") {
    DOM.numpadDisplayValue.textContent = "0";
  } else if (key === "00") {
    if (cur !== "0" && cur.length < 6) {
      DOM.numpadDisplayValue.textContent = cur + "00";
    }
  } else {
    if (cur === "0") {
      DOM.numpadDisplayValue.textContent = key;
    } else if (cur.length < 6) {
      DOM.numpadDisplayValue.textContent = cur + key;
    }
  }
  soundManager.playPop();
}

function handleNumpadPreset(presetVal) {
  if (!DOM.numpadDisplayValue) return;
  let cur = parseInt(DOM.numpadDisplayValue.textContent.trim(), 10) || 0;
  DOM.numpadDisplayValue.textContent = String(cur + presetVal);
  soundManager.playPop();
}

function confirmNumpadSubmit() {
  if (!DOM.numpadDisplayValue) return;
  const val = parseInt(DOM.numpadDisplayValue.textContent.trim(), 10) || 1;

  if (POS_STATE.activeNumpadTarget && POS_STATE.activeNumpadTarget.type === "item-qty") {
    updateCartItemQty(POS_STATE.activeNumpadTarget.id, Math.max(1, val));
    showToast(`Quantity updated to ${Math.max(1, val)}`);
  }
  closeNumpadModal();
  soundManager.playSuccess();
}

// --- ITEM-LEVEL DISCOUNT MODAL ---
function openItemDiscountModal(itemId) {
  const item = POS_STATE.cart.find(i => i.id === itemId);
  if (!item) return;
  POS_STATE.activeDiscountTargetItemId = itemId;
  POS_STATE.itemDiscountType = item.discountType || "percent";

  if (DOM.itemDiscTargetName) {
    DOM.itemDiscTargetName.textContent = `${item.name} (${item.sku})`;
  }
  if (DOM.itemDiscValueInput) {
    DOM.itemDiscValueInput.value = item.discount > 0 ? item.discount : "";
  }
  updateItemDiscountTypeUI();
  DOM.itemDiscountModalOverlay.classList.add("active");
  setTimeout(() => DOM.itemDiscValueInput && DOM.itemDiscValueInput.focus(), 150);
  soundManager.playPop();
}
window.openItemDiscountModal = openItemDiscountModal;

function closeItemDiscountModal() {
  DOM.itemDiscountModalOverlay.classList.remove("active");
  POS_STATE.activeDiscountTargetItemId = null;
}

function updateItemDiscountTypeUI() {
  if (POS_STATE.itemDiscountType === "percent") {
    DOM.btnDiscTypePercent.classList.add("active-tool");
    DOM.btnDiscTypeFlat.classList.remove("active-tool");
    DOM.itemDiscValueInput.placeholder = "Enter percentage % (e.g. 10)";
  } else {
    DOM.btnDiscTypeFlat.classList.add("active-tool");
    DOM.btnDiscTypePercent.classList.remove("active-tool");
    DOM.itemDiscValueInput.placeholder = `Enter flat amount in ${POS_STATE.currencySymbol}`;
  }
}

function applyItemDiscount() {
  const itemId = POS_STATE.activeDiscountTargetItemId;
  const item = POS_STATE.cart.find(i => i.id === itemId);
  if (!item) return;

  const val = parseFloat(DOM.itemDiscValueInput.value) || 0;
  item.discount = Math.max(0, val);
  item.discountType = POS_STATE.itemDiscountType;

  closeItemDiscountModal();
  renderCart();
  calculateTotals();
  soundManager.playSuccess();
  showToast(item.discount > 0 ? `Item discount applied: ${item.discountType === 'flat' ? formatCurrency(item.discount) : item.discount + '%'}` : "Item discount cleared");
}

// --- PRODUCT ITEM NOTE MODAL ---
function openItemNoteModal(itemId) {
  const item = POS_STATE.cart.find(i => i.id === itemId);
  if (!item) return;

  POS_STATE.activeNoteTargetItemId = itemId;

  const unitPrice = POS_STATE.pricingMode === "wholesale" && item.wholesalePrice ? item.wholesalePrice : item.price;
  const itemImage = item.image || "https://images.unsplash.com/photo-1526170375885-4d8ecf77b99f?w=100";

  if (DOM.itemNoteModalThumb) DOM.itemNoteModalThumb.src = itemImage;
  if (DOM.itemNoteModalName) DOM.itemNoteModalName.textContent = item.name;
  if (DOM.itemNoteModalSku) DOM.itemNoteModalSku.textContent = item.sku;
  if (DOM.itemNoteModalPrice) DOM.itemNoteModalPrice.textContent = formatCurrency(unitPrice);

  const currentNote = item.note || "";
  if (DOM.itemNoteTextarea) {
    DOM.itemNoteTextarea.value = currentNote;
  }
  if (DOM.itemNoteCharCount) {
    DOM.itemNoteCharCount.textContent = `${currentNote.length} / 120`;
  }

  DOM.itemNoteModalOverlay.classList.add("active");
  setTimeout(() => {
    if (DOM.itemNoteTextarea) {
      DOM.itemNoteTextarea.focus();
      DOM.itemNoteTextarea.setSelectionRange(currentNote.length, currentNote.length);
    }
  }, 150);
  soundManager.playPop();
}
window.openItemNoteModal = openItemNoteModal;
window.setItemNote = openItemNoteModal;

function closeItemNoteModal() {
  DOM.itemNoteModalOverlay.classList.remove("active");
  POS_STATE.activeNoteTargetItemId = null;
}

function saveItemNote() {
  const itemId = POS_STATE.activeNoteTargetItemId;
  const item = POS_STATE.cart.find(i => i.id === itemId);
  if (!item) return;

  const val = DOM.itemNoteTextarea ? DOM.itemNoteTextarea.value.trim() : "";
  item.note = val;
  POS_STATE.lastUpdatedItemId = itemId;

  closeItemNoteModal();
  renderCart();
  soundManager.playSuccess();
  showToast(item.note ? `Note saved for ${item.name}` : "Note cleared");
}

function clearItemNote() {
  if (DOM.itemNoteTextarea) {
    DOM.itemNoteTextarea.value = "";
    DOM.itemNoteTextarea.focus();
  }
  if (DOM.itemNoteCharCount) {
    DOM.itemNoteCharCount.textContent = "0 / 120";
  }
  soundManager.playPop();
}

// ==========================================================================
// MODAL 13: ADVANCED PRODUCT EDIT CONTROLLER (PRICE, QTY & DEMO IMEIS)
// ==========================================================================
function generateProductDemoImei(item, unitIndex = 1) {
  const seed = (item.barcode || item.sku || "8901001").replace(/\D/g, "");
  const baseTac = "862409";
  const paddedSeed = (seed + "0000").substring(0, 4);
  const unitCode = String(unitIndex).padStart(2, "0");
  const randomSuffix = Math.floor(100 + Math.random() * 900);
  return `${baseTac}${paddedSeed}${unitCode}${randomSuffix}`;
}

function openProductEditModal(itemId) {
  const item = POS_STATE.cart.find(i => i.id === itemId);
  if (!item) return;

  POS_STATE.activeProductEditItemId = itemId;
  POS_STATE.modalEditQty = Math.max(1, item.qty || 1);

  // Product Header Info
  if (DOM.productEditThumb) DOM.productEditThumb.src = item.image || "https://images.unsplash.com/photo-1526170375885-4d8ecf77b99f?w=100";
  if (DOM.productEditName) DOM.productEditName.textContent = item.name;
  if (DOM.productEditSku) DOM.productEditSku.textContent = item.sku;
  if (DOM.productEditBarcode) DOM.productEditBarcode.textContent = item.barcode || "N/A";
  if (DOM.productEditUnitBadge) DOM.productEditUnitBadge.innerHTML = `<i class="fa-solid fa-box"></i> Unit: ${item.unit || 'Pcs'}`;
  if (DOM.productEditCartQty) DOM.productEditCartQty.textContent = `${POS_STATE.modalEditQty} ${item.unit || 'Pcs'}`;

  // Fixed Warranty from Product Data
  const origProd = POS_STATE.products.find(p => p.id === item.id || p.sku === item.sku);
  const fixedWarranty = item.warranty || (origProd && origProd.warranty) || "1 Yr Official Warranty";
  item.warranty = fixedWarranty;
  if (DOM.productEditFixedWarranty) {
    DOM.productEditFixedWarranty.innerHTML = `<i class="fa-solid fa-shield-halved"></i> <span>${escapeHtml(fixedWarranty)}</span>`;
  }

  // Promotional Tiers
  const regularPrice = item.regularPrice || Math.round(item.price * 1.25 * 100) / 100;
  const promoPrice = item.promotionalPrice || item.price;
  const wholesalePrice = item.wholesalePrice || item.price;
  const promoSavings = Math.max(0, regularPrice - promoPrice);

  if (DOM.promoRegularPriceDisplay) DOM.promoRegularPriceDisplay.textContent = formatCurrency(regularPrice);
  if (DOM.promoOfferPriceDisplay) DOM.promoOfferPriceDisplay.textContent = formatCurrency(promoPrice);
  if (DOM.promoSavingsBadge) DOM.promoSavingsBadge.textContent = `Save ${formatCurrency(promoSavings)}`;
  if (DOM.promoWholesalePriceDisplay) DOM.promoWholesalePriceDisplay.textContent = formatCurrency(wholesalePrice);

  // Update Dropdown Option Labels with Formatted Currency
  if (DOM.optRegularRate) DOM.optRegularRate.textContent = `🏷️ Regular MRP - ${formatCurrency(regularPrice)} (Standard)`;
  if (DOM.optPromoRate) DOM.optPromoRate.textContent = `⚡ Promotional Offer - ${formatCurrency(promoPrice)} (Save ${formatCurrency(promoSavings)})`;
  if (DOM.optWholesaleRate) DOM.optWholesaleRate.textContent = `📦 Wholesale Rate - ${formatCurrency(wholesalePrice)} (B2B Volume)`;
  if (DOM.optCustomRate) DOM.optCustomRate.textContent = `✏️ Custom Unit Price Override...`;

  // Active Unit Price (From Selected Tier / Cart Item)
  const baseRate = POS_STATE.pricingMode === "wholesale" ? wholesalePrice : promoPrice;
  const currentPrice = item.customPrice !== null && item.customPrice !== undefined ? item.customPrice : baseRate;
  POS_STATE.modalEditPrice = currentPrice;

  // Determine Active Tier
  const p = Math.round(currentPrice * 100) / 100;
  let activeTier = "promo";
  if (p === Math.round(regularPrice * 100) / 100) activeTier = "regular";
  else if (p === Math.round(promoPrice * 100) / 100) activeTier = "promo";
  else if (p === Math.round(wholesalePrice * 100) / 100) activeTier = "wholesale";
  else activeTier = "custom";

  // Update Tier Active Visuals (Dropdown, Input & Cards)
  updatePriceTierVisuals(activeTier, currentPrice, regularPrice, promoPrice, wholesalePrice);

  // In-Modal Quantity Stepper Value
  if (DOM.modalQtyVal) DOM.modalQtyVal.textContent = POS_STATE.modalEditQty;

  // Auto pre-populate demo IMEIs if not yet present
  if (!Array.isArray(item.imeis)) {
    item.imeis = item.imei ? [item.imei] : [];
  }
  while (item.imeis.length < POS_STATE.modalEditQty) {
    item.imeis.push(generateProductDemoImei(item, item.imeis.length + 1));
  }

  // Qty-Wise IMEI Slots
  renderProductEditImeiSlots(item, POS_STATE.modalEditQty);

  // Summary
  updateProductEditLiveSummary();

  if (DOM.productEditModalOverlay) {
    DOM.productEditModalOverlay.classList.add("active");
  }
  soundManager.playPop();
}
window.openProductEditModal = openProductEditModal;

function closeProductEditModal() {
  if (DOM.productEditModalOverlay) {
    DOM.productEditModalOverlay.classList.remove("active");
  }
  POS_STATE.activeProductEditItemId = null;
}
window.closeProductEditModal = closeProductEditModal;

function updatePriceTierVisuals(tier, price, reg, promo, ws) {
  const p = Math.round(price * 100) / 100;
  const regRound = Math.round(reg * 100) / 100;
  const promoRound = Math.round(promo * 100) / 100;
  const wsRound = Math.round(ws * 100) / 100;

  // Sync tier cards active classes
  if (DOM.btnApplyRegularRate) DOM.btnApplyRegularRate.classList.toggle("active", tier === "regular" || (tier !== "custom" && p === regRound));
  if (DOM.btnApplyPromoRate) DOM.btnApplyPromoRate.classList.toggle("active", tier === "promo" || (tier !== "custom" && p === promoRound));
  if (DOM.btnApplyWholesaleRate) DOM.btnApplyWholesaleRate.classList.toggle("active", tier === "wholesale" || (tier !== "custom" && p === wsRound));

  // Sync dropdown value
  if (DOM.productPriceTierSelect && DOM.productPriceTierSelect.value !== tier) {
    DOM.productPriceTierSelect.value = tier;
  }

  // Sync Unit Price input value
  if (DOM.modalUnitPriceInput && document.activeElement !== DOM.modalUnitPriceInput) {
    DOM.modalUnitPriceInput.value = Number(price).toFixed(2);
  }

  // Sync Active Tier Badge
  if (DOM.activeTierBadge) {
    if (tier === "regular") {
      DOM.activeTierBadge.textContent = "MRP";
      DOM.activeTierBadge.className = "pricing-tier-tag tag-regular";
    } else if (tier === "promo") {
      DOM.activeTierBadge.textContent = "Promo";
      DOM.activeTierBadge.className = "pricing-tier-tag tag-promo";
    } else if (tier === "wholesale") {
      DOM.activeTierBadge.textContent = "Wholesale";
      DOM.activeTierBadge.className = "pricing-tier-tag tag-wholesale";
    } else {
      DOM.activeTierBadge.textContent = "Custom";
      DOM.activeTierBadge.className = "pricing-tier-tag tag-custom";
    }
  }

  // Sync Context Banner
  const promoSavings = Math.max(0, reg - promo);
  if (DOM.pricingTierBanner) {
    if (tier === "regular") {
      if (DOM.tierBannerTitle) DOM.tierBannerTitle.textContent = "Standard Regular MRP Selected";
      if (DOM.tierBannerDesc) DOM.tierBannerDesc.textContent = "Standard manufacturer recommended retail price without promotional discounts.";
      if (DOM.tierSavingsChip) {
        DOM.tierSavingsChip.textContent = "Standard MRP";
        DOM.tierSavingsChip.className = "tier-savings-chip chip-neutral";
      }
    } else if (tier === "promo") {
      if (DOM.tierBannerTitle) DOM.tierBannerTitle.textContent = "Promotional Campaign Offer Applied";
      if (DOM.tierBannerDesc) DOM.tierBannerDesc.textContent = `Active campaign offer saving ${formatCurrency(promoSavings)} per unit over Regular MRP.`;
      if (DOM.tierSavingsChip) {
        DOM.tierSavingsChip.textContent = `Save ${formatCurrency(promoSavings)}`;
        DOM.tierSavingsChip.className = "tier-savings-chip chip-promo";
      }
    } else if (tier === "wholesale") {
      const wsSavings = Math.max(0, reg - ws);
      if (DOM.tierBannerTitle) DOM.tierBannerTitle.textContent = "B2B Wholesale Rate Applied";
      if (DOM.tierBannerDesc) DOM.tierBannerDesc.textContent = `Commercial wholesale volume tier saving ${formatCurrency(wsSavings)} per unit.`;
      if (DOM.tierSavingsChip) {
        DOM.tierSavingsChip.textContent = `B2B Tier`;
        DOM.tierSavingsChip.className = "tier-savings-chip chip-wholesale";
      }
    } else {
      if (DOM.tierBannerTitle) DOM.tierBannerTitle.textContent = "Custom Price Override Applied";
      if (DOM.tierBannerDesc) DOM.tierBannerDesc.textContent = `Manually specified unit price override of ${formatCurrency(price)}.`;
      if (DOM.tierSavingsChip) {
        DOM.tierSavingsChip.textContent = "Custom Rate";
        DOM.tierSavingsChip.className = "tier-savings-chip chip-custom";
      }
    }
  }
}

function updatePromoTierActiveCards(price, reg, promo, ws) {
  const p = Math.round(price * 100) / 100;
  let tier = "custom";
  if (p === Math.round(reg * 100) / 100) tier = "regular";
  else if (p === Math.round(promo * 100) / 100) tier = "promo";
  else if (p === Math.round(ws * 100) / 100) tier = "wholesale";
  updatePriceTierVisuals(tier, price, reg, promo, ws);
}

function syncCurrentImeiInputsToState(item) {
  if (!DOM.productEditImeiList || !item) return;
  const inputs = DOM.productEditImeiList.querySelectorAll(".imei-unit-input");
  if (!Array.isArray(item.imeis)) item.imeis = [];
  inputs.forEach((inp, idx) => {
    item.imeis[idx] = inp.value.trim();
  });
}

function changeModalEditQty(delta) {
  const item = POS_STATE.cart.find(i => i.id === POS_STATE.activeProductEditItemId);
  if (!item) return;

  const currentQty = POS_STATE.modalEditQty || 1;
  const newQty = Math.max(1, currentQty + delta);
  if (newQty === currentQty) return;

  // Preserve any typed IMEIs before re-rendering
  syncCurrentImeiInputsToState(item);

  POS_STATE.modalEditQty = newQty;

  // Automatically add demo IMEIs for new slots
  while (item.imeis.length < newQty) {
    item.imeis.push(generateProductDemoImei(item, item.imeis.length + 1));
  }

  // Update UI indicators
  if (DOM.modalQtyVal) DOM.modalQtyVal.textContent = newQty;
  if (DOM.productEditCartQty) DOM.productEditCartQty.textContent = `${newQty} ${item.unit || 'Pcs'}`;

  // Re-render IMEI slots
  renderProductEditImeiSlots(item, newQty);

  // Update live calculation
  updateProductEditLiveSummary();
  soundManager.playPop();
}

function renderProductEditImeiSlots(item, qty = null) {
  if (!DOM.productEditImeiList) return;
  DOM.productEditImeiList.innerHTML = "";

  const activeQty = qty !== null ? qty : (POS_STATE.modalEditQty || item.qty || 1);
  if (DOM.productEditImeiCountBadge) {
    DOM.productEditImeiCountBadge.textContent = `${activeQty} Unit${activeQty > 1 ? 's' : ''}`;
  }

  if (!Array.isArray(item.imeis)) {
    item.imeis = item.imei ? [item.imei] : [];
  }

  for (let i = 0; i < activeQty; i++) {
    if (!item.imeis[i]) {
      item.imeis[i] = generateProductDemoImei(item, i + 1);
    }
    const currentVal = item.imeis[i];

    const row = document.createElement("div");
    row.className = "imei-unit-row";
    row.innerHTML = `
      <span class="imei-unit-badge"><i class="fa-solid fa-cube"></i> Unit #${i + 1}</span>
      <div class="imei-unit-input-wrap">
        <i class="fa-solid fa-barcode imei-input-icon"></i>
        <input
          type="text"
          class="imei-unit-input"
          data-unit-index="${i}"
          placeholder="Scan or enter 15-digit IMEI (Unit #${i + 1})..."
          value="${escapeHtml(currentVal)}"
          autocomplete="off"
        />
      </div>
      <button type="button" class="btn-imei-unit-clear" data-unit-index="${i}" title="Clear this Unit's IMEI">
        <i class="fa-solid fa-xmark"></i>
      </button>
    `;
    DOM.productEditImeiList.appendChild(row);
  }

  // Rapid scanner Enter key navigation: moves focus to next unit input
  const unitInputs = DOM.productEditImeiList.querySelectorAll(".imei-unit-input");
  unitInputs.forEach((inp, idx) => {
    inp.addEventListener("keydown", (e) => {
      if (e.key === "Enter") {
        e.preventDefault();
        const nextInp = unitInputs[idx + 1];
        if (nextInp) {
          nextInp.focus();
        } else {
          inp.blur();
        }
      }
    });
    inp.addEventListener("input", () => {
      const uIdx = parseInt(inp.getAttribute("data-unit-index"), 10);
      if (Array.isArray(item.imeis)) item.imeis[uIdx] = inp.value.trim();
    });
  });

  DOM.productEditImeiList.querySelectorAll(".btn-imei-unit-clear").forEach(btn => {
    btn.addEventListener("click", (e) => {
      e.stopPropagation();
      const idx = parseInt(btn.getAttribute("data-unit-index"), 10);
      const targetInput = DOM.productEditImeiList.querySelector(`.imei-unit-input[data-unit-index="${idx}"]`);
      if (targetInput) {
        targetInput.value = "";
        if (Array.isArray(item.imeis)) item.imeis[idx] = "";
      }
    });
  });
}

function updateProductEditLiveSummary() {
  const item = POS_STATE.cart.find(i => i.id === POS_STATE.activeProductEditItemId);
  if (!item) return;

  const qty = POS_STATE.modalEditQty || item.qty || 1;
  const price = (POS_STATE.modalEditPrice !== undefined && POS_STATE.modalEditPrice !== null)
    ? POS_STATE.modalEditPrice
    : (item.customPrice || item.price);
  const lineGross = price * qty;

  if (DOM.summaryEditQtyLine) DOM.summaryEditQtyLine.textContent = `${qty} ${item.unit || 'Pcs'}`;
  if (DOM.summaryEditPriceEach) DOM.summaryEditPriceEach.textContent = formatCurrency(price);
  if (DOM.summaryEditGross) DOM.summaryEditGross.textContent = formatCurrency(lineGross);
  if (DOM.summaryEditNetTotal) DOM.summaryEditNetTotal.textContent = formatCurrency(lineGross);
}

function saveProductEdit() {
  const item = POS_STATE.cart.find(i => i.id === POS_STATE.activeProductEditItemId);
  if (!item) return;

  const newPrice = (POS_STATE.modalEditPrice !== undefined && POS_STATE.modalEditPrice !== null)
    ? POS_STATE.modalEditPrice
    : (item.customPrice || item.price);

  const baseRate = POS_STATE.pricingMode === "wholesale" ? (item.wholesalePrice || item.price) : item.price;
  if (Math.abs(newPrice - baseRate) > 0.001) {
    item.customPrice = newPrice;
  } else {
    item.customPrice = null;
  }

  // Update Cart Quantity from In-Modal Stepper
  if (POS_STATE.modalEditQty && POS_STATE.modalEditQty >= 1) {
    item.qty = POS_STATE.modalEditQty;
  }

  // Qty-Wise IMEIs
  const imeiInputs = DOM.productEditImeiList ? DOM.productEditImeiList.querySelectorAll(".imei-unit-input") : [];
  const savedImeis = [];
  imeiInputs.forEach(inp => {
    const val = inp.value.trim();
    if (val) savedImeis.push(val);
  });
  item.imeis = savedImeis;
  item.imei = savedImeis.length > 0 ? savedImeis[0] : null;

  closeProductEditModal();
  renderCart();
  calculateTotals();
  soundManager.playSuccess();
  const imeiMsg = savedImeis.length > 0 ? ` (${savedImeis.length} IMEI${savedImeis.length > 1 ? 's' : ''})` : "";
  showToast(`Updated ${item.name} • Qty: ${item.qty}${imeiMsg}`);
}

function resetProductEditDefaults() {
  const item = POS_STATE.cart.find(i => i.id === POS_STATE.activeProductEditItemId);
  if (!item) return;

  const origProd = POS_STATE.products.find(p => p.id === item.id || p.sku === item.sku);

  item.customPrice = null;
  POS_STATE.modalEditPrice = null;
  item.warranty = origProd ? (origProd.warranty || "1 Yr Official Warranty") : "1 Yr Official Warranty";
  item.imeis = [];
  for (let i = 0; i < (item.qty || 1); i++) {
    item.imeis.push(generateProductDemoImei(item, i + 1));
  }
  item.imei = item.imeis[0] || null;

  openProductEditModal(item.id);
  showToast("Restored product pricing & demo IMEIs");
}

// --- SHIFT CASH DRAWER SUMMARY MODAL ---
function openShiftSummaryModal() {
  const floatVal = POS_STATE.shiftFloat;
  const cashSales = POS_STATE.shiftCashSales;
  const cardSales = POS_STATE.shiftCardSales;
  const mobileSales = POS_STATE.shiftMobileSales;
  const dueSales = POS_STATE.shiftDueSales;
  const totalRevenue = cashSales + cardSales + mobileSales + dueSales;
  const cashInDrawer = floatVal + cashSales;

  if (DOM.shiftOpeningFloat) DOM.shiftOpeningFloat.textContent = formatCurrency(floatVal);
  if (DOM.shiftCashInDrawer) DOM.shiftCashInDrawer.textContent = formatCurrency(cashInDrawer);
  if (DOM.shiftCashSales) DOM.shiftCashSales.textContent = formatCurrency(cashSales);
  if (DOM.shiftCardSales) DOM.shiftCardSales.textContent = formatCurrency(cardSales);
  if (DOM.shiftMobileSales) DOM.shiftMobileSales.textContent = formatCurrency(mobileSales);
  if (DOM.shiftDueSales) DOM.shiftDueSales.textContent = formatCurrency(dueSales);
  if (DOM.shiftTotalInvoices) DOM.shiftTotalInvoices.textContent = POS_STATE.shiftInvoices;
  if (DOM.shiftTotalRevenue) DOM.shiftTotalRevenue.textContent = formatCurrency(totalRevenue);

  DOM.shiftSummaryModalOverlay.classList.add("active");
  soundManager.playPop();
}

function closeShiftSummaryModal() {
  DOM.shiftSummaryModalOverlay.classList.remove("active");
}

function printShiftReport() {
  window.print();
}

// ==========================================================================
// 13.5 EXECUTIVE POS CALCULATOR MODULE (RETAIL & CASH ENGINE)
// ==========================================================================
const CALCULATOR_STATE = {
  display: "0",
  prevValue: null,
  currentOperator: null,
  expression: "",
  isNewEntry: true,
  memory: 0,
  history: []
};

function formatCalcDisplay(numStr) {
  if (numStr === "Error" || numStr === "Cannot divide by 0") return numStr;
  const parts = String(numStr).split(".");
  const intPart = parts[0];
  const decPart = parts.length > 1 ? "." + parts[1] : "";
  
  const num = Number(intPart);
  if (!isNaN(num) && Math.abs(num) < 1e15) {
    const formattedInt = num.toLocaleString("en-US");
    return formattedInt + decPart;
  }
  return numStr;
}

function updateCalculatorDisplay() {
  if (DOM.calcMainDisplay) {
    DOM.calcMainDisplay.textContent = formatCalcDisplay(CALCULATOR_STATE.display);
  }
  if (DOM.calcExpressionPreview) {
    let expr = CALCULATOR_STATE.expression;
    if (!expr) expr = CALCULATOR_STATE.currentOperator ? `${CALCULATOR_STATE.prevValue} ${getOpSymbol(CALCULATOR_STATE.currentOperator)}` : "Ready";
    DOM.calcExpressionPreview.textContent = expr;
  }
  if (DOM.calcMemIndicator) {
    DOM.calcMemIndicator.style.display = CALCULATOR_STATE.memory !== 0 ? "inline-block" : "none";
  }
}

function getOpSymbol(op) {
  switch (op) {
    case "add": return "+";
    case "subtract": return "−";
    case "multiply": return "×";
    case "divide": return "÷";
    default: return "";
  }
}

function inputCalculatorDigit(digit) {
  if (CALCULATOR_STATE.display === "Error" || CALCULATOR_STATE.display === "Cannot divide by 0") {
    CALCULATOR_STATE.display = "0";
    CALCULATOR_STATE.isNewEntry = true;
  }

  if (digit === ".") {
    if (CALCULATOR_STATE.isNewEntry) {
      CALCULATOR_STATE.display = "0.";
      CALCULATOR_STATE.isNewEntry = false;
    } else if (!CALCULATOR_STATE.display.includes(".")) {
      CALCULATOR_STATE.display += ".";
    }
  } else if (digit === "00") {
    if (CALCULATOR_STATE.isNewEntry || CALCULATOR_STATE.display === "0") {
      CALCULATOR_STATE.display = "0";
      CALCULATOR_STATE.isNewEntry = false;
    } else if (CALCULATOR_STATE.display.length < 14) {
      CALCULATOR_STATE.display += "00";
    }
  } else {
    // 0 - 9
    if (CALCULATOR_STATE.isNewEntry || CALCULATOR_STATE.display === "0") {
      CALCULATOR_STATE.display = String(digit);
      CALCULATOR_STATE.isNewEntry = false;
    } else if (CALCULATOR_STATE.display.length < 15) {
      CALCULATOR_STATE.display += String(digit);
    }
  }

  updateCalculatorDisplay();
  soundManager.playPop();
}

function setCalculatorOperator(op) {
  if (CALCULATOR_STATE.currentOperator && !CALCULATOR_STATE.isNewEntry) {
    executeCalculatorEqual(false);
  }

  CALCULATOR_STATE.prevValue = parseFloat(CALCULATOR_STATE.display);
  CALCULATOR_STATE.currentOperator = op;
  CALCULATOR_STATE.expression = `${CALCULATOR_STATE.prevValue} ${getOpSymbol(op)}`;
  CALCULATOR_STATE.isNewEntry = true;

  updateCalculatorDisplay();
  soundManager.playPop();
}

function executeCalculatorEqual(fromUserAction = true) {
  if (!CALCULATOR_STATE.currentOperator || CALCULATOR_STATE.prevValue === null) {
    if (fromUserAction) soundManager.playPop();
    return;
  }

  const prev = CALCULATOR_STATE.prevValue;
  const current = parseFloat(CALCULATOR_STATE.display);
  let result = 0;
  const op = CALCULATOR_STATE.currentOperator;
  const opSym = getOpSymbol(op);

  if (op === "add") result = prev + current;
  else if (op === "subtract") result = prev - current;
  else if (op === "multiply") result = prev * current;
  else if (op === "divide") {
    if (current === 0) {
      CALCULATOR_STATE.display = "Cannot divide by 0";
      CALCULATOR_STATE.expression = `${prev} ÷ 0 = Error`;
      CALCULATOR_STATE.prevValue = null;
      CALCULATOR_STATE.currentOperator = null;
      CALCULATOR_STATE.isNewEntry = true;
      updateCalculatorDisplay();
      soundManager.playPop();
      return;
    }
    result = prev / current;
  }

  // Handle floating point imprecision
  result = Math.round(result * 1e10) / 1e10;

  const exprString = `${prev} ${opSym} ${current} =`;
  const resultString = String(result);

  CALCULATOR_STATE.history.unshift({ expr: exprString, val: resultString });
  if (CALCULATOR_STATE.history.length > 8) CALCULATOR_STATE.history.pop();
  renderCalculatorHistory();

  CALCULATOR_STATE.display = resultString;
  CALCULATOR_STATE.expression = exprString;
  CALCULATOR_STATE.prevValue = null;
  CALCULATOR_STATE.currentOperator = null;
  CALCULATOR_STATE.isNewEntry = true;

  updateCalculatorDisplay();
  if (fromUserAction) soundManager.playPop();
}

function executeCalculatorAction(action, val = null) {
  switch (action) {
    case "clear":
      CALCULATOR_STATE.display = "0";
      CALCULATOR_STATE.prevValue = null;
      CALCULATOR_STATE.currentOperator = null;
      CALCULATOR_STATE.expression = "Ready";
      CALCULATOR_STATE.isNewEntry = true;
      break;

    case "backspace":
      if (CALCULATOR_STATE.isNewEntry || CALCULATOR_STATE.display.length <= 1 || CALCULATOR_STATE.display === "Error") {
        CALCULATOR_STATE.display = "0";
        CALCULATOR_STATE.isNewEntry = true;
      } else {
        CALCULATOR_STATE.display = CALCULATOR_STATE.display.slice(0, -1);
      }
      break;

    case "negate":
      if (CALCULATOR_STATE.display !== "0" && CALCULATOR_STATE.display !== "Error") {
        if (CALCULATOR_STATE.display.startsWith("-")) {
          CALCULATOR_STATE.display = CALCULATOR_STATE.display.substring(1);
        } else {
          CALCULATOR_STATE.display = "-" + CALCULATOR_STATE.display;
        }
      }
      break;

    case "percent":
      const curNum = parseFloat(CALCULATOR_STATE.display) || 0;
      if (CALCULATOR_STATE.prevValue !== null && CALCULATOR_STATE.currentOperator) {
        const pctAmount = (CALCULATOR_STATE.prevValue * curNum) / 100;
        CALCULATOR_STATE.display = String(Math.round(pctAmount * 1e8) / 1e8);
      } else {
        CALCULATOR_STATE.display = String(Math.round((curNum / 100) * 1e8) / 1e8);
      }
      break;

    case "percent_tax":
      const taxRate = parseFloat(val) || 0;
      const baseNumTax = parseFloat(CALCULATOR_STATE.display) || 0;
      const withTax = Math.round((baseNumTax * (1 + taxRate / 100)) * 100) / 100;
      CALCULATOR_STATE.expression = `${baseNumTax} + ${taxRate}% Tax =`;
      CALCULATOR_STATE.display = String(withTax);
      CALCULATOR_STATE.isNewEntry = true;
      CALCULATOR_STATE.history.unshift({ expr: CALCULATOR_STATE.expression, val: String(withTax) });
      renderCalculatorHistory();
      break;

    case "percent_disc":
      const discRate = parseFloat(val) || 0;
      const baseNumDisc = parseFloat(CALCULATOR_STATE.display) || 0;
      const withDisc = Math.round((baseNumDisc * (1 - discRate / 100)) * 100) / 100;
      CALCULATOR_STATE.expression = `${baseNumDisc} - ${discRate}% Disc =`;
      CALCULATOR_STATE.display = String(withDisc);
      CALCULATOR_STATE.isNewEntry = true;
      CALCULATOR_STATE.history.unshift({ expr: CALCULATOR_STATE.expression, val: String(withDisc) });
      renderCalculatorHistory();
      break;

    case "mem_clear":
      CALCULATOR_STATE.memory = 0;
      showToast("Calculator memory cleared");
      break;

    case "mem_recall":
      CALCULATOR_STATE.display = String(CALCULATOR_STATE.memory);
      CALCULATOR_STATE.isNewEntry = true;
      break;

    case "mem_add":
      CALCULATOR_STATE.memory += parseFloat(CALCULATOR_STATE.display) || 0;
      CALCULATOR_STATE.isNewEntry = true;
      showToast(`Added to memory (M: ${CALCULATOR_STATE.memory})`);
      break;

    case "mem_sub":
      CALCULATOR_STATE.memory -= parseFloat(CALCULATOR_STATE.display) || 0;
      CALCULATOR_STATE.isNewEntry = true;
      showToast(`Subtracted from memory (M: ${CALCULATOR_STATE.memory})`);
      break;
  }

  updateCalculatorDisplay();
  soundManager.playPop();
}

function renderCalculatorHistory() {
  if (!DOM.calcHistoryList) return;
  if (!CALCULATOR_STATE.history.length) {
    DOM.calcHistoryList.innerHTML = '<div class="calc-history-empty">No calculations yet</div>';
    return;
  }

  DOM.calcHistoryList.innerHTML = CALCULATOR_STATE.history.map(item => `
    <div class="calc-history-item" data-history-val="${escapeHtml(item.val)}" title="Click to use this value">
      <span class="calc-history-expr">${escapeHtml(item.expr)}</span>
      <span class="calc-history-val">${escapeHtml(formatCalcDisplay(item.val))}</span>
    </div>
  `).join("");

  DOM.calcHistoryList.querySelectorAll(".calc-history-item").forEach(el => {
    el.addEventListener("click", () => {
      const val = el.getAttribute("data-history-val");
      if (val) {
        CALCULATOR_STATE.display = val;
        CALCULATOR_STATE.isNewEntry = true;
        updateCalculatorDisplay();
        soundManager.playPop();
      }
    });
  });
}

function copyCalculatorResult() {
  const val = CALCULATOR_STATE.display;
  if (navigator.clipboard && navigator.clipboard.writeText) {
    navigator.clipboard.writeText(val).then(() => {
      showToast(`Copied ${val} to clipboard!`);
    }).catch(() => {
      fallbackCopyText(val);
    });
  } else {
    fallbackCopyText(val);
  }
  soundManager.playPop();
}

function fallbackCopyText(text) {
  const ta = document.createElement("textarea");
  ta.value = text;
  document.body.appendChild(ta);
  ta.select();
  document.execCommand("copy");
  document.body.removeChild(ta);
  showToast(`Copied ${text} to clipboard!`);
}

function applyCalculatorToCash() {
  const val = parseFloat(CALCULATOR_STATE.display);
  if (isNaN(val) || val < 0) {
    showToast("Invalid calculation value for cash", "warning");
    return;
  }

  closeCalculatorModal();

  if (!DOM.paymentModalOverlay.classList.contains("active")) {
    openPaymentModal();
  }

  if (DOM.cashReceivedInput) {
    DOM.cashReceivedInput.value = val;
    updateModalChangeCalculation();
    DOM.cashReceivedInput.focus();
    DOM.cashReceivedInput.select();
  }

  showToast(`Applied ${formatCurrency(val)} to Cash Received`);
  soundManager.playPop();
}

function openCalculatorModal() {
  if (typeof closeLeftDrawer === "function") closeLeftDrawer();
  DOM.calculatorModalOverlay.classList.add("active");
  updateCalculatorDisplay();
  renderCalculatorHistory();
  soundManager.playPop();
}

function closeCalculatorModal() {
  DOM.calculatorModalOverlay.classList.remove("active");
}
window.openCalculatorModal = openCalculatorModal;
window.closeCalculatorModal = closeCalculatorModal;

// ==========================================================================
// 14. KEYBOARD SHORTCUTS & RAPID SCANNER ENGINE
// ==========================================================================
function setupKeyboardShortcuts() {
  window.addEventListener("keydown", (e) => {
    // If Calculator Modal is active, capture calculator keys
    if (DOM.calculatorModalOverlay && DOM.calculatorModalOverlay.classList.contains("active")) {
      if (e.key >= "0" && e.key <= "9") {
        e.preventDefault();
        inputCalculatorDigit(e.key);
        return;
      }
      if (e.key === "." || e.key === ",") {
        e.preventDefault();
        inputCalculatorDigit(".");
        return;
      }
      if (e.key === "+") {
        e.preventDefault();
        setCalculatorOperator("add");
        return;
      }
      if (e.key === "-") {
        e.preventDefault();
        setCalculatorOperator("subtract");
        return;
      }
      if (e.key === "*") {
        e.preventDefault();
        setCalculatorOperator("multiply");
        return;
      }
      if (e.key === "/") {
        e.preventDefault();
        setCalculatorOperator("divide");
        return;
      }
      if (e.key === "Enter" || e.key === "=") {
        e.preventDefault();
        executeCalculatorEqual(true);
        return;
      }
      if (e.key === "Backspace") {
        e.preventDefault();
        executeCalculatorAction("backspace");
        return;
      }
      if (e.key === "Escape") {
        e.preventDefault();
        closeCalculatorModal();
        return;
      }
      if (e.key === "c" || e.key === "C") {
        e.preventDefault();
        executeCalculatorAction("clear");
        return;
      }
      if (e.key === "%") {
        e.preventDefault();
        executeCalculatorAction("percent");
        return;
      }
    }

    // F1: Help / Shortcuts Guide
    if (e.key === "F1") {
      e.preventDefault();
      DOM.shortcutsModalOverlay.classList.add("active");
      return;
    }

    // F2: Complete Sale / Charge
    if (e.key === "F2") {
      e.preventDefault();
      openPaymentModal();
      return;
    }

    // F3: Focus Barcode Quick Scanner (Cart Section)
    if (e.key === "F3") {
      e.preventDefault();
      if (window.innerWidth <= 768) switchMobileView("cart");
      if (DOM.cartSearchFilterInput) {
        DOM.cartSearchFilterInput.focus();
        DOM.cartSearchFilterInput.select();
      }
      return;
    }

    // Enter in Cart Barcode Quick Scanner
    if (e.key === "Enter" && document.activeElement === DOM.cartSearchFilterInput) {
      e.preventDefault();
      executeBarcodeQuickScan();
      return;
    }

    // F4: Toggle Left Terminal Navigation Drawer
    if (e.key === "F4") {
      e.preventDefault();
      toggleLeftDrawer();
      return;
    }

    // F6: Hold Current Cart
    if (e.key === "F6") {
      e.preventDefault();
      holdCurrentCart();
      return;
    }

    // F7: Clear Cart
    if (e.key === "F7") {
      e.preventDefault();
      clearCart();
      return;
    }

    // F8: Customer Search Dropdown
    if (e.key === "F8") {
      e.preventDefault();
      toggleCustomerDropdown();
      return;
    }

    // F9: Recent Receipts Modal
    if (e.key === "F9") {
      e.preventDefault();
      openRecentReceiptsModal();
      return;
    }

    // F10: Executive POS Calculator
    if (e.key === "F10") {
      e.preventDefault();
      if (DOM.calculatorModalOverlay && DOM.calculatorModalOverlay.classList.contains("active")) {
        closeCalculatorModal();
      } else {
        openCalculatorModal();
      }
      return;
    }

    // Escape: Close Active Modals and Left Drawer
    if (e.key === "Escape") {
      closeLeftDrawer();
      document.querySelectorAll(".modal-overlay.active").forEach(m => m.classList.remove("active"));
      return;
    }

    // Enter in Search Input (Instant Barcode Scan Match)
    if (e.key === "Enter" && document.activeElement === DOM.productSearchInput) {
      const val = DOM.productSearchInput.value.trim().toLowerCase();
      if (!val) return;

      const matched = POS_STATE.products.find(p => 
        (p.barcode && p.barcode.toLowerCase() === val) ||
        p.sku.toLowerCase() === val
      );

      if (matched) {
        addToCart(matched);
        DOM.productSearchInput.value = "";
        POS_STATE.searchQuery = "";
        renderProductCatalog();
      } else {
        const currentFiltered = POS_STATE.products.filter(p => p.name.toLowerCase().includes(val));
        if (currentFiltered.length === 1) {
          addToCart(currentFiltered[0]);
          DOM.productSearchInput.value = "";
          POS_STATE.searchQuery = "";
          renderProductCatalog();
        }
      }
    }

    // Enter in Product Edit Modal
    if (e.key === "Enter" && DOM.productEditModalOverlay.classList.contains("active")) {
      e.preventDefault();
      saveProductEdit();
      return;
    }

    // Enter in Payment Modal
    if (e.key === "Enter" && DOM.paymentModalOverlay.classList.contains("active")) {
      confirmPaymentAndGenerateReceipt();
    }
  });
}

// ==========================================================================
// 14. EVENT LISTENERS SETUP
// ==========================================================================
function setupEventListeners() {
  // Live Clock & Date
  setInterval(() => {
    const now = new Date();
    if (DOM.liveClock) DOM.liveClock.textContent = now.toLocaleTimeString();
    if (DOM.orderLiveDateTime) {
      const dtStr = now.toLocaleDateString("en-GB", { day: '2-digit', month: 'short', year: 'numeric' }) + ", " + now.toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' });
      DOM.orderLiveDateTime.textContent = dtStr;
    }
  }, 1000);

  // Left Collapsible Terminal Drawer & Store Config Toggles
  if (DOM.btnToggleLeftSidebar) {
    DOM.btnToggleLeftSidebar.addEventListener("click", (e) => {
      e.stopPropagation();
      toggleLeftDrawer();
    });
  }

  if (DOM.btnCloseLeftSidebar) {
    DOM.btnCloseLeftSidebar.addEventListener("click", closeLeftDrawer);
  }

  if (DOM.posLeftSidebarBackdrop) {
    DOM.posLeftSidebarBackdrop.addEventListener("click", closeLeftDrawer);
  }

  if (DOM.cashierBadgeHeader) {
    DOM.cashierBadgeHeader.addEventListener("click", (e) => {
      e.stopPropagation();
      toggleLeftDrawer();
    });
  }

  if (DOM.btnToggleMobileMeta) {
    DOM.btnToggleMobileMeta.addEventListener("click", (e) => {
      e.stopPropagation();
      toggleLeftDrawer();
      if (DOM.headerMetaGroup) DOM.headerMetaGroup.classList.toggle("open");
    });
  }

  // Sync Branch Label with Branch Select & Address Display
  if (DOM.branchSelect && DOM.mobileStoreLabel) {
    const updateStoreLabel = () => {
      const branchVal = DOM.branchSelect.value;
      const txt = DOM.branchSelect.options[DOM.branchSelect.selectedIndex]?.text || "Main Branch (HQ)";
      DOM.mobileStoreLabel.textContent = txt.replace(/\(.*\)/, "").trim() || txt;
      if (DOM.branchAddressDisplay && typeof BRANCH_DETAILS !== "undefined" && BRANCH_DETAILS[branchVal]) {
        DOM.branchAddressDisplay.textContent = BRANCH_DETAILS[branchVal].address;
      }
    };
    DOM.branchSelect.addEventListener("change", updateStoreLabel);
    updateStoreLabel();
  }

  // Mobile Tabs
  if (DOM.btnMobileTabCatalog) DOM.btnMobileTabCatalog.addEventListener("click", () => switchMobileView("catalog"));
  if (DOM.btnMobileTabCart) DOM.btnMobileTabCart.addEventListener("click", () => switchMobileView("cart"));
  if (DOM.btnMobileGoToCart) DOM.btnMobileGoToCart.addEventListener("click", () => switchMobileView("cart"));
  if (DOM.btnMobileTabReceipts) DOM.btnMobileTabReceipts.addEventListener("click", () => openRecentReceiptsModal());
  if (DOM.btnMobileTabTransactions) DOM.btnMobileTabTransactions.addEventListener("click", () => openRecentTransactionsModal());

  // Toggle / Collapse Product Catalog Sidebar
  if (DOM.btnToggleCatalogSidebar) {
    DOM.btnToggleCatalogSidebar.addEventListener("click", () => toggleCatalogSidebar(true));
  }
  if (DOM.btnReopenCatalogFloating) {
    DOM.btnReopenCatalogFloating.addEventListener("click", () => toggleCatalogSidebar(false));
  }

  // Search Input live typing
  DOM.productSearchInput.addEventListener("input", (e) => {
    POS_STATE.searchQuery = e.target.value;
    if (POS_STATE.activeCatalogTab === "category") {
      renderCategoryGrid();
    } else if (POS_STATE.activeCatalogTab === "brand") {
      renderBrandGrid();
    } else {
      renderProductCatalog();
    }
  });

  // Catalog Mode Switcher Tabs (All Product, Category, Brand)
  if (DOM.tabCatalogAll) DOM.tabCatalogAll.addEventListener("click", () => switchCatalogTab("all"));
  if (DOM.tabCatalogCategory) DOM.tabCatalogCategory.addEventListener("click", () => switchCatalogTab("category"));
  if (DOM.tabCatalogBrand) DOM.tabCatalogBrand.addEventListener("click", () => switchCatalogTab("brand"));

  // Active Filter Breadcrumb Actions
  if (DOM.btnFilterBack) {
    DOM.btnFilterBack.addEventListener("click", () => {
      if (POS_STATE.activeCategory !== "all") {
        switchCatalogTab("category");
      } else if (POS_STATE.activeBrand !== "all") {
        switchCatalogTab("brand");
      } else {
        switchCatalogTab("all");
      }
    });
  }
  if (DOM.btnClearCatalogFilter) {
    DOM.btnClearCatalogFilter.addEventListener("click", clearCatalogFilter);
  }

  // Retail vs Wholesale Mode Switch
  DOM.pricingModeSwitch.addEventListener("click", (e) => {
    const btn = e.target.closest(".mode-btn");
    if (!btn) return;
    DOM.pricingModeSwitch.querySelectorAll(".mode-btn").forEach(b => b.classList.remove("active"));
    btn.classList.add("active");
    POS_STATE.pricingMode = btn.getAttribute("data-mode");
    
    // Recalculate and re-render catalog & cart with new prices
    renderProductCatalog();
    renderCart();
    calculateTotals();
    showToast(`Pricing switched to ${POS_STATE.pricingMode.toUpperCase()} rate`);
  });

  // Density Switcher (Compact vs Comfortable View for High-Volume Carts)
  if (DOM.btnToggleCartDensity) {
    DOM.btnToggleCartDensity.addEventListener("click", () => {
      POS_STATE.cartDensity = POS_STATE.cartDensity === "compact" ? "comfortable" : "compact";
      renderCart();
      showToast(`Switched to ${POS_STATE.cartDensity.toUpperCase()} cart view`);
    });
  }

  // Barcode Quick Scanner in Cart Header (Rapid Item Addition)
  if (DOM.cartSearchFilterInput) {
    DOM.cartSearchFilterInput.addEventListener("keydown", (e) => {
      if (e.key === "Enter") {
        e.preventDefault();
        executeBarcodeQuickScan();
      }
    });

    DOM.cartSearchFilterInput.addEventListener("input", (e) => {
      if (DOM.btnClearCartSearch) {
        DOM.btnClearCartSearch.style.display = e.target.value ? "block" : "none";
      }
    });
  }

  // Clear Barcode Quick Scanner Input
  if (DOM.btnClearCartSearch) {
    DOM.btnClearCartSearch.addEventListener("click", () => {
      DOM.cartSearchFilterInput.value = "";
      DOM.btnClearCartSearch.style.display = "none";
      DOM.cartSearchFilterInput.focus();
    });
  }

  // Barcode Scan Icon Click -> Focus Scanner
  const cartBarcodeIcon = document.querySelector(".cart-barcode-scan-box .barcode-scan-icon");
  if (cartBarcodeIcon) {
    cartBarcodeIcon.addEventListener("click", () => {
      if (DOM.cartSearchFilterInput) {
        DOM.cartSearchFilterInput.focus();
        DOM.cartSearchFilterInput.select();
      }
    });
  }

  // In-Cart Sort Select
  if (DOM.cartSortSelect) {
    DOM.cartSortSelect.addEventListener("change", (e) => {
      POS_STATE.cartSortBy = e.target.value;
      renderCart();
      showToast(`Cart ${e.target.options[e.target.selectedIndex].text}`);
    });
  }

  // Synchronize horizontal scrolling between Cart Viewport and Cart Table Head
  if (DOM.cartItemsList && DOM.cartTableHead) {
    DOM.cartItemsList.addEventListener("scroll", () => {
      DOM.cartTableHead.scrollLeft = DOM.cartItemsList.scrollLeft;
    });
  }

  // Currency Dropdown Selection in Sidebar
  if (DOM.currencySelect) {
    DOM.currencySelect.addEventListener("change", (e) => {
      setCurrency(e.target.value);
      soundManager.playPop();
    });
  }

  // Audio Sound Toggle
  DOM.soundToggleBtn.addEventListener("click", () => {
    POS_STATE.soundEnabled = !POS_STATE.soundEnabled;
    if (POS_STATE.soundEnabled) {
      DOM.soundIcon.className = "fa-solid fa-volume-high";
      DOM.soundIcon.style.color = "var(--primary)";
      soundManager.playBeep();
      showToast("Sound feedback enabled");
    } else {
      DOM.soundIcon.className = "fa-solid fa-volume-xmark";
      DOM.soundIcon.style.color = "var(--text-subtle)";
      showToast("Sound feedback muted");
    }
  });

  // Hold & Clear Cart
  DOM.btnHoldCart.addEventListener("click", holdCurrentCart);
  DOM.btnClearCart.addEventListener("click", () => clearCart());

  // Held Orders Modal
  DOM.btnOpenHeldOrders.addEventListener("click", () => {
    renderHeldOrdersList();
    DOM.heldOrdersModalOverlay.classList.add("active");
  });
  DOM.btnCloseHeldModal.addEventListener("click", () => DOM.heldOrdersModalOverlay.classList.remove("active"));
  DOM.btnCloseHeldOrdersBottom.addEventListener("click", () => DOM.heldOrdersModalOverlay.classList.remove("active"));

  // Shift Cash Drawer Modal Listeners
  if (DOM.btnOpenShiftModal) DOM.btnOpenShiftModal.addEventListener("click", openShiftSummaryModal);
  if (DOM.btnCloseShiftModal) DOM.btnCloseShiftModal.addEventListener("click", closeShiftSummaryModal);
  if (DOM.btnCloseShiftModalBottom) DOM.btnCloseShiftModalBottom.addEventListener("click", closeShiftSummaryModal);
  if (DOM.btnPrintShiftReport) DOM.btnPrintShiftReport.addEventListener("click", printShiftReport);

  // Virtual Numpad Modal Listeners
  if (DOM.btnCloseNumpadModal) DOM.btnCloseNumpadModal.addEventListener("click", closeNumpadModal);
  if (DOM.btnNumpadSubmit) DOM.btnNumpadSubmit.addEventListener("click", confirmNumpadSubmit);

  document.querySelectorAll(".numpad-key[data-key]").forEach(keyBtn => {
    keyBtn.addEventListener("click", () => {
      handleNumpadKey(keyBtn.getAttribute("data-key"));
    });
  });

  document.querySelectorAll(".numpad-preset-btn[data-preset]").forEach(presetBtn => {
    presetBtn.addEventListener("click", () => {
      handleNumpadPreset(parseInt(presetBtn.getAttribute("data-preset"), 10));
    });
  });

  // Item-Level Discount Modal Listeners
  if (DOM.btnCloseItemDiscModal) DOM.btnCloseItemDiscModal.addEventListener("click", closeItemDiscountModal);
  if (DOM.btnCancelItemDisc) DOM.btnCancelItemDisc.addEventListener("click", closeItemDiscountModal);
  if (DOM.btnApplyItemDisc) DOM.btnApplyItemDisc.addEventListener("click", applyItemDiscount);

  if (DOM.btnDiscTypePercent) {
    DOM.btnDiscTypePercent.addEventListener("click", () => {
      POS_STATE.itemDiscountType = "percent";
      updateItemDiscountTypeUI();
    });
  }
  if (DOM.btnDiscTypeFlat) {
    DOM.btnDiscTypeFlat.addEventListener("click", () => {
      POS_STATE.itemDiscountType = "flat";
      updateItemDiscountTypeUI();
    });
  }

  document.querySelectorAll(".item-quick-disc[data-itemdisc]").forEach(qBtn => {
    qBtn.addEventListener("click", () => {
      const disc = parseFloat(qBtn.getAttribute("data-itemdisc")) || 0;
      if (DOM.itemDiscValueInput) {
        DOM.itemDiscValueInput.value = disc > 0 ? disc : "";
      }
      POS_STATE.itemDiscountType = "percent";
      updateItemDiscountTypeUI();
    });
  });

  // Shortcuts Modal
  DOM.btnOpenShortcuts.addEventListener("click", () => {
    if (typeof closeLeftDrawer === "function") closeLeftDrawer();
    DOM.shortcutsModalOverlay.classList.add("active");
  });
  DOM.btnCloseShortcutsModal.addEventListener("click", () => DOM.shortcutsModalOverlay.classList.remove("active"));
  DOM.btnCloseShortcutsBottom.addEventListener("click", () => DOM.shortcutsModalOverlay.classList.remove("active"));

  // Cart Order Discount Listeners (Direct In-Field & Modal)
  if (DOM.summaryDiscountInput) {
    DOM.summaryDiscountInput.addEventListener("input", () => {
      const raw = DOM.summaryDiscountInput.value.trim();
      const val = raw === "" ? 0 : Math.max(0, parseFloat(raw) || 0);
      POS_STATE.cartDiscountValue = val;
      calculateTotals();
    });
    DOM.summaryDiscountInput.addEventListener("change", () => {
      const raw = DOM.summaryDiscountInput.value.trim();
      const val = raw === "" ? 0 : Math.max(0, parseFloat(raw) || 0);
      POS_STATE.cartDiscountValue = val;
      DOM.summaryDiscountInput.value = val > 0 ? val : (val === 0 ? "0" : "");
      calculateTotals();
    });
    DOM.summaryDiscountInput.addEventListener("blur", () => {
      if (DOM.summaryDiscountInput.value.trim() === "" || isNaN(parseFloat(DOM.summaryDiscountInput.value))) {
        DOM.summaryDiscountInput.value = "0";
        POS_STATE.cartDiscountValue = 0;
        calculateTotals();
      }
    });
  }

  if (DOM.btnToggleOrderDiscMode) {
    DOM.btnToggleOrderDiscMode.addEventListener("click", () => {
      POS_STATE.cartDiscountType = POS_STATE.cartDiscountType === "percent" ? "flat" : "percent";
      soundManager.playPop();
      calculateTotals();
    });
  }

  // Shipping Cost Listeners (Direct In-Field)
  if (DOM.summaryShippingInput) {
    DOM.summaryShippingInput.addEventListener("input", () => {
      const raw = DOM.summaryShippingInput.value.trim();
      const val = raw === "" ? 0 : Math.max(0, parseFloat(raw) || 0);
      POS_STATE.shippingCost = val;
      calculateTotals();
    });
    DOM.summaryShippingInput.addEventListener("change", () => {
      const raw = DOM.summaryShippingInput.value.trim();
      const val = raw === "" ? 0 : Math.max(0, parseFloat(raw) || 0);
      POS_STATE.shippingCost = val;
      DOM.summaryShippingInput.value = val > 0 ? val : (val === 0 ? "0" : "");
      calculateTotals();
    });
    DOM.summaryShippingInput.addEventListener("blur", () => {
      if (DOM.summaryShippingInput.value.trim() === "" || isNaN(parseFloat(DOM.summaryShippingInput.value))) {
        DOM.summaryShippingInput.value = "0";
        POS_STATE.shippingCost = 0;
        calculateTotals();
      }
    });
  }

  // Product Item Note Modal Listeners
  if (DOM.btnCloseItemNoteModal) DOM.btnCloseItemNoteModal.addEventListener("click", closeItemNoteModal);
  if (DOM.btnCancelItemNote) DOM.btnCancelItemNote.addEventListener("click", closeItemNoteModal);
  if (DOM.btnSaveItemNote) DOM.btnSaveItemNote.addEventListener("click", saveItemNote);
  if (DOM.btnClearItemNote) DOM.btnClearItemNote.addEventListener("click", clearItemNote);

  if (DOM.itemNoteTextarea) {
    DOM.itemNoteTextarea.addEventListener("input", (e) => {
      if (DOM.itemNoteCharCount) {
        DOM.itemNoteCharCount.textContent = `${e.target.value.length} / 120`;
      }
    });

    DOM.itemNoteTextarea.addEventListener("keydown", (e) => {
      if (e.key === "Enter" && (e.ctrlKey || e.metaKey)) {
        e.preventDefault();
        saveItemNote();
      }
    });
  }

  document.querySelectorAll(".btn-note-tag[data-tag]").forEach(btn => {
    btn.addEventListener("click", () => {
      if (!DOM.itemNoteTextarea) return;
      const tag = btn.getAttribute("data-tag");
      const current = DOM.itemNoteTextarea.value.trim();
      DOM.itemNoteTextarea.value = current ? `${current}, ${tag}` : tag;
      if (DOM.itemNoteCharCount) {
        DOM.itemNoteCharCount.textContent = `${DOM.itemNoteTextarea.value.length} / 120`;
      }
      DOM.itemNoteTextarea.focus();
      soundManager.playPop();
    });
  });

  // Modal 13: Advanced Product Edit Modal Listeners
  if (DOM.btnCloseProductEditModal) DOM.btnCloseProductEditModal.addEventListener("click", closeProductEditModal);
  if (DOM.btnCancelProductEdit) DOM.btnCancelProductEdit.addEventListener("click", closeProductEditModal);
  if (DOM.btnSaveProductEdit) DOM.btnSaveProductEdit.addEventListener("click", saveProductEdit);
  if (DOM.btnResetProductEdit) DOM.btnResetProductEdit.addEventListener("click", resetProductEditDefaults);

  // Close when clicking modal backdrop
  if (DOM.productEditModalOverlay) {
    DOM.productEditModalOverlay.addEventListener("click", (e) => {
      if (e.target === DOM.productEditModalOverlay) {
        closeProductEditModal();
      }
    });
  }

  // Product Price Tier Dropdown Selector
  if (DOM.productPriceTierSelect) {
    DOM.productPriceTierSelect.addEventListener("change", (e) => {
      const item = POS_STATE.cart.find(i => i.id === POS_STATE.activeProductEditItemId);
      if (!item) return;
      const reg = item.regularPrice || Math.round(item.price * 1.25 * 100) / 100;
      const promo = item.promotionalPrice || item.price;
      const ws = item.wholesalePrice || item.price;

      let targetPrice = promo;
      const tier = e.target.value;
      if (tier === "regular") targetPrice = reg;
      else if (tier === "promo") targetPrice = promo;
      else if (tier === "wholesale") targetPrice = ws;
      else if (tier === "custom") {
        targetPrice = parseFloat(DOM.modalUnitPriceInput ? DOM.modalUnitPriceInput.value : "") || promo;
      }

      POS_STATE.modalEditPrice = targetPrice;
      if (DOM.modalUnitPriceInput) DOM.modalUnitPriceInput.value = Number(targetPrice).toFixed(2);
      updatePriceTierVisuals(tier, targetPrice, reg, promo, ws);
      updateProductEditLiveSummary();
      soundManager.playPop();
    });
  }

  // Active Unit Price direct numeric input
  if (DOM.modalUnitPriceInput) {
    DOM.modalUnitPriceInput.addEventListener("input", (e) => {
      const item = POS_STATE.cart.find(i => i.id === POS_STATE.activeProductEditItemId);
      if (!item) return;
      const val = parseFloat(e.target.value);
      const reg = item.regularPrice || Math.round(item.price * 1.25 * 100) / 100;
      const promo = item.promotionalPrice || item.price;
      const ws = item.wholesalePrice || item.price;

      if (!isNaN(val) && val >= 0) {
        POS_STATE.modalEditPrice = val;
        const p = Math.round(val * 100) / 100;
        let matchedTier = "custom";
        if (p === Math.round(reg * 100) / 100) matchedTier = "regular";
        else if (p === Math.round(promo * 100) / 100) matchedTier = "promo";
        else if (p === Math.round(ws * 100) / 100) matchedTier = "wholesale";

        if (DOM.productPriceTierSelect) DOM.productPriceTierSelect.value = matchedTier;
        updatePriceTierVisuals(matchedTier, val, reg, promo, ws);
        updateProductEditLiveSummary();
      }
    });
  }

  // Tier select buttons
  if (DOM.btnApplyRegularRate) {
    DOM.btnApplyRegularRate.addEventListener("click", () => {
      const item = POS_STATE.cart.find(i => i.id === POS_STATE.activeProductEditItemId);
      if (!item) return;
      const reg = item.regularPrice || Math.round(item.price * 1.25 * 100) / 100;
      POS_STATE.modalEditPrice = reg;
      updatePromoTierActiveCards(reg, reg, item.promotionalPrice || item.price, item.wholesalePrice || item.price);
      updateProductEditLiveSummary();
      soundManager.playPop();
    });
  }

  if (DOM.btnApplyPromoRate) {
    DOM.btnApplyPromoRate.addEventListener("click", () => {
      const item = POS_STATE.cart.find(i => i.id === POS_STATE.activeProductEditItemId);
      if (!item) return;
      const promo = item.promotionalPrice || item.price;
      POS_STATE.modalEditPrice = promo;
      updatePromoTierActiveCards(promo, item.regularPrice || Math.round(item.price * 1.25 * 100) / 100, promo, item.wholesalePrice || item.price);
      updateProductEditLiveSummary();
      soundManager.playPop();
    });
  }

  if (DOM.btnApplyWholesaleRate) {
    DOM.btnApplyWholesaleRate.addEventListener("click", () => {
      const item = POS_STATE.cart.find(i => i.id === POS_STATE.activeProductEditItemId);
      if (!item) return;
      const ws = item.wholesalePrice || item.price;
      POS_STATE.modalEditPrice = ws;
      updatePromoTierActiveCards(ws, item.regularPrice || Math.round(item.price * 1.25 * 100) / 100, item.promotionalPrice || item.price, ws);
      updateProductEditLiveSummary();
      soundManager.playPop();
    });
  }

  // Modal 13 Quantity Stepper (+ / -)
  if (DOM.btnModalQtyPlus) {
    DOM.btnModalQtyPlus.addEventListener("click", () => {
      changeModalEditQty(1);
    });
  }

  if (DOM.btnModalQtyMinus) {
    DOM.btnModalQtyMinus.addEventListener("click", () => {
      changeModalEditQty(-1);
    });
  }

  // Qty-Wise IMEI Clear All Action

  if (DOM.btnClearAllImeis) {
    DOM.btnClearAllImeis.addEventListener("click", () => {
      const item = POS_STATE.cart.find(i => i.id === POS_STATE.activeProductEditItemId);
      if (!DOM.productEditImeiList) return;
      const inputs = DOM.productEditImeiList.querySelectorAll(".imei-unit-input");
      inputs.forEach((inp, idx) => {
        inp.value = "";
        if (item && Array.isArray(item.imeis)) item.imeis[idx] = "";
      });
      soundManager.playPop();
      showToast("Cleared all unit IMEIs", "info");
    });
  }

  // Tax / VAT Rate Dropdown Listener
  if (DOM.vatRateSelect) {
    DOM.vatRateSelect.addEventListener("change", (e) => {
      const rate = parseFloat(e.target.value) || 0;
      POS_STATE.taxRate = rate;
      POS_STATE.taxEnabled = rate > 0;
      soundManager.playPop();
      calculateTotals();
    });
  }

  // Coupon Code Apply & Remove Handlers
  function handleApplyCoupon() {
    if (!DOM.cartCouponInput) return;
    const rawCode = DOM.cartCouponInput.value.trim().toUpperCase();
    if (!rawCode) {
      showToast("Please enter a coupon code", "warning");
      return;
    }

    let coupon = null;
    if (rawCode === "SAVE10") coupon = { code: "SAVE10", type: "percent", value: 10, desc: "-10%" };
    else if (rawCode === "SAVE15") coupon = { code: "SAVE15", type: "percent", value: 15, desc: "-15%" };
    else if (rawCode === "SAVE20") coupon = { code: "SAVE20", type: "percent", value: 20, desc: "-20%" };
    else if (rawCode === "FLAT50") coupon = { code: "FLAT50", type: "flat", value: 50, desc: `-${formatCurrency(50)}` };
    else if (rawCode === "FLAT20") coupon = { code: "FLAT20", type: "flat", value: 20, desc: `-${formatCurrency(20)}` };
    else if (rawCode === "FREESHIP") coupon = { code: "FREESHIP", type: "freeship", value: 0, desc: "Free Shipping" };
    else if (/^SAVE\d+$/.test(rawCode)) {
      const num = parseInt(rawCode.replace("SAVE", ""), 10);
      coupon = { code: rawCode, type: "percent", value: num, desc: `-${num}%` };
    } else if (/^FLAT\d+$/.test(rawCode)) {
      const num = parseInt(rawCode.replace("FLAT", ""), 10);
      coupon = { code: rawCode, type: "flat", value: num, desc: `-${formatCurrency(num)}` };
    } else {
      showToast(`Invalid coupon code "${rawCode}". Try SAVE10, SAVE20, FLAT50 or FREESHIP`, "warning");
      return;
    }

    POS_STATE.appliedCoupon = coupon;
    if (coupon.type === "percent") {
      POS_STATE.cartDiscountType = "percent";
      POS_STATE.cartDiscountValue = coupon.value;
    } else if (coupon.type === "flat") {
      POS_STATE.cartDiscountType = "flat";
      POS_STATE.cartDiscountValue = coupon.value;
    } else if (coupon.type === "freeship") {
      POS_STATE.shippingCost = 0;
      POS_STATE.cartDiscountValue = 0;
    }

    DOM.cartCouponInput.value = "";
    soundManager.playSuccess();
    showToast(`Coupon ${coupon.code} applied! (${coupon.desc})`, "success");
    calculateTotals();
  }

  function handleRemoveCoupon() {
    if (!POS_STATE.appliedCoupon) return;
    const prev = POS_STATE.appliedCoupon;
    POS_STATE.appliedCoupon = null;
    if (prev.type === "percent" || prev.type === "flat") {
      POS_STATE.cartDiscountValue = 0;
    }
    soundManager.playPop();
    showToast("Coupon removed", "info");
    calculateTotals();
  }

  if (DOM.btnApplyCoupon) DOM.btnApplyCoupon.addEventListener("click", handleApplyCoupon);
  if (DOM.cartCouponInput) {
    DOM.cartCouponInput.addEventListener("keydown", (e) => {
      if (e.key === "Enter") {
        e.preventDefault();
        handleApplyCoupon();
      }
    });
  }
  if (DOM.btnRemoveCoupon) DOM.btnRemoveCoupon.addEventListener("click", handleRemoveCoupon);

  // Main Pay Trigger Button
  DOM.btnTriggerPayment.addEventListener("click", openPaymentModal);
  DOM.btnClosePayModal.addEventListener("click", () => DOM.paymentModalOverlay.classList.remove("active"));
  DOM.btnCancelPayment.addEventListener("click", () => DOM.paymentModalOverlay.classList.remove("active"));

  if (DOM.btnAddPaymentRow) {
    DOM.btnAddPaymentRow.addEventListener("click", addSplitPaymentRow);
  }

  // Quick Tender Ribbon
  document.querySelectorAll(".btn-quick-tender").forEach(btn => {
    btn.addEventListener("click", () => {
      const type = btn.getAttribute("data-tender");
      handleQuickTender(type);
    });
  });

  // Notes and Terms
  if (DOM.modalSalesNote) {
    DOM.modalSalesNote.addEventListener("input", (e) => {
      POS_STATE.salesNote = e.target.value.trim();
    });
  }
  if (DOM.modalPaymentNote) {
    DOM.modalPaymentNote.addEventListener("input", (e) => {
      POS_STATE.paymentNote = e.target.value.trim();
    });
  }
  if (DOM.modalTermsConditionsSelect) {
    DOM.modalTermsConditionsSelect.addEventListener("change", (e) => {
      POS_STATE.termsAndConditions = e.target.value;
    });
  }

  // Payment Methods (Cash, Card, Mobile, Due)
  document.querySelectorAll(".pay-mode-btn").forEach(btn => {
    btn.addEventListener("click", () => {
      document.querySelectorAll(".pay-mode-btn").forEach(b => b.classList.remove("active"));
      btn.classList.add("active");
      POS_STATE.selectedPaymentMethod = btn.getAttribute("data-method");
      updateModalPaymentMethodUI();
      soundManager.playPop();
    });
  });

  if (DOM.cashReceivedInput) {
    DOM.cashReceivedInput.addEventListener("input", updateModalChangeCalculation);
  }
  DOM.btnConfirmPaymentAndPrint.addEventListener("click", confirmPaymentAndGenerateReceipt);

  // Receipt Modal Actions
  DOM.btnCloseReceiptModal.addEventListener("click", startNewOrder);
  DOM.btnNextOrder.addEventListener("click", startNewOrder);
  DOM.btnPrintReceiptBtn.addEventListener("click", () => window.print());

  // Custom Item Modal
  DOM.btnOpenCustomItem.addEventListener("click", () => {
    DOM.customItemName.value = "";
    DOM.customItemPrice.value = "";
    DOM.customItemQty.value = 1;
    DOM.customItemWarranty.value = "";
    DOM.customItemModalOverlay.classList.add("active");
    setTimeout(() => DOM.customItemName.focus(), 150);
  });
  DOM.btnCloseCustomItemModal.addEventListener("click", () => DOM.customItemModalOverlay.classList.remove("active"));
  DOM.btnCancelCustomItem.addEventListener("click", () => DOM.customItemModalOverlay.classList.remove("active"));

  DOM.btnAddCustomItemSubmit.addEventListener("click", () => {
    const name = DOM.customItemName.value.trim() || "Custom Retail Product";
    const price = parseFloat(DOM.customItemPrice.value) || 0;
    const qty = parseInt(DOM.customItemQty.value, 10) || 1;
    const warranty = DOM.customItemWarranty.value.trim() || "Standard";

    if (price <= 0) {
      showToast("Please enter a valid price", "warning");
      DOM.customItemPrice.focus();
      return;
    }

    addToCart({
      id: "cust-item-" + Date.now(),
      name,
      price,
      wholesalePrice: price,
      sku: "CUSTOM-" + Math.floor(100 + Math.random() * 900),
      warranty,
      unit: "Pcs"
    }, qty);

    DOM.customItemModalOverlay.classList.remove("active");
  });

  // Customer Selector & Dropdown Menu (Inline, NO Modal popup)
  if (DOM.btnCustomerSelector) {
    DOM.btnCustomerSelector.addEventListener("click", (e) => {
      e.stopPropagation();
      toggleCustomerDropdown();
    });

    DOM.btnCustomerSelector.addEventListener("keydown", (e) => {
      if (e.key === "Enter" || e.key === " ") {
        e.preventDefault();
        toggleCustomerDropdown();
      }
    });
  }

  if (DOM.custDropdownSearchInput) {
    DOM.custDropdownSearchInput.addEventListener("input", (e) => {
      const q = e.target.value;
      if (DOM.btnClearCustDropdownSearch) {
        DOM.btnClearCustDropdownSearch.style.display = q ? "block" : "none";
      }
      renderCustomerDropdownSuggestions(q);
    });
  }

  if (DOM.btnClearCustDropdownSearch) {
    DOM.btnClearCustDropdownSearch.addEventListener("click", (e) => {
      e.stopPropagation();
      if (DOM.custDropdownSearchInput) {
        DOM.custDropdownSearchInput.value = "";
        DOM.custDropdownSearchInput.focus();
      }
      DOM.btnClearCustDropdownSearch.style.display = "none";
      renderCustomerDropdownSuggestions("");
    });
  }

  if (DOM.btnDropdownOpenAddCustomer) {
    DOM.btnDropdownOpenAddCustomer.addEventListener("click", (e) => {
      e.stopPropagation();
      toggleCustomerDropdown(false);
      DOM.customerModalOverlay.classList.add("active");
      setTimeout(() => DOM.newCustName && DOM.newCustName.focus(), 150);
    });
  }

  // Dismiss dropdown on outside click
  document.addEventListener("click", (e) => {
    if (DOM.customerSelectorWrapper && !DOM.customerSelectorWrapper.contains(e.target)) {
      toggleCustomerDropdown(false);
    }
  });

  // Dismiss dropdown on Escape
  document.addEventListener("keydown", (e) => {
    if (e.key === "Escape") {
      toggleCustomerDropdown(false);
    }
  });

  // Retain registration modal close buttons & handlers for + Register Customer
  if (DOM.btnCloseCustomerModal) {
    DOM.btnCloseCustomerModal.addEventListener("click", () => DOM.customerModalOverlay.classList.remove("active"));
  }
  if (DOM.btnCloseCustModalBottom) {
    DOM.btnCloseCustModalBottom.addEventListener("click", () => DOM.customerModalOverlay.classList.remove("active"));
  }

  if (DOM.customerSearchInput) {
    DOM.customerSearchInput.addEventListener("input", (e) => {
      renderCustomerSearchResults(e.target.value);
    });
  }

  if (DOM.btnSelectWalkIn) {
    DOM.btnSelectWalkIn.addEventListener("click", () => {
      POS_STATE.activeCustomer = { name: "Walk-in Customer", phone: "General Retail Sale", points: 0, dueBalance: 0, deposit: 0, invoiceCount: 0, isWalkIn: true };
      updateCustomerDisplay();
      DOM.customerModalOverlay.classList.remove("active");
      showToast("Selected Walk-in Customer");
    });
  }

  if (DOM.btnSaveNewCustomer) {
    DOM.btnSaveNewCustomer.addEventListener("click", () => {
      const name = DOM.newCustName.value.trim();
      const phone = DOM.newCustPhone.value.trim();
      if (!name || !phone) {
        showToast("Please enter customer name and phone", "warning");
        return;
      }

      const newCust = {
        id: "cust-" + Date.now(),
        name,
        phone,
        points: 10,
        dueBalance: 0,
        deposit: 0,
        invoiceCount: 0,
        tier: "New Customer"
      };
      POS_STATE.customers.push(newCust);
      POS_STATE.activeCustomer = { ...newCust, isWalkIn: false };
      updateCustomerDisplay();
      DOM.newCustName.value = "";
      DOM.newCustPhone.value = "";
      DOM.newCustAddress.value = "";
      DOM.customerModalOverlay.classList.remove("active");
      showToast(`Registered and selected customer: ${name}`);
    });
  }

  // 1, 2, 3. Branch, Biller, Salesman Selection
  if (DOM.branchSelect) {
    DOM.branchSelect.value = POS_STATE.selectedBranch;
    DOM.branchSelect.addEventListener("change", (e) => {
      POS_STATE.selectedBranch = e.target.value;
      showToast(`Branch set to: ${POS_STATE.selectedBranch}`);
    });
  }
  if (DOM.billerSelect) {
    DOM.billerSelect.value = POS_STATE.selectedBiller;
    DOM.billerSelect.addEventListener("change", (e) => {
      POS_STATE.selectedBiller = e.target.value;
      showToast(`Biller set to: ${POS_STATE.selectedBiller}`);
    });
  }
  if (DOM.salesmanSelect) {
    DOM.salesmanSelect.value = POS_STATE.selectedSalesman;
    DOM.salesmanSelect.addEventListener("change", (e) => {
      POS_STATE.selectedSalesman = e.target.value;
      showToast(`Salesman assigned: ${POS_STATE.selectedSalesman}`);
    });
  }

  // 6. Order Reference
  const generateAutoReferenceNumber = () => {
    const rand = Math.floor(1000 + Math.random() * 9000);
    const code = `REF-${rand}`;
    POS_STATE.orderReference = code;
    if (DOM.orderReferenceInputDeck) DOM.orderReferenceInputDeck.value = code;
    if (DOM.orderReferenceInput) DOM.orderReferenceInput.value = code;
    if (soundManager) soundManager.playBeep();
    showToast(`Generated Reference #${code}`, "success");
  };

  if (DOM.btnGenerateRefNumber) {
    DOM.btnGenerateRefNumber.addEventListener("click", (e) => {
      e.stopPropagation();
      generateAutoReferenceNumber();
    });
  }

  if (DOM.btnModalGenerateRef) {
    DOM.btnModalGenerateRef.addEventListener("click", (e) => {
      e.stopPropagation();
      generateAutoReferenceNumber();
    });
  }

  if (DOM.orderReferenceInputDeck) {
    DOM.orderReferenceInputDeck.addEventListener("input", (e) => {
      POS_STATE.orderReference = e.target.value.trim();
      if (DOM.orderReferenceInput) DOM.orderReferenceInput.value = POS_STATE.orderReference;
    });
  }
  if (DOM.orderReferenceInput) {
    DOM.orderReferenceInput.addEventListener("input", (e) => {
      POS_STATE.orderReference = e.target.value.trim();
      if (DOM.orderReferenceInputDeck) DOM.orderReferenceInputDeck.value = POS_STATE.orderReference;
    });
  }

  // 10. Customer Quick Controls: + Add Customer & Walk-in Revert
  if (DOM.btnQuickAddCustomer) {
    DOM.btnQuickAddCustomer.addEventListener("click", () => {
      DOM.customerModalOverlay.classList.add("active");
      renderCustomerSearchResults();
      setTimeout(() => DOM.newCustName.focus(), 150);
    });
  }
  if (DOM.btnResetWalkIn) {
    DOM.btnResetWalkIn.addEventListener("click", () => {
      POS_STATE.activeCustomer = { name: "Walk-in Customer", phone: "General Retail Sale", points: 0, dueBalance: 0, isWalkIn: true };
      updateCustomerDisplay();
      showToast("Switched to Walk-in Customer");
    });
  }

  // 9. Recent Receipts Modal Actions
  if (DOM.btnOpenRecentReceipts) DOM.btnOpenRecentReceipts.addEventListener("click", openRecentReceiptsModal);
  if (DOM.btnCloseRecentReceiptsModal) DOM.btnCloseRecentReceiptsModal.addEventListener("click", () => DOM.recentReceiptsModalOverlay.classList.remove("active"));
  if (DOM.btnCloseRecentReceiptsBottom) DOM.btnCloseRecentReceiptsBottom.addEventListener("click", () => DOM.recentReceiptsModalOverlay.classList.remove("active"));
  if (DOM.recentReceiptsSearchInput) {
    DOM.recentReceiptsSearchInput.addEventListener("input", (e) => renderRecentReceiptsTable(e.target.value));
  }
  if (DOM.recentReceiptsBranchFilter) {
    DOM.recentReceiptsBranchFilter.addEventListener("change", () => {
      renderRecentReceiptsTable(DOM.recentReceiptsSearchInput ? DOM.recentReceiptsSearchInput.value : "");
    });
  }

  // 11. Recent Transactions Modal Actions
  if (DOM.btnOpenTransactionsModal) DOM.btnOpenTransactionsModal.addEventListener("click", openRecentTransactionsModal);
  if (DOM.btnCloseTransactionsModal) DOM.btnCloseTransactionsModal.addEventListener("click", () => DOM.recentTransactionsModalOverlay.classList.remove("active"));
  if (DOM.btnCloseTransactionsBottom) DOM.btnCloseTransactionsBottom.addEventListener("click", () => DOM.recentTransactionsModalOverlay.classList.remove("active"));
  if (DOM.trxFilterTabs) {
    DOM.trxFilterTabs.addEventListener("click", (e) => {
      const tab = e.target.closest(".btn-trx-tab");
      if (!tab) return;
      DOM.trxFilterTabs.querySelectorAll(".btn-trx-tab").forEach(t => t.classList.remove("active"));
      tab.classList.add("active");
      renderRecentTransactionsTable(tab.getAttribute("data-filter"));
    });
  }

  // 4. Item IMEI Modal Actions
  if (DOM.btnCloseItemImeiModal) DOM.btnCloseItemImeiModal.addEventListener("click", () => DOM.itemImeiModalOverlay.classList.remove("active"));
  if (DOM.btnCancelItemImei) DOM.btnCancelItemImei.addEventListener("click", () => DOM.itemImeiModalOverlay.classList.remove("active"));
  if (DOM.btnSaveItemImei) DOM.btnSaveItemImei.addEventListener("click", saveItemImei);
  if (DOM.btnClearItemImei) DOM.btnClearItemImei.addEventListener("click", clearItemImei);
  if (DOM.btnGenerateSampleImei) {
    DOM.btnGenerateSampleImei.addEventListener("click", () => {
      if (DOM.itemImeiInput) {
        DOM.itemImeiInput.value = "356" + Math.floor(100000000000 + Math.random() * 900000000000);
        DOM.itemImeiInput.focus();
      }
    });
  }

  // 15. Executive POS Calculator Listeners
  if (DOM.btnOpenCalculatorModal) DOM.btnOpenCalculatorModal.addEventListener("click", openCalculatorModal);
  if (DOM.btnCloseCalculatorModal) DOM.btnCloseCalculatorModal.addEventListener("click", closeCalculatorModal);
  if (DOM.btnCloseCalculatorBottom) DOM.btnCloseCalculatorBottom.addEventListener("click", closeCalculatorModal);
  if (DOM.btnCalcCopyDisplay) DOM.btnCalcCopyDisplay.addEventListener("click", copyCalculatorResult);
  if (DOM.btnCalcCopyResult) DOM.btnCalcCopyResult.addEventListener("click", copyCalculatorResult);
  if (DOM.btnCalcApplyCash) DOM.btnCalcApplyCash.addEventListener("click", applyCalculatorToCash);
  if (DOM.btnCalcClearHistory) {
    DOM.btnCalcClearHistory.addEventListener("click", () => {
      CALCULATOR_STATE.history = [];
      renderCalculatorHistory();
      showToast("Tape history cleared");
      soundManager.playPop();
    });
  }

  // Calculator modal overlay backdrop click
  if (DOM.calculatorModalOverlay) {
    DOM.calculatorModalOverlay.addEventListener("click", (e) => {
      if (e.target === DOM.calculatorModalOverlay) {
        closeCalculatorModal();
      }
    });
  }

  // Keypad Number Buttons
  document.querySelectorAll(".calc-btn-num[data-calc-num]").forEach(btn => {
    btn.addEventListener("click", () => {
      inputCalculatorDigit(btn.getAttribute("data-calc-num"));
    });
  });

  // Keypad Action / Operator Buttons
  document.querySelectorAll(".calc-btn[data-calc-action]").forEach(btn => {
    btn.addEventListener("click", () => {
      const action = btn.getAttribute("data-calc-action");
      if (action === "equals") {
        executeCalculatorEqual(true);
      } else if (action === "add" || action === "subtract" || action === "multiply" || action === "divide") {
        setCalculatorOperator(action);
      } else {
        executeCalculatorAction(action);
      }
    });
  });

  // Retail Ribbon Buttons (+5% Tax, +15% VAT, -10% Disc, -20% Disc)
  document.querySelectorAll(".btn-calc-ribbon[data-calc-action]").forEach(btn => {
    btn.addEventListener("click", () => {
      const action = btn.getAttribute("data-calc-action");
      const val = btn.getAttribute("data-tax") || btn.getAttribute("data-disc");
      executeCalculatorAction(action, val);
    });
  });

  // Window Resize Listener for Responsive Elements
  window.addEventListener("resize", () => {
    if (window.innerWidth > 768) {
      DOM.mobileStickyCartBar.classList.remove("visible");
    } else if (POS_STATE.cart.length > 0 && POS_STATE.mobileActiveTab === "catalog") {
      DOM.mobileStickyCartBar.classList.add("visible");
    }
  });
}

// ==========================================================================
// 15. BOOTSTRAP APPLICATION
// ==========================================================================
function initApp() {
  switchCatalogTab("all");
  renderProductCatalog();
  renderCategoryGrid();
  renderBrandGrid();
  renderCart();
  calculateTotals();
  updateCustomerDisplay();
  setupKeyboardShortcuts();
  setupEventListeners();
  DOM.currentOrderNumber.textContent = POS_STATE.currentOrderNumber;
  console.log("NexusPOS PRO Universal Retail POS initialized!");
}

document.addEventListener("DOMContentLoaded", initApp);
