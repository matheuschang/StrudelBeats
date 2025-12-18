arps : note(irand(8)).struct("x*16")
  .scale("<f3:minor:pentatonic>")
  .s("[sin]")
  .cut(2)
  .room(1)
  .ribbon(521,8)
  // .ply(2)
  .lpf(2400)
  .postgain(0.4)
  ._punchcard()

melody : note(irand(8)).struct("x*2")
  .scale("<g3:minor:pentatonic>")
  .s("z_triangle")
  .ribbon(20,4)
  .decay(1)
  .room(1)
  .gain(0.6)
  .hpf(1000)
  .punchcard()



kick : s("bd").bank("rolandtr808").struct("x x x <x x*2>").gain(3)

claps : s("cp").bank("rolandtr808").struct("- x".fast(2)).gain(0.4)

hhc : s("hh").bank("rolandtr808").struct("x*[8|8|8]").gain(0.5)


all(x => x.room(mouseX.segment(4).range(0,2)).hpf(mouseX.segment(3).range(0,1000)))
