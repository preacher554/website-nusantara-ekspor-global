const whatsappNumber = "6287773522999";
const languageSelect = document.querySelector("#languageSelect");

const i18n = {
  en: {
    dir: "ltr",
    code: "EN",
    title: "PT Artha Prima Global | Indonesian Coconut Products, Spices & Biomass Energy Exporter",
    meta: "PT Artha Prima Global supplies Indonesian coconut products, natural spices, and biomass energy products for global buyers, importers, distributors, and procurement teams.",
    text: {
      brandSmall: "Coconut, Spices & Biomass Exporter",
      navAbout: "About",
      navProducts: "Products",
      navProcess: "Export Process",
      navCalculator: "Calculator",
      navInquiry: "Inquiry",
      heroOverline: "Indonesian Coconut, Spices & Biomass Exporter",
      heroTitle: "Trusted Indonesian Export Partner",
      heroSubtitle: "PT Artha Prima Global supplies high-quality coconut derivatives, authentic Indonesian spices, and renewable biomass energy products from Indonesia to global buyers with reliable quality, competitive pricing, and worldwide shipping.",
      requestQuote: "Request Free Quotation",
      contactTeam: "Contact Export Team",
      exportQuality: "Export Quality",
      exportQualityCopy: "Selected coconut products and spices prepared for international B2B buyers.",
      factoryDirect: "Factory Direct",
      factoryDirectCopy: "Direct access to Indonesian producers with flexible MOQ and packing options.",
      worldwideShipping: "Worldwide Shipping",
      worldwideShippingCopy: "FOB, CIF, CFR, and EXW coordination with complete export documents.",
      sustainableProducts: "Sustainable Products",
      sustainableProductsCopy: "OEM, private label, complete export documents, and biomass energy supply support.",
      coreFocus: "Core Export<br />Focus",
      coconutFeature: "Coconut<br />Products",
      coconutFeatureCopy: "Coco peat block, grow bag, coco fiber, coco bristle, charcoal briquette, coconut sugar, and palm sugar.",
      spicesFeature: "Indonesian<br />Spices",
      spicesFeatureCopy: "Nutmeg, cinnamon, ginger powder, turmeric powder, and lemongrass powder.",
      biomassFeature: "Biomass<br />Energy",
      biomassFeatureCopy: "Renewable biomass fuel products from Indonesia for industrial heating and sustainable energy supply.",
      viewProducts: "View Products →",
      viewBiomass: "View Biomass Energy →",
      aboutTitle: "About Us",
      aboutCopy: "PT Artha Prima Global is an Indonesian export company specializing in premium coconut products, natural spices, and biomass energy products. We connect global buyers with selected Indonesian producers to deliver consistent quality, competitive pricing, and reliable international shipment.",
      discussRequirement: "Discuss Your Requirement →",
      processTitle: "Our Export Process",
      selection: "Selection",
      selectionCopy: "Raw materials are selected from trusted Indonesian producers.",
      inspection: "Inspection",
      inspectionCopy: "Moisture, grade, size, packaging, and product condition are reviewed.",
      packing: "Packing",
      packingCopy: "Goods are prepared for bulk, palletized, carton, or private-label shipment.",
      shipping: "Shipping",
      shippingCopy: "Documents and logistics are coordinated for FOB, CIF, CFR, or EXW terms.",
      readySource: "Ready to Source<br />from Indonesia?",
      readySourceCopy: "Send your product requirement and receive a structured RFQ response from our export team.",
      startInquiry: "Start Inquiry",
      emailTeam: "or Email Our Team →",
      catalogTitle: "Export Commodity Catalog",
      catalogCopy: "Premium Indonesian coconut products, natural spices, and biomass energy for global B2B procurement",
      all: "All",
      spices: "Spices",
      coconutProducts: "Coconut Products",
      biomassEnergy: "Biomass Energy",
      requestSupply: "Request Supply →",
      qualityOverline: "Strict Quality Control",
      qualityTitle: "Every shipment is checked before loading.",
      quality1: "Raw material selection, cleaning, sorting, and size grading before packing.",
      quality2: "Moisture level, product condition, packaging, and warehouse storage control.",
      quality3: "Final inspection before loading with shipment documentation review.",
      quality4: "Commercial invoice, packing list, bill of lading, certificate of origin, and supporting certificates when required.",
      calculatorOverline: "Container Capacity Calculator",
      calculatorTitle: "Estimate 20ft and 40HQ loading capacity.",
      calculatorCopy: "Use this calculator as an early planning guide. Actual loading capacity depends on packaging type, product density, pallet usage, moisture level, container condition, and shipping requirements.",
      product: "Product",
      containerType: "Container Type",
      estimatedOrderQuantity: "Estimated Order Quantity",
      marketsOverline: "Export Destination Map",
      marketsTitle: "Serving Global Buyers Worldwide",
      testimonialsOverline: "Buyer Testimonials",
      testimonialsTitle: "Trusted by Global Buyers",
      faq: "FAQ",
      faqTitle: "Common Buyer Questions",
      catalogueOverline: "Product Catalogue",
      catalogueTitle: "Request the export product catalogue.",
      catalogueCopy: "Share your contact details and continue the catalogue request with our export team.",
      downloadCatalogue: "Download Product Catalogue",
      rfqOverline: "Request for Quotation",
      rfqTitle: "Send a complete RFQ to our export team.",
      rfqCopy: "Share your company details, product interest, estimated quantity, and preferred shipping term for a faster quotation discussion.",
      fullName: "Full Name",
      companyName: "Company Name",
      country: "Country",
      email: "Email",
      whatsappNumber: "WhatsApp Number",
      productInterest: "Product Interest",
      preferredShippingTerm: "Preferred Shipping Term",
      messageRequirement: "Message / Requirement",
      submitRFQ: "Submit RFQ",
      continueWhatsapp: "Continue via WhatsApp",
      preferEmail: "Prefer email? sales@arthaprimaglobal.com",
      chatExportTeam: "Chat with<br />Export Team",
      viewDetails: "View Details",
      applications: "Applications",
      features: "Features",
      packaging: "Packaging",
      documents: "Documents",
      availableForms: "Available Forms",
      modalWa: "Request Quotation via WhatsApp",
      capacityPrompt: "Enter an estimated order quantity to calculate container needs.",
      capacityEnough: "This quantity is enough for at least 1 estimated container.",
      capacityBelow: "This quantity is below 1 estimated full container.",
      containersNeeded: "Estimated containers needed",
      customCapacity: "This product depends on grow bag size and packaging. Please confirm dimensions with the export team.",
      capacityDisclaimer: "All capacity calculations are estimates and may change based on packaging, density, pallet usage, moisture level, container condition, and shipping requirements.",
      estimatedCapacityFor: "Estimated {container} capacity for {product}",
      rfqThanks: "Thank you for your inquiry. Our export team will contact you within 24 hours.",
      catalogueCaptured: "Catalogue request captured.",
      continueViaWhatsapp: "Continue via WhatsApp"
    },
    placeholders: {
      calculatorQuantity: "e.g. 18",
      catalogueName: "Name",
      catalogueCompany: "Company",
      catalogueEmail: "Email",
      catalogueWhatsapp: "WhatsApp",
      catalogueCountry: "Country",
      fullName: "Your full name",
      company: "Company / business name",
      country: "e.g. United Arab Emirates",
      email: "name@company.com",
      whatsapp: "+971...",
      quantity: "e.g. 1 x 20ft container / 18 MT / trial order",
      message: "Destination port, packaging requirement, target price, or additional notes"
    },
    categories: {
      coconut: "Coconut Products",
      spice: "Indonesian Spices",
      biomass: "Biomass Energy"
    }
  },
  id: {
    dir: "ltr",
    code: "ID",
    title: "PT Artha Prima Global | Eksportir Produk Kelapa, Rempah & Energi Biomassa Indonesia",
    meta: "PT Artha Prima Global memasok produk kelapa, rempah alami, dan energi biomassa Indonesia untuk buyer, importir, distributor, dan tim procurement global.",
    text: {
      brandSmall: "Eksportir Kelapa, Rempah & Biomassa",
      navAbout: "Tentang",
      navProducts: "Produk",
      navProcess: "Proses Ekspor",
      navCalculator: "Kalkulator",
      navInquiry: "Inquiry",
      heroOverline: "Eksportir Kelapa, Rempah & Biomassa Indonesia",
      heroTitle: "Mitra Ekspor Indonesia Terpercaya",
      heroSubtitle: "PT Artha Prima Global memasok turunan kelapa berkualitas, rempah asli Indonesia, dan produk energi biomassa terbarukan untuk buyer global dengan kualitas andal, harga kompetitif, dan pengiriman internasional.",
      requestQuote: "Minta Penawaran",
      contactTeam: "Hubungi Tim Ekspor",
      exportQuality: "Kualitas Ekspor",
      exportQualityCopy: "Produk kelapa dan rempah terseleksi untuk kebutuhan buyer B2B internasional.",
      factoryDirect: "Akses Produsen",
      factoryDirectCopy: "Akses langsung ke produsen Indonesia dengan MOQ dan opsi kemasan yang fleksibel.",
      worldwideShipping: "Pengiriman Global",
      worldwideShippingCopy: "Koordinasi FOB, CIF, CFR, dan EXW dengan dokumen ekspor lengkap.",
      sustainableProducts: "Produk Berkelanjutan",
      sustainableProductsCopy: "Dukungan OEM, private label, dokumen ekspor lengkap, dan pasokan energi biomassa.",
      coreFocus: "Fokus Ekspor<br />Utama",
      coconutFeature: "Produk<br />Kelapa",
      coconutFeatureCopy: "Coco peat block, grow bag, coco fiber, coco bristle, charcoal briquette, coconut sugar, dan palm sugar.",
      spicesFeature: "Rempah<br />Indonesia",
      spicesFeatureCopy: "Pala, kayu manis, jahe bubuk, kunyit bubuk, dan serai bubuk.",
      biomassFeature: "Energi<br />Biomassa",
      biomassFeatureCopy: "Produk bahan bakar biomassa terbarukan dari Indonesia untuk pemanasan industri dan suplai energi berkelanjutan.",
      viewProducts: "Lihat Produk →",
      viewBiomass: "Lihat Biomassa →",
      aboutTitle: "Tentang Kami",
      aboutCopy: "PT Artha Prima Global adalah perusahaan ekspor Indonesia yang berfokus pada produk kelapa premium, rempah alami, dan energi biomassa. Kami menghubungkan buyer global dengan produsen Indonesia terseleksi untuk kualitas stabil, harga kompetitif, dan pengiriman internasional yang andal.",
      discussRequirement: "Diskusikan Kebutuhan →",
      processTitle: "Proses Ekspor Kami",
      selection: "Seleksi",
      selectionCopy: "Bahan baku dipilih dari produsen Indonesia terpercaya.",
      inspection: "Inspeksi",
      inspectionCopy: "Kelembapan, grade, ukuran, kemasan, dan kondisi produk diperiksa.",
      packing: "Pengemasan",
      packingCopy: "Barang disiapkan untuk bulk, pallet, karton, atau private label.",
      shipping: "Pengiriman",
      shippingCopy: "Dokumen dan logistik dikoordinasikan untuk FOB, CIF, CFR, atau EXW.",
      readySource: "Siap Sourcing<br />dari Indonesia?",
      readySourceCopy: "Kirim kebutuhan produk dan dapatkan respons RFQ terstruktur dari tim ekspor kami.",
      startInquiry: "Mulai Inquiry",
      emailTeam: "atau Email Tim Kami →",
      catalogTitle: "Katalog Komoditas Ekspor",
      catalogCopy: "Produk kelapa, rempah alami, dan energi biomassa premium Indonesia untuk procurement B2B global",
      all: "Semua",
      spices: "Rempah",
      coconutProducts: "Produk Kelapa",
      biomassEnergy: "Energi Biomassa",
      requestSupply: "Minta Pasokan →",
      qualityOverline: "Kontrol Kualitas Ketat",
      qualityTitle: "Setiap pengiriman diperiksa sebelum loading.",
      quality1: "Seleksi bahan baku, pembersihan, sortasi, dan grading ukuran sebelum pengemasan.",
      quality2: "Kontrol kadar air, kondisi produk, kemasan, dan penyimpanan gudang.",
      quality3: "Inspeksi final sebelum loading dengan pemeriksaan dokumen pengiriman.",
      quality4: "Commercial invoice, packing list, bill of lading, certificate of origin, dan sertifikat pendukung bila diperlukan.",
      calculatorOverline: "Kalkulator Kapasitas Kontainer",
      calculatorTitle: "Estimasi kapasitas 20ft dan 40HQ.",
      calculatorCopy: "Gunakan kalkulator ini sebagai panduan awal. Kapasitas aktual bergantung pada jenis kemasan, densitas produk, penggunaan pallet, kadar air, kondisi kontainer, dan persyaratan pengiriman.",
      product: "Produk",
      containerType: "Jenis Kontainer",
      estimatedOrderQuantity: "Estimasi Jumlah Order",
      marketsOverline: "Peta Tujuan Ekspor",
      marketsTitle: "Melayani Buyer Global",
      testimonialsOverline: "Testimoni Buyer",
      testimonialsTitle: "Dipercaya Buyer Global",
      faq: "FAQ",
      faqTitle: "Pertanyaan Umum Buyer",
      catalogueOverline: "Katalog Produk",
      catalogueTitle: "Minta katalog produk ekspor.",
      catalogueCopy: "Bagikan kontak Anda dan lanjutkan permintaan katalog dengan tim ekspor kami.",
      downloadCatalogue: "Unduh Katalog Produk",
      rfqOverline: "Request for Quotation",
      rfqTitle: "Kirim RFQ lengkap ke tim ekspor kami.",
      rfqCopy: "Bagikan data perusahaan, minat produk, estimasi kuantitas, dan term pengiriman agar diskusi quotation lebih cepat.",
      fullName: "Nama Lengkap",
      companyName: "Nama Perusahaan",
      country: "Negara",
      email: "Email",
      whatsappNumber: "Nomor WhatsApp",
      productInterest: "Minat Produk",
      preferredShippingTerm: "Term Pengiriman",
      messageRequirement: "Pesan / Kebutuhan",
      submitRFQ: "Kirim RFQ",
      continueWhatsapp: "Lanjut via WhatsApp",
      preferEmail: "Lebih nyaman email? sales@arthaprimaglobal.com",
      chatExportTeam: "Chat dengan<br />Tim Ekspor",
      viewDetails: "Lihat Detail",
      applications: "Aplikasi",
      features: "Fitur",
      packaging: "Kemasan",
      documents: "Dokumen",
      availableForms: "Bentuk Tersedia",
      modalWa: "Minta Penawaran via WhatsApp",
      capacityPrompt: "Masukkan estimasi order untuk menghitung kebutuhan kontainer.",
      capacityEnough: "Jumlah ini cukup untuk setidaknya 1 estimasi kontainer.",
      capacityBelow: "Jumlah ini di bawah estimasi 1 kontainer penuh.",
      containersNeeded: "Estimasi kontainer dibutuhkan",
      customCapacity: "Produk ini bergantung pada ukuran grow bag dan kemasan. Konfirmasi dimensi dengan tim ekspor.",
      capacityDisclaimer: "Semua kalkulasi kapasitas bersifat estimasi dan dapat berubah berdasarkan kemasan, densitas, pallet, kadar air, kondisi kontainer, dan kebutuhan pengiriman.",
      estimatedCapacityFor: "Estimasi kapasitas {container} untuk {product}",
      rfqThanks: "Terima kasih atas inquiry Anda. Tim ekspor kami akan menghubungi Anda dalam 24 jam.",
      catalogueCaptured: "Permintaan katalog tercatat.",
      continueViaWhatsapp: "Lanjut via WhatsApp"
    },
    placeholders: {
      calculatorQuantity: "contoh: 18",
      catalogueName: "Nama",
      catalogueCompany: "Perusahaan",
      catalogueEmail: "Email",
      catalogueWhatsapp: "WhatsApp",
      catalogueCountry: "Negara",
      fullName: "Nama lengkap Anda",
      company: "Nama perusahaan / bisnis",
      country: "contoh: Uni Emirat Arab",
      email: "nama@perusahaan.com",
      whatsapp: "+62...",
      quantity: "contoh: 1 x kontainer 20ft / 18 MT / trial order",
      message: "Port tujuan, kebutuhan kemasan, target harga, atau catatan lain"
    },
    categories: {
      coconut: "Produk Kelapa",
      spice: "Rempah Indonesia",
      biomass: "Energi Biomassa"
    }
  },
  ar: {
    dir: "rtl",
    code: "AR",
    title: "PT Artha Prima Global | مصدر منتجات جوز الهند والتوابل وطاقة الكتلة الحيوية",
    meta: "تزود PT Artha Prima Global المشترين العالميين بمنتجات جوز الهند والتوابل الطبيعية ومنتجات طاقة الكتلة الحيوية من إندونيسيا.",
    text: {
      brandSmall: "مصدر جوز الهند والتوابل والكتلة الحيوية",
      navAbout: "عن الشركة",
      navProducts: "المنتجات",
      navProcess: "عملية التصدير",
      navCalculator: "الحاسبة",
      navInquiry: "طلب عرض",
      heroOverline: "مصدر إندونيسي لجوز الهند والتوابل والكتلة الحيوية",
      heroTitle: "شريك تصدير إندونيسي موثوق",
      heroSubtitle: "توفر PT Artha Prima Global مشتقات جوز الهند عالية الجودة والتوابل الإندونيسية الأصلية ومنتجات طاقة الكتلة الحيوية المتجددة للمشترين العالميين بجودة موثوقة وأسعار تنافسية وشحن عالمي.",
      requestQuote: "اطلب عرض سعر",
      contactTeam: "تواصل مع فريق التصدير",
      exportQuality: "جودة تصديرية",
      exportQualityCopy: "منتجات جوز الهند والتوابل مختارة للمشترين الدوليين في قطاع B2B.",
      factoryDirect: "مصدر مباشر",
      factoryDirectCopy: "وصول مباشر إلى المنتجين الإندونيسيين مع حد أدنى مرن وخيارات تغليف.",
      worldwideShipping: "شحن عالمي",
      worldwideShippingCopy: "تنسيق FOB وCIF وCFR وEXW مع مستندات تصدير كاملة.",
      sustainableProducts: "منتجات مستدامة",
      sustainableProductsCopy: "دعم OEM والعلامة الخاصة ومستندات التصدير وإمداد طاقة الكتلة الحيوية.",
      coreFocus: "محاور<br />التصدير",
      coconutFeature: "منتجات<br />جوز الهند",
      coconutFeatureCopy: "كوكو بيت، أكياس زراعة، ألياف جوز الهند، شعيرات جوز الهند، فحم مضغوط، سكر جوز الهند، وسكر النخيل.",
      spicesFeature: "توابل<br />إندونيسية",
      spicesFeatureCopy: "جوزة الطيب، القرفة، مسحوق الزنجبيل، مسحوق الكركم، ومسحوق الليمون العطري.",
      biomassFeature: "طاقة<br />الكتلة الحيوية",
      biomassFeatureCopy: "وقود كتلة حيوية متجدد من إندونيسيا للتدفئة الصناعية وإمداد الطاقة المستدامة.",
      viewProducts: "عرض المنتجات →",
      viewBiomass: "عرض الكتلة الحيوية →",
      aboutTitle: "من نحن",
      aboutCopy: "PT Artha Prima Global شركة تصدير إندونيسية متخصصة في منتجات جوز الهند الممتازة والتوابل الطبيعية وطاقة الكتلة الحيوية. نربط المشترين العالميين بمنتجين إندونيسيين مختارين لتوفير جودة ثابتة وأسعار تنافسية وشحن دولي موثوق.",
      discussRequirement: "ناقش متطلباتك →",
      processTitle: "عملية التصدير",
      selection: "الاختيار",
      selectionCopy: "يتم اختيار المواد الخام من منتجين إندونيسيين موثوقين.",
      inspection: "الفحص",
      inspectionCopy: "تتم مراجعة الرطوبة والدرجة والحجم والتغليف وحالة المنتج.",
      packing: "التغليف",
      packingCopy: "يتم تجهيز البضائع للشحن السائب أو على منصات أو كراتين أو بعلامة خاصة.",
      shipping: "الشحن",
      shippingCopy: "يتم تنسيق المستندات واللوجستيات لشروط FOB أو CIF أو CFR أو EXW.",
      readySource: "جاهز للتوريد<br />من إندونيسيا؟",
      readySourceCopy: "أرسل متطلبات المنتج واحصل على رد RFQ منظم من فريق التصدير.",
      startInquiry: "ابدأ الطلب",
      emailTeam: "أو راسل فريقنا →",
      catalogTitle: "كتالوج سلع التصدير",
      catalogCopy: "منتجات جوز الهند والتوابل الطبيعية وطاقة الكتلة الحيوية الإندونيسية للمشتريات العالمية B2B",
      all: "الكل",
      spices: "التوابل",
      coconutProducts: "منتجات جوز الهند",
      biomassEnergy: "طاقة الكتلة الحيوية",
      requestSupply: "اطلب التوريد →",
      qualityOverline: "رقابة جودة صارمة",
      qualityTitle: "يتم فحص كل شحنة قبل التحميل.",
      quality1: "اختيار المواد الخام والتنظيف والفرز وتصنيف الحجم قبل التغليف.",
      quality2: "فحص مستوى الرطوبة وحالة المنتج والتغليف والتحكم في التخزين.",
      quality3: "فحص نهائي قبل التحميل مع مراجعة مستندات الشحن.",
      quality4: "فاتورة تجارية، قائمة تعبئة، بوليصة شحن، شهادة منشأ، وشهادات داعمة عند الحاجة.",
      calculatorOverline: "حاسبة سعة الحاوية",
      calculatorTitle: "تقدير سعة 20 قدم و40HQ.",
      calculatorCopy: "استخدم هذه الحاسبة كدليل أولي. تعتمد السعة الفعلية على نوع التغليف وكثافة المنتج واستخدام المنصات والرطوبة وحالة الحاوية ومتطلبات الشحن.",
      product: "المنتج",
      containerType: "نوع الحاوية",
      estimatedOrderQuantity: "الكمية التقديرية",
      marketsOverline: "خريطة وجهات التصدير",
      marketsTitle: "نخدم المشترين حول العالم",
      testimonialsOverline: "آراء المشترين",
      testimonialsTitle: "موثوق من مشترين عالميين",
      faq: "الأسئلة الشائعة",
      faqTitle: "أسئلة المشترين الشائعة",
      catalogueOverline: "كتالوج المنتجات",
      catalogueTitle: "اطلب كتالوج منتجات التصدير.",
      catalogueCopy: "شارك بيانات التواصل وتابع طلب الكتالوج مع فريق التصدير.",
      downloadCatalogue: "تحميل كتالوج المنتجات",
      rfqOverline: "طلب عرض سعر",
      rfqTitle: "أرسل RFQ كاملا إلى فريق التصدير.",
      rfqCopy: "شارك بيانات الشركة والمنتج المطلوب والكمية التقديرية وشروط الشحن المفضلة لتسريع عرض السعر.",
      fullName: "الاسم الكامل",
      companyName: "اسم الشركة",
      country: "الدولة",
      email: "البريد الإلكتروني",
      whatsappNumber: "رقم واتساب",
      productInterest: "المنتج المطلوب",
      preferredShippingTerm: "شرط الشحن المفضل",
      messageRequirement: "الرسالة / المتطلبات",
      submitRFQ: "إرسال RFQ",
      continueWhatsapp: "المتابعة عبر واتساب",
      preferEmail: "تفضل البريد؟ sales@arthaprimaglobal.com",
      chatExportTeam: "تحدث مع<br />فريق التصدير",
      viewDetails: "عرض التفاصيل",
      applications: "الاستخدامات",
      features: "المزايا",
      packaging: "التغليف",
      documents: "المستندات",
      availableForms: "الأشكال المتاحة",
      modalWa: "اطلب عرضا عبر واتساب",
      capacityPrompt: "أدخل كمية تقديرية لحساب الحاجة إلى الحاويات.",
      capacityEnough: "هذه الكمية تكفي لتقدير حاوية واحدة على الأقل.",
      capacityBelow: "هذه الكمية أقل من تقدير حاوية كاملة.",
      containersNeeded: "عدد الحاويات التقديري",
      customCapacity: "يعتمد هذا المنتج على حجم كيس الزراعة والتغليف. يرجى تأكيد الأبعاد مع فريق التصدير.",
      capacityDisclaimer: "كل حسابات السعة تقديرية وقد تتغير حسب التغليف والكثافة والمنصات والرطوبة وحالة الحاوية ومتطلبات الشحن.",
      estimatedCapacityFor: "السعة التقديرية لحاوية {container} لمنتج {product}",
      rfqThanks: "شكرا لاستفسارك. سيتواصل معك فريق التصدير خلال 24 ساعة.",
      catalogueCaptured: "تم تسجيل طلب الكتالوج.",
      continueViaWhatsapp: "المتابعة عبر واتساب"
    },
    placeholders: {
      calculatorQuantity: "مثال: 18",
      catalogueName: "الاسم",
      catalogueCompany: "الشركة",
      catalogueEmail: "البريد الإلكتروني",
      catalogueWhatsapp: "واتساب",
      catalogueCountry: "الدولة",
      fullName: "اسمك الكامل",
      company: "اسم الشركة / النشاط",
      country: "مثال: الإمارات العربية المتحدة",
      email: "name@company.com",
      whatsapp: "+971...",
      quantity: "مثال: حاوية 20 قدم / 18 طن / طلب تجريبي",
      message: "ميناء الوجهة، التغليف المطلوب، السعر المستهدف، أو ملاحظات إضافية"
    },
    categories: {
      coconut: "منتجات جوز الهند",
      spice: "توابل إندونيسية",
      biomass: "طاقة الكتلة الحيوية"
    }
  },
  zh: {
    dir: "ltr",
    code: "ZH",
    title: "PT Artha Prima Global | 印尼椰子产品、香料与生物质能源出口商",
    meta: "PT Artha Prima Global 向全球买家供应印尼椰子产品、天然香料和生物质能源产品。",
    text: {
      brandSmall: "椰子、香料与生物质出口商",
      navAbout: "关于我们",
      navProducts: "产品",
      navProcess: "出口流程",
      navCalculator: "装柜计算",
      navInquiry: "询价",
      heroOverline: "印尼椰子、香料与生物质出口商",
      heroTitle: "值得信赖的印尼出口伙伴",
      heroSubtitle: "PT Artha Prima Global 为全球买家供应高品质椰子衍生品、印尼天然香料和可再生生物质能源产品，提供稳定质量、竞争价格和国际运输支持。",
      requestQuote: "获取报价",
      contactTeam: "联系出口团队",
      exportQuality: "出口品质",
      exportQualityCopy: "为国际 B2B 买家准备的精选椰子产品和香料。",
      factoryDirect: "源头供应",
      factoryDirectCopy: "直接对接印尼生产商，支持灵活 MOQ 和包装选项。",
      worldwideShipping: "全球运输",
      worldwideShippingCopy: "支持 FOB、CIF、CFR 和 EXW，并提供完整出口文件。",
      sustainableProducts: "可持续产品",
      sustainableProductsCopy: "支持 OEM、贴牌、完整出口文件和生物质能源供应。",
      coreFocus: "核心出口<br />方向",
      coconutFeature: "椰子<br />产品",
      coconutFeatureCopy: "椰糠砖、种植袋、椰纤维、椰棕丝、椰壳炭块、椰子糖和棕榈糖。",
      spicesFeature: "印尼<br />香料",
      spicesFeatureCopy: "肉豆蔻、肉桂、姜粉、姜黄粉和香茅粉。",
      biomassFeature: "生物质<br />能源",
      biomassFeatureCopy: "来自印尼的可再生生物质燃料，用于工业供热和可持续能源供应。",
      viewProducts: "查看产品 →",
      viewBiomass: "查看生物质能源 →",
      aboutTitle: "关于我们",
      aboutCopy: "PT Artha Prima Global 是一家印尼出口公司，专注于优质椰子产品、天然香料和生物质能源产品。我们连接全球买家与精选印尼生产商，提供稳定质量、竞争价格和可靠国际运输。",
      discussRequirement: "沟通需求 →",
      processTitle: "出口流程",
      selection: "筛选",
      selectionCopy: "原料来自可信赖的印尼生产商。",
      inspection: "检验",
      inspectionCopy: "检查水分、等级、尺寸、包装和产品状态。",
      packing: "包装",
      packingCopy: "支持散装、托盘、纸箱或贴牌包装。",
      shipping: "运输",
      shippingCopy: "根据 FOB、CIF、CFR 或 EXW 协调文件和物流。",
      readySource: "准备从<br />印尼采购？",
      readySourceCopy: "发送产品需求，获取出口团队的结构化 RFQ 回复。",
      startInquiry: "开始询价",
      emailTeam: "或邮件联系我们 →",
      catalogTitle: "出口商品目录",
      catalogCopy: "面向全球 B2B 采购的印尼优质椰子产品、天然香料和生物质能源",
      all: "全部",
      spices: "香料",
      coconutProducts: "椰子产品",
      biomassEnergy: "生物质能源",
      requestSupply: "请求供应 →",
      qualityOverline: "严格质量控制",
      qualityTitle: "每批货物装柜前均需检查。",
      quality1: "包装前进行原料筛选、清洁、分选和尺寸分级。",
      quality2: "控制水分、产品状态、包装和仓储条件。",
      quality3: "装柜前最终检验并审核运输文件。",
      quality4: "提供商业发票、装箱单、提单、原产地证书及所需支持证书。",
      calculatorOverline: "集装箱容量计算器",
      calculatorTitle: "估算 20ft 和 40HQ 装载容量。",
      calculatorCopy: "该计算器用于初步规划。实际装载容量取决于包装类型、产品密度、托盘使用、水分、集装箱状态和运输要求。",
      product: "产品",
      containerType: "集装箱类型",
      estimatedOrderQuantity: "预计订单数量",
      marketsOverline: "出口目的地地图",
      marketsTitle: "服务全球买家",
      testimonialsOverline: "买家评价",
      testimonialsTitle: "受到全球买家信赖",
      faq: "常见问题",
      faqTitle: "买家常见问题",
      catalogueOverline: "产品目录",
      catalogueTitle: "索取出口产品目录。",
      catalogueCopy: "留下联系方式，并与出口团队继续目录申请。",
      downloadCatalogue: "下载产品目录",
      rfqOverline: "询价单",
      rfqTitle: "向出口团队提交完整 RFQ。",
      rfqCopy: "提交公司信息、产品兴趣、预计数量和首选贸易条款，以便更快报价。",
      fullName: "姓名",
      companyName: "公司名称",
      country: "国家",
      email: "邮箱",
      whatsappNumber: "WhatsApp 号码",
      productInterest: "感兴趣产品",
      preferredShippingTerm: "首选贸易条款",
      messageRequirement: "留言 / 要求",
      submitRFQ: "提交 RFQ",
      continueWhatsapp: "继续到 WhatsApp",
      preferEmail: "更愿意邮件？sales@arthaprimaglobal.com",
      chatExportTeam: "联系<br />出口团队",
      viewDetails: "查看详情",
      applications: "应用",
      features: "特点",
      packaging: "包装",
      documents: "文件",
      availableForms: "可供形式",
      modalWa: "通过 WhatsApp 请求报价",
      capacityPrompt: "输入预计数量以计算所需集装箱。",
      capacityEnough: "该数量预计至少可装满 1 个集装箱。",
      capacityBelow: "该数量低于 1 个整柜的估算容量。",
      containersNeeded: "预计所需集装箱",
      customCapacity: "该产品取决于种植袋尺寸和包装。请与出口团队确认尺寸。",
      capacityDisclaimer: "所有容量计算均为估算，可能因包装、密度、托盘、水分、集装箱状态和运输要求而变化。",
      estimatedCapacityFor: "{product} 的 {container} 预计容量",
      rfqThanks: "感谢您的询价。我们的出口团队将在 24 小时内联系您。",
      catalogueCaptured: "目录请求已记录。",
      continueViaWhatsapp: "继续到 WhatsApp"
    },
    placeholders: {
      calculatorQuantity: "例如：18",
      catalogueName: "姓名",
      catalogueCompany: "公司",
      catalogueEmail: "邮箱",
      catalogueWhatsapp: "WhatsApp",
      catalogueCountry: "国家",
      fullName: "您的姓名",
      company: "公司 / 业务名称",
      country: "例如：阿联酋",
      email: "name@company.com",
      whatsapp: "+86...",
      quantity: "例如：1 x 20ft 集装箱 / 18 MT / 试订单",
      message: "目的港、包装要求、目标价格或其他说明"
    },
    categories: {
      coconut: "椰子产品",
      spice: "印尼香料",
      biomass: "生物质能源"
    }
  }
};

const productNames = {
  id: {
    "Coco Peat Block 5kg": "Coco Peat Block 5kg",
    "Coco Peat Grow Bag": "Coco Peat Grow Bag",
    "Coco Fiber": "Coco Fiber",
    "Coco Bristle": "Coco Bristle",
    "Charcoal Briquette": "Charcoal Briquette",
    "Coconut Sugar": "Gula Kelapa",
    "Palm Sugar": "Gula Aren",
    "Nutmeg": "Pala",
    "Cinnamon": "Kayu Manis",
    "Ginger Powder": "Jahe Bubuk",
    "Turmeric Powder": "Kunyit Bubuk",
    "Lemongrass Powder": "Serai Bubuk",
    "Wood Pellet": "Wood Pellet"
  },
  ar: {
    "Coco Peat Block 5kg": "بلوك كوكو بيت 5 كجم",
    "Coco Peat Grow Bag": "كيس زراعة كوكو بيت",
    "Coco Fiber": "ألياف جوز الهند",
    "Coco Bristle": "شعيرات جوز الهند",
    "Charcoal Briquette": "فحم جوز الهند المضغوط",
    "Coconut Sugar": "سكر جوز الهند",
    "Palm Sugar": "سكر النخيل",
    "Nutmeg": "جوزة الطيب",
    "Cinnamon": "القرفة",
    "Ginger Powder": "مسحوق الزنجبيل",
    "Turmeric Powder": "مسحوق الكركم",
    "Lemongrass Powder": "مسحوق الليمون العطري",
    "Wood Pellet": "حبيبات الخشب"
  },
  zh: {
    "Coco Peat Block 5kg": "5kg 椰糠砖",
    "Coco Peat Grow Bag": "椰糠种植袋",
    "Coco Fiber": "椰纤维",
    "Coco Bristle": "椰棕丝",
    "Charcoal Briquette": "椰壳炭块",
    "Coconut Sugar": "椰子糖",
    "Palm Sugar": "棕榈糖",
    "Nutmeg": "肉豆蔻",
    "Cinnamon": "肉桂",
    "Ginger Powder": "姜粉",
    "Turmeric Powder": "姜黄粉",
    "Lemongrass Powder": "香茅粉",
    "Wood Pellet": "木颗粒"
  }
};

const proofContent = {
  en: {
    testimonials: [
      {
        quote: "Excellent coco peat quality with consistent moisture level. Fast communication and reliable shipment.",
        buyer: "David R. — Australia",
        note: "Buyer statement"
      },
      {
        quote: "Professional supplier with complete export documents and competitive pricing.",
        buyer: "Ahmed S. — United Arab Emirates",
        note: "Buyer statement"
      },
      {
        quote: "Good product quality and timely delivery. We are happy to continue long-term cooperation.",
        buyer: "Rajesh P. — India",
        note: "Buyer statement"
      }
    ],
    faqs: [
      {
        question: "Do you support OEM or private label?",
        answer: "Yes, OEM and private label options are available depending on product and order quantity."
      },
      {
        question: "What is your MOQ?",
        answer: "MOQ depends on product type and packaging requirements. Please contact our export team for details."
      },
      {
        question: "Can you ship worldwide?",
        answer: "Yes, we support international shipment with FOB, CIF, CFR, and EXW terms."
      },
      {
        question: "Do you provide export documents?",
        answer: "Yes, we provide commercial invoice, packing list, bill of lading, certificate of origin, and other documents when required."
      }
    ]
  },
  id: {
    testimonials: [
      {
        quote: "Kualitas coco peat sangat baik dengan kadar air yang konsisten. Komunikasi cepat dan pengiriman dapat diandalkan.",
        buyer: "David R. — Australia",
        note: "Pernyataan buyer"
      },
      {
        quote: "Supplier profesional dengan dokumen ekspor lengkap dan harga yang kompetitif.",
        buyer: "Ahmed S. — Uni Emirat Arab",
        note: "Pernyataan buyer"
      },
      {
        quote: "Kualitas produk baik dan pengiriman tepat waktu. Kami senang melanjutkan kerja sama jangka panjang.",
        buyer: "Rajesh P. — India",
        note: "Pernyataan buyer"
      }
    ],
    faqs: [
      {
        question: "Apakah mendukung OEM atau private label?",
        answer: "Ya, opsi OEM dan private label tersedia tergantung jenis produk dan kuantitas order."
      },
      {
        question: "Berapa MOQ produk?",
        answer: "MOQ bergantung pada jenis produk dan kebutuhan kemasan. Silakan hubungi tim ekspor kami untuk detail."
      },
      {
        question: "Apakah bisa kirim ke seluruh dunia?",
        answer: "Ya, kami mendukung pengiriman internasional dengan term FOB, CIF, CFR, dan EXW."
      },
      {
        question: "Apakah menyediakan dokumen ekspor?",
        answer: "Ya, kami menyediakan commercial invoice, packing list, bill of lading, certificate of origin, dan dokumen lain jika diperlukan."
      }
    ]
  },
  ar: {
    testimonials: [
      {
        quote: "جودة كوكو بيت ممتازة مع مستوى رطوبة ثابت. تواصل سريع وشحن موثوق.",
        buyer: "David R. — أستراليا",
        note: "رأي مشتري"
      },
      {
        quote: "مورد محترف مع مستندات تصدير كاملة وأسعار تنافسية.",
        buyer: "Ahmed S. — الإمارات العربية المتحدة",
        note: "رأي مشتري"
      },
      {
        quote: "جودة المنتج جيدة والتسليم في الوقت المحدد. يسعدنا مواصلة التعاون طويل الأمد.",
        buyer: "Rajesh P. — الهند",
        note: "رأي مشتري"
      }
    ],
    faqs: [
      {
        question: "هل تدعمون OEM أو العلامة الخاصة؟",
        answer: "نعم، تتوفر خيارات OEM والعلامة الخاصة حسب المنتج وكمية الطلب."
      },
      {
        question: "ما هو الحد الأدنى للطلب؟",
        answer: "يعتمد الحد الأدنى على نوع المنتج ومتطلبات التغليف. يرجى التواصل مع فريق التصدير للتفاصيل."
      },
      {
        question: "هل يمكنكم الشحن عالميا؟",
        answer: "نعم، ندعم الشحن الدولي بشروط FOB وCIF وCFR وEXW."
      },
      {
        question: "هل توفرون مستندات التصدير؟",
        answer: "نعم، نوفر الفاتورة التجارية وقائمة التعبئة وبوليصة الشحن وشهادة المنشأ ومستندات أخرى عند الحاجة."
      }
    ]
  },
  zh: {
    testimonials: [
      {
        quote: "椰糠质量很好，水分稳定。沟通快速，发货可靠。",
        buyer: "David R. — 澳大利亚",
        note: "买家反馈"
      },
      {
        quote: "供应商专业，出口文件完整，价格具有竞争力。",
        buyer: "Ahmed S. — 阿联酋",
        note: "买家反馈"
      },
      {
        quote: "产品质量好，交付及时。我们愿意继续长期合作。",
        buyer: "Rajesh P. — 印度",
        note: "买家反馈"
      }
    ],
    faqs: [
      {
        question: "是否支持 OEM 或贴牌？",
        answer: "支持，OEM 和贴牌选项取决于产品类型和订单数量。"
      },
      {
        question: "MOQ 是多少？",
        answer: "MOQ 取决于产品类型和包装要求。请联系出口团队确认详情。"
      },
      {
        question: "可以全球发货吗？",
        answer: "可以，我们支持 FOB、CIF、CFR 和 EXW 等国际运输条款。"
      },
      {
        question: "是否提供出口文件？",
        answer: "提供商业发票、装箱单、提单、原产地证书及所需的其他文件。"
      }
    ]
  }
};

const shippingTermLabels = {
  en: { "Not sure yet": "Not sure yet" },
  id: { "Not sure yet": "Belum yakin" },
  ar: { "Not sure yet": "غير متأكد بعد" },
  zh: { "Not sure yet": "暂不确定" }
};

let currentLanguage = localStorage.getItem("neg-language") || "en";

const categoryAssets = {
  coconut: "assets/generated/coconut-coir.png",
  spice: "assets/generated/indonesian-spices.png",
  biomass: "assets/generated/agricultural-commodities.png"
};

const products = [
  {
    id: "01",
    name: "Coco Peat Block 5kg",
    category: "coconut",
    image: "assets/crops/coco-peat-block.jpg",
    copy: "Premium compressed coco peat block made from selected coconut husk for agriculture, horticulture, greenhouse, and hydroponic farming.",
    applications: ["Hydroponics", "Greenhouse farming", "Seedling nursery", "Commercial agriculture", "Soil conditioner", "Potting mix"],
    features: ["100% natural coconut husk", "High water retention", "Excellent aeration", "Eco-friendly and biodegradable", "Low EC available", "Expansion up to approximately 70-75 liters"],
    packaging: "5kg compressed block, palletized packaging, custom packaging available"
  },
  {
    id: "02",
    name: "Coco Peat Grow Bag",
    category: "coconut",
    image: "assets/crops/coco-grow-bag.jpg",
    copy: "Ready-to-use coco peat grow bag designed for modern greenhouse farming and commercial agriculture.",
    applications: ["Tomato farming", "Cucumber farming", "Strawberry farming", "Bell pepper farming", "Melon farming", "Greenhouse cultivation"],
    features: ["Ready to use", "Clean and uniform media", "Excellent drainage", "High water capacity", "Supports healthy root growth", "Suitable for long crop cycles"],
    packaging: "Standard grow bag, custom size available, OEM/private label available"
  },
  {
    id: "03",
    name: "Coco Fiber",
    category: "coconut",
    image: "assets/crops/coco-fiber.jpg",
    copy: "Premium coconut fiber processed from coconut husk for industrial, agricultural, and eco-friendly material applications.",
    applications: ["Mattress industry", "Rope production", "Geotextile", "Erosion control", "Brush industry", "Horticulture", "Mulching"],
    features: ["Strong natural fiber", "Durable", "Eco-friendly", "Sustainable raw material", "Suitable for industrial use"],
    packaging: "Bale packaging, PP bag, custom export packaging available"
  },
  {
    id: "04",
    name: "Coco Bristle",
    category: "coconut",
    image: "assets/crops/coco-fiber.jpg",
    copy: "Premium coco bristle is a strong and durable natural fiber extracted from coconut husk for broom manufacturing, brush industry, cleaning tools, handicrafts, and industrial applications.",
    applications: ["Broom manufacturing", "Brush industry", "Cleaning tools", "Handicrafts", "Industrial fiber products", "Household products", "Eco-friendly material production"],
    features: ["Strong natural fiber", "Durable and flexible", "Eco-friendly material", "Sustainable raw material", "Clean and sorted quality", "Suitable for industrial use", "Available in different grades"],
    packaging: "Bale packaging, PP bag, custom export packaging available"
  },
  {
    id: "05",
    name: "Charcoal Briquette",
    category: "coconut",
    image: "assets/crops/charcoal-briquette.jpg",
    copy: "Premium coconut shell charcoal briquette for BBQ, shisha, restaurants, hotels, and retail markets.",
    applications: ["BBQ", "Shisha / hookah", "Restaurants", "Hotels", "Retail packaging"],
    features: ["Long burning time", "High heat output", "Low ash", "Low smoke", "Odorless", "No spark", "Export quality"],
    packaging: "Inner plastic, carton box, master carton, private label available",
    forms: "Cube, hexagonal, finger"
  },
  {
    id: "06",
    name: "Coconut Sugar",
    category: "coconut",
    image: "assets/crops/coconut-sugar.jpg",
    copy: "Natural sweetener produced from coconut blossom nectar with a rich caramel taste for food, beverage, bakery, and healthy product industries.",
    applications: ["Food industry", "Beverage industry", "Bakery", "Chocolate and confectionery", "Retail packaging", "Healthy sweetener products"],
    features: ["Natural sweetener", "Rich caramel flavor", "No artificial additives", "Low glycemic index", "Organic option available", "Suitable for healthy food products"],
    packaging: "Kraft paper bag, PP bag, retail pouch, private label available"
  },
  {
    id: "07",
    name: "Palm Sugar",
    category: "coconut",
    image: "assets/crops/coconut-sugar.jpg",
    copy: "Traditional Indonesian palm sugar made from selected palm sap with natural sweetness, rich aroma, and authentic taste.",
    applications: ["Food manufacturing", "Traditional cuisine", "Beverage industry", "Bakery", "Retail packaging"],
    features: ["Natural sweetener", "Rich aroma", "Authentic Indonesian taste", "Available in block and powder", "No artificial additives", "Export quality"],
    packaging: "Block packaging, powder packaging, kraft paper bag, PP bag, retail pack, private label available"
  },
  {
    id: "08",
    name: "Nutmeg",
    category: "spice",
    image: "assets/crops/nutmeg.jpg",
    copy: "Premium Indonesian nutmeg with strong aroma and high essential oil content for food, beverage, pharmaceutical, and spice processing industries.",
    applications: ["Food industry", "Spice blend", "Beverage", "Bakery", "Pharmaceutical", "Essential oil"],
    features: ["Strong natural aroma", "Selected Indonesian origin", "Export grade", "Available in whole and powder form"],
    forms: "Whole nutmeg, nutmeg kernel, nutmeg powder",
    packaging: "Bulk export packaging or buyer-specific packing"
  },
  {
    id: "09",
    name: "Cinnamon",
    category: "spice",
    image: "assets/crops/cinnamon.jpg",
    copy: "Selected Indonesian cassia cinnamon with strong aroma and rich natural flavor for food, beverage, bakery, spice blend, and retail markets.",
    applications: ["Food industry", "Beverage", "Bakery", "Spice blend", "Retail packaging"],
    features: ["Strong aroma", "Rich flavor", "Export grade", "High oil content", "Clean and well-dried"],
    forms: "Cinnamon stick, broken cinnamon, cinnamon powder",
    packaging: "Bulk export packaging or buyer-specific packing"
  },
  {
    id: "10",
    name: "Ginger Powder",
    category: "spice",
    image: "assets/crops/ginger.jpg",
    copy: "100% natural dried ginger powder made from selected ginger for beverages, herbal products, bakery, seasoning, and food manufacturing.",
    applications: ["Herbal drinks", "Tea blend", "Bakery", "Seasoning", "Food manufacturing", "Health product ingredients"],
    features: ["Natural ginger aroma", "Fine powder texture", "Food grade", "No artificial additives", "Strong warm flavor"],
    packaging: "Bulk export packaging or buyer-specific packing"
  },
  {
    id: "11",
    name: "Turmeric Powder",
    category: "spice",
    image: "assets/crops/turmeric.jpg",
    copy: "Premium turmeric powder with bright golden color and natural aroma for food, herbal products, cosmetics, and spice blends.",
    applications: ["Food industry", "Herbal products", "Cosmetics", "Seasoning", "Spice blend", "Beverage"],
    features: ["Bright golden color", "Natural turmeric aroma", "Fine powder", "Food grade", "Export quality"],
    packaging: "Bulk export packaging or buyer-specific packing"
  },
  {
    id: "12",
    name: "Lemongrass Powder",
    category: "spice",
    image: "assets/crops/lemongrass.jpg",
    copy: "Natural lemongrass powder made from selected Indonesian lemongrass with a refreshing citrus aroma for tea, herbal drinks, seasoning, and cosmetic ingredients.",
    applications: ["Herbal tea", "Beverage", "Seasoning", "Spice blend", "Cosmetics", "Wellness products"],
    features: ["Fresh citrus aroma", "Natural ingredient", "Fine powder", "Food grade", "Export quality"],
    packaging: "Bulk export packaging or buyer-specific packing"
  },
  {
    id: "13",
    name: "Wood Pellet",
    category: "biomass",
    image: "assets/crops/coconut-husk.jpg",
    copy: "Premium wood pellet is a renewable biomass fuel produced from compressed wood material for industrial heating, power plants, boilers, household heating, and commercial energy applications.",
    applications: ["Biomass power plants", "Industrial boilers", "Commercial heating", "Household heating", "Agricultural drying", "Manufacturing facilities", "Renewable energy projects"],
    features: ["Renewable biomass fuel", "High calorific value", "Low moisture content", "Efficient combustion", "Low ash content", "Uniform pellet size", "Easy storage and handling", "Eco-friendly energy source"],
    packaging: "15 kg bag, 25 kg bag, jumbo bag, bulk loading, custom packaging available"
  }
];

const rows = document.querySelectorAll("[data-category-row]");
const modal = document.querySelector("#productModal");
const productSelect = document.querySelector("#productSelect");
const calculatorProduct = document.querySelector("#calculatorProduct");
const containerType = document.querySelector("#containerType");
const calculatorQuantity = document.querySelector("#calculatorQuantity");
const calculatorResult = document.querySelector("#calculatorResult");

const capacityData = {
  "Coco Peat Block 5kg": {
    "20ft": { label: "±4,000 blocks", capacity: 4000, unit: "blocks" },
    "40hq": { label: "±8,000 blocks", capacity: 8000, unit: "blocks" }
  },
  "Coco Peat Grow Bag": {
    "20ft": { label: "Custom by size", capacity: null, unit: "custom" },
    "40hq": { label: "Custom by size", capacity: null, unit: "custom" }
  },
  "Coco Fiber": {
    "20ft": { label: "±9-10 tons", capacity: 9.5, unit: "tons" },
    "40hq": { label: "±18-20 tons", capacity: 19, unit: "tons" }
  },
  "Coco Bristle": {
    "20ft": { label: "±8-10 tons", capacity: 9, unit: "tons" },
    "40hq": { label: "±16-20 tons", capacity: 18, unit: "tons" }
  },
  "Charcoal Briquette": {
    "20ft": { label: "±18-20 tons", capacity: 19, unit: "tons" },
    "40hq": { label: "±25-27 tons", capacity: 26, unit: "tons" }
  },
  "Coconut Sugar": {
    "20ft": { label: "±18 tons", capacity: 18, unit: "tons" },
    "40hq": { label: "±26 tons", capacity: 26, unit: "tons" }
  },
  "Palm Sugar": {
    "20ft": { label: "±18 tons", capacity: 18, unit: "tons" },
    "40hq": { label: "±26 tons", capacity: 26, unit: "tons" }
  },
  "Nutmeg": {
    "20ft": { label: "±15-18 tons", capacity: 16.5, unit: "tons" },
    "40hq": { label: "±25-27 tons", capacity: 26, unit: "tons" }
  },
  "Cinnamon": {
    "20ft": { label: "±12-15 tons", capacity: 13.5, unit: "tons" },
    "40hq": { label: "±22-25 tons", capacity: 23.5, unit: "tons" }
  },
  "Ginger Powder": {
    "20ft": { label: "±15-20 tons", capacity: 17.5, unit: "tons" },
    "40hq": { label: "±25-27 tons", capacity: 26, unit: "tons" }
  },
  "Turmeric Powder": {
    "20ft": { label: "±15-20 tons", capacity: 17.5, unit: "tons" },
    "40hq": { label: "±25-27 tons", capacity: 26, unit: "tons" }
  },
  "Lemongrass Powder": {
    "20ft": { label: "±12-18 tons", capacity: 15, unit: "tons" },
    "40hq": { label: "±22-25 tons", capacity: 23.5, unit: "tons" }
  },
  "Wood Pellet": {
    "20ft": { label: "±18-20 tons", capacity: 19, unit: "tons" },
    "40hq": { label: "±25-27 tons", capacity: 26, unit: "tons" }
  }
};

const categoryLabels = {
  coconut: "Coconut Products",
  spice: "Indonesian Spices",
  biomass: "Biomass Energy"
};

function locale() {
  return i18n[currentLanguage] || i18n.en;
}

function text(key) {
  return locale().text[key] || i18n.en.text[key] || key;
}

function placeholder(key) {
  return locale().placeholders[key] || i18n.en.placeholders[key] || "";
}

function productName(product) {
  return productNames[currentLanguage]?.[product.name] || product.name;
}

function categoryName(category) {
  return locale().categories[category] || categoryLabels[category];
}

function setText(selector, key) {
  const element = document.querySelector(selector);
  if (element) element.textContent = text(key);
}

function setHTML(selector, key) {
  const element = document.querySelector(selector);
  if (element) element.innerHTML = text(key);
}

function setLabel(selector, key) {
  const label = document.querySelector(selector);
  if (!label) return;
  const textNode = [...label.childNodes].find((node) => node.nodeType === Node.TEXT_NODE);
  if (textNode) textNode.nodeValue = `${text(key)} `;
}

function setPlaceholder(selector, key) {
  const element = document.querySelector(selector);
  if (element) element.placeholder = placeholder(key);
}

function setSelectOptionText(selector, values) {
  const select = document.querySelector(selector);
  if (!select) return;
  [...select.options].forEach((option) => {
    if (values[option.value]) option.textContent = values[option.value];
  });
}

function renderProofContent() {
  const content = proofContent[currentLanguage] || proofContent.en;
  document.querySelectorAll(".testimonial-grid article").forEach((article, index) => {
    const item = content.testimonials[index];
    if (!item) return;
    article.querySelector("p").textContent = `“${item.quote}”`;
    article.querySelector("strong").textContent = item.buyer;
    article.querySelector("small").textContent = item.note;
  });

  document.querySelectorAll(".faq-panel details").forEach((detail, index) => {
    const item = content.faqs[index];
    if (!item) return;
    detail.querySelector("summary").textContent = item.question;
    detail.querySelector("p").textContent = item.answer;
  });
}

function applyStaticTranslations() {
  const active = locale();
  document.documentElement.lang = currentLanguage;
  document.documentElement.dir = active.dir;
  document.title = active.title;
  document.querySelector('meta[name="description"]')?.setAttribute("content", active.meta);
  if (languageSelect) languageSelect.value = currentLanguage;

  setText(".brand small", "brandSmall");
  setText('.main-nav a[href="#about"]', "navAbout");
  setText('.main-nav a[href="#products"]', "navProducts");
  setText('.main-nav a[href="#process"]', "navProcess");
  setText('.main-nav a[href="#calculator"]', "navCalculator");
  setText('.main-nav a[href="#inquiry"]', "navInquiry");

  setText(".hero .overline", "heroOverline");
  setText("#hero-title", "heroTitle");
  setText(".hero-subtitle", "heroSubtitle");
  setText(".hero-actions .primary", "requestQuote");
  const secondaryHero = document.querySelector(".hero-actions .secondary");
  if (secondaryHero) secondaryHero.lastChild.nodeValue = ` ${text("contactTeam")}`;

  setText(".trust-strip article:nth-child(1) h3", "exportQuality");
  setText(".trust-strip article:nth-child(1) p", "exportQualityCopy");
  setText(".trust-strip article:nth-child(2) h3", "factoryDirect");
  setText(".trust-strip article:nth-child(2) p", "factoryDirectCopy");
  setText(".trust-strip article:nth-child(3) h3", "worldwideShipping");
  setText(".trust-strip article:nth-child(3) p", "worldwideShippingCopy");
  setText(".trust-strip article:nth-child(4) h3", "sustainableProducts");
  setText(".trust-strip article:nth-child(4) p", "sustainableProductsCopy");

  setHTML("#featured-title", "coreFocus");
  setHTML(".feature-card:nth-child(1) h3", "coconutFeature");
  setText(".feature-card:nth-child(1) p", "coconutFeatureCopy");
  setText(".feature-card:nth-child(1) a", "viewProducts");
  setHTML(".feature-card:nth-child(2) h3", "spicesFeature");
  setText(".feature-card:nth-child(2) p", "spicesFeatureCopy");
  setText(".feature-card:nth-child(2) a", "viewProducts");
  setHTML(".feature-card:nth-child(3) h3", "biomassFeature");
  setText(".feature-card:nth-child(3) p", "biomassFeatureCopy");
  setText(".feature-card:nth-child(3) a", "viewBiomass");

  setText(".about-card h2", "aboutTitle");
  setText(".about-card p", "aboutCopy");
  setText(".about-card a", "discussRequirement");
  setText(".process-card h2", "processTitle");
  setText(".process-line div:nth-child(1) span", "selection");
  setText(".process-line div:nth-child(1) p", "selectionCopy");
  setText(".process-line div:nth-child(2) span", "inspection");
  setText(".process-line div:nth-child(2) p", "inspectionCopy");
  setText(".process-line div:nth-child(3) span", "packing");
  setText(".process-line div:nth-child(3) p", "packingCopy");
  setText(".process-line div:nth-child(4) span", "shipping");
  setText(".process-line div:nth-child(4) p", "shippingCopy");
  setHTML(".cta-panel h2", "readySource");
  setText(".cta-panel p", "readySourceCopy");
  setText(".cta-panel .btn", "startInquiry");
  setText(".cta-panel .email-link", "emailTeam");

  setText("#catalog-title", "catalogTitle");
  setText(".catalog-head p", "catalogCopy");
  setText('[data-filter="all"]', "all");
  setText('[data-filter="spice"]', "spices");
  setText('[data-filter="coconut"]', "coconutProducts");
  setText('[data-filter="biomass"]', "biomassEnergy");
  const coconutHeading = document.querySelector("#coconut .product-heading h3");
  const spicesHeading = document.querySelector("#spices .product-heading h3");
  const biomassHeading = document.querySelector("#biomass .product-heading h3");
  if (coconutHeading) coconutHeading.innerHTML = `<span aria-hidden="true">🌴</span> ${text("coconutProducts")}`;
  if (spicesHeading) spicesHeading.innerHTML = `<span aria-hidden="true">✳</span> ${text("spices")}`;
  if (biomassHeading) biomassHeading.innerHTML = `<span aria-hidden="true">♻</span> ${text("biomassEnergy")}`;
  document.querySelectorAll(".product-heading a").forEach((link) => { link.textContent = text("requestSupply"); });

  setText(".quality-panel .overline", "qualityOverline");
  setText("#quality-title", "qualityTitle");
  setText(".quality-panel li:nth-child(1)", "quality1");
  setText(".quality-panel li:nth-child(2)", "quality2");
  setText(".quality-panel li:nth-child(3)", "quality3");
  setText(".quality-panel li:nth-child(4)", "quality4");

  setText(".calculator-copy .overline", "calculatorOverline");
  setText("#calculator-title", "calculatorTitle");
  setText(".calculator-copy p:not(.overline)", "calculatorCopy");
  setLabel("#containerCalculator label:nth-of-type(1)", "product");
  setLabel("#containerCalculator label:nth-of-type(2)", "containerType");
  setLabel("#containerCalculator label:nth-of-type(3)", "estimatedOrderQuantity");
  setPlaceholder("#calculatorQuantity", "calculatorQuantity");

  setText(".market-section .overline", "marketsOverline");
  setText("#markets-title", "marketsTitle");
  setText(".testimonials .overline", "testimonialsOverline");
  setText("#proof-title", "testimonialsTitle");
  setText(".faq-panel .overline", "faq");
  setText(".faq-panel h2", "faqTitle");
  renderProofContent();

  setText(".catalogue-lead .overline", "catalogueOverline");
  setText("#catalogue-title", "catalogueTitle");
  setText(".catalogue-lead > div p:not(.overline)", "catalogueCopy");
  setPlaceholder("#catalogueName", "catalogueName");
  setPlaceholder("#catalogueCompany", "catalogueCompany");
  setPlaceholder("#catalogueEmail", "catalogueEmail");
  setPlaceholder("#catalogueWhatsapp", "catalogueWhatsapp");
  setPlaceholder("#catalogueCountry", "catalogueCountry");
  setText("#catalogueForm button", "downloadCatalogue");

  setText(".inquiry-copy .overline", "rfqOverline");
  setText("#inquiry-title", "rfqTitle");
  setText(".inquiry-copy p:not(.overline)", "rfqCopy");
  setLabel('#inquiryForm label:nth-of-type(1)', "fullName");
  setLabel('#inquiryForm label:nth-of-type(2)', "companyName");
  setLabel('#inquiryForm label:nth-of-type(3)', "country");
  setLabel('#inquiryForm label:nth-of-type(4)', "email");
  setLabel('#inquiryForm label:nth-of-type(5)', "whatsappNumber");
  setLabel('#inquiryForm label:nth-of-type(6)', "productInterest");
  setLabel('#inquiryForm label:nth-of-type(7)', "estimatedOrderQuantity");
  setLabel('#inquiryForm label:nth-of-type(8)', "preferredShippingTerm");
  setLabel('#inquiryForm label:nth-of-type(9)', "messageRequirement");
  setPlaceholder("#fullNameInput", "fullName");
  setPlaceholder("#companyInput", "company");
  setPlaceholder("#countryInput", "country");
  setPlaceholder("#emailInput", "email");
  setPlaceholder("#whatsappInput", "whatsapp");
  setPlaceholder("#quantityInput", "quantity");
  setPlaceholder("#messageInput", "message");
  setText('#inquiryForm button[type="submit"]', "submitRFQ");
  setText("#continueWhatsapp", "continueWhatsapp");
  setText(".inquiry-form .email-link", "preferEmail");
  setHTML(".floating-wa strong", "chatExportTeam");
  setText(".modal-wa", "modalWa");
  setSelectOptionText("#shippingTermInput", shippingTermLabels[currentLanguage] || shippingTermLabels.en);
}

function whatsappUrl(message) {
  return `https://wa.me/${whatsappNumber}?text=${encodeURIComponent(message)}`;
}

function createProductCard(product) {
  const article = document.createElement("article");
  article.className = "product-card";
  article.dataset.category = product.category;
  article.innerHTML = `
    <span class="product-number">${product.id}</span>
    <img src="${product.image}" alt="${product.name}" loading="lazy" />
    <h4>${productName(product)}</h4>
    <button class="detail-btn" type="button">${text("viewDetails")}</button>
  `;
  article.querySelector("button").addEventListener("click", () => openProduct(product));
  return article;
}

function renderProducts(active = "all") {
  rows.forEach((row) => {
    const category = row.dataset.categoryRow;
    row.innerHTML = "";
    const visible = products.filter((product) => product.category === category && (active === "all" || product.category === active));
    visible.forEach((product) => row.appendChild(createProductCard(product)));

    row.closest(".product-section").hidden = visible.length === 0;
  });
}

function openProduct(product) {
  const message = `Hello PT Artha Prima Global, I would like to request quotation for ${product.name}. Please share MOQ, specification, packing, lead time, and export terms.`;
  const specRows = [
    [text("applications"), product.applications.join(", ")],
    [text("features"), product.features.join(", ")],
    [text("packaging"), product.packaging],
    [text("documents"), "Commercial invoice, packing list, bill of lading, certificate of origin, and supporting certificates when required"]
  ];
  if (product.forms) specRows.splice(2, 0, [text("availableForms"), product.forms]);

  modal.querySelector("img").src = product.image;
  modal.querySelector("img").alt = productName(product);
  modal.querySelector("h3").textContent = productName(product);
  modal.querySelector(".modal-category").textContent = categoryName(product.category);
  modal.querySelector(".modal-copy").textContent = product.copy;
  modal.querySelector(".modal-wa").href = whatsappUrl(message);
  modal.querySelector(".modal-wa").textContent = text("modalWa");
  modal.querySelector(".spec-list").innerHTML = specRows
    .map(([term, description]) => `<div><dt>${term}</dt><dd>${description}</dd></div>`)
    .join("");
  modal.showModal();
}

function hydrateProductSelect() {
  if (!productSelect) return;
  productSelect.innerHTML = Object.keys(categoryLabels)
    .map((category) => [category, categoryName(category)])
    .map(([category, label]) => {
      const options = products
        .filter((product) => product.category === category)
        .map((product) => `<option value="${product.name}">${productName(product)}</option>`)
        .join("");
      return `<optgroup label="${label}">${options}</optgroup>`;
    })
    .join("");
}

function hydrateCalculator() {
  if (!calculatorProduct) return;
  calculatorProduct.innerHTML = Object.keys(categoryLabels)
    .map((category) => [category, categoryName(category)])
    .map(([category, label]) => {
      const options = products
        .filter((product) => product.category === category)
        .map((product) => `<option value="${product.name}">${productName(product)}</option>`)
        .join("");
      return `<optgroup label="${label}">${options}</optgroup>`;
    })
    .join("");
  updateCalculator();
}

function updateCalculator() {
  if (!calculatorProduct || !containerType || !calculatorResult) return;
  const productValue = calculatorProduct.value;
  const type = containerType.value;
  const quantity = Number(calculatorQuantity.value);
  const estimate = capacityData[productValue]?.[type];
  const selectedProduct = products.find((product) => product.name === productValue) || { name: productValue };

  if (!estimate) return;

  let quantityNote = "Enter an estimated order quantity to calculate container needs.";
  quantityNote = text("capacityPrompt");
  if (estimate.capacity && quantity > 0) {
    const containers = Math.ceil(quantity / estimate.capacity);
    const enough = quantity >= estimate.capacity ? text("capacityEnough") : text("capacityBelow");
    quantityNote = `${enough} ${text("containersNeeded")}: ${containers}.`;
  } else if (!estimate.capacity) {
    quantityNote = text("customCapacity");
  }

  calculatorResult.innerHTML = `
    <strong>${estimate.label}</strong>
    <span>${text("estimatedCapacityFor").replace("{container}", type === "20ft" ? "20ft" : "40HQ").replace("{product}", productName(selectedProduct))}</span>
    <p>${quantityNote}</p>
    <small>${text("capacityDisclaimer")}</small>
  `;
}

document.querySelectorAll(".filter").forEach((button) => {
  button.addEventListener("click", () => {
    document.querySelectorAll(".filter").forEach((item) => item.classList.remove("active"));
    button.classList.add("active");
    renderProducts(button.dataset.filter);
  });
});

document.querySelector(".modal-close").addEventListener("click", () => modal.close());
modal.addEventListener("click", (event) => {
  if (event.target === modal) modal.close();
});

document.querySelector("#inquiryForm").addEventListener("submit", (event) => {
  event.preventDefault();
  const product = productSelect.value;
  const fullName = document.querySelector("#fullNameInput").value.trim() || "not provided";
  const company = document.querySelector("#companyInput").value.trim() || "not provided";
  const country = document.querySelector("#countryInput").value.trim() || "not provided";
  const email = document.querySelector("#emailInput").value.trim() || "not provided";
  const whatsapp = document.querySelector("#whatsappInput").value.trim() || "not provided";
  const quantity = document.querySelector("#quantityInput").value.trim() || "to be discussed";
  const shippingTerm = document.querySelector("#shippingTermInput").value;
  const requirement = document.querySelector("#messageInput").value.trim() || "to be discussed";
  const message = `Hello PT Artha Prima Global, I would like to request a quotation.\n\nFull name: ${fullName}\nCompany: ${company}\nCountry: ${country}\nEmail: ${email}\nWhatsApp: ${whatsapp}\nProduct interest: ${product}\nEstimated quantity: ${quantity}\nPreferred shipping term: ${shippingTerm}\nMessage: ${requirement}\n\nPlease share MOQ, specification, packing options, lead time, and export terms.`;
  const continueWhatsapp = document.querySelector("#continueWhatsapp");
  document.querySelector("#rfqMessage").textContent = text("rfqThanks");
  continueWhatsapp.href = whatsappUrl(message);
  continueWhatsapp.classList.remove("hidden-action");
  continueWhatsapp.textContent = text("continueWhatsapp");
});

document.querySelector("#catalogueForm").addEventListener("submit", (event) => {
  event.preventDefault();
  const name = document.querySelector("#catalogueName").value.trim() || "not provided";
  const company = document.querySelector("#catalogueCompany").value.trim() || "not provided";
  const email = document.querySelector("#catalogueEmail").value.trim() || "not provided";
  const whatsapp = document.querySelector("#catalogueWhatsapp").value.trim() || "not provided";
  const country = document.querySelector("#catalogueCountry").value.trim() || "not provided";
  const message = `Hello PT Artha Prima Global, I would like to request the product catalogue.\n\nName: ${name}\nCompany: ${company}\nEmail: ${email}\nWhatsApp: ${whatsapp}\nCountry: ${country}`;
  document.querySelector("#catalogueMessage").innerHTML = `${text("catalogueCaptured")} <a href="${whatsappUrl(message)}" target="_blank" rel="noreferrer">${text("continueViaWhatsapp")}</a>`;
});

if (calculatorProduct) calculatorProduct.addEventListener("change", updateCalculator);
if (containerType) containerType.addEventListener("change", updateCalculator);
if (calculatorQuantity) calculatorQuantity.addEventListener("input", updateCalculator);
if (languageSelect) {
  languageSelect.addEventListener("change", () => {
    currentLanguage = languageSelect.value;
    localStorage.setItem("neg-language", currentLanguage);
    applyStaticTranslations();
    hydrateProductSelect();
    hydrateCalculator();
    const activeFilter = document.querySelector(".filter.active")?.dataset.filter || "all";
    renderProducts(activeFilter);
  });
}

applyStaticTranslations();
hydrateProductSelect();
hydrateCalculator();
renderProducts();

if (window.location.hash) {
  const scrollToHashTarget = () => document.querySelector(window.location.hash)?.scrollIntoView();
  window.requestAnimationFrame(scrollToHashTarget);
  window.setTimeout(scrollToHashTarget, 350);
  window.setTimeout(scrollToHashTarget, 900);
}
