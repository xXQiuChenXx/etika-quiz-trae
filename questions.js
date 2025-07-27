// Data Soalan Kuiz
// Data ini mengandungi 80 soalan aneka pilihan berdasarkan Topik 1 hingga 4.
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
    },
	{
        id: 51,
        question: "[Topik 3] Konsep 'superdiversity' yang wujud pada era pascakolonial merujuk kepada...",
        options: [
            { id: "A", text: "Kepelbagaian masyarakat yang hanya terhad kepada tiga kaum utama." },
            { id: "B", text: "Kepelbagaian yang lebih kompleks merangkumi pelbagai dimensi seperti etnik, agama, bahasa, dan status migrasi." },
            { id: "C", text: "Penyeragaman budaya akibat daripada proses globalisasi." },
            { id: "D", text: "Pengasingan kumpulan masyarakat secara total di platform digital." }
        ],
        correctAnswer: "B",
        explanation: {
            correct: "Jawapan B adalah betul. 'Superdiversity' adalah istilah yang digunakan untuk menggambarkan kepelbagaian yang jauh lebih rencam dan berlapis berbanding masyarakat majmuk era kolonial, di mana perbezaan bukan sahaja pada etnik tetapi juga status kewarganegaraan, aliran pemikiran, dan sebagainya.",
            incorrect: {
                "A": "Pilihan A salah. Superdiversity melangkaui tiga kaum utama.",
                "C": "Pilihan C salah. Ia merujuk kepada kepelbagaian, bukan penyeragaman.",
                "D": "Pilihan D salah. Ia berlaku dalam dunia sebenar dan digital, bukan hanya pengasingan."
            }
        }
    },
    {
        id: 52,
        question: "[Topik 4] Mengapakah 'kesepaduan sosial' dianggap sebagai satu pencapaian yang lebih realistik untuk Malaysia berbanding 'perpaduan'?",
        options: [
            { id: "A", text: "Kerana kesepaduan sosial tidak memerlukan sebarang usaha daripada kerajaan." },
            { id: "B", text: "Kerana perpaduan adalah satu keadaan utopia yang menghapuskan semua perbezaan, manakala kesepaduan meraikan kepelbagaian dalam keadaan aman." },
            { id: "C", text: "Kerana kesepaduan sosial hanya memberi tumpuan kepada aspek ekonomi." },
            { id: "D", text: "Kerana perpaduan telah pun dicapai sepenuhnya selepas merdeka." }
        ],
        correctAnswer: "B",
        explanation: {
            correct: "Jawapan B adalah betul. Perpaduan sebagai matlamat mutlak (unity) adalah sukar dicapai. Kesepaduan (cohesion) adalah keadaan di mana masyarakat dengan pelbagai perbezaan boleh hidup bersama secara harmoni dan stabil, menjadikannya satu matlamat yang lebih praktikal dan boleh diukur.",
            incorrect: {
                "A": "Pilihan A salah. Kesepaduan memerlukan usaha berterusan (penyatupaduan).",
                "C": "Pilihan C salah. Ia merangkumi semua aspek sosial.",
                "D": "Pilihan D salah. Perpaduan adalah matlamat yang masih diusahakan."
            }
        }
    },
    {
        id: 53,
        question: "[Topik 2] Apakah implikasi utama daripada pertembungan antara 'Islam sebagai agama' dengan 'negara kolonial sekular' di Tanah Melayu?",
        options: [
            { id: "A", text: "Islam menjadi teras utama dalam semua undang-undang pentadbiran British." },
            { id: "B", text: "Berlakunya pemisahan kuasa di mana Sultan menjaga hal ehwal Islam manakala British mengurus pentadbiran negara." },
            { id: "C", text: "Semua institusi pendidikan agama ditutup oleh pihak British." },
            { id: "D", text: "Masyarakat Melayu menolak sepenuhnya pemodenan yang dibawa oleh Barat." }
        ],
        correctAnswer: "B",
        explanation: {
            correct: "Jawapan B adalah betul. Pertembungan ini mewujudkan satu dualisme dalam sistem pentadbiran di mana bidang kuasa dipisahkan. Ini memberi kesan jangka panjang kepada kedudukan Islam dalam kerangka perundangan dan pentadbiran negara.",
            incorrect: {
                "A": "Pilihan A salah. Yang berlaku adalah sebaliknya.",
                "C": "Pilihan C salah. Institusi pendidikan agama terus wujud.",
                "D": "Pilihan D salah. Masyarakat Melayu menerima pemodenan secara terpilih."
            }
        }
    },
    {
        id: 54,
        question: "[Topik 1] Bagaimanakah kerangka analisis sejarah, struktur sosial, dan biografi saling berkait dalam membentuk penghayatan etika seseorang?",
        options: [
            { id: "A", text: "Ketiga-tiga kerangka ini berfungsi secara terasing dan tidak mempengaruhi antara satu sama lain." },
            { id: "B", text: "Struktur sosial (negara, pasaran) membentuk sejarah, yang kemudiannya mempengaruhi biografi individu." },
            { id: "C", text: "Pengalaman biografi individu membentuk struktur sosial, yang seterusnya akan menentukan hala tuju sejarah." },
            { id: "D", text: "Sejarah membentuk struktur sosial, dan kedua-duanya menyediakan konteks yang mempengaruhi biografi atau pengalaman hidup individu." }
        ],
        correctAnswer: "D",
        explanation: {
            correct: "Jawapan D adalah betul. Ketiga-tiga kerangka ini saling berinteraksi. Peristiwa sejarah (cth: penjajahan) mewujudkan struktur sosial tertentu (cth: masyarakat majmuk, ekonomi kapitalis), dan konteks sejarah serta struktur inilah yang membentuk pengalaman hidup (biografi) setiap individu dan komuniti.",
            incorrect: {
                "A": "Pilihan A salah. Ketiga-tiganya saling berkait rapat.",
                "B": "Pilihan B salah. Aliran pengaruhnya tidak sehala.",
                "C": "Pilihan C salah. Walaupun biografi boleh mempengaruhi struktur, aliran utamanya adalah sebaliknya."
            }
        }
    },
    {
        id: 55,
        question: "[Topik 3] 'Asimilasi Segmented' seperti yang ditunjukkan dalam Skema Proses Hubungan Etnik merujuk kepada keadaan di mana...",
        options: [
            { id: "A", text: "Semua kumpulan etnik melebur menjadi satu budaya yang sama sepenuhnya." },
            { id: "B", text: "Kumpulan minoriti hanya berasimiliasi ke dalam segmen atau lapisan sosio-ekonomi tertentu dalam masyarakat majoriti." },
            { id: "C", text: "Hanya segmen tertentu dalam kumpulan minoriti yang bersetuju untuk berasimilasi." },
            { id: "D", text: "Proses asimilasi yang berlaku secara paksaan oleh pemerintah." }
        ],
        correctAnswer: "B",
        explanation: {
            correct: "Jawapan B adalah betul. 'Asimilasi Segmented' ialah satu konsep yang lebih kompleks di mana proses asimilasi tidak seragam. Sebaliknya, kumpulan imigran atau minoriti mungkin berasimilasi ke dalam lapisan masyarakat yang berbeza (cth: kelas bawahan, kelas menengah) bergantung pada modal sosial dan ekonomi mereka.",
            incorrect: {
                "A": "Pilihan A adalah definisi asimilasi penuh (full assimilation).",
                "C": "Pilihan C hampir betul tetapi kurang tepat; fokusnya bukan pada persetujuan tetapi pada destinasi segmen sosial.",
                "D": "Pilihan D menerangkan cara asimilasi, bukan jenisnya."
            }
        }
    },
    {
        id: 56,
        question: "[Topik 2] Apakah perbezaan utama antara pengaruh peradaban India dengan pengaruh peradaban Barat di Alam Melayu?",
        options: [
            { id: "A", text: "Pengaruh India lebih tertumpu pada ekonomi, manakala pengaruh Barat lebih kepada kebudayaan." },
            { id: "B", text: "Pengaruh India berlaku secara penaklukan politik, manakala pengaruh Barat secara aman." },
            { id: "C", text: "Pengaruh India lebih bersifat difusi budaya dan keagamaan secara sukarela, manakala pengaruh Barat melibatkan penaklukan politik dan perubahan struktur pentadbiran." },
            { id: "D", text: "Pengaruh India memperkenalkan tulisan Rumi, manakala pengaruh Barat memperkenalkan tulisan Sanskrit." }
        ],
        correctAnswer: "C",
        explanation: {
            correct: "Jawapan C adalah betul. Pengaruh India (kecuali serangan Chola) tersebar melalui perdagangan dan penyebaran agama secara aman. Sebaliknya, pengaruh Barat datang bersama kuasa kolonial yang menakluk dan mengubah sistem politik, perundangan, dan ekonomi secara menyeluruh.",
            incorrect: {
                "A": "Pilihan A salah. Pengaruh Barat sangat kuat dalam ekonomi.",
                "B": "Pilihan B salah. Yang berlaku adalah sebaliknya.",
                "D": "Pilihan D salah. Yang berlaku adalah sebaliknya."
            }
        }
    },
    {
        id: 57,
        question: "[Topik 4] Istilah 'stable tension' (tegang tapi tenang) digunakan untuk menggambarkan keadaan hubungan etnik di Malaysia. Apakah maksudnya?",
        options: [
            { id: "A", text: "Hubungan etnik di Malaysia sentiasa dalam keadaan konflik terbuka." },
            { id: "B", text: "Tidak wujud sebarang ketegangan antara kaum di Malaysia." },
            { id: "C", text: "Wujud potensi ketegangan di bawah permukaan akibat perbezaan, tetapi ia terkawal dan tidak meletus menjadi konflik besar." },
            { id: "D", text: "Ketegangan hanya wujud dalam kalangan ahli politik dan tidak dirasai oleh rakyat biasa." }
        ],
        correctAnswer: "C",
        explanation: {
            correct: "Jawapan C adalah betul. 'Stable tension' merujuk kepada satu keadaan kesepaduan di mana wujudnya isu-isu sensitif dan perbezaan ('defisit sosial') yang boleh mencetuskan ketegangan, namun ia berjaya diuruskan melalui pelbagai mekanisme sosial dan politik sehingga keharmonian dapat dikekalkan.",
            incorrect: {
                "A": "Pilihan A salah. 'Stable' menunjukkan ia bukan konflik terbuka.",
                "B": "Pilihan B salah. 'Tension' menunjukkan wujudnya ketegangan.",
                "D": "Pilihan D salah. Ketegangan boleh dirasai pada pelbagai peringkat masyarakat."
            }
        }
    },
    {
        id: 58,
        question: "[Topik 3] Mengapakah zaman Kesultanan Melayu Melaka dianggap sebagai era 'pluraliti' dan bukan 'masyarakat majmuk'?",
        options: [
            { id: "A", text: "Kerana pada zaman itu hanya ada satu kaum sahaja yang tinggal di Melaka." },
            { id: "B", text: "Kerana proses penghijrahan dan interaksi antara kaum berlaku secara paksaan oleh Sultan." },
            { id: "C", text: "Kerana interaksi dan integrasi sosial antara pedagang asing dan masyarakat tempatan berlaku secara semula jadi dan sukarela." },
            { id: "D", text: "Kerana masyarakat majmuk hanya wujud selepas kemerdekaan Malaysia." }
        ],
        correctAnswer: "C",
        explanation: {
            correct: "Jawapan C adalah betul. 'Pluraliti' merujuk kepada kepelbagaian yang terbentuk secara semula jadi melalui interaksi, asimilasi, dan akulturasi tanpa paksaan. 'Masyarakat majmuk' pula adalah istilah yang sering dikaitkan dengan era kolonial di mana kaum-kaum dibawa masuk oleh penjajah dan hidup terpisah.",
            incorrect: {
                "A": "Pilihan A salah. Melaka terkenal dengan kepelbagaian penduduknya.",
                "B": "Pilihan B salah. Prosesnya berlaku secara sukarela.",
                "D": "Pilihan D salah. Masyarakat majmuk dikaitkan dengan era kolonial."
            }
        }
    },
    {
        id: 59,
        question: "[Topik 2] Apakah sumbangan utama pemikiran John Rawls melalui 'A Theory of Justice' kepada konsep peradaban pasca kolonial?",
        options: [
            { id: "A", text: "Ia menyokong sistem pemerintahan beraja mutlak." },
            { id: "B", text: "Ia memperkenalkan idea keadilan sosial sebagai asas pembinaan masyarakat yang adil, di mana hak dan peluang diagihkan secara saksama." },
            { id: "C", text: "Ia menolak kepentingan hak asasi individu." },
            { id: "D", text: "Ia mencadangkan agar semua kekayaan negara dikawal oleh satu pihak sahaja." }
        ],
        correctAnswer: "B",
        explanation: {
            correct: "Jawapan B adalah betul. Teori Keadilan oleh John Rawls sangat berpengaruh dalam pemikiran politik moden. Ia menekankan prinsip keadilan pengagihan (distributive justice) dan kesaksamaan, yang menjadi asas penting dalam perbincangan mengenai pembinaan negara bangsa yang adil dalam masyarakat berbilang kaum pasca kolonial.",
            incorrect: {
                "A": "Pilihan A salah. Teorinya menyokong demokrasi liberal.",
                "C": "Pilihan C salah. Ia sangat menekankan hak asasi.",
                "D": "Pilihan D salah. Ia menentang pengagihan yang tidak saksama."
            }
        }
    },
    {
        id: 60,
        question: "[Topik 4] Manakah antara berikut BUKAN contoh 'tapak integrasi' yang menyumbang kepada kesepaduan nasional di Malaysia?",
        options: [
            { id: "A", text: "Perlembagaan Persekutuan 1957" },
            { id: "B", text: "Rancangan Pembangunan Lima Tahun" },
            { id: "C", "text": "Platform media sosial yang menyebarkan berita palsu bersifat perkauman" },
            { id: "D", text: "Penubuhan parti politik bersifat muafakat (coalition)" }
        ],
        correctAnswer: "C",
        explanation: {
            correct: "Jawapan C adalah betul. Platform media sosial yang digunakan secara negatif untuk menyemai kebencian kaum bertindak sebagai agen pemecahbelahan, bukan sebagai tapak integrasi.",
            incorrect: {
                "A": "Pilihan A adalah tapak integrasi perundangan yang utama.",
                "B": "Pilihan B adalah tapak integrasi ekonomi.",
                "D": "Pilihan D adalah tapak integrasi politik."
            }
        }
    },
	{
        id: 61,
        question: "[Topik 1] Apakah perbezaan paling ketara antara 'etika' dan 'adab'?",
        options: [
            { id: "A", text: "Etika bersifat universal dan teoritikal, manakala adab lebih bersifat kontekstual dan praktikal." },
            { id: "B", text: "Etika hanya diamalkan oleh golongan pemerintah, manakala adab untuk rakyat biasa." },
            { id: "C", text: "Etika berasal dari Timur, manakala adab berasal dari Barat." },
            { id: "D", text: "Tidak ada perbezaan, kedua-dua istilah membawa maksud yang sama." }
        ],
        correctAnswer: "A",
        explanation: {
            correct: "Jawapan A adalah betul. 'Etika' merujuk kepada kajian falsafah tentang prinsip moral (apa yang benar dan salah secara universal). 'Adab' pula merujuk kepada perlakuan sopan dan budi pekerti yang baik dalam amalan seharian, yang mungkin berbeza mengikut budaya dan konteks.",
            incorrect: {
                "B": "Pilihan B salah. Kedua-duanya relevan untuk semua lapisan masyarakat.",
                "C": "Pilihan C salah. Yang berlaku adalah sebaliknya dari segi pengenalan istilah.",
                "D": "Pilihan D salah. Walaupun berkaitan, kedua-duanya mempunyai nuansa makna yang berbeza."
            }
        }
    },
    {
        id: 62,
        question: "[Topik 2] Apakah yang dimaksudkan dengan 'Indianization' di Asia Tenggara?",
        options: [
            { id: "A", text: "Proses penaklukan seluruh Asia Tenggara oleh empayar dari India." },
            { id: "B", text: "Penghijrahan besar-besaran penduduk India ke Asia Tenggara." },
            { id: "C", text: "Penyebaran dan penyerapan unsur-unsur kebudayaan India seperti agama, sistem tulisan, dan konsep pemerintahan oleh masyarakat tempatan." },
            { id: "D", text: "Penggunaan mata wang India dalam semua urusan perdagangan di Asia Tenggara." }
        ],
        correctAnswer: "C",
        explanation: {
            correct: "Jawapan C adalah betul. 'Indianization' atau Pengindiaan merujuk kepada proses difusi budaya di mana elemen-elemen peradaban India (Hindu-Buddha, bahasa Sanskrit, sistem beraja) diserap dan diadaptasi oleh peradaban tempatan di Asia Tenggara.",
            incorrect: {
                "A": "Pilihan A salah. Proses ini kebanyakannya berlaku secara aman, bukan penaklukan.",
                "B": "Pilihan B salah. Ia lebih kepada penyebaran idea, bukan migrasi massa.",
                "D": "Pilihan D salah. Walaupun perdagangan penting, 'Indianization' merangkumi aspek budaya yang lebih luas."
            }
        }
    },
    {
        id: 63,
        question: "[Topik 3] Apakah implikasi utama daripada pengenalan ekonomi kapitalis oleh British terhadap struktur masyarakat di Tanah Melayu?",
        options: [
            { id: "A", text: "Ia mengukuhkan ekonomi sara diri dalam kalangan orang Melayu." },
            { id: "B", text: "Ia mewujudkan pengenalan kaum mengikut fungsi ekonomi dan pemisahan petempatan." },
            { id: "C", text: "Ia membawa kepada pengagihan kekayaan yang saksama antara semua kaum." },
            { id: "D", text: "Ia menyebabkan semua penduduk tempatan berpindah ke kawasan bandar." }
        ],
        correctAnswer: "B",
        explanation: {
            correct: "Jawapan B adalah betul. Keperluan ekonomi kapitalis (bijih timah, getah) membawa kepada kemasukan buruh asing dan pembentukan masyarakat majmuk. Dasar British yang menempatkan kaum mengikut sektor ekonomi (Melayu-pertanian, Cina-perlombongan, India-perladangan) mewujudkan jurang ekonomi dan sosial.",
            incorrect: {
                "A": "Pilihan A salah. Ia melemahkan ekonomi sara diri.",
                "C": "Pilihan C salah. Ia mewujudkan ketidakseimbangan ekonomi.",
                "D": "Pilihan D salah. Hanya sebahagian penduduk yang berpindah ke bandar."
            }
        }
    },
    {
        id: 64,
        question: "[Topik 4] Apakah peranan Rukun Negara sebagai satu 'tapak integrasi'?",
        options: [
            { id: "A", text: "Sebagai satu set undang-undang jenayah yang wajib dipatuhi." },
            { id: "B", text: "Sebagai ideologi kebangsaan yang menggariskan prinsip-prinsip asas untuk mencapai perpaduan." },
            { id: "C", text: "Sebagai satu dasar ekonomi untuk membasmi kemiskinan." },
            { id: "D", text: "Sebagai garis panduan untuk menganjurkan acara sukan." }
        ],
        correctAnswer: "B",
        explanation: {
            correct: "Jawapan B adalah betul. Rukun Negara, yang diwujudkan selepas peristiwa 1969, berfungsi sebagai 'tapak integrasi' ideologi. Ia menyediakan satu set nilai dan prinsip bersama (Kepercayaan kepada Tuhan, Kesetiaan kepada Raja dan Negara, dll.) yang bertujuan untuk menyatukan pemikiran dan tindakan rakyat Malaysia yang berbilang kaum.",
            incorrect: {
                "A": "Pilihan A salah. Ia adalah ideologi, bukan kanun keseksaan.",
                "C": "Pilihan C adalah peranan DEB.",
                "D": "Pilihan D tidak berkaitan."
            }
        }
    },
    {
        id: 65,
        question: "[Topik 2] Konsep 'lingua franca' yang dipegang oleh Bahasa Melayu di zaman Kesultanan Melaka menunjukkan...",
        options: [
            { id: "A", text: "Kemerosotan peradaban Melayu kerana menerima bahasa asing." },
            { id: "B", text: "Ketinggian peradaban Melayu yang bahasanya menjadi bahasa perantaraan antarabangsa di rantau itu." },
            { id: "C", text: "Penggunaan Bahasa Melayu secara paksaan ke atas semua pedagang asing." },
            { id: "D", text: "Bahasa Melayu hanya digunakan oleh golongan bangsawan sahaja." }
        ],
        correctAnswer: "B",
        explanation: {
            correct: "Jawapan B adalah betul. Apabila sesuatu bahasa menjadi lingua franca, ia menunjukkan tahap kemajuan dan pengaruh peradaban tersebut. Penggunaan meluas Bahasa Melayu oleh pelbagai pedagang di pelabuhan Melaka adalah bukti ketinggian dan keterbukaan peradaban Melayu pada ketika itu.",
            incorrect: {
                "A": "Pilihan A salah. Ia menunjukkan kemajuan, bukan kemerosotan.",
                "C": "Pilihan C salah. Penggunaannya berlaku secara semula jadi untuk memudahkan komunikasi.",
                "D": "Pilihan D salah. Ia digunakan secara meluas oleh semua lapisan masyarakat."
            }
        }
    },
    {
        id: 66,
        question: "[Topik 3] Apakah perbezaan antara proses 'akulturasi' dan 'asimilasi'?",
        options: [
            { id: "A", text: "Akulturasi melibatkan perkahwinan campur, manakala asimilasi tidak." },
            { id: "B", text: "Akulturasi mengekalkan identiti asal budaya, manakala asimilasi menghilangkannya." },
            { id: "C", text: "Akulturasi berlaku secara paksaan, manakala asimilasi secara sukarela." },
            { id: "D", text: "Akulturasi hanya melibatkan unsur makanan, manakala asimilasi melibatkan semua aspek budaya." }
        ],
        correctAnswer: "B",
        explanation: {
            correct: "Jawapan B adalah betul. Perbezaan utamanya ialah pada identiti asal. Dalam akulturasi, unsur budaya luar diterima dan disesuaikan tetapi budaya asal masih kekal (cth: pemberian 'angpau' dalam sampul hijau). Dalam asimilasi, budaya asal kumpulan minoriti akan hilang dan digantikan sepenuhnya oleh budaya dominan.",
            incorrect: {
                "A": "Pilihan A salah. Perkahwinan campur berkaitan dengan amalgamasi.",
                "C": "Pilihan C salah. Kedua-duanya boleh berlaku secara sukarela atau terpaksa.",
                "D": "Pilihan D salah. Kedua-duanya boleh melibatkan pelbagai aspek budaya."
            }
        }
    },
    {
        id: 67,
        question: "[Topik 4] Mengapakah pilihan raya dianggap sebagai 'tapak integrasi' walaupun ia sering menonjolkan perbezaan?",
        options: [
            { id: "A", text: "Kerana ia menjamin kemenangan parti yang sama setiap kali." },
            { id: "B", text: "Kerana ia menyediakan satu proses yang sah dan aman untuk memilih kerajaan, mengelakkan konflik perebutan kuasa." },
            { id: "C", text: "Kerana semua parti politik yang bertanding mempunyai ideologi yang sama." },
            { id: "D", text: "Kerana ia menghapuskan semua perbezaan pendapat dalam masyarakat." }
        ],
        correctAnswer: "B",
        explanation: {
            correct: "Jawapan B adalah betul. Walaupun kempen pilihan raya menaikkan sentimen perbezaan, institusi pilihan raya itu sendiri adalah satu 'tapak integrasi' yang kritikal. Ia menyediakan mekanisme yang dipersetujui bersama untuk peralihan kuasa secara damai, sekali gus menguruskan persaingan politik dalam kerangka undang-undang dan mengelakkan keganasan.",
            incorrect: {
                "A": "Pilihan A salah. Demokrasi tidak menjamin kemenangan pihak yang sama.",
                "C": "Pilihan C salah. Parti-parti mempunyai ideologi yang berbeza.",
                "D": "Pilihan D salah. Ia adalah platform untuk menyuarakan perbezaan pendapat."
            }
        }
    },
    {
        id: 68,
        question: "[Topik 1] 'Biografi masyarakat yang beretika akan membentuk negara yang dihormati'. Pernyataan ini menghubungkan kerangka...",
        options: [
            { id: "A", text: "Biografi, struktur sosial (negara), dan pasaran." },
            { id: "B", text: "Sejarah dan geografi." },
            { id: "C", text: "Prakolonial dan kolonial." },
            { id: "D", text: "Individu dan keluarga sahaja." }
        ],
        correctAnswer: "A",
        explanation: {
            correct: "Jawapan A adalah betul. Pernyataan ini menunjukkan rantaian pengaruh: Biografi kolektif (etika masyarakat) mempengaruhi struktur sosial (imej dan kestabilan negara), yang seterusnya memberi kesan kepada keyakinan pasaran (ekonomi dan pelaburan).",
            incorrect: {
                "B": "Pilihan B tidak disebut secara langsung.",
                "C": "Pilihan C adalah kerangka masa, bukan kerangka analisis sosial.",
                "D": "Pilihan D terlalu terhad; pernyataan itu merujuk kepada negara dan pasaran."
            }
        }
    },
    {
        id: 69,
        question: "[Topik 2] Apakah bukti arkeologi yang menunjukkan kewujudan peradaban awal di Zaman Neolitik di Alam Melayu?",
        options: [
            { id: "A", text: "Penemuan tulisan pada batu bersurat." },
            { id: "B", text: "Penemuan teknologi penciptaan baru yang lebih lengkap seperti tembikar dan alat batu yang dilicinkan." },
            { id: "C", text: "Pembinaan candi-candi besar yang diperbuat daripada batu." },
            { id: "D", text: "Penggunaan mata wang syiling yang diperbuat daripada emas." }
        ],
        correctAnswer: "B",
        explanation: {
            correct: "Jawapan B adalah betul. Zaman Neolitik atau Zaman Batu Baru/Akhir dicirikan oleh kemajuan teknologi berbanding zaman sebelumnya. Penemuan artifak seperti tembikar (untuk memasak dan menyimpan) dan alatan batu yang digilap menunjukkan masyarakat yang lebih maju dan mula hidup secara tetap.",
            incorrect: {
                "A": "Pilihan A merujuk kepada zaman Proto-Sejarah atau Pensejarahan.",
                "C": "Pilihan C merujuk kepada zaman pengaruh Hindu-Buddha.",
                "D": "Pilihan D merujuk kepada zaman kerajaan yang lebih lewat."
            }
        }
    },
    {
        id: 70,
        question: "[Topik 3] Apakah matlamat utama penyusunan semula masyarakat dalam Dasar Ekonomi Baru (DEB)?",
        options: [
            { id: "A", text: "Untuk menempatkan semua kaum dalam satu kawasan perumahan yang sama." },
            { id: "B", text: "Untuk menghapuskan pengenalan kaum dengan fungsi ekonomi dan lokasi geografi." },
            { id: "C", text: "Untuk memastikan semua rakyat bekerja dalam sektor kerajaan sahaja." },
            { id: "D", text: "Untuk memansuhkan semua jenis perniagaan swasta." }
        ],
        correctAnswer: "B",
        explanation: {
            correct: "Jawapan B adalah betul. Matlamat kedua DEB adalah untuk menyusun semula masyarakat bagi mengurangkan dan akhirnya menghapuskan keadaan di mana sesuatu kaum itu terlalu sinonim dengan satu jenis pekerjaan (cth: Melayu-petani) atau satu lokasi (cth: India-estet). Ini bertujuan untuk menggalakkan integrasi ekonomi.",
            incorrect: {
                "A": "Pilihan A tidak praktikal dan bukan matlamat DEB.",
                "C": "Pilihan C salah. DEB menggalakkan penyertaan dalam semua sektor.",
                "D": "Pilihan D salah. DEB menyokong pembangunan sektor swasta."
            }
        }
    },
    {
        id: 71,
        question: "[Topik 4] Bagaimanakah perbezaan antara 'detik perpaduan' dan 'kesepaduan sosial'?",
        options: [
            { id: "A", text: "'Detik perpaduan' adalah keadaan kekal, manakala 'kesepaduan' bersifat sementara." },
            { id: "B", text: "'Detik perpaduan' adalah momen spesifik dan sering kali emosional, manakala 'kesepaduan' adalah keadaan umum yang stabil dan berterusan." },
            { id: "C", text: "'Detik perpaduan' hanya berlaku dalam sukan, manakala 'kesepaduan' berlaku dalam politik." },
            { id: "D", text: "Tiada perbezaan, kedua-duanya merujuk kepada perkara yang sama." }
        ],
        correctAnswer: "B",
        explanation: {
            correct: "Jawapan B adalah betul. 'Detik perpaduan' adalah peristiwa atau momen singkat di mana perpaduan dirasai dengan kuat (cth: meraikan kemenangan sukan). 'Kesepaduan' pula adalah keadaan struktur sosial yang lebih luas dan stabil dalam kehidupan seharian, yang membolehkan masyarakat berfungsi secara aman walaupun wujud perbezaan.",
            incorrect: {
                "A": "Pilihan A salah. Yang berlaku adalah sebaliknya.",
                "C": "Pilihan C salah. Kedua-duanya boleh berlaku dalam pelbagai konteks.",
                "D": "Pilihan D salah. Terdapat perbezaan konseptual."
            }
        }
    },
    {
        id: 72,
        question: "[Topik 1] Mengapakah penghayatan etika dan peradaban penting untuk difahami mengikut 'acuan Malaysia'?",
        options: [
            { id: "A", text: "Kerana acuan Malaysia adalah yang terbaik di dunia." },
            { id: "B", text: "Kerana konsep etika universal dari Barat tidak relevan sama sekali di Malaysia." },
            { id: "C", text: "Kerana ia mengambil kira konteks unik sejarah dan kepelbagaian masyarakat tempatan dalam membentuk nilai." },
            { id: "D", text: "Kerana ia menolak semua bentuk etika tradisional." }
        ],
        correctAnswer: "C",
        explanation: {
            correct: "Jawapan C adalah betul. 'Acuan Malaysia' menekankan kepentingan memahami bagaimana nilai-nilai etika dibentuk oleh pengalaman sejarah yang unik (prakolonial, kolonial, pascakolonial) dan realiti masyarakat yang berbilang kaum. Ia bukan sekadar mengguna pakai teori universal tanpa penyesuaian.",
            incorrect: {
                "A": "Pilihan A adalah satu pandangan subjektif dan bukan justifikasi akademik.",
                "B": "Pilihan B salah. Konsep universal relevan tetapi perlu disesuaikan.",
                "D": "Pilihan D salah. Ia menggabungkan, bukan menolak, etika tradisional."
            }
        }
    },
    {
        id: 73,
        question: "[Topik 2] Apakah kesan utama Perjanjian Inggeris-Belanda 1824 terhadap Alam Melayu?",
        options: [
            { id: "A", text: "Ia menyatukan seluruh Kepulauan Melayu di bawah satu pemerintahan." },
            { id: "B", text: "Ia memulakan Perang Dunia Pertama di rantau ini." },
            { id: "C", text: "Ia secara rasmi membahagikan Kepulauan Melayu kepada dua lingkungan pengaruh: British dan Belanda." },
            { id: "D", text: "Ia memberikan kemerdekaan kepada semua negeri-negeri Melayu." }
        ],
        correctAnswer: "C",
        explanation: {
            correct: "Jawapan C adalah betul. Perjanjian ini merupakan titik penting yang membahagikan dunia Melayu. British menguasai Semenanjung Tanah Melayu dan Singapura, manakala Belanda menguasai kepulauan di selatan (kini Indonesia). Garis sempadan ini menjadi asas kepada pembentukan negara Malaysia dan Indonesia moden.",
            incorrect: {
                "A": "Pilihan A salah. Ia memecahbelahkan, bukan menyatukan.",
                "B": "Pilihan B tidak berkaitan.",
                "D": "Pilihan D salah. Ia mengukuhkan penjajahan, bukan memberi kemerdekaan."
            }
        }
    },
    {
        id: 74,
        question: "[Topik 3] Apakah yang membezakan falsafah pemikiran moden dengan pemikiran tradisional dari segi penentuan matlamat hidup?",
        options: [
            { id: "A", text: "Pemikiran moden menyerahkan penentuan matlamat hidup kepada takdir semata-mata." },
            { id: "B", text: "Pemikiran moden menekankan bahawa manusia berhak menentukan matlamat hidupnya sendiri dan cara untuk mencapainya." },
            { id: "C", text: "Pemikiran moden menolak sama sekali konsep mempunyai matlamat dalam hidup." },
            { id: "D", text: "Pemikiran moden menetapkan bahawa matlamat hidup semua manusia adalah sama." }
        ],
        correctAnswer: "B",
        explanation: {
            correct: "Jawapan B adalah betul. Ini adalah perbezaan asas. Pemikiran tradisional sering melihat matlamat hidup sebagai sesuatu yang telah ditetapkan oleh kuasa yang lebih tinggi (Tuhan, alam). Pemikiran moden, yang dipengaruhi oleh humanisme dan individualisme, menekankan kebebasan dan autonomi individu untuk memilih dan membentuk haluan hidup sendiri.",
            incorrect: {
                "A": "Pilihan A adalah ciri pemikiran tradisional.",
                "C": "Pilihan C salah. Ia menekankan pencarian matlamat peribadi.",
                "D": "Pilihan D salah. Ia meraikan kepelbagaian matlamat individu."
            }
        }
    },
    {
        id: 75,
        question: "[Topik 4] Apakah yang dimaksudkan dengan 'penyatupaduan berterusan'?",
        options: [
            { id: "A", text: "Satu projek mega yang akan disiapkan dalam masa setahun." },
            { id: "B", text: "Satu keadaan di mana semua masalah sosial telah berjaya diselesaikan." },
            { id: "C", text: "Satu proses dinamik yang tidak pernah berakhir untuk mengurus kepelbagaian dan defisit sosial." },
            { id: "D", text: "Satu dasar yang hanya dilaksanakan sebelum pilihan raya umum." }
        ],
        correctAnswer: "C",
        explanation: {
            correct: "Jawapan C adalah betul. Konsep ini menekankan bahawa usaha untuk membina dan mengekalkan keharmonian dalam masyarakat majmuk bukanlah satu tugas yang ada titik noktahnya. Ia adalah satu proses yang perlu sentiasa diusahakan, dipantau, dan disesuaikan mengikut perubahan zaman dan cabaran baharu.",
            incorrect: {
                "A": "Pilihan A salah. Ia bukan projek jangka pendek.",
                "B": "Pilihan B adalah keadaan ideal (perpaduan), bukan proses.",
                "D": "Pilihan D salah. Ia adalah usaha jangka panjang."
            }
        }
    },
    {
        id: 76,
        question: "[Topik 1] Apakah peranan 'adat istiadat' dalam struktur masyarakat tradisional?",
        options: [
            { id: "A", text: "Sebagai hiburan semata-mata." },
            { id: "B", text: "Untuk mengesahkan dan memperkukuh struktur sosial serta hierarki kuasa." },
            { id: "C", text: "Untuk menentang kuasa pemerintah." },
            { id: "D", text: "Sebagai cara untuk menjana pendapatan ekonomi." }
        ],
        correctAnswer: "B",
        explanation: {
            correct: "Jawapan B adalah betul. Adat istiadat, seperti istiadat pertabalan, penganugerahan darjah kebesaran, atau upacara menghadap raja, berfungsi untuk melegitimasikan (mengesahkan) kedudukan dan kuasa golongan pemerintah serta menegaskan susun lapis dalam masyarakat.",
            incorrect: {
                "A": "Pilihan A salah. Walaupun ada elemen keraian, fungsi utamanya lebih mendalam.",
                "C": "Pilihan C salah. Ia bertujuan untuk menyokong, bukan menentang, kuasa pemerintah.",
                "D": "Pilihan D tidak berkaitan."
            }
        }
    },
    {
        id: 77,
        question: "[Topik 2] Apakah kesan utama perkembangan media digital terhadap etika dan peradaban dalam era globalisasi?",
        options: [
            { id: "A", text: "Ia mengukuhkan nilai-nilai etika tradisional tempatan semata-mata." },
            { id: "B", text: "Ia menyebabkan masyarakat terputus sepenuhnya dari dunia luar." },
            { id: "C", text: "Ia mempercepatkan penyebaran pelbagai nilai dan budaya (termasuk budaya Barat) yang mencabar etika sedia ada." },
            { id: "D", text: "Ia hanya memberi kesan kepada golongan muda di kawasan bandar." }
        ],
        correctAnswer: "C",
        explanation: {
            correct: "Jawapan C adalah betul. Media digital bertindak sebagai pemangkin globalisasi, membolehkan ideologi, gaya hidup, dan nilai dari seluruh dunia (terutamanya Barat) menyerap masuk dengan pantas. Ini mewujudkan cabaran di mana nilai-nilai ini mungkin bercanggah dengan etika dan peradaban tempatan.",
            incorrect: {
                "A": "Pilihan A salah. Ia sering kali mencabar nilai tradisional.",
                "B": "Pilihan B salah. Ia menghubungkan, bukan memutuskan.",
                "D": "Pilihan D salah. Kesannya meluas kepada semua lapisan masyarakat."
            }
        }
    },
    {
        id: 78,
        question: "[Topik 3] Apakah perbezaan utama antara masyarakat di zaman Kesultanan Melaka dengan masyarakat di zaman kolonial British?",
        options: [
            { id: "A", text: "Masyarakat zaman Melaka lebih terasing berbanding zaman British." },
            { id: "B", text: "Masyarakat zaman Melaka bersifat homogen, manakala zaman British bersifat heterogen." },
            { id: "C", text: "Interaksi sosial di zaman Melaka lebih bersifat integratif (pluraliti), manakala di zaman British lebih bersifat terpisah (masyarakat majmuk)." },
            { id: "D", text: "Ekonomi zaman Melaka berasaskan industri, manakala zaman British berasaskan pertanian." }
        ],
        correctAnswer: "C",
        explanation: {
            correct: "Jawapan C adalah betul. Di zaman Melaka, kepelbagaian wujud dalam kerangka pluraliti di mana interaksi, perkahwinan campur, dan integrasi sosial berlaku secara semula jadi. Di zaman British, kepelbagaian wujud dalam bentuk masyarakat majmuk yang dicirikan oleh segregasi kaum mengikut ekonomi dan petempatan.",
            incorrect: {
                "A": "Pilihan A salah. Melaka adalah pelabuhan antarabangsa yang sibuk.",
                "B": "Pilihan B salah. Kedua-dua zaman mempunyai masyarakat yang heterogen (pelbagai).",
                "D": "Pilihan D salah. Ekonomi zaman Melaka berasaskan perdagangan, manakala zaman British berasaskan komoditi (perlombongan dan perladangan)."
            }
        }
    },
    {
        id: 79,
        question: "[Topik 4] Apakah tujuan utama kerajaan memperkenalkan dasar-dasar seperti Dasar Kebudayaan Kebangsaan?",
        options: [
            { id: "A", text: "Untuk menghapuskan semua kebudayaan kaum minoriti." },
            { id: "B", text: "Untuk mewujudkan satu identiti nasional yang berteraskan kebudayaan rakyat asal rantau ini sebagai asas." },
            { id: "C", text: "Untuk mempromosikan kebudayaan Barat sebagai budaya utama negara." },
            { id: "D", text: "Untuk menjadikan aktiviti kebudayaan sebagai sumber utama pendapatan negara." }
        ],
        correctAnswer: "B",
        explanation: {
            correct: "Jawapan B adalah betul. Dasar Kebudayaan Kebangsaan adalah satu usaha 'penyatupaduan' untuk membentuk satu identiti nasional. Ia menggariskan tiga prinsip: berteraskan kebudayaan rakyat asal rantau ini, menerima unsur-unsur kebudayaan lain yang sesuai, dan Islam menjadi unsur penting dalam pembentukannya.",
            incorrect: {
                "A": "Pilihan A salah. Unsur kebudayaan lain yang sesuai diterima.",
                "C": "Pilihan C salah. Asasnya adalah kebudayaan tempatan.",
                "D": "Pilihan D salah. Tujuan utamanya adalah untuk pembinaan bangsa, bukan ekonomi."
            }
        }
    },
    {
        id: 80,
        question: "[Topik 2] Apakah yang dimaksudkan dengan 'sistem pembesar empat lipatan' dalam pentadbiran Kesultanan Melayu Melaka?",
        options: [
            { id: "A", text: "Sistem cukai yang mempunyai empat peringkat." },
            { id: "B", text: "Sistem ketenteraan yang terdiri daripada empat bahagian utama." },
            { id: "C", text: "Sistem pentadbiran berhierarki di bawah Sultan yang terdiri daripada Bendahara, Penghulu Bendahari, Temenggung, dan Laksamana." },
            { id: "D", text: "Sistem perundangan yang berasaskan empat buah kitab undang-undang." }
        ],
        correctAnswer: "C",
        explanation: {
            correct: "Jawapan C adalah betul. Ini adalah struktur pentadbiran utama Kesultanan Melayu Melaka yang menunjukkan satu sistem yang teratur dan sistematik. Ia terdiri daripada pembesar-pembesar utama yang mempunyai portfolio dan tanggungjawab masing-masing, yang menyumbang kepada kecekapan dan kemakmuran Melaka.",
            incorrect: {
                "A": "Pilihan A salah. Ia berkaitan dengan pentadbiran, bukan cukai secara spesifik.",
                "B": "Pilihan B salah. Laksamana adalah sebahagian daripadanya, tetapi ia bukan sistem ketenteraan.",
                "D": "Pilihan D salah. Ia adalah sistem pentadbiran, bukan perundangan."
            }
        }
    }
];
