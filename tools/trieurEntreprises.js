/* Author : Albert Jannard*/
/* ====================================================
Script qui permet de trier les entreprises par catégories et sous catégories
Le script prend en entrée un fichier JSON contenant les entreprises
Le script retourne un fichier JSON contenant les entreprises triées par catégories et sous catégories
=========================================================*/

const fs = require('fs');

var input_file = 'entreprises.json'; // Chemin par défaut du fichier d'entrée
let rawdata = fs.readFileSync(input_file);
let file = JSON.parse(rawdata);


var corespondance = {
    "Agriculteur": ["agriculteur"],
    "Acériculteurs": ["agriculteur","acericulteurs"],
    "Apiculteurs": ["agriculteur","apiculteurs"],
    "Fermes maraîchères": ["agriculteur","fermes_maraicheres"],
    "Fermes laitières": ["agriculteur","fermes_laitieres"],
    "Fermes d'élevage": ["agriculteur","fermes_elevage"],
    "Fermes certifiée Bio": ["agriculteur","fermes_certifiee_bio"],
    "Serriculteurs": ["agriculteur","serriculteurs"],
    "Pomiculteurs": ["agriculteur","pomiculteurs"],

    "Agroalimentaire": ["agroalimentaire"],
    "Épiceries fines": ["agroalimentaire","epiceries_fines"],
    "Boulangeries": ["agroalimentaire","boulangeries"],
    "Boucheries": ["agroalimentaire","boucheries"],
    "Fromageries": ["agroalimentaire","fromageries"],
    "Microbrasseries": ["agroalimentaire","microbrasseries"],
    "Vignobles": ["agroalimentaire","vignobles"],
    "Cidreries": ["agroalimentaire","cidreries"],
    "Dégustation sur place": ["agroalimentaire","degustation_sur_place"],
    "Produits acéricoles": ["agroalimentaire","produits_acericoles"],
    "Mets préparés": ["agroalimentaire","mets_prepares"],

    "Activités": ["activites"],
    "Visites guidées": ["activites","visites_guidees"],
    "Centres d'interprétation": ["activites","centres_interpretation"],
    "Musées": ["activites","musees"],
    "Autocueillette": ["activites","autocueillette"],
    "Foire agricole": ["activites","foire_agricole"],
    "Aires de pique-nique": ["activites","aires_de_pique_nique"],
    "Marchés publics": ["activites","marches_publics"],
    "Activités récréatives": ["activites","activites_recreatives"],
    
    "Hébergement": ["hebergement"],
    "Centres de villégiature": ["hebergement","centres_de_villegiature"],
    "Bed &amp; breakfast": ["hebergement","bed_breakfast"],
    "Location de chalets": ["hebergement","location_de_chalets"],
    "Centre de spa": ["hebergement","centre_de_spa"],
    "Hôtels": ["hebergement","hotels"],
    "Camping": ["hebergement","camping"],

    "Restauration": ["restauration"],
    "Cabanes à sucre": ["restauration","cabanes_a_sucre"],
    "Bistros": ["restauration","bistros"],
    "Restaurants gastronomiques": ["restauration","restaurants_gastronomiques"],
    "Casse-croûtes": ["restauration","casse_croutes"],
};

var output = {
    "entreprise": [],
    "categories": {
        "agriculteur": {
            "name": "Agriculteur",
            "categories": {
                "acericulteurs": {
                    "name": "Acériculteurs",
                    "entreprise_id": []
                },
                "apiculteurs": {
                    "name": "Apiculteurs",
                    "entreprise_id": []
                },
                "fermes_maraicheres": {
                    "name": "Fermes maraîchères",
                    "entreprise_id": []
                },
                "fermes_laitieres": {
                    "name": "Fermes laitières",
                    "entreprise_id": []
                },
                "fermes_elevage": {
                    "name": "Fermes d'élevage",
                    "entreprise_id": []
                },
                "fermes_certifiee_bio": {
                    "name": "Fermes certifiée Bio",
                    "entreprise_id": []
                },
                "serriculteurs": {
                    "name": "Serriculteurs",
                    "entreprise_id": []
                },
                "pomiculteurs": {
                    "name": "Pomiculteurs",
                    "entreprise_id": []
                },
            }
        },
        "agroalimentaire": {
            "name": "Agroalimentaire",
            "categories": {
                "epiceries_fines": {
                    "name": "Épiceries fines",
                    "entreprise_id": []
                },
                "boulangeries": {
                    "name": "Boulangeries",
                    "entreprise_id": []
                },
                "boucheries": {
                    "name": "Boucheries",
                    "entreprise_id": []
                },
                "fromageries": {
                    "name": "Fromageries",
                    "entreprise_id": []
                },
                "microbrasseries": {
                    "name": "Microbrasseries",
                    "entreprise_id": []
                },
                "vignobles": {
                    "name": "Vignobles",
                    "entreprise_id": []
                },
                "cidreries": {
                    "name": "Cidreries",
                    "entreprise_id": []
                },
                "degustation_sur_place": {
                    "name": "Dégustation sur place",
                    "entreprise_id": []
                },
                "produits_acericoles": {
                    "name": "Produits acéricoles",
                    "entreprise_id": []
                },
                "mets_prepares": {
                    "name": "Mets préparés",
                    "entreprise_id": []
                },
            }
        },
        "activites": {
            "name": "Activités",
            "categories": {
                "visites_guidees": {
                    "name": "Visites guidées",
                    "entreprise_id": []
                },
                "centres_interpretation": {
                    "name": "Centres d'interprétation",
                    "entreprise_id": []
                },
                "musees": {
                    "name": "Musées",
                    "entreprise_id": []
                },
                "autocueillette": {
                    "name": "Autocueillette",
                    "entreprise_id": []
                },
                "foire_agricole": {
                    "name": "Foire agricole",
                    "entreprise_id": []
                },
                "aires_de_pique_nique": {
                    "name": "Aires de pique-nique",
                    "entreprise_id": []
                },
                "marches_publics": {
                    "name": "Marchés publics",
                    "entreprise_id": []
                },
                "activites_recreatives": {
                    "name": "Activités récréatives",
                    "entreprise_id": []
                },
            }
            
        },
        "hebergement": {
            "name": "Hébergement",
            "categories": {
                "centres_de_villegiature": {
                    "name": "Centres de villégiature",
                    "entreprise_id": []
                },
                "bed_breakfast": {
                    "name": "Bed &amp; breakfast",
                    "entreprise_id": []
                },
                "location_de_chalets": {
                    "name": "Location de chalets",
                    "entreprise_id": []
                },
                "centre_de_spa": {
                    "name": "Centre de spa",
                    "entreprise_id": []
                },
                "hotels": {
                    "name": "Hôtels",
                    "entreprise_id": []
                },
                "camping": {
                    "name": "Camping",
                    "entreprise_id": []
                },
            }
        },
        "restauration": {
            "name": "Restauration",
            "categories": {
                "cabanes_a_sucre": {
                    "name": "Cabanes à sucre",
                    "entreprise_id": []
                },
                "bistros": {
                    "name": "Bistros",
                    "entreprise_id": []
                },
                "restaurants_gastronomiques": {
                    "name": "Restaurants gastronomiques",
                    "entreprise_id": []
                },
                "casse_croutes": {
                    "name": "Casse-croûtes",
                    "entreprise_id": []
                },
            }
        }
    }
};

var id = 0; // Nouvelle variable pour l'ID

file.forEach((entreprise) => {
    output['entreprise'].push({
        'id': id, // Ajout de l'ID
        'name': entreprise["Nom"],
        'address': entreprise["Adresse"],
        'city': entreprise["Ville"],
        'postal_code': entreprise["Code postal"],
        'phone': entreprise["Telephone"],
        'logo': entreprise["url logo"],
        'website': entreprise["Site web"],
        'description': entreprise["Description"],
    });
    // Suppression des détails de l'entreprise
    ["Nom","Adresse","Ville","Code postal","Telephone","url logo","Site web","Description"].forEach(e => delete entreprise[e]);
    
    var i = 0; 
    var categoryPath;
    var pointer = output['categories'];
    
    for (const [category, data] of Object.entries(entreprise)) {
        if(corespondance[category] !== undefined) {
            categoryPath = [...corespondance[category]];
            while (categoryPath.length !== 0) {
                pointer = pointer[categoryPath[0]];
                categoryPath.shift();
                if (categoryPath.length > 0) {
                    pointer = pointer['categories'];
                }
            }

            if(pointer === undefined) {
                console.warn(`Entreprise ${id} -> Correspondance not found : ${category}`);
            } else {
                if(pointer['entreprise_id'] !== undefined) {
                    pointer['entreprise_id'].push(id);
                } else {
                    console.warn(`Entreprise ${id} -> Correspondance not found : ${category}`);
                }
            }
            pointer = output['categories'];
        }
    }
    
    id++; // Incrément de l'ID pour la prochaine entreprise
});

var jsonContent = JSON.stringify(output); // Conversion de l'objet en JSON
var output_file = 'output.json'; // Chemin par défaut du fichier de sortie
fs.writeFile(output_file, jsonContent, 'utf8', function (err) {
    if (err) {
        console.log("An error occurred while writing JSON Object to File.");
        return console.log(err);
    }
    console.log("JSON file has been saved.");
});

