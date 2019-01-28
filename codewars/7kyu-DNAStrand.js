// DNAStrand ("ATTGC") # return "TAACG"
// DNAStrand ("GTAT") # return "CATA"

function DNAStrand(dna){

  let letters = dna.split("");

  let compDNA = letters.reduce( (strand, letter) => {
    switch(letter) {
      case "A":
        strand += "T";
        break;
      case "T":
        strand += "A";
        break;
      case "C":
        strand += "G";
        break;
      case "G":
        strand += "C";
        break;
    }
    return strand;
  }, "");

  return compDNA;
}
