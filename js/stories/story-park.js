const STORY_PARK =
  {
    title: 'בַּפַּארְק',
    titleTigrinya: 'ኣብ ፓርክ',
    titleTranslit: 'ባፓርቅ',
    cover: '🌳🛝',
    pages: [
      {
        hebrew: 'הַיּוֹם יוֹם שַׁבָּת.',
        words: ['הַיּוֹם', 'יוֹם', 'שַׁבָּת.'],
        tigrinya: ['ሎሚ', 'መዓልቲ', 'ሰንበት እያ.'],
        translit: ['ሃዮም', 'ዮም', 'ሻባት.'],
        fullTigrinya: 'ሎሚ ሰንበት እያ.',
        emoji: '📅☀️'
      },
      {
        hebrew: 'אַבָּא אוֹמֵר: בּוֹאוּ נֵלֵךְ לַפַּארְק!',
        words: ['אַבָּא', 'אוֹמֵר:', 'בּוֹאוּ', 'נֵלֵךְ', 'לַפַּארְק!'],
        tigrinya: ['ኣቦ', 'ይብል:', 'ኑ', 'ንኺድ', 'ናብ ፓርክ!'],
        translit: ['ኣባ', 'ኦሜር:', 'ቦኡ', 'ኔሌሕ', 'ላፓርቅ!'],
        fullTigrinya: 'ኣቦ ይብል: ኑ ናብ ፓርክ ንኺድ!',
        emoji: '👨🗣️'
      },
      {
        hebrew: 'אֲנִי רָץ לַנַּדְנֵדָה.',
        words: ['אֲנִי', 'רָץ', 'לַנַּדְנֵדָה.'],
        tigrinya: ['ኣነ', 'ይጎይ', 'ናብ ዡንግላ.'],
        translit: ['ኣኒ', 'ራጽ', 'ላናድኔዳ.'],
        fullTigrinya: 'ኣነ ናብ ዡንግላ ይጎይ.',
        emoji: 'img:img/swing.svg'
      },
      {
        hebrew: 'אֲחוֹתִי עוֹלָה עַל הַמַּגְלֵשָׁה.',
        words: ['אֲחוֹתִי', 'עוֹלָה', 'עַל', 'הַמַּגְלֵשָׁה.'],
        tigrinya: ['ሓብተይ', 'ትድይብ', 'ኣብ', 'ማግለሻ.'],
        translit: ['ኣሖቲ', 'ዖላ', 'ዓል', 'ሃማግሌሻ.'],
        fullTigrinya: 'ሓብተይ ኣብ ማግለሻ ትድይብ.',
        emoji: '👧🛝'
      },
      {
        hebrew: 'אַבָּא יוֹשֵׁב עַל הַסַּפְסָל.',
        words: ['אַבָּא', 'יוֹשֵׁב', 'עַל', 'הַסַּפְסָל.'],
        tigrinya: ['ኣቦ', 'ኮፍ ኢሉ', 'ኣብ', 'ዓራቲ.'],
        translit: ['ኣባ', 'ዮሼቭ', 'ዓል', 'ሃሳፍሳል.'],
        fullTigrinya: 'ኣቦ ኣብ ዓራቲ ኮፍ ኢሉ.',
        emoji: 'img:img/bench.svg'
      },
      {
        hebrew: 'אִמָּא נוֹתֶנֶת לָנוּ גְּלִידָה.',
        words: ['אִמָּא', 'נוֹתֶנֶת', 'לָנוּ', 'גְּלִידָה.'],
        tigrinya: ['ኣደ', 'ትህበና', '(ንዓና)', 'ጀላቶ.'],
        translit: ['ኢማ', 'ኖቴነት', 'ላኑ', 'ግሊዳ.'],
        fullTigrinya: 'ኣደ ጀላቶ ትህበና.',
        emoji: '👩🍦🍦'
      },
      {
        hebrew: 'אֲנִי אוֹהֵב אֶת יוֹם שַׁבָּת!',
        words: ['אֲנִי', 'אוֹהֵב', 'אֶת', 'יוֹם', 'שַׁבָּת!'],
        tigrinya: ['ኣነ', 'ይፈትዎ', 'ን', 'መዓልቲ', 'ሰንበት!'],
        translit: ['ኣኒ', 'ኦሄቭ', 'ኤት', 'ዮም', 'ሻባት!'],
        fullTigrinya: 'ኣነ ንሰንበት ይፈትዋ!',
        emoji: '🧒❤️☀️'
      },
      {
        type: 'pot',
        prompt: 'מָה רוֹאִים בַּפַּארְק?',
        promptTigrinya: 'ኣብ ፓርክ እንታይ ትርእዩ?',
        promptTranslit: 'ማ ሮኢም ባፓርቅ?',
        hint: 'לחצו על מה שרואים בפארק 🌳',
        successText: 'כָּל הַכָּבוֹד! מָצְאתֶם הַכֹּל!',
        emoji: '🌳',
        items: [
          { text: 'מַחְשֵׁב',   emoji: '💻', tigrinya: 'ኮምፕዩተር', translit: 'ማሕሸቭ',  correct: false },
          { text: 'נַּדְנֵדָה', emoji: 'img:img/swing.svg', tigrinya: 'ዡንግላ',    translit: 'ናድኔዳ',  correct: true  },
          { text: 'מִיטָּה',    emoji: '🛏️', tigrinya: 'ዓራት',     translit: 'ሚታ',     correct: false },
          { text: 'עֵץ',        emoji: '🌳', tigrinya: 'ዛፍ',       translit: 'ዔጽ',     correct: true  },
          { text: 'מְקָרֵר',    emoji: '🧊', tigrinya: 'ፍሪጅ',      translit: 'ምቃሬር',  correct: false },
          { text: 'מַגְלֵשָׁה', emoji: '🛝', tigrinya: 'ማግለሻ',    translit: 'ማጌሌሻ',  correct: true  },
          { text: 'עוּגָה',     emoji: '🎂', tigrinya: 'ኬክ',       translit: 'ዑጋ',     correct: false },
          { text: 'סַפְסָל',    emoji: 'img:img/bench.svg', tigrinya: 'ዓራቲ',     translit: 'ሳፍሳል',  correct: true  },
          { text: 'כַּדּוּר',   emoji: '⚽', tigrinya: 'ኩዕሶ',      translit: 'ካዱር',   correct: true  },
        ]
      },
      {
        type: 'write',
        emoji: '❤️☀️',
        prompt: 'מָה אַתֶּם אוֹהֲבִים לַעֲשׂוֹת בְּיוֹם שַׁבָּת?',
        promptTigrinya: 'ኣብ መዓልቲ ሰንበት እንታይ ምግባር ትፈቱ?',
        promptTranslit: 'ማ ኣቴም ኦሃቪም ላዓሶት ቤዮም ሻባት?',
      },
    ]
  }
;
