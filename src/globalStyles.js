import { createGlobalStyle } from "styled-components";

export const GlobalStyles = createGlobalStyle`
    :root {

        // ******colors******
        --clr-dark: 230 35% 7%;
        --clr-accent: 231 77% 90%;
        --clr-white: 0 0% 100%;

        // ******font sizes****** 

        --fs-900: clamp(8rem, 13vw, 15rem);
        --fs-800: 5.6rem;
        --fs-700: 2.4rem;
        --fs-600: 2rem;
        --fs-500: 1.6rem;
        --fs-400: 1.5rem;
        --fs-300: 1.6rem;
        --fs-200: 1.4rem;
        --fs-perm: 2.8rem;
        

        // ****** font families ******
        --ff-serif: "Bellefair", serif;
        --ff-sans-cond: "Barlow Condensed", sans-serif;
        --ff-sans-normal: "Barlow", sans-serif;
    
        // ****** letter spacing ******
        --ls-1: 4.75px;
        --ls-2: 2.7px;
        --ls-3: 2.35px;
    }

    @media(min-width: 36rem) {
        :root {
        --fs-800: 8rem;
        --fs-700: 4rem;
        --fs-500: 2rem;
        --fs-400: 1.6rem;
        --fs-300: 1.4rem;
        }
    }

    @media(min-width: 55rem) {
        :root {
        --fs-800: clamp(8rem, 10vw, 10rem);
        --fs-700: clamp(4rem, 10vw, 5.6rem);
        --fs-600: 3.2rem;
        --fs-500: 2.8rem;
        --fs-400: clamp(1.6rem, 1.5vw, 1.8rem); 
        }
    }

    hr {
        margin: 2rem 0;
    }

    // *************** // 
    // Resets          //
    // *************** //

    https://piccalil.li/blog/a-modern-css-reset

    *,
    *::before,
    *::after {
        box-sizing: border-box;
    }

    body,
    h1,
    h2,
    h3,
    h4,
    h5,
    h6,
    picture,
    blockquote,
    figure {
        margin: 0;
    }


    ul[role="list"],
    ol[role="list"] {
        list-style: none;
    }

    html:focus-within {
        scroll-behavior: smooth;
    }

    @media (prefers-reduced-motion: reduce) {
        html:focus-within {
            scroll-behavior: auto;
        }
    }

    @media (prefers-reduced-motion: reduce) {
        *,
        *::before,
        *::after {
            animation-duration: 0.01ms !important;
            animation-iteration-count: 1 !important;
            transition-duration: 0.01ms !important;
            scroll-behavior: auto !important;
        }
    }

    body {
        min-height: 100vh;
        text-rendering: optimizeSpeed;
        line-height: 1.5;
        font-family: var(--ff-sans-normal);
        font-size: var(--fs-300);
        color: hsl( var(--clr-white) );
        background-color: hsl( var(--clr-dark) );
        margin: 0;

        
    }



    img,
    picture {
        max-width: 100%;
        display: block;
    }

    select,
    input,
    button,
    textarea {
        font-inherit;
    }


    h1,
    h2,
    h3,
    h4,
    h5,
    h6,
    p {
        font-weight: 400;
    }

    // ****** base font-sizing ******
    html {
        font-size: 62.5%;
    }

    // ***************** // 
    // utility attributes//
    // ***************** //
    [data-flex] {
        display: flex;
        gap: var(--gap, 1rem);
    }

    [data-grid] {
        display: grid;
        gap: var(--gap, 1rem);
    }

    [data-container] {
        padding-inline: 2em;
        margin-inline: auto;
        max-width: 110rem;
    }

    [data-uppercase] {
        text-transform: uppercase;
    }

    [data-sr-only] {
        position: absolute;
        width: 1px;
        height: 1px;
        padding: 0;
        margin: -1px;
        overflow: hidden;
        clip: rect(0, 0, 0, 0);
        white-space: nowrap; /* added line */
        border: 0;
    }

    [data-flow="1"] {
        >*:where(:not(:first-child)) {
            margin-top: 1rem;
        }
    }
    [data-flow="2"] {
        >*:where(:not(:first-child)) {
            margin-top: 2rem;
        }
    }
    [data-flow="3"] {
        >*:where(:not(:first-child)) {
            margin-top: 3rem;
        }
    }

    [data-no-underline] {
        text-decoration: none;
    }


    // ****** colors ******
    [data-bg-dark] {
        background-color: hsl(var(--clr-dark));
    }
    [data-bg-white] {
        background-color: hsl(var(--clr-white));
    }
    [data-bg-accent] {
        background-color: hsl(var(--clr-accent));
    }
    [data-text-dark] {
        color: hsl(var(--clr-dark));
    }
    [data-text-white] {
        color: hsl(var(--clr-white));
    }
    [data-text-accent] {
        color: hsl(var(--clr-accent));
    }



    [data-letter-space="1"] {
        letter-spacing: var(--ls-1);
    }
    [data-letter-space="2"] {
        letter-spacing: var(--ls-2);
    }
    [data-letter-space="3"] {
        letter-spacing: var(--ls-3);
    }


    // ****** fonts ******

    [data-font-family="serif"] {
        font-family: var(--ff-serif);
    }
    [data-font-family="sans-cond"] {
        font-family: var(--ff-sans-cond);
    }
    [data-font-family="sans-normal"] {
        font-family: var(--ff-sans-normal);
    }


    // ****** indicators ******
    
    [data-underline-indicators] > * {
        border: 0;
        border-bottom: .2rem solid hsl(var(--clr-white) / 0);
        padding: var(--underline-gap, 2.5rem) 0;
        background: transparent;
    }

    [data-underline-indicators] > *:hover,
    [data-underline-indicators] > *:focus {
        border-color: hsl(var(--clr-white) / 0.5);
    }


    .active {
        border-color: hsl(var(--clr-white) / 1);
        color: hsl(var(--clr-white) / 1);
    }

    [data-tab-list] {
        --gap: 2rem;
    }

    [data-dot-indicators] > * {
        cursor: pointer;
        border: 0;
        border-radius: 50%;
        padding: .5em;
        background-color: hsl(var(--clr-white) / 0.25);
    }

    [data-dot-indicators] > *:hover,
    [data-dot-indicators] > *:focus {
        background-color: hsl(var(--clr-white) /0.5);
    }

    [data-dot-indicators] > [aria-selected="true"] {
        background-color: hsl(var(--clr-white) / 1)
    }

    .active-dot {
        background-color: hsl(var(--clr-white) / 1)
    }



    [data-large-button-link] {
        text-decoration: none;
        font-size: var(--fs-600);
    }

    [data-circle-indicators] > * {
        cursor: pointer;
        background-color: transparent;
        color: hsl(var(--clr-white));
        border-color: hsl(var(--clr-white) / 0.5);
    }

    [data-circle-indicators] > *:hover,
    [data-circle-indicators] > *:focus {
        border: 2px solid white;   
    }

    .active-circle {
        background-color: white;
        color: black;
    }

    



    // ****** navigation ******

    [data-logo] {
        padding: 0 2rem;
    }

    .mobile-nav-toggle {
        display: none;
    }

    .mobile-nav-toggle:focus-visible {
        outline: 2px solid white;
        outline-offset: 3px;
    }

    @media (max-width: 36rem) {
        .mobile-nav-toggle {
            display: block;
            position: absolute;
            z-index: 11;
            right: 1rem;
            background: transparent;
            border: 0;
            width: 1.5rem;
            aspect-ratio: 1;
            background-size: cover;
            margin-top: 3rem;
            bottom: 40%;
        }

        .hamburger-icon {
            background-image: url(/assets/shared/icon-hamburger.svg);
        }

        .close-nav-icon {
            background-image: url(/assets/shared/icon-close.svg);
        }

        .visible-nav {
            transform: translateX(0);
            transition: 250ms ease-in-out;
        }

        .invisible-nav {
            transform: translateX(100%);
            transition: 250ms ease-in-out;
        }
    }

    [data-primary-navigation].[data-underline-indicators] > [data-active] {
        border: 0;
    }

    [data-primary-navigation] {
        display: flex;
        list-style: none;
        margin: 0;
        padding: 0 10rem;
        background-color: hsl(var(--clr-white) / 0.05);
        > * {
            font-size: var(--fs-400);
            margin-right: 2rem;
        }
    }


    @media (min-width: 35rem) and (max-width: 50rem) {
        [data-primary-navigation] span {
            display: none;
        }
    }
    @media (min-width: 30rem) and (max-width: 53rem) {
        [data-primary-navigation] {
            padding: 0 4rem;
        }
    }


    @media (max-width: 35rem) {
        [data-primary-navigation] {
            flex-direction: column;
            position: fixed;
            inset: 0 0 0 35%;
            z-index: 10;
            list-style: none;
            padding: min(10rem, 10vh) 3rem;
            margin: 0;
            background-color: hsl(var(--clr-dark));     
        }
    }

    @supports (backdrop-filter: blur(20px)) {
        [data-primary-navigation] {
            backdrop-filter: blur(20px);
            background-color: hsl(var(--clr-white) / 0.05);
        }
    }

    [data-primary-navigation] a {
        text-decoration: none;
    }

    [data-primary-navigation] a > span {
        font-weight: 700;
        margin-right: 1rem;
    }



// ************************** //
//           Layout           //
// ************************** //
    
    [data-grid-container] {
        display: grid;
        text-align: center;
        place-items: center;
        padding-inline: 1rem;
    }

    

    @media (min-width: 55rem) {
        [data-grid-container] {
            text-align: left;           
            grid-template-columns: minmax(2rem, 1fr) repeat(2, minmax(0, 70rem)) minmax(2rem, 1fr);
            align-items: end;
        }
    }


    // ************* Home Layout ********************//

    @media (min-width: 55rem) {       
        [data-grid-container--home] > *:first-child {
            grid-column: 2;
            padding-bottom: max(6rem, 20vh);
        }

        [data-grid-container--home] > *:last-child {
            grid-column: 3;
            padding-bottom: max(6rem, 20vh);

        }

        [data-grid-container--home] {
            align-items: end;
            column-gap: var(--container-gap, 10rem);
    }

    // ************* Destination Layout *************//

    [data-grid-container--destination] {
        grid-template-areas:
        "title"
        "image"
        "tabs"
        "content";
        column-gap: 2rem;
    }


    @media (min-width: 55rem) {
        [data-grid-container--destination] {
            grid-template-areas:
                ". title title ." 
                ". image tabs ."
                ". image content .";
            justify-items: start;
            column-gap: 2rem;
            padding-inline: 6rem;

        }
    }

    @media (min-width: 35rem) {
        [data-destination-title] {
            justify-self: start;
            transform: translate(-20%);
            margin-left: 3rem;
        }
    }

    @media (min-width: 55rem) {
        [data-destination-image] {
            padding-bottom: max(6rem, 10vh);
            transform: translateY(-10%);
        }
    }

    [data-destination-title] {
        grid-area: title;
    }

    [data-destination-image] {
        grid-area: image;
        max-width: 100%;
    }

    [data-destination-tabs] {
        grid-area: tabs;
    }

    [data-destination-tabs] > * {
        font-size: var(--fs-300);
    }



    [data-destination-content] {
        padding-bottom: max(6rem, 10vh);
        grid-area: content;
    }
    

    @media (min-width: 35rem) {
        [data-destination-content] > * {
            flex-direction: row;
        }     
    }

    @media (min-width: 35rem) and (max-width: 55rem) {
        [data-destination-content] > * {
            justify-content: space-evenly;
        }
    }


    @media (min-width: 55rem) {
        [data-destination-travel] {
            >*:where(:not(:first-child)) {
                margin-right: 5rem;
            }
        }
    }


    // ************* Crew Layout *************//



    [data-grid-container--crew] {
        grid-template-areas:
            "title"
            "image"
            "tabs"
            "content";
    }

    @media (min-width: 35rem) {
        [data-grid-container--crew] {
            grid-template-areas:
                "title"
                "content"
                "tabs"
                "image";
        }
    }


    @media (min-width: 55rem) {
        [data-grid-container--crew] {
            justify-items: center;
            column-gap: 2rem;
            padding-inline: 6rem;
            grid-template-areas:
                ". title image ."
                ". content image ."
                ". tabs image .";
        }
    }


    [data-crew-title] {
            grid-area: title;   
            justify-self: start;
    }

    [data-crew-content] {
            grid-area: content;      
            justify-self: start;
    }

    [data-crew-tabs] {
            grid-area: tabs;      
            justify-self: start; 
            padding-bottom: min(6rem, 10vh);
    }

    [data-crew-tabs] > * {
        margin-right: 1rem;
    }

    [data-crew-image] {
            grid-area: image;      
    }

    

`