// Data Soalan Kuiz
// Data ini mengandungi 50 soalan aneka pilihan berdasarkan Topik 1 hingga 4.
// Setiap objek soalan merangkumi:
// - id: Pengenal pasti unik untuk soalan.
// - question: Teks soalan dengan awalan topik.
// - options: Satu tatasusunan (array) objek pilihan jawapan (A, B, C, D).
// - correctAnswer: ID pilihan jawapan yang betul.
// - explanation: Objek yang mengandungi penjelasan untuk jawapan yang betul dan salah.

const quizQuestions = [
    {
        id: 1,
        question: "[Topik 1] Apakah yang dimaksudkan dengan 'adab' dalam konteks etika tradisional masyarakat Melayu?",
        options: [
            { id: "A", text: "Peraturan rasmi dalam upacara pertabalan diraja." },
            { id: "B", text: "Tingkah laku dan budi pekerti yang halus serta sopan." },
            { id: "C", text: "Undang-undang bertulis yang dikuatkuasakan oleh pemerintah." },
            { id: "D", text: "Kebiasaan yang diamalkan oleh sesuatu kaum berkaitan perkahwinan." }
        ],
        correctAnswer: "B",
        explanation: {
            correct: "Jawapan B adalah betul. 'Adab' secara spesifiknya merujuk kepada kelakuan, budi bahasa, dan kesopanan individu dalam interaksi sosial.",
            incorrect: {
                "A": "Pilihan A salah kerana ia merujuk kepada 'adat istiadat'.",
                "C": "Pilihan C salah kerana ia merujuk kepada sistem perundangan formal.",
                "D": "Pilihan D salah kerana ia adalah definisi bagi 'adat resam'."
            }
        }
    },
    {
        id: 2,
        question: "[Topik 1] Manakah antara berikut paling tepat menerangkan evolusi etika dalam 'acuan Malaysia' mengikut susur masa?",
        options: [
            { id: "A", text: "Etika moden menggantikan sepenuhnya etika tradisional selepas era kolonial." },
            { id: "B", text: "Etika tradisional dan moden wujud secara berasingan tanpa sebarang pengaruh antara satu sama lain." },
            { id: "C", text: "Gabungan etika tradisional (adab, adat) dan etika moden (etika, etos, etiket) membentuk etika pascakolonial." },
            { id: "D", text: "Etika di Malaysia hanya mula diperkenalkan semasa zaman kolonial oleh penjajah Eropah." }
        ],
        correctAnswer: "C",
        explanation: {
            correct: "Jawapan C adalah betul. 'Acuan Malaysia' merujuk kepada percampuran dan gabungan nilai-nilai etika dari zaman prakolonial dengan etika yang diperkenalkan semasa zaman kolonial, yang terus berkembang pada era pascakolonial.",
            incorrect: {
                "A": "Pilihan A salah. Etika moden tidak menggantikan sepenuhnya etika tradisional; sebaliknya, kedua-duanya saling mempengaruhi.",
                "B": "Pilihan B salah. Terdapat proses sulaman dan percampuran antara kedua-dua bentuk etika.",
                "D": "Pilihan D salah. Etika dalam bentuk 'adab' dan 'adat' sudah wujud lama dalam peradaban Melayu sebelum kedatangan penjajah."
            }
        }
    },
    {
        id: 3,
        question: "[Topik 1] Apakah perbezaan utama antara 'adat resam' dan 'adat istiadat'?",
        options: [
            { id: "A", text: "Adat resam diamalkan oleh semua kaum, manakala adat istiadat hanya untuk golongan diraja." },
            { id: "B", text: "Adat resam merujuk kepada kebiasaan dalam kehidupan harian, manakala adat istiadat merujuk kepada upacara rasmi." },
            { id: "C", text: "Adat resam adalah peraturan tidak bertulis, manakala adat istiadat adalah undang-undang bertulis." },
            { id: "D", text: "Adat resam berasal dari pengaruh Barat, manakala adat istiadat berasal dari tradisi tempatan." }
        ],
        correctAnswer: "B",
        explanation: {
            correct: "Jawapan B adalah betul. 'Adat resam' adalah amalan kebiasaan dalam kitaran hidup (cth: perkahwinan), manakala 'adat istiadat' adalah tatacara dalam majlis formal (cth: pertabalan).",
            incorrect: {
                "A": "Pilihan A salah. Adat istiadat tidak terhad kepada golongan diraja sahaja (cth: istiadat konvokesyen).",
                "C": "Pilihan C salah. Kedua-duanya lazimnya adalah peraturan tidak bertulis yang diwarisi.",
                "D": "Pilihan D salah. Kedua-duanya berakar umbi daripada tradisi tempatan."
            }
        }
    },
    {
        id: 4,
        question: "[Topik 1] Istilah 'etiket' yang diperkenalkan semasa era kolonial merujuk kepada?",
        options: [
            { id: "A", text: "Prinsip moral asas yang menentukan benar atau salah." },
            { id: "B", text: "Peraturan kesopanan dalam situasi sosial atau profesional tertentu." },
            { id: "C", text: "Ciri-ciri utama yang menjadi pegangan sesuatu bangsa." },
            { id: "D", text: "Budi pekerti halus yang perlu ada pada setiap individu." }
        ],
        correctAnswer: "B",
        explanation: {
            correct: "Jawapan B adalah betul. 'Etiket' merujuk kepada peraturan spesifik tentang tingkah laku yang diterima dalam majlis sosial, seperti etiket di meja makan.",
            incorrect: {
                "A": "Pilihan A adalah definisi 'etika'.",
                "C": "Pilihan C adalah definisi 'etos'.",
                "D": "Pilihan D lebih merujuk kepada 'adab'."
            }
        }
    },
    {
        id: 5,
        question: "[Topik 1] Bagaimanakah kerangka biografi boleh digunakan untuk menganalisis penghayatan etika dan peradaban?",
        options: [
            { id: "A", text: "Dengan mengkaji perkembangan sejarah sesebuah negara." },
            { id: "B", text: "Dengan melihat bagaimana institusi seperti negara dan pasaran mempengaruhi tingkah laku." },
            { id: "C", text: "Dengan meneliti bagaimana pengalaman hidup individu, keluarga, dan komuniti membentuk nilai mereka." },
            { id: "D", text: "Dengan membandingkan struktur sosial masyarakat tradisional dan moden." }
        ],
        correctAnswer: "C",
        explanation: {
            correct: "Jawapan C adalah betul. Kerangka biografi memberi tumpuan kepada riwayat hidup atau pengalaman peribadi seseorang dan komuniti terdekatnya dalam membentuk pemahaman dan amalan etika.",
            incorrect: {
                "A": "Pilihan A adalah analisis melalui kerangka sejarah.",
                "B": "Pilihan B adalah analisis melalui kerangka struktur sosial.",
                "D": "Pilihan D juga adalah analisis melalui kerangka struktur sosial."
            }
        }
    },
    {
        id: 6,
        question: "[Topik 2] Apakah perubahan utama dalam pemikiran etika di Eropah semasa zaman 'Enlightenment'?",
        options: [
            { id: "A", text: "Pengukuhan kuasa gereja dalam menentukan semua prinsip moral." },
            { id: "B", text: "Penekanan kepada wahyu sebagai satu-satunya sumber etika." },
            { id: "C", text: "Pemisahan antara agama dan politik, dengan penekanan pada rasionaliti dan hak asasi." },
            { id: "D", text: "Kemunculan sistem feudal yang mengikat individu kepada tradisi." }
        ],
        correctAnswer: "C",
        explanation: {
            correct: "Jawapan C adalah betul. Zaman Pencerahan (Enlightenment) membawa kepada idea pemisahan gereja daripada negara, dan mempopularkan konsep seperti hak asasi manusia dan pemerintahan berasaskan undang-undang rasional.",
            incorrect: {
                "A": "Pilihan A salah. Zaman Enlightenment menyaksikan pengurangan kuasa gereja.",
                "B": "Pilihan B salah. Zaman ini menekankan akal dan penaakulan (rasionaliti).",
                "D": "Pilihan D salah. Sistem feudal merosot selepas zaman ini."
            }
        }
    },
    {
        id: 7,
        question: "[Topik 2] Apakah kesan utama kolonialisme terhadap konsep etika dan peradaban di Tanah Melayu?",
        options: [
            { id: "A", text: "Pengukuhan sistem pentadbiran berasaskan agama dan adat." },
            { id: "B", text: "Pengenalan sistem pentadbiran yang memisahkan urusan agama daripada urusan negara." },
            { id: "C", text: "Asimilasi sepenuhnya budaya Barat ke dalam masyarakat tempatan." },
            { id: "D", text: "Pengekalan struktur sosial tradisional tanpa sebarang perubahan." }
        ],
        correctAnswer: "B",
        explanation: {
            correct: "Jawapan B adalah betul. British memperkenalkan sistem pentadbiran sekular di mana kuasa Sultan dihadkan kepada hal ehwal agama Islam dan adat, manakala pentadbiran negara diuruskan oleh mereka.",
            incorrect: {
                "A": "Pilihan A salah. Kolonialisme melemahkan sistem pentadbiran tradisional.",
                "C": "Pilihan C salah. Asimilasi sepenuhnya tidak berlaku.",
                "D": "Pilihan D salah. Struktur sosial mengalami perubahan besar."
            }
        }
    },
    {
        id: 8,
        question: "[Topik 2] Manakah antara berikut merupakan pusat peradaban Melayu-Islam yang terawal di Kepulauan Melayu?",
        options: [
            { id: "A", text: "Kerajaan Melaka." },
            { id: "B", text: "Kerajaan Johor-Riau." },
            { id: "C", text: "Kerajaan Perlak dan Samudera-Pasai." },
            { id: "D", text: "Kerajaan Srivijaya." }
        ],
        correctAnswer: "C",
        explanation: {
            correct: "Jawapan C adalah betul. Kerajaan Islam di Perlak (abad ke-9) dan Samudera-Pasai (abad ke-11) diiktiraf sebagai antara pusat penyebaran Islam yang paling awal di rantau ini.",
            incorrect: {
                "A": "Pilihan A salah. Melaka adalah penting tetapi bukan yang terawal.",
                "B": "Pilihan B salah. Johor-Riau muncul selepas kejatuhan Melaka.",
                "D": "Pilihan D salah. Srivijaya adalah empayar maritim yang dipengaruhi oleh ajaran Buddha."
            }
        }
    },
    {
        id: 9,
        question: "[Topik 2] Apakah yang dimaksudkan dengan 'peradaban kacukan' (hybrid civilization) dalam konteks Malaysia kontemporari?",
        options: [
            { id: "A", text: "Peradaban yang hanya mengamalkan nilai-nilai dari Timur." },
            { id: "B", text: "Peradaban yang menolak sepenuhnya pengaruh globalisasi." },
            { id: "C", text: "Peradaban yang terbentuk hasil gabungan pelbagai peradaban seperti Melayu-Islam, Cina, India, dan Barat." },
            { id: "D", text: "Peradaban yang kembali kepada amalan zaman prakolonial." }
        ],
        correctAnswer: "C",
        explanation: {
            correct: "Jawapan C adalah betul. Peradaban Malaysia hari ini adalah hasil proses sejarah di mana pelbagai unsur peradaban dunia bertemu, berinteraksi, dan tersulam membentuk satu identiti yang rencam.",
            incorrect: {
                "A": "Pilihan A salah. Peradaban Malaysia mempunyai pengaruh Timur dan Barat.",
                "B": "Pilihan B salah. Malaysia sangat terpengaruh dengan arus globalisasi.",
                "D": "Pilihan D salah. Mustahil untuk kembali sepenuhnya kepada amalan prakolonial."
            }
        }
    },
    {
        id: 10,
        question: "[Topik 2] Bagaimanakah pengaruh peradaban China dapat dilihat dalam kebudayaan masyarakat tempatan di Malaysia?",
        options: [
            { id: "A", text: "Melalui pengenalan sistem tulisan Rumi." },
            { id: "B", text: "Melalui kewujudan komuniti Baba dan Nyonya serta serapan perkataan Cina ke dalam Bahasa Melayu." },
            { id: "C", text: "Melalui pengenalan sistem perundangan sivil." },
            { id: "D", text: "Melalui konsep hierarki dalam institusi pemerintahan beraja." }
        ],
        correctAnswer: "B",
        explanation: {
            correct: "Jawapan B adalah betul. Komuniti Baba dan Nyonya adalah contoh jelas hasil asimilasi budaya Cina dan Melayu. Selain itu, banyak perkataan seperti 'tauke' dan 'kongsi' berasal dari bahasa Cina.",
            incorrect: {
                "A": "Pilihan A salah. Tulisan Rumi diperkenalkan oleh kuasa Barat.",
                "C": "Pilihan C salah. Sistem perundangan sivil adalah warisan kolonial British.",
                "D": "Pilihan D salah. Konsep hierarki pemerintahan beraja lebih dipengaruhi oleh peradaban India."
            }
        }
    },
    {
        id: 11,
        question: "[Topik 3] Apakah yang dimaksudkan dengan proses 'akomodasi' dalam konteks hubungan etnik?",
        options: [
            { id: "A", text: "Kumpulan minoriti kehilangan identiti asal dan menerima sepenuhnya budaya majoriti." },
            { id: "B", text: "Setiap kumpulan etnik mempertahankan budaya masing-masing tetapi hidup secara harmoni dan saling menghormati." },
            { id: "C", text: "Percampuran biologi melalui perkahwinan campur yang melahirkan satu kelompok baharu." },
            { id: "D", text: "Pemisahan kumpulan etnik berdasarkan tempat tinggal dan sistem pendidikan." }
        ],
        correctAnswer: "B",
        explanation: {
            correct: "Jawapan B adalah betul. Akomodasi (A+B+C = A+B+C) ialah proses di mana kumpulan etnik menyedari dan menghormati norma etnik lain tanpa menggugat identiti budaya sendiri.",
            incorrect: {
                "A": "Pilihan A adalah definisi 'asimilasi'.",
                "C": "Pilihan C adalah definisi 'amalgamasi'.",
                "D": "Pilihan D adalah definisi 'segregasi'."
            }
        }
    },
    {
        id: 12,
        question: "[Topik 3] Pembentukan masyarakat Baba dan Nyonya di Melaka adalah contoh terbaik bagi proses?",
        options: [
            { id: "A", text: "Segregasi." },
            { id: "B", text: "Akomodasi." },
            { id: "C", text: "Akulturasi dan Amalgamasi." },
            { id: "D", text: "Polarisasi." }
        ],
        correctAnswer: "C",
        explanation: {
            correct: "Jawapan C adalah betul. Proses ini melibatkan 'akulturasi' (penerimaan unsur budaya Melayu) dan 'amalgamasi' (perkahwinan campur antara pedagang Cina dengan wanita tempatan).",
            incorrect: {
                "A": "Pilihan A salah. Segregasi ialah pemisahan, bukan percantuman.",
                "B": "Pilihan B salah. Akomodasi melibatkan pengekalan budaya asal.",
                "D": "Pilihan D salah. Polarisasi merujuk kepada proses pengasingan antara kumpulan."
            }
        }
    },
    {
        id: 13,
        question: "[Topik 3] Dasar Ekonomi Baru (DEB) mempunyai dua objektif utama. Apakah objektif tersebut?",
        options: [
            { id: "A", text: "Memajukan sektor perindustrian dan mengurangkan import." },
            { id: "B", text: "Membasmi kemiskinan tanpa mengira kaum dan menyusun semula masyarakat." },
            { id: "C", text: "Meningkatkan pelaburan asing dan memodenkan sektor pertanian." },
            { id: "D", text: "Memperkenalkan sistem pendidikan vernakular dan menggalakkan perniagaan kecil." }
        ],
        correctAnswer: "B",
        explanation: {
            correct: "Jawapan B adalah betul. DEB dirangka untuk menangani ketidakseimbangan ekonomi antara kaum melalui dua matlamat: membasmi kemiskinan dan menyusun semula masyarakat untuk menghapuskan pengenalan kaum mengikut fungsi ekonomi.",
            incorrect: {
                "A": "Pilihan A salah. Ini adalah strategi pembangunan ekonomi umum.",
                "C": "Pilihan C salah. Ini bukan objektif teras DEB.",
                "D": "Pilihan D salah. DEB tidak memperkenalkan sistem pendidikan vernakular."
            }
        }
    },
    {
        id: 14,
        question: "[Topik 3] Apakah yang dimaksudkan dengan 'segregasi' dalam konteks hubungan etnik di Tanah Melayu semasa zaman penjajahan?",
        options: [
            { id: "A", text: "Proses perkahwinan campur antara kaum." },
            { id: "B", text: "Pemisahan kaum melalui dasar yang menetapkan perbezaan tempat tinggal, pekerjaan, dan pendidikan." },
            { id: "C", text: "Penerimaan budaya kaum lain secara terbuka dalam kehidupan seharian." },
            { id: "D", text: "Penyatuan semua kaum di bawah satu sistem politik yang seragam." }
        ],
        correctAnswer: "B",
        explanation: {
            correct: "Jawapan B adalah betul. Dasar 'pecah dan perintah' oleh British mewujudkan segregasi, di mana kaum Melayu di kampung, India di estet, dan Cina di bandar, dengan sistem pendidikan yang berbeza.",
            incorrect: {
                "A": "Pilihan A adalah amalgamasi.",
                "C": "Pilihan C lebih menjurus kepada akomodasi atau akulturasi.",
                "D": "Pilihan D salah. Penyatuan tidak berlaku; sebaliknya, pemisahan yang wujud."
            }
        }
    },
    {
        id: 15,
        question: "[Topik 3] Bagaimanakah kedudukan strategik Selat Melaka menyumbang kepada pembentukan masyarakat yang pelbagai?",
        options: [
            { id: "A", text: "Ia menjadi benteng pertahanan yang menghalang kemasukan orang luar." },
            { id: "B", text: "Ia menjadi laluan perdagangan utama yang menemukan pelbagai peradaban." },
            { id: "C", text: "Ia menggalakkan aktiviti perikanan sara diri sahaja." },
            { id: "D", text: "Ia menyebabkan pengasingan antara penduduk Semenanjung dan Sumatera." }
        ],
        correctAnswer: "B",
        explanation: {
            correct: "Jawapan B adalah betul. Sebagai laluan perkapalan tersibuk, Selat Melaka menjadi 'gelanggang kepelbagaian' di mana pedagang dari pelbagai peradaban bertemu, berinteraksi, dan menetap.",
            incorrect: {
                "A": "Pilihan A salah. Selat Melaka adalah laluan terbuka.",
                "C": "Pilihan C salah. Ia menggalakkan perdagangan antarabangsa.",
                "D": "Pilihan D salah. Ia menghubungkan, bukan memisahkan."
            }
        }
    },
    {
        id: 16,
        question: "[Topik 4] Apakah perbezaan antara konsep 'perpaduan' dan 'kesepaduan'?",
        options: [
            { id: "A", text: "Perpaduan adalah proses, manakala kesepaduan adalah matlamat." },
            { id: "B", text: "Perpaduan adalah matlamat ideal, manakala kesepaduan adalah keadaan aman yang telah dicapai walaupun masih ada perbezaan." },
            { id: "C", text: "Perpaduan merujuk kepada kesatuan politik, manakala kesepaduan merujuk kepada kesatuan ekonomi." },
            { id: "D", text: "Tiada perbezaan antara kedua-dua konsep tersebut." }
        ],
        correctAnswer: "B",
        explanation: {
            correct: "Jawapan B adalah betul. 'Perpaduan' (unity) adalah matlamat akhir yang ideal. 'Kesepaduan' (cohesion) pula adalah keadaan semasa yang realistik di mana masyarakat hidup aman walaupun masih wujud 'defisit sosial'.",
            incorrect: {
                "A": "Pilihan A salah. 'Penyatupaduan' adalah proses.",
                "C": "Pilihan C salah. Kedua-dua konsep merangkumi semua aspek kehidupan.",
                "D": "Pilihan D salah. Terdapat perbezaan konseptual yang penting."
            }
        }
    },
    {
        id: 17,
        question: "[Topik 4] Manakah antara berikut merupakan contoh 'detik perpaduan' dalam masyarakat Malaysia?",
        options: [
            { id: "A", text: "Perdebatan politik mengenai hak kaum di media sosial." },
            { id: "B", text: "Rakyat berbilang kaum bersama-sama menyokong pasukan sukan negara." },
            { id: "C", text: "Pilihan raya umum yang menyaksikan persaingan sengit." },
            { id: "D", text: "Kewujudan sekolah aliran vernakular." }
        ],
        correctAnswer: "B",
        explanation: {
            correct: "Jawapan B adalah betul. 'Detik perpaduan' adalah momen di mana perbezaan diketepikan dan masyarakat bersatu atas satu sentimen bersama, seperti menyokong pasukan Harimau Malaya.",
            incorrect: {
                "A": "Pilihan A sering menjadi 'detik perbezaan'.",
                "C": "Pilihan C sering menonjolkan perbezaan ideologi.",
                "D": "Pilihan D sering dilihat sebagai manifestasi 'defisit sosial'."
            }
        }
    },
    {
        id: 18,
        question: "[Topik 4] Apakah yang dimaksudkan dengan 'penyatupaduan'?",
        options: [
            { id: "A", text: "Keadaan aman dan stabil yang telah dicapai oleh masyarakat." },
            { id: "B", text: "Matlamat akhir kesatuan yang sempurna dalam masyarakat." },
            { id: "C", text: "Usaha berterusan untuk mengurus dan menyelesaikan perbezaan atau 'defisit sosial'." },
            { id: "D", text: "Proses pemisahan antara kumpulan etnik yang berbeza." }
        ],
        correctAnswer: "C",
        explanation: {
            correct: "Jawapan C adalah betul. 'Penyatupaduan' (integration) adalah proses atau usaha berterusan untuk membina kesepaduan sosial melalui dialog, perundingan, dan mediasi.",
            incorrect: {
                "A": "Pilihan A adalah definisi 'kesepaduan'.",
                "B": "Pilihan B adalah definisi 'perpaduan'.",
                "D": "Pilihan D adalah 'segregasi'."
            }
        }
    },
    {
        id: 19,
        question: "[Topik 4] Apakah yang dimaksudkan dengan 'defisit sosial' dalam kerangka kesepaduan nasional?",
        options: [
            { id: "A", text: "Lebihan bajet kerajaan dalam urusan sosial." },
            { id: "B", text: "Kekurangan interaksi sosial dalam kalangan masyarakat moden." },
            { id: "C", text: "Isu atau jurang perbezaan (bahasa, agama, etnisiti) yang perlu diuruskan untuk mengekalkan keharmonian." },
            { id: "D", text: "Peningkatan jumlah penduduk yang menyebabkan masalah sosial." }
        ],
        correctAnswer: "C",
        explanation: {
            correct: "Jawapan C adalah betul. 'Defisit sosial' merujuk kepada jurang dalam hubungan sosial disebabkan perbezaan pandangan dalam aspek kritikal seperti etnisiti, agama, dan bahasa, yang berpotensi mengganggu kesepaduan.",
            incorrect: {
                "A": "Pilihan A adalah istilah ekonomi.",
                "B": "Pilihan B terlalu umum.",
                "D": "Pilihan D adalah isu demografi."
            }
        }
    },
    {
        id: 20,
        question: "[Topik 4] Apakah peranan 'tapak integrasi' dalam proses penyatupaduan di Malaysia?",
        options: [
            { id: "A", text: "Tapak untuk membina bangunan fizikal." },
            { id: "B", text: "Ruang dan titik pertemuan di mana pelbagai kelompok masyarakat dapat berinteraksi dan berunding." },
            { id: "C", text: "Platform media sosial untuk menyebarkan propaganda politik." },
            { id: "D", text: "Kawasan penempatan yang dikhaskan untuk satu kaum sahaja." }
        ],
        correctAnswer: "B",
        explanation: {
            correct: "Jawapan B adalah betul. 'Tapak integrasi' merujuk kepada platform atau institusi (seperti CLC, Perlembagaan) yang membolehkan interaksi dan kerjasama antara pelbagai kumpulan etnik dan sosial.",
            incorrect: {
                "A": "Pilihan A adalah tafsiran literal yang tidak tepat.",
                "C": "Pilihan C salah. Media sosial boleh menjadi tapak konflik.",
                "D": "Pilihan D adalah konsep segregasi."
            }
        }
    },
    {
        id: 21,
        question: "[Topik 1] Manakah antara berikut BUKAN sebahagian daripada konsep etika yang diperkenalkan semasa era kolonial?",
        options: [
            { id: "A", text: "Etika" },
            { id: "B", text: "Etos" },
            { id: "C", text: "Etiket" },
            { id: "D", text: "Adat Resam" }
        ],
        correctAnswer: "D",
        explanation: {
            correct: "Jawapan D adalah betul. Adat resam adalah sebahagian daripada etika tradisional yang telah wujud pada era prakolonial.",
            incorrect: {
                "A": "Pilihan A salah. Etika adalah konsep yang dipopularkan semasa era kolonial.",
                "B": "Pilihan B salah. Etos adalah konsep yang dipopularkan semasa era kolonial.",
                "C": "Pilihan C salah. Etiket adalah konsep yang dipopularkan semasa era kolonial."
            }
        }
    },
    {
        id: 22,
        question: "[Topik 2] Apakah tujuan utama kedatangan kuasa Barat seperti Portugis ke Alam Melayu pada abad ke-16?",
        options: [
            { id: "A", text: "Mempelajari budaya dan adat resam masyarakat tempatan." },
            { id: "B", text: "Menjalin hubungan diplomatik berasaskan kesamarataan." },
            { id: "C", text: "Menguasai perdagangan rempah dan menyebarkan agama Kristian." },
            { id: "D", text: "Membantu kerajaan Melaka meluaskan empayarnya." }
        ],
        correctAnswer: "C",
        explanation: {
            correct: "Jawapan C adalah betul. Kedatangan kuasa Eropah awal didorong oleh matlamat 'Gold, Gospel, and Glory' (Kekayaan, Keagamaan, dan Kemegahan).",
            incorrect: {
                "A": "Pilihan A salah. Ini bukan tujuan utama mereka.",
                "B": "Pilihan B salah. Hubungan yang terjalin adalah penaklukan.",
                "D": "Pilihan D salah. Portugis menyerang dan menakluk Melaka."
            }
        }
    },
    {
        id: 23,
        question: "[Topik 3] Apakah proses yang berlaku apabila unsur kebudayaan asing diterima dan diolah untuk disesuaikan dengan kebudayaan sendiri?",
        options: [
            { id: "A", text: "Asimilasi" },
            { id: "B", text: "Amalgamasi" },
            { id: "C", text: "Akulturasi" },
            { id: "D", text: "Segregasi" }
        ],
        correctAnswer: "C",
        explanation: {
            correct: "Jawapan C adalah betul. Akulturasi ialah proses peminjaman dan penerimaan unsur budaya asing yang kemudiannya disesuaikan dengan budaya sendiri tanpa kehilangan identiti asal.",
            incorrect: {
                "A": "Pilihan A melibatkan kehilangan identiti asal.",
                "B": "Pilihan B ialah percantuman biologi.",
                "D": "Pilihan D ialah pemisahan."
            }
        }
    },
    {
        id: 24,
        question: "[Topik 4] Mengapakah tragedi 13 Mei 1969 menjadi titik perubahan penting dalam wacana perpaduan di Malaysia?",
        options: [
            { id: "A", text: "Ia menandakan berakhirnya zaman penjajahan British." },
            { id: "B", text: "Ia menyebabkan perkataan 'Kesatuan' digantikan dengan 'Perpaduan' dalam dokumen rasmi negara." },
            { id: "C", text: "Ia membawa kepada pembentukan Malaysia." },
            { id: "D", text: "Ia berjaya menghapuskan semua perbezaan kaum." }
        ],
        correctAnswer: "B",
        explanation: {
            correct: "Jawapan B adalah betul. Selepas peristiwa 13 Mei 1969, kerajaan menyedari 'kesatuan' sedia ada rapuh, dan istilah 'perpaduan' mula digunakan untuk menggambarkan matlamat yang lebih mendalam.",
            incorrect: {
                "A": "Pilihan A salah. Kemerdekaan dicapai pada 1957.",
                "C": "Pilihan C salah. Pembentukan Malaysia berlaku pada 1963.",
                "D": "Pilihan D salah. Ia menonjolkan betapa dalamnya perbezaan kaum."
            }
        }
    },
    {
        id: 25,
        question: "[Topik 1] Penghayatan etika pada peringkat individu, keluarga, dan komuniti adalah analisis berdasarkan kerangka?",
        options: [
            { id: "A", text: "Sejarah" },
            { id: "B", text: "Struktur Sosial" },
            { id: "C", text: "Biografi" },
            { id: "D", text: "Ekonomi" }
        ],
        correctAnswer: "C",
        explanation: {
            correct: "Jawapan C adalah betul. Analisis yang bermula dari unit terkecil (individu) dan berkembang kepada unit terdekat (keluarga, komuniti) adalah sebahagian daripada kerangka biografi.",
            incorrect: {
                "A": "Pilihan A salah. Kerangka sejarah melihat susur masa.",
                "B": "Pilihan B salah. Kerangka struktur sosial melihat institusi besar.",
                "D": "Pilihan D salah. Ekonomi adalah sebahagian daripada kerangka struktur sosial."
            }
        }
    },
    {
        id: 26,
        question: "[Topik 2] Apakah sumbangan utama peradaban India kepada Alam Melayu dalam aspek pemerintahan?",
        options: [
            { id: "A", text: "Pengenalan sistem demokrasi berparlimen." },
            { id: "B", text: "Pengenalan konsep 'daulat' dan institusi pemerintahan beraja." },
            { id: "C", text: "Pengenalan tulisan Jawi." },
            { id: "D", text: "Pengenalan sistem perundangan sivil." }
        ],
        correctAnswer: "B",
        explanation: {
            correct: "Jawapan B adalah betul. Kerajaan-kerajaan awal di Alam Melayu banyak dipengaruhi oleh model pemerintahan dari India, termasuk konsep raja sebagai jelmaan tuhan (dewa-raja) yang kemudiannya diadaptasi kepada konsep 'daulat'.",
            incorrect: {
                "A": "Pilihan A adalah warisan British.",
                "C": "Pilihan C berasal dari pengaruh Arab-Islam.",
                "D": "Pilihan D adalah warisan British."
            }
        }
    },
    {
        id: 27,
        question: "[Topik 3] Manakah ciri utama masyarakat plural (majmuk) menurut J.S. Furnivall?",
        options: [
            { id: "A", text: "Kumpulan etnik bercampur dan bersatu padu sepenuhnya." },
            { id: "B", text: "Kumpulan etnik hidup berdekatan tetapi terpisah, dengan setiap kumpulan berpegang pada budaya sendiri." },
            { id: "C", text: "Kumpulan etnik berkongsi satu bahasa dan agama yang sama." },
            { id: "D", text: "Kumpulan etnik bekerjasama untuk membentuk satu identiti nasional yang tunggal." }
        ],
        correctAnswer: "B",
        explanation: {
            correct: "Jawapan B adalah betul. Menurut Furnivall, masyarakat majmuk dicirikan oleh percampuran pelbagai kaum di satu tempat tetapi mereka tidak bersatu, hidup dalam dunia sosial yang berasingan.",
            incorrect: {
                "A": "Pilihan A salah. Furnivall berpendapat mereka tidak bersatu.",
                "C": "Pilihan C salah. Ciri masyarakat majmuk ialah kepelbagaian bahasa dan agama.",
                "D": "Pilihan D salah. Identiti nasional yang tunggal sukar dibentuk dalam model ini."
            }
        }
    },
    {
        id: 28,
        question: "[Topik 4] Apakah yang dimaksudkan dengan 'etos nasional'?",
        options: [
            { id: "A", text: "Undang-undang tertinggi negara." },
            { id: "B", text: "Ciri-ciri unik, nilai, dan kepercayaan bersama yang menjadi identiti sesebuah bangsa." },
            { id: "C", text: "Dasar ekonomi yang diamalkan oleh sesebuah negara." },
            { id: "D", text: "Bahasa rasmi yang digunakan dalam pentadbiran." }
        ],
        correctAnswer: "B",
        explanation: {
            correct: "Jawapan B adalah betul. 'Etos nasional' merujuk kepada semangat atau ciri-ciri bersama yang dikongsi oleh rakyat sesebuah negara yang melangkaui perbezaan etnik.",
            incorrect: {
                "A": "Pilihan A merujuk kepada Perlembagaan.",
                "C": "Pilihan C adalah dasar fiskal atau monetari.",
                "D": "Pilihan D adalah salah satu komponen etos nasional, tetapi bukan definisinya."
            }
        }
    },
    {
        id: 29,
        question: "[Topik 1] Zaman Pascakolonial di Malaysia dicirikan oleh...",
        options: [
            { id: "A", text: "Penolakan sepenuhnya terhadap semua nilai tradisional." },
            { id: "B", text: "Penerimaan sepenuhnya terhadap semua nilai Barat." },
            { id: "C", text: "Percampuran dan penyesuaian nilai etika tradisional dan moden." },
            { id: "D", text: "Kembali kepada sistem pemerintahan sebelum zaman penjajahan." }
        ],
        correctAnswer: "C",
        explanation: {
            correct: "Jawapan C adalah betul. Zaman pascakolonial menyaksikan proses 'bercampur gaul' di mana pelbagai bentuk etika wujud bersama dan saling mempengaruhi, membentuk 'acuan Malaysia'.",
            incorrect: {
                "A": "Pilihan A salah. Nilai tradisional masih diamalkan.",
                "B": "Pilihan B salah. Nilai Barat diterima secara terpilih.",
                "D": "Pilihan D salah. Sistem pemerintahan moden diteruskan."
            }
        }
    },
    {
        id: 30,
        question: "[Topik 2] Revolusi Industri di Eropah membawa kepada kemunculan fahaman...",
        options: [
            { id: "A", text: "Kolektivisme dan kebergantungan kepada komuniti." },
            { id: "B", text: "Individualisme, hak asasi, dan demokrasi." },
            { id: "C", text: "Teokrasi, di mana kuasa politik dipegang oleh pemimpin agama." },
            { id: "D", text: "Feudalisme, yang menekankan pemilikan tanah oleh bangsawan." }
        ],
        correctAnswer: "B",
        explanation: {
            correct: "Jawapan B adalah betul. Perkembangan ekonomi semasa Revolusi Industri memperkukuh idea-idea tentang hak individu, kebebasan peribadi, dan hak bersuara dalam pemerintahan.",
            incorrect: {
                "A": "Pilihan A salah. Revolusi Industri menggalakkan persaingan individu.",
                "C": "Pilihan C salah. Fahaman ini merosot selepas zaman Enlightenment.",
                "D": "Pilihan D salah. Sistem ini digantikan oleh kapitalisme industri."
            }
        }
    },
    {
        id: 31,
        question: "[Topik 3] Apakah matlamat utama Falsafah dan Pemikiran Tradisional seperti yang dihuraikan oleh Ibn Khaldun?",
        options: [
            { id: "A", text: "Manusia berhak menentukan matlamat hidupnya sendiri." },
            { id: "B", text: "Mengintegrasikan ilmu agama dengan ilmu alat (logik, matematik) untuk mencapai matlamat yang ditetapkan." },
            { id: "C", text: "Menolak sepenuhnya ilmu agama dalam pencarian kebenaran." },
            { id: "D", text: "Mengutamakan pembangunan material melebihi pembangunan rohani." }
        ],
        correctAnswer: "B",
        explanation: {
            correct: "Jawapan B adalah betul. Pemikiran tradisional, seperti Ibn Khaldun, berpandangan bahawa manusia perlu menggunakan pelbagai jenis ilmu secara bersepadu untuk mencapai matlamat yang telah ditetapkan oleh Tuhan.",
            incorrect: {
                "A": "Pilihan A adalah ciri Falsafah Moden.",
                "C": "Pilihan C salah. Ibn Khaldun sangat menekankan kepentingan ilmu agama.",
                "D": "Pilihan D salah. Pembangunan rohani dan material perlu seimbang."
            }
        }
    },
    {
        id: 32,
        question: "[Topik 4] Apakah yang boleh dianggap sebagai 'detik perbezaan' dalam konteks hubungan sosial di Malaysia?",
        options: [
            { id: "A", text: "Majlis rumah terbuka semasa perayaan." },
            { id: "B", text: "Aktiviti gotong-royong membersihkan kawasan kejiranan." },
            { id: "C", text: "Tularnya isu-isu sensitif berkaitan kaum dan agama di media sosial." },
            { id: "D", text: "Perlawanan badminton di mana pemain dari kaum berbeza berganding." }
        ],
        correctAnswer: "C",
        explanation: {
            correct: "Jawapan C adalah betul. 'Detik perbezaan' adalah situasi yang menonjolkan perbezaan dan boleh mencetuskan ketegangan. Penyebaran isu sensitif di media sosial sering memburukkan keadaan.",
            incorrect: {
                "A": "Pilihan A adalah contoh 'detik perpaduan'.",
                "B": "Pilihan B adalah contoh 'detik perpaduan'.",
                "D": "Pilihan D adalah contoh 'detik perpaduan'."
            }
        }
    },
    {
        id: 33,
        question: "[Topik 1] Apakah yang dimaksudkan dengan 'etos' dari sudut pandang sosiologi?",
        options: [
            { id: "A", text: "Peraturan kesopanan di meja makan." },
            { id: "B", text: "Usaha membina bangsa berdasarkan kepelbagaian latar belakang melebihi kesepakatan ciri asas." },
            { id: "C", text: "Undang-undang formal yang termaktub dalam perlembagaan." },
            { id: "D", text: "Adat yang berkaitan dengan upacara perkahwinan." }
        ],
        correctAnswer: "B",
        explanation: {
            correct: "Jawapan B adalah betul. Dalam sosiologi, 'etos' merujuk kepada pembentukan karakter kebangsaan yang dibina daripada kepelbagaian yang wujud dalam masyarakat.",
            incorrect: {
                "A": "Pilihan A adalah etiket.",
                "C": "Pilihan C adalah perundangan.",
                "D": "Pilihan D adalah adat resam."
            }
        }
    },
    {
        id: 34,
        question: "[Topik 2] Apakah kesan pemisahan antara agama dan sains di Eropah terhadap dasar penjajahan British di Tanah Melayu?",
        options: [
            { id: "A", text: "British menggabungkan pentadbiran negara dengan undang-undang Islam." },
            { id: "B", text: "British menggalakkan perdebatan terbuka antara sains dan agama." },
            { id: "C", text: "British meneruskan dasar pemisahan agama dari pentadbiran negara." },
            { id: "D", text: "British mengharamkan amalan semua agama selain Kristian." }
        ],
        correctAnswer: "C",
        explanation: {
            correct: "Jawapan C adalah betul. Pemikiran sekular yang memisahkan agama dan pentadbiran yang berlaku di Eropah telah diterapkan oleh British di Tanah Melayu, membawa kepada struktur pentadbiran dualisme.",
            incorrect: {
                "A": "Pilihan A salah. British melakukan yang sebaliknya.",
                "B": "Pilihan B salah. Ini bukan fokus sistem pendidikan kolonial.",
                "D": "Pilihan D salah. British membenarkan amalan agama lain."
            }
        }
    },
    {
        id: 35,
        question: "[Topik 3] Proses percantuman biologi melalui perkahwinan campur antara etnik yang berbeza dikenali sebagai?",
        options: [
            { id: "A", text: "Akomodasi" },
            { id: "B", text: "Akulturasi" },
            { id: "C", text: "Asimilasi" },
            { id: "D", text: "Amalgamasi" }
        ],
        correctAnswer: "D",
        explanation: {
            correct: "Jawapan D adalah betul. Amalgamasi (A+B+C = D) secara spesifik merujuk kepada proses percantuman biologi (kahwin campur) yang melahirkan generasi baharu.",
            incorrect: {
                "A": "Pilihan A adalah penyesuaian tanpa percantuman.",
                "B": "Pilihan B adalah penerimaan unsur budaya.",
                "C": "Pilihan C adalah penyerapan budaya."
            }
        }
    },
    {
        id: 36,
        question: "[Topik 4] Indeks Perpaduan Nasional (IPNas) dibina untuk tujuan apa?",
        options: [
            { id: "A", text: "Mengira jumlah penduduk setiap kaum." },
            { id: "B", text: "Menentukan parti politik mana yang paling menyumbang kepada perpaduan." },
            { id: "C", text: "Mengukur tahap perpaduan dalam kepelbagaian secara objektif." },
            { id: "D", text: "Menyenaraikan semua 'detik perbezaan' dalam sejarah." }
        ],
        correctAnswer: "C",
        explanation: {
            correct: "Jawapan C adalah betul. IPNas adalah usaha saintifik untuk mengukur secara kuantitatif tahap kesepaduan sosial yang wujud di Malaysia bagi membolehkan intervensi yang sesuai dirangka.",
            incorrect: {
                "A": "Pilihan A adalah tugas Jabatan Perangkaan.",
                "B": "Pilihan B salah. IPNas adalah kajian akademik.",
                "D": "Pilihan D salah. Tujuannya adalah untuk mengukur keadaan semasa."
            }
        }
    },
    {
        id: 37,
        question: "[Topik 1] Manakah antara berikut menggambarkan penghayatan etika dalam konteks 'pasaran'?",
        options: [
            { id: "A", text: "Seorang anak menghormati ibu bapanya." },
            { id: "B", text: "Sebuah syarikat mengamalkan tadbir urus korporat yang baik." },
            { id: "C", text: "Penduduk sebuah taman mengadakan gotong-royong." },
            { id: "D", text: "Seorang pemimpin negara menyampaikan ucapan hari kebangsaan." }
        ],
        correctAnswer: "B",
        explanation: {
            correct: "Jawapan B adalah betul. Konteks 'pasaran' merujuk kepada dunia perniagaan dan ekonomi. Etika dalam konteks ini termasuklah kejujuran dalam perniagaan dan tanggungjawab sosial korporat (CSR).",
            incorrect: {
                "A": "Pilihan A adalah etika dalam konteks keluarga.",
                "C": "Pilihan C adalah etika dalam konteks komuniti.",
                "D": "Pilihan D adalah etika dalam konteks negara."
            }
        }
    },
    {
        id: 38,
        question: "[Topik 2] Apakah yang dimaksudkan dengan 'lingua franca'?",
        options: [
            { id: "A", text: "Bahasa yang digunakan dalam upacara keagamaan sahaja." },
            { id: "B", text: "Bahasa ibunda sesuatu kaum." },
            { id: "C", text: "Bahasa yang digunakan secara meluas sebagai bahasa perantaraan antara penutur yang berlainan bahasa." },
            { id: "D", text: "Bahasa yang mempunyai sistem tulisan yang paling canggih." }
        ],
        correctAnswer: "C",
        explanation: {
            correct: "Jawapan C adalah betul. 'Lingua franca' ialah bahasa perhubungan yang membolehkan komunikasi antara pelbagai kumpulan etnik. Bahasa Melayu telah menjadi lingua franca di Alam Melayu.",
            incorrect: {
                "A": "Pilihan A terlalu spesifik.",
                "B": "Pilihan B adalah definisi bahasa ibunda.",
                "D": "Pilihan D tidak berkaitan."
            }
        }
    },
    {
        id: 39,
        question: "[Topik 3] Apakah kesan utama sistem ekonomi sara diri pada era prakolonial?",
        options: [
            { id: "A", text: "Mewujudkan jurang ekonomi yang besar." },
            { id: "B", text: "Menggalakkan perdagangan antarabangsa secara besar-besaran." },
            { id: "C", text: "Menghasilkan lebihan pengeluaran untuk dieksport." },
            { id: "D", text: "Masyarakat menghasilkan barangan sekadar untuk menampung keperluan diri dan keluarga." }
        ],
        correctAnswer: "D",
        explanation: {
            correct: "Jawapan D adalah betul. Ekonomi sara diri adalah kegiatan ekonomi asas di mana pengeluaran hanya cukup untuk keperluan sendiri, bukan untuk tujuan komersial.",
            incorrect: {
                "A": "Pilihan A salah. Jurang ekonomi lebih ketara semasa era kolonial.",
                "B": "Pilihan B salah. Ini bercanggah dengan konsep sara diri.",
                "C": "Pilihan C salah. Ekonomi sara diri dicirikan oleh ketiadaan lebihan."
            }
        }
    },
    {
        id: 40,
        question: "[Topik 4] Apakah alat penyatupaduan yang paling asas dalam konteks pembentukan Malaysia?",
        options: [
            { id: "A", text: "Media sosial" },
            { id: "B", text: "Perlembagaan Persekutuan" },
            { id: "C", text: "Dasar Ekonomi Baru" },
            { id: "D", text: "Kempen pilihan raya" }
        ],
        correctAnswer: "B",
        explanation: {
            correct: "Jawapan B adalah betul. Perlembagaan Persekutuan adalah 'tapak integrasi' utama yang menggariskan kontrak sosial antara kaum dan menjadi kerangka kepada struktur pemerintahan negara.",
            incorrect: {
                "A": "Pilihan A boleh menjadi alat penyatuan atau pemecahan.",
                "C": "Pilihan C adalah dasar penting, tetapi berlandaskan Perlembagaan.",
                "D": "Pilihan D sering menonjolkan perbezaan."
            }
        }
    },
    {
        id: 41,
        question: "[Topik 1] Evolusi sejarah Malaysia yang dibahagikan kepada Prakolonial, Kolonial, dan Pascakolonial membantu kita memahami...",
        options: [
            { id: "A", text: "Bagaimana iklim negara berubah mengikut zaman." },
            { id: "B", text: "Bagaimana penghayatan etika dan peradaban dibentuk secara berbeza mengikut peredaran masa." },
            { id: "C", text: "Senarai semua raja dan pemerintah yang pernah wujud." },
            { id: "D", text: "Perkembangan teknologi pembinaan dari rumah kayu ke konkrit." }
        ],
        correctAnswer: "B",
        explanation: {
            correct: "Jawapan B adalah betul. Pembahagian susur masa ini membolehkan kita melihat bagaimana konsep etika dan amalan peradaban dipengaruhi oleh kuasa dominan pada setiap zaman.",
            incorrect: {
                "A": "Pilihan A adalah kajian klimatologi.",
                "C": "Pilihan C adalah kajian genealogi.",
                "D": "Pilihan D terlalu spesifik dan bukan fokus utama."
            }
        }
    },
    {
        id: 42,
        question: "[Topik 2] Apakah kesan globalisasi terhadap peradaban kontemporari?",
        options: [
            { id: "A", text: "Mengukuhkan sempadan negara dan mengurangkan interaksi antarabangsa." },
            { id: "B", text: "Memungkinkan interaksi dan jaringan peradaban merentasi benua melalui teknologi maklumat." },
            { id: "C", text: "Menyebabkan semua peradaban di dunia menjadi seragam sepenuhnya." },
            { id: "D", text: "Mengembalikan amalan masyarakat kepada cara hidup tradisional." }
        ],
        correctAnswer: "B",
        explanation: {
            correct: "Jawapan B adalah betul. Globalisasi, yang dipacu oleh teknologi digital, membolehkan idea dan budaya dari seluruh dunia tersebar dengan pantas, mewujudkan 'peradaban kacukan global'.",
            incorrect: {
                "A": "Pilihan A salah. Globalisasi melenyapkan sempadan.",
                "C": "Pilihan C salah. Terdapat juga pengukuhan identiti tempatan.",
                "D": "Pilihan D salah. Globalisasi memacu ke arah pemodenan."
            }
        }
    },
    {
        id: 43,
        question: "[Topik 3] Apakah yang dimaksudkan dengan asimilasi struktur?",
        options: [
            { id: "A", text: "Kelompok minoriti mempelajari bahasa dan pakaian kelompok majoriti." },
            { id: "B", text: "Kelompok minoriti berjaya menyertai institusi utama seperti pekerjaan dan politik dalam masyarakat majoriti." },
            { id: "C", text: "Perkahwinan campur antara kelompok minoriti dan majoriti." },
            { id: "D", text: "Kelompok minoriti tinggal di kawasan yang sama dengan kelompok majoriti." }
        ],
        correctAnswer: "B",
        explanation: {
            correct: "Jawapan B adalah betul. Asimilasi struktur merujuk kepada penyertaan kelompok minoriti ke dalam institusi sosial, ekonomi, dan politik masyarakat majoriti.",
            incorrect: {
                "A": "Pilihan A adalah asimilasi budaya.",
                "C": "Pilihan C adalah amalgamasi.",
                "D": "Pilihan D tidak semestinya bermakna penyertaan dalam institusi."
            }
        }
    },
    {
        id: 44,
        question: "[Topik 4] Communities Liaison Committee (CLC) 1949 adalah satu contoh awal...",
        options: [
            { id: "A", text: "Parti politik perkauman." },
            { id: "B", text: "Kesatuan sekerja." },
            { id: "C", text: "Tapak integrasi untuk perundingan antara pemimpin elit kaum." },
            { id: "D", text: "Mahkamah untuk menyelesaikan pertikaian antara kaum." }
        ],
        correctAnswer: "C",
        explanation: {
            correct: "Jawapan C adalah betul. CLC adalah 'tapak integrasi' awal yang penting di mana pemimpin utama pelbagai kaum bertemu untuk berunding isu-isu sensitif menjelang kemerdekaan.",
            incorrect: {
                "A": "Pilihan A salah. CLC bukan parti politik.",
                "B": "Pilihan B salah. Ia tidak mewakili pekerja.",
                "D": "Pilihan D salah. Ia bukan badan kehakiman."
            }
        }
    },
    {
        id: 45,
        question: "[Topik 1] Apakah hubungan antara etika masyarakat dengan kedudukan negara di peringkat antarabangsa?",
        options: [
            { id: "A", text: "Tiada sebarang hubungan." },
            { id: "B", text: "Masyarakat yang beretika membentuk negara yang stabil dan dihormati, yang menarik pelaburan dan pasaran." },
            { id: "C", text: "Negara yang kaya akan secara automatik mempunyai masyarakat yang beretika." },
            { id: "D", text: "Etika masyarakat hanya penting untuk hubungan dalaman dan tidak memberi kesan kepada pasaran global." }
        ],
        correctAnswer: "B",
        explanation: {
            correct: "Jawapan B adalah betul. Imej sesebuah negara banyak bergantung pada kestabilan masyarakatnya. Masyarakat yang beretika menyumbang kepada kestabilan politik dan sosial, faktor penting untuk keyakinan pelabur.",
            incorrect: {
                "A": "Pilihan A salah. Terdapat hubungan yang signifikan.",
                "C": "Pilihan C salah. Kekayaan tidak menjamin etika.",
                "D": "Pilihan D salah. Etika seperti integriti memberi kesan langsung kepada pasaran."
            }
        }
    },
    {
        id: 46,
        question: "[Topik 2] Manakah antara berikut BUKAN kerajaan awal yang wujud di Alam Melayu sebelum Kesultanan Melayu Melaka?",
        options: [
            { id: "A", text: "Langkasuka" },
            { id: "B", text: "Gangga Negara" },
            { id: "C", text: "Kerajaan Demak" },
            { id: "D", text: "Srivijaya" }
        ],
        correctAnswer: "C",
        explanation: {
            correct: "Jawapan C adalah betul. Kerajaan Demak adalah kesultanan di Jawa yang kemunculannya sezaman atau sedikit lewat berbanding Kesultanan Melayu Melaka.",
            incorrect: {
                "A": "Pilihan A salah. Langkasuka adalah kerajaan purba.",
                "B": "Pilihan B salah. Gangga Negara adalah kerajaan purba.",
                "D": "Pilihan D salah. Srivijaya adalah kerajaan purba."
            }
        }
    },
    {
        id: 47,
        question: "[Topik 3] Apakah faktor utama yang mendorong kemasukan buruh dari China dan India secara besar-besaran ke Tanah Melayu?",
        options: [
            { id: "A", text: "Untuk menyebarkan budaya dan agama mereka." },
            { id: "B", text: "Untuk memenuhi keperluan tenaga kerja dalam sektor perlombongan dan perladangan." },
            { id: "C", text: "Untuk membantu British dalam pentadbiran negeri." },
            { id: "D", text: "Untuk mencari perlindungan politik." }
        ],
        correctAnswer: "B",
        explanation: {
            correct: "Jawapan B adalah betul. Pembukaan lombong bijih timah dan ladang getah oleh British memerlukan tenaga kerja yang ramai, membawa kepada dasar imigrasi liberal.",
            incorrect: {
                "A": "Pilihan A salah. Ini bukan tujuan utama mereka.",
                "C": "Pilihan C salah. Pentadbiran diisi oleh golongan lain.",
                "D": "Pilihan D salah. Faktor utama adalah ekonomi."
            }
        }
    },
    {
        id: 48,
        question: "[Topik 4] Bahasa Melayu sebagai bahasa kebangsaan memainkan peranan sebagai...",
        options: [
            { id: "A", text: "Alat untuk menghapuskan semua bahasa lain." },
            { id: "B", text: "Simbol kedaulatan raja-raja Melayu sahaja." },
            { id: "C", text: "Salah satu elemen penting dalam membina kesepaduan sosial dan etos nasional." },
            { id: "D", text: "Bahasa yang hanya digunakan dalam urusan perniagaan." }
        ],
        correctAnswer: "C",
        explanation: {
            correct: "Jawapan C adalah betul. Bahasa kebangsaan berfungsi sebagai lingua franca yang membolehkan komunikasi merentasi kaum dan menjadi tiang seri dalam pembinaan identiti nasional.",
            incorrect: {
                "A": "Pilihan A salah. Perlembagaan menjamin hak menggunakan bahasa lain.",
                "B": "Pilihan B salah. Ia adalah simbol negara.",
                "D": "Pilihan D salah. Ia digunakan dalam semua urusan rasmi."
            }
        }
    },
    {
        id: 49,
        question: "[Topik 1] Mengapakah penghayatan etika dan peradaban penting dalam usaha membina negara bangsa?",
        options: [
            { id: "A", text: "Kerana ia merupakan syarat untuk menyertai PBB." },
            { id: "B", text: "Kerana ia dapat meningkatkan hasil eksport negara." },
            { id: "C", text: "Kerana ia membentuk masyarakat yang saling menghormati, hidup harmoni, dan berkeperibadian tinggi." },
            { id: "D", text: "Kerana ia dapat menjamin kemenangan dalam sukan antarabangsa." }
        ],
        correctAnswer: "C",
        explanation: {
            correct: "Jawapan C adalah betul. Negara bangsa yang berjaya bergantung pada kualiti modal insan. Masyarakat yang beretika akan mewujudkan suasana sosial yang harmoni dan stabil.",
            incorrect: {
                "A": "Pilihan A salah. Ini bukan syarat formal.",
                "B": "Pilihan B salah. Hubungannya tidak langsung.",
                "D": "Pilihan D salah. Tiada kaitan langsung."
            }
        }
    },
    {
        id: 50,
        question: "[Topik 2] Apakah perbezaan utama antara peradaban Barat dan Timur dari segi sumber nilai etika?",
        options: [
            { id: "A", text: "Barat mementingkan sains, manakala Timur mementingkan teknologi." },
            { id: "B", text: "Barat menekankan rasional-legal dan individualisme, manakala etika Timur banyak berteraskan agama dan kolektivisme." },
            { id: "C", text: "Barat tidak mempunyai sebarang sistem etika." },
            { id: "D", text: "Timur menolak sepenuhnya pemodenan." }
        ],
        correctAnswer: "B",
        explanation: {
            correct: "Jawapan B adalah betul. Peradaban Barat moden cenderung mendasarkan etika pada logik dan hak individu, manakala peradaban Timur secara tradisinya mengaitkan etika dengan ajaran agama dan tanggungjawab kolektif.",
            incorrect: {
                "A": "Pilihan A salah. Kedua-duanya mementingkan sains dan teknologi.",
                "C": "Pilihan C salah. Barat mempunyai tradisi falsafah etika yang kaya.",
                "D": "Pilihan D salah. Timur menerima pemodenan secara terpilih."
            }
        }
    }
];
