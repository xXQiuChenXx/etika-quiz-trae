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
                "A": "A salah kerana era ini didominasi oleh konsep 'adab' dan 'adat' tradisional.",
                "C": "C salah kerana era pascakolonial adalah era gabungan etika moden dan tradisional.",
                "D": "D salah kerana era ini didominasi oleh konsep 'adab' dan 'adat' tradisional."
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
                "A": "Pilihan A menyenaraikan elemen-elemen yang relevan dengan etika, tetapi bukan tiga faktor kerangka analisis utama seperti yang dinyatakan dalam sinopsis.",
                "C": "Pilihan C menyenaraikan elemen-elemen yang relevan dengan etika, tetapi bukan tiga faktor kerangka analisis utama seperti yang dinyatakan dalam sinopsis.",
                "D": "Pilihan D menyenaraikan elemen-elemen yang relevan dengan etika, tetapi bukan tiga faktor kerangka analisis utama seperti yang dinyatakan dalam sinopsis."
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
                "A": "A adalah istilah Melayu yang digunakan untuk menjelaskan peningkatan hidup, tetapi tidak meluas seperti 'tamadun'.",
                "C": "C salah kerana 'tamadun' adalah istilah Arab yang diterima pakai selepas kedatangan Islam dan menjadi sinonim dengan 'peradaban'.",
                "D": "D adalah istilah Melayu yang digunakan untuk menjelaskan peningkatan hidup, tetapi tidak meluas seperti 'tamadun'."
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
    }
];