export interface Disease {
    name: string;
    description: string[];
    icon: string;
}

export const Diseases = {
    HIV: {
        name: "VIH",
        description: ["Le virus de l'immunodéficience humaine ou VIH-1, est une espèce de rétrovirus infectant l'humain et responsable du syndrome",
        "d'immunodéficience acquise (sida), qui est un état affaibli du système immunitaire"],
        icon: "/icons/MSTIcons/VIHICon.png",
    },
    Syphilis: {
        name: "Syphilis",
        description: ["La syphilis (connue familièrement sous le nom de vérole ou encore de grande vérole par opposition à",
        "la variole) est une infection sexuellement transmissible contagieuse."],
        icon: "/icons/MSTIcons/SyphilisIcon.png",
    },
    Gonorrhea: {
        name: "Gonorrhée",
        description: ["Cette infection sexuellement transmissible touche principalement les organes génitaux et urinaires.",
        "Elle est due au gonocoque."],
        icon: "/icons/MSTIcons/ChaudPisseIcon.png",
    },
    Chlamydia: {
        name: "Chlamydia",
        description: ["Les Chlamydies forment un genre de bactéries de la famille des Chlamydiae. Elles sont des bactéries !"],
        icon: "/icons/MSTIcons/ChlamydiaIcon.jpg",
    },
    Papillomavirus: {
        name: "Papillomavirus",
        description: ["Le papillomavirus humain est un virus à ADN de la famille des Papillomaviridae. Certains génotypes",
        "se transmettent par contact cutané et infectent la peau !"],
        icon: "/icons/MSTIcons/papillomaVirusIcon.jpg",
    },
    Herpes: {
        name: "Herpes",
        description: ["Les virus de l’herpès simplex, également connus sous le nom taxonomiques alphaherpèsvirus, sont",
        "un ensemble de virus qui produisent des infections virales chez la majorité des humains. "],
        icon: "/icons/MSTIcons/HerpesIcon.png",
    },
    Hepatitis_A: {
        name: "Hépatite A",
        description: ["L’hépatite A est une maladie infectieuse aigüe du foie provoqué par un virus (VHA). Elle se transmet",
        "principalement par voie féco-oral ou alimentaire."],
        icon: "/icons/MSTIcons/hepatiteBIcon.png",
    },
    Hepatitis_B: {
        name: "Hépatite B",
        description: ["Le virus de l'hépatite B cause des infections du foie chez les humains et certains animaux. Chaque",
        "virus est spécifique d'une espèce mais il peut infecter des animaux phylogénétiquement proches."],
        icon: "/icons/MSTIcons/hepatiteBIcon.png",
    },
    Fracure_du_penis: {
        name: "Fracture du penis",
        description: [],
        icon: "",
    },
    Grosesse: {
        name: "Grossesse",
        description: [],
        icon: "",
    },
};
