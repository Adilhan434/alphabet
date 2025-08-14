import {
  audioAlifBa,
  audioAyn,
  audioDad,
  audioDal,
  audioDha2,
  audioDhal,
  audioFa,
  audioGhayn,
  audioHa,
  audioHa2,
  audioJim,
  audioKaf,
  audioKha,
  audioLam,
  audioMim,
  audioNun,
  audioQaf,
  audioRa,
  audioSad,
  audioShin,
  audioSin,
  audioTa,
  audioTa2,
  audioTha,
  audioWaw,
  audioYa,
  audioZay,
} from "./audioAssets";

import { videoAssets } from "./videoAssets";

export const lessons = {
  /* 1: объединённый урок alif + ba */
  "alifBa": [
    "ا ب",
    { video: videoAssets.alifBa },
    { text: "أَ", audio: audioAlifBa[1], explain: "ا фатха менен (а үндүүсү)" },
    { text: "إِ", audio: audioAlifBa[2], explain: "ا касра менен (и үндүүсү)" },
    { text: "أُ", audio: audioAlifBa[3], explain: "ا дамма менен (у үндүүсү)" },
    { text: "بَ", audio: audioAlifBa[1] },
    { text: "بِ", audio: audioAlifBa[2] },
    { text: "بُ", audio: audioAlifBa[3] },
    { text: "بَبَ", audio: audioAlifBa[4] },
    { text: "بِبِ", audio: audioAlifBa[5] },
    { text: "بُبُ", audio: audioAlifBa[6] },
    { text: "بَبِ", audio: audioAlifBa[7] },
    { text: "بِبَ", audio: audioAlifBa[8] },
    { text: "بَبُ", audio: audioAlifBa[9] },
    { text: "أَبَ", audio: audioAlifBa[10] },
    { text: "أَبِ", audio: audioAlifBa[11] },
    { text: "أَبِ", audio: audioAlifBa[12] },
    { text: "أَبِ", audio: audioAlifBa[13] },
    { text: "أَبِ", audio: audioAlifBa[14] },
  ],

  /* 2: ta — разрешены: ا(с хамзой только в начале), ب, ت */
  ta: [
    "ت",
    { video: videoAssets.ta },
    { text: "تَ", audio: audioTa[1], explain: "ت фатха менен (а үндүүсү)" },
    { text: "تِ", audio: audioTa[2], explain: "ت касра менен (и үндүүсү)" },
    { text: "تُ", audio: audioTa[3], explain: "ت дамма менен (у үндүүсү)" },
    { text: "بَتَ", audio: audioTa[4] },
    { text: "تَبَ", audio: audioTa[5] },
    { text: "تَتَ", audio: audioTa[6] },
    { text: "بَبَ", audio: audioTa[7] },
    { text: "تِبِ", audio: audioTa[8] },
    { text: "بُتُ", audio: audioTa[9] },
    { text: "تَبِ", audio: audioTa[10] },
    { text: "بَتُ", audio: audioTa[11] },
    { text: "أَتَ", audio: audioTa[12] },   // алиф с хамзой в начале
    { text: "أَبَتَ", audio: audioTa[13] },
    { text: "تَتِ", audio: audioTa[14] }
  ],

  /* 3: tha — разрешены: ا(хамза начало), ب, ت, ث */
  tha: [
    "ث",
    { video: videoAssets.tha },
    { text: "ثَ", audio: audioTha[1], explain: "ث фатха менен (а үндүүсү)" },
    { text: "ثِ", audio: audioTha[2], explain: "ث касра менен (и үндүүсү)" },
    { text: "ثُ", audio: audioTha[3], explain: "ث дамма менен (у үндүүсү)" },
    { text: "ثَبَ", audio: audioTha[4] },
    { text: "بَثَ", audio: audioTha[5] },
    { text: "ثَتَ", audio: audioTha[6] },
    { text: "تَثَ", audio: audioTha[7] },
    { text: "ثَبَتَ", audio: audioTha[8] },
    { text: "بَبَ", audio: audioTha[9] },
    { text: "ثِبِ", audio: audioTha[10] },
    { text: "ثُتُ", audio: audioTha[11] },
    { text: "تَثِ", audio: audioTha[12] },
    { text: "أَثَ", audio: audioTha[13] },  // алиф(хамза) в начале
    { text: "أَبَثَ", audio: audioTha[14] }
  ],

  /* 4: jim — до ج (alif только как первый с хамзой) */
  jim: [
    "ج",
    { video: videoAssets.jim },
    { text: "جَ", audio: audioJim[1], explain: "ج фатха менен (а үндүүсү)" },
    { text: "جِ", audio: audioJim[2], explain: "ج касра менен (и үндүүсү)" },
    { text: "جُ", audio: audioJim[3], explain: "ج дамма менен (у үндүүсү)" },
    { text: "بَجَ", audio: audioJim[4] },
    { text: "جَبَ", audio: audioJim[5] },
    { text: "تَجَ", audio: audioJim[6] },
    { text: "جَتَ", audio: audioJim[7] },
    { text: "ثَجَ", audio: audioJim[8] },
    { text: "جَثَ", audio: audioJim[9] },
    { text: "جَبَتَ", audio: audioJim[10] },
    { text: "بَبَ", audio: audioJim[11] },
    { text: "جِجِ", audio: audioJim[12] },
    { text: "أَجَ", audio: audioJim[13] },
    { text: "أَبَجَ", audio: audioJim[14] }
  ],

  /* 5: ha (ح) */
  ha: [
    "ح",
    { video: videoAssets.ha },
    { text: "حَ", audio: audioHa[1], explain: "ح фатха менен (а үндүүсү)" },
    { text: "حِ", audio: audioHa[2], explain: "ح касра менен (и үндүүсү)" },
    { text: "حُ", audio: audioHa[3], explain: "ح дамма менен (у үндүүсү)" },
    { text: "بَحَ", audio: audioHa[4] },
    { text: "حَبَ", audio: audioHa[5] },
    { text: "تَحَ", audio: audioHa[6] },
    { text: "حَتَ", audio: audioHa[7] },
    { text: "ثَحَ", audio: audioHa[8] },
    { text: "حَثَ", audio: audioHa[9] },
    { text: "جَحَ", audio: audioHa[10] },
    { text: "حَجَ", audio: audioHa[11] },
    { text: "بَحِ", audio: audioHa[12] },
    { text: "حِبَ", audio: audioHa[13] },
    { text: "حُبِ", audio: audioHa[14] }
  ],

  /* 6: kha (خ) */
  kha: [
    "خ",
    { video: videoAssets.kha },
    { text: "خَ", audio: audioKha[1], explain: "خ фатха менен (а үндүүсү)" },
    { text: "خِ", audio: audioKha[2], explain: "خ касра менен (и үндүүсү)" },
    { text: "خُ", audio: audioKha[3], explain: "خ дамма менен (у үндүүсү)" },
    { text: "بَخَ", audio: audioKha[4] },
    { text: "خَبَ", audio: audioKha[5] },
    { text: "تَخَ", audio: audioKha[6] },
    { text: "خَتَ", audio: audioKha[7] },
    { text: "ثَخَ", audio: audioKha[8] },
    { text: "خَثَ", audio: audioKha[9] },
    { text: "جَخَ", audio: audioKha[10] },
    { text: "خَجَ", audio: audioKha[11] },
    { text: "حَخَ", audio: audioKha[12] },
    { text: "خِخِ", audio: audioKha[13] },
    { text: "خُخُ", audio: audioKha[14] }
  ],

  /* 7: dal (د) */
  dal: [
    "د",
    { video: videoAssets.dal },
    { text: "دَ", audio: audioDal[1], explain: "د фатха менен (а үндүүсү)" },
    { text: "دِ", audio: audioDal[2], explain: "د касра менен (и үндүүсү)" },
    { text: "دُ", audio: audioDal[3], explain: "د дамма менен (у үндүүсү)" },
    { text: "دَرَ", audio: audioDal[4] },
    { text: "مَدَ", audio: audioDal[5] },
    { text: "يَدَ", audio: audioDal[6] },
    { text: "دَفَ", audio: audioDal[7] },
    { text: "دَخَ", audio: audioDal[8] },
    { text: "دَجَ", audio: audioDal[9] },
    { text: "دَفِ", audio: audioDal[10] },
    { text: "دِرِ", audio: audioDal[11] },
    { text: "دُبُ", audio: audioDal[12] },
    { text: "بَدَ", audio: audioDal[13] },
    { text: "دَبِ", audio: audioDal[14] }
  ],

  /* 8: dhal (ذ) */
  dhal: [
    "ذ",
    { video: videoAssets.dhal },
    { text: "ذَ", audio: audioDhal[1], explain: "ذ фатха менен (а үндүүсү)" },
    { text: "ذِ", audio: audioDhal[2], explain: "ذ касра менен (и үндүүсү)" },
    { text: "ذُ", audio: audioDhal[3], explain: "ذ дамма менен (у үндүүсү)" },
    { text: "ذَهَ", audio: audioDhal[4] },
    { text: "مَذَ", audio: audioDhal[5] },
    { text: "يَذَ", audio: audioDhal[6] },
    { text: "ذِكِ", audio: audioDhal[7] },
    { text: "ذَكِ", audio: audioDhal[8] },
    { text: "ذَتَ", audio: audioDhal[9] },
    { text: "ذِرِ", audio: audioDhal[10] },
    { text: "ذِكْ", audio: audioDhal[11] },
    { text: "ذُرُ", audio: audioDhal[12] },
    { text: "بَذَ", audio: audioDhal[13] },
    { text: "ذَبِ", audio: audioDhal[14] }
  ],

  /* 9: ra (ر) */
  ra: [
    "ر",
    { video: videoAssets.ra },
    { text: "رَ", audio: audioRa[1], explain: "ر фатха менен (а үндүүсү)" },
    { text: "رِ", audio: audioRa[2], explain: "ر касра менен (и үндүүсү)" },
    { text: "رُ", audio: audioRa[3], explain: "ر дамма менен (у үндүүсү)" },
    { text: "رَسَ", audio: audioRa[4] },
    { text: "مَرَ", audio: audioRa[5] },
    { text: "يَرَ", audio: audioRa[6] },
    { text: "رَجَ", audio: audioRa[7] },
    { text: "رَحَ", audio: audioRa[8] },
    { text: "رَاكَ", audio: audioRa[9] },
    { text: "رِكَ", audio: audioRa[10] },
    { text: "رُكُ", audio: audioRa[11] },
    { text: "بَرَ", audio: audioRa[12] },
    { text: "رَبِ", audio: audioRa[13] },
    { text: "رِبَ", audio: audioRa[14] }
  ],

  /* 10: zay (ز) */
  zay: [
    "ز",
    { video: videoAssets.zay },
    { text: "زَ", audio: audioZay[1], explain: "ز фатха менен (а үндүүсү)" },
    { text: "زِ", audio: audioZay[2], explain: "ز касра менен (и үндүүсү)" },
    { text: "زُ", audio: audioZay[3], explain: "ز дамма менен (у үндүүсү)" },
    { text: "زَهَ", audio: audioZay[4] },
    { text: "مَزَ", audio: audioZay[5] },
    { text: "يَزَ", audio: audioZay[6] },
    { text: "زِبِ", audio: audioZay[7] },
    { text: "زَارَ", audio: audioZay[8] },
    { text: "زَاهِ", audio: audioZay[9] },
    { text: "زَاهُ", audio: audioZay[10] },
    { text: "بَزَ", audio: audioZay[11] },
    { text: "زَزَ", audio: audioZay[12] },
    { text: "زِزِ", audio: audioZay[13] },
    { text: "زُزُ", audio: audioZay[14] }
  ],

  /* 11: sin (س) */
  sin: [
    "س",
    { video: videoAssets.sin },
    { text: "سَ", audio: audioSin[1], explain: "س фатха менен (а үндүүсү)" },
    { text: "سِ", audio: audioSin[2], explain: "س касра менен (и үндүүсү)" },
    { text: "سُ", audio: audioSin[3], explain: "س дамма менен (у үндүүсү)" },
    { text: "سَبَ", audio: audioSin[4] },
    { text: "مَسَ", audio: audioSin[5] },
    { text: "تَسَ", audio: audioSin[6] },
    { text: "سَاعَ", audio: audioSin[7] },
    { text: "سَفَ", audio: audioSin[8] },
    { text: "سَاكَ", audio: audioSin[9] },
    { text: "سَاكِ", audio: audioSin[10] },
    { text: "بَسَ", audio: audioSin[11] },
    { text: "سِسِ", audio: audioSin[12] },
    { text: "سُسُ", audio: audioSin[13] },
    { text: "سَسَ", audio: audioSin[14] }
  ],

  /* 12: shin (ش) */
  shin: [
    "ش",
    { video: videoAssets.shin },
    { text: "شَ", audio: audioShin[1], explain: "ش фатха менен (а үндүүсү)" },
    { text: "شِ", audio: audioShin[2], explain: "ش касра менен (и үндүүсү)" },
    { text: "شُ", audio: audioShin[3], explain: "ش дамма менен (у үндүүсү)" },
    { text: "شَجَ", audio: audioShin[4] },
    { text: "مَشَ", audio: audioShin[5] },
    { text: "تَشَ", audio: audioShin[6] },
    { text: "شَاكَ", audio: audioShin[7] },
    { text: "شَاكِ", audio: audioShin[8] },
    { text: "شَاكُ", audio: audioShin[9] },
    { text: "بَشَ", audio: audioShin[10] },
    { text: "شِشِ", audio: audioShin[11] },
    { text: "شُشُ", audio: audioShin[12] },
    { text: "شَشَ", audio: audioShin[13] },
    { text: "بِشَ", audio: audioShin[14] }
  ],

  /* 13: sad (ص) */
  sad: [
    "ص",
    { video: videoAssets.sad },
    { text: "صَ", audio: audioSad[1], explain: "ص фатха менен (а үндүүсү)" },
    { text: "صِ", audio: audioSad[2], explain: "ص касра менен (и үндүүсү)" },
    { text: "صُ", audio: audioSad[3], explain: "ص дамма менен (у үндүүсү)" },
    { text: "صَبَ", audio: audioSad[4] },
    { text: "مِصَ", audio: audioSad[5] },
    { text: "يَصَ", audio: audioSad[6] },
    { text: "صَاحَ", audio: audioSad[7] },
    { text: "صَادَ", audio: audioSad[8] },
    { text: "صَادِ", audio: audioSad[9] },
    { text: "بَصَ", audio: audioSad[10] },
    { text: "صِصِ", audio: audioSad[11] },
    { text: "صُصُ", audio: audioSad[12] },
    { text: "صَصَ", audio: audioSad[13] },
    { text: "صَبِ", audio: audioSad[14] }
  ],

  /* 14: dad (ض) */
  dad: [
    "ض",
    { video: videoAssets.dad },
    { text: "ضَ", audio: audioDad[1], explain: "ض фатха менен (а үндүүсү)" },
    { text: "ضِ", audio: audioDad[2], explain: "ض касра менен (и үндүүсү)" },
    { text: "ضُ", audio: audioDad[3], explain: "ض дамма менен (у үндүүсү)" },
    { text: "ضَرَ", audio: audioDad[4] },
    { text: "مِضَ", audio: audioDad[5] },
    { text: "يَضَ", audio: audioDad[6] },
    { text: "ضَابَ", audio: audioDad[7] },
    { text: "ضَارَ", audio: audioDad[8] },
    { text: "بَضَ", audio: audioDad[9] },
    { text: "ضِضِ", audio: audioDad[10] },
    { text: "ضُضُ", audio: audioDad[11] },
    { text: "ضَضَ", audio: audioDad[12] },
    { text: "ضَبِ", audio: audioDad[13] },
    { text: "بِضَ", audio: audioDad[14] }
  ],

  /* 15: ta2 (ط) */
  ta2: [
    "ط",
    { video: videoAssets.ta2 },
    { text: "طَ", audio: audioTa2[1], explain: "ط фатха менен (а үндүүсү)" },
    { text: "طِ", audio: audioTa2[2], explain: "ط касра менен (и үндүүсү)" },
    { text: "طُ", audio: audioTa2[3], explain: "ط дамма менен (у үндүүсү)" },
    { text: "طَارَ", audio: audioTa2[4] },
    { text: "مَطَ", audio: audioTa2[5] },
    { text: "يَطَ", audio: audioTa2[6] },
    { text: "طَابَ", audio: audioTa2[7] },
    { text: "طَارِ", audio: audioTa2[8] },
    { text: "طِطِ", audio: audioTa2[9] },
    { text: "طُطُ", audio: audioTa2[10] },
    { text: "بَطَ", audio: audioTa2[11] },
    { text: "طَبِ", audio: audioTa2[12] },
    { text: "أَطَ", audio: audioTa2[13] },
    { text: "أَبَطَ", audio: audioTa2[14] }
  ],

  /* 16: dha2 (ظ) */
  dha2: [
    "ظ",
    { video: videoAssets.dha2 },
    { text: "ظَ", audio: audioDha2[1], explain: "ظ фатха менен (а үндүүсү)" },
    { text: "ظِ", audio: audioDha2[2], explain: "ظ касра менен (и үндүүсү)" },
    { text: "ظُ", audio: audioDha2[3], explain: "ظ дамма менен (у үндүүсү)" },
    { text: "ظَهَ", audio: audioDha2[4] },
    { text: "مَظَ", audio: audioDha2[5] },
    { text: "يَظَ", audio: audioDha2[6] },
    { text: "ظَاهَ", audio: audioDha2[7] },
    { text: "ظَاهِ", audio: audioDha2[8] },
    { text: "بَظَ", audio: audioDha2[9] },
    { text: "ظِظِ", audio: audioDha2[10] },
    { text: "ظُظُ", audio: audioDha2[11] },
    { text: "ظَظَ", audio: audioDha2[12] },
    { text: "ظَبِ", audio: audioDha2[13] },
    { text: "أَظَ", audio: audioDha2[14] }
  ],

  /* 17: ayn (ع) */
  ayn: [
    "ع",
    { video: videoAssets.ayn },
    { text: "عَ", audio: audioAyn[1], explain: "ع фатха менен (а үндүүсү)" },
    { text: "عِ", audio: audioAyn[2], explain: "ع касра менен (и үндүүсү)" },
    { text: "عُ", audio: audioAyn[3], explain: "ع дамма менен (у үндүүсү)" },
    { text: "عَلَ", audio: audioAyn[4] },
    { text: "مَعَ", audio: audioAyn[5] },
    { text: "يَعَ", audio: audioAyn[6] },
    { text: "عَزَ", audio: audioAyn[7] },
    { text: "عَابَ", audio: audioAyn[8] },
    { text: "عِعِ", audio: audioAyn[9] },
    { text: "عُعُ", audio: audioAyn[10] },
    { text: "بَعَ", audio: audioAyn[11] },
    { text: "عَبِ", audio: audioAyn[12] },
    { text: "عِبَ", audio: audioAyn[13] },
    { text: "أَعَ", audio: audioAyn[14] }
  ],

  /* 18: ghayn (غ) */
  ghayn: [
    "غ",
    { video: videoAssets.ghayn },
    { text: "غَ", audio: audioGhayn[1], explain: "غ фатха менен (а үндүүсү)" },
    { text: "غِ", audio: audioGhayn[2], explain: "غ касра менен (и үндүүсү)" },
    { text: "غُ", audio: audioGhayn[3], explain: "غ дамма менен (у үндүүсү)" },
    { text: "غَرَ", audio: audioGhayn[4] },
    { text: "مَغَ", audio: audioGhayn[5] },
    { text: "يَغَ", audio: audioGhayn[6] },
    { text: "غَابَ", audio: audioGhayn[7] },
    { text: "غَارَ", audio: audioGhayn[8] },
    { text: "بَغَ", audio: audioGhayn[9] },
    { text: "غِغِ", audio: audioGhayn[10] },
    { text: "غُغُ", audio: audioGhayn[11] },
    { text: "غَغَ", audio: audioGhayn[12] },
    { text: "غَبِ", audio: audioGhayn[13] },
    { text: "أَغَ", audio: audioGhayn[14] }
  ],

  /* 19: fa (ف) */
  fa: [
    "ف",
    { video: videoAssets.fa },
    { text: "فَ", audio: audioFa[1], explain: "ف фатха менен (а үндүүсү)" },
    { text: "فِ", audio: audioFa[2], explain: "ف касра менен (и үндүүсү)" },
    { text: "فُ", audio: audioFa[3], explain: "ف дамма менен (у үндүүсү)" },
    { text: "فَهَ", audio: audioFa[4] },
    { text: "مِفَ", audio: audioFa[5] },
    { text: "يَفَ", audio: audioFa[6] },
    { text: "فَارَ", audio: audioFa[7] },
    { text: "فَارِ", audio: audioFa[8] },
    { text: "بَفَ", audio: audioFa[9] },
    { text: "فِفِ", audio: audioFa[10] },
    { text: "فُفُ", audio: audioFa[11] },
    { text: "فَفَ", audio: audioFa[12] },
    { text: "فَبِ", audio: audioFa[13] },
    { text: "أَفَ", audio: audioFa[14] }
  ],

  /* 20: qaf (ق) */
  qaf: [
    "ق",
    { video: videoAssets.qaf },
    { text: "قَ", audio: audioQaf[1], explain: "ق фатха менен (а үндүүсү)" },
    { text: "قِ", audio: audioQaf[2], explain: "ق касра менен (и үндүүсү)" },
    { text: "قُ", audio: audioQaf[3], explain: "ق дамма менен (у үндүүсү)" },
    { text: "قَلَ", audio: audioQaf[4] },
    { text: "مِقَ", audio: audioQaf[5] },
    { text: "يَقَ", audio: audioQaf[6] },
    { text: "قَارَ", audio: audioQaf[7] },
    { text: "قَارِ", audio: audioQaf[8] },
    { text: "بَقَ", audio: audioQaf[9] },
    { text: "قِقِ", audio: audioQaf[10] },
    { text: "قُقُ", audio: audioQaf[11] },
    { text: "قَبِ", audio: audioQaf[12] },
    { text: "قِبَ", audio: audioQaf[13] },
    { text: "أَقَ", audio: audioQaf[14] }
  ],

  /* 21: kaf (ك) */
  kaf: [
    "ك",
    { video: videoAssets.kaf },
    { text: "كَ", audio: audioKaf[1], explain: "ك фатха менен (а үндүүсү)" },
    { text: "كِ", audio: audioKaf[2], explain: "ك касра менен (и үндүүсү)" },
    { text: "كُ", audio: audioKaf[3], explain: "ك дамма менен (у үндүүсү)" },
    { text: "كِتَ", audio: audioKaf[4] },
    { text: "مَكَ", audio: audioKaf[5] },
    { text: "تَكَ", audio: audioKaf[6] },
    { text: "كَاتَ", audio: audioKaf[7] },
    { text: "كَارِ", audio: audioKaf[8] },
    { text: "بَكَ", audio: audioKaf[9] },
    { text: "كِكِ", audio: audioKaf[10] },
    { text: "كُكُ", audio: audioKaf[11] },
    { text: "كَبِ", audio: audioKaf[12] },
    { text: "كِبَ", audio: audioKaf[13] },
    { text: "أَكَ", audio: audioKaf[14] }
  ],

  /* 22: lam (ل) */
  lam: [
    "ل",
    { video: videoAssets.lam },
    { text: "لَ", audio: audioLam[1], explain: "ل фатха менен (а үндүүсү)" },
    { text: "لِ", audio: audioLam[2], explain: "ل касра менен (и үндүүсү)" },
    { text: "لُ", audio: audioLam[3], explain: "ل дамма менен (у үндүүсү)" },
    { text: "لَبَ", audio: audioLam[4] },
    { text: "مَلَ", audio: audioLam[5] },
    { text: "تَلَ", audio: audioLam[6] },
    { text: "لَاعَ", audio: audioLam[7] },
    { text: "لَارَ", audio: audioLam[8] },
    { text: "بَلَ", audio: audioLam[9] },
    { text: "لِلِ", audio: audioLam[10] },
    { text: "لُلُ", audio: audioLam[11] },
    { text: "لَبِ", audio: audioLam[12] },
    { text: "لِبَ", audio: audioLam[13] },
    { text: "أَلَ", audio: audioLam[14] }
  ],

  /* 23: mim (م) */
  mim: [
    "م",
    { video: videoAssets.mim },
    { text: "مَ", audio: audioMim[1], explain: "م фатха менен (а үндүүсү)" },
    { text: "مِ", audio: audioMim[2], explain: "م касра менен (и үндүүсү)" },
    { text: "مُ", audio: audioMim[3], explain: "م дамма менен (у үндүүсү)" },
    { text: "مَدَ", audio: audioMim[4] },
    { text: "مُسَ", audio: audioMim[5] },
    { text: "تَمَ", audio: audioMim[6] },
    { text: "مَائَ", audio: audioMim[7] },
    { text: "مَارَ", audio: audioMim[8] },
    { text: "بَمَ", audio: audioMim[9] },
    { text: "مِمِ", audio: audioMim[10] },
    { text: "مُمُ", audio: audioMim[11] },
    { text: "مَابِ", audio: audioMim[12] },
    { text: "مِبَ", audio: audioMim[13] },
    { text: "أَمَ", audio: audioMim[14] }
  ],

  /* 24: nun (ن) */
  nun: [
    "ن",
    { video: videoAssets.nun },
    { text: "نَ", audio: audioNun[1], explain: "ن фатха менен (а үндүүсү)" },
    { text: "نِ", audio: audioNun[2], explain: "ن касра менен (и үндүүсү)" },
    { text: "نُ", audio: audioNun[3], explain: "ن дамма менен (у үндүүсү)" },
    { text: "نَجَ", audio: audioNun[4] },
    { text: "مَنَ", audio: audioNun[5] },
    { text: "تَنَ", audio: audioNun[6] },
    { text: "نَائَ", audio: audioNun[7] },
    { text: "نَارَ", audio: audioNun[8] },
    { text: "نِنِ", audio: audioNun[9] },
    { text: "نُنُ", audio: audioNun[10] },
    { text: "بَنَ", audio: audioNun[11] },
    { text: "نَبِ", audio: audioNun[12] },
    { text: "نِبَ", audio: audioNun[13] },
    { text: "أَنَ", audio: audioNun[14] }
  ],

  /* 25: ha2 (ه) */
  ha2: [
    "ه",
    { video: videoAssets.ha2 },
    { text: "هَ", audio: audioHa2[1], explain: "ه фатха менен (а үндүүсү)" },
    { text: "هِ", audio: audioHa2[2], explain: "ه касра менен (и үндүүсү)" },
    { text: "هُ", audio: audioHa2[3], explain: "ه дамма менен (у үндүүсү)" },
    { text: "هَدَ", audio: audioHa2[4] },
    { text: "مَهَ", audio: audioHa2[5] },
    { text: "تَهَ", audio: audioHa2[6] },
    { text: "هَادَ", audio: audioHa2[7] },
    { text: "هَارَ", audio: audioHa2[8] },
    { text: "بَهَ", audio: audioHa2[9] },
    { text: "هِهِ", audio: audioHa2[10] },
    { text: "هُهُ", audio: audioHa2[11] },
    { text: "هَبِ", audio: audioHa2[12] },
    { text: "هِبَ", audio: audioHa2[13] },
    { text: "أَهَ", audio: audioHa2[14] }
  ],

  /* 26: waw (و) — без использования как мадд */
  waw: [
    "و",
    { video: videoAssets.waw },
    { text: "وَ", audio: audioWaw[1], explain: "و фатха менен (а үндүүсү)" },
    { text: "وِ", audio: audioWaw[2], explain: "و касра менен (и үндүүсү)" },
    { text: "وُ", audio: audioWaw[3], explain: "و дамма менен (у үндүүсү)" },
    { text: "وَرَ", audio: audioWaw[4] },
    { text: "مَوَ", audio: audioWaw[5] },
    { text: "تَوَ", audio: audioWaw[6] },
    { text: "وَابَ", audio: audioWaw[7] },
    { text: "وَارَ", audio: audioWaw[8] },
    { text: "بَوَ", audio: audioWaw[9] },
    { text: "وِوِ", audio: audioWaw[10] },
    { text: "وُوُ", audio: audioWaw[11] },
    { text: "وَبِ", audio: audioWaw[12] },
    { text: "أَوَ", audio: audioWaw[13] },
    { text: "وَابِ", audio: audioWaw[14] }
  ],

  /* 27: ya (ي) — без использования как мадд */
  ya: [
    "ي",
    { video: videoAssets.ya },
    { text: "يَ", audio: audioYa[1], explain: "ي фатха менен (а үндүүсү)" },
    { text: "يِ", audio: audioYa[2], explain: "ي касра менен (и үндүүсү)" },
    { text: "يُ", audio: audioYa[3], explain: "ي дамма менен (у үндүүсү)" },
    { text: "يَمَ", audio: audioYa[4] },
    { text: "تَيَ", audio: audioYa[5] },
    { text: "يَتَ", audio: audioYa[6] },
    { text: "يَابَ", audio: audioYa[7] },
    { text: "يَارَ", audio: audioYa[8] },
    { text: "بَيَ", audio: audioYa[9] },
    { text: "يِيِ", audio: audioYa[10] },
    { text: "يُيُ", audio: audioYa[11] },
    { text: "يَبِ", audio: audioYa[12] },
    { text: "أَيَ", audio: audioYa[13] },
    { text: "يَابِ", audio: audioYa[14] }
  ]
};


export const path = [
  { alifBa: "ا ب" }, // 1. Алиф
  { ta: "ت" }, // 3. Та
  { tha: "ث" }, // 4. Са (мягкая)
  { jim: "ج" }, // 5. Джим
  { ha: "ح" }, // 6. Ха (глухая)
  { kha: "خ" }, // 7. Ха (звонкая)
  { dal: "د" }, // 8. Даль
  { dhal: "ذ" }, // 9. Заль
  { ra: "ر" }, // 10. Ра
  { zay: "ز" }, // 11. Зай
  { sin: "س" }, // 12. Син
  { shin: "ش" }, // 13. Шин
  { sad: "ص" }, // 14. Сад (эмфатическая)
  { dad: "ض" }, // 15. Дад (эмфатическая)
  { ta2: "ط" }, // 16. Та (эмфатическая)
  { dha2: "ظ" }, // 17. За (эмфатическая)
  { ayn: "ع" }, // 18. Айн (гортанная)
  { ghayn: "غ" }, // 19. Гайн
  { fa: "ف" }, // 20. Фа
  { qaf: "ق" }, // 21. Каф (гортанная)
  { kaf: "ك" }, // 22. Каф
  { lam: "ل" }, // 23. Лям
  { mim: "م" }, // 24. Мим
  { nun: "ن" }, // 25. Нун
  { ha2: "ه" }, // 26. Ха (лёгкая)
  { waw: "و" }, // 27. Вав
  { ya: "ي" }, // 28. Йа
];
