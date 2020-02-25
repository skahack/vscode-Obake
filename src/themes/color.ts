import * as convert from 'color-convert'
const hsl = convert.hsl.hex

const hue = 210
const saturation = 13 // %
const brightness = 18 // %

// Monochrome -----------------------------------
const mono0 = hsl(hue, 10, 85);
const mono1 = hsl(hue, 14, 71); // default text
const mono2 = hsl(hue,  9, 55);
const mono3 = hsl(hue, 10, 40);

const cyan =    hsl(187, 47, 55);
const blue =    hsl(200, 50, 55);
const purple =  hsl(286, 40, 67);
const green =   hsl(110, 40, 55);
const orange1 = hsl(29, 60, 60);
const orange2 = hsl(39, 67, 69);

const red1 = hsl(355, 65, 65);
const red2 = hsl(  5, 48, 51);

// Base colors -----------------------------------
const fg =     mono1;
const bg =     hsl(hue, saturation, brightness);
const accent = hsl(hue, 100, 66);
// const gutter = darken(fg, 26);
// const guide =  fade(fg, 15);

export default {
  classic: {
    bg: `#${bg}`,
    fg: `#${fg}`,

    mono0: `#${mono0}`,
    mono1: `#${mono1}`,
    mono2: `#${mono2}`,
    mono3: `#${mono3}`,

    cyan: `#${cyan}`,
    blue: `#${blue}`,
    purple: `#${purple}`,
    green: `#${green}`,
    orange1: `#${orange1}`,
    orange2: `#${orange2}`,
    red1: `#${red1}`,
    red2: `#${red2}`,

    // chalky: '#e5c07b',
    // coral: '#e06c75',
    // dark: '#5c6370',
    // error: '#f44747',
    // fountainBlue: '#56b6c2',
    // green: '#98c379',
    // invalid: '#ffffff',
    // lightDark: '#7f848e',
    // lightWhite: '#abb2bf',
    // malibu: '#61afef',
    // purple: '#c678dd',
    // whiskey: '#d19a66'
  },
}
