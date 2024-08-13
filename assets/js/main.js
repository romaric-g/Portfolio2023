/**
 * Langue menu system
 */

// function toggleLanguageDropdown() {
//     document.getElementById("dropdown-states").classList.toggle("hidden");
// }

// window.onclick = function(event) {
//     if (!event.target.matches('.dropbtn')) {
//         var dropdowns = document.getElementsByClassName("dropdown-content");
//         var i;
//         for (i = 0; i < dropdowns.length; i++) {
//             var openDropdown = dropdowns[i];
//             if (!openDropdown.classList.contains('hidden')) {
//                 openDropdown.classList.add('hidden');
//             }
//         }
//     }
// }

/**
 * Categorie filter system
 */

window.onclick = function(event) {
    if (!event.target.matches(".categorie-selector")) return;

    event.preventDefault()

    type = event.target.dataset.type
    
    if (type == undefined) return;

    selectHeaderCategorie(type)
    showProjectsWithCategorie(type)
   
}

function selectHeaderCategorie(type) {
    const selectors = document.getElementsByClassName("categorie-selector");

    for (const selector of selectors) {
        selectorType = selector.dataset.type

        if (selectorType == type) {
            selector.classList.add("bg-blue-500", "text-white")
        } else {
            selector.classList.remove("bg-blue-500", "text-white")
        }
    }
}

function showProjectsWithCategorie(type) {
    const projectsPreview = document.getElementsByClassName("project-preview");

    let firstFree = true;

    for (const projectPreview of projectsPreview) {
        const categorie = projectPreview.dataset.categorie
        const isHighlight = projectPreview.dataset.highlight !== undefined;
    
        if (categorie == type || type == "ALL") {
            projectPreview.classList.remove("hidden")

            if (firstFree && isHighlight) {
                projectPreview.classList.remove("order-none")
                projectPreview.classList.add("order-first")
                firstFree = false
            } else {
                projectPreview.classList.remove("order-first")
                projectPreview.classList.remove("order-none")
            }

        } else {
            projectPreview.classList.add("hidden")
        }
    }
}