namespace config {
    
    // https://github.com/ElectronicCats/escornabot/blob/master/Makech/hardware/KiCad%20files/Makech.pdf

    // LEDS's
    export const PIN_A0 = DAL.PA02;
    export const PIN_A1 = DAL.PA04;
    export const PIN_A2 = DAL.PA05;
    export const PIN_A3 = DAL.PA10;
    export const PIN_A4 = DAL.PA03; // Buttons

    export const PIN_D0 = DAL.PA00;
    export const PIN_D1 = DAL.PA01;
    export const PIN_D2 = DAL.PA22;
    export const PIN_D3 = DAL.PA11;
    export const PIN_D4 = DAL.PA27;
    export const PIN_D5 = DAL.PA28;
    export const PIN_D6 = DAL.PA06;
    export const PIN_D7 = DAL.PA07;
    export const PIN_D8 = DAL.PA18;
    export const PIN_D9 = DAL.PA17;
    export const PIN_D10 = DAL.PA16; // Buzzer
    export const PIN_D11 = DAL.PA08;
    export const PIN_D12 = DAL.PA09;
    export const PIN_D13 = DAL.PA13;
    export const PIN_LED = DAL.PA02;
    
    export const PIN_SCL = DAL.PA09;
    export const PIN_SDA = DAL.PA08;
    export const PIN_RX = DAL.PA01;
    export const PIN_TX = DAL.PA00;
    
    // Module WIFININA ESP32 
    export const PIN_MISO = DAL.PA13; 
    export const PIN_MOSI = DAL.PA14;
    export const PIN_SCK = DAL.PA15;
    
    // JACDAC
    export const PIN_JACK_TX = DAL.PA00; // JACDAC
}