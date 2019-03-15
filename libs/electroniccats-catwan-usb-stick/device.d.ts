declare namespace pins {
    //% fixedInstance shim=pxt::getPin(PIN_LED)
    const LED: PwmOnlyPin;

    //% fixedInstance shim=pxt::getPin(PIN_D0)
    const D0: PwmPin;
    //% fixedInstance shim=pxt::getPin(PIN_D1)
    const D1: PwmPin;
    //% fixedInstance shim=pxt::getPin(PIN_D2)
    const D2: DigitalInOutPin;
    //% fixedInstance shim=pxt::getPin(PIN_D3)
    const D3: PwmPin;
    //% fixedInstance shim=pxt::getPin(PIN_D4)
    const D4: PwmPin;
    //% fixedInstance shim=pxt::getPin(PIN_D5)
    const D5: DigitalInOutPin;
    //% fixedInstance shim=pxt::getPin(PIN_D6)
    const D6: DigitalInOutPin;
    //% fixedInstance shim=pxt::getPin(PIN_D7)
    const D7: DigitalInOutPin;
    //% fixedInstance shim=pxt::getPin(PIN_D13)
    const D13: DigitalInOutPin;
    //% fixedInstance shim=pxt::getPin(PIN_MISO)
    const MISO: DigitalInOutPin;
    //% fixedInstance shim=pxt::getPin(PIN_MOSI)
    const MOSI: DigitalInOutPin;
    //% fixedInstance shim=pxt::getPin(PIN_SCK)
    const SCK: DigitalInOutPin;
}