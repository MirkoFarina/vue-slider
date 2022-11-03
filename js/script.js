const {createApp} = Vue;

createApp({
  data(){
    return {
      postiDaVisitare: [
        {
          nome: "Italia",
          descrizione: "L’Italia è l’unico Paese al mondo dove è nata prima la cultura e poi la nazione, non esiste nessun altro luogo al mondo.",
          urlImg: 'amalfi.jpg'
        },
        {
          nome: "Olanda",
          descrizione: "I fiori più belli sbocciano sul bordo degli abissi.",
          urlImg: 'amsterdam.webp'
        },
        {
          nome: "Brasile",
          descrizione: "Molti luoghi sanno raccontare con le immagini. Pochi sanno farlo anche con il ritmo e la musica.",
          urlImg: 'brasile.jpg'
        },
        {
          nome: "Inghilterra",
          descrizione: "Le nove parole più terrificanti nella linguainglese sono: Io sono del governo e sono qui per aiutarla.",
          urlImg: 'london.jpg'
        },
        {
          nome: "Spagna",
          descrizione: "Francisco Franco ha lasciato in eredità l'ordine. In Spagna funziona tutto e funziona bene, ci sono educazione, pulizia, rispetto e poca burocrazia.",
          urlImg: 'spagna.jpg'
        }
      ],
      counterImg: 0,
      autoPlay: '',
      isStop: true
    }
  },
  methods: {
    nextPrev(isNext){
      isNext ? this.counterImg++ : this.counterImg--;
      if(this.counterImg === this.postiDaVisitare.length) this.counterImg = 0;

      if(this.counterImg < 0) this.counterImg = this.postiDaVisitare.length - 1;
    },
    autoScroll(){
      this.autoPlay = setInterval(() => {
        this.nextPrev(true);
        return true;
      }, 3000);
    },
    stopAutoScroll(){
      clearInterval(this.autoPlay);
    },
    checkIsStopped(){
      this.isStop ? this.isStop = !this.isStop : this.isStop = !this.isStop;
    }
  },
  mounted(){
    this.autoScroll();
  }
}).mount('#app')