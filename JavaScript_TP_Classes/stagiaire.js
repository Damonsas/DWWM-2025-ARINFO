class Stagiaire {
    nom;
    prenom; 

    salutation() {
        return `je m'appelle ${this.prenom} ${this.nom}`;
    }
    
}

constructor(nom, prenom) 
{
    this.nom = nom;
    this.prenom = prenom;
}




