const STORY_KELEV =
  {
    title: 'הַכֶּלֶב שֶׁלִּי',
    titleTigrinya: 'ናተይ ከልቢ',
    titleTranslit: 'ሃከለቭ ሸሊ',
    cover: '🐕',
    pages: [
      {
        hebrew: 'יֵשׁ לִי כֶּלֶב.',
        words: ['יֵשׁ', 'לִי', 'כֶּלֶב.'],
        tigrinya: ['ኣሎኒ', '(ንዓይ)', 'ከልቢ.'],
        translit: ['ዬሽ', 'ሊ', 'ከለቭ.'],
        fullTigrinya: 'ከልቢ ኣሎኒ.',
        emoji: '🧒🐕'
      },
      {
        hebrew: 'הַכֶּלֶב שֶׁלִּי קָטָן.',
        words: ['הַכֶּלֶב', 'שֶׁלִּי', 'קָטָן.'],
        tigrinya: ['ከልበይ', '(ናተይ)', 'ንእሽተይ እዩ.'],
        translit: ['ሃከለቭ', 'ሸሊ', 'ቃጣን.'],
        fullTigrinya: 'ከልበይ ንእሽተይ እዩ.',
        emoji: '🐶'
      },
      {
        hebrew: 'קוֹרְאִים לוֹ דָּנִי.',
        words: ['קוֹרְאִים', 'לוֹ', 'דָּנִי.'],
        tigrinya: ['ዳኒ', 'ይብሉዎ', '(ንዕኡ).'],
        translit: ['ቆርኢም', 'ሎ', 'ዳኒ.'],
        fullTigrinya: 'ዳኒ ዝብሉዎ ሽሙ.',
        emoji: '🏷️🐕'
      },
      {
        hebrew: 'דָּנִי אוֹהֵב לָרוּץ.',
        words: ['דָּנִי', 'אוֹהֵב', 'לָרוּץ.'],
        tigrinya: ['ዳኒ', 'ይፈቱ', 'ምጉያይ.'],
        translit: ['ዳኒ', 'ኦሄቭ', 'ላሩጽ.'],
        fullTigrinya: 'ዳኒ ምጉያይ ይፈቱ.',
        emoji: '🐕💨'
      },
      {
        hebrew: 'דָּנִי אוֹהֵב לֶאֱכוֹל.',
        words: ['דָּנִי', 'אוֹהֵב', 'לֶאֱכוֹל.'],
        tigrinya: ['ዳኒ', 'ይፈቱ', 'ምብላዕ.'],
        translit: ['ዳኒ', 'ኦሄቭ', 'ለኤኮል.'],
        fullTigrinya: 'ዳኒ ምብላዕ ይፈቱ.',
        emoji: '🐕🍖'
      },
      {
        hebrew: 'דָּנִי אוֹהֵב לִישׁוֹן.',
        words: ['דָּנִי', 'אוֹהֵב', 'לִישׁוֹן.'],
        tigrinya: ['ዳኒ', 'ይፈቱ', 'ምድቃስ.'],
        translit: ['ዳኒ', 'ኦሄቭ', 'ሊሾን.'],
        fullTigrinya: 'ዳኒ ምድቃስ ይፈቱ.',
        emoji: '🐕😴'
      },
      {
        hebrew: 'אֲנִי אוֹהֵב אֶת דָּנִי.',
        words: ['אֲנִי', 'אוֹהֵב', 'אֶת', 'דָּנִי.'],
        tigrinya: ['ኣነ', 'እፈትዎ', '(ንዕኡ)', 'ንዳኒ.'],
        translit: ['ኣኒ', 'ኦሄቭ', 'ኤት', 'ዳኒ.'],
        fullTigrinya: 'ኣነ ንዳኒ እፈትዎ.',
        emoji: '🧒❤️🐕'
      },
      {
        hebrew: 'וְדָּנִי אוֹהֵב אוֹתִי!',
        words: ['וְדָּנִי', 'אוֹהֵב', 'אוֹתִי!'],
        tigrinya: ['ዳኒ ድማ', 'ይፈትወኒ', '(ንዓይ)!'],
        translit: ['ቨዳኒ', 'ኦሄቭ', 'ኦቲ!'],
        fullTigrinya: 'ዳኒ ድማ ይፈትወኒ!',
        emoji: '🐕❤️🧒'
      },
      {
        type: 'mcq',
        question: 'מִי זֶה דָּנִי?',
        questionTigrinya: 'ዳኒ መን እዩ?',
        questionTranslit: 'ሜ ዘ ዳኒ?',
        options: ['חָתוּל', 'יֶלֶד', 'בּוּבָּה', 'כֶּלֶב'],
        optionsTigrinya: ['ድሙ', 'ወዲ', 'ቡቡ', 'ከልቢ'],
        optionsTranslit: ['ሓቱל', 'የለድ', 'ቡባ', 'ከለቭ'],
        correct: 3,
        emoji: '❓'
      },
      {
        type: 'truefalse',
        items: [
          { text: 'דָּנִי אוֹהֵב לָרוּץ',              tigrinya: 'ዳኒ ምጉያይ ይፈቱ',              translit: 'ዳኒ ኦሄቭ ላሩጽ',         correct: true  },
          { text: 'דָּנִי אוֹהֵב חֲתוּלִים',           tigrinya: 'ዳኒ ድሙታት ይፈቱ',             translit: 'ዳኒ ኦሄቭ ሓቱሊም',        correct: false },
          { text: 'דָּנִי אוֹהֵב לְנַקּוֹת',           tigrinya: 'ዳኒ ምጽርራይ ይፈቱ',            translit: 'ዳኒ ኦሄቭ ለናቆት',         correct: false },
          { text: 'דָּנִי אוֹהֵב לִישׁוֹן',            tigrinya: 'ዳኒ ምድቃስ ይፈቱ',              translit: 'ዳኒ ኦሄቭ ሊሾን',          correct: true  },
          { text: 'דָּנִי אוֹהֵב לִרְאוֹת טֶלֶוִיזְיָה', tigrinya: 'ዳኒ ቴሌቪዥን ምርኣይ ይፈቱ',     translit: 'ዳኒ ኦሄቭ ሊርኦት ቴሌቪዝያ', correct: false },
          { text: 'דָּנִי אוֹהֵב לֶאֱכוֹל',            tigrinya: 'ዳኒ ምብላዕ ይፈቱ',              translit: 'ዳኒ ኦሄቭ ለኤኮል',         correct: true  },
          { text: 'דָּנִי אוֹהֵב אוֹתִי',              tigrinya: 'ዳኒ ይፈትወኒ',                 translit: 'ዳኒ ኦሄቭ ኦቲ',           correct: true  },
        ],
        emoji: '✅❌'
      },
      {
        type: 'write',
        prompt: 'עַכְשָׁו תּוֹרְךָ! מֶה אַתָּה אוֹהֵב לַעֲשׂוֹת?',
        promptTigrinya: 'ሕጂ ተርኻ! እንታይ ትፈቱ ምግባር?',
        promptTranslit: 'ዓኽሻቭ ቶርኻ! ሜ ኣታ ኦሄቭ ላዓሶት?',
        hint: 'לִקְרֹא? לְצַיֵּר? לִשְׂחֹק כַּדּוּרֶגֶל?',
        hintTigrinya: 'ምንባብ? ምስኣል? ምጽዋት ኩዕሶ እግሪ?',
        hintTranslit: 'ሊቅሮ? ለጻዬር? ሊሽሖቅ ካዱርረጌል?',
        emoji: '✏️'
      },
    ]
  }
;
