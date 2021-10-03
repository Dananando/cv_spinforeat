import { createGlobalStyle } from "styled-components";

export const lightTheme = {
    leftBody: '#d2d2d2',
    leftFontColor: '#2c394b',
    rightBody: '#2c394b',
    rightFontColor: '#d2d2d2',
    rightBackgroundTitle: '#334756'
};

export const darkTheme = {
    leftBody: '#2c394b',
    leftFontColor: '#d2d2d2',
    rightBody: '#d2d2d2',
    rightFontColor: '#2c394b',
    rightBackgroundTitle: '#334756'
};

export const GlobalStyles = createGlobalStyle`
    //Set Up of the left space first
    .leftSpace {
        background-color: ${props => props.theme.leftBody};
        color: ${props => props.theme.leftFontColor};
        transition: background-color 0.25s ease-in-out;
    }

    .leftSpace__divOne {
        border-bottom: 0.1em solid ${props => props.theme.leftFontColor};
        transition: color 0.25s ease-in-out;        
    }

    .leftSpace__divTwo {
        border-bottom: 0.1em solid ${props => props.theme.leftFontColor};
        transition: color 0.25s ease-in-out;        
    }

    .leftSpace__divThree {
        border-bottom: 0.1em solid ${props => props.theme.leftFontColor};
        transition: color 0.25s ease-in-out;        
    }
    
    //Set up of the right space
    .main {
        background-color: ${props => props.theme.rightBody};
        transition: background-color 0.25s ease-in-out;        
    }
    
    .divOne {
        color: ${props => props.theme.rightFontColor};
        transition: color 0.25s ease-in-out;
    }

    .divOne__title--little, .divOne__title--date, .divOne__title--resume {
        color: ${props => props.theme.rightFontColor};
        transition: color 0.25s ease-in-out;
    }

    .divOne__title {
        background-color: ${props => props.theme.rightBody};
        color: ${props => props.theme.rightFontColor};
        border-bottom: 0.1em solid ${props => props.theme.rightFontColor};
        transition: color 0.25s ease-in-out;
    }

    .divTwo {
        color: ${props => props.theme.rightFontColor};
        transition: color 0.25s ease-in-out;
    }

    .divTwo__title--little, .divTwo__title--date, .divTwo__title--resume {
        color: ${props => props.theme.rightFontColor};
        transition: color 0.25s ease-in-out;
    }

    .divTwo__title {
        background-color: ${props => props.theme.rightBody};
        color: ${props => props.theme.rightFontColor};
        border-bottom: 0.1em solid ${props => props.theme.rightFontColor};
        transition: color 0.25s ease-in-out;
    }

`;