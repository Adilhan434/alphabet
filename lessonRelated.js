import {
  audioAlif,
  audioAyn,
  audioBa,
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
  audioLam, audioMim, audioNun,
  audioQaf,
  audioRa,
  audioSad,
  audioShin,
  audioSin,
  audioTa,
  audioTa2,
  audioTha,
  audioWaw, audioYa,
  audioZay
} from './audioAssets';

import { videoAssets } from './videoAssets';

export const lessons = {
  'alif': [
    'ا',
    {video: videoAssets.alif},
    {text: 'أَ', audio: audioAlif[1], explain: 'ا фатха менен (а үндүүсү)'},
    {text: 'إِ', audio: audioAlif[2], explain: 'ا касра менен (и үндүүсү)'},
    {text: 'أُ', audio: audioAlif[3], explain: 'ا дамма менен (у үндүүсү)'},
    {text: 'آ', audio: audioAlif[4]},
    {text: 'أْ', audio: audioAlif[5]},
    { text: 'أْ', audio: audioAlif[6] },
  ],
  'ba': [
    'ب',
    { video: videoAssets.ba },
    { text: 'بَ', audio: audioBa[1], explain: 'ب фатха менен (а үндүүсү)' },
    { text: 'بِ', audio: audioBa[2], explain: 'ب касра менен (и үндүүсү)' },
    { text: 'بُ', audio: audioBa[3], explain: 'ب дамма менен (у үндүүсү)' },
    { text: 'أَبَ', audio: audioBa[4] },
    { text: 'بَأَ', audio: audioBa[5] },
    { text: 'بَاب', audio: audioBa[6] },
  ],
  'ta': [
    'ت',
    { video: videoAssets.ta },
    { text: 'تَ', audio: audioTa[1], explain: 'ت фатха менен (а үндүүсү)' },
    { text: 'تِ', audio: audioTa[2], explain: 'ت касра менен (и үндүүсү)' },
    { text: 'تُ', audio: audioTa[3], explain: 'ت дамма менен (у үндүүсү)' },
    { text: 'بَتَ', audio: audioTa[4] },
    { text: 'تَاب', audio: audioTa[5] },
    { text: 'أَبْتَ', audio: audioTa[6] },
  ],
  'tha': [
    'ث',
    { video: videoAssets.tha },
    { text: 'ثَ', audio: audioTha[1], explain: 'ث фатха менен (а үндүүсү)' },
    { text: 'ثِ', audio: audioTha[2], explain: 'ث касра менен (и үндүүсү)' },
    { text: 'ثُ', audio: audioTha[3], explain: 'ث дамма менен (у үндүүсү)' },
    { text: 'ثَبَ', audio: audioTha[4] },
    { text: 'أَثَر', audio: audioTha[5] },
    { text: 'بَثَتَ', audio: audioTha[6] },
  ],
  'jim': [
    'ج',
    { video: videoAssets.jim },
    { text: 'جَ', audio: audioJim[1], explain: 'ج фатха менен (а үндүүсү)' },
    { text: 'جِ', audio: audioJim[2], explain: 'ج касра менен (и үндүүсү)' },
    { text: 'جُ', audio: audioJim[3], explain: 'ج дамма менен (у үндүүсү)' },
    { text: 'جَبَ', audio: audioJim[4] },
    { text: 'تَجَر', audio: audioJim[5] },
    { text: 'мджтас', audio: audioJim[6] },
  ],
  'ha': [
    'ح',
    { video: videoAssets.ha },
    { text: 'حَ', audio: audioHa[1], explain: 'ح фатха менен (а үндүүсү)' },
    { text: 'حِ', audio: audioHa[2], explain: 'ح касра менен (и үндүүсү)' },
    { text: 'حُ', audio: audioHa[3], explain: 'ح дамма менен (у үндүүсү)' },
    { text: 'حَبَّ', audio: audioHa[4] },
    { text: 'مَحَبَّة', audio: audioHa[5] },
    { text: 'يَحْتَرِمُ', audio: audioHa[6] },
  ],
  'kha': [
    'خ',
    { video: videoAssets.kha },
    { text: 'خَ', audio: audioKha[1], explain: 'خ фатха менен (а үндүүсү)' },
    { text: 'خِ', audio: audioKha[2], explain: 'خ касра менен (и үндүүсү)' },
    { text: 'خُ', audio: audioKha[3], explain: 'خ дамма менен (у үндүүсү)' },
    { text: 'خَبَر', audio: audioKha[4] },
    { text: 'مَخْزُون', audio: audioKha[5] },
    { text: 'يَخْتَبِئُ', audio: audioKha[6] },
  ],
  'dal': [
    'د',
    { video: videoAssets.dal },
    { text: 'دَ', audio: audioDal[1], explain: 'د фатха менен (а үндүүсү)' },
    { text: 'دِ', audio: audioDal[2], explain: 'د касра менен (и үндүүсү)' },
    { text: 'دُ', audio: audioDal[3], explain: 'د дамма менен (у үндүүсү)' },
    { text: 'دَرْس', audio: audioDal[4] },
    { text: 'مَدِينَة', audio: audioDal[5] },
    { text: 'يَدْرُسُ', audio: audioDal[6] },
  ],
  'dhal': [
    'ذ',
    { video: videoAssets.dhal },
    { text: 'ذَ', audio: audioDhal[1], explain: 'ذ фатха менен (а үндүүсү)' },
    { text: 'ذِ', audio: audioDhal[2], explain: 'ذ касра менен (и үндүүсү)' },
    { text: 'ذُ', audio: audioDhal[3], explain: 'ذ дамма менен (у үндүүсү)' },
    { text: 'ذَهَب', audio: audioDhal[4] },
    { text: 'مَذْهَب', audio: audioDhal[5] },
    { text: 'يَذْهَبُ', audio: audioDhal[6] },
  ],
  'ra': [
    'ر',
    { video: videoAssets.ra },
    { text: 'رَ', audio: audioRa[1], explain: 'ر фатха менен (а үндүүсү)' },
    { text: 'رِ', audio: audioRa[2], explain: 'ر касра менен (и үндүүсү)' },
    { text: 'رُ', audio: audioRa[3], explain: 'ر дамма менен (у үндүүсү)' },
    { text: 'رَسُول', audio: audioRa[4] },
    { text: 'مَرْكَز', audio: audioRa[5] },
    { text: 'يَرْجِعُ', audio: audioRa[6] },
  ],
  'zay': [
    'ز',
    { video: videoAssets.zay },
    { text: 'زَ', audio: audioZay[1], explain: 'ز фатха менен (а үндүүсү)' },
    { text: 'زِ', audio: audioZay[2], explain: 'ز касра менен (и үндүүсү)' },
    { text: 'زُ', audio: audioZay[3], explain: 'ز дамма менен (у үндүүсү)' },
    { text: 'زَهْر', audio: audioZay[4] },
    { text: 'مِزْهَر', audio: audioZay[5] },
    { text: 'يَزْدَهِرُ', audio: audioZay[6] },
  ],
  'sin': [
    'س',
    { video: videoAssets.sin },
    { text: 'سَ', audio: audioSin[1], explain: 'س фатха менен (а үндүүсү)' },
    { text: 'سِ', audio: audioSin[2], explain: 'س касра менен (и үндүүсү)' },
    { text: 'سُ', audio: audioSin[3], explain: 'س дамма менен (у үндүүсү)' },
    { text: 'سَبَ', audio: audioSin[4] },
    { text: 'مَسْجِد', audio: audioSin[5] },
    { text: 'تَسْتَخْرِج', audio: audioSin[6] },
  ],
  'shin': [
    'ش',
    { video: videoAssets.shin },
    { text: 'شَ', audio: audioShin[1], explain: 'ش фатха менен (а үндүүсү)' },
    { text: 'شِ', audio: audioShin[2], explain: 'ش касра менен (и үндүүсү)' },
    { text: 'شُ', audio: audioShin[3], explain: 'ش дамма менен (у үндүүсү)' },
    { text: 'شَجَر', audio: audioShin[4] },
    { text: 'مَشَارِق', audio: audioShin[5] },
    { text: 'تَشْتَهِرُونَ', audio: audioShin[6] },
  ],
  'sad': [
    'ص',
    { video: videoAssets.sad },
    { text: 'صَ', audio: audioSad[1], explain: 'ص фатха менен (а үндүүсү)' },
    { text: 'صِ', audio: audioSad[2], explain: 'ص касра менен (и үндүүсү)' },
    { text: 'صُ', audio: audioSad[3], explain: 'ص дамма менен (у үндүүсү)' },
    { text: 'صَبْر', audio: audioSad[4] },
    { text: 'مِصْبَاح', audio: audioSad[5] },
    { text: 'يَصْطَبِرُ', audio: audioSad[6] },
  ],
  'dad': [
    'ض',
    { video: videoAssets.dad },
    { text: 'ضَ', audio: audioDad[1], explain: 'ض фатха менен (а үндүүсү)' },
    { text: 'ضِ', audio: audioDad[2], explain: 'ض касра менен (и үндүүсү)' },
    { text: 'ضُ', audio: audioDad[3], explain: 'ض дамма менен (у үндүүсү)' },
    { text: 'ضَرْب', audio: audioDad[4] },
    { text: 'مِضْرَاب', audio: audioDad[5] },
    { text: 'يَضْطَرِبُ', audio: audioDad[6] },
  ],
  'ta2': [
    'ط',
    { video: videoAssets.ta2 },
    { text: 'طَ', audio: audioTa2[1], explain: 'ط фатха менен (а үндүүсү)' },
    { text: 'طِ', audio: audioTa2[2], explain: 'ط касра менен (и үндүүсү)' },
    { text: 'طُ', audio: audioTa2[3], explain: 'ط дамма менен (у үндүүсү)' },
    { text: 'طَيْر', audio: audioTa2[4] },
    { text: 'مَطَار', audio: audioTa2[5] },
    { text: 'يَطَّيِّرُ', audio: audioTa2[6] },
  ],
  'dha2': [
    'ظ',
    { video: videoAssets.dha2 },
    { text: 'ظَ', audio: audioDha2[1], explain: 'ظ фатха менен (а үндүүсү)' },
    { text: 'ظِ', audio: audioDha2[2], explain: 'ظ касра менен (и үндүүсү)' },
    { text: 'ظُ', audio: audioDha2[3], explain: 'ظ дамма менен (у үндүүсү)' },
    { text: 'ظَهْر', audio: audioDha2[4] },
    { text: 'مَظْلُوم', audio: audioDha2[5] },
    { text: 'يَتَظَاهَرُ', audio: audioDha2[6] },
  ],
  'ayn': [
    'ع',
    { video: videoAssets.ayn },
    { text: 'عَ', audio: audioAyn[1], explain: 'ع фатха менен (а үндүүсү)' },
    { text: 'عِ', audio: audioAyn[2], explain: 'ع касра менен (и үндүүсү)' },
    { text: 'عُ', audio: audioAyn[3], explain: 'ع дамма менен (у үндүүсү)' },
    { text: 'عَلَم', audio: audioAyn[4] },
    { text: 'مَعْرُوف', audio: audioAyn[5] },
    { text: 'يَعْتَرِفُ', audio: audioAyn[6] },
  ],
  'ghayn': [
    'غ',
    { video: videoAssets.ghayn },
    { text: 'غَ', audio: audioGhayn[1], explain: 'غ фатха менен (а үндүүсү)' },
    { text: 'غِ', audio: audioGhayn[2], explain: 'غ касра менен (и үндүүсү)' },
    { text: 'غُ', audio: audioGhayn[3], explain: 'غ дамма менен (у үндүүсү)' },
    { text: 'غَرْب', audio: audioGhayn[4] },
    { text: 'مَغْرِب', audio: audioGhayn[5] },
    { text: 'يَغْتَرِبُ', audio: audioGhayn[6] },
  ],
  'fa': [
    'ف',
    { video: videoAssets.fa },
    { text: 'فَ', audio: audioFa[1], explain: 'ف фатха менен (а үндүүсү)' },
    { text: 'فِ', audio: audioFa[2], explain: 'ف касра менен (и үндүүсү)' },
    { text: 'فُ', audio: audioFa[3], explain: 'ف дамма менен (у үндүүсү)' },
    { text: 'فَهْم', audio: audioFa[4] },
    { text: 'مِفْتَاح', audio: audioFa[5] },
    { text: 'يَفْتَحُ', audio: audioFa[6] },
  ],
  'qaf': [
    'ق',
    { video: videoAssets.qaf },
    { text: 'قَ', audio: audioQaf[1], explain: 'ق фатха менен (а үндүүсү)' },
    { text: 'قِ', audio: audioQaf[2], explain: 'ق касра менен (и үндүүсү)' },
    { text: 'قُ', audio: audioQaf[3], explain: 'ق дамма менен (у үндүүсү)' },
    { text: 'قَلْب', audio: audioQaf[4] },
    { text: 'مِقْصَد', audio: audioQaf[5] },
    { text: 'يَقْتَرِبُ', audio: audioQaf[6] },
  ],
  'kaf': [
    'ك',
    { video: videoAssets.kaf },
    { text: 'كَ', audio: audioKaf[1], explain: 'ك фатха менен (а үндүүсү)' },
    { text: 'كِ', audio: audioKaf[2], explain: 'к касра менен (и үндүүсү)' },
    { text: 'كُ', audio: audioKaf[3], explain: 'к дамма менен (у үндүүсү)' },
    { text: 'كِتَاب', audio: audioKaf[4] },
    { text: 'مَكْتَبَة', audio: audioKaf[5] },
    { text: 'تَسْتَكْتِبُونَ', audio: audioKaf[6] },
  ],
  'lam': [
    'ل',
    { video: videoAssets.lam },
    { text: 'لَ', audio: audioLam[1], explain: 'ل фатха менен (а үндүүсү)' },
    { text: 'لِ', audio: audioLam[2], explain: 'л касра менен (и үндүүсү)' },
    { text: 'لُ', audio: audioLam[3], explain: 'л дамма менен (у үндүүсү)' },
    { text: 'لَبَن', audio: audioLam[4] },
    { text: 'مُلْتَزِم', audio: audioLam[5] },
    { text: 'يَتَلَذَّذُونَ', audio: audioLam[6] },
  ],
  'mim': [
    'م',
    { video: videoAssets.mim },
    { text: 'مَ', audio: audioMim[1], explain: 'م фатха менен (а үндүүсү)' },
    { text: 'مِ', audio: audioMim[2], explain: 'м касра менен (и үндүүсү)' },
    { text: 'مُ', audio: audioMim[3], explain: 'м дамма менен (у үндүүсү)' },
    { text: 'مَدْرَسَة', audio: audioMim[4] },
    { text: 'مُسْتَشْفَى', audio: audioMim[5] },
    { text: 'تَتَمَثَّلُونَ', audio: audioMim[6] },
  ],
  'nun': [
    'ن',
    { video: videoAssets.nun },
    { text: 'نَ', audio: audioNun[1], explain: 'ن фатха менен (а үндүүсү)' },
    { text: 'نِ', audio: audioNun[2], explain: 'н касра менен (и үндүүсү)' },
    { text: 'نُ', audio: audioNun[3], explain: 'н дамма менен (у үндүүсү)' },
    { text: 'نَجْم', audio: audioNun[4] },
    { text: 'مُنْتَهَى', audio: audioNun[5] },
    { text: 'تَنْتَظِرُونَ', audio: audioNun[6] },
  ],
  'ha2': [
    'ه',
    { video: videoAssets.ha2 },
    { text: 'هَ', audio: audioHa2[1], explain: 'ه фатха менен (а үндүүсү)' },
    { text: 'هِ', audio: audioHa2[2], explain: 'һ касра менен (и үндүүсү)' },
    { text: 'هُ', audio: audioHa2[3], explain: 'һ дамма менен (у үндүүсү)' },
    { text: 'هَدِيَة', audio: audioHa2[4] },
    { text: 'مَهْدِيَّة', audio: audioHa2[5] },
    { text: 'يَتَهَيَّأُونَ', audio: audioHa2[6] },
  ],
  'waw': [
    'و',
    { video: videoAssets.waw },
    { text: 'وَ', audio: audioWaw[1], explain: 'و фатха менен (а үндүүсү)' },
    { text: 'وِ', audio: audioWaw[2], explain: 'в касра менен (и үндүүсү)' },
    { text: 'وُ', audio: audioWaw[3], explain: 'в дамма менен (у үндүүсү)' },
    { text: 'وَرْد', audio: audioWaw[4] },
    { text: 'مَوْعِد', audio: audioWaw[5] },
    { text: 'يَتَوَقَّعُونَ', audio: audioWaw[6] },
  ],
  'ya': [
    'ي',
    { video: videoAssets.ya },
    { text: 'يَ', audio: audioYa[1], explain: 'ي фатха менен (а үндүүсү)' },
    { text: 'يِ', audio: audioYa[2], explain: 'й касра менен (и үндүүсү)' },
    { text: 'يُ', audio: audioYa[3], explain: 'й дамма менен (у үндүүсү)' },
    { text: 'يَمِين', audio: audioYa[4] },
    { text: 'تَيْمَاء', audio: audioYa[5] },
    { text: 'يَتَسَامَحُونَ', audio: audioYa[6] },
  ]
};


export const path = [
  { alif: 'ا' },     // 1. Алиф
  { ba: 'ب' },       // 2. Ба
  { ta: 'ت' },       // 3. Та
  { tha: 'ث' },      // 4. Са (мягкая)
  { jim: 'ج' },      // 5. Джим
  { ha: 'ح' },       // 6. Ха (глухая)
  { kha: 'خ' },      // 7. Ха (звонкая)
  { dal: 'د' },      // 8. Даль
  { dhal: 'ذ' },     // 9. Заль
  { ra: 'ر' },       // 10. Ра
  { zay: 'ز' },      // 11. Зай
  { sin: 'س' },      // 12. Син
  { shin: 'ش' },     // 13. Шин
  { sad: 'ص' },      // 14. Сад (эмфатическая)
  { dad: 'ض' },      // 15. Дад (эмфатическая)
  { ta2: 'ط' },      // 16. Та (эмфатическая)
  { dha2: 'ظ' },     // 17. За (эмфатическая)
  { ayn: 'ع' },      // 18. Айн (гортанная)
  { ghayn: 'غ' },    // 19. Гайн
  { fa: 'ف' },       // 20. Фа
  { qaf: 'ق' },      // 21. Каф (гортанная)
  { kaf: 'ك' },      // 22. Каф
  { lam: 'ل' },      // 23. Лям
  { mim: 'م' },      // 24. Мим
  { nun: 'ن' },      // 25. Нун
  { ha2: 'ه' },      // 26. Ха (лёгкая)
  { waw: 'و' },      // 27. Вав
  { ya: 'ي' }        // 28. Йа
];