function Soru(soruMetni, cevapSecenekleri, dogruCevap) {
    this.soruMetni = soruMetni;
    this.cevapSecenekleri = cevapSecenekleri;
    this.dogruCevap = dogruCevap;
}

Soru.prototype.cevabiKontrolEt = function(cevap) {
    return cevap === this.dogruCevap
}

let sorular = [
    new Soru("1-This is the name of Irelia's Passive Ability", { a: "Bladesurge", b: "Defiant Dance", c: "Ionian Fervor" , d: "Focused Resolve" }, "c"),
    new Soru("2-This is the name of Evelynn's Q Ability", { a: "Whiplash", b: "Hate Spike", c: "Demon Shade", d: "Rupture" }, "b"),
    new Soru("3-This is the name of Anivia's W Ability", { a: "Crystallize", b: "Winter's Wrath", c: "Ring of Frost", d: "Frostbite" }, "a"),
    new Soru("4-This is the name of Vayne's E Ability", { a: "Silver Bolts", b: "Piercing Arrow", c: "Condemn", d: "Heroic Bolt" }, "c"),
    new Soru("5-This is the name of Trundle's R Ability", { a: "Fury of the North", b: "Subjugate", c: "Troll Time", d: "Sadism" }, "b"),
    new Soru("6-How are Cassiopeia and Katarina related?", { a: "Business Partners", b: "Cousins", c: "Lovers", d: "Sisters" }, "d"),
    new Soru("7-Who is not an Ascended?", { a: "Azir", b: "Amumu", c: "Xerath", d: "Renekton" }, "b"),
    new Soru("8-Who was not born in the Void?", { a: "Rek'Sai", b: "Kog'Maw", c: "Cho'Gath", d: "Kai'Sa" }, "d"),
    new Soru("9-What is not something Rammus says?", { a: "Hah", b: "Right", c: "Yeh", d: "Ok" }, "a"),
    new Soru("10-Who is most trash hero?", { a: "Aphelios", b: "Kayn", c: "Rammus", d: "Yasuo" }, "d"),
];