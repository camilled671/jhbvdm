while (true) {
    console.log("light level:" + ("" + input.lightLevel()))
    if (input.lightLevel() >= 6) {
        light.setAll(light.rgb(128, 0, 128))
    } else if (input.lightLevel() < 5) {
        light.setAll(light.rgb(0, 255, 255))
    }
    
}
