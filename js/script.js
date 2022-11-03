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
          descrizione: "Molti luoghi sanno raccontare con le immagini. <br> Pochi sanno farlo anche con il ritmo e la musica.",
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
      ]
    }
  }
}).mount('#app')