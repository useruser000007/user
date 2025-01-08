// Merrni të gjithë lidhjet për studimet e rasteve
const caseCards = document.querySelectorAll('.card');

// Modal dhe elementët e tij
const modal = document.getElementById("case-modal");
const modalTitle = document.getElementById("modal-title");
const modalDescription = document.getElementById("modal-description");
const closeModal = document.querySelector(".close");

// Shënimi i informacionit për secilin rast
const caseData = {
    A: {
        title: "Rasti i Kompanisë A",
        description: "Kompania A kaloi me sukses në cloud për të rritur efikasitetin dhe për të optimizuar shpenzimet operacionale. Ata përdorën teknologji të avancuar për ruajtjen e të dhënave dhe për përmirësimin e performancës së sistemeve."
    },
    B: {
        title: "Rasti i Kompanisë B",
        description: "Kompania B arriti të përmirësojë sigurinë e të dhënave dhe të rrisë fleksibilitetin e shërbimeve duke përdorur cloud. Ata mund të reagojnë më shpejt ndaj kërkesave të tregut dhe të përmirësojnë shërbimet për klientët."
    },
    C: {
        title: "Rasti i Kompanisë C",
        description: "Pas kalimit në cloud, kompania C arriti të zvogëlojë shpenzimet operacionale dhe të rrisë efikasitetin. Përdorimi i shërbimeve të cloud përmirësoi aftësinë për të menaxhuar të dhënat dhe për të ofruar shërbime më të shpejta."
    }
};

// Përdorni JavaScript për të hapur modalin kur të klikoni mbi një kartë
caseCards.forEach(card => {
    card.addEventListener("click", function() {
        const caseKey = this.getAttribute("data-case");
        
        modalTitle.textContent = caseData[caseKey].title;
        modalDescription.textContent = caseData[caseKey].description;
        
        modal.style.display = "block";
    });
});

// Mbyllni modalin kur të klikoni mbi simbolin e mbylljes
closeModal.addEventListener("click", function() {
    modal.style.display = "none";
});

// Mbyllni modalin edhe nëse klikoni jashtë tij
window.addEventListener("click", function(e) {
    if (e.target === modal) {
        modal.style.display = "none";
    }
});