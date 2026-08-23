const cc = await midin('TD-Strudel')



kick : s("bd")
       .bank("rolandtr909")
       .struct("x x x x")
       .postgain(1)

hh: s("hh")
       .bank("rolandtr909")
       .struct("- x - x")
       .postgain(0.4)
       .room(0.2)

// melody2: note("<c a f e>")
//        .sound("sawtooth")
//        .struct("x - - -")
//        .stretch(0.07)
//        .gain(0.7) // volume
//        .lpf(1500)
//        .hurry(4)
//        .transpose(0)

melody: note("<c a f e>")
       .sound("sawtooth")
       .struct("x - x -")
       .stretch(0.07)
       .gain(0.7) // volume
       .lpf(tri.range(1500, 6500).slow(2))
       .hurry(4)



bass: note("<c d g f>")
       .sound("supersaw")
       .struct("<[x@4] [x@4 ] [x@4 ]>")
       .gain(0.5)
       .lpf(2000)
       .distort(0.1)



// all(x => x.room(mouseX.segment(4).range(0,2)))
