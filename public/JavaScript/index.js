/* 
=-=-=-=-=-=-=-=-==-=-=-=-=-=-=-=-==-=-=-=-=-=-=-=-==-=-=-=-=-=-=-=-==-=-=-=-=-=-=-=-==-=-=-=-=-=-=-=-==-=-=-=-=-=-=-=-==-=-=-=-=-=-=-=-==-=-=-=-=-=-=-=-==-=-=-=-=-=-=-=-==-=-=-=-=-=-=-=-=

TABLE OF CONTENTS

SECTION 1: Mobile Opening Animation

SECTION 2: Mobile Menu

SECTION 3: Mobile "The Company" Page

SECTION 4: Mobile "Upcoming" Page

SECTION 5: Mobile "Archive" Page

SECTION 6: Mobile "Contact" Page

SECTION 7: Desktop Opening Animation

SECTION 8: Desktop Menu

SECTION 9: Desktop "The Company" Page

SECTION 10: Desktop "Upcoming" Page

SECTION 11: Desktop "Archive" Page

SECTION 12: Desktop "Contact" Page


=-=-=-=-=-=-=-=-==-=-=-=-=-=-=-=-==-=-=-=-=-=-=-=-==-=-=-=-=-=-=-=-==-=-=-=-=-=-=-=-==-=-=-=-=-=-=-=-==-=-=-=-=-=-=-=-==-=-=-=-=-=-=-=-==-=-=-=-=-=-=-=-==-=-=-=-=-=-=-=-==-=-=-=-=-=-=-=-=
*/



if(/Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent)){

// SECTION 1: Mobile Opening Animation

// Elements

const openingAnimationTextGroup = document.getElementById('opening-animation-text-group');
openingAnimationTextGroup.style.minWidth = '92%'

const openingAnimationPulseGroup = document.getElementById('opening-animation-pulse-group');

const openingAnimationContainer = document.getElementById('opening-animation-container');

const openingAnimationTextGroupShadowInsert = () => {
    openingAnimationTextGroup.classList.add('opening-animation-text-group-shadow');
}

const openingAnimationPulseGroupInsert = () => {
    openingAnimationPulseGroup.style.display = "unset"
}

const openingAnimationContainerBackgroundColorChange = () => {
    openingAnimationContainer.style.backgroundColor = "white";
}

const openingAnimationTextGroupBackgroundColorChange = () => {
    openingAnimationTextGroup.style.backgroundColor = "black";
}

// Window On Load

window.addEventListener('load', () => {
    setTimeout(openingAnimationPulseGroupInsert, 1800)
    setTimeout(openingAnimationTextGroupShadowInsert, 1800)
})

// Click to Scroll

openingAnimationContainer.addEventListener('click', (event) => {
    console.log('check')
    event.preventDefault();

    openingAnimationContainer.scrollTo({
        top:0,
        left: window.innerWidth,
        behavior: 'smooth'
    })
})

// Mouse Over Pulse Area

openingAnimationPulseGroup.addEventListener('mouseover', () => {
    openingAnimationPulseGroup.style.cursor = "pointer";
    openingAnimationTextGroup.style.minWidth = "89%";
})

openingAnimationPulseGroup.addEventListener('mouseout', () => {
    openingAnimationTextGroup.style.minWidth = "92%";
})

// SECTION 2: Mobile Menu

const homepage = () => {

    setTimeout(() => {
        theCompanyTextContainer.style.minWidth = "94%";
        upcomingTextContainer.style.minWidth = "94%";
        archiveTextContainer.style.minWidth = "94%";
        contactTextContainer.style.minWidth = "94%";

        menuItemTheCompany.appendChild(menuColorTab1);
        menuItemUpcoming.appendChild(menuColorTab2);
        menuItemArchive.appendChild(menuColorTab3);
        menuItemContact.appendChild(menuColorTab4);

        homepageImage.style.opacity = "1"
        homepageImage.classList.remove('homepage-image-fade')
        
    }, 750)

    // Elements

    const menuContainer = document.createElement('div');
    menuContainer.setAttribute('id', 'menu-container');

    const homepageImage = document.createElement('div');
    homepageImage.setAttribute('id', 'homepage-image');

    homepageImage.classList.add('homepage-image-fade');

    homepageImage.style.backgroundImage = "url('/public/1.jpg')";
    // homepageImage.style.backgroundImage = "url('/1.jpg')";
    homepageImage.style.backgroundSize = "cover";
    homepageImage.style.backgroundRepeat = "no-repeat";
    homepageImage.style.backgroundPosition = "50% 100%";

    const revealDiv = document.createElement('div')
    revealDiv.setAttribute('id', 'revealDiv');

    const menuColorTab1 = document.createElement('div');
    menuColorTab1.setAttribute('id', 'menu-color-tab-1');
    const menuColorTab2 = document.createElement('div');
    menuColorTab2.setAttribute('id', 'menu-color-tab-2');
    const menuColorTab3 = document.createElement('div');
    menuColorTab3.setAttribute('id', 'menu-color-tab-3');
    const menuColorTab4 = document.createElement('div');
    menuColorTab4.setAttribute('id', 'menu-color-tab-4');

    const menuItemTheCompany = document.createElement('div');
    menuItemTheCompany.setAttribute('class', 'menu-item')
    const menuItemUpcoming = document.createElement('div');
    menuItemUpcoming.setAttribute('class', 'menu-item')
    const menuItemArchive = document.createElement('div');
    menuItemArchive.setAttribute('class', 'menu-item')
    const menuItemContact = document.createElement('div');
    menuItemContact.setAttribute('class', 'menu-item')

    const theCompanyTextContainer = document.createElement('div');
    theCompanyTextContainer.setAttribute('id', 'the-company-text-container')
    const theCompany = document.createElement('h1');
    theCompany.innerHTML = 'THE COMPANY';
    theCompanyTextContainer.appendChild(theCompany);

    const upcomingTextContainer = document.createElement('div');
    upcomingTextContainer.setAttribute('id', 'upcoming-text-container')
    const upcoming = document.createElement('h1');
    upcoming.innerHTML = 'UPCOMING';
    upcomingTextContainer.appendChild(upcoming);

    const archiveTextContainer = document.createElement('div');
    archiveTextContainer.setAttribute('id', 'archive-text-container');
    const archive = document.createElement('h1');
    archive.innerHTML = 'ARCHIVE';
    archiveTextContainer.appendChild(archive);

    const contactTextContainer = document.createElement('div');
    contactTextContainer.setAttribute('id', 'contact-text-container');
    const contact = document.createElement('h1');
    contact.innerHTML = 'CONTACT';
    contactTextContainer.appendChild(contact);

    document.body.appendChild(revealDiv);

    menuItemTheCompany.appendChild(theCompanyTextContainer);
    menuItemUpcoming.appendChild(upcomingTextContainer);
    menuItemArchive.appendChild(archiveTextContainer);
    menuItemContact.appendChild(contactTextContainer);

    menuContainer.appendChild(menuItemTheCompany);
    menuContainer.appendChild(menuItemUpcoming);
    menuContainer.appendChild(menuItemArchive);
    menuContainer.appendChild(menuItemContact);

    revealDiv.appendChild(homepageImage);
    revealDiv.appendChild(menuContainer);

    revealDiv.classList.add('menu-presentation')

    // Mouse Over Tabs

    // The Company Tab Hover

    menuItemTheCompany.addEventListener('mouseover', () => {
        menuItemTheCompany.style.cursor = "pointer";
        upcoming.style.color = "rgba(255, 255, 255, 0.3)"
        archive.style.color = "rgba(255, 255, 255, 0.3)"
        contact.style.color = "rgba(255, 255, 255, 0.3)"

        theCompany.style.transition = "color 0.4s ease-in-out"
        upcoming.style.transition = "color 0.4s ease-in-out"
        archive.style.transition = "color 0.4s ease-in-out"
        contact.style.transition = "color 0.4s ease-in-out"
    })

    menuItemTheCompany.addEventListener('mouseout', () => {
        menuItemTheCompany.style.cursor = "pointer";
        upcoming.style.color = "rgba(255, 255, 255, 1)"
        archive.style.color = "rgba(255, 255, 255, 1)"
        contact.style.color = "rgba(255, 255, 255, 1)"

        theCompany.style.transition = "color 0.4s ease-in-out"
        upcoming.style.transition = "color 0.4s ease-in-out"
        archive.style.transition = "color 0.4s ease-in-out"
        contact.style.transition = "color 0.4s ease-in-out"
    })

    menuColorTab1.addEventListener('mouseover', () => {
        menuColorTab1.style.cursor = "pointer";
        theCompanyTextContainer.style.minWidth = "91%";
    })

    menuColorTab1.addEventListener('mouseout', () => {
        theCompanyTextContainer.style.minWidth = "94%";
    })

    // Upcoming Tab Hover
    menuItemUpcoming.addEventListener('mouseover', () => {
        menuItemUpcoming.style.cursor = "pointer";
        theCompany.style.color = "rgba(255, 255, 255, 0.3)"
        archive.style.color = "rgba(255, 255, 255, 0.3)"
        contact.style.color = "rgba(255, 255, 255, 0.3)"

        theCompany.style.transition = "color 0.4s ease-in-out"
        upcoming.style.transition = "color 0.4s ease-in-out"
        archive.style.transition = "color 0.4s ease-in-out"
        contact.style.transition = "color 0.4s ease-in-out"
    })

    menuItemUpcoming.addEventListener('mouseout', () => {
        theCompany.style.color = "rgba(255, 255, 255, 1)"
        archive.style.color = "rgba(255, 255, 255, 1)"
        contact.style.color = "rgba(255, 255, 255, 1)"

        theCompany.style.transition = "color 0.4s ease-in-out"
        upcoming.style.transition = "color 0.4s ease-in-out"
        archive.style.transition = "color 0.4s ease-in-out"
        contact.style.transition = "color 0.4s ease-in-out"
    })

    menuColorTab2.addEventListener('mouseover', () => {
        menuColorTab2.style.cursor = "pointer";
        upcomingTextContainer.style.minWidth = "91%";
    })

    menuColorTab2.addEventListener('mouseout', () => {
        upcomingTextContainer.style.minWidth = "94%";
    })

    // Archive Tab Hover
    menuItemArchive.addEventListener('mouseover', () => {
        menuItemArchive.style.cursor = "pointer";
        theCompany.style.color = "rgba(255, 255, 255, 0.3)"
        upcoming.style.color = "rgba(255, 255, 255, 0.3)"
        contact.style.color = "rgba(255, 255, 255, 0.3)"

        theCompany.style.transition = "color 0.4s ease-in-out"
        upcoming.style.transition = "color 0.4s ease-in-out"
        archive.style.transition = "color 0.4s ease-in-out"
        contact.style.transition = "color 0.4s ease-in-out"
    })

    menuItemArchive.addEventListener('mouseout', () => {
        theCompany.style.color = "rgba(255, 255, 255, 1)"
        upcoming.style.color = "rgba(255, 255, 255, 1)"
        contact.style.color = "rgba(255, 255, 255, 1)"

        theCompany.style.transition = "color 0.4s ease-in-out"
        upcoming.style.transition = "color 0.4s ease-in-out"
        archive.style.transition = "color 0.4s ease-in-out"
        contact.style.transition = "color 0.4s ease-in-out"
    })

    menuColorTab3.addEventListener('mouseover', () => {
        menuColorTab3.style.cursor = "pointer";
        archiveTextContainer.style.minWidth = "91%";
    })

    menuColorTab3.addEventListener('mouseout', () => {
        archiveTextContainer.style.minWidth = "94%";
    })

    // Contact Tab Hover
    menuItemContact.addEventListener('mouseover', () => {
        menuItemContact.style.cursor = "pointer";
        theCompany.style.color = "rgba(255, 255, 255, 0.3)"
        upcoming.style.color = "rgba(255, 255, 255, 0.3)"
        archive.style.color = "rgba(255, 255, 255, 0.3)"

        theCompany.style.transition = "color 0.4s ease-in-out"
        upcoming.style.transition = "color 0.4s ease-in-out"
        archive.style.transition = "color 0.4s ease-in-out"
        contact.style.transition = "color 0.4s ease-in-out"
    })

    menuItemContact.addEventListener('mouseout', () => {
        menuItemContact.style.cursor = "pointer";
        theCompany.style.color = "rgba(255, 255, 255, 1)"
        upcoming.style.color = "rgba(255, 255, 255, 1)"
        archive.style.color = "rgba(255, 255, 255, 1)"

        theCompany.style.transition = "color 0.4s ease-in-out"
        upcoming.style.transition = "color 0.4s ease-in-out"
        archive.style.transition = "color 0.4s ease-in-out"
        contact.style.transition = "color 0.4s ease-in-out"
    })

    menuColorTab4.addEventListener('mouseover', () => {
        menuColorTab4.style.cursor = "pointer";
        contactTextContainer.style.minWidth = "91%";
    })

    menuColorTab4.addEventListener('mouseout', () => {
        contactTextContainer.style.minWidth = "94%";
    })

    // The Company Tab Click to Scroll

    menuItemTheCompany.addEventListener('click', (event) => {
        event.preventDefault();
    
        menuItemTheCompany.scrollTo({
            top:0,
            left: window.innerWidth,
            behavior: 'smooth'
        })
    
    })

    // Upcoming Tab Click to Scroll

    menuItemUpcoming.addEventListener('click', (event) => {
        event.preventDefault();
      
        menuItemUpcoming.scrollTo({
            top:0,
            left: window.innerWidth,
            behavior: 'smooth'
        })
      
    })

    // Archive Tab Click to Scroll

    menuItemArchive.addEventListener('click', (event) => {
        event.preventDefault();
      
        menuItemArchive.scrollTo({
            top:0,
            left: window.innerWidth,
            behavior: 'smooth'
        })
      
    })

    // Contact Tab Click to Scroll

    menuItemContact.addEventListener('click', (event) => {
        event.preventDefault();
      
        menuItemContact.scrollTo({
            top:0,
            left: window.innerWidth,
            behavior: 'smooth'
        })
      
    })

    // "The Company" Opacity Changes

    menuItemTheCompany.addEventListener("scroll", (event) => {
        const positionOfTheCompanyTextContainer = Math.round(theCompanyTextContainer.getBoundingClientRect().left)
        const theCompanyTextContainerClientWidth = Math.round(theCompanyTextContainer.clientWidth)
        const opacityValueOfTheCompany = 1 + (positionOfTheCompanyTextContainer / theCompanyTextContainerClientWidth) * 2
        const opacityValueOfBackgroundImage = 1 + (positionOfTheCompanyTextContainer / theCompanyTextContainerClientWidth)

        menuColorTab1.style.opacity = opacityValueOfTheCompany;

        menuItemTheCompany.style.opacity = opacityValueOfBackgroundImage;
        menuItemUpcoming.style.opacity = opacityValueOfTheCompany;
        menuItemArchive.style.opacity = opacityValueOfTheCompany;
        menuItemContact.style.opacity = opacityValueOfTheCompany;
        homepageImage.style.opacity = opacityValueOfBackgroundImage;

        if(opacityValueOfBackgroundImage < 0.20) {
            menuItemTheCompany.scrollTo({
                top:0,
                left: window.innerWidth,
                behavior: 'smooth'
            })

            revealDiv.remove();

            setTimeout(() => {
                theCompanyPage();
            }, 100)
        }

    })

    // "Upcoming" Opacity Changes

    menuItemUpcoming.addEventListener("scroll", () => {
        const positionOfUpcomingTextContainer = Math.round(upcomingTextContainer.getBoundingClientRect().left)
        const upcomingTextContainerClientWidth = Math.round(upcomingTextContainer.clientWidth)
        const opacityValueOfUpcoming = 1 + (positionOfUpcomingTextContainer / upcomingTextContainerClientWidth) * 2
        const opacityValueOfBackgroundImage = 1 + (positionOfUpcomingTextContainer / upcomingTextContainerClientWidth)

        menuColorTab2.style.opacity = opacityValueOfUpcoming;

        menuItemUpcoming.style.opacity = opacityValueOfBackgroundImage;
        menuItemTheCompany.style.opacity = opacityValueOfUpcoming;
        menuItemArchive.style.opacity = opacityValueOfUpcoming;
        menuItemContact.style.opacity = opacityValueOfUpcoming;
        homepageImage.style.opacity = opacityValueOfBackgroundImage;

        if(opacityValueOfBackgroundImage < 0.20) {
            menuItemUpcoming.scrollTo({
                top:0,
                left: window.innerWidth,
                behavior: 'smooth'
            })

            revealDiv.remove();

            setTimeout(() => {
                upcomingPage();
            }, 100)
        
        }

    })

    // "Archive" Opacity Changes

    menuItemArchive.addEventListener("scroll", () => {
        const positionOfArchiveTextContainer = Math.round(archiveTextContainer.getBoundingClientRect().left)
        const archiveTextContainerClientWidth = Math.round(archiveTextContainer.clientWidth)
        const opacityValueOfArchive = 1 + (positionOfArchiveTextContainer / archiveTextContainerClientWidth) * 2
        const opacityValueOfBackgroundImage = 1 + (positionOfArchiveTextContainer / archiveTextContainerClientWidth)
        
        menuColorTab3.style.opacity = opacityValueOfArchive;


        menuItemArchive.style.opacity = opacityValueOfBackgroundImage;
        menuItemTheCompany.style.opacity = opacityValueOfArchive;
        menuItemUpcoming.style.opacity = opacityValueOfArchive;
        menuItemContact.style.opacity = opacityValueOfArchive;
        homepageImage.style.opacity = opacityValueOfBackgroundImage;

        if(opacityValueOfBackgroundImage < 0.20) {
            menuItemArchive.scrollTo({
                top:0,
                left: window.innerWidth,
                behavior: 'smooth'
            })
            
            revealDiv.remove();

            setTimeout(() => {
                archivePage();
            }, 100)
        
        }
    })

    // "Contact" Opacity Changes

    menuItemContact.addEventListener("scroll", () => {
        const positionOfContactTextContainer = Math.round(contactTextContainer.getBoundingClientRect().left)
        const contactTextContainerClientWidth = Math.round(contactTextContainer.clientWidth)
        const opacityValueOfContact = 1 + (positionOfContactTextContainer / contactTextContainerClientWidth) * 2
        const opacityValueOfBackgroundImage = 1 + (positionOfContactTextContainer / contactTextContainerClientWidth)

        menuColorTab4.style.opacity = opacityValueOfContact;

        menuItemContact.style.opacity = opacityValueOfBackgroundImage;
        menuItemTheCompany.style.opacity = opacityValueOfContact;
        menuItemUpcoming.style.opacity = opacityValueOfContact;
        menuItemArchive.style.opacity = opacityValueOfContact;
        homepageImage.style.opacity = opacityValueOfBackgroundImage;

        if(opacityValueOfBackgroundImage < 0.20) {
            menuItemContact.scrollTo({
                top:0,
                left: window.innerWidth,
                behavior: 'smooth'
            })

            revealDiv.classList.remove('menu-presentation');
            revealDiv.remove();

            setTimeout(() => {
                contactPage();
            }, 100)
        
        }

    })

}

// Introduction of the Website to the Menu

openingAnimationContainer.addEventListener('scroll', (event) => {

    //the following code grabs the value of where the text group is horizontally
    const positionOfOpeningAnimationTextGroup = Math.round(openingAnimationTextGroup.getBoundingClientRect().left);
    const openingAnimationTextGroupClientWidth = Math.round(openingAnimationTextGroup.clientWidth)

    // I add 1 to the value below because I want the opacity of the pulse group to change from 1 to 0
    const opacityValue = (1 + ((positionOfOpeningAnimationTextGroup / openingAnimationTextGroupClientWidth)) * 2);

    //I'm using 20s here because the height of the top box and the bottom box are starting at 20%, so I want heightValue to be working from that starting point
    const heightValue = 20 - ((positionOfOpeningAnimationTextGroup/ openingAnimationTextGroupClientWidth) * -20);
    const topBox = document.getElementById('top-box');
    const bottomBox = document.getElementById('bottom-box');

    openingAnimationPulseGroup.style.opacity = opacityValue;

    // im changing the background-color of this container because 1) I want
    // the pulse item to become white and 2) if the user scrolls too far right
    // then they will see white, which i don't want. so i made the value of
    // the property background-color dependent on the value of positionOfOpeningAnimationTextGroup

    if(heightValue <  20) {
        topBox.style.height = `${heightValue}%`
        bottomBox.style.height = `${heightValue}%`
    }

    if(heightValue <= 1) {

        // document.body.style.backgroundColor = "white";

        openingAnimationTextGroup.classList.add('opening-animation-text-group-fade');
        openingAnimationPulseGroup.remove()
        openingAnimationTextGroup.remove()
        topBox.classList = "";
        bottomBox.classList = "";

        openingAnimationContainer.scrollTo({
            top:0,
            left: window.innerWidth,
            behavior: 'smooth'
        });

        setTimeout( () => {

            document.getElementById('top-box').remove();
            document.getElementById('bottom-box').remove();
            document.getElementById('top-box-cover').remove();
            document.getElementById('bottom-box-cover').remove();
            openingAnimationContainer.remove();

            homepage();

        }, 100)

    }
})

// SECTION 3: Mobile "The Company" Page

const theCompanyPage = () => {
    console.log('the company page')

    const revealDiv = document.createElement('div')
    revealDiv.setAttribute('id', 'revealDiv');

    const backToMenuContainer = document.createElement('div');
    backToMenuContainer.setAttribute('id', 'back-to-menu-container');

    const backToMenuTextContainer = document.createElement('div');
    backToMenuTextContainer.setAttribute('id', 'back-to-menu-text-container')

    const backToMenuText = document.createElement('h2');
    backToMenuText.setAttribute('id', 'back-to-menu-text')
    backToMenuText.innerHTML = "MENU";

    const backToMenuTab = document.createElement('div')
    backToMenuTab.setAttribute('id', 'back-to-menu-tab')

    const theCompanyPageContainer = document.createElement('div');
    theCompanyPageContainer.setAttribute('id', 'the-company-page-container');

    const contentContainer = document.createElement('div')
    contentContainer.setAttribute('id', 'content-container')

    const filler = document.createElement('div')
    filler.style.minHeight = '50px'

    const TDPHistoryContainer = document.createElement('div');
    TDPHistoryContainer.setAttribute('id', 'TDP-history-container')
    const titleAndHistoryContainer = document.createElement('div');
    titleAndHistoryContainer.setAttribute('id', 'title-and-history-container')
    const TDPTitle = document.createElement('h1');
    TDPTitle.setAttribute('id', 'TDP-title')
    TDPTitle.innerHTML = 'Tongue Dance Project'
    const TDPHistory = document.createElement('p');
    TDPHistory.setAttribute('id', 'TDP-history')
    TDPHistory.innerHTML = "Tongue Dance Project was formed in 2014 by Stephanie Gilliland and Lauren Smith as a vehicle for choreographic exploration and artistic development in contemporary dance. Known for innovation in the realm of extreme physicality and athleticism, choreographer and multimedia artist, Gilliland is the former artistic director of the critically acclaimed Tongue/ contemporary dance based in Los Angeles from 1997 to 2006. The focus of the company is the evolution, creation and production of the artistic work of Gilliland in collaboration with the dancers. The company also has a strong commitment to teaching and community outreach and has been offering free community classes since its inception. Tongue Dance Project is currently working on building a base in both Southern California and Portland, Or."
    titleAndHistoryContainer.appendChild(TDPTitle)
    titleAndHistoryContainer.appendChild(TDPHistory)
    TDPHistoryContainer.appendChild(titleAndHistoryContainer);
    TDPHistoryContainer.appendChild(filler);

    const stephContainer = document.createElement('div')
    stephContainer.setAttribute('id', 'steph-container')
    const stephImage = document.createElement('img')
    stephImage.setAttribute('class', 'bio-pictures')
    const stephText = document.createElement('p');
    stephText.setAttribute('class', 'the-company-page-text')
    stephText.innerHTML = '<span class="person-and-title">Stephanie Gilliland // artistic director</span><br><br>Stephanie Gilliland is a seasoned artist and arts educator, with a 30-year history as a choreographer, composer, multimedia dance artist, performer and teacher. Since 1977 she has co-founded two dance collectives and created three of her own dance companies, most notably, TONGUE/contemporary dance, based in Los Angeles from 1997 to 2006.<br><br> Committed to innovation and experimentation, Gilliland has developed her own movement system and technique which continues to evolve and grow in collaboration with her dancers and students. She has choreographed and produced numerous concerts and evening length works and has been presented throughout the United States and abroad including Scotland, Mexico, the Soviet Union and Canada.<br><br>  Gilliland is the recipient of a Creativity Grant from the National Endowment for the Arts, a Dance Maker Grant from the James Irvine Foundation, and three Lester Horton awards. Her work has been supported by numerous granting organizations including Dance USA, the Durfee Foundation, Los Angeles Cultural Affairs, and the California Arts Council. In 2007 Gilliland was awarded a residency at the Montalvo Arts Center in Saratoga, CA.<br><br>  Gilliland began her teaching career in 1980 and has served on the dance faculties of UC Riverside, UC Irvine, Loyola Marymount University, Mt San Jacinto College, Riverside Community College and the Idyllwild Arts Academy where she is currently in her twenty-first year. In addition to her work in dance Gilliland is also a practitioner and teacher of yoga.<br><br>  In 2013 Gilliland founded Tongue dance project with Lauren Smith. With a new focus on working as a collective Tongue dance project is committed to developing new choreographic voices as well as continuing to serve as a vehicle for Gilliland’s artistic exploration.'
    // stephImage.setAttribute('src', '/steph.jpg')
    stephImage.setAttribute('src', '/public/steph.jpg')
    stephContainer.appendChild(stephImage)
    stephContainer.appendChild(stephText)

    const laurenContainer = document.createElement('div')
    laurenContainer.setAttribute('id', 'lauren-container')
    const laurenImage = document.createElement('img')
    laurenImage.setAttribute('class', 'bio-pictures')
    const laurenText = document.createElement('p');
    laurenText.setAttribute('class', 'the-company-page-text')
    laurenText.innerHTML = '<span class="person-and-title">Lauren Smith // rehearsal director/performer</span><br><br>Lauren Smith is a graduate of the California State University, Long Beach Dance Department and has been teaching and coaching dancers for 13 years. She is a former member of the dance faculty at the Idyllwild Arts Academy and is the rehearsal director for Tongue Dance Project.  Lauren has been training in dance since the age of three and has participated in prestigious dance competitions nation wide.  Some of Lauren’s accomplishments include assisting for leading industry choreographers under Company Dance Convention, as well as being a national titlist for several dance competitions. Lauren has received scholarships to Broadway Dance Center and the Edge Performing Arts Center.<br><br> Since receiving her B.A. in Dance Lauren has pursued a deeper knowledge of the body through the study of Ashtanga Yoga, and in 2014 she became a NASM Certified personal trainer.<br><br> Lauren has been passionately focused on instilling a deeper knowledge of the art of dance to hundreds of students throughout the U.S., including working for non-profit organizations such as LA’s Best (which provides arts education to low-income neighborhoods) as well as dance studios, academies and Parks and Recreation Centers. '
    // laurenImage.setAttribute('src', '/lauren.jpg')
    laurenImage.setAttribute('src', '/public/lauren.jpg')
    laurenContainer.appendChild(laurenImage)
    laurenContainer.appendChild(laurenText)

    const adriContainer = document.createElement('div')
    adriContainer.setAttribute('id', 'adri-container')
    const adriImage = document.createElement('img')
    adriImage.setAttribute('class', 'bio-pictures')
    const adriText = document.createElement('p');
    adriText.setAttribute('class', 'the-company-page-text')
    adriText.innerHTML = '<span class="person-and-title">Adrianna Audoma // performer</span><br><br>Adrianna Audoma’s dance training began at the age of 7 at a local dance studio where she studied Royal Academy of Dance curriculum and completed multiple exams with honors. She went on to attended Idyllwild Arts Academy for four years and after graduating, accepted a place in University of California, Irvine’s dance department. After her first year she chose to withdraw and instead attended a five month training program in Jerusalem, Israel where she studied with Vertigo Dance Company, as well as former members of Batsheva Dance Company and Inbal Pinto and Avshalom Pollak Dance Company. Upon her return to the States, Adrianna began performing with Multiplex Dance Company under the direction of Chad Michael Hall and Tongue Dance Project under the direction of Stephanie Gilliland. She also began her career as an instructor and has now been teaching dance to children of all ages for 8 years. In addition to teaching and assisting, she is also a co-founder and manager of Portland’s newest dance studio, FLOOR Center for Dance.'
    // adriImage.setAttribute('src', '/adri.jpg')
    adriImage.setAttribute('src', '/public/adri.jpg')
    adriContainer.appendChild(adriImage)
    adriContainer.appendChild(adriText)

    const annaContainer = document.createElement('div')
    annaContainer.setAttribute('id', 'anna-container')
    const annaImage = document.createElement('img')
    annaImage.setAttribute('class', 'bio-pictures')
    const annaText = document.createElement('p');
    annaText.setAttribute('class', 'the-company-page-text')
    annaText.innerHTML = '<span class="person-and-title">Anna Olmstead // performer</span><br><br>Anna Olmstead is a Portland native who began her training at Classical Ballet Academy and was a company member of the Jefferson Dancers. She had the privilege of studying at summer intensives such as San Francisco Conservatory of Dance, Robert Moses Kin, The Cambrians, Hubbard Street Dance Chicago and others. Anna continued her explorations in dance at Dominican University of California with the Alonzo King LINES Ballet BFA Program and graduated May 2018 with a BFA in Dance and a Minor in Arts management. In addition to her studies in college she worked with Juntos colletive, an organization dedicated to providing dance training to underserved communities in Central America. Since Graduating Anna has received her certification to become a GYROKINESIS® trainer, collaborated on works with multiple Portland artists, and continues to create her own work. Anna is excited to be dancing with Tongue Dance Project this season.'
    // annaImage.setAttribute('src', '/anna.jpg')
    annaImage.setAttribute('src', '/public/anna.jpg')
    annaContainer.appendChild(annaImage)
    annaContainer.appendChild(annaText)

    const taylorContainer = document.createElement('div')
    taylorContainer.setAttribute('id', 'taylor-container')
    const taylorImage = document.createElement('img')
    taylorImage.setAttribute('class', 'bio-pictures')
    const taylorText = document.createElement('p');
    taylorText.setAttribute('class', 'the-company-page-text')
    taylorText.innerHTML = '<span class="person-and-title">Taylor Pasquale // performer</span><br><br>Taylor Pasquale is a movement based artist with a Bachelor of Fine Arts in Dance from George Mason University. A native of Northern VA, Taylor was a Freelance Performance Artist in Washington D.C. collaborating with PrioreDance, Company E, Terre Dance Collective, Motion X Dance DC, and Agora Dance. Performing internationally with PrioreDance in Cuba’s Vladimir Malakhov’s Grand Prix and presenting Julia Louis-Dreyfus the Mark Twain Award at the Kennedy Center are among her favorite performances thus far. In 2017, she was selected to present her choreography, “I” at John F. Kennedy Center’s Millennium Stage. Taylor moved to Portland this Spring and has since co-presented work with Beth Whelan and is currently collaborating with Trevor Wilde for an upcoming show. Taylor is grateful to Tongue Dance Project for making her feel like Portland is now home. '
    // taylorImage.setAttribute('src', '/taylor.jpeg')
    taylorImage.setAttribute('src', '/public/taylor.jpeg')
    taylorContainer.appendChild(taylorImage)
    taylorContainer.appendChild(taylorText)

    const bethContainer = document.createElement('div')
    bethContainer.setAttribute('id', 'beth-container')
    const bethImage = document.createElement('img')
    bethImage.setAttribute('class', 'bio-pictures')
    const bethText = document.createElement('p');
    bethText.setAttribute('class', 'the-company-page-text')
    bethText.innerHTML = "<span class='person-and-title'>Beth Whelan // performer</span><br><br>Beth Whelan is a movement-based artist with a BFA in Dance from George Mason University. As a freelance dancer and choreographer, she has presented work through the Regional Arts and Culture Council's Night Lights, Downright Productions' Amorphous, Polaris Dance Theater's Galaxy Festival, and performed in various works of local choreographers. In February of 2019, Beth and Trevor Wilde co-presented a shared evening of dance at Performance Works Northwest called Two of a Kind. Beth recently was awarded the White Bird Barney Commissioning Prize alongside Trevor Wilde and Shaun Keylock, and will be creating new work for the White Bird Uncaged Series. Prior to Portland, Beth performed alongside The Metropolitan Jazz Orchestra in their production of Swinging Through the Sky, Robert Battle’s Mass with the GMU Percussion Ensemble, freelanced with D.C.-based Company E at the Kennedy Center in their work (In)Security, as well as with Putty Dance Project in Philadelphia. Her writing on dance is published in <a href='https://philadelphiadance.org/dancejournal/author/ewhelan/' target='_blank'>Philadelphia's The Dance Journal</a> and <a href='https://www.orartswatch.org/author/elizabeth-whelan/' target='_blank'>Oregon Arts Watch</a>."
    // bethImage.setAttribute('src', '/beth.jpg')
    bethImage.setAttribute('src', '/public/beth.jpg')
    bethContainer.appendChild(bethImage)
    bethContainer.appendChild(bethText)

    const willowContainer = document.createElement('div')
    willowContainer.setAttribute('id', 'willow-container')
    const willowImage = document.createElement('img')
    willowImage.setAttribute('class', 'bio-pictures')
    const willowText = document.createElement('p');
    willowText.setAttribute('class', 'the-company-page-text')
    willowText.innerHTML = "<span class='person-and-title'>Willow Swanson // performer</span><br><br>Beginning with classical jazz, and soon expanding to a variety of styles including tap, hip hop, and contemporary, Willow Swanson fell in love with dance early on.  Fascinated by other types of movement, as well as how to apply them to dance, she has also trained in Kung Fu, Tai Chi, Yoga, and Acrobatics, and rock climbs as another way to train.  She has collaborated with a number of Portland locals such as DarVejon Jones, Alicia Cutaia, Jamuna Chiarini, Beth Whelan, Amelia Unsicker, and Katie Burkes, and her performance experiences include dancing with Portland companies Polaris Dance Theatre and Agneizska Laska Dancers, as well as the Vancouver-based company Horizon3 Dance.  Credits also include performing with Victoria Perez at the Young Choreographer's Festival 2019 in New York City, showing and performing her own work at Chapel Theatre earlier the same year, and several small film roles.  She currently teaches a diverse range of dance classes at studios across Vancouver and Portland and continues to work with dance companies and independent artists on several projects, including live shows, film and photography, and dance outreach."
    // willowImage.setAttribute('src', '/willow.JPG')
    willowImage.setAttribute('src', '/public/willow.JPG')
    willowContainer.appendChild(willowImage)
    willowContainer.appendChild(willowText)

    const darienneContainer = document.createElement('div')
    darienneContainer.setAttribute('id', 'darienne-container-mobile')
    const darienneImage = document.createElement('img')
    darienneImage.setAttribute('class', 'bio-pictures')
    const darienneText = document.createElement('p');
    darienneText.setAttribute('class', 'the-company-page-text')
    darienneText.innerHTML = "<span class='person-and-title'>Darienne Gilmore // performer</span><br><br>At the age of 14, Darienne began her dance training at Renaissance High School for the arts in Long Beach, California. While in school, she pursued the performing arts where she studied release technique dance and straight/musical theater. She excelled, earning her 'most outstanding' student in the dance department. After graduating in 2018, Darienne has since continued her dance training and is currently dancing with Steps PDX in the youth ballet program. As of this year, Darienne is Tongue Dance Project's new apprentice."
    // darienneImage.setAttribute('src', '/darienne.jpg')
    darienneImage.setAttribute('src', '/public/darienne.jpg')
    darienneContainer.appendChild(darienneImage)
    darienneContainer.appendChild(darienneText)

    document.body.appendChild(revealDiv)

    backToMenuTextContainer.appendChild(backToMenuText)
    backToMenuContainer.appendChild(backToMenuTextContainer);
    backToMenuContainer.appendChild(backToMenuTab)

    contentContainer.appendChild(TDPHistoryContainer)
    contentContainer.appendChild(stephContainer)
    contentContainer.appendChild(laurenContainer)
    contentContainer.appendChild(adriContainer)
    contentContainer.appendChild(annaContainer)
    contentContainer.appendChild(taylorContainer)
    contentContainer.appendChild(bethContainer)
    contentContainer.appendChild(willowContainer)
    contentContainer.appendChild(darienneContainer)

    theCompanyPageContainer.appendChild(backToMenuContainer)
    theCompanyPageContainer.appendChild(contentContainer)

    revealDiv.appendChild(theCompanyPageContainer)

    revealDiv.classList.add('menu-presentation')

    backToMenuContainer.addEventListener('mouseover', () => {
        backToMenuContainer.style.cursor = "pointer";
    })

    backToMenuContainer.addEventListener('click', () => {
        backToMenuContainer.scrollTo({
            top:0,
            left: window.innerWidth,
            behavior: 'smooth'
        });
    })

    backToMenuContainer.addEventListener("scroll", () => {
        const positionOfBackToMenuTextContainer = Math.round(backToMenuTextContainer.getBoundingClientRect().left)
        const BackToMenuTextContainerClientWidth = Math.round(backToMenuTextContainer.clientWidth)
        const opacityValueOfBackToMenuTab = 1 + (positionOfBackToMenuTextContainer/ BackToMenuTextContainerClientWidth) * 2
        const opacityValueOfBackgroundImage = 1 + (positionOfBackToMenuTextContainer / BackToMenuTextContainerClientWidth)
        
        backToMenuTab.style.opacity = opacityValueOfBackToMenuTab;
        backToMenuContainer.style.opacity = opacityValueOfBackgroundImage;

        contentContainer.style.opacity = opacityValueOfBackToMenuTab

        if(opacityValueOfBackgroundImage < 0.20) {
            backToMenuContainer.scrollTo({
                top:0,
                left: window.innerWidth,
                behavior: 'smooth'
            })

            revealDiv.remove();

            setTimeout(() => {
                homepage();
            }, 100)
        
        }
    })
}

// SECTION 4: Mobile "Upcoming" Page

const upcomingPage = () => {

    setTimeout(() => {
        backgroundImage.style.opacity = "1"
        backgroundImage.classList.remove('background-image-fade')
    }, 1000);

    console.log('upcoming page')

    const backgroundImage = document.createElement('div');
    backgroundImage.setAttribute('id', 'background-image');
    backgroundImage.classList.add('background-image-fade');

    const revealDiv = document.createElement('div')
    revealDiv.setAttribute('id', 'revealDiv');

    const upcomingPageContainer = document.createElement('div');
    upcomingPageContainer.setAttribute('id', "upcoming-page-container")

    const backToMenuContainer = document.createElement('div');
    backToMenuContainer.setAttribute('id', 'back-to-menu-container');

    const backToMenuTextContainer = document.createElement('div');
    backToMenuTextContainer.setAttribute('id', 'back-to-menu-text-container')

    const backToMenuText = document.createElement('h2');
    backToMenuText.setAttribute('id', 'back-to-menu-text')
    backToMenuText.innerHTML = "MENU";

    const backToMenuTab = document.createElement('div')
    backToMenuTab.setAttribute('id', 'back-to-menu-tab')

    const classesContainer = document.createElement('div');
    classesContainer.setAttribute('id', 'classes-container')

    const classesTitle = document.createElement('h1');
    classesTitle.innerHTML = "CLASSES";
    classesTitle.setAttribute('id', 'classes-title')

    const classInformation = document.createElement('p');
    classInformation.innerHTML = "Weekly class held at Steps PDX <br> 220 SE 11th Ave Suite 220, Portland, OR 97214 <br> Int/Adv Contemporary Modern <br> Thursdays 7:30-8:30";

    const descriptionContainer = document.createElement('div');
    descriptionContainer.setAttribute('id', 'description-container')

    const classDescription = document.createElement('p')
    classDescription.innerHTML = "find out more"
    classDescription.setAttribute('id', 'find-out-more')

    const arrow = document.createElement('i');
    arrow.setAttribute('class', 'fas fa-arrow-right')
    arrow.setAttribute('id', 'arrow');

    const filler = document.createElement('div')
    filler.style.minHeight = "10vh"

    document.body.appendChild(revealDiv)

    backgroundImage.style.backgroundImage = "url('/public/upcoming.jpg')";
    // backgroundImage.style.backgroundImage = "url('/upcoming.jpg')";
    backgroundImage.style.backgroundSize = "cover";
    backgroundImage.style.backgroundRepeat = "no-repeat";
    backgroundImage.style.backgroundPosition = "50% 50%";

    classesContainer.appendChild(classesTitle);
    classesContainer.appendChild(classInformation);
    descriptionContainer.appendChild(classDescription);
    descriptionContainer.appendChild(arrow)
    classesContainer.appendChild(descriptionContainer)

    backToMenuTextContainer.appendChild(backToMenuText)
    backToMenuContainer.appendChild(backToMenuTextContainer);
    backToMenuContainer.appendChild(backToMenuTab)

    upcomingPageContainer.appendChild(backToMenuContainer)
    upcomingPageContainer.appendChild(classesContainer)
    classesContainer.appendChild(filler)

    revealDiv.appendChild(backgroundImage)
    revealDiv.appendChild(upcomingPageContainer)

    revealDiv.classList.add('menu-presentation')

    backToMenuContainer.addEventListener('mouseover', () => {
        backToMenuContainer.style.cursor = "pointer";
    })

    backToMenuContainer.addEventListener('click', () => {
        backToMenuContainer.scrollTo({
            top:0,
            left: window.innerWidth,
            behavior: 'smooth'
        });
    })

    descriptionContainer.addEventListener('mouseover', () => {
        descriptionContainer.style.cursor = "pointer"
    })

    descriptionContainer.addEventListener('click', () => {
        window.open("https://www.stepspdx.com/adult-dropin#!", "_blank");
    })

    backToMenuContainer.addEventListener("scroll", () => {
        const positionOfBackToMenuTextContainer = Math.round(backToMenuTextContainer.getBoundingClientRect().left)
        const BackToMenuTextContainerClientWidth = Math.round(backToMenuTextContainer.clientWidth)
        const opacityValueOfBackToMenuTab = 1 + (positionOfBackToMenuTextContainer/ BackToMenuTextContainerClientWidth) * 2
        const opacityValueOfBackgroundImage = 1 + (positionOfBackToMenuTextContainer / BackToMenuTextContainerClientWidth)
        
        backToMenuTab.style.opacity = opacityValueOfBackToMenuTab;
        backToMenuContainer.style.opacity = opacityValueOfBackgroundImage;
        backgroundImage.style.opacity = opacityValueOfBackgroundImage;

        classesContainer.style.opacity = opacityValueOfBackToMenuTab;

        if(opacityValueOfBackgroundImage < 0.20) {
            backToMenuContainer.scrollTo({
                top:0,
                left: window.innerWidth,
                behavior: 'smooth'
            })
            
            backgroundImage.classList.remove('background-image-fade')
            revealDiv.remove();

            setTimeout(() => {
                homepage();
            }, 100)
        
        }
    })

}

// SECTION 5: Mobile "Archive" Page

const archivePage = () => {

    setTimeout(() => {
        backgroundImage.style.opacity = "1"
        backgroundImage.classList.remove('background-image-fade')
    }, 1000);

    console.log('archive page')

    const backgroundImage = document.createElement('div');
    backgroundImage.setAttribute('id', 'background-image');
    backgroundImage.classList.add('background-image-fade');

    const revealDiv = document.createElement('div')
    revealDiv.setAttribute('id', 'revealDiv');
    revealDiv.style.backgroundColor = "red";

    const backToMenuContainer = document.createElement('div');
    backToMenuContainer.setAttribute('id', 'back-to-menu-container');

    const backToMenuTextContainer = document.createElement('div');
    backToMenuTextContainer.setAttribute('id', 'back-to-menu-text-container')

    const backToMenuText = document.createElement('h2');
    backToMenuText.setAttribute('id', 'back-to-menu-text')
    backToMenuText.innerHTML = "MENU";

    const backToMenuTab = document.createElement('div')
    backToMenuTab.setAttribute('id', 'back-to-menu-tab')

    const archivePageContainer = document.createElement('div');
    archivePageContainer.setAttribute('id','archive-page-container');

    const videosContainer = document.createElement('div');
    videosContainer.setAttribute('id', 'videos-container')

    const videosTitle = document.createElement('h1')
    videosTitle.setAttribute('id', 'videos-title')
    videosTitle.innerHTML = "VIDEOS"

    const archiveItem1 = document.createElement('p')
    archiveItem1.setAttribute('class', 'archive-item')
    archiveItem1.innerHTML = "Untitled (2020) - Portland, OR <i class='fas fa-arrow-right'></i>";
    archiveItem1.style.width = "fit-content"
    const archiveItem2 = document.createElement('p')
    archiveItem2.setAttribute('class', 'archive-item')
    archiveItem2.innerHTML = "Untitled (2019) - Portland, OR <i class='fas fa-arrow-right'></i>";
    archiveItem2.style.width = "fit-content"
    const archiveItem3 = document.createElement('p')
    archiveItem3.setAttribute('class', 'archive-item')
    archiveItem3.innerHTML = "Knee Deep (2018) - Portland, OR <i class='fas fa-arrow-right'></i>";
    archiveItem3.style.width = "fit-content"
    const archiveItem4 = document.createElement('p')
    archiveItem4.setAttribute('class', 'archive-item')
    archiveItem4.innerHTML = "Becoming Buffalo (2017) - <span>San Jacinto, CA <i class='fas fa-arrow-right'></i></span>";
    archiveItem4.style.width = "fit-content"

    const filler = document.createElement('div');
    filler.style.height = "15vh"

    videosContainer.appendChild(videosTitle)
    videosContainer.appendChild(archiveItem1)
    videosContainer.appendChild(archiveItem2)
    videosContainer.appendChild(archiveItem3)
    videosContainer.appendChild(archiveItem4)
    videosContainer.appendChild(filler)

    backgroundImage.style.backgroundImage = "url('/public/archive.jpg')";
    // backgroundImage.style.backgroundImage = "url('/archive.jpg')";
    backgroundImage.style.backgroundSize = "cover";
    backgroundImage.style.backgroundRepeat = "no-repeat";
    backgroundImage.style.backgroundPosition = "50% 50%";

    backToMenuTextContainer.appendChild(backToMenuText)
    backToMenuContainer.appendChild(backToMenuTextContainer);
    backToMenuContainer.appendChild(backToMenuTab)

    archivePageContainer.appendChild(backToMenuContainer)
    archivePageContainer.appendChild(videosContainer)

    revealDiv.appendChild(archivePageContainer);
    revealDiv.appendChild(backgroundImage)
    document.body.appendChild(revealDiv);

    revealDiv.classList.add('menu-presentation')

    backToMenuContainer.addEventListener('mouseover', () => {
        backToMenuContainer.style.cursor = "pointer";
    })

    backToMenuContainer.addEventListener('click', () => {
        backToMenuContainer.scrollTo({
            top:0,
            left: window.innerWidth,
            behavior: 'smooth'
        });
    })

    archiveItem1.addEventListener('click', () => {
        window.open("https://www.youtube.com/watch?v=vstVU5oxcUQ", "_blank");
    })

    archiveItem2.addEventListener('click', () => {
        window.open("https://www.youtube.com/watch?v=RNOIaCcW4OQ&t=1s", "_blank");
    })

    archiveItem3.addEventListener('click', () => {
        window.open("https://www.youtube.com/watch?v=lMTgte2jjz8&t=1s", "_blank");
    })

    archiveItem4.addEventListener('click', () => {
        window.open("https://vimeo.com/user9684465", "_blank");
    })

    archiveItem1.addEventListener('mouseover', () => {
        archiveItem1.style.cursor = "pointer";
    })

    archiveItem1.addEventListener('mouseout', () => {
        archiveItem1.style.cursor = "";
    })

    archiveItem2.addEventListener('mouseover', () => {
        archiveItem2.style.cursor = "pointer";
    })

    archiveItem2.addEventListener('mouseout', () => {
        archiveItem2.style.cursor = "";
    })

    archiveItem3.addEventListener('mouseover', () => {
        archiveItem3.style.cursor = "pointer";
    })

    archiveItem3.addEventListener('mouseout', () => {
        archiveItem3.style.cursor = "";
    })

    archiveItem4.addEventListener('mouseover', () => {
        archiveItem4.style.cursor = "pointer";
    })

    archiveItem4.addEventListener('mouseout', () => {
        archiveItem4.style.cursor = "";
    })

    backToMenuContainer.addEventListener("scroll", () => {
        const positionOfBackToMenuTextContainer = Math.round(backToMenuTextContainer.getBoundingClientRect().left)
        const BackToMenuTextContainerClientWidth = Math.round(backToMenuTextContainer.clientWidth)
        const opacityValueOfBackToMenuTab = 1 + (positionOfBackToMenuTextContainer/ BackToMenuTextContainerClientWidth) * 2
        const opacityValueOfBackgroundImage = 1 + (positionOfBackToMenuTextContainer / BackToMenuTextContainerClientWidth)
        
        backToMenuTab.style.opacity = opacityValueOfBackToMenuTab;
        backToMenuContainer.style.opacity = opacityValueOfBackgroundImage;
        backgroundImage.style.opacity = opacityValueOfBackgroundImage;
        videosContainer.style.opacity = opacityValueOfBackToMenuTab

        if(opacityValueOfBackgroundImage < 0.20) {
            backToMenuContainer.scrollTo({
                top:0,
                left: window.innerWidth,
                behavior: 'smooth'
            })
            
            backgroundImage.classList.remove('background-image-fade')
            revealDiv.remove();

            setTimeout(() => {
                homepage();
            }, 100)
        
        }
    })
}

// SECTION 6: Mobile "Contact" Page

const contactPage = () => {

    setTimeout(() => {
        backgroundImage.style.opacity = "1"
        backgroundImage.classList.remove('background-image-fade')
    }, 1000);

    console.log('contact page')

    const backgroundImage = document.createElement('div');
    backgroundImage.setAttribute('id', 'background-image');
    backgroundImage.classList.add('background-image-fade');

    const revealDiv = document.createElement('div')
    revealDiv.setAttribute('id', 'revealDiv');

    const contactPageContainer = document.createElement('div');
    contactPageContainer.setAttribute('id','contact-page-container');

    const backToMenuContainer = document.createElement('div');
    backToMenuContainer.setAttribute('id', 'back-to-menu-container');

    const backToMenuTextContainer = document.createElement('div');
    backToMenuTextContainer.setAttribute('id', 'back-to-menu-text-container')

    const backToMenuText = document.createElement('h2');
    backToMenuText.setAttribute('id', 'back-to-menu-text')
    backToMenuText.innerHTML = "MENU";

    const backToMenuTab = document.createElement('div')
    backToMenuTab.setAttribute('id', 'back-to-menu-tab')

    const contactInfoContainer = document.createElement('div');
    contactInfoContainer.setAttribute('id', 'contact-info-container');

    const emailAddress1 = document.createElement('h1');
    emailAddress1.setAttribute('id', 'email-address1');
    emailAddress1.innerHTML = "TONGUEDANCEPROJECT";

    const emailClipboardContainer = document.createElement('div');
    emailClipboardContainer.setAttribute('id', 'email-clipboard-container')

    const emailAddress2 = document.createElement('h1');
    emailAddress2.setAttribute('id', 'email-address2');
    emailAddress2.innerHTML = "@GMAIL.COM";

    const clipboardIcon = document.createElement('i');
    clipboardIcon.setAttribute('class', 'far fa-clipboard')
    clipboardIcon.setAttribute('id', 'clipboard-icon')

    const iconContainer = document.createElement('div');
    iconContainer.setAttribute('id', 'icon-container')

    const instagramIcon = document.createElement('i');
    instagramIcon.setAttribute('class', 'fab fa-instagram icon');

    const sendEmailIcon = document.createElement('i');
    sendEmailIcon.setAttribute('class', 'far fa-paper-plane icon')

    const filler = document.createElement('div')
    filler.style.minHeight = "15vh"

    backgroundImage.style.backgroundImage = "url('/public/contact.jpg')";
    // backgroundImage.style.backgroundImage = "url('/contact.jpg')";
    backgroundImage.style.backgroundSize = "cover";
    backgroundImage.style.backgroundRepeat = "no-repeat";
    backgroundImage.style.backgroundPosition = "50% 15vh";
    // backgroundImage.style.backgroundPosition = "50% 50%";

    backToMenuTextContainer.appendChild(backToMenuText)
    backToMenuContainer.appendChild(backToMenuTextContainer);
    backToMenuContainer.appendChild(backToMenuTab)
    contactInfoContainer.appendChild(emailAddress1)
    emailClipboardContainer.appendChild(emailAddress2)
    emailClipboardContainer.appendChild(clipboardIcon)
    contactInfoContainer.appendChild(emailClipboardContainer)
    iconContainer.appendChild(instagramIcon)
    iconContainer.appendChild(sendEmailIcon)
    contactInfoContainer.appendChild(iconContainer)
    contactPageContainer.appendChild(backToMenuContainer)
    contactPageContainer.appendChild(contactInfoContainer)
    contactPageContainer.appendChild(filler)
    revealDiv.appendChild(backgroundImage);
    revealDiv.appendChild(contactPageContainer);

    document.body.appendChild(revealDiv);
    // revealDiv.style.backgroundColor = 'red';

    revealDiv.classList.add('menu-presentation')

    backToMenuContainer.addEventListener('mouseover', () => {
        backToMenuContainer.style.cursor = "pointer";
    })

    backToMenuContainer.addEventListener('click', () => {
        backToMenuContainer.scrollTo({
            top:0,
            left: window.innerWidth,
            behavior: 'smooth'
        });
    })

    clipboardIcon.addEventListener('click', () => {
        navigator.clipboard.writeText('tonguedanceproject@gmail.com');
    })

    clipboardIcon.addEventListener('mouseover', () => {
        clipboardIcon.style.cursor = "pointer";
    })

    instagramIcon.addEventListener('click', () => {
        window.open("https://www.instagram.com/tonguedanceproject/?hl=en", "_blank");
    })

    instagramIcon.addEventListener('mouseover', () => {
        instagramIcon.style.cursor = "pointer";
    })

    sendEmailIcon.addEventListener('click', () => {
        location.href = "mailto:tonguedanceproject@gmail.com"
    })

    sendEmailIcon.addEventListener('mouseover', () => {
        sendEmailIcon.style.cursor = "pointer";
    })
    
    backToMenuContainer.addEventListener("scroll", () => {
        const positionOfBackToMenuTextContainer = Math.round(backToMenuTextContainer.getBoundingClientRect().left)
        const BackToMenuTextContainerClientWidth = Math.round(backToMenuTextContainer.clientWidth)
        const opacityValueOfBackToMenuTab = 1 + (positionOfBackToMenuTextContainer/ BackToMenuTextContainerClientWidth) * 2
        const opacityValueOfBackgroundImage = 1 + (positionOfBackToMenuTextContainer / BackToMenuTextContainerClientWidth)
        
        backToMenuTab.style.opacity = opacityValueOfBackToMenuTab;
        backToMenuContainer.style.opacity = opacityValueOfBackgroundImage;
        backgroundImage.style.opacity = opacityValueOfBackgroundImage;

        contactInfoContainer.style.opacity = opacityValueOfBackToMenuTab;

        if(opacityValueOfBackgroundImage < 0.20) {
            backToMenuContainer.scrollTo({
                top:0,
                left: window.innerWidth,
                behavior: 'smooth'
            })
            
            backgroundImage.classList.remove('background-image-fade')
            revealDiv.remove();

            setTimeout(() => {
                homepage();
            }, 100)
        
        }
    })

}
// SECTION 7: Desktop Opening Animation
}else{

    const openingAnimationTextGroup = document.getElementById('opening-animation-text-group');
    openingAnimationTextGroup.style.minWidth = '96%'
    
    const openingAnimationPulseGroup = document.getElementById('opening-animation-pulse-group');
    
    const openingAnimationContainer = document.getElementById('opening-animation-container');
    
    const openingAnimationTextGroupShadowInsert = () => {
        openingAnimationTextGroup.classList.add('opening-animation-text-group-shadow');
    }
    
    const openingAnimationPulseGroupInsert = () => {
        openingAnimationPulseGroup.style.display = "unset"
    }
    
    const openingAnimationContainerBackgroundColorChange = () => {
        openingAnimationContainer.style.backgroundColor = "white";
    }
    
    const openingAnimationTextGroupBackgroundColorChange = () => {
        openingAnimationTextGroup.style.backgroundColor = "black";
    }
    
    // Window On Load
    
    window.addEventListener('load', () => {
        setTimeout(openingAnimationPulseGroupInsert, 1800)
        setTimeout(openingAnimationTextGroupShadowInsert, 1800)
    })
    
    // Click to Scroll
    
    
    openingAnimationContainer.addEventListener('click', (event) => {
        console.log('check')
        event.preventDefault();
    
        openingAnimationContainer.scrollTo({
            top:0,
            left: window.innerWidth,
            behavior: 'smooth'
        })
    })
    
    // Mouse Over Pulse Area
    
    openingAnimationPulseGroup.addEventListener('mouseover', () => {
        openingAnimationPulseGroup.style.cursor = "pointer";
        openingAnimationTextGroup.style.minWidth = "94%";
    })
    
    openingAnimationPulseGroup.addEventListener('mouseout', () => {
        openingAnimationTextGroup.style.minWidth = "96%";
    })

    // SECTION 8: Desktop Menu

    const homepage = () => {

        setTimeout(() => {
            theCompanyTextContainer.style.minWidth = "94%";
            upcomingTextContainer.style.minWidth = "94%";
            archiveTextContainer.style.minWidth = "94%";
            contactTextContainer.style.minWidth = "94%";
    
            menuItemTheCompany.appendChild(menuColorTab1);
            menuItemUpcoming.appendChild(menuColorTab2);
            menuItemArchive.appendChild(menuColorTab3);
            menuItemContact.appendChild(menuColorTab4);
    
            homepageImage.style.opacity = "1"
            homepageImage.classList.remove('homepage-image-fade')
            
        }, 750)
    
        // Elements
    
        const menuContainer = document.createElement('div');
        menuContainer.setAttribute('id', 'menu-container');
    
        const homepageImage = document.createElement('div');
        homepageImage.setAttribute('id', 'homepage-image');
    
        homepageImage.classList.add('homepage-image-fade');
    
        homepageImage.style.backgroundImage = "url('/public/1.jpg')";
        // homepageImage.style.backgroundImage = "url('/1.jpg')";
        homepageImage.style.backgroundSize = "cover";
        homepageImage.style.backgroundRepeat = "no-repeat";
        homepageImage.style.backgroundPosition = "50% 100%";
    
        const revealDiv = document.createElement('div')
        revealDiv.setAttribute('id', 'revealDiv');
    
        const menuColorTab1 = document.createElement('div');
        menuColorTab1.setAttribute('id', 'menu-color-tab-1');
        menuColorTab1.style.opacity = 0;
        const menuColorTab2 = document.createElement('div');
        menuColorTab2.setAttribute('id', 'menu-color-tab-2');
        menuColorTab2.style.opacity = 0;
        const menuColorTab3 = document.createElement('div');
        menuColorTab3.setAttribute('id', 'menu-color-tab-3');
        menuColorTab3.style.opacity = 0;
        const menuColorTab4 = document.createElement('div');
        menuColorTab4.setAttribute('id', 'menu-color-tab-4');
        menuColorTab4.style.opacity = 0;
    
        const menuItemTheCompany = document.createElement('div');
        menuItemTheCompany.setAttribute('class', 'menu-item')
        const menuItemUpcoming = document.createElement('div');
        menuItemUpcoming.setAttribute('class', 'menu-item')
        const menuItemArchive = document.createElement('div');
        menuItemArchive.setAttribute('class', 'menu-item')
        const menuItemContact = document.createElement('div');
        menuItemContact.setAttribute('class', 'menu-item')
    
        const theCompanyTextContainer = document.createElement('div');
        theCompanyTextContainer.setAttribute('id', 'the-company-text-container')
        const theCompany = document.createElement('h1');
        theCompany.setAttribute('class', 'menu-item-inner-html');
        theCompany.innerHTML = 'THE COMPANY';
        theCompanyTextContainer.appendChild(theCompany);
    
        const upcomingTextContainer = document.createElement('div');
        upcomingTextContainer.setAttribute('id', 'upcoming-text-container')
        const upcoming = document.createElement('h1');
        upcoming.setAttribute('class', 'menu-item-inner-html');
        upcoming.innerHTML = 'UPCOMING';
        upcomingTextContainer.appendChild(upcoming);
    
        const archiveTextContainer = document.createElement('div');
        archiveTextContainer.setAttribute('id', 'archive-text-container');
        const archive = document.createElement('h1');
        archive.setAttribute('class', 'menu-item-inner-html');
        archive.innerHTML = 'ARCHIVE';
        archiveTextContainer.appendChild(archive);
    
        const contactTextContainer = document.createElement('div');
        contactTextContainer.setAttribute('id', 'contact-text-container');
        const contact = document.createElement('h1');
        contact.setAttribute('class', 'menu-item-inner-html');
        contact.innerHTML = 'CONTACT';
        contactTextContainer.appendChild(contact);
    
        document.body.appendChild(revealDiv);
    
        menuItemTheCompany.appendChild(theCompanyTextContainer);
        menuItemUpcoming.appendChild(upcomingTextContainer);
        menuItemArchive.appendChild(archiveTextContainer);
        menuItemContact.appendChild(contactTextContainer);
    
        menuContainer.appendChild(menuItemTheCompany);
        menuContainer.appendChild(menuItemUpcoming);
        menuContainer.appendChild(menuItemArchive);
        menuContainer.appendChild(menuItemContact);
    
        revealDiv.appendChild(homepageImage);
        revealDiv.appendChild(menuContainer);
    
        revealDiv.classList.add('menu-presentation')
    
        // Mouse Over Tabs
    
        // The Company Tab Hover
    
        menuItemTheCompany.addEventListener('mouseover', () => {
            menuItemTheCompany.style.cursor = "pointer";
            upcoming.style.color = "rgba(255, 255, 255, 0.3)"
            archive.style.color = "rgba(255, 255, 255, 0.3)"
            contact.style.color = "rgba(255, 255, 255, 0.3)"
    
            theCompany.style.transition = "color 0.4s ease-in-out"
            upcoming.style.transition = "color 0.4s ease-in-out"
            archive.style.transition = "color 0.4s ease-in-out"
            contact.style.transition = "color 0.4s ease-in-out"
        })
    
        menuItemTheCompany.addEventListener('mouseout', () => {
            menuItemTheCompany.style.cursor = "pointer";
            upcoming.style.color = "rgba(255, 255, 255, 1)"
            archive.style.color = "rgba(255, 255, 255, 1)"
            contact.style.color = "rgba(255, 255, 255, 1)"
    
            theCompany.style.transition = "color 0.4s ease-in-out"
            upcoming.style.transition = "color 0.4s ease-in-out"
            archive.style.transition = "color 0.4s ease-in-out"
            contact.style.transition = "color 0.4s ease-in-out"
        })
    
        menuColorTab1.addEventListener('mouseover', () => {
            menuColorTab1.style.cursor = "pointer";
            theCompanyTextContainer.style.minWidth = "91%";
        })
    
        menuColorTab1.addEventListener('mouseout', () => {
            theCompanyTextContainer.style.minWidth = "94%";
        })
    
        // Upcoming Tab Hover
        menuItemUpcoming.addEventListener('mouseover', () => {
            menuItemUpcoming.style.cursor = "pointer";
            theCompany.style.color = "rgba(255, 255, 255, 0.3)"
            archive.style.color = "rgba(255, 255, 255, 0.3)"
            contact.style.color = "rgba(255, 255, 255, 0.3)"
    
            theCompany.style.transition = "color 0.4s ease-in-out"
            upcoming.style.transition = "color 0.4s ease-in-out"
            archive.style.transition = "color 0.4s ease-in-out"
            contact.style.transition = "color 0.4s ease-in-out"
        })
    
        menuItemUpcoming.addEventListener('mouseout', () => {
            theCompany.style.color = "rgba(255, 255, 255, 1)"
            archive.style.color = "rgba(255, 255, 255, 1)"
            contact.style.color = "rgba(255, 255, 255, 1)"
    
            theCompany.style.transition = "color 0.4s ease-in-out"
            upcoming.style.transition = "color 0.4s ease-in-out"
            archive.style.transition = "color 0.4s ease-in-out"
            contact.style.transition = "color 0.4s ease-in-out"
        })
    
        menuColorTab2.addEventListener('mouseover', () => {
            menuColorTab2.style.cursor = "pointer";
            upcomingTextContainer.style.minWidth = "91%";
        })
    
        menuColorTab2.addEventListener('mouseout', () => {
            upcomingTextContainer.style.minWidth = "94%";
        })
    
        // Archive Tab Hover
        menuItemArchive.addEventListener('mouseover', () => {
            menuItemArchive.style.cursor = "pointer";
            theCompany.style.color = "rgba(255, 255, 255, 0.3)"
            upcoming.style.color = "rgba(255, 255, 255, 0.3)"
            contact.style.color = "rgba(255, 255, 255, 0.3)"
    
            theCompany.style.transition = "color 0.4s ease-in-out"
            upcoming.style.transition = "color 0.4s ease-in-out"
            archive.style.transition = "color 0.4s ease-in-out"
            contact.style.transition = "color 0.4s ease-in-out"
        })
    
        menuItemArchive.addEventListener('mouseout', () => {
            theCompany.style.color = "rgba(255, 255, 255, 1)"
            upcoming.style.color = "rgba(255, 255, 255, 1)"
            contact.style.color = "rgba(255, 255, 255, 1)"
    
            theCompany.style.transition = "color 0.4s ease-in-out"
            upcoming.style.transition = "color 0.4s ease-in-out"
            archive.style.transition = "color 0.4s ease-in-out"
            contact.style.transition = "color 0.4s ease-in-out"
        })
    
        menuColorTab3.addEventListener('mouseover', () => {
            menuColorTab3.style.cursor = "pointer";
            archiveTextContainer.style.minWidth = "91%";
        })
    
        menuColorTab3.addEventListener('mouseout', () => {
            archiveTextContainer.style.minWidth = "94%";
        })
    
        // Contact Tab Hover
        menuItemContact.addEventListener('mouseover', () => {
            menuItemContact.style.cursor = "pointer";
            theCompany.style.color = "rgba(255, 255, 255, 0.3)"
            upcoming.style.color = "rgba(255, 255, 255, 0.3)"
            archive.style.color = "rgba(255, 255, 255, 0.3)"
    
            theCompany.style.transition = "color 0.4s ease-in-out"
            upcoming.style.transition = "color 0.4s ease-in-out"
            archive.style.transition = "color 0.4s ease-in-out"
            contact.style.transition = "color 0.4s ease-in-out"
        })
    
        menuItemContact.addEventListener('mouseout', () => {
            menuItemContact.style.cursor = "pointer";
            theCompany.style.color = "rgba(255, 255, 255, 1)"
            upcoming.style.color = "rgba(255, 255, 255, 1)"
            archive.style.color = "rgba(255, 255, 255, 1)"
    
            theCompany.style.transition = "color 0.4s ease-in-out"
            upcoming.style.transition = "color 0.4s ease-in-out"
            archive.style.transition = "color 0.4s ease-in-out"
            contact.style.transition = "color 0.4s ease-in-out"
        })
    
        menuColorTab4.addEventListener('mouseover', () => {
            menuColorTab4.style.cursor = "pointer";
            contactTextContainer.style.minWidth = "91%";
        })
    
        menuColorTab4.addEventListener('mouseout', () => {
            contactTextContainer.style.minWidth = "94%";
        })
    
        // The Company Tab Click to Scroll
    
        menuItemTheCompany.addEventListener('click', (event) => {
            event.preventDefault();
        
            menuItemTheCompany.scrollTo({
                top:0,
                left: window.innerWidth,
                behavior: 'smooth'
            })
        
        })
    
        // Upcoming Tab Click to Scroll
    
        menuItemUpcoming.addEventListener('click', (event) => {
            event.preventDefault();
          
            menuItemUpcoming.scrollTo({
                top:0,
                left: window.innerWidth,
                behavior: 'smooth'
            })
          
        })
    
        // Archive Tab Click to Scroll
    
        menuItemArchive.addEventListener('click', (event) => {
            event.preventDefault();
          
            menuItemArchive.scrollTo({
                top:0,
                left: window.innerWidth,
                behavior: 'smooth'
            })
          
        })
    
        // Contact Tab Click to Scroll
    
        menuItemContact.addEventListener('click', (event) => {
            event.preventDefault();
          
            menuItemContact.scrollTo({
                top:0,
                left: window.innerWidth,
                behavior: 'smooth'
            })
          
        })
    
        // Opacity Changes
    
        // "The Company" Opacity Changes
    
        menuItemTheCompany.addEventListener("scroll", (event) => {
            const positionOfTheCompanyTextContainer = Math.round(theCompanyTextContainer.getBoundingClientRect().left)
            const theCompanyTextContainerClientWidth = Math.round(theCompanyTextContainer.clientWidth)
            const opacityValueOfTheCompany = 1 + (positionOfTheCompanyTextContainer / theCompanyTextContainerClientWidth) * 2
            const opacityValueOfBackgroundImage = 1 + (positionOfTheCompanyTextContainer / theCompanyTextContainerClientWidth)
    
            // menuColorTab1.style.opacity = opacityValueOfTheCompany;
    
            menuItemTheCompany.style.opacity = opacityValueOfBackgroundImage;
            menuItemUpcoming.style.opacity = opacityValueOfTheCompany;
            menuItemArchive.style.opacity = opacityValueOfTheCompany;
            menuItemContact.style.opacity = opacityValueOfTheCompany;
            homepageImage.style.opacity = opacityValueOfBackgroundImage;
    
            if(opacityValueOfBackgroundImage < 0.20) {
                menuItemTheCompany.scrollTo({
                    top:0,
                    left: window.innerWidth,
                    behavior: 'smooth'
                })
    
                revealDiv.remove();
    
                setTimeout(() => {
                    theCompanyPage();
                }, 100)
            }
    
        })
    
        // "Upcoming" Opacity Changes
    
        menuItemUpcoming.addEventListener("scroll", () => {
            const positionOfUpcomingTextContainer = Math.round(upcomingTextContainer.getBoundingClientRect().left)
            const upcomingTextContainerClientWidth = Math.round(upcomingTextContainer.clientWidth)
            const opacityValueOfUpcoming = 1 + (positionOfUpcomingTextContainer / upcomingTextContainerClientWidth) * 2
            const opacityValueOfBackgroundImage = 1 + (positionOfUpcomingTextContainer / upcomingTextContainerClientWidth)
    
            // menuColorTab2.style.opacity = opacityValueOfUpcoming;
    
            menuItemUpcoming.style.opacity = opacityValueOfBackgroundImage;
            menuItemTheCompany.style.opacity = opacityValueOfUpcoming;
            menuItemArchive.style.opacity = opacityValueOfUpcoming;
            menuItemContact.style.opacity = opacityValueOfUpcoming;
            homepageImage.style.opacity = opacityValueOfBackgroundImage;
    
            if(opacityValueOfBackgroundImage < 0.20) {
                menuItemUpcoming.scrollTo({
                    top:0,
                    left: window.innerWidth,
                    behavior: 'smooth'
                })
    
                revealDiv.remove();
    
                setTimeout(() => {
                    upcomingPage();
                }, 100)
            
            }
    
        })
    
        // "Archive" Opacity Changes
    
        menuItemArchive.addEventListener("scroll", () => {
            const positionOfArchiveTextContainer = Math.round(archiveTextContainer.getBoundingClientRect().left)
            const archiveTextContainerClientWidth = Math.round(archiveTextContainer.clientWidth)
            const opacityValueOfArchive = 1 + (positionOfArchiveTextContainer / archiveTextContainerClientWidth) * 2
            const opacityValueOfBackgroundImage = 1 + (positionOfArchiveTextContainer / archiveTextContainerClientWidth)
            
            // menuColorTab3.style.opacity = opacityValueOfArchive;
    
    
            menuItemArchive.style.opacity = opacityValueOfBackgroundImage;
            menuItemTheCompany.style.opacity = opacityValueOfArchive;
            menuItemUpcoming.style.opacity = opacityValueOfArchive;
            menuItemContact.style.opacity = opacityValueOfArchive;
            homepageImage.style.opacity = opacityValueOfBackgroundImage;
    
            if(opacityValueOfBackgroundImage < 0.20) {
                menuItemArchive.scrollTo({
                    top:0,
                    left: window.innerWidth,
                    behavior: 'smooth'
                })
                
                revealDiv.remove();
    
                setTimeout(() => {
                    archivePage();
                }, 100)
            
            }
        })
    
        // "Contact" Opacity Changes
    
        menuItemContact.addEventListener("scroll", () => {
            const positionOfContactTextContainer = Math.round(contactTextContainer.getBoundingClientRect().left)
            const contactTextContainerClientWidth = Math.round(contactTextContainer.clientWidth)
            const opacityValueOfContact = 1 + (positionOfContactTextContainer / contactTextContainerClientWidth) * 2
            const opacityValueOfBackgroundImage = 1 + (positionOfContactTextContainer / contactTextContainerClientWidth)
    
            // menuColorTab4.style.opacity = opacityValueOfContact;
    
            menuItemContact.style.opacity = opacityValueOfBackgroundImage;
            contactTextContainer.style.opacity = `${opacityValueOfContact/1.8}`;
            menuItemTheCompany.style.opacity = opacityValueOfContact;
            menuItemUpcoming.style.opacity = opacityValueOfContact;
            menuItemArchive.style.opacity = opacityValueOfContact;
            homepageImage.style.opacity = opacityValueOfBackgroundImage;
    
            if(opacityValueOfBackgroundImage < 0.20) {
                menuItemContact.scrollTo({
                    top:0,
                    left: window.innerWidth,
                    behavior: 'smooth'
                })
    
                revealDiv.classList.remove('menu-presentation');
                revealDiv.remove();
    
                setTimeout(() => {
                    contactPage();
                }, 100)
            
            }
    
        })
    
    }
    
    // Introduction Opening Animation to Menu
    
    openingAnimationContainer.addEventListener('scroll', (event) => {
    
        //the following code grabs the value of where the text group is horizontally
        const positionOfOpeningAnimationTextGroup = Math.round(openingAnimationTextGroup.getBoundingClientRect().left);
        const openingAnimationTextGroupClientWidth = Math.round(openingAnimationTextGroup.clientWidth)
    
        // I add 1 to the value below because I want the opacity of the pulse group to change from 1 to 0
        const opacityValue = (1 + ((positionOfOpeningAnimationTextGroup / openingAnimationTextGroupClientWidth)) * 2);
    
        //I'm using 20s here because the height of the top box and the bottom box are starting at 20%, so I want heightValue to be working from that starting point
        const heightValue = 20 - ((positionOfOpeningAnimationTextGroup/ openingAnimationTextGroupClientWidth) * -20);
        const topBox = document.getElementById('top-box');
        const bottomBox = document.getElementById('bottom-box');
    
        openingAnimationPulseGroup.style.opacity = opacityValue;
    
        // im changing the background-color of this container because 1) I want
        // the pulse item to become white and 2) if the user scrolls too far right
        // then theywill see white, which i don't want. so i made the value of
        // the property background-color dependent on the value of positionOfOpeningAnimationTextGroup
    
        if(heightValue <  20) {
            topBox.style.height = `${heightValue}%`
            bottomBox.style.height = `${heightValue}%`
        }
    
        if(heightValue <= 1) {
    
            // document.body.style.backgroundColor = "white";
    
            openingAnimationTextGroup.classList.add('opening-animation-text-group-fade');
            openingAnimationPulseGroup.remove()
            openingAnimationTextGroup.remove()
            topBox.classList = "";
            bottomBox.classList = "";
    
            openingAnimationContainer.scrollTo({
                top:0,
                left: window.innerWidth,
                behavior: 'smooth'
            });
    
            setTimeout( () => {
    
                document.getElementById('top-box').remove();
                document.getElementById('bottom-box').remove();
                document.getElementById('top-box-cover').remove();
                document.getElementById('bottom-box-cover').remove();
                openingAnimationContainer.remove();
    
                homepage();
    
            }, 100)
    
        }
    })

    // SECTION 9: Desktop "The Company" Page
    
    const theCompanyPage = () => {
        console.log('the company page')
    
        const revealDiv = document.createElement('div')
        revealDiv.setAttribute('id', 'revealDiv');
    
        const backToMenuContainer = document.createElement('div');
        backToMenuContainer.setAttribute('id', 'back-to-menu-container');
    
        const backToMenuTextContainer = document.createElement('div');
        backToMenuTextContainer.setAttribute('id', 'back-to-menu-text-container')
    
        const backToMenuText = document.createElement('h2');
        backToMenuText.setAttribute('id', 'back-to-menu-text')
        backToMenuText.innerHTML = "MENU";
    
        const backToMenuTab = document.createElement('div')
        backToMenuTab.setAttribute('id', 'back-to-menu-tab')
        backToMenuTab.style.opacity = 0;
    
        const theCompanyPageContainer = document.createElement('div');
        theCompanyPageContainer.setAttribute('id', 'the-company-page-container');
    
        const contentContainer = document.createElement('div')
        contentContainer.setAttribute('id', 'content-container')
    
        const filler = document.createElement('div')
        filler.style.minHeight = '50px'
    
        const TDPHistoryContainer = document.createElement('div');
        TDPHistoryContainer.setAttribute('id', 'TDP-history-container')
        const titleAndHistoryContainer = document.createElement('div');
        titleAndHistoryContainer.setAttribute('id', 'title-and-history-container')
        const TDPTitle = document.createElement('h1');
        TDPTitle.setAttribute('id', 'TDP-title')
        TDPTitle.innerHTML = 'Tongue Dance Project'
        const TDPHistory = document.createElement('p');
        TDPHistory.setAttribute('id', 'TDP-history')
        TDPHistory.innerHTML = "Tongue Dance Project was formed in 2014 by Stephanie Gilliland and Lauren Smith as a vehicle for choreographic exploration and artistic development in contemporary dance. Known for innovation in the realm of extreme physicality and athleticism, choreographer and multimedia artist, Gilliland is the former artistic director of the critically acclaimed Tongue/ contemporary dance based in Los Angeles from 1997 to 2006. The focus of the company is the evolution, creation and production of the artistic work of Gilliland in collaboration with the dancers. The company also has a strong commitment to teaching and community outreach and has been offering free community classes since its inception. Tongue Dance Project is currently working on building a base in both Southern California and Portland, Or."
        titleAndHistoryContainer.appendChild(TDPTitle)
        titleAndHistoryContainer.appendChild(TDPHistory)
        TDPHistoryContainer.appendChild(titleAndHistoryContainer);
        TDPHistoryContainer.appendChild(filler);
    
        const stephContainer = document.createElement('div')
        stephContainer.setAttribute('id', 'steph-container')
        const stephImage = document.createElement('img')
        stephImage.setAttribute('class', 'bio-pictures')
        const stephText = document.createElement('p');
        stephText.setAttribute('class', 'the-company-page-text')
        stephText.innerHTML = '<span class="person-and-title">Stephanie Gilliland // artistic director</span><br><br>Stephanie Gilliland is a seasoned artist and arts educator, with a 30-year history as a choreographer, composer, multimedia dance artist, performer and teacher. Since 1977 she has co-founded two dance collectives and created three of her own dance companies, most notably, TONGUE/contemporary dance, based in Los Angeles from 1997 to 2006.<br><br> Committed to innovation and experimentation, Gilliland has developed her own movement system and technique which continues to evolve and grow in collaboration with her dancers and students. She has choreographed and produced numerous concerts and evening length works and has been presented throughout the United States and abroad including Scotland, Mexico, the Soviet Union and Canada.<br><br>  Gilliland is the recipient of a Creativity Grant from the National Endowment for the Arts, a Dance Maker Grant from the James Irvine Foundation, and three Lester Horton awards. Her work has been supported by numerous granting organizations including Dance USA, the Durfee Foundation, Los Angeles Cultural Affairs, and the California Arts Council. In 2007 Gilliland was awarded a residency at the Montalvo Arts Center in Saratoga, CA.<br><br>  Gilliland began her teaching career in 1980 and has served on the dance faculties of UC Riverside, UC Irvine, Loyola Marymount University, Mt San Jacinto College, Riverside Community College and the Idyllwild Arts Academy where she is currently in her twenty-first year. In addition to her work in dance Gilliland is also a practitioner and teacher of yoga.<br><br>  In 2013 Gilliland founded Tongue dance project with Lauren Smith. With a new focus on working as a collective Tongue dance project is committed to developing new choreographic voices as well as continuing to serve as a vehicle for Gilliland’s artistic exploration.'
        // stephImage.setAttribute('src', '/steph.jpg')
        stephImage.setAttribute('src', '/public/steph.jpg')
        stephContainer.appendChild(stephImage)
        stephContainer.appendChild(stephText)
    
        const laurenContainer = document.createElement('div')
        laurenContainer.setAttribute('id', 'lauren-container')
        const laurenImage = document.createElement('img')
        laurenImage.setAttribute('class', 'bio-pictures')
        const laurenText = document.createElement('p');
        laurenText.setAttribute('class', 'the-company-page-text')
        laurenText.innerHTML = '<span class="person-and-title">Lauren Smith // rehearsal director/performer</span><br><br>Lauren Smith is a graduate of the California State University, Long Beach Dance Department and has been teaching and coaching dancers for 13 years. She is a former member of the dance faculty at the Idyllwild Arts Academy and is the rehearsal director for Tongue Dance Project.  Lauren has been training in dance since the age of three and has participated in prestigious dance competitions nation wide.  Some of Lauren’s accomplishments include assisting for leading industry choreographers under Company Dance Convention, as well as being a national titlist for several dance competitions. Lauren has received scholarships to Broadway Dance Center and the Edge Performing Arts Center.<br><br> Since receiving her B.A. in Dance Lauren has pursued a deeper knowledge of the body through the study of Ashtanga Yoga, and in 2014 she became a NASM Certified personal trainer.<br><br> Lauren has been passionately focused on instilling a deeper knowledge of the art of dance to hundreds of students throughout the U.S., including working for non-profit organizations such as LA’s Best (which provides arts education to low-income neighborhoods) as well as dance studios, academies and Parks and Recreation Centers. '
        // laurenImage.setAttribute('src', '/lauren.jpg')
        laurenImage.setAttribute('src', '/public/lauren.jpg')
        laurenContainer.appendChild(laurenImage)
        laurenContainer.appendChild(laurenText)
    
        const adriContainer = document.createElement('div')
        adriContainer.setAttribute('id', 'adri-container')
        const adriImage = document.createElement('img')
        adriImage.setAttribute('class', 'bio-pictures')
        const adriText = document.createElement('p');
        adriText.setAttribute('class', 'the-company-page-text')
        adriText.innerHTML = '<span class="person-and-title">Adrianna Audoma // performer</span><br><br>Adrianna Audoma’s dance training began at the age of 7 at a local dance studio where she studied Royal Academy of Dance curriculum and completed multiple exams with honors. She went on to attended Idyllwild Arts Academy for four years and after graduating, accepted a place in University of California, Irvine’s dance department. After her first year she chose to withdraw and instead attended a five month training program in Jerusalem, Israel where she studied with Vertigo Dance Company, as well as former members of Batsheva Dance Company and Inbal Pinto and Avshalom Pollak Dance Company. Upon her return to the States, Adrianna began performing with Multiplex Dance Company under the direction of Chad Michael Hall and Tongue Dance Project under the direction of Stephanie Gilliland. She also began her career as an instructor and has now been teaching dance to children of all ages for 8 years. In addition to teaching and assisting, she is also a co-founder and manager of Portland’s newest dance studio, FLOOR Center for Dance.'
        // adriImage.setAttribute('src', '/adri.jpg')
        adriImage.setAttribute('src', '/public/adri.jpg')
        adriContainer.appendChild(adriImage)
        adriContainer.appendChild(adriText)
    
        const annaContainer = document.createElement('div')
        annaContainer.setAttribute('id', 'anna-container')
        const annaImage = document.createElement('img')
        annaImage.setAttribute('class', 'bio-pictures')
        const annaText = document.createElement('p');
        annaText.setAttribute('class', 'the-company-page-text')
        annaText.innerHTML = '<span class="person-and-title">Anna Olmstead // performer</span><br><br>Anna Olmstead is a Portland native who began her training at Classical Ballet Academy and was a company member of the Jefferson Dancers. She had the privilege of studying at summer intensives such as San Francisco Conservatory of Dance, Robert Moses Kin, The Cambrians, Hubbard Street Dance Chicago and others. Anna continued her explorations in dance at Dominican University of California with the Alonzo King LINES Ballet BFA Program and graduated May 2018 with a BFA in Dance and a Minor in Arts management. In addition to her studies in college she worked with Juntos colletive, an organization dedicated to providing dance training to underserved communities in Central America. Since Graduating Anna has received her certification to become a GYROKINESIS® trainer, collaborated on works with multiple Portland artists, and continues to create her own work. Anna is excited to be dancing with Tongue Dance Project this season.'
        // annaImage.setAttribute('src', '/anna.jpg')
        annaImage.setAttribute('src', '/public/anna.jpg')
        annaContainer.appendChild(annaImage)
        annaContainer.appendChild(annaText)
    
        const taylorContainer = document.createElement('div')
        taylorContainer.setAttribute('id', 'taylor-container')
        const taylorImage = document.createElement('img')
        taylorImage.setAttribute('class', 'bio-pictures')
        const taylorText = document.createElement('p');
        taylorText.setAttribute('class', 'the-company-page-text')
        taylorText.innerHTML = '<span class="person-and-title">Taylor Pasquale // performer</span><br><br>Taylor Pasquale is a movement based artist with a Bachelor of Fine Arts in Dance from George Mason University. A native of Northern VA, Taylor was a Freelance Performance Artist in Washington D.C. collaborating with PrioreDance, Company E, Terre Dance Collective, Motion X Dance DC, and Agora Dance. Performing internationally with PrioreDance in Cuba’s Vladimir Malakhov’s Grand Prix and presenting Julia Louis-Dreyfus the Mark Twain Award at the Kennedy Center are among her favorite performances thus far. In 2017, she was selected to present her choreography, “I” at John F. Kennedy Center’s Millennium Stage. Taylor moved to Portland this Spring and has since co-presented work with Beth Whelan and is currently collaborating with Trevor Wilde for an upcoming show. Taylor is grateful to Tongue Dance Project for making her feel like Portland is now home. '
        // taylorImage.setAttribute('src', '/taylor.jpeg')
        taylorImage.setAttribute('src', '/public/taylor.jpeg')
        taylorContainer.appendChild(taylorImage)
        taylorContainer.appendChild(taylorText)
    
        const bethContainer = document.createElement('div')
        bethContainer.setAttribute('id', 'beth-container')
        const bethImage = document.createElement('img')
        bethImage.setAttribute('class', 'bio-pictures')
        const bethText = document.createElement('p');
        bethText.setAttribute('class', 'the-company-page-text')
        bethText.innerHTML = "<span class='person-and-title'>Beth Whelan // performer</span><br><br>Beth Whelan is a movement-based artist with a BFA in Dance from George Mason University. As a freelance dancer and choreographer, she has presented work through the Regional Arts and Culture Council's Night Lights, Downright Productions' Amorphous, Polaris Dance Theater's Galaxy Festival, and performed in various works of local choreographers. In February of 2019, Beth and Trevor Wilde co-presented a shared evening of dance at Performance Works Northwest called Two of a Kind. Beth recently was awarded the White Bird Barney Commissioning Prize alongside Trevor Wilde and Shaun Keylock, and will be creating new work for the White Bird Uncaged Series. Prior to Portland, Beth performed alongside The Metropolitan Jazz Orchestra in their production of Swinging Through the Sky, Robert Battle’s Mass with the GMU Percussion Ensemble, freelanced with D.C.-based Company E at the Kennedy Center in their work (In)Security, as well as with Putty Dance Project in Philadelphia. Her writing on dance is published in <a href='https://philadelphiadance.org/dancejournal/author/ewhelan/' target='_blank'>Philadelphia's The Dance Journal</a> and <a href='https://www.orartswatch.org/author/elizabeth-whelan/' target='_blank'>Oregon Arts Watch</a>."
        // bethImage.setAttribute('src', '/beth.jpg')
        bethImage.setAttribute('src', '/public/beth.jpg')
        bethContainer.appendChild(bethImage)
        bethContainer.appendChild(bethText)
    
        const willowContainer = document.createElement('div')
        willowContainer.setAttribute('id', 'willow-container')
        const willowImage = document.createElement('img')
        willowImage.setAttribute('class', 'bio-pictures')
        const willowText = document.createElement('p');
        willowText.setAttribute('class', 'the-company-page-text')
        willowText.innerHTML = "<span class='person-and-title'>Willow Swanson // performer</span><br><br>Beginning with classical jazz, and soon expanding to a variety of styles including tap, hip hop, and contemporary, Willow Swanson fell in love with dance early on.  Fascinated by other types of movement, as well as how to apply them to dance, she has also trained in Kung Fu, Tai Chi, Yoga, and Acrobatics, and rock climbs as another way to train.  She has collaborated with a number of Portland locals such as DarVejon Jones, Alicia Cutaia, Jamuna Chiarini, Beth Whelan, Amelia Unsicker, and Katie Burkes, and her performance experiences include dancing with Portland companies Polaris Dance Theatre and Agneizska Laska Dancers, as well as the Vancouver-based company Horizon3 Dance.  Credits also include performing with Victoria Perez at the Young Choreographer's Festival 2019 in New York City, showing and performing her own work at Chapel Theatre earlier the same year, and several small film roles.  She currently teaches a diverse range of dance classes at studios across Vancouver and Portland and continues to work with dance companies and independent artists on several projects, including live shows, film and photography, and dance outreach."
        // willowImage.setAttribute('src', '/willow.JPG')
        willowImage.setAttribute('src', '/public/willow.JPG')
        willowContainer.appendChild(willowImage)
        willowContainer.appendChild(willowText)
    
        const darienneContainer = document.createElement('div')
        darienneContainer.setAttribute('id', 'darienne-container-desktop')
        const darienneImage = document.createElement('img')
        darienneImage.setAttribute('class', 'bio-pictures')
        const darienneText = document.createElement('p');
        darienneText.setAttribute('class', 'the-company-page-text')
        darienneText.innerHTML = "<span class='person-and-title'>Darienne Gilmore // performer</span><br><br>At the age of 14, Darienne began her dance training at Renaissance High School for the arts in Long Beach, California. While in school, she pursued the performing arts where she studied release technique dance and straight/musical theater. She excelled, earning her 'most outstanding' student in the dance department. After graduating in 2018, Darienne has since continued her dance training and is currently dancing with Steps PDX in the youth ballet program. As of this year, Darienne is Tongue Dance Project's new apprentice."
        // darienneImage.setAttribute('src', '/darienne.jpg')
        darienneImage.setAttribute('src', '/public/darienne.jpg')
        darienneContainer.appendChild(darienneImage)
        darienneContainer.appendChild(darienneText)
    
        document.body.appendChild(revealDiv)
    
        backToMenuTextContainer.appendChild(backToMenuText)
        backToMenuContainer.appendChild(backToMenuTextContainer);
        backToMenuContainer.appendChild(backToMenuTab)
    
        contentContainer.appendChild(TDPHistoryContainer)
        contentContainer.appendChild(stephContainer)
        contentContainer.appendChild(laurenContainer)
        contentContainer.appendChild(adriContainer)
        contentContainer.appendChild(annaContainer)
        contentContainer.appendChild(taylorContainer)
        contentContainer.appendChild(bethContainer)
        contentContainer.appendChild(willowContainer)
        contentContainer.appendChild(darienneContainer)
    
        theCompanyPageContainer.appendChild(backToMenuContainer)
        theCompanyPageContainer.appendChild(contentContainer)
    
        revealDiv.appendChild(theCompanyPageContainer)
    
        revealDiv.classList.add('menu-presentation')
    
        backToMenuContainer.addEventListener('mouseover', () => {
            backToMenuContainer.style.cursor = "pointer";
        })
    
        backToMenuContainer.addEventListener('click', () => {
            backToMenuContainer.scrollTo({
                top:0,
                left: window.innerWidth,
                behavior: 'smooth'
            });
        })
    
        backToMenuContainer.addEventListener("scroll", () => {
            const positionOfBackToMenuTextContainer = Math.round(backToMenuTextContainer.getBoundingClientRect().left)
            const BackToMenuTextContainerClientWidth = Math.round(backToMenuTextContainer.clientWidth)
            const opacityValueOfBackToMenuTab = 1 + (positionOfBackToMenuTextContainer/ BackToMenuTextContainerClientWidth) * 2
            const opacityValueOfBackgroundImage = 1 + (positionOfBackToMenuTextContainer / BackToMenuTextContainerClientWidth)
            
            // backToMenuTab.style.opacity = opacityValueOfBackToMenuTab;
            backToMenuContainer.style.opacity = opacityValueOfBackgroundImage;
    
            contentContainer.style.opacity = opacityValueOfBackToMenuTab
    
            if(opacityValueOfBackgroundImage < 0.20) {
                backToMenuContainer.scrollTo({
                    top:0,
                    left: window.innerWidth,
                    behavior: 'smooth'
                })
    
                revealDiv.remove();
    
                setTimeout(() => {
                    homepage();
                }, 100)
            
            }
        })
    }

    // SECTION 10: Desktop "Upcoming" Page
    
    const upcomingPage = () => {
    
        setTimeout(() => {
            backgroundImage.style.opacity = "1"
            backgroundImage.classList.remove('background-image-fade')
        }, 1000);
    
        console.log('upcoming page')
    
        const backgroundImage = document.createElement('div');
        backgroundImage.setAttribute('id', 'background-image');
        backgroundImage.classList.add('background-image-fade');
    
        const revealDiv = document.createElement('div')
        revealDiv.setAttribute('id', 'revealDiv');
    
        const upcomingPageContainer = document.createElement('div');
        upcomingPageContainer.setAttribute('id', "upcoming-page-container")
    
        const backToMenuContainer = document.createElement('div');
        backToMenuContainer.setAttribute('id', 'back-to-menu-container');
    
        const backToMenuTextContainer = document.createElement('div');
        backToMenuTextContainer.setAttribute('id', 'back-to-menu-text-container')
    
        const backToMenuText = document.createElement('h2');
        backToMenuText.setAttribute('id', 'back-to-menu-text')
        backToMenuText.innerHTML = "MENU";
    
        const backToMenuTab = document.createElement('div')
        backToMenuTab.setAttribute('id', 'back-to-menu-tab')
        backToMenuTab.style.opacity = 0;
    
        const classesContainer = document.createElement('div');
        classesContainer.setAttribute('id', 'classes-container')
    
        const classesTitle = document.createElement('h1');
        classesTitle.innerHTML = "CLASSES";
        classesTitle.setAttribute('id', 'classes-title')
    
        const classInformation = document.createElement('p');
        classInformation.setAttribute('id', 'class-information')
        classInformation.innerHTML = "Weekly class held at Steps PDX <br> 220 SE 11th Ave Suite 220, Portland, OR 97214 <br> Int/Adv Contemporary Modern <br> Thursdays 7:30-8:30";
    
        const descriptionContainer = document.createElement('div');
        descriptionContainer.setAttribute('id', 'description-container')
    
        const classDescription = document.createElement('p')
        classDescription.innerHTML = "find out more"
        classDescription.setAttribute('id', 'find-out-more')
    
        const arrow = document.createElement('i');
        arrow.setAttribute('class', 'fas fa-arrow-right')
        arrow.setAttribute('id', 'arrow');
    
        const filler = document.createElement('div')
        filler.style.minHeight = "10vh"
    
        document.body.appendChild(revealDiv)
    
        backgroundImage.style.backgroundImage = "url('/public/upcoming.jpg')";
        // backgroundImage.style.backgroundImage = "url('/upcoming.jpg')";
        backgroundImage.style.backgroundSize = "cover";
        backgroundImage.style.backgroundRepeat = "no-repeat";
        backgroundImage.style.backgroundPosition = "50% 50%";
    
        classesContainer.appendChild(classesTitle);
        classesContainer.appendChild(classInformation);
        descriptionContainer.appendChild(classDescription);
        descriptionContainer.appendChild(arrow)
        classesContainer.appendChild(descriptionContainer)
    
        backToMenuTextContainer.appendChild(backToMenuText)
        backToMenuContainer.appendChild(backToMenuTextContainer);
        backToMenuContainer.appendChild(backToMenuTab)
    
        upcomingPageContainer.appendChild(backToMenuContainer)
        upcomingPageContainer.appendChild(classesContainer)
        classesContainer.appendChild(filler)
    
        revealDiv.appendChild(backgroundImage)
        revealDiv.appendChild(upcomingPageContainer)
    
        revealDiv.classList.add('menu-presentation')
    
        backToMenuContainer.addEventListener('mouseover', () => {
            backToMenuContainer.style.cursor = "pointer";
        })
    
        backToMenuContainer.addEventListener('click', () => {
            backToMenuContainer.scrollTo({
                top:0,
                left: window.innerWidth,
                behavior: 'smooth'
            });
        })
    
        descriptionContainer.addEventListener('mouseover', () => {
            descriptionContainer.style.cursor = "pointer"
        })
    
        descriptionContainer.addEventListener('click', () => {
            window.open("https://www.stepspdx.com/adult-dropin#!", "_blank");
        })
    
        backToMenuContainer.addEventListener("scroll", () => {
            const positionOfBackToMenuTextContainer = Math.round(backToMenuTextContainer.getBoundingClientRect().left)
            const BackToMenuTextContainerClientWidth = Math.round(backToMenuTextContainer.clientWidth)
            const opacityValueOfBackToMenuTab = 1 + (positionOfBackToMenuTextContainer/ BackToMenuTextContainerClientWidth) * 2
            const opacityValueOfBackgroundImage = 1 + (positionOfBackToMenuTextContainer / BackToMenuTextContainerClientWidth)
            
            // backToMenuTab.style.opacity = opacityValueOfBackToMenuTab;
            backToMenuContainer.style.opacity = opacityValueOfBackgroundImage;
            backgroundImage.style.opacity = opacityValueOfBackgroundImage;
    
            classesContainer.style.opacity = opacityValueOfBackToMenuTab;
    
            if(opacityValueOfBackgroundImage < 0.20) {
                backToMenuContainer.scrollTo({
                    top:0,
                    left: window.innerWidth,
                    behavior: 'smooth'
                })
                
                backgroundImage.classList.remove('background-image-fade')
                revealDiv.remove();
    
                setTimeout(() => {
                    homepage();
                }, 100)
            
            }
        })
    
    }

    // SECTION 11: Desktop "Archive" Page
    
    const archivePage = () => {
    
        setTimeout(() => {
            backgroundImage.style.opacity = "1"
            backgroundImage.classList.remove('background-image-fade')
        }, 1000);
    
        console.log('archive page')
    
        const backgroundImage = document.createElement('div');
        backgroundImage.setAttribute('id', 'background-image');
        backgroundImage.classList.add('background-image-fade');
    
        const revealDiv = document.createElement('div')
        revealDiv.setAttribute('id', 'revealDiv');
        revealDiv.style.backgroundColor = "red";
    
        const backToMenuContainer = document.createElement('div');
        backToMenuContainer.setAttribute('id', 'back-to-menu-container');
    
        const backToMenuTextContainer = document.createElement('div');
        backToMenuTextContainer.setAttribute('id', 'back-to-menu-text-container')
    
        const backToMenuText = document.createElement('h2');
        backToMenuText.setAttribute('id', 'back-to-menu-text')
        backToMenuText.innerHTML = "MENU";
    
        const backToMenuTab = document.createElement('div')
        backToMenuTab.setAttribute('id', 'back-to-menu-tab')
        backToMenuTab.style.opacity = 0;
    
        const archivePageContainer = document.createElement('div');
        archivePageContainer.setAttribute('id','archive-page-container');
        
        const videosContainer = document.createElement('div');
        videosContainer.setAttribute('id', 'videos-container')
    
        const videosTitle = document.createElement('h1')
        videosTitle.setAttribute('id', 'videos-title')
        videosTitle.innerHTML = "VIDEOS"
    
        const archiveItem1 = document.createElement('p')
        archiveItem1.setAttribute('class', 'archive-item')
        archiveItem1.innerHTML = "Untitled (2020) - Portland, OR <i class='fas fa-arrow-right'></i>";
        archiveItem1.style.width = "fit-content"
        const archiveItem2 = document.createElement('p')
        archiveItem2.setAttribute('class', 'archive-item')
        archiveItem2.innerHTML = "Untitled (2019) - Portland, OR <i class='fas fa-arrow-right'></i>";
        archiveItem2.style.width = "fit-content"
        const archiveItem3 = document.createElement('p')
        archiveItem3.setAttribute('class', 'archive-item')
        archiveItem3.innerHTML = "Knee Deep (2018) - Portland, OR <i class='fas fa-arrow-right'></i>";
        archiveItem3.style.width = "fit-content"
        const archiveItem4 = document.createElement('p')
        archiveItem4.setAttribute('class', 'archive-item')
        archiveItem4.innerHTML = "Becoming Buffalo (2017) - <span>San Jacinto, CA <i class='fas fa-arrow-right'></i></span>";
        archiveItem4.style.width = "fit-content"
    
        const filler = document.createElement('div');
        filler.style.height = "15vh"
    
        videosContainer.appendChild(videosTitle)
        videosContainer.appendChild(archiveItem1)
        videosContainer.appendChild(archiveItem2)
        videosContainer.appendChild(archiveItem3)
        videosContainer.appendChild(archiveItem4)
        videosContainer.appendChild(filler)
    
        backgroundImage.style.backgroundImage = "url('/public/archive.jpg')";
        // backgroundImage.style.backgroundImage = "url('/archive.jpg')";
        backgroundImage.style.backgroundSize = "cover";
        backgroundImage.style.backgroundRepeat = "no-repeat";
        backgroundImage.style.backgroundPosition = "50% 50%";
    
        backToMenuTextContainer.appendChild(backToMenuText)
        backToMenuContainer.appendChild(backToMenuTextContainer);
        backToMenuContainer.appendChild(backToMenuTab)
    
        archivePageContainer.appendChild(backToMenuContainer)
        archivePageContainer.appendChild(videosContainer)
    
        revealDiv.appendChild(archivePageContainer);
        revealDiv.appendChild(backgroundImage)
        document.body.appendChild(revealDiv);
    
        revealDiv.classList.add('menu-presentation')
    
        backToMenuContainer.addEventListener('mouseover', () => {
            backToMenuContainer.style.cursor = "pointer";
        })
    
        backToMenuContainer.addEventListener('click', () => {
            backToMenuContainer.scrollTo({
                top:0,
                left: window.innerWidth,
                behavior: 'smooth'
            });
        })
    
        archiveItem1.addEventListener('click', () => {
            window.open("https://www.youtube.com/watch?v=vstVU5oxcUQ", "_blank");
        })
    
        archiveItem2.addEventListener('click', () => {
            window.open("https://www.youtube.com/watch?v=RNOIaCcW4OQ&t=1s", "_blank");
        })
    
        archiveItem3.addEventListener('click', () => {
            window.open("https://www.youtube.com/watch?v=lMTgte2jjz8&t=1s", "_blank");
        })
    
        archiveItem4.addEventListener('click', () => {
            window.open("https://vimeo.com/user9684465", "_blank");
        })
    
        archiveItem1.addEventListener('mouseover', () => {
            archiveItem1.style.cursor = "pointer";
        })
    
        archiveItem1.addEventListener('mouseout', () => {
            archiveItem1.style.cursor = "";
        })
    
        archiveItem2.addEventListener('mouseover', () => {
            archiveItem2.style.cursor = "pointer";
        })
    
        archiveItem2.addEventListener('mouseout', () => {
            archiveItem2.style.cursor = "";
        })
    
        archiveItem3.addEventListener('mouseover', () => {
            archiveItem3.style.cursor = "pointer";
        })
    
        archiveItem3.addEventListener('mouseout', () => {
            archiveItem3.style.cursor = "";
        })
    
        archiveItem4.addEventListener('mouseover', () => {
            archiveItem4.style.cursor = "pointer";
        })
    
        archiveItem4.addEventListener('mouseout', () => {
            archiveItem4.style.cursor = "";
        })
    
        backToMenuContainer.addEventListener("scroll", () => {
            const positionOfBackToMenuTextContainer = Math.round(backToMenuTextContainer.getBoundingClientRect().left)
            const BackToMenuTextContainerClientWidth = Math.round(backToMenuTextContainer.clientWidth)
            const opacityValueOfBackToMenuTab = 1 + (positionOfBackToMenuTextContainer/ BackToMenuTextContainerClientWidth) * 2
            const opacityValueOfBackgroundImage = 1 + (positionOfBackToMenuTextContainer / BackToMenuTextContainerClientWidth)
            
            // backToMenuTab.style.opacity = opacityValueOfBackToMenuTab;
            backToMenuContainer.style.opacity = opacityValueOfBackgroundImage;
            backgroundImage.style.opacity = opacityValueOfBackgroundImage;
            videosContainer.style.opacity = opacityValueOfBackToMenuTab
    
            if(opacityValueOfBackgroundImage < 0.20) {
                backToMenuContainer.scrollTo({
                    top:0,
                    left: window.innerWidth,
                    behavior: 'smooth'
                })
                
                backgroundImage.classList.remove('background-image-fade')
                revealDiv.remove();
    
                setTimeout(() => {
                    homepage();
                }, 100)
            
            }
        })
    }

    // SECTION 12: Desktop "Contact" Page
    
    const contactPage = () => {
    
        setTimeout(() => {
            backgroundImage.style.opacity = "1"
            backgroundImage.classList.remove('background-image-fade')
        }, 1000);
    
        console.log('contact page')
    
        const backgroundImage = document.createElement('div');
        backgroundImage.setAttribute('id', 'background-image');
        backgroundImage.classList.add('background-image-fade');
    
        const revealDiv = document.createElement('div')
        revealDiv.setAttribute('id', 'revealDiv');
    
        const contactPageContainer = document.createElement('div');
        contactPageContainer.setAttribute('id','contact-page-container');
    
        const backToMenuContainer = document.createElement('div');
        backToMenuContainer.setAttribute('id', 'back-to-menu-container');
    
        const backToMenuTextContainer = document.createElement('div');
        backToMenuTextContainer.setAttribute('id', 'back-to-menu-text-container')
    
        const backToMenuText = document.createElement('h2');
        backToMenuText.setAttribute('id', 'back-to-menu-text')
        backToMenuText.innerHTML = "MENU";
    
        const backToMenuTab = document.createElement('div')
        backToMenuTab.setAttribute('id', 'back-to-menu-tab')
        backToMenuTab.style.opacity = 0;
    
        const contactInfoContainer = document.createElement('div');
        contactInfoContainer.setAttribute('id', 'contact-info-container');
    
        const emailAddress1 = document.createElement('h1');
        emailAddress1.setAttribute('id', 'email-address1');
        emailAddress1.innerHTML = "TONGUEDANCEPROJECT";
    
        const emailClipboardContainer = document.createElement('div');
        emailClipboardContainer.setAttribute('id', 'email-clipboard-container')
    
        const emailAddress2 = document.createElement('h1');
        emailAddress2.setAttribute('id', 'email-address2');
        emailAddress2.innerHTML = "@GMAIL.COM";
    
        const clipboardIcon = document.createElement('i');
        clipboardIcon.setAttribute('class', 'far fa-clipboard')
        clipboardIcon.setAttribute('id', 'clipboard-icon')
    
        const iconContainer = document.createElement('div');
        iconContainer.setAttribute('id', 'icon-container')
    
        const instagramIcon = document.createElement('i');
        instagramIcon.setAttribute('class', 'fab fa-instagram icon');
    
        const sendEmailIcon = document.createElement('i');
        sendEmailIcon.setAttribute('class', 'far fa-paper-plane icon')
    
        const filler = document.createElement('div')
        filler.style.minHeight = "15vh"
    
        backgroundImage.style.backgroundImage = "url('/public/contact.jpg')";
        // backgroundImage.style.backgroundImage = "url('/contact.jpg')";
        backgroundImage.style.backgroundSize = "cover";
        backgroundImage.style.backgroundRepeat = "no-repeat";
        backgroundImage.style.backgroundPosition = "50% 2vw";
        // backgroundImage.style.backgroundPosition = "50% 50%";
    
        backToMenuTextContainer.appendChild(backToMenuText)
        backToMenuContainer.appendChild(backToMenuTextContainer);
        backToMenuContainer.appendChild(backToMenuTab)
        contactInfoContainer.appendChild(emailAddress1)
        emailClipboardContainer.appendChild(emailAddress2)
        emailClipboardContainer.appendChild(clipboardIcon)
        contactInfoContainer.appendChild(emailClipboardContainer)
        iconContainer.appendChild(instagramIcon)
        iconContainer.appendChild(sendEmailIcon)
        contactInfoContainer.appendChild(iconContainer)
        contactPageContainer.appendChild(backToMenuContainer)
        contactPageContainer.appendChild(contactInfoContainer)
        contactPageContainer.appendChild(filler)
        revealDiv.appendChild(backgroundImage);
        revealDiv.appendChild(contactPageContainer);
    
        document.body.appendChild(revealDiv);
        // revealDiv.style.backgroundColor = 'red';
    
        revealDiv.classList.add('menu-presentation')
    
        backToMenuContainer.addEventListener('mouseover', () => {
            backToMenuContainer.style.cursor = "pointer";
        })
    
        backToMenuContainer.addEventListener('click', () => {
            backToMenuContainer.scrollTo({
                top:0,
                left: window.innerWidth,
                behavior: 'smooth'
            });
        })
    
        clipboardIcon.addEventListener('click', () => {
            navigator.clipboard.writeText('tonguedanceproject@gmail.com');
        })
    
        clipboardIcon.addEventListener('mouseover', () => {
            clipboardIcon.style.cursor = "pointer";
        })
    
        instagramIcon.addEventListener('click', () => {
            window.open("https://www.instagram.com/tonguedanceproject/?hl=en", "_blank");
        })
    
        instagramIcon.addEventListener('mouseover', () => {
            instagramIcon.style.cursor = "pointer";
        })
    
        sendEmailIcon.addEventListener('click', () => {
            location.href = "mailto:tonguedanceproject@gmail.com"
        })
    
        sendEmailIcon.addEventListener('mouseover', () => {
            sendEmailIcon.style.cursor = "pointer";
        })
        
        backToMenuContainer.addEventListener("scroll", () => {
            const positionOfBackToMenuTextContainer = Math.round(backToMenuTextContainer.getBoundingClientRect().left)
            const BackToMenuTextContainerClientWidth = Math.round(backToMenuTextContainer.clientWidth)
            const opacityValueOfBackToMenuTab = 1 + (positionOfBackToMenuTextContainer/ BackToMenuTextContainerClientWidth) * 2
            const opacityValueOfBackgroundImage = 1 + (positionOfBackToMenuTextContainer / BackToMenuTextContainerClientWidth)
            
            backToMenuContainer.style.opacity = opacityValueOfBackgroundImage;
            backgroundImage.style.opacity = opacityValueOfBackgroundImage;
    
            contactInfoContainer.style.opacity = opacityValueOfBackToMenuTab;
    
            if(opacityValueOfBackgroundImage < 0.20) {
                backToMenuContainer.scrollTo({
                    top:0,
                    left: window.innerWidth,
                    behavior: 'smooth'
                })
                
                backgroundImage.classList.remove('background-image-fade')
                revealDiv.remove();
    
                setTimeout(() => {
                    homepage();
                }, 100)
            
            }
        })
    
    }
  }