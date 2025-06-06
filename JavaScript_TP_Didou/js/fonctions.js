const sectionImageMap = {
    chien: "assets/img/chien.jpg",
    cheetah: "assets/img/cheetah.jpg",
    rat: "assets/img/rat.jpg",
    singe: "assets/img/singe.jpg",
    cochon: "assets/img/cochon.jfif",
    squirrel: "assets/img/squirrel.jfif",
  };

function changeImage(id_image) {
    const id_image_map = {
        chien: 'chien',
        cheetah: 'cheetah',
        rat: 'rat',
        singe: 'singe',
        cochon: 'cochon',
        squirrel: 'squirrel'
        };
    switch (id_image) {
      case "chien":
        document.getElementById('id_image').src = sectionImageMap.chien;
        break;
      case 'cheetah':
        document.getElementById('id_image').src = sectionImageMap.cheetah;
        break;
      case 'rat':
        document.getElementById('id_image').src = sectionImageMap.rat;
        break;
      case 'singe':
        document.getElementById('id_image').src = sectionImageMap.singe;
        break;
        case 'cochon':
        document.getElementById('id_image').src = sectionImageMap.cochon;
        break;
        case 'squirrel':
        document.getElementById('id_image').src = sectionImageMap.squirrel;
        break;
      default:
        console.error('Image non trouvée');

    }    
  }

function ChangeText(text) {
    const textMap = {
        chien: "un chien",
        cheetah: "un guépard",
        rat: "un rat",
        singe: "un singe",
        cochon: "un cochon",
        squirrel: "un squirrel"
    };
    const textElement = document.querySelector("#id_quoi");
    textElement.textContent = textMap[text] || "un animal...";
}

function carousselhover(id_image){
  const caroussel = document.createElement('div');
  caroussel.id = "caroussel";
  const carousselMap = sectionImageMap;
    Object.keys (carousselMap).forEach(animal => {
        carousselMap = document.createElement('img');
        carousselMap.src = sectionImageMap[id_image];
        carousselMap.alt = "Image de l'animal";
        carousselMap.style.width = "100px";
        carousselMap.style.height = "100px";
        carousselMap.style.position = "absolute";
        caroussel.appendChild(carousselMap);

        carousselMap.addEventListener('mouseover', function() {
            changeImage(animal);
            ChangeText(animal);
        })

      })
}

document.querySelectorAll('input[type="button"]').forEach(input => {
    input.addEventListener('click', function() {
        const animal = this.value;
        changeImage(animal);
        ChangeText(animal);
    })
    
     
    });
    carousselhover();



