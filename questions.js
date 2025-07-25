// Quiz questions data
const quizQuestions = [
    {
        id: 1,
        question: "Berdasarkan susur masa evolusi sejarah Malaysia, gabungan etika tradisional dan moden tergarap pada era mana?",
        options: [
            { id: "A", text: "Prakolonial" },
            { id: "B", text: "Kolonial" },
            { id: "C", text: "Pascakolonial" },
            { id: "D", text: "Globalisasi" }
        ],
        correctAnswer: "C",
        explanation: {
            correct: "Jawapan yang betul ialah C. Sumber 8 menyatakan dengan jelas: \"Gabungan kedua-dua bentuk etika, tradisional dan moden tersebut, telah tergarap pada era pascakolonial\".",
            incorrect: {
                "A": "A salah kerana era prakolonial hanya mempunyai etika tradisional seperti 'adab' dan 'adat'.",
                "B": "B salah kerana era kolonial adalah masa etika moden diperkenalkan oleh Eropah, bukan gabungannya dengan etika tradisional.",
                "D": "D salah kerana walaupun globalisasi berlaku dalam era pascakolonial, istilah yang spesifik digunakan dalam nota untuk fasa gabungan ini ialah 'pascakolonial'."
            }
        }
    },
    {
        id: 2,
        question: "Apakah yang dimaksudkan dengan 'Adat Resam' mengikut Kamus Pelajar Edisi Kedua?",
        options: [
            { id: "A", text: "Budi pekerti yang halus dan tingkah laku yang baik." },
            { id: "B", text: "Adat yang menjadi kebiasaan kepada sesuatu kaum." },
            { id: "C", text: "Pelbagai adat dan kebiasaan dalam majlis rasmi." },
            { id: "D", text: "Sifat ciri sesuatu bangsa, budaya, atau era." }
        ],
        correctAnswer: "B",
        explanation: {
            correct: "Jawapan B adalah tepat kerana ia merupakan definisi langsung dari sumber 71 yang menyatakan Adat Resam ialah \"adat yg menjadi kebiasaan kpd sesuatu kaum (daerah dll)\".",
            incorrect: {
                "A": "A adalah definisi untuk 'Adab'.",
                "C": "C adalah definisi untuk 'Adat Istiadat'.",
                "D": "D adalah definisi untuk 'Etos'."
            }
        }
    },
    {
        id: 3,
        question: "Menurut nota, etika berciri moden telah diperkenalkan dan dilaksanakan di Malaysia semasa era __________.",
        options: [
            { id: "A", text: "Prakolonial" },
            { id: "B", text: "Kolonial Eropah" },
            { id: "C", text: "Pascakolonial" },
            { id: "D", text: "Kesultanan Melayu Melaka" }
        ],
        correctAnswer: "B",
        explanation: {
            correct: "Jawapan yang betul ialah B. Sumber 6 menyatakan, \"Sifat dan kefahaman mengenai etika berciri moden diperkenal dan dilaksanakan semasa era kolonial Eropah\".",
            incorrect: {
                "A": "A dan D salah kerana era ini didominasi oleh konsep 'adab' dan 'adat' tradisional.",
                "C": "C salah kerana era pascakolonial adalah era gabungan etika moden dan tradisional.",
                "D": "A dan D salah kerana era ini didominasi oleh konsep 'adab' dan 'adat' tradisional."
            }
        }
    },
    {
        id: 4,
        question: "Apakah tiga faktor utama yang mempengaruhi tahap penghayatan etika dan peradaban sesebuah masyarakat mengikut acuan Malaysia?",
        options: [
            { id: "A", text: "Politik, Ekonomi dan Sosial" },
            { id: "B", text: "Sejarah, Struktur Sosial dan Biografi" },
            { id: "C", text: "Individu, Keluarga dan Negara" },
            { id: "D", text: "Adab, Adat dan Etiket" }
        ],
        correctAnswer: "B",
        explanation: {
            correct: "Jawapan yang betul ialah B. Sumber 4 dan 131 secara jelas menyebut bahawa tahap penghayatan etika dan peradaban dipengaruhi oleh \"perkembangan sejarah, struktur sosial dan biografi masyarakat berkenaan\". Rajah pada sumber 29-43 juga menunjukkan tiga kerangka ini.",
            incorrect: {
                "A": "Pilihan A, C, dan D menyenaraikan elemen-elemen yang relevan dengan etika, tetapi bukan tiga faktor kerangka analisis utama seperti yang dinyatakan dalam sinopsis.",
                "C": "Pilihan A, C, dan D menyenaraikan elemen-elemen yang relevan dengan etika, tetapi bukan tiga faktor kerangka analisis utama seperti yang dinyatakan dalam sinopsis.",
                "D": "Pilihan A, C, dan D menyenaraikan elemen-elemen yang relevan dengan etika, tetapi bukan tiga faktor kerangka analisis utama seperti yang dinyatakan dalam sinopsis."
            }
        }
    },
    {
        id: 5,
        question: "Istilah 'peradaban' berasal daripada Bahasa Arab. Sebelum kedatangan Islam, perkataan yang digunakan untuk membawa maksud yang hampir sama ialah __________.",
        options: [
            { id: "A", text: "Kemajuan" },
            { id: "B", text: "Budaya" },
            { id: "C", text: "Tamadun" },
            { id: "D", text: "Pembangunan" }
        ],
        correctAnswer: "B",
        explanation: {
            correct: "Jawapan yang betul ialah B. Sumber 1244 menyatakan, \"Sebelum kedatangan Islam, perkataan yang digunakan untuk membawa maksud peradaban adalah budaya yang bertunjangkan kepada keluhuran nilai dan kehalusan budi pekerti\".",
            incorrect: {
                "A": "A dan D adalah istilah Melayu yang digunakan untuk menjelaskan peningkatan hidup, tetapi tidak meluas seperti 'tamadun'.",
                "C": "C salah kerana 'tamadun' adalah istilah Arab yang diterima pakai selepas kedatangan Islam dan menjadi sinonim dengan 'peradaban'.",
                "D": "A dan D adalah istilah Melayu yang digunakan untuk menjelaskan peningkatan hidup, tetapi tidak meluas seperti 'tamadun'."
            }
        }
    },
    {
        id: 6,
        question: "Proses interaksi di mana setiap kumpulan etnik menyedari dan menghormati norma serta nilai etnik lain tanpa menggugat budaya masing-masing dikenali sebagai __________.",
        options: [
            { id: "A", text: "Akomodasi" },
            { id: "B", text: "Asimilasi" },
            { id: "C", text: "Segregasi" },
            { id: "D", text: "Amalgamasi" }
        ],
        correctAnswer: "A",
        explanation: {
            correct: "Jawapan yang betul ialah A. Ini didefinisikan sebagai \"Penerimaan terhadap norma dan nilai etnik lain tanpa menggugat budaya masing-masing\" (A + B + C = A+B+C).",
            incorrect: {
                "B": "B (Asimilasi) ialah proses di mana kumpulan minoriti menyerap budaya majoriti (A + B + C = A).",
                "C": "C (Segregasi) ialah proses pemisahan atau pengasingan antara etnik.",
                "D": "D (Amalgamasi) ialah percantuman biologi melalui perkahwinan campur (A + B + C = D)."
            }
        }
    },
    {
        id: 7,
        question: "Kewujudan masyarakat Baba dan Nyonya di Melaka adalah contoh hasil daripada proses __________.",
        options: [
            { id: "A", text: "Akomodasi dan Segregasi" },
            { id: "B", text: "Asimilasi dan Amalgamasi" },
            { id: "C", text: "Segregasi dan Akulturasi" },
            { id: "D", text: "Akomodasi dan Akulturasi" }
        ],
        correctAnswer: "B",
        explanation: {
            correct: "Jawapan yang betul ialah B. Sumber 1481 menyatakan: \"Proses asimilasi + amalgamasi →Baba Nyonya, Melayu keturunan Arab, Melayu keturunan India\". Ini merujuk kepada penyerapan budaya (asimilasi) dan perkahwinan campur (amalgamasi).",
            incorrect: {
                "A": "Pilihan A, C, dan D mengandungi elemen yang tidak tepat. Segregasi (pemisahan) bertentangan dengan pembentukan komuniti kacukan seperti Baba dan Nyonya.",
                "C": "Pilihan A, C, dan D mengandungi elemen yang tidak tepat. Segregasi (pemisahan) bertentangan dengan pembentukan komuniti kacukan seperti Baba dan Nyonya.",
                "D": "Pilihan A, C, dan D mengandungi elemen yang tidak tepat. Segregasi (pemisahan) bertentangan dengan pembentukan komuniti kacukan seperti Baba dan Nyonya."
            }
        }
    },
    {
        id: 8,
        question: "Apakah matlamat utama Dasar Ekonomi Baru (DEB) yang diperkenalkan pada tahun 1970?",
        options: [
            { id: "A", text: "Memajukan sektor perindustrian dan perdagangan antarabangsa." },
            { id: "B", text: "Menghapuskan pengaruh ekonomi British sepenuhnya." },
            { id: "C", text: "Pembasmian kemiskinan tanpa mengira kaum dan penyusunan semula masyarakat." },
            { id: "D", text: "Memberi tumpuan kepada pembangunan luar bandar sahaja." }
        ],
        correctAnswer: "C",
        explanation: {
            correct: "Jawapan yang betul ialah C. Sumber 1413 menyatakan objektif DEB secara jelas iaitu \"Pembasmian kemiskinan tanpa mengira kaum\" dan \"Penyusunan semula masyarakat tanpa mengikut fungsi ekonomi\".",
            incorrect: {
                "A": "Pilihan A, B, dan D adalah tidak tepat. Walaupun pembangunan ekonomi adalah sebahagian daripadanya, objektif serampang dua mata DEB yang utama adalah seperti yang dinyatakan dalam pilihan C.",
                "B": "Pilihan A, B, dan D adalah tidak tepat. Walaupun pembangunan ekonomi adalah sebahagian daripadanya, objektif serampang dua mata DEB yang utama adalah seperti yang dinyatakan dalam pilihan C.",
                "D": "Pilihan A, B, dan D adalah tidak tepat. Walaupun pembangunan ekonomi adalah sebahagian daripadanya, objektif serampang dua mata DEB yang utama adalah seperti yang dinyatakan dalam pilihan C."
            }
        }
    },
    {
        id: 9,
        question: "Dalam konteks pemantapan kesepaduan nasional, 'Perpaduan' merujuk kepada __________.",
        options: [
            { id: "A", text: "Keadaan aman yang telah dicapai." },
            { id: "B", text: "Proses yang sedang diusahakan secara berterusan." },
            { id: "C", text: "Matlamat akhir yang diidamkan." },
            { id: "D", text: "Tahap toleransi antara kaum." }
        ],
        correctAnswer: "C",
        explanation: {
            correct: "Jawapan yang betul ialah C. Sumber 1563 mendefinisikan 'Perpaduan' sebagai \"Matlamat Diidamkan\" atau \"matlamat akhir yang diidamkan dalam sebuah negara yang berbilang etnik\".",
            incorrect: {
                "A": "A adalah definisi 'Kesepaduan' (tahap dicapai).",
                "B": "B adalah definisi 'Penyatupaduan' (proses diusaha).",
                "D": "D adalah sebahagian daripada proses, tetapi bukan definisi 'Perpaduan' itu sendiri."
            }
        }
    },
    {
        id: 10,
        question: "Tragedi 13 Mei 1969 telah menyebabkan perubahan dalam haluan negara, di mana perkataan 'Kesatuan' digantikan dengan __________.",
        options: [
            { id: "A", text: "Keharmonian" },
            { id: "B", text: "Kesepaduan" },
            { id: "C", text: "Perpaduan" },
            { id: "D", text: "Integrasi" }
        ],
        correctAnswer: "C",
        explanation: {
            correct: "Jawapan yang betul ialah C. Sumber 1605 menyatakan dengan jelas: \"PERPADUAN mengganti perkataan KESATUAN\". Ia mula digunakan secara rasmi dalam Rancangan Malaysia Kedua (RMK2).",
            incorrect: {
                "A": "Pilihan A, B, dan D adalah konsep yang berkaitan tetapi perkataan spesifik yang menggantikan 'Kesatuan' selepas 1969 ialah 'Perpaduan'.",
                "B": "Pilihan A, B, dan D adalah konsep yang berkaitan tetapi perkataan spesifik yang menggantikan 'Kesatuan' selepas 1969 ialah 'Perpaduan'.",
                "D": "Pilihan A, B, dan D adalah konsep yang berkaitan tetapi perkataan spesifik yang menggantikan 'Kesatuan' selepas 1969 ialah 'Perpaduan'."
            }
        }
    },
    {
        id: 11,
        question: "Apakah yang dimaksudkan dengan etiket?",
        options: [
            { id: "A", text: "Prinsip moral dan nilai-nilai akhlak." },
            { id: "B", text: "Adat dan peraturan kesopanan dalam kehidupan sosial atau profesion." },
            { id: "C", text: "Sistem dan tahap perkembangan sosial sesuatu bangsa." },
            { id: "D", text: "Sifat ciri sesuatu bangsa dan budaya." }
        ],
        correctAnswer: "B",
        explanation: {
            correct: "Jawapan yang betul ialah B. Definisi etiket menurut Kamus Dewan Edisi Keempat ialah \"adat dan peraturan bukan kesopanan (terutamanya dalam kehidupan sosial atau dalam profesion tertentu)\".",
            incorrect: {
                "A": "A adalah definisi 'Etika'.",
                "C": "C adalah definisi 'Peradaban'.",
                "D": "D adalah definisi 'Etos'."
            }
        }
    },
    {
        id: 12,
        question: "Pada era prakolonial, konsep 'adab' dan 'adat' telah wujud dan mendukung sistem nilai dalam pemerintahan dan __________.",
        options: [
            { id: "A", text: "Masyarakat moden" },
            { id: "B", text: "Masyarakat industri" },
            { id: "C", text: "Masyarakat tradisional" },
            { id: "D", text: "Masyarakat digital" }
        ],
        correctAnswer: "C",
        explanation: {
            correct: "Jawapan yang betul ialah C. Sumber 7 menyatakan bahawa pada era pra-kolonial, \"konsep ‘adab’ dan ‘adat’...telah wujud mendukung sistem nilai pemerintahan, masyarakat tradisional serta peradaban\".",
            incorrect: {
                "A": "Pilihan A, B, dan D merujuk kepada bentuk masyarakat pada era yang lebih lewat, terutamanya era kolonial dan pascakolonial.",
                "B": "Pilihan A, B, dan D merujuk kepada bentuk masyarakat pada era yang lebih lewat, terutamanya era kolonial dan pascakolonial.",
                "D": "Pilihan A, B, dan D merujuk kepada bentuk masyarakat pada era yang lebih lewat, terutamanya era kolonial dan pascakolonial."
            }
        }
    },
    {
        id: 13,
        question: "Selat Melaka memainkan peranan penting pada era prakolonial sebagai laluan yang menemukan peradaban Alam Melayu dengan peradaban-peradaban berikut KECUALI:",
        options: [
            { id: "A", text: "India" },
            { id: "B", text: "Cina" },
            { id: "C", text: "Timur Tengah" },
            { id: "D", text: "Eropah" }
        ],
        correctAnswer: "D",
        explanation: {
            correct: "Jawapan yang betul ialah D. Sumber 1217 menyatakan pada era pra-kolonial, Selat Melaka menemukan peradaban \"India, Cina, Timur Tengah dan Alam Melayu\". Peradaban Eropah tiba kemudian pada era kolonial.",
            incorrect: {
                "A": "A, B, dan C adalah peradaban yang berinteraksi di Alam Melayu melalui Selat Melaka sebelum kedatangan kuasa Eropah.",
                "B": "A, B, dan C adalah peradaban yang berinteraksi di Alam Melayu melalui Selat Melaka sebelum kedatangan kuasa Eropah.",
                "C": "A, B, dan C adalah peradaban yang berinteraksi di Alam Melayu melalui Selat Melaka sebelum kedatangan kuasa Eropah."
            }
        }
    },
    {
        id: 14,
        question: "Apakah yang dimaksudkan dengan 'superdiversity' dalam konteks masyarakat Malaysia hari ini?",
        options: [
            { id: "A", text: "Kepelbagaian masyarakat yang wujud semasa zaman Kesultanan Melayu Melaka." },
            { id: "B", text: "Masyarakat majmuk yang terbentuk akibat migrasi buruh paksaan semasa penjajahan." },
            { id: "C", text: "Kepelbagaian kompleks yang terbentuk pada era globalisasi dan dipacu oleh platform digital." },
            { id: "D", text: "Kepelbagaian yang hanya merangkumi tiga etnik utama iaitu Melayu, Cina dan India." }
        ],
        correctAnswer: "C",
        explanation: {
            correct: "Jawapan yang betul ialah C. Sumber 1221 menjelaskan bahawa pada era pasca-kolonial dan globalisasi, \"sifat kepelbagaian...menjadi semakin pekat dan ligat apatah lagi setelah platform digital terasas membentuk kepelbagaian yang sungguh kompleks, yang dipanggil sebagai superdiversity\".",
            incorrect: {
                "A": "A dan B merujuk kepada bentuk kepelbagaian pada era prakolonial dan kolonial.",
                "B": "A dan B merujuk kepada bentuk kepelbagaian pada era prakolonial dan kolonial.",
                "D": "D salah kerana 'superdiversity' adalah lebih kompleks dan melangkaui hanya tiga etnik utama."
            }
        }
    },
    {
        id: 15,
        question: "Proses integrasi sehala yang menghasilkan satu kelompok masyarakat dengan satu budaya, satu bahasa, dan satu agama dikenali sebagai __________.",
        options: [
            { id: "A", text: "Akomodasi" },
            { id: "B", text: "Akulturasi" },
            { id: "C", text: "Amalgamasi" },
            { id: "D", text: "Asimilasi" }
        ],
        correctAnswer: "D",
        explanation: {
            correct: "Jawapan yang betul ialah D. Definisi yang diberikan dalam soalan adalah selaras dengan definisi Asimilasi dalam nota, iaitu \"proses integrasi sehala yang akan menghasilkan satu kelompok masyarakat yang mempunyai satu budaya, satu bahasa dan satu agama\".",
            incorrect: {
                "A": "Pilihan A, B, dan C adalah proses hubungan etnik yang berbeza.",
                "B": "Pilihan A, B, dan C adalah proses hubungan etnik yang berbeza.",
                "C": "Pilihan A, B, dan C adalah proses hubungan etnik yang berbeza."
            }
        }
    },
    {
        id: 16,
        question: "Apakah usaha serius yang pertama kali dilaksanakan oleh Kerajaan Malaysia pada tahun 2017-2018 untuk memantau dan mengukur tahap perpaduan secara objektif?",
        options: [
            { id: "A", text: "Penubuhan Jabatan Perpaduan Negara dan Integrasi Nasional (JPNIN)." },
            { id: "B", text: "Pelancaran Rukun Negara." },
            { id: "C", text: "Pembinaan Indeks Perpaduan Nasional (IPNas)." },
            { id: "D", text: "Pengenalan Dasar Ekonomi Baru (DEB)." }
        ],
        correctAnswer: "C",
        explanation: {
            correct: "Jawapan yang betul ialah C. Sumber 1543 dan 1615 secara spesifik menyatakan \"Tindakan membina Indeks Perpaduan Nasional (IPNas 2018) adalah suatu usaha serius untuk memantau pemantapan kesepaduan nasional\" dan ia merupakan yang \"pertama kali dalam sejarah Malaysia\".",
            incorrect: {
                "A": "A, B, dan D adalah usaha-usaha penting untuk perpaduan, tetapi ia berlaku pada era yang lebih awal dan IPNas adalah usaha spesifik untuk 'mengukur' tahap perpaduan secara objektif.",
                "B": "A, B, dan D adalah usaha-usaha penting untuk perpaduan, tetapi ia berlaku pada era yang lebih awal dan IPNas adalah usaha spesifik untuk 'mengukur' tahap perpaduan secara objektif.",
                "D": "A, B, dan D adalah usaha-usaha penting untuk perpaduan, tetapi ia berlaku pada era yang lebih awal dan IPNas adalah usaha spesifik untuk 'mengukur' tahap perpaduan secara objektif."
            }
        }
    },
    {
        id: 17,
        question: "'Detik Perpaduan' merujuk kepada saat-saat di mana perpaduan dapat dilihat dalam kehidupan seharian. Manakah antara berikut BUKAN contoh 'Detik Perpaduan' yang disebut dalam nota?",
        options: [
            { id: "A", text: "Memberi bantuan ketika bencana." },
            { id: "B", text: "Perdebatan politik di parlimen." },
            { id: "C", text: "Sokongan bersama dalam sukan." },
            { id: "D", text: "Pergaulan di majlis perkahwinan." }
        ],
        correctAnswer: "B",
        explanation: {
            correct: "Jawapan yang betul ialah B. Nota menyenaraikan banyak contoh 'Detik Perpaduan' seperti \"pergaulan di pasar, mengadakan majlis perkahwinan, tempat makan, sokongan dalam sukan, memberi bantuan ketika bencana\". Perdebatan politik, walaupun sebahagian daripada proses demokrasi, sering kali menunjukkan perbezaan pandangan ('Detik Perbezaan') dan bukan 'detik perpaduan' dalam konteks yang sama.",
            incorrect: {
                "A": "A, C, dan D adalah contoh-contoh spesifik 'Detik Perpaduan' yang disenaraikan dalam sumber.",
                "C": "A, C, dan D adalah contoh-contoh spesifik 'Detik Perpaduan' yang disenaraikan dalam sumber.",
                "D": "A, C, dan D adalah contoh-contoh spesifik 'Detik Perpaduan' yang disenaraikan dalam sumber."
            }
        }
    },
    {
        id: 18,
        question: "Apakah yang dimaksudkan dengan 'defisit sosial' dalam konteks kesepaduan?",
        options: [
            { id: "A", text: "Kekurangan dana kerajaan untuk program perpaduan." },
            { id: "B", text: "Jurang pemisah antara golongan kaya dan miskin." },
            { id: "C", text: "Perbezaan yang masih wujud dalam masyarakat yang aman dan stabil." },
            { id: "D", text: "Pengurangan interaksi sosial akibat penggunaan teknologi." }
        ],
        correctAnswer: "C",
        explanation: {
            correct: "Jawapan yang betul ialah C. Definisi 'Kesepaduan' ialah \"keadaan aman, stabil, makmur dan sejahtera yang dicapai tetapi diakui masih terdapat perbezaan dalam bentuk defisit sosial yang wujud dalam sesebuah masyarakat\". Ini bermakna 'defisit sosial' ialah isu-isu atau perbezaan yang masih perlu diuruskan dalam kerangka kesepaduan.",
            incorrect: {
                "A": "Pilihan A, B, dan D mungkin merupakan sebahagian daripada isu sosial, tetapi istilah 'defisit sosial' dalam konteks nota merujuk secara umum kepada ruang-ruang perbezaan (jurang pemisah) yang wujud dalam sebuah masyarakat yang telah mencapai kesepaduan.",
                "B": "Pilihan A, B, dan D mungkin merupakan sebahagian daripada isu sosial, tetapi istilah 'defisit sosial' dalam konteks nota merujuk secara umum kepada ruang-ruang perbezaan (jurang pemisah) yang wujud dalam sebuah masyarakat yang telah mencapai kesepaduan.",
                "D": "Pilihan A, B, dan D mungkin merupakan sebahagian daripada isu sosial, tetapi istilah 'defisit sosial' dalam konteks nota merujuk secara umum kepada ruang-ruang perbezaan (jurang pemisah) yang wujud dalam sebuah masyarakat yang telah mencapai kesepaduan."
            }
        }
    },
    {
        id: 19,
        question: "Apakah tiga rangkai proses yang memacu pemantapan kesepaduan nasional di Malaysia?",
        options: [
            { id: "A", text: "Perpaduan, Keharmonian dan Toleransi" },
            { id: "B", text: "Asimilasi, Akomodasi dan Akulturasi" },
            { id: "C", text: "Perpaduan (diidamkan), Kesepaduan (dicapai) dan Penyatupaduan (diusahakan)" },
            { id: "D", text: "Prakolonial, Kolonial dan Pascakolonial" }
        ],
        correctAnswer: "C",
        explanation: {
            correct: "Jawapan yang betul ialah C. Sumber 1542 menyatakan, \"Ia dilaksana melalui tiga rangkai proses yang bergerak serentak dipacu oleh tiga motivasi, iaitu perpaduan yang diidamkan, kesepaduan yang dicapai dan penyatupaduan yang diusahakan\". Ini juga diringkaskan sebagai tiga lapisan perpaduan.",
            incorrect: {
                "A": "Pilihan A, B, dan D adalah konsep-konsep penting dalam kursus ini, tetapi bukan 'tiga rangkai proses' spesifik yang dimaksudkan dalam Topik 4.",
                "B": "Pilihan A, B, dan D adalah konsep-konsep penting dalam kursus ini, tetapi bukan 'tiga rangkai proses' spesifik yang dimaksudkan dalam Topik 4.",
                "D": "Pilihan A, B, dan D adalah konsep-konsep penting dalam kursus ini, tetapi bukan 'tiga rangkai proses' spesifik yang dimaksudkan dalam Topik 4."
            }
        }
    },
    {
        id: 20,
        question: "Zaman Kesultanan Melayu Melaka dianggap sebagai lambang pertemuan masyarakat pelbagai etnik. Apakah bentuk masyarakat yang terbentuk pada zaman ini?",
        options: [
            { id: "A", text: "Masyarakat majmuk" },
            { id: "B", text: "Masyarakat plural" },
            { id: "C", text: "Masyarakat pluraliti" },
            { id: "D", text: "Masyarakat segregasi" }
        ],
        correctAnswer: "C",
        explanation: {
            correct: "Jawapan yang betul ialah C. Nota membezakan antara 'pluraliti' dan 'majmuk'. Sumber 1476 menyatakan zaman Melaka \"merupakan zaman pluraliti (proses penghijrahan berlaku secara semulajadi tanpa paksaan)\". Sebaliknya, 'masyarakat majmuk' merujuk kepada era penjajah.",
            incorrect: {
                "A": "A salah kerana istilah 'masyarakat majmuk' digunakan untuk merujuk era penjajahan di mana kemasukan pendatang adalah untuk kepentingan ekonomi penjajah.",
                "B": "B salah kerana walaupun berkaitan, istilah yang lebih spesifik untuk zaman Melaka dalam nota ialah 'pluraliti'.",
                "D": "D salah kerana Melaka adalah pusat pertemuan, bukan pemisahan (segregasi)."
            }
        }
    },
    {
        id: 21,
        question: "Siapakah tokoh sarjana Barat yang menganggap falsafah sejarah Ibn Khaldun sebagai sumbangan terbesar yang pernah dilahirkan oleh manusia?",
        options: [
            { id: "A", text: "G. Sarton" },
            { id: "B", text: "R. Flint" },
            { id: "C", text: "J.S. Furnivall" },
            { id: "D", text: "Arnold Toynbee" }
        ],
        correctAnswer: "D",
        explanation: {
            correct: "Jawapan yang betul ialah D. Sumber 1441 secara jelas memetik pandangan Arnold Toynbee: \"- falsafah sejarah yang dihasilkan Ibn Khaldun merupakan sumbangan terbesar pernah dilahirkan manusia di atas muka bumi ini\".",
            incorrect: {
                "A": "A dan B juga merupakan sarjana Barat yang mengagumi Ibn Khaldun, tetapi pandangan spesifik dalam soalan adalah daripada Arnold Toynbee.",
                "B": "A dan B juga merupakan sarjana Barat yang mengagumi Ibn Khaldun, tetapi pandangan spesifik dalam soalan adalah daripada Arnold Toynbee.",
                "C": "C, J.S. Furnivall, adalah tokoh yang terkenal dengan konsep masyarakat plural."
            }
        }
    },
    {
        id: 22,
        question: "Pada era kolonial, British telah mengamalkan dasar pemisahan kuasa di Tanah Melayu. Dalam konteks ini, Sultan dikekalkan kuasanya dalam bidang __________.",
        options: [
            { id: "A", text: "Pentadbiran negara dan ekonomi" },
            { id: "B", text: "Kehakiman, Eksekutif dan Perundangan" },
            { id: "C", text: "Hal ehwal agama Islam dan adat istiadat Melayu" },
            { id: "D", text: "Hubungan diplomatik dan pertahanan" }
        ],
        correctAnswer: "C",
        explanation: {
            correct: "Jawapan yang betul ialah C. Sumber 1498 menerangkan bahawa British menguasai pentadbiran negara manakala \"Sultan menjaga hal ehwal agama Islam dan adat istiadat Melayu\".",
            incorrect: {
                "A": "A, B, dan D adalah bidang-bidang kuasa yang diambil alih oleh pentadbiran British, manakala kuasa Sultan dihadkan kepada agama dan adat.",
                "B": "A, B, dan D adalah bidang-bidang kuasa yang diambil alih oleh pentadbiran British, manakala kuasa Sultan dihadkan kepada agama dan adat.",
                "D": "A, B, dan D adalah bidang-bidang kuasa yang diambil alih oleh pentadbiran British, manakala kuasa Sultan dihadkan kepada agama dan adat."
            }
        }
    },
    {
        id: 23,
        question: "Apakah dua unsur etika yang telah wujud pada era prakolonial di wilayah Alam Melayu?",
        options: [
            { id: "A", text: "Etika dan Etos" },
            { id: "B", text: "Adab dan Adat" },
            { id: "C", text: "Etos dan Etiket" },
            { id: "D", text: "Adab dan Etika" }
        ],
        correctAnswer: "B",
        explanation: {
            correct: "Jawapan yang betul ialah B. Sumber 7 menyatakan, \"Sebelumnya, pada era pra-kolonial, dalam wilayah Alam Melayu, konsep ‘adab’ dan ‘adat’ (adat istiadat dan adat resam), merupakan sebahagian daripada bentuk etika ketika itu\".",
            incorrect: {
                "A": "A, C, dan D mengandungi istilah seperti 'Etika', 'Etos', dan 'Etiket' yang diperkenalkan pada era kolonial.",
                "C": "A, C, dan D mengandungi istilah seperti 'Etika', 'Etos', dan 'Etiket' yang diperkenalkan pada era kolonial.",
                "D": "A, C, dan D mengandungi istilah seperti 'Etika', 'Etos', dan 'Etiket' yang diperkenalkan pada era kolonial."
            }
        }
    },
    {
        id: 24,
        question: "Menurut J.S. Furnivall, masyarakat plural didefinisikan sebagai masyarakat yang...",
        options: [
            { id: "A", text: "bercampur dan bersatu padu membentuk budaya baru." },
            { id: "B", text: "hidup bersama dalam harmoni dan saling menghormati." },
            { id: "C", text: "bercampur tetapi tidak bersatu, hidup berdekatan tetapi terpisah." },
            { id: "D", text: "terasing sepenuhnya dari segi geografi dan pentadbiran." }
        ],
        correctAnswer: "C",
        explanation: {
            correct: "Jawapan yang betul ialah C. Sumber 1276 memberikan definisi J.S. Furnivall: \"Masyarakat plural adalah bercampur antara satu sama lain tetapi tidak bersatu\". Sumber 1277 menghuraikan lagi \"Mereka hidup berdekatan tetapi tidak terpisah dengan sistem politik yang sama serta masing-masing berpegang kepada kebudayaan, agama, bahasa dan pemikiran sendiri\".",
            incorrect: {
                "A": "A lebih merujuk kepada amalgamasi atau asimilasi.",
                "B": "B merujuk kepada akomodasi atau matlamat perpaduan.",
                "D": "D merujuk kepada segregasi sepenuhnya."
            }
        }
    },
    {
        id: 25,
        question: "Konsep 'penyatupaduan' dalam kerangka perpaduan Malaysia merujuk kepada...",
        options: [
            { id: "A", text: "matlamat akhir perpaduan yang ingin dicapai." },
            { id: "B", text: "keadaan aman dan stabil sedia ada." },
            { id: "C", text: "detik-detik kebersamaan dalam sukan dan perayaan." },
            { id: "D", text: "usaha berterusan untuk menyelesaikan defisit sosial melalui perundingan." }
        ],
        correctAnswer: "D",
        explanation: {
            correct: "Jawapan yang betul ialah D. 'Penyatupaduan' didefinisikan sebagai \"usaha berterusan pada peringkat semua lapisan masyarakat untuk menyelesaikan defisit sosial berwahanakan tapak integrasi berprinsipkan tawar-menawar, perundingan dan mediasi\". Ia adalah 'Proses Diusaha'.",
            incorrect: {
                "A": "A ialah definisi 'Perpaduan'.",
                "B": "B ialah definisi 'Kesepaduan'.",
                "C": "C ialah contoh 'Detik Perpaduan'."
            }
        }
    },
    {
        id: 26,
        question: "Perlembagaan Melaka yang diguna pakai semasa zaman kesultanannya adalah berdasarkan __________.",
        options: [
            { id: "A", text: "Adat Temenggung" },
            { id: "B", text: "Undang-undang British" },
            { id: "C", text: "Ajaran Islam" },
            { id: "D", text: "Tradisi Hindu-Buddha" }
        ],
        correctAnswer: "C",
        explanation: {
            correct: "Jawapan yang betul ialah C. Sumber 1461 dalam slaid mengenai Kesultanan Melayu Melaka menyatakan, \"Perlembagaan Melaka berdasarkan ajaran Islam\". Ini diperkukuhkan lagi dengan kewujudan Hukum Kanun Melaka dan Undang-Undang Laut Melaka.",
            incorrect: {
                "A": "A dan D mempunyai pengaruh, tetapi asas utama perlembagaan yang dinyatakan ialah ajaran Islam.",
                "B": "B adalah tidak relevan kerana British datang jauh selepas era Kesultanan Melaka.",
                "D": "A dan D mempunyai pengaruh, tetapi asas utama perlembagaan yang dinyatakan ialah ajaran Islam."
            }
        }
    },
    {
        id: 27,
        question: "Apakah proses hubungan etnik yang diwakili oleh formula 'A + B + C = D'?",
        options: [
            { id: "A", text: "Asimilasi" },
            { id: "B", text: "Akomodasi" },
            { id: "C", text: "Amalgamasi" },
            { id: "D", text: "Akulturasi" }
        ],
        correctAnswer: "C",
        explanation: {
            correct: "Jawapan yang betul ialah C. Formula ini menunjukkan kumpulan etnik A, B, dan C bercampur untuk membentuk satu kumpulan baru D, yang selaras dengan definisi amalgamasi iaitu percantuman biologi (kahwin campur) yang membentuk ras dan budaya baharu.",
            incorrect: {
                "A": "Asimilasi diwakili formula A+B+C = A.",
                "B": "Akomodasi diwakili formula A+B+C = A+B+C.",
                "D": "Akulturasi diwakili formula A+B+C = A**+B**+C**."
            }
        }
    },
    {
        id: 28,
        question: "Pengaruh peradaban Barat ke Alam Melayu telah membawa kepada pemisahan antara agama dan politik. Idea ini berakar umbi dari gerakan __________ di Eropah.",
        options: [
            { id: "A", text: "Revolusi Industri" },
            { id: "B", text: "Enlightenment" },
            { id: "C", text: "Merkantilisme" },
            { id: "D", text: "Renaissance" }
        ],
        correctAnswer: "B",
        explanation: {
            correct: "Jawapan yang betul ialah B. Sumber 1000 menyatakan bahawa era \"Englightenment\" membawa kepada \"Reformasi Gereja... Pemisahan agama daripada politik\". Konsep ini kemudiannya dibawa ke Tanah Melayu oleh British.",
            incorrect: {
                "A": "A lebih kepada perubahan ekonomi dan teknologi.",
                "C": "C dan D adalah era-era penting di Eropah, tetapi 'Enlightenment' secara spesifik dikaitkan dengan pemisahan kuasa gereja dan negara.",
                "D": "C dan D adalah era-era penting di Eropah, tetapi 'Enlightenment' secara spesifik dikaitkan dengan pemisahan kuasa gereja dan negara."
            }
        }
    },
    {
        id: 29,
        question: "Apakah tujuan utama penubuhan 'Communities Liaison Committee' (CLC) pada tahun 1949?",
        options: [
            { id: "A", text: "Untuk menentang pembentukan Malayan Union." },
            { id: "B", text: "Untuk merangka perlembagaan bagi kemerdekaan." },
            { id: "C", text: "Sebagai ruang dan titik pertemuan antara pimpinan elit pelbagai kaum." },
            { id: "D", text: "Untuk menguruskan pilihan raya pertama." }
        ],
        correctAnswer: "C",
        explanation: {
            correct: "Jawapan yang betul ialah C. CLC 1949 disenaraikan sebagai salah satu 'Tapak Integrasi' terawal, yang berfungsi sebagai ruang pertemuan \"pimpinan elit kaum2\" untuk berunding dan mencari persefahaman.",
            incorrect: {
                "A": "A, B, dan D adalah peristiwa penting dalam sejarah Malaysia, tetapi fungsi spesifik CLC adalah sebagai platform perundingan elit kaum.",
                "B": "A, B, dan D adalah peristiwa penting dalam sejarah Malaysia, tetapi fungsi spesifik CLC adalah sebagai platform perundingan elit kaum.",
                "D": "A, B, dan D adalah peristiwa penting dalam sejarah Malaysia, tetapi fungsi spesifik CLC adalah sebagai platform perundingan elit kaum."
            }
        }
    },
    {
        id: 30,
        question: "'Etos' dari sudut sosiologi merujuk kepada...",
        options: [
            { id: "A", text: "Prinsip moral yang menjadi pegangan individu." },
            { id: "B", text: "Adat sopan santun dalam interaksi sosial." },
            { id: "C", text: "Usaha membangunkan bangsa berdasarkan kepelbagaian latar belakang melebihi kesepakatan ciri asas negara." },
            { id: "D", text: "Peraturan rasmi dalam sesuatu majlis atau profesion." }
        ],
        correctAnswer: "C",
        explanation: {
            correct: "Jawapan yang betul ialah C. Sumber 93 memberikan definisi 'Etos' dari sudut sosiologi sebagai \"Usaha membangunkan bangsa berdasarkan latar individu, keluarga dan komuniti berbagai serta berbeza sejarah, etnik, bahasa, agama, budaya dan latar geografi melebihi kesepakatan ciri asas negara atau bangsa\".",
            incorrect: {
                "A": "A merujuk kepada 'Etika'.",
                "B": "B dan D lebih merujuk kepada 'Etiket'.",
                "D": "B dan D lebih merujuk kepada 'Etiket'."
            }
        }
    },
    {
        id: 31,
        question: "Zaman di mana negara ini belum dijajah dan etika terjelma dalam bentuk adab, adat resam dan adat istiadat dikenali sebagai zaman __________.",
        options: [
            { id: "A", text: "Pascakolonial" },
            { id: "B", text: "Kolonial" },
            { id: "C", text: "Prakolonial" },
            { id: "D", text: "Moden" }
        ],
        correctAnswer: "C",
        explanation: {
            correct: "Jawapan yang betul ialah C. Sumber 106 mendefinisikan zaman Prakolonial sebagai \"zaman negara ini belum dikenali sebagai Malaysia dan belum dijajah\" dan pada ketika itu, etika dikenali sebagai \"adab, adat resam dan adat istiadat\".",
            incorrect: {
                "A": "A, B, dan D adalah era-era berikutnya yang mempunyai ciri-ciri etika yang berbeza.",
                "B": "A, B, dan D adalah era-era berikutnya yang mempunyai ciri-ciri etika yang berbeza.",
                "D": "A, B, dan D adalah era-era berikutnya yang mempunyai ciri-ciri etika yang berbeza."
            }
        }
    },
    {
        id: 32,
        question: "Apakah antara sumbangan penting tamadun India dalam bidang sains dan teknologi yang disebut dalam nota?",
        options: [
            { id: "A", text: "Penciptaan kertas dan bahan letupan." },
            { id: "B", text: "Pengenalan sistem nombor termasuk angka perpuluhan." },
            { id: "C", text: "Pembinaan piramid dan proses pengawetan." },
            { id: "D", text: "Pembangunan enjin stim dan jentera." }
        ],
        correctAnswer: "B",
        explanation: {
            correct: "Jawapan yang betul ialah B. Sumber 719-720 menyatakan bahawa \"Ahli matematik india telah mengetahui tentang konsep geometri - mendorongnya memperkenalkan sistem nombor... yang mencecah ke angka perpuluhan\".",
            incorrect: {
                "A": "A adalah sumbangan tamadun China.",
                "C": "C adalah sumbangan tamadun Mesir Purba.",
                "D": "D merujuk kepada Revolusi Industri di Barat."
            }
        }
    },
    {
        id: 33,
        question: "Proses penerimaan unsur kebudayaan daripada kebudayaan lain yang berbeza di mana identiti asal diolah bersama budaya asing dikenali sebagai __________.",
        options: [
            { id: "A", text: "Akulturasi" },
            { id: "B", text: "Asimilasi" },
            { id: "C", text: "Akomodasi" },
            { id: "D", text: "Segregasi" }
        ],
        correctAnswer: "A",
        explanation: {
            correct: "Jawapan yang betul ialah A. Ia didefinisikan sebagai \"proses penerimaan unsur kebudayaan dalam kalangan individu atau kelompok daripada sesuatu kebudayaan lain yang berbeza\" di mana \"Identiti asal + budaya asing = diolah dalam kebudayaan sendiri\".",
            incorrect: {
                "B": "B, C, dan D adalah konsep hubungan etnik yang berbeza. Asimilasi menghapuskan identiti asal, akomodasi mengekalkan identiti asal, dan segregasi memisahkan terus.",
                "C": "B, C, dan D adalah konsep hubungan etnik yang berbeza. Asimilasi menghapuskan identiti asal, akomodasi mengekalkan identiti asal, dan segregasi memisahkan terus.",
                "D": "B, C, dan D adalah konsep hubungan etnik yang berbeza. Asimilasi menghapuskan identiti asal, akomodasi mengekalkan identiti asal, dan segregasi memisahkan terus."
            }
        }
    },
    {
        id: 34,
        question: "Manakah antara berikut BUKAN sebahagian daripada Negeri-Negeri Selat (NNS)?",
        options: [
            { id: "A", text: "Singapura" },
            { id: "B", text: "Perak" },
            { id: "C", text: "Pulau Pinang" },
            { id: "D", text: "Melaka" }
        ],
        correctAnswer: "B",
        explanation: {
            correct: "Jawapan yang betul ialah B. Perak merupakan sebahagian daripada Negeri-Negeri Melayu Bersekutu (NNMB). Sumber 913 menyatakan NNS terdiri daripada \"Singapura, Pulau Pinang dan Melaka\".",
            incorrect: {
                "A": "A, C, dan D adalah komponen utama Negeri-Negeri Selat.",
                "C": "A, C, dan D adalah komponen utama Negeri-Negeri Selat.",
                "D": "A, C, dan D adalah komponen utama Negeri-Negeri Selat."
            }
        }
    },
    {
        id: 35,
        question: "Pada era kolonial, kemasukan tenaga buruh secara besar-besaran dari China dan India oleh British adalah untuk bekerja di sektor __________.",
        options: [
            { id: "A", text: "Pertanian sara diri dan perikanan." },
            { id: "B", text: "Pentadbiran awam dan pendidikan." },
            { id: "C", text: "Lombong bijih timah dan ladang getah." },
            { id: "D", text: "Pembinaan kapal dan perdagangan maritim." }
        ],
        correctAnswer: "C",
        explanation: {
            correct: "Jawapan yang betul ialah C. Sumber 1407 menyatakan pada era kolonial, British menguasai ekonomi dengan \"pembukaan lombong bijih timah dan ladang getah serta kemasukan tenaga buruh secara besar-besaran dari China dan India\".",
            incorrect: {
                "A": "A adalah ciri ekonomi era prakolonial.",
                "B": "B dan D bukan sektor utama yang mendorong kemasukan buruh tersebut.",
                "D": "B dan D bukan sektor utama yang mendorong kemasukan buruh tersebut."
            }
        }
    },
    {
        id: 36,
        question: "Apakah nama perjanjian pada tahun 1824 yang mengesahkan pembahagian pengaruh antara Inggeris dan Belanda di Alam Melayu?",
        options: [
            { id: "A", text: "Perjanjian Pangkor" },
            { id: "B", text: "Perjanjian Burney" },
            { id: "C", text: "Perjanjian Bangkok" },
            { id: "D", text: "Perjanjian Inggeris-Belanda (Perjanjian London)" }
        ],
        correctAnswer: "D",
        explanation: {
            correct: "Jawapan yang betul ialah D. Sumber 901 menyatakan penjajahan Belanda berakhir dan pendudukan Inggeris disahkan melalui \"Perjanjian Inggeris-Belanda (Perjanjian London) pada tahun 1824\".",
            incorrect: {
                "A": "A ialah perjanjian campur tangan Inggeris di Perak.",
                "B": "B dan C adalah perjanjian antara Inggeris dengan Siam.",
                "C": "B dan C adalah perjanjian antara Inggeris dengan Siam."
            }
        }
    },
    {
        id: 37,
        question: "'Tapak Integrasi' dalam konteks sejarah Malaysia merujuk kepada...",
        options: [
            { id: "A", text: "Kawasan penempatan kaum tertentu." },
            { id: "B", text: "Ruang dan titik pertemuan antara kelompok strategik untuk berunding." },
            { id: "C", text: "Dasar-dasar kerajaan yang bersifat perpaduan." },
            { id: "D", text: "Simbol-simbol kenegaraan seperti bendera dan lagu." }
        ],
        correctAnswer: "B",
        explanation: {
            correct: "Jawapan yang betul ialah B. Sumber 1594 mendefinisikan 'TAPAK INTEGRASI' sebagai \"Ruang dan titik pertemuan antara kelompok strategik di Malaysia (etnik, agama, parti politik, NGO, masyarakat sivil dll.), pelbagai bentuk\". Contohnya ialah CLC dan parti politik bersifat muafakat.",
            incorrect: {
                "A": "Pilihan A, C, dan D adalah elemen-elemen berkaitan perpaduan tetapi tidak merujuk secara spesifik kepada konsep 'Tapak Integrasi' seperti yang didefinisikan.",
                "C": "Pilihan A, C, dan D adalah elemen-elemen berkaitan perpaduan tetapi tidak merujuk secara spesifik kepada konsep 'Tapak Integrasi' seperti yang didefinisikan.",
                "D": "Pilihan A, C, dan D adalah elemen-elemen berkaitan perpaduan tetapi tidak merujuk secara spesifik kepada konsep 'Tapak Integrasi' seperti yang didefinisikan."
            }
        }
    },
    {
        id: 38,
        question: "Zaman Proto Sejarah di Alam Melayu ditandai dengan kewujudan __________.",
        options: [
            { id: "A", text: "Petempatan awal zaman Paleolitik." },
            { id: "B", text: "Kerajaan purba seperti Langkasuka dan Gangga Negara." },
            { id: "C", text: "Kerajaan Kesultanan Melayu Melaka." },
            { id: "D", text: "Negara-bangsa Malaysia yang merdeka." }
        ],
        correctAnswer: "B",
        explanation: {
            correct: "Jawapan yang betul ialah B. Nota secara jelas mengkategorikan Zaman Proto Sejarah dengan \"Kewujudan kerajaan purba / kerajaan awal\" dan menyenaraikan contoh seperti 'Langkasuka', 'Kedah Tua', dan 'Gangga Negara'.",
            incorrect: {
                "A": "A merujuk kepada Zaman Pra Sejarah.",
                "C": "C merujuk kepada Zaman Pensejarahan.",
                "D": "D merujuk kepada Zaman Sejarah Moden."
            }
        }
    },
    {
        id: 39,
        question: "Apakah kesan utama kedatangan Portugis di Melaka terhadap struktur masyarakat tempatan?",
        options: [
            { id: "A", text: "Pengenalan sistem tulisan Jawi." },
            { id: "B", text: "Kewujudan masyarakat Serani hasil perkahwinan campur." },
            { id: "C", text: "Pengukuhan sistem feudal Melayu." },
            { id: "D", text: "Larangan penggunaan bahasa Melayu." }
        ],
        correctAnswer: "B",
        explanation: {
            correct: "Jawapan yang betul ialah B. Sumber 885 menyatakan \"Kesan utama kewujudan masyarakat Serani - perkahwinan campur\". Portugis juga memperkenalkan tulisan rumi.",
            incorrect: {
                "A": "A salah kerana tulisan Jawi berasal dari pengaruh Arab-Islam.",
                "C": "C salah kerana kedatangan Portugis membawa kepada keruntuhan Kesultanan Melayu Melaka.",
                "D": "D salah kerana nota menyebut tentang wujudnya perkataan pinjaman Portugis dalam Bahasa Melayu, menandakan ia terus digunakan."
            }
        }
    },
    {
        id: 40,
        question: "Revolusi Perancis memperkenalkan slogan penting yang mempengaruhi pemikiran politik moden. Apakah slogan tersebut?",
        options: [
            { id: "A", text: "Kebebasan, Persamaan, Persaudaraan (Liberty, Equality, Fraternity)" },
            { id: "B", text: "Agama, Raja, Negara" },
            { id: "C", text: "Kehidupan, Kebebasan, Pengejaran Kebahagiaan" },
            { id: "D", text: "Tiada Cukai Tanpa Perwakilan" }
        ],
        correctAnswer: "A",
        explanation: {
            correct: "Jawapan yang betul ialah A. Sumber 1001 menyatakan bahawa Revolusi Perancis membawa kepada slogan \"Liberty, Equality, Fraternity, Nation\".",
            incorrect: {
                "B": "Pilihan B, C, dan D adalah slogan dari konteks sejarah dan pergerakan yang berbeza dan tidak disebut berkaitan Revolusi Perancis dalam nota.",
                "C": "Pilihan B, C, dan D adalah slogan dari konteks sejarah dan pergerakan yang berbeza dan tidak disebut berkaitan Revolusi Perancis dalam nota.",
                "D": "Pilihan B, C, dan D adalah slogan dari konteks sejarah dan pergerakan yang berbeza dan tidak disebut berkaitan Revolusi Perancis dalam nota."
            }
        }
    },
    {
        id: 41,
        question: "Dalam kerangka IPNas 2018, apakah tiga elemen di bawah teras 'Penyatupaduan'?",
        options: [
            { id: "A", text: "Etos Bangsa, Kesepaduan Sosial, Defisit Sosial" },
            { id: "B", text: "Etnik, Hubungan Sosial Rentas Etnik, Tadbir Urus & Pembangunan" },
            { id: "C", text: "Detik Perpaduan, Detik Perbezaan, Jarak Sosial" },
            { id: "D", text: "Agama, Bahasa, Politik Federalisme" }
        ],
        correctAnswer: "B",
        explanation: {
            correct: "Jawapan yang betul ialah B. Gambar rajah Teras Utama Indeks Perpaduan Nasional 2018 menunjukkan di bawah '03 PENYATUPADUAN' terdapat komponen 'Etnik (Tahap Keetnikan, Batas Etnik)', 'Hubungan Sosial Rentas Etnik', dan 'Tadbir Urus & Pembangunan (TUP)'.",
            incorrect: {
                "A": "A adalah komponen di bawah teras 'Kesepaduan'.",
                "C": "C adalah komponen di bawah teras 'Perpaduan'.",
                "D": "D adalah contoh-contoh aspek di mana kesepaduan sosial dianalisis, bukan teras utama dalam model IPNas itu."
            }
        }
    },
    {
        id: 42,
        question: "'Revolusi Mental' yang disebut dalam rujukan Topik 3 adalah karya oleh __________.",
        options: [
            { id: "A", text: "Tun Abdul Razak" },
            { id: "B", text: "Muhammad Yusoff Hashim" },
            { id: "C", text: "Senu Abdul Rahman" },
            { id: "D", text: "Wan Norhasniah Wan Husin" }
        ],
        correctAnswer: "C",
        explanation: {
            correct: "Jawapan yang betul ialah C. Senarai rujukan pada akhir Topik 3 dengan jelas menyenaraikan: \"Senu Abdul Rahman. 2002. Revolusi Mental. Utusan Publications & Distributors Sdn. Bhd\".",
            incorrect: {
                "A": "A, B, dan D adalah tokoh dan penulis yang penting, tetapi buku 'Revolusi Mental' adalah karya Senu Abdul Rahman.",
                "B": "A, B, dan D adalah tokoh dan penulis yang penting, tetapi buku 'Revolusi Mental' adalah karya Senu Abdul Rahman.",
                "D": "A, B, dan D adalah tokoh dan penulis yang penting, tetapi buku 'Revolusi Mental' adalah karya Senu Abdul Rahman."
            }
        }
    },
    {
        id: 43,
        question: "Pengaruh peradaban China ke atas kebudayaan masyarakat Melayu dapat dilihat melalui perkara berikut, KECUALI...",
        options: [
            { id: "A", text: "Serapan beberapa perkataan Cina ke dalam bahasa Melayu." },
            { id: "B", text: "Kewujudan komuniti Baba dan Nyonya." },
            { id: "C", text: "Pengenalan sistem tulisan rumi." },
            { id: "D", text: "Pengaruh dalam beberapa jenis makanan dan pakaian." }
        ],
        correctAnswer: "C",
        explanation: {
            correct: "Jawapan yang betul ialah C. Pengenalan sistem tulisan rumi adalah pengaruh daripada peradaban Barat, khususnya Portugis.",
            incorrect: {
                "A": "A, B, dan D adalah semua contoh pengaruh peradaban Cina yang disenaraikan dalam nota.",
                "B": "A, B, dan D adalah semua contoh pengaruh peradaban Cina yang disenaraikan dalam nota.",
                "D": "A, B, dan D adalah semua contoh pengaruh peradaban Cina yang disenaraikan dalam nota."
            }
        }
    },
    {
        id: 44,
        question: "Menurut perspektif falsafah dan pemikiran moden, manusia...",
        options: [
            { id: "A", text: "hanya perlu memilih cara untuk mencapai matlamat yang telah ditetapkan." },
            { id: "B", text: "perlu mengintegrasikan ilmu agama dan ilmu alat." },
            { id: "C", text: "berhak menentukan matlamat hidupnya dan cara untuk mencapainya." },
            { id: "D", text: "harus berpegang kepada adat dan tradisi semata-mata." }
        ],
        correctAnswer: "C",
        explanation: {
            correct: "Jawapan yang betul ialah C. Sumber 1445 menyatakan \"Perspektif ini [moden] berpandangan manusia berhak menentukan matlamat hidupnya dan berhak memilih cara bagaimana untuk mengecapi matlamat tersebut\".",
            incorrect: {
                "A": "A adalah ciri pemikiran tradisional.",
                "B": "B adalah pandangan Ibn Khaldun.",
                "D": "D bertentangan dengan semangat pemikiran moden yang menekankan rasional dan hak individu."
            }
        }
    },
    {
        id: 45,
        question: "Antara tiga kuasa kolonial Barat yang pernah menjajah Tanah Melayu, kuasa manakah yang penjajahannya tidak banyak meninggalkan kesan signifikan terhadap peradaban Melayu selain di Melaka?",
        options: [
            { id: "A", text: "Portugis" },
            { id: "B", text: "Belanda" },
            { id: "C", text: "British" },
            { id: "D", text: "Sepanyol" }
        ],
        correctAnswer: "B",
        explanation: {
            correct: "Jawapan yang betul ialah B. Sumber 902 menyatakan, \"Penjajahan Belanda tidak banyak meninggalkan kesan terhadap peradaban Melayu\". Walaupun mereka menjajah Melaka untuk tempoh yang lama, pusat utama mereka ialah di Betawi dan kesannya tidak sebesar pengaruh British.",
            incorrect: {
                "A": "A (Portugis) meninggalkan kesan seperti masyarakat Serani dan tulisan rumi.",
                "C": "C (British) meninggalkan kesan yang sangat mendalam pada sistem pentadbiran, undang-undang, ekonomi dan sosial.",
                "D": "D (Sepanyol) tidak pernah menjajah Tanah Melayu."
            }
        }
    },
    {
        id: 46,
        question: "Apakah yang dimaksudkan dengan istilah 'Segregasi' dalam konteks hubungan etnik?",
        options: [
            { id: "A", text: "Percantuman biologi melalui perkahwinan campur." },
            { id: "B", text: "Penerimaan budaya etnik lain tanpa menggugat budaya sendiri." },
            { id: "C", text: "Proses penyerapan budaya majoriti oleh kumpulan minoriti." },
            { id: "D", text: "Pemisahan atau pengasingan antara satu etnik dengan etnik yang lain." }
        ],
        correctAnswer: "D",
        explanation: {
            correct: "Jawapan yang betul ialah D. Sumber 1290 mendefinisikan segregasi sebagai \"Pemisahan atau pengasingan antara etnik dengan etnik yang lain\" atau keadaan di mana \"individu atau kumpulan sosial tertentu dipisahkan atau diasingkan dengan individu atau kumpulan sosial lain\".",
            incorrect: {
                "A": "A adalah Amalgamasi.",
                "B": "B adalah Akomodasi.",
                "C": "C adalah Asimilasi."
            }
        }
    },
    {
        id: 47,
        question: "Zaman apakah yang menyaksikan kemunculan Kerajaan Kesultanan Melayu Melaka dan permulaan pembentukan masyarakat kepelbagaian melalui perdagangan?",
        options: [
            { id: "A", text: "Zaman Pra Sejarah" },
            { id: "B", text: "Zaman Proto Sejarah" },
            { id: "C", text: "Zaman Pensejarahan" },
            { id: "D", text: "Zaman Sejarah Moden" }
        ],
        correctAnswer: "C",
        explanation: {
            correct: "Jawapan yang betul ialah C. Garis masa perkembangan sejarah dalam nota mengkategorikan \"Kewujudan Kerajaan Kesultanan Melayu Melaka\" dan \"Bermula pembentukan masyarakat kepelbagaian - perdagangan\" di bawah Zaman Pensejarahan.",
            incorrect: {
                "A": "A, B, dan D merujuk kepada peringkat sejarah yang lain seperti yang dihuraikan dalam nota.",
                "B": "A, B, dan D merujuk kepada peringkat sejarah yang lain seperti yang dihuraikan dalam nota.",
                "D": "A, B, dan D merujuk kepada peringkat sejarah yang lain seperti yang dihuraikan dalam nota."
            }
        }
    },
    {
        id: 48,
        question: "Teknologi maklumat dan media digital yang dikuasai oleh Barat dilihat sebagai satu cabaran yang boleh mempengaruhi nilai dan etika melalui proses yang dikenali sebagai __________.",
        options: [
            { id: "A", text: "Penjajahan fizikal" },
            { id: "B", text: "Penjajahan pemikiran dan budaya" },
            { id: "C", text: "Pertukaran teknologi" },
            { id: "D", text: "Kerjasama ekonomi" }
        ],
        correctAnswer: "B",
        explanation: {
            correct: "Jawapan yang betul ialah B. Sumber 1504 menyatakan, \"Budaya Barat telah mempengaruhi perkembangan teknologi dan komunikasi dan menyerap masuk dalam kehidupan peradaban bukan Barat melalui bentuk penjajahan pemikiran dan budaya\".",
            incorrect: {
                "A": "A merujuk kepada era kolonialisme fizikal.",
                "C": "C dan D adalah istilah yang lebih neutral dan tidak menangkap aspek cabaran seperti yang dinyatakan dalam nota.",
                "D": "C dan D adalah istilah yang lebih neutral dan tidak menangkap aspek cabaran seperti yang dinyatakan dalam nota."
            }
        }
    },
    {
        id: 49,
        question: "Peradaban Melayu Islam yang berkembang di Melaka, Pattani dan Acheh adalah hasil penyerapan unsur dan tradisi tamadun Islam yang berasal dari __________.",
        options: [
            { id: "A", text: "Eropah" },
            { id: "B", text: "China" },
            { id: "C", text: "India" },
            { id: "D", text: "Timur Tengah" }
        ],
        correctAnswer: "D",
        explanation: {
            correct: "Jawapan yang betul ialah D. Nota menyatakan dengan jelas bahawa pengaruh utama pengembangan agama Islam datang dari Timur Tengah. Sumber 818 menyatakan \"Peradaban Melayu telah menyerap unsur dan tradisi tamadun Islam\" yang akhirnya melahirkan pusat tamadun Melayu Islam.",
            incorrect: {
                "A": "A, B, dan C adalah peradaban lain yang turut memberi pengaruh kepada Alam Melayu, tetapi sumber utama tamadun Islam adalah dari Timur Tengah.",
                "B": "A, B, dan C adalah peradaban lain yang turut memberi pengaruh kepada Alam Melayu, tetapi sumber utama tamadun Islam adalah dari Timur Tengah.",
                "C": "A, B, dan C adalah peradaban lain yang turut memberi pengaruh kepada Alam Melayu, tetapi sumber utama tamadun Islam adalah dari Timur Tengah."
            }
        }
    },
    {
        id: 50,
        question: "Apakah kerisauan utama yang dinyatakan dalam nota berkaitan percampuran nilai etika pada zaman pascakolonial?",
        options: [
            { id: "A", text: "Kebanjiran teknologi dari Barat." },
            { id: "B", text: "Kemerosotan ekonomi negara." },
            { id: "C", text: "Kemerosotan budi pekerti, tingkah laku dan budi bahasa." },
            { id: "D", text: "Kehilangan penguasaan bahasa ibunda." }
        ],
        correctAnswer: "C",
        explanation: {
            correct: "Jawapan yang betul ialah C. Sumber 125 menyatakan dengan jelas: \"Kerisauan kita ialah budi pekerti, tingkah laku dan budi bahasa kita merosot disebabkan kegagalan kita mempelajari dan menghayati E&P negara kita\".",
            incorrect: {
                "A": "A, B, dan D adalah isu-isu yang mungkin relevan, tetapi kerisauan yang spesifik disebut dalam konteks etika pascakolonial dalam nota ialah kemerosotan budi bahasa dan pekerti.",
                "B": "A, B, dan D adalah isu-isu yang mungkin relevan, tetapi kerisauan yang spesifik disebut dalam konteks etika pascakolonial dalam nota ialah kemerosotan budi bahasa dan pekerti.",
                "D": "A, B, dan D adalah isu-isu yang mungkin relevan, tetapi kerisauan yang spesifik disebut dalam konteks etika pascakolonial dalam nota ialah kemerosotan budi bahasa dan pekerti."
            }
        }
    }
];
