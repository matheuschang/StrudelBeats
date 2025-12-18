
setCps(130/60/4)



kick : s("bd").bank("kr55").postgain(3).struct("x*4")
clap: s("cp").room(0).bank("rolandtr808").clip(0.25).lpf(2000).struct("- x").fast(2)
  ._punchcard()
// // 



arps : note(irand(8)).struct("x*16")
  .scale("<f3:major:pentatonic>")
  .s("[sin,triangle]")
  .room(1)
  .ribbon(888,2)
  // .ply(2)
  .postgain(0.6)
  ._punchcard()


wn : s("whitenoise").struct("<x ~ ~ ~ ~ ~ ~ ~>")
._punchcard()

chops: s("vi")
// .slice(16, "[1|2|3|4|6|6|1|1]").clip(1).room(1)
// .slice(16, "<6 6 6 6 6 6 6 6>").clip(1).room(1)
// .ply(" <1 2 2 2 4 4 8 16>")
  .slice(16, "<3 3 3 3 3 3 3 3>").clip(0.9).room(1)
  .sometimes(x=>x.lpf("[2000|4000]")).postgain(0.7)
  ._punchcard({width:1200, height: 200})


all(x => x.room(mouseX.segment(4).range(0,2)).hpf(mouseX.segment(3).range(0,1000)))
// all(x => x.cut(2)
