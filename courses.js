const courses = [
    
    /* ===
       ترم 1
    === */
    
    {
        id: "math",
        name: "ریاضی",
        semester: 1,
        units: 2,
        prerequisites: [],
        corequisites: [],
        passed: false
    },
    
    {
        id: "anatomy",
        name: "تشریح",
        semester: 1,
        units: 1.5,
        prerequisites: [],
        corequisites: [],
        passed: false
    },
    
    {
        id: "histology",
        name: "بافت شناسی",
        semester: 1,
        units: 1.5,
        prerequisites: [],
        corequisites: [],
        passed: false
    },
    
    {
        id: "general_chemistry",
        name: "شیمی عمومی",
        semester: 1,
        units: 3,
        prerequisites: [],
        corequisites: [],
        passed: false
    },
    
    {
        id: "general_chemistry_lab",
        name: "شیمی عمومی ع",
        semester: 1,
        units: 1,
        prerequisites: [],
        corequisites: ["general_chemistry"],
        passed: false
    },
    
    {
        id: "molecular_biology",
        name: "بیولوژی مولکولی",
        semester: 1,
        units: 2,
        prerequisites: [],
        corequisites: [],
        passed: false
    },
    
    {
        id: "human_in_islam",
        name: "انسان در اسلام",
        semester: 1,
        units: 2,
        prerequisites: [],
        corequisites: [],
        passed: false
    },
    
    {
        id: "pharmaceutics1",
        name: "فارماسیوتیکس 1",
        semester: 1,
        units: 2,
        prerequisites: [],
        corequisites: [],
        passed: false
    },
    
    {
        id: "first_aid",
        name: "کمک های اولیه 1",
        semester: 1,
        units: 1,
        prerequisites: [],
        corequisites: [],
        passed: false
    },
    
    {
        id: "general_english",
        name: "زبان عمومی",
        semester: 1,
        units: 3,
        prerequisites: [],
        corequisites: [],
        passed: false
    },
    
    {
        id: "pe1",
        name: "تربیت بدنی",
        semester: 1,
        units: 1,
        prerequisites: [],
        corequisites: [],
        passed: false
    },
    
    /* ===
       ترم 2
    === */
    
    {
        id: "persian",
        name: "فارسی",
        semester: 2,
        units: 3,
        prerequisites: [],
        corequisites: [],
        passed: false
    },
    
    {
        id: "virology",
        name: "ویروس شناسی",
        semester: 2,
        units: 1,
        prerequisites: [],
        corequisites: ["microbiology"],
        passed: false
    },
    
    {
        id: "microbiology",
        name: "میکروب شناسی",
        semester: 2,
        units: 3,
        prerequisites: [
            "molecular_biology"
        ],
        corequisites: [],
        passed: false
    },
    
    {
        id: "microbiology_lab",
        name: "میکروب شناسی ع",
        semester: 2,
        units: 1,
        prerequisites: [
            "molecular_biology"
        ],
        corequisites: [
            "microbiology"
        ],
        passed: false
    },
    
    {
        id: "physiology1",
        name: "فیزیولوژی 1",
        semester: 2,
        units: 4,
        prerequisites: [
            "molecular_biology",
            "anatomy"
        ],
        corequisites: [],
        passed: false
    },
    
    {
        id: "organic1",
        name: "شیمی آلی 1",
        semester: 2,
        units: 3,
        prerequisites: [
            "general_chemistry"
        ],
        corequisites: [],
        passed: false
    },
    
    {
        id: "organic1_lab",
        name: "شیمی آلی 1 ع",
        semester: 2,
        units: 1,
        prerequisites: [
            "general_chemistry",
            "general_chemistry_lab"
        ],
        corequisites: [
            "organic1"
        ],
        passed: false
    },
    
    {
        id: "physics",
        name: "فیزیک",
        semester: 2,
        units: 2,
        prerequisites: [],
        corequisites: [],
        passed: false
    },
    
    {
        id: "history",
        name: "تاریخ تحلیلی",
        semester: 2,
        units: 2,
        prerequisites: [],
        corequisites: [],
        passed: false
    },

    /* ===
   ترم 3
=== */

{
    id: "organic2",
    name: "شیمی آلی 2",
    semester: 3,
    units: 3,
    prerequisites: [
        "organic1"
    ],
    corequisites: [],
    passed: false
},

{
    id: "organic2_lab",
    name: "شیمی آلی 2 ع",
    semester: 3,
    units: 1,
    prerequisites: [
        "organic1",
        "organic1_lab"
    ],
    corequisites: [
        "organic2"
    ],
    passed: false
},

{
    id: "physiology2",
    name: "فیزیولوژی 2",
    semester: 3,
    units: 4,
    prerequisites: [
        "physiology1"
    ],
    corequisites: [],
    passed: false
},

{
    id: "physiology2_lab",
    name: "فیزیولوژی 2 ع",
    semester: 3,
    units: 1,
    prerequisites: [
        "physiology1"
    ],
    corequisites: [
        "physiology2"
    ],
    passed: false
},

{
    id: "health_services",
    name: "اصول خدمات بهداشتی",
    semester: 3,
    units: 1,
    prerequisites: [],
    corequisites: [],
    passed: false
},

{
    id: "pharmaceutics2",
    name: "فارماسیوتیکس 2",
    semester: 3,
    units: 3,
    prerequisites: [
        "pharmaceutics1"
    ],
    corequisites: [],
    passed: false
},

{
    id: "pharmaceutics2_lab",
    name: "فارماسیوتیکس 2 ع",
    semester: 3,
    units: 1,
    prerequisites: [
        "pharmaceutics1"
    ],
    corequisites: [
        "pharmaceutics2"
    ],
    passed: false
},

{
    id: "basic_biochemistry",
    name: "بیوشیمی پایه",
    semester: 3,
    units: 3,
    prerequisites: [
        "organic1",
        "molecular_biology"
    ],
    corequisites: [],
    passed: false
},

{
    id: "basic_biochemistry_lab",
    name: "بیوشیمی پایه ع",
    semester: 3,
    units: 1,
    prerequisites: [
        "organic1",
        "organic1_lab",
        "molecular_biology"
    ],
    corequisites: [
        "basic_biochemistry"
    ],
    passed: false
},

{
    id: "constitution",
    name: "آشنایی با قانون اساسی",
    semester: 3,
    units: 2,
    prerequisites: [],
    corequisites: [],
    passed: false
},

/* ===
   ترم 4
=== */

{
    id: "parasitology_mycology",
    name: "انگل شناسی و قارچ شناسی",
    semester: 4,
    units: 3,
    prerequisites: [
        "molecular_biology"
    ],
    corequisites: [],
    passed: false
},

{
    id: "parasitology_mycology_lab",
    name: "انگل شناسی و قارچ شناسی ع",
    semester: 4,
    units: 1,
    prerequisites: [
        "molecular_biology"
    ],
    corequisites: [
        "parasitology_mycology"
    ],
    passed: false
},

{
    id: "analytical_chemistry",
    name: "تجزیه",
    semester: 4,
    units: 2,
    prerequisites: [
        "general_chemistry"
    ],
    corequisites: [],
    passed: false
},

{
    id: "analytical_chemistry_lab",
    name: "تجزیه ع",
    semester: 4,
    units: 1,
    prerequisites: [
        "general_chemistry",
        "general_chemistry_lab"
    ],
    corequisites: [
        "analytical_chemistry"
    ],
    passed: false
},

{
    id: "pharmacology1",
    name: "فارماکولوژی 1",
    semester: 4,
    units: 3,
    prerequisites: [
        "basic_biochemistry"
    ],
    corequisites: [
        "physiology2"
    ],
    passed: false
},

{
    id: "pharmaceutics3",
    name: "فارماسیوتیکس 3",
    semester: 4,
    units: 3,
    prerequisites: [
        "pharmaceutics1"
    ],
    corequisites: [],
    passed: false
},

{
    id: "pharmaceutics3_lab",
    name: "فارماسیوتیکس 3 ع",
    semester: 4,
    units: 1,
    prerequisites: [
        "pharmaceutics1"
    ],
    corequisites: [
        "pharmaceutics3"
    ],
    passed: false
},

{
    id: "practical_irfan",
    name: "عرفان عملی در اسلام",
    semester: 4,
    units: 2,
    prerequisites: [],
    corequisites: [],
    passed: false
},

{
    id: "cell_culture",
    name: "کشت سلولی",
    semester: 4,
    units: 1,
    prerequisites: [
        "molecular_biology"
    ],
    corequisites: [],
    passed: false
},

{
    id: "clinical_biochemistry",
    name: "بیوشیمی بالینی",
    semester: 4,
    units: 2,
    prerequisites: [
        "basic_biochemistry"
    ],
    corequisites: [],
    passed: false
},

{
    id: "pe2",
    name: "تربیت بدنی 2",
    semester: 4,
    units: 1,
    prerequisites: [],
    corequisites: [],
    passed: false
},

/* ===
   ترم 5
=== */

{
    id: "pharmaceutics4",
    name: "فارماسیوتیکس 4",
    semester: 5,
    units: 2,
    prerequisites: [
        "pharmaceutics1"
    ],
    corequisites: [],
    passed: false
},

{
    id: "pharmaceutics4_lab",
    name: "فارماسیوتیکس 4 ع",
    semester: 5,
    units: 1,
    prerequisites: [
        "pharmaceutics1"
    ],
    corequisites: [
        "pharmaceutics4"
    ],
    passed: false
},

{
    id: "immunology",
    name: "ایمنی شناسی",
    semester: 5,
    units: 3,
    prerequisites: [
        "microbiology"
    ],
    corequisites: [
        "parasitology_mycology"
    ],
    passed: false
},

{
    id: "immunology_lab",
    name: "ایمنی شناسی ع",
    semester: 5,
    units: 1,
    prerequisites: [
        "microbiology"
    ],
    corequisites: [
        "immunology"
    ],
    passed: false
},

{
    id: "analysis1",
    name: "آنالیز 1",
    semester: 5,
    units: 3,
    prerequisites: [
        "analytical_chemistry",
        "organic2"
    ],
    corequisites: [],
    passed: false
},

{
    id: "medicinal_plants",
    name: "گیاهان دارویی",
    semester: 5,
    units: 2,
    prerequisites: [],
    corequisites: [],
    passed: false
},

{
    id: "medicinal_plants_lab",
    name: "گیاهان دارویی ع",
    semester: 5,
    units: 1,
    prerequisites: [],
    corequisites: [
        "medicinal_plants"
    ],
    passed: false
},

{
    id: "pharmacology2",
    name: "فارماکولوژی 2",
    semester: 5,
    units: 3,
    prerequisites: [
        "pharmacology1"
    ],
    corequisites: [],
    passed: false
},

{
    id: "social_political_rights",
    name: "حقوق اجتماعی و سیاسی در اسلام",
    semester: 5,
    units: 2,
    prerequisites: [],
    corequisites: [],
    passed: false
},

{
    id: "nahj_al_balagha",
    name: "تفسیر موضوعی نهج البلاغه",
    semester: 5,
    units: 2,
    prerequisites: [],
    corequisites: [],
    passed: false
},

/* ===
   ترم 6
=== */

{
    id: "pharmaceutics5",
    name: "فارماسیوتیکس 5",
    semester: 6,
    units: 2,
    prerequisites: [
        "pharmaceutics1",
        "pharmaceutics2",
        "pharmaceutics3",
        "pharmaceutics4"
    ],
    corequisites: [],
    passed: false
},

{
    id: "pharmacology3",
    name: "فارماکولوژی 3",
    semester: 6,
    units: 2,
    prerequisites: [
        "pharmacology2"
    ],
    corequisites: [
        "pharmacology2"
    ],
    passed: false
},

{
    id: "pharmacology3_lab",
    name: "فارماکولوژی 3 ع",
    semester: 6,
    units: 1,
    prerequisites: [
        "pharmacology3"
    ],
    corequisites: [
        "pharmacology3"
    ],
    passed: false
},

{
    id: "medicinal_chemistry1",
    name: "شیمی دارویی 1",
    semester: 6,
    units: 3,
    prerequisites: [
        "organic1",
        "organic2",
        "pharmacology1"
    ],
    corequisites: [],
    passed: false
},

{
    id: "therapy1",
    name: "درمان 1",
    semester: 6,
    units: 3,
    prerequisites: [
        "pharmacology3"
],
    corequisites: [
        "pharmacology3"
    ],
    passed: false
},

{
    id: "pharmaceutics5_lab",
    name: "فارماسیوتیکس 5 ع",
    semester: 6,
    units: 1,
    prerequisites: [
        "pharmaceutics1",
        "pharmaceutics2",
        "pharmaceutics3",
        "pharmaceutics4",
        "pharmaceutics5",
        "pharmaceutics2_lab",
        "pharmaceutics3_lab"
    ],
    corequisites: [
        "pharmaceutics5"
    ],
    passed: false
},

{
    id: "microbial_control",
    name: "کنترل میکروبی",
    semester: 6,
    units: 2,
    prerequisites: [
        "microbiology",
        "pharmaceutics1",
        "pharmaceutics2",
        "pharmaceutics3",
        "pharmaceutics4"
    ],
    corequisites: [],
    passed: false
},

{
    id: "microbial_control_lab",
    name: "کنترل میکروبی ع",
    semester: 6,
    units: 1,
    prerequisites: [
        "microbiology",
        "pharmaceutics1",
        "pharmaceutics2",
        "pharmaceutics3",
        "pharmaceutics4",
        "microbial_control"
    ],
    corequisites: [
        "microbial_control"
    ],
    passed: false
},

{
    id: "biotechnology",
    name: "بیوتکنولوژی",
    semester: 6,
    units: 3,
    prerequisites: [
        "molecular_biology",
        "microbiology"
    ],
    corequisites: [],
    passed: false
},

{
    id: "physical_pharmacy1",
    name: "فیزیکال فارمسی 1",
    semester: 6,
    units: 2,
    prerequisites: [
        "math",
        "pharmaceutics1"
    ],
    corequisites: [],
    passed: false
},

/* ===
   ترم 7
=== */

{
    id: "medicinal_chemistry2",
    name: "شیمی دارویی 2",
    semester: 7,
    units: 3,
    prerequisites: [
        "medicinal_chemistry1"
    ],
    corequisites: [],
    passed: false
},

{
    id: "toxicology",
    name: "سم شناسی",
    semester: 7,
    units: 2,
    prerequisites: [
        "pharmacology3"
    ],
    corequisites: [],
    passed: false
},

{
    id: "essentials",
    name: "ملزومات",
    semester: 7,
    units: 2,
    prerequisites: [
        "physiology1",
        "physiology2",
        "first_aid"
    ],
    corequisites: [],
    passed: false
},

{
    id: "therapy2",
    name: "درمان 2",
    semester: 7,
    units: 3,
    prerequisites: ["therapy1"],
    corequisites: [
        "therapy1"
    ],
    passed: false
},

{
    id: "urban_internship",
    name: "کارآموزی شهری",
    semester: 7,
    units: 2,
    prerequisites: [
        "therapy1"
    ],
    corequisites: [],
    passed: false
},

{
    id: "physical_pharmacy2",
    name: "فیزیکال 2",
    semester: 7,
    units: 2,
    prerequisites: [
        "physical_pharmacy1"
    ],
    corequisites: [],
    passed: false
},

{
    id: "specialized_english",
    name: "زبان تخصصی",
    semester: 7,
    units: 3,
    prerequisites: [
        "general_english"
    ],
    corequisites: [],
    passed: false
},

{
    id: "analysis2",
    name: "آنالیز 2",
    semester: 7,
    units: 2,
    prerequisites: [
        "analysis1"
    ],
    corequisites: [],
    passed: false
},

{
    id: "analysis2_lab",
    name: "آنالیز 2 ع",
    semester: 7,
    units: 1,
    prerequisites: [
        "analytical_chemistry",
        "analytical_chemistry_lab",
        "organic2",
        "organic2_lab",
        "analysis2"
    ],
    corequisites: [
        "analysis2"
    ],
    passed: false
},

/* ===
   ترم 8
=== */

{
    id: "therapy3",
    name: "درمان 3",
    semester: 8,
    units: 3,
    prerequisites: [
        "therapy1"
    ],
    corequisites: [],
    passed: false
},

{
    id: "field1",
    name: "عرصه 1",
    semester: 8,
    units: 3,
    prerequisites: [
        "urban_internship",
        "therapy3"
    ],
    corequisites: [
        "therapy3"
    ],
    passed: false
},

{
    id: "thesis1",
    name: "پایان نامه 1",
    semester: 8,
    units: 2,
    prerequisites: [],
    corequisites: [],
    passed: false,
    minPassedUnits: 140
},

{
    id: "pharmacognosy1",
    name: "گنوزی 1",
    semester: 8,
    units: 2,
    prerequisites: [
        "medicinal_plants"
    ],
    corequisites: [],
    passed: false
},

{
    id: "medicinal_chemistry3",
    name: "شیمی دارویی 3",
    semester: 8,
    units: 3,
    prerequisites: [
        "medicinal_chemistry1"
    ],
    corequisites: [],
    passed: false
},

{
    id: "biopharmaceutics",
    name: "بیوفارمسی",
    semester: 8,
    units: 3,
    prerequisites: [
        "math",
        "pharmaceutics1",
        "pharmacology1"
    ],
    corequisites: [],
    passed: false
},

{
    id: "pharmacy_ethics",
    name: "اخلاق داروسازی",
    semester: 8,
    units: 2,
    prerequisites: [],
    corequisites: [],
    passed: false
},

{
    id: "pharmacognosy1_lab",
    name: "گنوزی عملی",
    semester: 8,
    units: 1,
    prerequisites: [
        "pharmacognosy1"
    ],
    corequisites: ["pharmacognosy1"],
    passed: false
},

{
    id: "therapeutic_regimens",
    name: "رژیم های درمانی",
    semester: 8,
    units: 1,
    prerequisites: [
        "physiology2",
        "pharmacology3",
        "therapy1"
    ],
    corequisites: [],
    passed: false
},

/* ===
   ترم 9
=== */

{
    id: "poison_control",
    name: "کنترل مسمومیت",
    semester: 9,
    units: 2,
    prerequisites: [
        "toxicology",
        "pharmacology3",
        "first_aid"
    ],
    corequisites: [],
    passed: false
},

{
    id: "biological_products",
    name: "فرآورده بیولوژیک",
    semester: 9,
    units: 2,
    prerequisites: [
        "pharmaceutics1",
        "immunology"
    ],
    corequisites: [],
    passed: false
},

{
    id: "field2",
    name: "عرصه 2",
    semester: 9,
    units: 3,
    prerequisites: ["field1"],
    corequisites: ["field1"],
    passed: false
},

{
    id: "hospital_pharmacy",
    name: "داروسازی بیمارستانی",
    semester: 9,
    units: 1,
    prerequisites: ["therapy4"],
    corequisites: ["therapy4"],
    passed: false
},

{
    id: "hospital_pharmacy_internship",
    name: "کارآموزی داروسازی بیمارستانی",
    semester: 9,
    units: 1,
    prerequisites: ["hospital_pharmacy"],
    corequisites: ["hospital_pharmacy"],
    passed: false
},

{
    id: "pharmacognosy2",
    name: "گنوزی 2",
    semester: 9,
    units: 3,
    prerequisites: [
        "pharmacognosy1"
    ],
    corequisites: [],
    passed: false
},

{
    id: "therapy4",
    name: "درمان 4",
    semester: 9,
    units: 2,
    prerequisites: [
        "therapy1"
    ],
    corequisites: [],
    passed: false
},

{
    id: "physicochemical_control",
    name: "کنترل فیزیکوشیمیایی",
    semester: 9,
    units: 2,
    prerequisites: [
        "analytical_chemistry",
        "analysis1",
        "analysis2",
        "pharmaceutics1",
        "pharmaceutics2",
        "pharmaceutics3",
        "pharmaceutics4"
    ],
    corequisites: [],
    passed: false
},

{
    id: "physicochemical_control_lab",
    name: "کنترل فیزیکوشیمیایی ع",
    semester: 9,
    units: 1,
    prerequisites: [
        "analytical_chemistry",
        "analytical_chemistry_lab",
        "analysis1",
        "analysis2",
        "analysis2_lab",
        "pharmaceutics1",
        "pharmaceutics2",
        "pharmaceutics3",
        "pharmaceutics4",
        "pharmaceutics2_lab",
        "pharmaceutics3_lab",
        "pharmaceutics4_lab",
        "physicochemical_control"
    ],
    corequisites: [
        "physicochemical_control"
    ],
    passed: false
},

{
    id: "pharmacognosy2_lab",
    name: "گنوزی 2 ع",
    semester: 9,
    units: 1,
    prerequisites: ["pharmacognosy2"],
    corequisites: [
        "pharmacognosy2"
    ],
    passed: false
},

{
    id: "toxicology_lab",
    name: "سم شناسی ع",
    semester: 9,
    units: 2,
    prerequisites: [
        "pharmacology3_lab",
        "toxicology"
    ],
    corequisites: [
        "toxicology"
    ],
    passed: false
},

/* ===
   ترم 10
=== */

{
    id: "biostatistics",
    name: "آمار حیاتی",
    semester: 10,
    units: 2,
    prerequisites: [
        "math"
    ],
    corequisites: [],
    passed: false
},

{
    id: "food_products",
    name: "مواد خوراکی",
    semester: 10,
    units: 2,
    prerequisites: [
        "basic_biochemistry",
        "analytical_chemistry"
    ],
    corequisites: [],
    passed: false
},

{
    id: "economics",
    name: "اقتصاد",
    semester: 10,
    units: 2,
    prerequisites: [
        "math"
    ],
    corequisites: [],
    passed: false
},

{
    id: "psychology",
    name: "مبانی روانشناسی",
    semester: 10,
    units: 2,
    prerequisites: [],
    corequisites: [],
    passed: false
},

{
    id: "traditional_pharmacy",
    name: "طب سنتی",
    semester: 10,
    units: 2,
    prerequisites: [
        "pharmacognosy1",
        "pharmacognosy2",
        "pharmaceutics1",
        "pharmaceutics2",
        "pharmaceutics3",
        "pharmaceutics4",
        "toxicology",
        "pharmacology1",
        "poison_control"
    ],
    corequisites: [],
    passed: false
},

{
    id: "cosmetic_products",
    name: "فرآورده آرایشی بهداشتی",
    semester: 10,
    units: 2,
    prerequisites: [],
    corequisites: [],
    passed: false
},

{
    id: "culture_civilization",
    name: "فرهنگ و تمدن",
    semester: 10,
    units: 2,
    prerequisites: [],
    corequisites: [],
    passed: false
},

{
    id: "family_knowledge",
    name: "دانش خانواده",
    semester: 10,
    units: 2,
    prerequisites: [],
    corequisites: [],
    passed: false
},

{
    id: "clinical_pharmacology",
    name: "فارماکولوژی بالینی",
    semester: 10,
    units: 2,
    prerequisites: [],
    corequisites: [],
    passed: false
},

{
    id: "thesis2",
    name: "پایان نامه 2",
    semester: 10,
    units: 2,
    prerequisites: [
        "thesis1"
    ],
    corequisites: [],
    passed: false
},

/* ===
   ترم 11
=== */

{
    id: "final_internship",
    name: "کارآموزی عرصه (بالینی یا شهری یا صنایع دارویی)",
    semester: 11,
    units: 2,
    prerequisites: [
        "industry_internship",
        "hospital_pharmacy_internship",
        "field2"
],
    corequisites: ["industry_internship"],
    passed: false
},

{
    id: "quality_assurance",
    name: "مبانی کنترل و تضمین کیفیت",
    semester: 11,
    units: 2,
    prerequisites: [
        "pharmaceutics1",
        "pharmaceutics2",
        "pharmaceutics3",
        "pharmaceutics4",
        "pharmaceutics5",
        "physicochemical_control"
    ],
    corequisites: [],
    passed: false
},

{
    id: "pharmacy_management",
    name: "مدیریت در داروسازی",
    semester: 11,
    units: 2,
    prerequisites: ["economics"],
    corequisites: ["economics"],
    passed: false
},

{
    id: "industry_internship",
    name: "کارآموزی مقدماتی صنعت",
    semester: 11,
    units: 2,
    prerequisites: [
        "pharmaceutics1",
        "pharmaceutics2",
        "pharmaceutics3",
        "pharmaceutics4",
        "pharmaceutics5",
        "physicochemical_control",
        "physicochemical_control_lab",
        "microbial_control",
        "microbial_control_lab"
    ],
    corequisites: [],
    passed: false
},

{
    id: "thesis3",
    name: "پایان نامه 3",
    semester: 11,
    units: 4,
    prerequisites: [
        "thesis1"
    ],
    corequisites: [],
    passed: false
}

];
