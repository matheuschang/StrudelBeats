setcpm(140/4)

kick : sound("ace_bd").struct("x x x x").decay(0.6).room(.1)

snare : sound("ace_sd").struct("- x - x").gain(0.5)

tweet : sound("gm_bird_tweet").struct(" x - - - ").striate(4).gain(0.8)
.attack(0.1)
.decay(0.1)
.sustain(0.1)
.release(0.1)
.hpf(2500)
.room(0.4)


h1 : sound("gm_lead_4_chiff").struct("x x*2 x*4 x").striate(1)
.attack(0)
.decay(0.5)
.sustain(0.5)
.release(0.1)
.hpf(1100)


// bass : note("<f1 f2>*4 <f1 f2>*8").sound("sawtooth").transpose("<0 3 <5 5 7> 0 >")
// .attack(0)
// .decay(0.6)
// .sustain(0.1)
// .release(0.1)
// .lpf(500)
// .postgain(0.8)


// lead: note("[0 3 0 7]").scale("f:major").sound("gm_fx_echoes").striate(1).transpose("<0 0 2 1>")
// .attack(0.1)
// .decay(0.4)
// .sustain(0.2)
// .release(0.1)
