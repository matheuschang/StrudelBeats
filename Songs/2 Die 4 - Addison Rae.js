_melody: note("d4@2.5 c4@1.5 f3@2 ~@3".slow(1.2)).sound("gm_celesta").room(1.5)

_melody: note("a3@2.5 c4@1.5 g3@2 ~@3".slow(1.2)).sound("gm_celesta").room(1.5)

_claps : s("mpc1000_cp").struct("~@2.5 x@1 ~@3.5 x@0.5".slow(1.2))

claps : s("mpc1000_cp").struct("~ x ~ x".slow(1.2)).postgain(0.6)

kick : s("compurhythm8000_bd").struct("x ~ x ~".slow(1.2)).postgain(0.8)


// hh : s("bossdr55_hh").struct("x!8".slow(1.2)).postgain(0.3)
