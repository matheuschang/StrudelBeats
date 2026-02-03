setcpm(140/4)
 
drill : note("c3").struct("x*3 - x*2 -").sound("supersaw").lpf(700).trans("<0 -12  0>")
triangle: note("<0 4 0 9 7>*16").sound("supersaw").gain(1).lpf(800)
rectangle : sound("gm_fx_rain").struct("- - x x ").attack(.5).sustain(.05).release(.1).decay(2).striate(1).lpf(200).postgain(4)
rectangle2 : sound("gm_fx_rain").struct("- - x x ").attack(.5).sustain(.05).release(.1).decay(2).striate(1).lpf(200).postgain(4).rev()
square : sound("emudrumulator_sd").struct(" x x <x x x> x".fast(1.2)).decay(0.1).gain(.1).hpf(1000)
ball : sound("tr808_bd").struct("x x x x".fast(1.4)).gain(2)
// ball : sound("tr808_bd").struct("x".fast(1.4)).gain(2)


all(x => x.room(mouseX.segment(4).range(0,2)).hpf(mouseX.segment(3).range(0,1000)))
