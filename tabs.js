(() => {
    /* Logique generale
    On écoute le clic sur les onglets
    on retire la class active de l'onglet actif
    on ajoute active a l'onglet selectionné

    on retire la class active sur le contenu actif
    on ajoute active au contenu selectionné par le clic
    */

    const afficherOnglet = (a) => {
    const li = a.parentNode
    const div = a.parentNode.parentNode.parentNode
    const activeTab = div.querySelector('.tab-content.active') 
    const aAfficher = div.querySelector(a.getAttribute('href'))
    
    if(li.classList.contains('active')){
        return false
    } 
    
    //on retire la class active de l'onglet actif
    div.querySelector('.tabs .active').classList.remove('active')
    
    //on ajoute active a l'onglet selectionné
    li.classList.add('active')

    //on retire la class active sur le contenu actif
    //div.querySelector('.tab-content.active').classList.remove('active')

    //on ajoute active au contenu selectionné par le clic
    //div.querySelector(a.getAttribute('href')).classList.add('active')

    // On ajoute la classe fade sur l'element actif
    //a la fin de l'animation
        //On retire fade et active
        //On ajoute active et fade a l'element selectionné
        //On ajoute la classe in

    activeTab.classList.add('fade')
    activeTab.classList.remove('in')
    const transitionend = function() {
        this.classList.remove('fade')
        this.classList.remove('active')
        aAfficher.classList.add('active')
        aAfficher.classList.add('fade')
        aAfficher.offsetWithd // force les changements au dessus avant de faire celui du dessous
        aAfficher.classList.add('in')
        activeTab.removeEventListener('transitionend', transitionend)
    }
    activeTab.addEventListener('transitionend', transitionend)

}

    const tabs = document.querySelectorAll('.tabs a')

    tabs.forEach((tab) =>{
        tab.addEventListener('click', function(e){
            afficherOnglet(this)
        })        
    }) 

    /*
    On recupere le hash dans l'url
    On ajoute la class active sur le lien hash
    On retire la classe active sur les autres onglets
    On affiche et masque les contenus
    */

    const hashChange = function() {
        const hash = window.location.hash        
        const a = document.querySelector('a[href="' + hash + '"]')
        if (a !== null && !a.classList.contains('active')){
            afficherOnglet(a)
        }
    }
    window.addEventListener('hashchange', hashChange)
    hashChange()
})()
