while True:
    print("light level:" + str(input.light_level()))
    if input.light_level() >=8:
        light.set_all(light.rgb(128,0,128))
    else:
        if input.light_level() =<7:
            light.set_all(light.rgb(0, 255, 255))
