export type ProjectCategory = "conceptual" | "technical" | "urban";

export interface Project {
  slug: string;
  number: string;
  title: string;
  subtitle: string;
  year: string;
  category: ProjectCategory;
  type: string;
  location: string;
  role: string;
  tools: string[];
  theme: string;
  summary: string;
  description: string[];
  tags: string[];
  featured: boolean;
  coverColor: string;
  accentColor: string;
  sections: {
    label: string;
    content: string;
  }[];
}

export const projects: Project[] = [
  {
    slug: "oneness",
    number: "01",
    title: "Oneness",
    subtitle: "A Philosophy Guiding the Development of Omkareshwar",
    year: "2023",
    category: "conceptual",
    type: "Undergraduate Thesis / Vision Plan",
    location: "Omkareshwar, India",
    role: "Lead Designer & Researcher",
    tools: ["AutoCAD", "SketchUp", "Lumion", "Photoshop", "InDesign"],
    theme: "Sacred geometry, Vedic principles, and sustainable urbanism.",
    summary:
      "A vision plan for the sacred pilgrimage city of Omkareshwar rooted in Vedic geometry, sustainability principles, and a deep understanding of place. Winner of COA National & Zonal Awards and IIA State-level Award.",
    description: [
      "Omkareshwar is one of the twelve Jyotirlinga sites in India — a sacred island shaped like the symbol 'OM' at the confluence of the Narmada and Kaveri rivers.",
      "The thesis proposes a guiding philosophy for the city's upcoming development: one that honors the spiritual, ecological, and cultural layers of the site while enabling thoughtful growth.",
      "Drawing from Vastu Shastra, sacred geometry, and contemporary planning theory, the vision plan establishes spatial hierarchies, movement systems, and building typologies that feel indigenous to the place.",
      "The project won COA National and Zonal Awards and the IIA State-level Award — recognizing both its research depth and design quality.",
    ],
    tags: ["Thesis", "Urban Vision", "Sacred Architecture", "Vedic Geometry", "Sustainability"],
    featured: true,
    coverColor: "#590d22",
    accentColor: "#c9184a",
    sections: [
      {
        label: "Research",
        content:
          "Extensive site documentation of pilgrimage patterns, ecological systems, heritage precincts, and existing development pressures.",
      },
      {
        label: "Concept",
        content:
          "The concept of 'Oneness' draws from the form of the OM symbol — circular, continuous, without hierarchy — to structure the entire spatial vision.",
      },
      {
        label: "Vision Plan",
        content:
          "A multi-layered masterplan addressing movement corridors, ghats, civic spaces, housing typologies, and ecological buffers.",
      },
      {
        label: "Recognition",
        content:
          "Winner — COA National Award, COA Zonal Award, IIA State-level Award (2023).",
      },
    ],
  },
  {
    slug: "formula-1",
    number: "02",
    title: "Formula 1",
    subtitle: "Architecture of Speed and Spectacle",
    year: "2022",
    category: "conceptual",
    type: "Academic Design Project",
    location: "India",
    role: "Designer",
    tools: ["Rhino", "SketchUp", "Lumion", "Photoshop", "Illustrator"],
    theme: "Motion, precision, and the architecture of performance.",
    summary:
      "A design exploration into the architecture of Formula 1 — where speed, spatial sequence, and public spectacle converge into a highly technical, experiential building program.",
    description: [
      "The project investigates how architecture can embody the qualities of Formula 1 racing: precision, aerodynamics, the blur of motion, and the collective energy of a crowd.",
      "The program includes a race circuit support facility, spectator infrastructure, and a brand experience center — each layer responding to a different pace of occupation.",
      "Design moves draw from automotive form-making: cantilevered roof systems, dramatic sightlines, material contrasts between carbon-fiber lightness and concrete weight.",
      "The spatial sequence mirrors a race weekend — arrival, anticipation, spectacle, deceleration — giving the architecture a temporal, narrative quality.",
    ],
    tags: ["Sports Architecture", "Spectacle", "Form-Making", "Sequencing"],
    featured: true,
    coverColor: "#800f2f",
    accentColor: "#ff4d6d",
    sections: [
      {
        label: "Concept",
        content: "Architecture as frozen motion — drawing from the aerodynamic language of F1 cars to create fluid, directional spatial experiences.",
      },
      {
        label: "Program",
        content: "Race facility, spectator grandstands, paddock, brand experience center, and public plaza.",
      },
      {
        label: "Structure",
        content: "Cantilevered steel roof systems with tensioned fabric panels over the grandstand — minimal supports, maximum drama.",
      },
    ],
  },
  {
    slug: "reframing-le-corbusier",
    number: "03",
    title: "Reframing Le Corbusier's Vision",
    subtitle: "Critical Research on Chandigarh",
    year: "2022",
    category: "conceptual",
    type: "Research & Critical Analysis",
    location: "Chandigarh, India",
    role: "Researcher & Visual Communicator",
    tools: ["AutoCAD", "Photoshop", "InDesign", "Illustrator"],
    theme: "Colonial modernism, urban critique, and spatial justice.",
    summary:
      "A critical reexamination of Le Corbusier's Chandigarh — interrogating the gap between utopian vision and lived reality, and proposing alternative frameworks for reading the city.",
    description: [
      "Chandigarh is often celebrated as a modernist triumph — Le Corbusier's most ambitious urban project. But what happens when you look at it from the perspective of its residents?",
      "This research project reconstructs the design intentions of Chandigarh while critically examining how those intentions played out: the displacement, the cultural erasure, the failure of the 'machine for living' to account for human complexity.",
      "Through comparative mapping, historical analysis, and visual storytelling, the project proposes a richer, more honest reading of modernism's relationship with the postcolonial city.",
      "The work draws on urban theory, postcolonial studies, and architectural history to build a layered argument about what cities owe their inhabitants.",
    ],
    tags: ["Research", "Urbanism", "History", "Critical Theory", "Le Corbusier"],
    featured: true,
    coverColor: "#a4133c",
    accentColor: "#ff758f",
    sections: [
      {
        label: "Historical Context",
        content: "Post-partition India, the making of a new capital, and the choice of a Western modernist as its architect.",
      },
      {
        label: "Analysis",
        content: "Comparative mapping of the planned city vs. the evolved city — sector logic, informal settlements, pedestrian reality vs. vehicular vision.",
      },
      {
        label: "Critique",
        content: "A spatial justice lens applied to Chandigarh: whose vision? Whose city? Whose bodies does this space serve?",
      },
      {
        label: "Reframing",
        content: "Alternative graphic narratives that reveal complexity, contradition, and the city's resilience despite (or because of) its utopian origins.",
      },
    ],
  },
  {
    slug: "360-riverside-housing",
    number: "04",
    title: "360 Riverside Housing",
    subtitle: "Affordable Housing on Contested Urban Ground",
    year: "2022",
    category: "conceptual",
    type: "Design Studio Project",
    location: "India",
    role: "Lead Designer",
    tools: ["AutoCAD", "SketchUp", "Lumion", "Photoshop", "Rhino"],
    theme: "Community, density, and the dignity of affordable housing.",
    summary:
      "A housing proposal that challenges the stigma of affordable architecture by creating a dense, community-centered development with strong spatial identity, river frontage, and layered public amenities.",
    description: [
      "The project addresses a critical urban question: how do you build dense, affordable housing that doesn't feel like a compromise?",
      "The site sits along a riverfront — a contested but generative condition that shapes every design decision: orientation, flood logic, ground-floor activation, and views.",
      "The design breaks the typical slab block model into a series of interlocking courtyard clusters, creating varied spatial experiences while maintaining density.",
      "A gradient of public to private space runs from the river edge through community gardens, shared terraces, and finally into the residential clusters — ensuring that common ground is genuinely common.",
    ],
    tags: ["Housing", "Affordable", "Community", "Waterfront", "Urban Design"],
    featured: true,
    coverColor: "#590d22",
    accentColor: "#c9184a",
    sections: [
      {
        label: "Site Strategy",
        content: "Riverfront engagement, flood resilience, and the integration of existing informal settlement patterns.",
      },
      {
        label: "Typology",
        content: "Courtyard cluster housing organized around shared garden courts — breaking the monotony of repetitive affordable housing.",
      },
      {
        label: "Community Program",
        content: "Integrated community center, daycare, market, and river promenade accessible to both residents and the broader public.",
      },
    ],
  },
  {
    slug: "house-of-frames",
    number: "05",
    title: "House of Frames",
    subtitle: "Architecture as a Series of Curated Views",
    year: "2021",
    category: "conceptual",
    type: "Design Studio Project",
    location: "India",
    role: "Lead Designer",
    tools: ["AutoCAD", "SketchUp", "V-Ray", "Photoshop", "Illustrator"],
    theme: "Phenomenology, framing, and the architecture of perception.",
    summary:
      "A residential project built around the idea of framing — where each room is designed to frame a specific view, time of day, or quality of light, turning the house into an instrument of perception.",
    description: [
      "The House of Frames starts from a phenomenological premise: what if every architectural decision was made in service of a specific perceptual experience?",
      "Each space in the house is designed to frame something — a garden view, the morning sun, a distant hill, the pattern of rain on a courtyard surface.",
      "The structure itself becomes secondary to the frame: walls, apertures, columns, and roof edges are all positioned to control what you see, and how you see it.",
      "The result is a house that feels alive to time — different at every hour, every season, every weather — because its architecture is calibrated to those shifts.",
    ],
    tags: ["Residential", "Phenomenology", "Light", "Perception", "Framing"],
    featured: true,
    coverColor: "#800f2f",
    accentColor: "#ff8fa3",
    sections: [
      {
        label: "Concept",
        content: "The frame as architectural protagonist — windows, openings, and spatial thresholds as the primary design generators.",
      },
      {
        label: "Spatial Sequence",
        content: "A choreographed movement through light conditions: dark entry, filtered living, bright kitchen, soft bedroom, open roof terrace.",
      },
      {
        label: "Material",
        content: "Exposed concrete, terracotta screens, and timber — each material chosen for how it responds to light across the day.",
      },
    ],
  },
  {
    slug: "technical-farmhouse",
    number: "06",
    title: "Farm House, Pune",
    subtitle: "From Schematic to Construction Documents",
    year: "2023",
    category: "technical",
    type: "Professional Project",
    location: "Pune, India",
    role: "Junior Architect — Third Angle Dsync Works",
    tools: ["AutoCAD", "Revit", "SketchUp", "Photoshop"],
    theme: "Technical precision, construction coordination, and Vastu integration.",
    summary:
      "A complete residential farmhouse project taken from masterplan and schematic design through to working drawings, structural coordination, and site supervision — developed at TADW.",
    description: [
      "At The Third Angle Dsync Works (TADW) in Pune, this farmhouse project represented the full arc of professional architectural practice.",
      "Beginning with site analysis and Vastu-compliant masterplanning, the project moved through schematic design, design development, and into full working drawing sets.",
      "Documentation included floor plans, sections, elevations, slab/shuttering drawings, bathroom details, staircase details, and site coordination drawings.",
      "The role involved direct client communication, consultants coordination (structural, MEP), and periodic site visits to verify execution against drawings.",
    ],
    tags: ["Residential", "Working Drawings", "Construction", "Vastu", "Site Supervision"],
    featured: false,
    coverColor: "#590d22",
    accentColor: "#c9184a",
    sections: [
      {
        label: "Documentation",
        content: "Complete working drawing set: plans, sections, elevations, details, slab layouts, door/window schedules.",
      },
      {
        label: "Coordination",
        content: "Structural and MEP consultants coordination, RCC detailing review, and construction sequence planning.",
      },
      {
        label: "Site",
        content: "Periodic site visits for quality control, material approval, and design clarification with contractors.",
      },
    ],
  },
  {
    slug: "chicago-urban-systems",
    number: "07",
    title: "Urban Systems, Chicago",
    subtitle: "Planning, GIS, and Data at City Scale",
    year: "2025",
    category: "urban",
    type: "Professional Work — City of Chicago, DPD",
    location: "Chicago, USA",
    role: "Planning Intern — Deputy Commissioner's Office",
    tools: ["ArcGIS Pro", "Tableau", "Adobe Illustrator", "Photoshop", "InDesign"],
    theme: "Data-driven planning, comparative urbanism, and design standards.",
    summary:
      "Work at the City of Chicago Department of Planning and Development: analytical maps, comparative dashboards (Chicago vs. U.S. and global cities), GIS analysis, urban documentation, and design standard graphics.",
    description: [
      "As a Planning Intern in the Deputy Commissioner's Office at the City of Chicago's DPD, the work spanned the intersection of urban planning, data visualization, and policy design.",
      "Projects included the development of analytical maps using ArcGIS Pro, comparative dashboards in Tableau that placed Chicago alongside peer U.S. and global cities, and design standards documents for community development initiatives.",
      "Historical and contemporary urban analysis formed the backbone of much of the research — understanding how Chicago's neighborhoods evolved, what planning interventions shaped them, and where gaps in equity persist.",
      "The role also included on-site surveys, community documentation, policy review support, and reporting for the Commissioner's Process Improvement Division.",
    ],
    tags: ["GIS", "Tableau", "Urban Planning", "Policy", "Data Visualization", "Chicago"],
    featured: true,
    coverColor: "#a4133c",
    accentColor: "#ff4d6d",
    sections: [
      {
        label: "GIS Analysis",
        content: "Spatial analysis of planning zones, community areas, infrastructure, and development patterns using ArcGIS Pro.",
      },
      {
        label: "Dashboards",
        content: "Tableau dashboards comparing Chicago against U.S. and global peer cities across planning metrics and demographic indicators.",
      },
      {
        label: "Policy & Research",
        content: "Historical urban analysis, policy review, documentation, and reporting for community development projects.",
      },
    ],
  },
];

export const featuredProjects = projects.filter((p) => p.featured);
export const conceptualProjects = projects.filter((p) => p.category === "conceptual");
export const technicalProjects = projects.filter((p) => p.category === "technical");
export const urbanProjects = projects.filter((p) => p.category === "urban");
