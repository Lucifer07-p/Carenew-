
export const streams = [
  {id:"pcm", title:"Science • PCM", short:"Physics + Chemistry + Mathematics", icon:"⚙️", tone:"blue", summary:"Engineering, computing, architecture, physical sciences and technology.", careers:["AI / ML Engineer","Software Engineer","Architect","Data Scientist / Analyst","Cybersecurity Engineer","Cloud / DevOps Engineer","Data Engineer","Product Engineer"], subjects:["Mathematics","Physics","Chemistry"], examGroup:"Engineering & Technology"},
  {id:"pcb", title:"Science • PCB", short:"Physics + Chemistry + Biology", icon:"🧬", tone:"green", summary:"Medicine, dentistry, nursing, pharmacy, physiotherapy and life sciences.", careers:["Doctor / Medical Specialist","Dentist","Pharmacist / Pharmaceutical Professional","Physiotherapist","Biotechnologist / Life-Science Researcher","Nutrition & Dietetics Professional"], subjects:["Biology","Physics","Chemistry"], examGroup:"Medical & Life Sciences"},
  {id:"pcmb", title:"Science • PCMB", short:"Physics + Chemistry + Mathematics + Biology", icon:"🔬", tone:"violet", summary:"A wider science route combining engineering, medicine and interdisciplinary options.", careers:["Biomedical Engineer","Bioinformatics Analyst","Biotechnologist / Life-Science Researcher","Doctor / Medical Specialist","AI / ML Engineer"], subjects:["Mathematics","Physics","Chemistry","Biology"], examGroup:"Medical + Engineering"},
  {id:"commerce", title:"Commerce", short:"Accounts + Business + Economics", icon:"📊", tone:"amber", summary:"Finance, accounting, business, economics, management and entrepreneurship.", careers:["Chartered Accountant (CA)","Financial Analyst / Investment Professional","Economist / Economic Analyst","Business / Management Professional","Marketing & Brand Professional","Entrepreneur / Startup Builder"], subjects:["Accountancy","Business Studies","Economics"], examGroup:"Commerce, Law & Management"},
  {id:"arts", title:"Arts & Humanities", short:"History + Political Science + Psychology", icon:"📚", tone:"rose", summary:"Law, civil services, psychology, social sciences, media and public policy.", careers:["Lawyer / Legal Professional","Civil Services / Public Administration","Psychologist / Mental-Health Research Route","Policy Researcher / Development Professional","Journalist / Media Researcher","Marketing & Brand Professional"], subjects:["History","Political Science","Psychology","Sociology"], examGroup:"Law, Civil Services & Humanities"},
  {id:"vocational", title:"Diploma / Vocational", short:"Polytechnic + ITI + Skill-based routes", icon:"🛠️", tone:"teal", summary:"Hands-on technical and skill-focused routes with options for work, lateral entry and higher study.", careers:["CAD / Design Technician","Automation / PLC Technician","EV / Automotive Technician","Solar / Renewable Energy Technician","IT Support / Network Technician","Industrial Maintenance Technician"], subjects:["Applied Science","Workshop Practice","Technical Drawing"], examGroup:"Diploma & Skill Routes"}
];

export const roadmapStages = [
  {
    id:"foundation", title:"Class 11–12 Foundation", icon:"📘",
    intro:"Build strong school fundamentals first. Keep board concepts, entrance concepts and problem-solving connected.",
    items:[
      {title:"Mathematics", description:"Algebra, trigonometry, coordinate geometry, calculus basics, vectors and problem-solving.", resources:[
        ["JEE Wallah • Mathematics playlists/search","https://www.youtube.com/@JEEWallah/search?query=class%2011%20mathematics%20playlist"],
        ["Physics Wallah • JEE Mathematics","https://www.youtube.com/@PhysicsWallah/search?query=class%2011%20maths%20JEE"],
        ["Mohit Tyagi • Mathematics","https://www.youtube.com/@MohitTyagi/search?query=JEE%20class%2011%20mathematics"],
        ["Maths • chapter-wise lectures","https://www.youtube.com/results?search_query=JEE+Class+11+Mathematics+full+playlist"]
      ]},
      {title:"Physics", description:"Mechanics, properties of matter, thermodynamics, waves, electricity, optics and modern-physics foundations.", resources:[
        ["Physics Wallah • Physics playlists/search","https://www.youtube.com/@PhysicsWallah/search?query=class%2011%20physics%20playlist"],
        ["JEE Wallah • Physics","https://www.youtube.com/@JEEWallah/search?query=class%2011%20physics"],
        ["Physics • chapter-wise lectures","https://www.youtube.com/results?search_query=JEE+Class+11+Physics+full+playlist"],
        ["Physics PYQ practice","https://www.youtube.com/results?search_query=JEE+Physics+PYQ+practice+playlist"]
      ]},
      {title:"Chemistry", description:"Physical, organic and inorganic chemistry with NCERT reading, numericals and reaction practice.", resources:[
        ["Physics Wallah • Chemistry playlists/search","https://www.youtube.com/@PhysicsWallah/search?query=class%2011%20chemistry%20playlist"],
        ["JEE Wallah • Chemistry","https://www.youtube.com/@JEEWallah/search?query=class%2011%20chemistry"],
        ["Organic Chemistry • lectures","https://www.youtube.com/results?search_query=JEE+Organic+Chemistry+full+playlist"],
        ["Physical Chemistry • numericals","https://www.youtube.com/results?search_query=JEE+Physical+Chemistry+full+playlist"],
        ["Inorganic Chemistry • NCERT/JEE","https://www.youtube.com/results?search_query=JEE+Inorganic+Chemistry+full+playlist"]
      ]},
      {title:"Biology", description:"For PCB/PCMB: NCERT-first preparation across cell biology, genetics, human physiology, plant biology and ecology.", resources:[
        ["Physics Wallah • NEET Biology","https://www.youtube.com/@PW-NEETWallah/search?query=class%2011%20biology"],
        ["NEET Biology • chapter-wise","https://www.youtube.com/results?search_query=NEET+Class+11+Biology+full+playlist"],
        ["NCERT Biology explanations","https://www.youtube.com/results?search_query=NCERT+Class+11+Biology+chapter+wise+playlist"]
      ]}
    ]
  },
  {
    id:"entrance", title:"Entrance & Aptitude Preparation", icon:"🎯",
    intro:"Move from concepts to timed practice, previous-year questions, mock tests and exam-specific strategy.",
    items:[
      {title:"JEE Main", description:"National engineering entrance route covering Physics, Chemistry and Mathematics. Use the current NTA information and syllabus for the year you apply.", resources:[
        ["NTA JEE Main official site","https://jeemain.nta.nic.in/"],
        ["JEE Main preparation playlists","https://www.youtube.com/results?search_query=JEE+Main+preparation+full+playlist"],
        ["JEE Main PYQs","https://www.youtube.com/results?search_query=JEE+Main+PYQ+playlist"]
      ]},
      {title:"JEE Advanced", description:"Advanced-level problem solving for IIT admissions. Preparation should go beyond formula recall and include multi-concept problems.", resources:[
        ["JEE Advanced official site","https://jeeadv.ac.in/"],
        ["JEE Advanced problem-solving","https://www.youtube.com/results?search_query=JEE+Advanced+problem+solving+playlist"],
        ["JEE Advanced PYQs","https://www.youtube.com/results?search_query=JEE+Advanced+PYQ+playlist"]
      ]},
      {title:"MHT-CET", description:"Maharashtra state entrance examination for engineering and other professional courses. Check the current CET Cell notification for the exact syllabus and pattern.", resources:[
        ["Maharashtra CET Cell","https://cetcell.mahacet.org/"],
        ["MHT-CET preparation","https://www.youtube.com/results?search_query=MHT+CET+PCM+full+preparation+playlist"],
        ["MHT-CET PYQs","https://www.youtube.com/results?search_query=MHT+CET+PYQ+playlist"]
      ]},
      {title:"NEET-UG", description:"Medical and allied-health entrance route. Biology has a major role, while Physics and Chemistry also require regular practice.", resources:[
        ["NEET official NTA site","https://neet.nta.nic.in/"],
        ["NEET preparation playlists","https://www.youtube.com/results?search_query=NEET+UG+preparation+full+playlist"],
        ["NEET PYQs","https://www.youtube.com/results?search_query=NEET+PYQ+playlist"]
      ]}
    ]
  },
  {
    id:"college", title:"College & Institution Selection", icon:"🏫",
    intro:"Shortlist by eligibility, fees, location, course, placements/research, hostel and the current admission route.",
    items:[
      {title:"Compare course options", description:"Check the exact branch/programme, accreditation where relevant, admission authority, fees and current eligibility before applying.", resources:[
        ["JoSAA","https://josaa.nic.in/"],
        ["CSAB","https://csab.nic.in/"],
        ["CUET","https://cuet.nta.nic.in/"]
      ]},
      {title:"Build a shortlist", description:"Use a balanced list: ambitious choices, realistic choices and safe/alternative choices. Do not rely on one historical cutoff.", resources:[
        ["College list in Pathfinder","/"],
        ["Scholarship section","/"],
        ["What-If simulator","/"]
      ]}
    ]
  },
  {
    id:"career", title:"Career & Life Learning", icon:"🚀",
    intro:"Turn the degree into a skill plan: projects, internships, communication, problem-solving, portfolio and professional exposure.",
    items:[
      {title:"During school / early college", description:"Build fundamentals, communication, digital literacy and one or two practical projects. Keep a record of achievements.", resources:[
        ["Project ideas","https://www.youtube.com/results?search_query=student+engineering+project+ideas"],
        ["Communication skills","https://www.youtube.com/results?search_query=communication+skills+students+playlist"]
      ]},
      {title:"Career exploration", description:"Interview professionals, read course structures and compare actual job responsibilities instead of choosing only by job title.", resources:[
        ["Career exploration videos","https://www.youtube.com/results?search_query=career+exploration+for+students+India"],
        ["National Career Service","https://www.ncs.gov.in/"]
      ]}
    ]
  },
  {
    id:"postgrad", title:"Postgraduate Performance", icon:"🎓",
    intro:"After the undergraduate degree, compare placements, GATE/other entrance routes, MS/MTech/MBA and research options.",
    items:[
      {title:"MTech / MS / MBA decision", description:"Compare the reason for postgraduate study, cost, opportunity cost, admission test, curriculum and career outcomes.", resources:[
        ["GATE official","https://gate2026.iitg.ac.in/"],
        ["Study in India","https://studyinindia.gov.in/"]
      ]},
      {title:"Portfolio & placements", description:"Projects, internships, coding/research/industry skills and communication can complement academic performance.", resources:[
        ["Project portfolio ideas","https://www.youtube.com/results?search_query=engineering+student+portfolio+projects"],
        ["Interview preparation","https://www.youtube.com/results?search_query=engineering+placement+interview+preparation+playlist"]
      ]}
    ]
  },
  {
    id:"specialization", title:"Specialization & Long-Term Growth", icon:"🧭",
    intro:"Choose deeper specialization only after understanding the fundamentals and the type of work you want.",
    items:[
      {title:"AI / ML / Data", description:"Maths, statistics, programming, data structures, machine learning, deep learning, deployment and responsible AI.", resources:[
        ["Machine learning fundamentals","https://www.youtube.com/results?search_query=machine+learning+full+course+playlist"],
        ["Data structures","https://www.youtube.com/results?search_query=data+structures+algorithms+full+course+playlist"],
        ["Python for ML","https://www.youtube.com/results?search_query=Python+for+machine+learning+full+course+playlist"]
      ]},
      {title:"Core / Research / Professional paths", description:"Specialization can also mean domain expertise, research, professional certification or management depending on the pathway.", resources:[
        ["Research skills","https://www.youtube.com/results?search_query=research+skills+students+playlist"],
        ["Professional skills","https://www.youtube.com/results?search_query=professional+skills+students+playlist"]
      ]}
    ]
  }
];


// Stream-specific roadmaps: the pathway, exam mix and skill focus change with the student's stream.
// Official links are included where a current national/state admission authority publishes the route.
export const streamRoadmaps = {
  pcm: [
    {id:"foundation", title:"Class 11–12 PCM Foundation", icon:"📘", intro:"Strengthen Mathematics, Physics and Chemistry for boards while keeping entrance-level problem solving active from the start.", items:[
      {title:"Mathematics Core",description:"Algebra, trigonometry, coordinate geometry, calculus, vectors and daily mixed-problem practice.",resources:[["JEE Main • NTA official","https://jeemain.nta.nic.in/"],["MHT-CET Cell • Engineering","https://cetcell.mahacet.org/"]] },
      {title:"Physics + Numericals",description:"Build mechanics, electricity, optics, modern physics and unit-based numerical solving with error review.",resources:[["JEE Advanced official","https://jeeadv.ac.in/"],["JEE Main official","https://jeemain.nta.nic.in/"]] },
      {title:"Chemistry + NCERT",description:"Balance physical numericals with organic mechanisms and inorganic concepts; keep NCERT reading and reaction revision systematic.",resources:[["JEE Main official","https://jeemain.nta.nic.in/"],["MHT-CET Cell","https://cetcell.mahacet.org/"]] },
      {title:"Board + Entrance Balance",description:"Use a weekly split for board writing, timed entrance questions, PYQs and one mock-review session instead of studying the two tracks separately.",resources:[["NTA official","https://www.nta.ac.in/"]] }
    ]},
    {id:"entrance", title:"Engineering Entrance Track", icon:"🎯", intro:"Choose the engineering exams that match your college list: JEE, Maharashtra CET and selected institute tests.", items:[
      {title:"JEE Main → JEE Advanced",description:"Use JEE Main for NIT/IIIT and other participating institutes and, when eligible, build the deeper problem-solving level required for JEE Advanced and IIT admission.",resources:[["JEE Main official","https://jeemain.nta.nic.in/"],["JEE Advanced official","https://jeeadv.ac.in/"]] },
      {title:"MHT-CET PCM",description:"For Maharashtra engineering options, follow the current CET Cell syllabus, attempts, CAP and allotment notices for the admission year.",resources:[["Maharashtra CET Cell","https://cetcell.mahacet.org/"],["2026–27 FE Engineering portal","https://fe2026.mahacet.org/"]] },
      {title:"BITSAT / VITEEE / Institute Tests",description:"Add institute-specific tests only when the target college is genuinely on your list; track each institute's current application window separately.",resources:[["BITS Admissions","https://www.bitsadmission.com/"],["VIT Engineering Admissions","https://viteee.vit.ac.in/"]] },
      {title:"Architecture as a parallel option",description:"Students who enjoy maths plus design can also compare B.Arch routes and the current NATA process instead of treating engineering as the only PCM outcome.",resources:[["Council of Architecture / NATA","https://coa.gov.in/"]] }
    ]},
    {id:"college", title:"Engineering College & Branch Selection", icon:"🏫", intro:"Compare the branch, institute, total cost, location, campus experience and career fit before filling choices.", items:[
      {title:"Branch fit first",description:"Compare CSE/IT, ECE, Electrical, Mechanical, Civil and other branches using the work you actually enjoy, not only the college label.",resources:[["JoSAA","https://josaa.nic.in/"],["Maharashtra CAP","https://cetcell.mahacet.org/"]] },
      {title:"Maharashtra CAP choices",description:"Build a choice list across ambitious, realistic and safer options, then verify current CAP rounds and vacancy notices.",resources:[["MHT-CET CAP 2026–27","https://cetcell.mahacet.org/cap-_2026-27/"]] },
      {title:"Cost + location check",description:"Estimate tuition, hostel, travel, living costs and scholarship support before comparing colleges with very different fee structures.",resources:[["College comparison in Pathfinder","/"]] },
      {title:"Portfolio before college",description:"A small coding, electronics, design or maths project can help you test whether a branch feels right before you commit.",resources:[["Student project ideas","https://www.youtube.com/results?search_query=engineering+student+project+ideas"]] }
    ]},
    {id:"career", title:"Engineering Skills & Projects", icon:"🚀", intro:"Turn the degree into evidence: projects, internships, tools and communication that match the branch you finally choose.", items:[
      {title:"Programming / Computing",description:"For CSE and allied branches: build Python/C++, Git, data structures, SQL and two end-to-end projects before chasing many certificates.",resources:[["National Career Service","https://www.ncs.gov.in/"]] },
      {title:"Core Engineering Tools",description:"For ECE/EE/ME/Civil and related paths, add labs, CAD/simulation, embedded systems, manufacturing, structures or domain-specific software.",resources:[["National Career Service","https://www.ncs.gov.in/"]] },
      {title:"Internships + Summer Work",description:"Use internships, hackathons, labs, open-source work and college clubs to test a domain before specializing too early.",resources:[["AICTE Internship Portal","https://internship.aicte-india.org/"]] },
      {title:"Communication + Portfolio",description:"Maintain a simple portfolio with projects, outcomes, screenshots, reports and a concise resume.",resources:[["National Career Service","https://www.ncs.gov.in/"]] }
    ]},
    {id:"postgrad", title:"After B.Tech / B.E.", icon:"🎓", intro:"At the end of the degree, compare work, GATE-based higher study, MBA, research and international study based on your goal.", items:[
      {title:"Job-first path",description:"Use placements, internships, referrals, project depth and interview preparation to move directly into industry.",resources:[["National Career Service","https://www.ncs.gov.in/"]] },
      {title:"GATE → M.Tech / Research",description:"If deeper technical study or selected postgraduate routes fit your plan, monitor the current GATE cycle and institute requirements.",resources:[["GATE official 2026","https://gate2026.iitg.ac.in/"]] },
      {title:"MBA / Management",description:"Students shifting toward product, consulting, finance or business can compare management entrance pathways after the degree.",resources:[["CAT / IIM admissions overview","https://iimcat.ac.in/"]] },
      {title:"MS / International study",description:"Compare tuition, visa rules, prerequisites, funding and programme outcomes rather than selecting solely by country name.",resources:[["Study in India","https://studyinindia.gov.in/"]] }
    ]},
    {id:"specialization", title:"Specialization & Long-Term Direction", icon:"🧭", intro:"Choose a specialization only after sampling the work: AI, software, electronics, robotics, energy, design, research or management.", items:[
      {title:"AI / Data / Software",description:"Build stronger coding, statistics, ML and systems knowledge after confirming that you enjoy sustained technical problem solving.",resources:[["National Career Service","https://www.ncs.gov.in/"]] },
      {title:"Electronics / Embedded / Robotics",description:"Combine circuits, microcontrollers, control and programming with real hardware projects.",resources:[["National Career Service","https://www.ncs.gov.in/"]] },
      {title:"Core + Sustainability",description:"Energy, manufacturing, infrastructure, mobility and climate-related roles can be developed through core engineering plus a domain specialization.",resources:[["National Career Service","https://www.ncs.gov.in/"]] },
      {title:"Research / Entrepreneurship",description:"Use final-year projects, labs, publications, startup experiments or incubators to test a research or founder path.",resources:[["Startup India","https://www.startupindia.gov.in/"]] }
    ]}
  ],

  pcb: [
    {id:"foundation", title:"Class 11–12 PCB Foundation", icon:"📘", intro:"Build NCERT-first Biology with strong Chemistry and Physics, while protecting board performance and practical understanding.", items:[
      {title:"Biology • NCERT First",description:"Master cell biology, genetics, physiology, diversity, ecology and diagrams through repeated active recall and NCERT-based revision.",resources:[["NEET-UG official 2026","https://neet.nta.nic.in/2026/"]] },
      {title:"Physics for Biology Students",description:"Focus on mechanics, electricity, optics, modern physics and regular numericals instead of leaving Physics for the end.",resources:[["NEET-UG official","https://neet.nta.nic.in/"]] },
      {title:"Chemistry: Three Parts",description:"Keep physical, organic and inorganic chemistry moving together with NCERT, concept sheets and PYQs.",resources:[["NEET-UG official","https://neet.nta.nic.in/"]] },
      {title:"Practical + Board Strength",description:"Use school practicals, diagrams, lab observations and answer-writing practice as a parallel advantage for boards and science degrees.",resources:[["NTA","https://www.nta.ac.in/"]] }
    ]},
    {id:"entrance", title:"Medical & Life-Science Entrance Track", icon:"🩺", intro:"Build the main medical pathway first, then add life-science and agriculture routes that fit your preferred study style.", items:[
      {title:"NEET-UG",description:"NEET-UG is the current national entrance route for undergraduate medical education and is also applicable to BAMS/BUMS/BSMS and BHMS under the notified frameworks.",resources:[["NEET-UG official 2026","https://neet.nta.nic.in/2026/"]] },
      {title:"MHT-CET PCB Options",description:"For Maharashtra, compare current PCB-group professional-course routes with the state CET Cell and verify the exact programme rules for the admission year.",resources:[["Maharashtra CET Cell","https://cetcell.mahacet.org/"]] },
      {title:"Agriculture / Allied Sciences",description:"If you like biology but not clinical medicine, compare agriculture, food, biotechnology and allied science programmes and their current admission routes.",resources:[["ICAR admissions","https://icar.nta.nic.in/"]] },
      {title:"CUET-UG Life Sciences",description:"For BSc and multidisciplinary university routes, check current CUET participating universities and the programme-wise subject requirements.",resources:[["CUET-UG official","https://cuet.nta.nic.in/"]] }
    ]},
    {id:"college", title:"Medical / Science College Selection", icon:"🏥", intro:"Compare the learning environment, course structure, fees, location, labs or clinical exposure and the next qualification required.", items:[
      {title:"MBBS / BDS / AYUSH",description:"Compare clinical exposure, hospital attachment, fees, location, seat type and the postgraduate pathway that follows the degree.",resources:[["NEET-UG official","https://neet.nta.nic.in/"]] },
      {title:"Nursing / Pharmacy / Physiotherapy",description:"Review patient-contact level, labs, internships, registration pathway and local employment options before choosing an allied-health degree.",resources:[["Maharashtra CET Cell","https://cetcell.mahacet.org/"]] },
      {title:"BSc / Biotech / Microbiology",description:"Compare laboratory intensity, research projects, honours structure and progression to MSc, specialised training or industry.",resources:[["CUET-UG participating universities","https://cuet.nta.nic.in/participating-universities/"]] },
      {title:"Cost + location",description:"Include hostel, travel, lab costs and living expenses; a lower annual fee can still be expensive if living costs are high.",resources:[["Institution Explorer","/"]] }
    ]},
    {id:"career", title:"Clinical, Lab & Health Skills", icon:"🧪", intro:"Build the practical habits that distinguish strong science students: observation, lab discipline, communication and evidence-based thinking.", items:[
      {title:"Clinical communication",description:"For health pathways, develop patient communication, teamwork and disciplined documentation alongside academics.",resources:[["National Career Service","https://www.ncs.gov.in/"]] },
      {title:"Laboratory skills",description:"For biotech, microbiology and biochemistry routes, build pipetting awareness, lab safety, data recording and basic bioinformatics exposure.",resources:[["National Career Service","https://www.ncs.gov.in/"]] },
      {title:"Research reading",description:"Learn to read abstracts, methods and simple data tables so you can judge research evidence instead of only memorising conclusions.",resources:[["National Career Service","https://www.ncs.gov.in/"]] },
      {title:"Internship / volunteering",description:"Where appropriate, use supervised exposure to hospitals, labs, public-health or community work to test the environment you actually enjoy.",resources:[["National Career Service","https://www.ncs.gov.in/"]] }
    ]},
    {id:"postgrad", title:"Postgraduate & Specialisation Route", icon:"🎓", intro:"Healthcare and life-science pathways usually widen after graduation: clinical specialisation, research, public health or industry.", items:[
      {title:"Clinical specialisation",description:"Plan for the postgraduate entrance and registration rules that apply to your chosen professional degree; always use the current authority notice.",resources:[["NEET-UG official","https://neet.nta.nic.in/"]] },
      {title:"MSc / Research",description:"BSc students can build into MSc, research assistant roles, specialised labs and eventually doctoral study.",resources:[["National Career Service","https://www.ncs.gov.in/"]] },
      {title:"Public Health",description:"Biology and health graduates can explore epidemiology, community health, health programmes and public-health higher study.",resources:[["National Career Service","https://www.ncs.gov.in/"]] },
      {title:"Pharma / Biotech Industry",description:"Quality, clinical research, regulatory, manufacturing and biotech roles can be compared through the course outcomes and internship exposure.",resources:[["National Career Service","https://www.ncs.gov.in/"]] }
    ]},
    {id:"specialization", title:"Health & Life-Science Direction", icon:"🧭", intro:"Decide between direct patient care, laboratory work, field health, agriculture, pharma and research by comparing day-to-day work.", items:[
      {title:"Patient-facing path",description:"Medicine, dentistry, nursing and therapy routes suit students who want sustained patient interaction and clinical responsibility.",resources:[["NEET-UG official","https://neet.nta.nic.in/"]] },
      {title:"Lab / Research path",description:"Biotechnology, microbiology, biochemistry and life-science routes can lead toward laboratories, research and specialised postgraduate study.",resources:[["National Career Service","https://www.ncs.gov.in/"]] },
      {title:"Agriculture / Environment",description:"Agriculture, food science and environmental pathways combine biology with field systems, production and sustainability problems.",resources:[["ICAR","https://icar.nta.nic.in/"]] },
      {title:"Health-tech crossover",description:"Students who also enjoy mathematics or technology can compare bioinformatics, biomedical engineering and digital-health routes.",resources:[["National Career Service","https://www.ncs.gov.in/"]] }
    ]}
  ],

  pcmb: [
    {id:"foundation", title:"Class 11–12 PCMB Foundation", icon:"📘", intro:"Keep four subjects alive without trying to prepare every competitive exam at full intensity. Build a strong academic base first.", items:[
      {title:"PCM Core",description:"Maintain mathematics and physics problem solving with a steady chemistry revision loop for engineering options.",resources:[["JEE Main official","https://jeemain.nta.nic.in/"]] },
      {title:"PCB Core",description:"Keep Biology NCERT, diagrams, human physiology, genetics and ecology active for medical and life-science options.",resources:[["NEET-UG official","https://neet.nta.nic.in/2026/"]] },
      {title:"Board + Practical Control",description:"Use weekly planning so all four subjects get revision and practical attention instead of one side consistently taking over.",resources:[["NTA","https://www.nta.ac.in/"]] },
      {title:"Decision checkpoints",description:"Review your strongest subjects and preferred work style each term; PCMB is valuable because it keeps more doors open, not because every exam must be attempted.",resources:[["Pathfinder What-If Simulator","/simulator"]] }
    ]},
    {id:"entrance", title:"Dual Entrance Strategy", icon:"🎯", intro:"Choose a primary exam track and a backup track instead of creating four full-scale preparation plans at once.", items:[
      {title:"JEE Main / Advanced",description:"Use the PCM side for engineering and technology colleges, with deeper JEE Advanced work only when IITs are genuinely in your list.",resources:[["JEE Main","https://jeemain.nta.nic.in/"],["JEE Advanced","https://jeeadv.ac.in/"]] },
      {title:"NEET-UG",description:"Use the PCB side for medical education and compare clinical pathways with life-science alternatives before locking your list.",resources:[["NEET-UG 2026","https://neet.nta.nic.in/2026/"]] },
      {title:"MHT-CET PCM + PCB",description:"For Maharashtra, compare the current PCM/PCB group routes and course-wise eligibility through the State CET Cell.",resources:[["Maharashtra CET Cell","https://cetcell.mahacet.org/"]] },
      {title:"Flexible university routes",description:"Keep CUET-UG in the plan for participating universities and multidisciplinary science programmes when it fits your target list.",resources:[["CUET-UG","https://cuet.nta.nic.in/"]] }
    ]},
    {id:"college", title:"Branch / Degree Decision", icon:"🏫", intro:"PCMB creates a real decision point: clinical, engineering, life-science or an interdisciplinary path. Compare actual programme work before choosing.", items:[
      {title:"Engineering vs Medicine",description:"Write down the workday, training length, cost, location and specialisation path for each before looking at college names.",resources:[["Institution Explorer","/institutions"]] },
      {title:"Engineering + Bio crossover",description:"Compare biomedical engineering, bioinformatics, biotechnology and health-tech routes when both technology and biology remain strong interests.",resources:[["National Career Service","https://www.ncs.gov.in/"]] },
      {title:"Life sciences without MBBS",description:"Biotech, microbiology, biochemistry and research degrees can be strong science routes when you prefer laboratory work over clinical training.",resources:[["CUET-UG participating universities","https://cuet.nta.nic.in/participating-universities/"]] },
      {title:"Cost + location",description:"Create a total 3–5 year estimate including tuition, hostel, travel and test-preparation costs before deciding between distant colleges.",resources:[["Scholarships & Loans","/funding"]] }
    ]},
    {id:"career", title:"Interdisciplinary Skill Build", icon:"🧬", intro:"PCMB students can build a portfolio that proves they can connect two disciplines rather than keeping four disconnected subject notebooks.", items:[
      {title:"Data + Biology",description:"Try statistics, Python and simple biological datasets to test bioinformatics and health-data interests.",resources:[["National Career Service","https://www.ncs.gov.in/"]] },
      {title:"Engineering + Biology",description:"Build a small biomedical, sensor or assistive-technology project and document the science behind it.",resources:[["Student project ideas","https://www.youtube.com/results?search_query=biomedical+engineering+student+project+ideas"]] },
      {title:"Research reading",description:"Practice reading scientific figures, methods and limitations so you can evaluate cross-disciplinary evidence.",resources:[["National Career Service","https://www.ncs.gov.in/"]] },
      {title:"Communication",description:"Learn to explain a technical or biological idea to a non-specialist — useful across science, health and technology careers.",resources:[["National Career Service","https://www.ncs.gov.in/"]] }
    ]},
    {id:"postgrad", title:"Postgraduate Route", icon:"🎓", intro:"Choose the postgraduate route that matches the degree you selected: technical, clinical, life-science, management or research.", items:[
      {title:"Technical higher study",description:"Engineering graduates can compare GATE, M.Tech/MS, research and management routes based on the problem area they want to work on.",resources:[["GATE 2026","https://gate2026.iitg.ac.in/"]] },
      {title:"Clinical specialisation",description:"Professional health degrees have their own postgraduate and registration rules; use the current professional authority notices.",resources:[["NEET-UG official","https://neet.nta.nic.in/"]] },
      {title:"MSc / Research",description:"Science graduates can progress through specialised MSc, research projects and doctoral study when long-form investigation suits them.",resources:[["National Career Service","https://www.ncs.gov.in/"]] },
      {title:"Management crossover",description:"Students moving from science to business can compare MBA and integrated management directions after building a strong undergraduate base.",resources:[["IIM / CAT","https://iimcat.ac.in/"]] }
    ]},
    {id:"specialization", title:"Choose Your Combination", icon:"🧭", intro:"Specialise after evidence: health-tech, AI, biotech, medicine, engineering, research or another combination that fits your strengths.", items:[
      {title:"AI + Healthcare",description:"Statistics, ML, clinical context and data governance can combine into a health-tech direction.",resources:[["National Career Service","https://www.ncs.gov.in/"]] },
      {title:"Biomedical / Devices",description:"Combine biology with electronics, mechanics and design to explore devices, diagnostics and rehabilitation technologies.",resources:[["National Career Service","https://www.ncs.gov.in/"]] },
      {title:"Biotech / Genomics",description:"Use lab science plus computational skills to explore modern biotechnology and genomics research directions.",resources:[["National Career Service","https://www.ncs.gov.in/"]] },
      {title:"Clinical / Public Health",description:"If people-facing impact remains strongest, compare clinical training with public-health and health-programme routes.",resources:[["NEET-UG official","https://neet.nta.nic.in/"]] }
    ]}
  ],

  commerce: [
    {id:"foundation", title:"Class 11–12 Commerce Foundation", icon:"📘", intro:"Build accounting accuracy, business understanding, economics and communication while deciding whether mathematics stays central to your pathway.", items:[
      {title:"Accountancy",description:"Build journal, ledger, financial statements and error-checking habits; accuracy is more valuable than speed at the start.",resources:[["ICAI Students","https://www.icai.org/category/students"]] },
      {title:"Business Studies",description:"Connect management concepts to real companies, decision-making, operations and markets rather than learning definitions only.",resources:[["National Career Service","https://www.ncs.gov.in/"]] },
      {title:"Economics + Data",description:"Use graphs, percentages, basic statistics and current business examples to make economics more practical.",resources:[["National Career Service","https://www.ncs.gov.in/"]] },
      {title:"Maths / Applied Quant",description:"Keep mathematics strong when targeting finance, economics, analytics, BBA/BMS or management entrances that reward quantitative ability.",resources:[["CUET-UG official","https://cuet.nta.nic.in/"]] }
    ]},
    {id:"entrance", title:"Commerce Entrance & Professional Track", icon:"🎯", intro:"Choose between university entrances, professional qualifications and management/law routes based on the kind of work you want.", items:[
      {title:"CUET-UG",description:"Use CUET-UG for participating central, state, deemed and private universities; check the current university and programme subject rules.",resources:[["CUET-UG 2026","https://cuet.nta.nic.in/"]]},
      {title:"CA Foundation",description:"The current ICAI Foundation scheme includes Accounting, Business Laws, Quantitative Aptitude and Business Economics; follow ICAI's current exam notices and study material.",resources:[["ICAI Students","https://www.icai.org/category/students"],["ICAI 2026 Foundation syllabus","https://www.icai.org/"]] },
      {title:"IPMAT / Integrated Management",description:"Compare current IIM integrated-management programmes and their institute-specific eligibility and test process.",resources:[["IIM Indore","https://www.iimidr.ac.in/"],["IIM Rohtak","https://www.iimrohtak.ac.in/"]] },
      {title:"CLAT / Law crossover",description:"Commerce students can also compare integrated law using CLAT when legal/business work is more attractive than accounting.",resources:[["CLAT official","https://consortiumofnlus.ac.in/"]] }
    ]},
    {id:"college", title:"College, Course & Cost Selection", icon:"🏫", intro:"Compare B.Com, BBA/BMS, Economics, Finance, Law and professional routes using the total cost and next-step requirement.", items:[
      {title:"B.Com / B.Com Honours",description:"Compare accounting depth, economics, analytics, internships and the professional qualification you might pair with the degree.",resources:[["CUET-UG participating universities","https://cuet.nta.nic.in/participating-universities/"]] },
      {title:"BBA / BMS / Management",description:"Check the curriculum for marketing, finance, operations, analytics and entrepreneurship instead of choosing only by the BBA label.",resources:[["Maharashtra CET Cell","https://cetcell.mahacet.org/"]] },
      {title:"Economics / Finance / Analytics",description:"These routes can be math-heavy; check the actual programme structure, subject requirements and your comfort with quantitative study.",resources:[["CUET-UG","https://cuet.nta.nic.in/"]] },
      {title:"Professional route + degree",description:"Plan how B.Com/BBA/B.A. pairs with CA, CMA, CS, CFA-style preparation, law or an MBA while keeping workload realistic.",resources:[["ICAI Students","https://www.icai.org/category/students"]]}
    ]},
    {id:"career", title:"Business Skills & Experience", icon:"📊", intro:"Build practical proof: spreadsheets, accounting software, communication, presentations, data analysis, sales or a small business project.", items:[
      {title:"Excel / Financial Analysis",description:"Learn spreadsheet models, charts, pivots and basic financial analysis through projects instead of isolated tutorials.",resources:[["National Career Service","https://www.ncs.gov.in/"]] },
      {title:"Communication + Presentation",description:"Practice concise business writing, presentations, negotiation and professional email skills.",resources:[["National Career Service","https://www.ncs.gov.in/"]] },
      {title:"Internships / Commerce projects",description:"Try bookkeeping, market research, digital marketing, operations or entrepreneurship experiences to identify the work you enjoy.",resources:[["AICTE Internship Portal","https://internship.aicte-india.org/"]] },
      {title:"Personal finance literacy",description:"Budgeting, taxes, credit, insurance and investing basics help commerce students connect classroom concepts with daily decisions.",resources:[["SEBI Investor","https://investor.sebi.gov.in/"]] }
    ]},
    {id:"postgrad", title:"Professional Qualification & Higher Study", icon:"🎓", intro:"After the first degree, compare professional credentials, MBA, specialised masters and direct employment based on the direction you want.", items:[
      {title:"CA / CMA / CS",description:"Use the professional institute's current scheme, registration and exam notices instead of relying on old syllabus information.",resources:[["ICAI Students","https://www.icai.org/category/students"]] },
      {title:"MBA / Management",description:"Compare CAT and other current management admission routes by programme fit, total cost and career direction.",resources:[["CAT official","https://iimcat.ac.in/"]] },
      {title:"M.Com / Economics / Finance",description:"Higher study can deepen accounting, economics, analytics or finance and can support research or specialised roles.",resources:[["CUET-UG","https://cuet.nta.nic.in/"]] },
      {title:"Job-first pathway",description:"Build a strong resume, internship evidence and interview practice when work experience is more valuable to your immediate plan.",resources:[["National Career Service","https://www.ncs.gov.in/"]] }
    ]},
    {id:"specialization", title:"Finance, Business & Entrepreneurship", icon:"🧭", intro:"Choose a business direction by comparing the work: accounting, finance, analytics, marketing, HR, operations, consulting or entrepreneurship.", items:[
      {title:"Finance / Accounting",description:"Ideal for students who enjoy numbers, rules, statements and analytical decision-making; pair the degree with relevant internships or credentials.",resources:[["ICAI Students","https://www.icai.org/category/students"]] },
      {title:"Business Analytics",description:"Add statistics, spreadsheets, SQL and dashboards to a commerce base when you enjoy evidence-driven business decisions.",resources:[["National Career Service","https://www.ncs.gov.in/"]] },
      {title:"Marketing / HR / Operations",description:"Communication, customer understanding, process thinking and people skills matter alongside the business degree.",resources:[["National Career Service","https://www.ncs.gov.in/"]] },
      {title:"Entrepreneurship",description:"Test an idea with a small pilot, customer interviews, basic unit economics and a simple cash-flow plan before scaling.",resources:[["Startup India","https://www.startupindia.gov.in/"]] }
    ]}
  ],

  arts: [
    {id:"foundation", title:"Class 11–12 Humanities Foundation", icon:"📘", intro:"Build strong reading, writing, argument, evidence and communication skills across history, civics, psychology, sociology and languages.", items:[
      {title:"History + Evidence",description:"Learn chronology, causation, primary/secondary sources and structured answer writing instead of memorising isolated dates.",resources:[["NCERT","https://ncert.nic.in/"]] },
      {title:"Political Science + Civics",description:"Connect constitutional ideas, institutions, rights and public policy with current examples and careful source checking.",resources:[["NCERT","https://ncert.nic.in/"]] },
      {title:"Psychology / Sociology",description:"Use concepts, case examples and research-method basics to understand behaviour and society.",resources:[["National Career Service","https://www.ncs.gov.in/"]] },
      {title:"Language + Writing",description:"Build strong comprehension, essay writing, speaking and presentation skills — useful in almost every humanities pathway.",resources:[["National Career Service","https://www.ncs.gov.in/"]] }
    ]},
    {id:"entrance", title:"Humanities Entrance & Aptitude Track", icon:"🎯", intro:"Humanities students can choose university, law, design, management or public-service directions — the entrance route depends on the target programme.", items:[
      {title:"CUET-UG",description:"Use CUET-UG for participating universities and compare the subject combination required by each programme.",resources:[["CUET-UG official 2026","https://cuet.nta.nic.in/"]]},
      {title:"CLAT / Integrated Law",description:"If you enjoy reading, argument and public issues, compare five-year integrated law using the current Consortium rules.",resources:[["CLAT official","https://consortiumofnlus.ac.in/"]] },
      {title:"Design: NID / UCEED",description:"Design is also open through dedicated routes; UCEED 2026 allows Class XII candidates from science, commerce and arts/humanities streams to appear, while NID uses its current DAT process.",resources:[["NID Admissions 2026–27","https://admissions.nid.edu/"],["UCEED 2026","https://www.uceed.iitb.ac.in/2026/"]] },
      {title:"Management / IPMAT",description:"Students interested in business can compare institute-specific integrated-management entrances where eligibility allows.",resources:[["IIM Indore","https://www.iimidr.ac.in/"]] }
    ]},
    {id:"college", title:"Degree & Institution Selection", icon:"🏫", intro:"Compare the curriculum, faculty access, internships, research culture, location, fees and the next qualification each course normally leads toward.", items:[
      {title:"BA / BA Honours",description:"Compare the actual major/minor combination and research methods taught, not just the college name.",resources:[["CUET-UG participating universities","https://cuet.nta.nic.in/participating-universities/"]] },
      {title:"Law / Public Policy",description:"Look at moot courts, internships, policy societies, clinics and the pathway to legal or policy work.",resources:[["CLAT official","https://consortiumofnlus.ac.in/"]] },
      {title:"Psychology / Social Science",description:"Compare research-method training, internships and the postgraduate qualification required for the professional role you want.",resources:[["National Career Service","https://www.ncs.gov.in/"]] },
      {title:"College fit + cost",description:"Compare location, travel, hostel, student clubs, language environment and total study cost before choosing between similar programmes.",resources:[["Institution Explorer","/institutions"]]}
    ]},
    {id:"career", title:"Writing, Research & Public-Facing Skills", icon:"📝", intro:"Humanities becomes career-ready when students turn reading and ideas into visible work: writing, research, communication, digital media and field experience.", items:[
      {title:"Research + Source Literacy",description:"Practice finding primary documents, credible datasets and official reports; keep notes with links so your claims remain traceable.",resources:[["National Career Service","https://www.ncs.gov.in/"]] },
      {title:"Writing Portfolio",description:"Build essays, policy notes, articles, reviews, scripts or case studies that show clear thinking and editing.",resources:[["National Career Service","https://www.ncs.gov.in/"]] },
      {title:"Media / Communication",description:"Try content, journalism, podcasting, event communication or public-speaking projects to test your strongest medium.",resources:[["National Career Service","https://www.ncs.gov.in/"]] },
      {title:"Internships / Volunteering",description:"Use NGOs, research groups, campus organisations or community projects to learn how real organisations operate.",resources:[["National Career Service","https://www.ncs.gov.in/"]] }
    ]},
    {id:"postgrad", title:"Higher Study & Public-Service Direction", icon:"🎓", intro:"Many humanities careers become more specialised after graduation, so plan the next qualification or exam early enough to make the final year useful.", items:[
      {title:"MA / Research",description:"Compare subject specialisation, research methods and academic options when you want deeper study or research work.",resources:[["CUET-UG","https://cuet.nta.nic.in/"]] },
      {title:"Civil Services / MPSC",description:"After graduation, students can compare UPSC Civil Services or Maharashtra public-service examinations using the current official notifications.",resources:[["UPSC","https://upsc.gov.in/"],["MPSC","https://mpsc.gov.in/"]] },
      {title:"Law after another degree",description:"Graduates who later decide on law can compare the applicable three-year LLB route at universities and state systems.",resources:[["Maharashtra CET Cell","https://cetcell.mahacet.org/"]] },
      {title:"Communication / Media",description:"Build a specialised portfolio through journalism, communication, digital media or public-policy programmes.",resources:[["National Career Service","https://www.ncs.gov.in/"]] }
    ]},
    {id:"specialization", title:"Choose a Humanities Direction", icon:"🧭", intro:"Choose based on the problems you want to work on: people, law, public systems, media, behaviour, culture, policy or creative work.", items:[
      {title:"Law & Public Policy",description:"Strong reading, argument and evidence skills can support legal and policy-focused study.",resources:[["CLAT official","https://consortiumofnlus.ac.in/"]] },
      {title:"Psychology / Behaviour",description:"If you enjoy people and research, compare psychology with the postgraduate qualifications needed for the professional role you want.",resources:[["National Career Service","https://www.ncs.gov.in/"]] },
      {title:"Media / Creative Work",description:"Build a visible portfolio in writing, design, video, journalism or communications and test it through internships.",resources:[["National Career Service","https://www.ncs.gov.in/"]] },
      {title:"Civil Services / Public Systems",description:"Public administration, policy reading, geography, economics and current affairs can become a structured long-term preparation base.",resources:[["UPSC","https://upsc.gov.in/"]] }
    ]}
  ],

  vocational: [
    {id:"foundation", title:"School + Skill Foundation", icon:"📘", intro:"Build numeracy, communication, safety, digital literacy and hands-on confidence while identifying the trade or technical area you enjoy.", items:[
      {title:"Applied Mathematics",description:"Focus on measurement, percentages, basic algebra, estimation and trade-specific calculations.",resources:[["DTE Maharashtra technical courses","https://ugpg26.dtemaharashtra.gov.in/"]] },
      {title:"Workshop / Practical Skills",description:"Practice tools, drawing, safety, measurement and process discipline with real hands-on work.",resources:[["DVET Maharashtra","https://www.dvet.gov.in/"]] },
      {title:"Digital Basics",description:"Learn file management, spreadsheets, documentation and the digital tools used in modern workshops and workplaces.",resources:[["National Career Service","https://www.ncs.gov.in/"]] },
      {title:"Communication + Safety",description:"Technical careers depend on clear instructions, documentation, teamwork and safe work habits as much as tool skill.",resources:[["National Career Service","https://www.ncs.gov.in/"]] }
    ]},
    {id:"entrance", title:"Trade / Diploma Admission Track", icon:"🎯", intro:"Select the route that matches your starting qualification: ITI, diploma/polytechnic or approved technical degree programmes.", items:[
      {title:"Maharashtra ITI Admission",description:"Maharashtra's centralized online ITI admission process is run through DVET; follow the current 2026 portal and notices for trade choices and dates.",resources:[["DVET Maharashtra ITI Admission 2026","https://admission.dvet.gov.in/"]] },
      {title:"Diploma / Polytechnic CAP",description:"Maharashtra publishes a current diploma admission brochure and centralized process; compare branch, institute and later lateral-entry options.",resources:[["Maharashtra Diploma Admissions 2026–27","https://poly26.dtemaharashtra.gov.in/"]] },
      {title:"B.Voc / Skill Degree",description:"Compare university-level applied vocational degrees when you want a degree plus strong practical exposure.",resources:[["DTE Maharashtra","https://ugpg26.dtemaharashtra.gov.in/"]] },
      {title:"Direct work / apprenticeship",description:"Some trades can move from training into apprenticeship or entry-level work; compare this against the value of a diploma or degree for your goal.",resources:[["National Apprenticeship Portal","https://www.apprenticeshipindia.gov.in/"]] }
    ]},
    {id:"college", title:"Training Centre & Course Selection", icon:"🏫", intro:"Compare workshop quality, equipment, certification, travel, cost, placement/apprenticeship support and progression to higher study.", items:[
      {title:"Trade fit",description:"Compare electrician, fitter, electronics, IT, mechanical, beauty/wellness, design and other trades by the work you enjoy doing.",resources:[["DVET Maharashtra","https://www.dvet.gov.in/"]] },
      {title:"Equipment + Workshop",description:"Check whether students actually get practical time on relevant equipment, not only theory hours.",resources:[["DVET Maharashtra","https://www.dvet.gov.in/"]] },
      {title:"Industry linkage",description:"Ask about apprenticeships, employer connections, practical projects and certification before choosing a private centre.",resources:[["Apprenticeship India","https://www.apprenticeshipindia.gov.in/"]] },
      {title:"Progression route",description:"Compare immediate work, advanced certification, diploma, B.Voc and lateral-entry degree options so today's choice does not close tomorrow's options.",resources:[["DTE Maharashtra","https://ugpg26.dtemaharashtra.gov.in/"]] }
    ]},
    {id:"career", title:"Work-Ready Skill Build", icon:"🛠️", intro:"The strongest vocational portfolios show safe execution, quality, reliability and evidence of real projects.", items:[
      {title:"Trade project",description:"Complete a small project that shows planning, materials, process, testing and final output.",resources:[["National Career Service","https://www.ncs.gov.in/"]] },
      {title:"Apprenticeship / On-the-job learning",description:"Use supervised workplace exposure to learn time discipline, documentation, safety and team behaviour.",resources:[["Apprenticeship India","https://www.apprenticeshipindia.gov.in/"]] },
      {title:"Digital + Technical tools",description:"Add the software, CAD, PLC, digital measurement or documentation skills that employers in your trade actually use.",resources:[["National Career Service","https://www.ncs.gov.in/"]] },
      {title:"Resume + work evidence",description:"Keep photos, checklists, certificates, project notes and measurable outcomes ready for internships or jobs.",resources:[["National Career Service","https://www.ncs.gov.in/"]] }
    ]},
    {id:"postgrad", title:"Upgrade: Diploma, Degree or Advanced Certification", icon:"🎓", intro:"Vocational routes do not have to stop at the first qualification; compare the next credential against your target job.", items:[
      {title:"ITI → Apprenticeship → Work",description:"Use the trade to enter a workplace and build experience when practical work is your immediate priority.",resources:[["Apprenticeship India","https://www.apprenticeshipindia.gov.in/"]] },
      {title:"Diploma → Lateral Degree",description:"For eligible diploma holders, compare state/institute lateral-entry routes into engineering or technology degrees.",resources:[["DTE Maharashtra","https://ugpg26.dtemaharashtra.gov.in/"]] },
      {title:"B.Voc → Higher Study",description:"Applied degree holders can compare specialised postgraduate study, professional certificates and work experience.",resources:[["National Career Service","https://www.ncs.gov.in/"]] },
      {title:"Specialised certification",description:"Choose certifications that map to a real tool, standard or job role rather than collecting unrelated certificates.",resources:[["National Career Service","https://www.ncs.gov.in/"]] }
    ]},
    {id:"specialization", title:"Trade Specialisation & Career Growth", icon:"🧭", intro:"Grow from basic trade competence into a niche: automation, EVs, CNC, networking, HVAC, construction, design, healthcare support or another specialist area.", items:[
      {title:"Automation / PLC / Robotics",description:"Combine electrical/electronics foundations with PLCs, sensors, controls and industrial troubleshooting.",resources:[["National Career Service","https://www.ncs.gov.in/"]] },
      {title:"EV / Solar / Energy",description:"Build current technical skills around electric mobility, solar installation, maintenance and energy systems where relevant.",resources:[["National Career Service","https://www.ncs.gov.in/"]] },
      {title:"IT / Networking / Cloud Support",description:"Vocational IT learners can add networking, Linux, cloud basics, cybersecurity hygiene and helpdesk practice.",resources:[["National Career Service","https://www.ncs.gov.in/"]] },
      {title:"Small-business / Entrepreneurship",description:"Experienced tradespeople can move toward contracting or a small enterprise after learning costing, customer service, compliance and cash flow.",resources:[["Startup India","https://www.startupindia.gov.in/"]] }
    ]}
  ]
};

export const exams = [
  {id:"jee-main",name:"JEE Main",group:"Engineering & Technology",about:"National entrance examination used for admission to NITs, IIITs and other participating institutions; also a qualifying route for JEE Advanced.",eligibility:"Class 12 with the required subjects and current NTA eligibility rules.",official:"https://jeemain.nta.nic.in/"},
  {id:"jee-advanced",name:"JEE Advanced",group:"Engineering & Technology",about:"IIT admission examination for eligible JEE Main candidates.",eligibility:"Eligibility changes by year; check the current official brochure.",official:"https://jeeadv.ac.in/"},
  {id:"mht-cet",name:"MHT-CET",group:"Engineering & Technology",about:"Maharashtra state entrance examination for professional courses including engineering.",eligibility:"Check current Maharashtra CET Cell rules.",official:"https://cetcell.mahacet.org/"},
  {id:"bitsat",name:"BITSAT",group:"Engineering & Technology",about:"Entrance examination for BITS Pilani campuses and eligible programmes.",eligibility:"Current programme-specific rules apply.",official:"https://www.bitsadmission.com/"},
  {id:"viteee",name:"VITEEE",group:"Engineering & Technology",about:"VIT engineering admission test.",eligibility:"Current VIT eligibility rules apply.",official:"https://viteee.vit.ac.in/"},
  {id:"neet",name:"NEET-UG",group:"Medical & Life Sciences",about:"Common national entrance examination for undergraduate medical education and other notified courses.",eligibility:"Check current NTA/medical admission rules.",official:"https://neet.nta.nic.in/"},
  {id:"icar",name:"ICAR / Agriculture Admissions",group:"Medical & Life Sciences",about:"Agriculture and allied education admission routes are coordinated through current national admission processes.",eligibility:"Check the current ICAR admission information.",official:"https://icar.nta.nic.in/"},
  {id:"nda",name:"NDA",group:"Civil Services & Defence",about:"UPSC examination for entry to the National Defence Academy.",eligibility:"Current UPSC notification and age/education rules apply.",official:"https://upsc.gov.in/"},
  {id:"upsc",name:"UPSC Civil Services",group:"Civil Services & Defence",about:"National competitive examination for civil services after graduation.",eligibility:"Bachelor's degree and current UPSC rules.",official:"https://upsc.gov.in/"},
  {id:"mpsc",name:"MPSC",group:"Civil Services & Defence",about:"Maharashtra public service recruitment examinations.",eligibility:"Varies by examination; check MPSC notifications.",official:"https://mpsc.gov.in/"},
  {id:"ca",name:"CA Foundation",group:"Commerce, Law & Management",about:"Entry-level stage of the Chartered Accountancy pathway.",eligibility:"Check current ICAI scheme and registration rules.",official:"https://www.icai.org/"},
  {id:"clat",name:"CLAT",group:"Commerce, Law & Management",about:"Common entrance route for participating National Law Universities.",eligibility:"Current consortium rules apply.",official:"https://consortiumofnlus.ac.in/"},
  {id:"ipmat",name:"IPMAT",group:"Commerce, Law & Management",about:"Integrated management entrance route offered by participating IIMs.",eligibility:"Varies by institute and year.",official:"https://www.iimidr.ac.in/"},
  {id:"nata",name:"NATA",group:"Design & Architecture",about:"Aptitude test route used by participating architecture institutions.",eligibility:"Current Council of Architecture and institute rules apply.",official:"https://www.coa.gov.in/"},
  {id:"nid",name:"NID DAT",group:"Design & Architecture",about:"Design aptitude route for eligible NID programmes.",eligibility:"Current NID admission handbook applies.",official:"https://admissions.nid.edu/"},
  {id:"uceed",name:"UCEED",group:"Design & Architecture",about:"Design entrance examination conducted by IIT Bombay for participating institutes.",eligibility:"Current UCEED rules apply.",official:"https://www.uceed.iitb.ac.in/"}
];

export const courseOutcomes = [
  {id:"btech-cse",stream:"Science • PCM",name:"B.Tech / B.E. Computer Science",entry:"JEE Main, state/institute routes or other current programme-specific pathways",study:"Programming, data structures, databases, networks, operating systems and software engineering",outcomes:["Software Engineer","Data / AI roles","Cybersecurity","Product / technology roles"],alternatives:["BCA","BSc Computer Science","BSc IT"]},
  {id:"btech-core",stream:"Science • PCM",name:"B.Tech / B.E. Core Engineering",entry:"JEE Main, state CET or institute-specific routes",study:"Engineering mathematics, core engineering subjects, labs and design/problem solving",outcomes:["Core engineer","Design / testing","Operations","Higher study"],alternatives:["Diploma + lateral entry","BSc / BS"]},
  {id:"bca",stream:"Science • PCM",name:"BCA",entry:"University/institute admission; some institutions use entrance or merit",study:"Programming, web/app development, databases and computer applications",outcomes:["Software development","Web / app roles","IT support","MCA pathway"],alternatives:["BSc Computer Science","BSc IT"]},
  {id:"bsc-cs",stream:"Science • PCM",name:"BSc Computer Science",entry:"University merit / CUET-UG / institution rules where applicable",study:"Computer science fundamentals, programming, mathematics and practical projects",outcomes:["Software / QA","Data support","Research entry","MSc pathway"],alternatives:["BCA","BSc IT"]},
  {id:"bsc-it",stream:"Science • PCM",name:"BSc Information Technology",entry:"University/institute merit or entrance as applicable",study:"IT systems, programming, databases, networking and applications",outcomes:["IT operations","Development","Support","Cloud / systems"],alternatives:["BCA","BSc Computer Science"]},
  {id:"bsc-data",stream:"Science • PCM",name:"BSc Data Science / Analytics",entry:"University-specific merit/entrance route",study:"Statistics, Python, data handling, analytics and basic machine learning",outcomes:["Data analyst","BI / reporting","Junior data roles","Higher study"],alternatives:["BSc CS","BSc Statistics"]},
  {id:"bsc-ai",stream:"Science • PCM",name:"BSc AI / Machine Learning",entry:"University-specific route; check current programme rules",study:"Programming, mathematics, statistics and introductory ML/AI",outcomes:["AI/ML trainee","Data roles","Automation","Research pathway"],alternatives:["BSc Data Science","BTech CSE"]},
  {id:"barch",stream:"Science • PCM",name:"B.Arch",entry:"NATA / accepted architecture aptitude route plus current eligibility",study:"Architectural design, drawing, building technology, history and studio work",outcomes:["Architectural practice","Design support","Urban / built-environment roles","Higher study"],alternatives:["B.Des","Civil engineering"]},
  {id:"bdes",stream:"Science • PCM",name:"B.Des / Design",entry:"Institute-specific design entrance such as UCEED/NID or other current routes",study:"Design fundamentals, visual thinking, user-centred design and studio projects",outcomes:["UI/UX","Product design","Visual design","Design research"],alternatives:["BFA","Architecture"]},
  {id:"bsc-physics",stream:"Science • PCM",name:"BSc Physics",entry:"University merit / CUET-UG / institution rules where applicable",study:"Mechanics, electromagnetism, quantum foundations, mathematics and labs",outcomes:["Research pathway","Lab roles","Analytics / technical roles","MSc pathway"],alternatives:["BSc Mathematics","Engineering"]},
  {id:"bsc-math",stream:"Science • PCM",name:"BSc Mathematics",entry:"University merit / CUET-UG / institution rules where applicable",study:"Algebra, calculus, analysis, probability, statistics and mathematical modelling",outcomes:["Analytics","Actuarial pathway","Teaching","Research / higher study"],alternatives:["BSc Statistics","Economics"]},
  {id:"mbbs",stream:"Science • PCB",name:"MBBS",entry:"NEET-UG + current counselling and eligibility rules",study:"Basic medical sciences, clinical subjects, hospital training and internship",outcomes:["Medical practice pathway","Clinical specialization pathway","Public health","Research"],alternatives:["BDS","Nursing","Allied health"]},
  {id:"bds",stream:"Science • PCB",name:"BDS",entry:"NEET-UG + current counselling rules",study:"Dental anatomy, oral health, clinical dentistry and supervised practice",outcomes:["Dentistry","Dental specializations","Public health","Practice"],alternatives:["MBBS","BPharm","Physiotherapy"]},
  {id:"bpharm",stream:"Science • PCB",name:"B.Pharm",entry:"State/university admission or current professional-course route",study:"Pharmaceutics, pharmacology, medicinal chemistry and pharmacy practice",outcomes:["Pharma industry","Quality / regulatory roles","Hospital pharmacy","Higher study"],alternatives:["PharmD","Biotechnology"]},
  {id:"pharmd",stream:"Science • PCB",name:"PharmD",entry:"Current pharmacy admission rules",study:"Clinical pharmacy, therapeutics, pharmacology and patient-focused training",outcomes:["Clinical pharmacy","Hospital roles","Medication safety","Higher study"],alternatives:["BPharm","Life science"]},
  {id:"nursing",stream:"Science • PCB",name:"BSc Nursing",entry:"State/university/institute entrance or current admission route",study:"Nursing science, clinical practice, community health and patient care",outcomes:["Registered nursing pathway","Clinical care","Community health","Higher study"],alternatives:["Physiotherapy","Pharmacy"]},
  {id:"bpt",stream:"Science • PCB",name:"BPT / Physiotherapy",entry:"University/state/institute admission as applicable",study:"Human anatomy, movement science, rehabilitation and clinical practice",outcomes:["Physiotherapist","Rehabilitation","Sports support","Higher study"],alternatives:["Nursing","Occupational therapy"]},
  {id:"biotech",stream:"Science • PCB",name:"BSc Biotechnology",entry:"University merit / CUET-UG / institution route where applicable",study:"Biology, genetics, microbiology, biochemistry and laboratory methods",outcomes:["Lab roles","Biotech industry","Research assistant","Higher study"],alternatives:["Microbiology","Biochemistry"]},
  {id:"microbiology",stream:"Science • PCB",name:"BSc Microbiology",entry:"University merit / CUET-UG / institution route where applicable",study:"Microorganisms, genetics, immunology, laboratory methods and applied microbiology",outcomes:["Laboratory work","Food / pharma QA","Research","Higher study"],alternatives:["Biotechnology","Biochemistry"]},
  {id:"biochem",stream:"Science • PCB",name:"BSc Biochemistry",entry:"University merit / CUET-UG / institution route where applicable",study:"Biomolecules, metabolism, enzymes, molecular biology and lab practice",outcomes:["Diagnostic / lab roles","Research","Biotech / pharma","Higher study"],alternatives:["Biotechnology","Microbiology"]},
  {id:"agri",stream:"Science • PCB",name:"BSc Agriculture",entry:"University/state agriculture admission rules",study:"Crop science, soil, agronomy, horticulture and agricultural technology",outcomes:["Agriculture industry","Agri-tech","Extension / field roles","Higher study"],alternatives:["Biotechnology","Environmental science"]},
  {id:"bvsc",stream:"Science • PCB",name:"BVSc & AH",entry:"NEET-UG / current veterinary admission rules where applicable",study:"Veterinary anatomy, physiology, disease, surgery and animal health",outcomes:["Veterinary practice","Animal health","Livestock sector","Higher study"],alternatives:["BSc Biology","Life sciences"]},
  {id:"bsc-life",stream:"Science • PCMB",name:"BSc Life Sciences",entry:"University merit / CUET-UG / institution route where applicable",study:"Integrated biology, ecology, genetics and laboratory science",outcomes:["Lab / research roles","Environmental work","Biotech support","Higher study"],alternatives:["Biotechnology","Microbiology"]},
  {id:"bio-med",stream:"Science • PCMB",name:"Biomedical Engineering",entry:"Engineering admission route plus programme-specific eligibility",study:"Engineering, biology, medical devices, instrumentation and healthcare technology",outcomes:["Medical devices","Clinical engineering","Healthcare technology","Research"],alternatives:["BTech CSE","Biotechnology"]},
  {id:"bcom",stream:"Commerce",name:"BCom",entry:"University merit / CUET-UG / institution rules where applicable",study:"Accounting, finance, economics, taxation and business fundamentals",outcomes:["Accounting","Finance operations","Banking","Professional qualifications"],alternatives:["BBA","Economics"]},
  {id:"bba",stream:"Commerce",name:"BBA / BMS",entry:"University merit or institution/CET route where applicable",study:"Management, marketing, finance, operations and business projects",outcomes:["Business roles","Marketing","Operations","MBA pathway"],alternatives:["BCom","Economics"]},
  {id:"ba-econ",stream:"Commerce",name:"BA / BSc Economics",entry:"University merit / CUET-UG / institution rules where applicable",study:"Microeconomics, macroeconomics, statistics and policy analysis",outcomes:["Economic analysis","Banking / finance","Research","Higher study"],alternatives:["BCom","Statistics"]},
  {id:"bfia",stream:"Commerce",name:"BBA / BMS in Finance / Investment",entry:"Institution-specific admission route",study:"Finance, markets, investment analysis and business analytics",outcomes:["Finance analyst","Investment support","Corporate finance","Higher study"],alternatives:["BCom","Economics"]},
  {id:"ca",stream:"Commerce",name:"Chartered Accountancy (CA)",entry:"ICAI registration + current Foundation / entry rules",study:"Accounting, law, taxation, audit, finance and practical training",outcomes:["Chartered accountant pathway","Audit","Tax","Advisory"],alternatives:["CMA","CS","BCom"]},
  {id:"cma",stream:"Commerce",name:"Cost & Management Accountancy (CMA)",entry:"ICMAI registration + current entry rules",study:"Costing, management accounting, finance and strategic management",outcomes:["Cost analyst","Management accounting","Finance","Advisory"],alternatives:["CA","CS","BCom"]},
  {id:"cs",stream:"Commerce",name:"Company Secretary (CS)",entry:"ICSI registration + current entry rules",study:"Company law, governance, compliance and corporate practice",outcomes:["Corporate compliance","Governance","Secretarial practice","Legal support"],alternatives:["CA","CMA","LLB"]},
  {id:"ba",stream:"Arts & Humanities",name:"BA",entry:"University merit / CUET-UG / institution rules where applicable",study:"Humanities or social-science subjects with writing, analysis and research",outcomes:["Education","Research","Public sector preparation","Private-sector roles"],alternatives:["BA honours","Liberal studies"]},
  {id:"psych",stream:"Arts & Humanities",name:"BA Psychology",entry:"University merit / CUET-UG / institution rules where applicable",study:"Behaviour, cognition, research methods and psychological theory",outcomes:["HR support","Research","Behavioural roles","Higher study"],alternatives:["Social work","Sociology"]},
  {id:"journalism",stream:"Arts & Humanities",name:"BA Journalism / Mass Communication",entry:"University/institute route",study:"Reporting, media production, communication, digital media and research",outcomes:["Journalism","Content","Digital media","Communications"],alternatives:["BA English","Design"]},
  {id:"bsw",stream:"Arts & Humanities",name:"BSW / Social Work",entry:"University/institute merit or entrance as applicable",study:"Community development, welfare, social research and fieldwork",outcomes:["NGO / development sector","Community work","CSR","Higher study"],alternatives:["BA Sociology","Public policy"]},
  {id:"law",stream:"Arts & Humanities",name:"5-Year Integrated Law (BA LLB / BBA LLB)",entry:"CLAT / AILET / institute-specific law admission route",study:"Law, legal reasoning, drafting, public policy and practical legal skills",outcomes:["Legal practice","Corporate law","Compliance","Policy"],alternatives:["BA","BBA","Public policy"]},
  {id:"bfa",stream:"Arts & Humanities",name:"BFA / Fine Arts",entry:"University/institute admission; portfolio/aptitude rules may apply",study:"Drawing, painting, visual communication, studio practice and art history",outcomes:["Visual art","Illustration","Creative roles","Higher study"],alternatives:["BDes","Media"]},
  {id:"diploma-eng",stream:"Diploma / Vocational",name:"Diploma in Engineering / Polytechnic",entry:"State diploma admission / CET / institute route",study:"Applied engineering, workshop skills, practical labs and technical drawing",outcomes:["Technician roles","Industry entry","Lateral BTech/B.E. route","Entrepreneurship"],alternatives:["ITI","B.Voc"]},
  {id:"iti",stream:"Diploma / Vocational",name:"ITI Trade",entry:"Government / private ITI admission as per trade and state rules",study:"Trade-specific practical skills, workshop training and employability",outcomes:["Skilled technician","Apprenticeship","Industry work","Further certification"],alternatives:["Diploma","B.Voc"]},
  {id:"b-voc",stream:"Diploma / Vocational",name:"B.Voc",entry:"University/institute admission under current programme rules",study:"Applied vocational learning, practical projects and industry exposure",outcomes:["Skilled graduate roles","Technician / operations","Industry projects","Higher study"],alternatives:["Diploma","ITI"]},
  {id:"bca-voc",stream:"Diploma / Vocational",name:"BCA / IT Skill Route",entry:"Institution-specific admission route",study:"Programming, applications, web technologies and practical software projects",outcomes:["Junior developer","IT support","Web roles","MCA / higher study"],alternatives:["Diploma IT","BSc CS"]}
];

export const institutions = [
  ["IIT Bombay","Maharashtra","IIT","Engineering / Science","JEE Advanced + JoSAA"],
  ["IIT Delhi","Delhi","IIT","Engineering / Science","JEE Advanced + JoSAA"],
  ["IIT Madras","Tamil Nadu","IIT","Engineering / Science","JEE Advanced + JoSAA"],
  ["IIT Kanpur","Uttar Pradesh","IIT","Engineering / Science","JEE Advanced + JoSAA"],
  ["IIT Kharagpur","West Bengal","IIT","Engineering / Science","JEE Advanced + JoSAA"],
  ["IIT Hyderabad","Telangana","IIT","Engineering / Science","JEE Advanced + JoSAA"],
  ["IIT Roorkee","Uttarakhand","IIT","Engineering / Science","JEE Advanced + JoSAA"],
  ["IIT Guwahati","Assam","IIT","Engineering / Science","JEE Advanced + JoSAA"],
  ["IIT (BHU) Varanasi","Uttar Pradesh","IIT","Engineering / Science","JEE Advanced + JoSAA"],
  ["IIT Indore","Madhya Pradesh","IIT","Engineering / Science","JEE Advanced + JoSAA"],
  ["IIT Ropar","Punjab","IIT","Engineering / Science","JEE Advanced + JoSAA"],
  ["IIT Patna","Bihar","IIT","Engineering / Science","JEE Advanced + JoSAA"],
  ["IIT Gandhinagar","Gujarat","IIT","Engineering / Science","JEE Advanced + JoSAA"],
  ["NIT Trichy","Tamil Nadu","NIT","Engineering","JEE Main + JoSAA"],
  ["NIT Surathkal","Karnataka","NIT","Engineering","JEE Main + JoSAA"],
  ["NIT Warangal","Telangana","NIT","Engineering","JEE Main + JoSAA"],
  ["NIT Rourkela","Odisha","NIT","Engineering","JEE Main + JoSAA"],
  ["NIT Calicut","Kerala","NIT","Engineering","JEE Main + JoSAA"],
  ["NIT Nagpur","Maharashtra","NIT","Engineering","JEE Main + JoSAA"],
  ["NIT Delhi","Delhi","NIT","Engineering","JEE Main + JoSAA"],
  ["NIT Jaipur","Rajasthan","NIT","Engineering","JEE Main + JoSAA"],
  ["NIT Allahabad","Uttar Pradesh","NIT","Engineering","JEE Main + JoSAA"],
  ["IIIT Hyderabad","Telangana","IIIT","Computing","Programme-specific institute admission; verify the current UG programme notice"],
  ["IIIT Delhi","Delhi","IIIT","Computing","JEE Main / institute rules"],
  ["IIIT Bangalore","Karnataka","IIIT","Computing","Programme-specific institute admission; verify the current UG programme notice"],
  ["COEP Technological University","Maharashtra","State Govt","Engineering","MHT-CET / JEE Main + state rules"],
  ["VJTI Mumbai","Maharashtra","State Govt","Engineering","B.Tech admission via the Maharashtra process; follow VJTI 2026-27 UG notices and CAP reporting instructions"],
  ["ICT Mumbai","Maharashtra","State Govt","Chemical / Engineering","MHT-CET / institute rules"],
  ["SGGSIE&T Nanded","Maharashtra","State Govt","Engineering","MHT-CET / state rules"],
  ["Walchand College of Engineering","Maharashtra","Autonomous","Engineering","State / institute rules"],
  ["PCCOE Pune","Maharashtra","Private / Autonomous","Engineering","MHT-CET / JEE Main with Maharashtra CAP; institute-level / ACAP rounds when notified"],
  ["VIT Pune","Maharashtra","Private / Autonomous","Engineering","MHT-CET or JEE Main merit for applicable 2026-27 CAP / ACAP / institute-level rounds"],
  ["VJTI-style state engineering colleges","Maharashtra","State Govt","Engineering","Check current state CAP"],
  ["BITS Pilani","Rajasthan","Private Deemed","Engineering / Science","BITSAT"],
  ["BITS Goa","Goa","Private Deemed","Engineering / Science","BITSAT"],
  ["BITS Hyderabad","Telangana","Private Deemed","Engineering / Science","BITSAT"],
  ["Manipal Institute of Technology","Karnataka","Private","Engineering","MET / institute admission process for applicable programmes"],
  ["VIT Vellore","Tamil Nadu","Private","Engineering","VITEEE / current rules"],
  ["SRM Institute of Science and Technology","Tamil Nadu","Private","Engineering","SRMJEEE / current rules"],
  ["Amrita Vishwa Vidyapeetham","Kerala","Private Deemed","Engineering / Science","Current institute route"],
  ["AIIMS New Delhi","Delhi","Central Govt","Medicine","NEET-UG + counselling"],
  ["JIPMER Puducherry","Puducherry","Central Govt","Medicine","NEET-UG + counselling"],
  ["PGIMER Chandigarh","Chandigarh","Central Govt","Medicine","Current admission route"],
  ["Tata Institute of Fundamental Research","Maharashtra","Research","Science","Programme-specific research-school admission; follow the current programme notice"],
  ["National Law School of India University","Karnataka","NLSIU","Law","CLAT"],
  ["NALSAR University of Law","Telangana","NLU","Law","CLAT"],
  ["NLIU Bhopal","Madhya Pradesh","NLU","Law","CLAT"],
  ["NLU Delhi","Delhi","NLU","Law","AILET / current rules"],
  ["IIM Indore","Madhya Pradesh","IIM","Management","IPMAT / current rules"],
  ["IIM Rohtak","Haryana","IIM","Management","IPMAT / current rules"],
  ["IIM Jammu","Jammu & Kashmir","IIM","Management","Current integrated programme route"],
  ["Delhi University","Delhi","Central University","Arts / Commerce / Science","CUET-UG + university rules"],
  ["Banaras Hindu University","Uttar Pradesh","Central University","Arts / Commerce / Science","CUET-UG + university rules"],
  ["University of Hyderabad","Telangana","Central University","Science / Humanities","Current admission route"],
  ["Savitribai Phule Pune University","Maharashtra","State University","Arts / Commerce / Science","Programme-specific"],
  ["University of Mumbai","Maharashtra","State University","Arts / Commerce / Science","Programme-specific"],
  ["Fergusson College","Maharashtra","Autonomous","Arts / Science / Commerce","Course-wise UG application and published merit lists / admission notices for 2026-27"],
  ["Brihan Maharashtra College of Commerce (BMCC)","Maharashtra","Autonomous","Commerce / Management","FY B.Com uses college application + merit lists; BBA/BMS/BBA-IB/BBA-CA use CET with CAP / institute-level rounds as notified"],
  ["Nowrosjee Wadia College","Maharashtra","Autonomous","Arts / Science","Programme-specific"],
  ["Modern College of Arts, Science & Commerce","Maharashtra","Autonomous","Arts / Science / Commerce","Programme-specific"],
  ["Symbiosis College of Arts & Commerce","Maharashtra","Private / Autonomous","Arts / Commerce","Programme-specific"],
  ["K. J. Somaiya College of Arts & Commerce","Maharashtra","Autonomous","Arts / Commerce","Programme-specific"],
  ["Mithibai College","Maharashtra","Autonomous","Arts / Science / Commerce","Programme-specific"],
  ["Ramnarain Ruia Autonomous College","Maharashtra","Autonomous","Arts / Science","Programme-specific"],
  ["St. Xavier's College, Mumbai","Maharashtra","Autonomous","Arts / Science / Commerce","Programme-specific"],
  ["AISSMS Institute of Information Technology","Maharashtra","Private / Autonomous","Engineering / Computing","MHT-CET / JEE Main + state rules"],
  ["D. Y. Patil College of Engineering, Akurdi","Maharashtra","Private / Autonomous","Engineering / Computing","MHT-CET / JEE Main + state rules"],
  ["Thakur College of Engineering and Technology","Maharashtra","Private / Autonomous","Engineering / Computing","MHT-CET / JEE Main + state rules"],
  ["Fr. Conceicao Rodrigues College of Engineering","Maharashtra","Private / Autonomous","Engineering / Computing","MHT-CET / JEE Main + state rules"],
  ["University of Pune / Savitribai Phule Pune University","Maharashtra","State University","Arts / Commerce / Science","Programme-specific"],
  ["Jadavpur University","West Bengal","State University","Engineering / Arts / Science","State / university rules"]
].map((x,i)=>({id:i+1,name:x[0],state:x[1],type:x[2],focus:x[3]}));

export const institutionAdmissionSources = {
  "IIT Bombay": { label:"Official UG admissions", url:"https://acad.iitb.ac.in/", note:"UG new entrants 2026-27 include JEE (Advanced) 2026 and JoSAA seat allotment." },
  "COEP Technological University": { label:"Official B.Tech admissions", url:"https://www.coeptech.ac.in/admissions/undergraduate/first-year-admissions/", note:"For FY B.Tech, COEP states 80% seats through MHT-CET and 20% through JEE Main; Maharashtra CAP rules apply." },
  "VJTI Mumbai": { label:"Official UG admissions", url:"https://vjti.ac.in/undergraduate-admission/", note:"VJTI publishes current 2026-27 UG admission notices and CAP reporting information." },
  "VIT Pune": { label:"Official admissions", url:"https://www.vit.edu/notification/", note:"VIT Pune publishes 2026-27 merit lists based on MHT-CET and JEE Main for applicable rounds." },
  "Fergusson College": { label:"Official UG notices", url:"https://fergusson.edu/admission-notice", note:"Fergusson publishes course-wise FY UG applications, merit lists and 2026-27 admission notices." },
  "Brihan Maharashtra College of Commerce (BMCC)": { label:"Official FY admission", url:"https://www.bmcc.ac.in/fy-admission-26-27", note:"BMCC publishes FY B.Com merit lists and 2026-27 CET / CAP / institute-level notices for management programmes." },
};


// Student-facing comparison details. Fee notes are intentionally phrased as published snapshots,
// because fees can vary by programme, category and academic year.
export const institutionDetails = {
  "IIT Bombay": {
    programFit:"Engineering, computing, science & design",
    location:"Powai, Mumbai",
    careerDirection:"Software, core engineering, research, design, startups",
    fee:"2026–27 UG new-entrant snapshot: ₹1,34,150 academic + ₹19,950 hostel + ₹22,500 mess advance for eligible Indian-national categories; category rules affect payable amount.",
    criteria:"Strong fit when the student is targeting rigorous STEM/design study and is comfortable with a competitive national entrance route.",
    campus:"Large residential IIT campus with hostels, student activities, technical and cultural communities.",
    placementResearch:"Strong industry + research orientation; compare the specific department and current placement report for your programme.",
    source:"https://acad.iitb.ac.in/details-fees-payable"
  },
  "COEP Technological University": {
    programFit:"Engineering, computing, core technology",
    location:"Shivajinagar, Pune",
    careerDirection:"Software, core engineering, product, public-sector technology, research",
    fee:"2026–27 FY B.Tech fee structure is officially published; amount varies by admission category and programme.",
    criteria:"Best compared by branch, Maharashtra CAP/eligible route, budget, commute/hostel needs and preferred engineering direction.",
    campus:"Urban Pune engineering campus with technical clubs, student activities and access to a major technology city.",
    placementResearch:"Engineering-led ecosystem with active research, innovation and industry linkages; check the current branch-level placement information.",
    source:"https://www.coeptech.ac.in/admissions/undergraduate/"
  },
  "VJTI Mumbai": {
    programFit:"Engineering, technology, computing",
    location:"Matunga, Mumbai",
    careerDirection:"Software, electronics, mechanical, infrastructure, research",
    fee:"VJTI publishes 2026–27 B.Tech fee notices; the payable amount depends on the programme/year/category.",
    criteria:"Compare branch availability, Maharashtra admission pathway, location/hostel needs, budget and career direction.",
    campus:"Long-established Mumbai engineering campus with technical student communities and a central-city setting.",
    placementResearch:"Engineering + research focused; compare your exact branch and current placement documents before deciding.",
    source:"https://vjti.ac.in/under-graduate-announcements/"
  },
  "VIT Pune": {
    programFit:"Computer, AI, electronics and engineering",
    location:"Bibwewadi, Pune",
    careerDirection:"Software, AI/ML, electronics, product, applied engineering",
    fee:"2026–27 institute-level FY B.Tech published total: ₹6,24,165 for Computer Engineering, CSE (AI) and CSE (AI & ML) in the cited fee sheet; other routes can differ.",
    criteria:"Compare branch, admission route, total four-year budget, Pune location, projects/internships and target career.",
    campus:"Urban Pune campus with engineering-focused clubs, projects and student activities.",
    placementResearch:"Industry-oriented engineering environment; compare current branch-level placement and internship information.",
    source:"https://www.vit.edu/wp-content/uploads/2026/03/Fees-structure-for-Institute-level-admissions-FY-B.Tech-2026-27.pdf"
  },
  "Fergusson College": {
    programFit:"Arts, science and vocational UG study",
    location:"Deccan, Pune",
    careerDirection:"Science, research, analytics, humanities, media, higher study",
    fee:"2026–27 fee structure is published separately for grant-in-aid and self-finance programmes; exact fee depends on course.",
    criteria:"Compare exact subject/course, grant-in-aid vs self-finance status, merit route, travel/hostel needs and higher-study plan.",
    campus:"Historic central-Pune campus with broad arts/science student communities.",
    placementResearch:"Strong academic foundation for higher study; compare the exact department’s labs, projects and progression options.",
    source:"https://fergusson.edu/fee-structure-2026-27"
  },
  "Brihan Maharashtra College of Commerce (BMCC)": {
    programFit:"Commerce, finance, management and business",
    location:"Shivajinagar, Pune",
    careerDirection:"Accounting, finance, analytics, management, entrepreneurship",
    fee:"2026–27 fees are course-specific; BMCC publishes separate FY B.Com, FinTech, Finance & Management and management-programme admission notices.",
    criteria:"Compare the exact course (B.Com, FinTech, Finance & Management, BBA/BMS), budget, CET/merit route and intended career.",
    campus:"Central Pune commerce-focused campus with a strong undergraduate student community.",
    placementResearch:"Business/commerce-oriented; compare the exact programme’s internships, projects, professional qualifications and placement support.",
    source:"https://bmcc.ac.in/fy-admission-26-27"
  },
  default: {
    programFit:"Use the listed programme focus to compare branch/course fit",
    location:"Use the city/state shown on the card",
    careerDirection:"Map the programme to the career direction you want",
    fee:"Programme/category-specific; use the institution's current official fee notice before budgeting.",
    criteria:"Compare the exact programme, eligibility, your subject background, budget and preferred career direction.",
    campus:"Compare hostel/commute, campus facilities, clubs and student activities from the institution’s current information.",
    placementResearch:"Check the latest official placement report, department pages and research profile for the exact programme.",
    source:null
  }
};

export const careers = [
  {id:"aiml",streams:["pcm","pcmb"],title:"AI / ML Engineer",tone:"blue",track:"PCM • Computing & AI",degree:"B.Tech / BSc / MSc",summary:"Design intelligent systems, train models and turn data into useful product features.",work:"Model training, evaluation, experimentation and deployment.",portfolio:"Prediction app or small ML model with a clean README.",direction:"Machine learning + software engineering",route:["Class 11–12 PCM / PCMB","BTech/BSc in CS, AI, Data Science or related field","Projects + internships + DSA/ML fundamentals","MTech/MS/research or industry specialization"],next:["Python / C++","Data Structures","Probability & Statistics","Machine Learning","Deep Learning","Model deployment"],alternatives:["Data Scientist","Software Engineer","ML Researcher","AI Product Engineer"]},
  {id:"software",streams:["pcm","pcmb"],title:"Software Engineer",tone:"violet",track:"PCM • Software",degree:"B.Tech CSE / IT",summary:"Build reliable applications, services and tools used by people and organizations.",work:"Designing features, writing code, testing and fixing production issues.",portfolio:"A full-stack app with authentication, database and deployment.",direction:"Programming + system design + product development",route:["Class 11–12 PCM / PCMB","BTech CSE / IT or related degree","DSA + Git + one programming language","Internships + software projects","System design / role-specific specialization"],next:["Java / C++ / Python / JS","DSA","Git & GitHub","Testing","SQL","System design"],alternatives:["Backend Engineer","Frontend Engineer","DevOps Engineer","Product Engineer"]},
  {id:"frontend",streams:["pcm","pcmb","vocational"],title:"Frontend Developer",tone:"cyan",track:"PCM / PCMB / Vocational • Web",degree:"B.Tech / Diploma / B.Voc",summary:"Turn product requirements and designs into responsive, accessible web interfaces.",work:"Building pages, components, interactions and browser-side performance improvements.",portfolio:"Responsive student dashboard built with React and a public demo.",direction:"UI engineering + accessibility + performance",route:["School science/technical foundation","Degree, diploma or B.Voc route","HTML/CSS/JavaScript foundations","React or another frontend stack","Build accessible responsive projects"],next:["HTML / CSS","JavaScript","React","Accessibility","UI testing","Web performance"],alternatives:["UI Engineer","Full Stack Developer","Design Technologist","Mobile Developer"]},
  {id:"backend",streams:["pcm","pcmb"],title:"Backend Engineer",tone:"green",track:"PCM • Backend & Systems",degree:"B.Tech CSE / IT",summary:"Create APIs, services and data flows that power applications behind the scenes.",work:"API design, databases, authentication, queues and reliability.",portfolio:"REST or GraphQL API with a relational database and tests.",direction:"Server-side engineering + data systems",route:["Class 11–12 PCM / PCMB","BTech CSE / IT","Programming + DSA","SQL + APIs + authentication","Cloud deployment and observability"],next:["Node / Java / Python / Go","SQL","REST / GraphQL","Authentication","Caching","Testing"],alternatives:["Software Engineer","Data Engineer","Cloud Engineer","Platform Engineer"]},
  {id:"fullstack",streams:["pcm","pcmb","vocational"],title:"Full-Stack Developer",tone:"amber",track:"PCM / PCMB / Vocational • Product",degree:"B.Tech / Diploma / B.Voc",summary:"Work across the interface, server, database and deployment layers of a product.",work:"Connecting user experiences to APIs, databases and production infrastructure.",portfolio:"End-to-end app with frontend, API, database and live deployment.",direction:"Breadth across product engineering",route:["School technical foundation","Degree, diploma or B.Voc route","Frontend + backend foundations","Ship 2–3 end-to-end projects","Add deployment, monitoring and security basics"],next:["React / Next.js","Node / Java","SQL","APIs","Docker basics","Git"],alternatives:["Software Engineer","Product Engineer","Startup Developer","Solutions Engineer"]},
  {id:"data",streams:["pcm","pcmb","commerce"],title:"Data Scientist / Analyst",tone:"rose",track:"PCM / PCMB / Commerce • Data",degree:"B.Tech / BSc / BCom / MSc",summary:"Use statistics, experimentation and data tools to answer business or research questions.",work:"Cleaning data, analysis, modeling, dashboards and communicating findings.",portfolio:"Exploratory analysis plus a documented predictive or business-data project.",direction:"Statistics + analytics + domain knowledge",route:["Class 11–12 PCM / PCMB / Commerce","Degree in CS, statistics, mathematics, economics or business analytics","Python/Excel + statistics + SQL","Projects using real datasets","Specialize by domain or postgraduate study"],next:["Python / Excel","Statistics","SQL","Pandas / Power BI","Visualization","Experiment design"],alternatives:["ML Engineer","Business Analyst","Research Analyst","Quant / Analytics roles"]},
  {id:"dataeng",streams:["pcm","pcmb"],title:"Data Engineer",tone:"teal",track:"PCM • Data Systems",degree:"B.Tech CSE / IT",summary:"Build the pipelines and platforms that move, clean and organize data at scale.",work:"Data pipelines, storage, ETL/ELT, orchestration and reliability.",portfolio:"Batch + streaming data pipeline with clear architecture notes.",direction:"Distributed systems + data infrastructure",route:["Class 11–12 PCM / PCMB","BTech CSE / IT","DSA + SQL","Learn data modeling and pipelines","Cloud/data platform project + internship"],next:["SQL","Python","ETL / ELT","Data modeling","Airflow or similar","Cloud data services"],alternatives:["Analytics Engineer","Backend Engineer","Cloud Engineer","Platform Engineer"]},
  {id:"cyber",streams:["pcm","pcmb","vocational"],title:"Cybersecurity Engineer",tone:"indigo",track:"PCM / PCMB / Vocational • Security",degree:"B.Tech / Diploma / B.Voc",summary:"Help systems stay secure through threat analysis, secure engineering and incident readiness.",work:"Security testing, access controls, monitoring and vulnerability analysis.",portfolio:"Security lab write-up or safe capture-the-flag learning project.",direction:"Networks + systems + secure software",route:["Class 11–12 science/technical foundation","Degree or diploma in computing/cybersecurity","Networks + operating systems","Security labs + ethical security practice","Internship / security specialization"],next:["Networking","Linux","Web security","Threat modeling","Identity & access","Security monitoring"],alternatives:["Security Analyst","Application Security Engineer","SOC Analyst","Cloud Security Engineer"]},
  {id:"cloud",streams:["pcm","pcmb","vocational"],title:"Cloud / DevOps Engineer",tone:"orange",track:"PCM / PCMB / Vocational • Cloud",degree:"B.Tech / Diploma",summary:"Automate software delivery and keep applications observable, scalable and dependable.",work:"CI/CD pipelines, infrastructure, deployment, monitoring and automation.",portfolio:"Containerized app with CI/CD and documented infrastructure.",direction:"Automation + cloud + reliability",route:["Class 11–12 science/technical foundation","BTech / diploma in computing or IT","Linux + Git + networking","Containers + CI/CD","Cloud platform project + reliability basics"],next:["Linux","Git","Docker","CI/CD","Cloud basics","Monitoring"],alternatives:["Platform Engineer","Site Reliability Engineer","Backend Engineer","Cloud Security Engineer"]},
  {id:"product",streams:["pcm","pcmb","commerce"],title:"Product Manager / Product Engineer",tone:"plum",track:"PCM / PCMB / Commerce • Product",degree:"Any relevant degree + experience",summary:"Combine technical, analytical and communication skills to solve real user problems and ship useful products.",work:"Problem framing, user needs, prioritization, experiments and cross-team delivery.",portfolio:"A product case study showing users, iterations, metrics and shipped work.",direction:"Problem-solving + business + technology",route:["School foundation in a relevant stream","Degree in engineering, business, economics or related field","Projects / clubs / internships","Learn product thinking and analytics","Grow into product ownership"],next:["User research","Product metrics","Communication","Rapid prototyping","SQL / analytics","System thinking"],alternatives:["Business Analyst","Product Designer","Software Engineer","Technical Consultant"]},
  {id:"uiux",streams:["pcm","pcmb","arts","vocational"],title:"UI / UX Designer & Technologist",tone:"cyan",track:"Arts / Science / Vocational • Design + Tech",degree:"B.Des / B.Tech / B.Voc / Diploma",summary:"Bridge design thinking and technology so digital products are useful, clear and accessible.",work:"Wireframes, prototypes, design systems and interface implementation.",portfolio:"Case study with wireframes, prototype and coded interface.",direction:"Design thinking + technology + communication",route:["Class 11–12 in a compatible stream","Design / technology / HCI / vocational route","Learn visual design and UX process","Build case studies + prototypes","Internship / specialization"],next:["Figma","UX research","Design systems","HTML/CSS","Prototyping","Accessibility"],alternatives:["Product Designer","Frontend Developer","Design Technologist","UX Researcher"]},

  {id:"doctor",streams:["pcb","pcmb"],title:"Doctor / Medical Specialist",tone:"green",track:"PCB / PCMB • Medicine",degree:"MBBS + PG specialization",summary:"Follow the medical route from school science through undergraduate medical education and later specialization.",work:"Patient care, clinical learning, documentation and continuous medical education.",portfolio:"Science learning record, volunteering and disciplined academic evidence.",direction:"Biology + clinical training + communication",route:["Class 11–12 PCB / PCMB","NEET-UG","MBBS or other eligible medical degree","Internship / licensing requirements","PG specialization where applicable"],next:["Biology + NCERT","Chemistry","Physics","Clinical communication","Evidence-based learning","Study discipline"],alternatives:["Dentistry","Nursing","Pharmacy","Physiotherapy","Biotechnology"]},
  {id:"dentist",streams:["pcb","pcmb"],title:"Dentist",tone:"teal",track:"PCB / PCMB • Dental Health",degree:"BDS + optional MDS",summary:"Work in oral healthcare through dental education, supervised clinical training and later specialization.",work:"Diagnosis, preventive care, restorative procedures and patient education.",portfolio:"Science projects, communication practice and a clear anatomy/biology study record.",direction:"Biology + clinical skill + patient communication",route:["Class 11–12 PCB / PCMB","NEET-UG","BDS","Clinical internship","MDS / specialization or practice as eligible"],next:["Human anatomy","Biology","Communication","Fine motor skills","Clinical documentation","Patient education"],alternatives:["Dental Public Health","Oral Surgery","Healthcare Management","Biomedical Research"]},
  {id:"pharmacist",streams:["pcb","pcmb"],title:"Pharmacist / Pharmaceutical Professional",tone:"blue",track:"PCB / PCMB • Pharmacy",degree:"B.Pharm / Pharm.D",summary:"Study medicines, formulation, quality, safety and patient-facing pharmacy practice.",work:"Dispensing support, medication information, quality or pharmaceutical operations.",portfolio:"Drug-safety notes, lab/project work and a documented pharmacology learning log.",direction:"Chemistry + biology + healthcare",route:["Class 11–12 PCB / PCMB","Pharmacy entrance / admission route as applicable","B.Pharm / Pharm.D","Internship / practical training","Specialize in industry, clinical or research roles"],next:["Organic chemistry","Biology","Pharmacology","Lab skills","Documentation","Healthcare communication"],alternatives:["Clinical Research","Pharma QA","Regulatory Affairs","Biotech"]},
  {id:"physio",streams:["pcb","pcmb"],title:"Physiotherapist",tone:"rose",track:"PCB / PCMB • Rehabilitation",degree:"BPT / relevant allied-health degree",summary:"Help people improve movement, function and rehabilitation through structured clinical practice.",work:"Assessment, exercise-based rehabilitation, patient education and progress tracking.",portfolio:"Anatomy study notes, sports/health volunteering and communication evidence.",direction:"Biology + movement science + patient care",route:["Class 11–12 PCB / PCMB","Check the current state/university admission route","BPT or relevant allied-health degree","Clinical training","Specialize in sports, neuro, ortho or other areas"],next:["Anatomy","Physiology","Exercise science","Communication","Observation","Patient documentation"],alternatives:["Sports Rehabilitation","Occupational Therapy","Healthcare Administration","Research"]},
  {id:"biotech",streams:["pcb","pcmb"],title:"Biotechnologist / Life-Science Researcher",tone:"violet",track:"PCB / PCMB • Biotechnology",degree:"BSc / BTech Biotech + MSc / relevant PG",summary:"Use biology, chemistry, lab methods and data to study living systems and develop applications.",work:"Laboratory experiments, sample analysis, documentation and research support.",portfolio:"Well-documented biology/lab project with method, observations and conclusions.",direction:"Biology + laboratory science + research",route:["Class 11–12 PCB / PCMB","BSc/BTech Biotechnology or life-science degree","Lab projects + internships","MSc / research specialization where needed","Research or industry role"],next:["Cell biology","Genetics","Biochemistry","Lab safety","Data analysis","Scientific writing"],alternatives:["Microbiology","Bioinformatics","Clinical Research","Food Biotechnology"]},
  {id:"nutrition",streams:["pcb","pcmb"],title:"Nutrition & Dietetics Professional",tone:"amber",track:"PCB / PCMB • Nutrition & Health",degree:"BSc / relevant nutrition degree",summary:"Apply food science and human biology to nutrition education, wellness and healthcare support.",work:"Diet planning support, nutrition education, data collection and health communication.",portfolio:"Evidence-based nutrition project with clear sources and sample meal analysis.",direction:"Biology + food science + communication",route:["Class 11–12 PCB / PCMB","Nutrition / dietetics degree route","Supervised practical exposure","Build communication + evidence skills","Specialize or pursue postgraduate study where required"],next:["Human physiology","Food science","Biochemistry","Communication","Data handling","Evidence reading"],alternatives:["Public Health","Food Technology","Health Education","Research"]},
  {id:"bioinfo",streams:["pcmb"],title:"Bioinformatics Analyst",tone:"indigo",track:"PCMB • Biology + Computing",degree:"BSc / BTech / MSc Bioinformatics or related",summary:"Use computing and statistics to work with biological datasets such as genes, proteins and health data.",work:"Data processing, biological databases, analysis and reproducible research workflows.",portfolio:"Small genomics or biological-data analysis project with clear methodology.",direction:"Biology + coding + statistics",route:["Class 11–12 PCMB","Degree in bioinformatics, computational biology, CS or life sciences","Python/R + statistics + biology foundations","Project / internship with biological data","Postgraduate specialization where useful"],next:["Python / R","Genetics","Statistics","Databases","Data visualization","Scientific writing"],alternatives:["Computational Biologist","Biostatistics","AI in Healthcare","Research"]},
  {id:"biomed",streams:["pcmb"],title:"Biomedical Engineer",tone:"teal",track:"PCMB • Engineering + Healthcare",degree:"B.Tech Biomedical / related engineering",summary:"Combine engineering, electronics, materials and biology to work on healthcare technology.",work:"Medical devices, instrumentation, testing, prototyping and technical documentation.",portfolio:"Sensor/device prototype with a clear safety and engineering rationale.",direction:"Engineering + biology + healthcare technology",route:["Class 11–12 PCMB","Engineering / biomedical degree route","Electronics + programming + biology foundations","Device/lab projects","Industry or research specialization"],next:["Physics","Biology","Electronics","Programming","CAD / prototyping","Medical-device basics"],alternatives:["Clinical Engineering","Medical Devices","Bioinformatics","Health-Tech Product"]},
  {id:"econstats",streams:["commerce"],title:"Economist / Economic Analyst",tone:"blue",track:"Commerce • Economics",degree:"BA/BSc Economics + MSc/MA as needed",summary:"Use economics, mathematics and data to study markets, policy and business decisions.",work:"Economic research, data analysis, forecasting and report writing.",portfolio:"Data-backed economics brief using public datasets and transparent assumptions.",direction:"Economics + statistics + communication",route:["Class 11–12 Commerce or compatible route","BA/BSc Economics or related degree","Econometrics + statistics + data tools","Research project / internship","Postgraduate study for advanced research roles"],next:["Microeconomics","Macroeconomics","Statistics","Econometrics","Excel / R / Python","Report writing"],alternatives:["Policy Analyst","Research Analyst","Banking","Business Analytics"]},
  {id:"business",streams:["commerce"],title:"Business / Management Professional",tone:"amber",track:"Commerce • Business & Management",degree:"BBA / BMS / BCom / MBA",summary:"Work across operations, strategy, sales, marketing and management functions.",work:"Planning, coordination, analysis, stakeholder communication and business improvement.",portfolio:"Business case study showing problem, options, numbers and recommendation.",direction:"Business understanding + communication + execution",route:["Class 11–12 Commerce","BBA/BMS/BCom or integrated management route","Clubs + internships + projects","Build analytics and communication skills","MBA / specialization where useful"],next:["Excel","Business communication","Market research","Presentation","Basic finance","Data interpretation"],alternatives:["Marketing","Operations","HR","Product Management"]},
  {id:"finanalyst",streams:["commerce"],title:"Financial Analyst / Investment Professional",tone:"green",track:"Commerce • Finance & Markets",degree:"BCom / BBA / Economics / relevant degree",summary:"Analyze financial information, companies and markets to support decisions.",work:"Financial modeling, company research, reporting and decision support.",portfolio:"Simple valuation or company-analysis report with assumptions and sources.",direction:"Accounting + finance + analytics",route:["Class 11–12 Commerce","BCom/BBA/Economics or relevant degree","Accounting + Excel + finance basics","Internship / markets project","Professional qualification or postgraduate specialization as needed"],next:["Accounting","Financial statements","Excel","Valuation basics","Communication","Data analysis"],alternatives:["CA","Audit","Corporate Finance","Banking"]},
  {id:"ca",streams:["commerce"],title:"Chartered Accountant (CA)",tone:"violet",track:"Commerce • Professional Qualification",degree:"CA Foundation → Intermediate → Final",summary:"Build a professional accounting, audit, tax and finance pathway through ICAI's qualification structure.",work:"Accounting, audit, taxation, reporting, controls and advisory work depending on role.",portfolio:"Accounting projects, case studies, Excel models and disciplined exam preparation.",direction:"Accounting + audit + taxation + business",route:["Class 11–12 Commerce","CA Foundation eligibility + registration","Intermediate + practical training as per current ICAI rules","Final examination requirements","Membership / practice or employment pathway"],next:["Accounting","Tax basics","Auditing","Law","Excel","Professional communication"],alternatives:["CMA","CS","Financial Analyst","Corporate Finance"]},
  {id:"marketing",streams:["commerce","arts"],title:"Marketing & Brand Professional",tone:"rose",track:"Commerce / Arts • Marketing & Media",degree:"BBA / BMS / BCom / BA + specialization",summary:"Combine communication, consumer insight and data to build campaigns and brands.",work:"Campaign planning, content coordination, audience research and performance analysis.",portfolio:"Mini campaign with target audience, creative samples, budget and outcome metrics.",direction:"Communication + consumer insight + analytics",route:["Class 11–12 Commerce / Arts","Degree in business, media, economics or related field","Projects in content / clubs / campaigns","Internship + analytics skills","Specialize in brand, growth or digital marketing"],next:["Copywriting","Consumer research","Analytics","Presentation","Social platforms","Basic design"],alternatives:["Brand Manager","Growth Analyst","Content Strategist","PR"]},
  {id:"entrepreneur",streams:["commerce","arts","vocational","pcm","pcmb"],title:"Entrepreneur / Startup Builder",tone:"orange",track:"All Streams • Entrepreneurship",degree:"Any relevant degree + business experience",summary:"Build a venture around a real problem, customer need or technical opportunity.",work:"Customer discovery, product/service building, sales, finance and team coordination.",portfolio:"Small real-world pilot showing customer problem, experiment, cost and result.",direction:"Problem-solving + communication + execution",route:["Explore a real problem during school/college","Choose any useful degree or skill route","Run small experiments / projects","Learn finance, sales and operations","Scale only when evidence supports the idea"],next:["Customer discovery","Budgeting","Communication","Digital tools","Sales","Experimentation"],alternatives:["Product Management","Consulting","Small Business","Social Enterprise"]},

  {id:"law",streams:["arts","commerce"],title:"Lawyer / Legal Professional",tone:"indigo",track:"Arts / Commerce • Law",degree:"5-year integrated law degree / 3-year LLB after graduation",summary:"Build a legal career through an eligible law degree, internships and practice or specialization.",work:"Legal research, drafting, client communication, compliance or litigation depending on role.",portfolio:"Case-note writing, debate/moot work, research memo and internship log.",direction:"Reading + reasoning + writing + law",route:["Class 11–12 Arts / Commerce or another compatible stream","CLAT / other applicable admission route","Integrated BA LLB / BBA LLB or later LLB","Internships + legal research","Practice / corporate / policy specialization"],next:["Reading","Logical reasoning","Legal writing","Research","Communication","Current affairs"],alternatives:["Corporate Legal","Litigation","Policy","Compliance"]},
  {id:"psych",streams:["arts"],title:"Psychologist / Mental-Health Research Route",tone:"plum",track:"Arts • Psychology",degree:"BA/BSc Psychology + postgraduate qualification as role requires",summary:"Study human behaviour and build toward research, counselling or applied psychology roles with the required higher qualifications.",work:"Assessment support, research, behavioural observation, education or counselling-related work depending on qualifications.",portfolio:"Research summary, observation notes, psychology project and evidence-based reading log.",direction:"Psychology + research + communication",route:["Class 11–12 Arts with Psychology where available","BA/BSc Psychology","Postgraduate qualification for advanced/specialist roles","Supervised practical experience","Further specialization as required"],next:["Research methods","Statistics","Psychology theory","Ethics","Communication","Observation"],alternatives:["HR","Counselling pathways","Research","Education"]},
  {id:"journalist",streams:["arts","commerce"],title:"Journalist / Media Researcher",tone:"rose",track:"Arts / Commerce • Media",degree:"BA Journalism / Mass Communication or related",summary:"Research, report and communicate stories across print, broadcast and digital media.",work:"Reporting, interviews, fact-checking, writing, editing and multimedia production.",portfolio:"Three well-sourced story pieces or a small reporting portfolio.",direction:"Research + writing + media skills",route:["Class 11–12 Arts / Commerce or compatible route","Journalism / mass communication degree or related route","Reporting practice + internships","Build a verified portfolio","Specialize in data, business, culture or public affairs"],next:["Writing","Interviewing","Fact-checking","Video/audio basics","Research","Ethics"],alternatives:["Content Strategist","Editor","Communications","Digital Media"]},
  {id:"policy",streams:["arts","commerce"],title:"Policy Researcher / Development Professional",tone:"blue",track:"Arts / Commerce • Policy & Society",degree:"BA/BS/BCom + MA/MPP/related PG for many roles",summary:"Study public problems, evaluate programmes and communicate evidence for policy and development work.",work:"Desk research, data review, programme analysis, stakeholder interviews and reporting.",portfolio:"Policy brief using public evidence, charts and a clear problem statement.",direction:"Research + writing + governance + data",route:["Class 11–12 Arts / Commerce","Graduation in social science, economics, business or related field","Research methods + data skills","Internship / project in policy or development","Postgraduate specialization for advanced roles"],next:["Research methods","Writing","Statistics","Policy reading","Presentation","Data visualization"],alternatives:["Civil Services","Economics","Think Tanks","Development Sector"]},
  {id:"teacher",streams:["arts","commerce","pcb","pcm","pcmb"],title:"Teacher / Education Professional",tone:"teal",track:"All Streams • Education",degree:"Bachelor's + teacher-education / eligibility route as applicable",summary:"Build subject expertise and communication skills to teach, mentor or develop learning content.",work:"Lesson planning, teaching, assessment, mentoring and educational content.",portfolio:"Lesson plan, teaching demo and a small set of student-friendly learning resources.",direction:"Subject expertise + communication + pedagogy",route:["Choose a strong subject foundation","Relevant bachelor's degree","Teacher-education / eligibility route as required","Classroom or tutoring experience","Build specialization and digital teaching skills"],next:["Subject knowledge","Communication","Pedagogy","Assessment","Digital tools","Empathy"],alternatives:["Instructional Design","Academic Coordinator","EdTech Content","Research"]},

  {id:"civilservices",streams:["arts","commerce","pcm","pcb","pcmb"],title:"Civil Services / Public Administration",tone:"rose",track:"All Streams • Public Service",degree:"Any eligible graduation route",summary:"Build a broad academic foundation, writing ability and exam preparation for public-service and policy pathways.",work:"Policy research, administration, public programmes or examination-based services depending on route.",portfolio:"Reading notes, writing samples, projects and evidence of sustained preparation.",direction:"Reading + writing + governance knowledge",route:["Class 11–12 in any stream","Graduation in a suitable subject","UPSC/MPSC preparation after eligibility","Written examination + interview stages as applicable","Service-specific training"],next:["Reading habit","Writing","Current affairs","Governance","Data interpretation","Communication"],alternatives:["Law","Public Policy","Research","Journalism","Development sector"]},

  {id:"cad",streams:["vocational"],title:"CAD / Design Technician",tone:"blue",track:"Vocational • CAD & Technical Design",degree:"Diploma / ITI / B.Voc + CAD specialization",summary:"Turn technical drawings and product concepts into accurate digital models and production-ready documentation.",work:"2D/3D drafting, CAD modeling, drawing updates and technical documentation.",portfolio:"Small CAD project set with dimensioned drawings and a simple 3D model.",direction:"Technical drawing + software + precision",route:["ITI / Polytechnic / B.Voc route","Learn drafting and measurement","AutoCAD / SolidWorks / similar tools","Workshop or industry project","Specialize in mechanical, civil or product design"],next:["Technical drawing","CAD","Measurement","Materials","Documentation","Precision"],alternatives:["Design Engineer","Draftsman","Production Technician","3D Modeler"]},
  {id:"automation",streams:["vocational","pcm"],title:"Automation / PLC Technician",tone:"indigo",track:"Vocational / PCM • Automation",degree:"Diploma / ITI / B.Voc",summary:"Work with industrial automation, control panels, sensors and programmable systems.",work:"Wiring, control systems, PLC setup support, testing and maintenance.",portfolio:"Safe training-board automation project with wiring diagram and logic explanation.",direction:"Electrical basics + control + troubleshooting",route:["ITI / Polytechnic / technical route","Electrical/electronics basics","PLC + sensors + control concepts","Industrial training / apprenticeship","Specialize in automation maintenance or commissioning"],next:["Electrical safety","PLC basics","Sensors","Motors","Wiring diagrams","Troubleshooting"],alternatives:["Industrial Electrician","Instrumentation Technician","Maintenance Technician","Robotics Technician"]},
  {id:"evtech",streams:["vocational","pcm"],title:"EV / Automotive Technician",tone:"orange",track:"Vocational / PCM • Electric Mobility",degree:"ITI / Diploma / B.Voc",summary:"Build practical skills for electric vehicles, diagnostics, service and workshop operations.",work:"Vehicle inspection, diagnostics, service support and safe maintenance practices.",portfolio:"Training project documenting EV systems, diagnostics steps and safety checks.",direction:"Mechanical + electrical + diagnostics",route:["ITI / Diploma / skill programme","Automotive fundamentals","EV systems + battery safety","Workshop apprenticeship","Specialize in service, diagnostics or fleet support"],next:["Automotive basics","Electrical safety","Diagnostics","Battery systems","Tools","Documentation"],alternatives:["Automotive Technician","Service Advisor","Battery Technician","Fleet Operations"]},
  {id:"solar",streams:["vocational","pcm"],title:"Solar / Renewable Energy Technician",tone:"amber",track:"Vocational / PCM • Renewable Energy",degree:"ITI / Diploma / Skill qualification",summary:"Install, inspect and maintain small renewable-energy systems with a strong focus on safety and practical skill.",work:"Installation support, basic testing, maintenance and troubleshooting of solar systems.",portfolio:"A safe training/demo system with a wiring diagram, energy estimate and maintenance checklist.",direction:"Electrical basics + field skill + sustainability",route:["ITI / Diploma / technical route","Basic electrical and measurement skills","Solar installation training","Supervised field practice","Specialize in O&M or system installation"],next:["Electrical safety","Measurement","Solar basics","Wiring","Maintenance","Documentation"],alternatives:["Electrical Technician","Energy Auditor","Solar O&M","Green Building Support"]},
  {id:"networktech",streams:["vocational"],title:"IT Support / Network Technician",tone:"green",track:"Vocational • IT Infrastructure",degree:"ITI / Diploma / B.Voc",summary:"Support computers, local networks, devices and basic IT operations in schools, offices and businesses.",work:"Device setup, troubleshooting, user support and basic network maintenance.",portfolio:"A small documented home-lab/network setup with troubleshooting notes.",direction:"Hands-on computing + networking + support",route:["ITI / Diploma / B.Voc route","Computer hardware basics","Networking fundamentals","Practice troubleshooting and documentation","Entry-level support role + certifications where useful"],next:["Computer hardware","Networking","Windows / Linux","Troubleshooting","Documentation","Customer support"],alternatives:["System Administrator","Cloud Support","Cybersecurity","Field Technician"]},
  {id:"industrial",streams:["vocational"],title:"Industrial Maintenance Technician",tone:"teal",track:"Vocational • Industry & Manufacturing",degree:"ITI / Diploma",summary:"Maintain industrial equipment by combining safe procedures, inspection and practical troubleshooting.",work:"Preventive maintenance, inspection, basic repair support and safety procedures.",portfolio:"Maintenance checklist, equipment study and supervised workshop project.",direction:"Mechanical/electrical basics + reliability",route:["ITI / Polytechnic route","Workshop practice + safety","Maintenance systems + tools","Apprenticeship / shop-floor exposure","Specialize in mechanical, electrical or instrumentation work"],next:["Workshop safety","Mechanical basics","Electrical basics","Tools","Troubleshooting","Maintenance records"],alternatives:["Production Technician","Automation Technician","Quality Technician","Field Service Technician"]}
];

export const scholarships = [
  {name:"National Scholarship Portal (NSP)",provider:"Government of India",streams:["pcm","pcb","pcmb","commerce","arts","vocational"],type:"Government",eligibility:"Scheme-specific: income, category, merit, course and other conditions",coverage:"Varies by scheme",link:"https://scholarships.gov.in/"},
  {name:"Maharashtra State Scholarship / MahaDBT schemes",provider:"Government of Maharashtra",streams:["pcm","pcb","pcmb","commerce","arts","vocational"],type:"State Government",eligibility:"Scheme-specific domicile, income, category and course conditions",coverage:"Varies by scheme",link:"https://mahadbt.maharashtra.gov.in/"},
  {name:"PM-USP / Central Sector Scholarship",provider:"Government of India",streams:["pcm","pcb","pcmb","commerce","arts"],type:"Government",eligibility:"Check current merit, income and application conditions",coverage:"As notified",link:"https://scholarships.gov.in/"},
  {name:"INSPIRE Scholarship",provider:"Department of Science & Technology",streams:["pcm","pcb","pcmb"],type:"Science scholarship",eligibility:"Current INSPIRE eligibility and subject/course rules",coverage:"As notified",link:"https://online-inspire.gov.in/"},
  {name:"AICTE Pragati / Saksham / related schemes",provider:"AICTE",streams:["pcm","pcmb","commerce","arts","vocational"],type:"Professional education support",eligibility:"Scheme-specific; verify current notification",coverage:"As notified",link:"https://www.aicte-india.org/"},
  {name:"Institute Merit / Need-based Aid",provider:"Individual institutions",streams:["pcm","pcb","pcmb","commerce","arts","vocational"],type:"Institutional",eligibility:"Depends on institution, programme and family circumstances",coverage:"Institution-specific",link:"https://www.education.gov.in/"},
  {name:"Private scholarships directory",provider:"Verified scheme portals / foundations",streams:["pcm","pcb","pcmb","commerce","arts","vocational"],type:"Private / Foundation",eligibility:"Varies",coverage:"Varies",link:"https://scholarships.gov.in/"}
];

export const loans = [
  {name:"Public-sector education loans",rate:"Check lender's current published rate",collateral:"Depends on loan amount and lender",moratorium:"Course + lender-defined period",compare:"Compare processing fee, interest subsidy eligibility, collateral, repayment tenure and total repayment."},
  {name:"Government-linked education finance schemes",rate:"Scheme/lender dependent",collateral:"Scheme dependent",moratorium:"Scheme/lender dependent",compare:"Check current eligibility and whether an interest subsidy or guarantee is available."},
  {name:"Private education loans",rate:"Lender and borrower dependent",collateral:"Product dependent",moratorium:"Product dependent",compare:"Look beyond EMI: compare total interest, fees, foreclosure terms and repayment burden."}
];

export const sampleSearchItems = [
  ...streams.map(s=>({id:s.id,type:"Stream",name:s.title})),
  ...exams.map(e=>({id:e.id,type:"Exam",name:e.name})),
  ...institutions.map(i=>({id:i.id,type:"Institution",name:i.name})),
  ...careers.map(c=>({id:c.id,type:"Career",name:c.title}))
];
