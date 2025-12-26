const vocab = [

{ q:"姉 → ?", a:"abla", c:["anne","arkadaş","abla değil"], ex:"Abla burada.", pos:"noun"},
{ q:"〜かしら、〜かな → ?", a:"acaba", c:["ama","neden","ayrı"], ex:"Acaba bu doğru mu?", pos:"other"},
{ q:"開いている → ?", a:"açık", c:["kapalı","açmak","ayrı"], ex:"Kapı açık.", pos:"adj"},
{ q:"開ける → ?", a:"açmak", c:["kapatmak","çekmek","itmek"], ex:"Kapıyı açmak istiyorum.", pos:"verb"},
{ q:"名前 → ?", a:"ad", c:["ada","şey","isim"], ex:"Adım Deniz.", pos:"noun"},
{ q:"島 → ?", a:"ada", c:["ad","ada değil","oda"], ex:"Ada küçük.", pos:"noun"},
{ q:"許す → ?", a:"affetmek", c:["izin vermek","unutmak","affedersiniz"], ex:"Beni affet.", pos:"verb"},
{ q:"兄 → ?", a:"ağabey", c:["arkadaş","amca","abi"], ex:"Ağabeyim Ankara’da.", pos:"noun"},
{ q:"流れる → ?", a:"akmak", c:["ağlamak","almak","gitmek"], ex:"Su akıyor.", pos:"verb"},
{ q:"夕方 → ?", a:"akşam", c:["sabah","gece","öğle"], ex:"Akşam yemeği hazır mı?", pos:"noun"},
{ q:"買い物 → ?", a:"alışveriş", c:["alışmak","satış","pazar"], ex:"Alışveriş yapıyorum.", pos:"noun"},
{ q:"もらう、買う → ?", a:"almak", c:["satmak","vermek","istemek"], ex:"Bir kahve almak istiyorum.", pos:"verb"},
{ q:"もしもし → ?", a:"alo", c:["merhaba","selam","hey"], ex:"Alo? Deniz ben.", pos:"expression"},
{ q:"6 → ?", a:"altı", c:["beş","yedi","altmış"], ex:"Altı kişi var.", pos:"num"},
{ q:"60 → ?", a:"altmış", c:["altı","yetmiş","elli"], ex:"Altmış lira.", pos:"num"},
{ q:"でも、しかし → ?", a:"ama", c:["ve","fakat","amaç"], ex:"Gelmek istiyorum ama vaktim yok.", pos:"other"},
{ q:"アメリカ人 → ?", a:"Amerikan", c:["Amerikalı","Amerika","yabancı"], ex:"Amerikan arabası.", pos:"adj"},
{ q:"母 → ?", a:"anne", c:["abla","kadın","bayan"], ex:"Annem evde.", pos:"noun"},
{ q:"車 → ?", a:"araba", c:["otobüs","dolmuş","tren"], ex:"Araba burada.", pos:"noun"},
{ q:"探す、電話する → ?", a:"aramak", c:["bulmak","bakmak","sormak"], ex:"Deniz’i arıyorum.", pos:"verb"},
{ q:"後ろ → ?", a:"arka", c:["ön","yan","alt"], ex:"Arka kapı kapalı.", pos:"noun"},
{ q:"友だち → ?", a:"arkadaş", c:["abla","anne","çocuk"], ex:"Arkadaşım Türkçe konuşuyor.", pos:"noun"},
{ q:"料理人 → ?", a:"aşçı", c:["öğretmen","garson","memur"], ex:"Aşçı çok iyi yemek yapıyor.", pos:"noun"},
{ q:"ユーロ → ?", a:"avro", c:["dolar","lira","yen"], ex:"Avro var mı?", pos:"noun"},
{ q:"月 → ?", a:"ay", c:["hafta","yıl","gün"], ex:"Bir ay kaldım.", pos:"noun"},
{ q:"同じ → ?", a:"aynı", c:["ayrı","az","çok"], ex:"Aynı oda.", pos:"adj"},
{ q:"別の → ?", a:"ayrı", c:["aynı","az","çok"], ex:"Ayrı masalar.", pos:"adj"},
{ q:"別々に → ?", a:"ayrı ayrı", c:["birlikte","tek","aynı"], ex:"Ayrı ayrı ödeyelim.", pos:"adv"},
{ q:"少ない → ?", a:"az", c:["çok","biraz","yavaş"], ex:"Param az.", pos:"adj"},

/* --- B --- */
{ q:"父 → ?", a:"baba", c:["dede","amca","dayı"], ex:"Babam evde.", pos:"noun"},
{ q:"見る → ?", a:"bakmak", c:["görmek","aramak","izlemek"], ex:"Bakma!", pos:"verb"},
{ q:"魚 → ?", a:"balık", c:["tavuk","et","köpek"], ex:"Balık taze.", pos:"noun"},
{ q:"銀行 → ?", a:"banka", c:["market","otel","bilet"], ex:"Banka kapalı mı?", pos:"noun"},
{ q:"浴室 → ?", a:"banyo", c:["tuvalet","oda","mutfak"], ex:"Banyo nerede?", pos:"noun"},
{ q:"他の（別の） → ?", a:"başka", c:["aynı","az","çok"], ex:"Başka bir şey?", pos:"adj"},
{ q:"始まる → ?", a:"başlamak", c:["bitmek","durmak","gitmek"], ex:"Ders başlıyor.", pos:"verb"},
{ q:"毛布 → ?", a:"battaniye", c:["yorgan","çarşaf","pike"], ex:"Battaniye sıcak.", pos:"noun"},
{ q:"独身 → ?", a:"bekâr", c:["evli","genç","yalnız"], ex:"O bekâr.", pos:"adj"},
{ q:"待つ → ?", a:"beklemek", c:["aramak","gelmek","durmak"], ex:"Bir dakika bekleyebilir misiniz?", pos:"verb"},
{ q:"私 → ?", a:"ben", c:["bana","beni","biz"], ex:"Ben Deniz.", pos:"pron"},
{ q:"一緒に → ?", a:"beraber", c:["ayrı","yalnız","çok"], ex:"Beraber gidelim mi?", pos:"adv"},
{ q:"5 → ?", a:"beş", c:["dört","altı","sekiz"], ex:"Beş lira.", pos:"num"},
{ q:"切符 → ?", a:"bilet", c:["kart","fiş","para"], ex:"Bilet ne kadar?", pos:"noun"},
{ q:"パソコン → ?", a:"bilgisayar", c:["telefon","tablet","televizyon"], ex:"Bilgisayarım yeni.", pos:"noun"},
{ q:"知る → ?", a:"bilmek", c:["anlamak","duymak","öğrenmek"], ex:"Bilmiyorum.", pos:"verb"},
{ q:"1つの → ?", a:"bir", c:["bu","o","şu"], ex:"Bir kahve, lütfen.", pos:"num"},
{ q:"何か → ?", a:"bir şey", c:["hiçbir şey","biraz","şey"], ex:"Bir şey sormak istiyorum.", pos:"other"},
{ q:"少し → ?", a:"biraz", c:["az","çok","hemen"], ex:"Biraz Türkçe konuşuyorum.", pos:"adv"},
{ q:"終わる → ?", a:"bitmek", c:["başlamak","durmak","bitirmek"], ex:"Ders bitti.", pos:"verb"},
{ q:"終わらせる → ?", a:"bitirmek", c:["bitmek","başlamak","yapmak"], ex:"Ödevi bitirdim.", pos:"verb"},
{ q:"借金 → ?", a:"borç", c:["para","banka","bornoz"], ex:"Borç aldım.", pos:"noun"},
{ q:"壊す → ?", a:"bozmak", c:["kırmak","dökmek","silmek"], ex:"Telefonu bozdum.", pos:"verb"},
{ q:"壊れている → ?", a:"bozuk", c:["sağlam","yeni","tamir"], ex:"Makine bozuk.", pos:"adj"},
{ q:"これ → ?", a:"bu", c:["şu","o","burası"], ex:"Bu doğru mu?", pos:"other"},
{ q:"今日 → ?", a:"bugün", c:["yarın","dün","şimdi"], ex:"Bugün hava güzel.", pos:"adv"},
{ q:"見つける → ?", a:"bulmak", c:["aramak","bakmak","sormak"], ex:"Yeni bir iş buldum.", pos:"verb"},
{ q:"会う → ?", a:"buluşmak", c:["ara","beklemek","gitmek"], ex:"Saat üçte buluşalım.", pos:"verb"},
{ q:"どうぞ → ?", a:"Buyurun", c:["Lütfen","Affedersiniz","Merhaba"], ex:"Buyurun.", pos:"expression"},
{ q:"大きい → ?", a:"büyük", c:["küçük","geniş","uzun"], ex:"Büyük oda.", pos:"adj"},

/* --- C --- */
{ q:"通り → ?", a:"cadde", c:["sokak","yol","şehir"], ex:"Bu cadde çok uzun.", pos:"noun"},
{ q:"ガラス → ?", a:"cam", c:["kapı","pencere","masa"], ex:"Cam kırık.", pos:"noun"},
{ q:"ポケット → ?", a:"cep", c:["çanta","kol","elbise"], ex:"Cep dolu.", pos:"noun"},
{ q:"速く → ?", a:"çabuk", c:["yavaş","hemen","çabuk değil"], ex:"Çabuk gel!", pos:"adv"},
{ q:"働く → ?", a:"çalışmak", c:["okumak","yazmak","dinlenmek"], ex:"Şirkette çalışıyorum.", pos:"verb"},
{ q:"かばん → ?", a:"çanta", c:["cep","kitap","araba"], ex:"Bu benim çantam.", pos:"noun"},
{ q:"市場 → ?", a:"çarşı", c:["pazar","mağaza","sokak"], ex:"Çarşı kalabalık.", pos:"noun"},
{ q:"お茶 → ?", a:"çay", c:["kahve","su","ayran"], ex:"Çay içer misiniz?", pos:"noun"},
{ q:"引く → ?", a:"çekmek", c:["itmek","almak","bakmak"], ex:"Fotoğraf çekmek yasak.", pos:"verb"},
{ q:"撮ってもらう → ?", a:"çektirmek", c:["çekmek","göstermek","yapmak"], ex:"Fotoğraf çektirdim.", pos:"verb"},
{ q:"出る → ?", a:"çıkmak", c:["girmek","gitmek","inmek"], ex:"Dışarı çıkıyorum.", pos:"verb"},
{ q:"子ども → ?", a:"çocuk", c:["genç","kız","erkek"], ex:"Çocuk parkta.", pos:"noun"},
{ q:"多い → ?", a:"çok", c:["az","biraz","fazla"], ex:"Çok güzel.", pos:"adv"},
{ q:"スープ → ?", a:"çorba", c:["salata","su","ekmek"], ex:"Çorba sıcak.", pos:"noun"},

/* --- D --- */
{ q:"先生（医師） → ?", a:"doktor", c:["hemşire","öğretmen","polis"], ex:"Doktor burada.", pos:"noun"},
{ q:"飲む → ?", a:"içmek", c:["yemek","vermek","gitmek"], ex:"Su iç.", pos:"verb"},

/* --- E --- */
{ q:"薬局 → ?", a:"eczane", c:["hastane","market","mağaza"], ex:"Eczane açık mı?", pos:"noun"},
{ q:"薬 → ?", a:"ilaç", c:["yemek","su","çay"], ex:"İlaç alıyorum.", pos:"noun"},
{ q:"家 → ?", a:"ev", c:["oda","bina","daire"], ex:"Ev büyük.", pos:"noun"},

/* --- F --- */
{ q:"作る → ?", a:"yapmak", c:["etmek","gitmek","almak"], ex:"Yemek yapmak istiyorum.", pos:"verb"},
{ q:"値段 → ?", a:"fiyat", c:["para","hediye","borç"], ex:"Fiyat yüksek.", pos:"noun"},

/* --- G --- */
{ q:"来る → ?", a:"gelmek", c:["gitmek","girmek","çıkmak"], ex:"Buraya gel.", pos:"verb"},
{ q:"笑う → ?", a:"gülmek", c:["ağlamak","sevinmek","konuşmak"], ex:"Gülüyorum.", pos:"verb"},
{ q:"日 → ?", a:"gün", c:["hafta","ay","yıl"], ex:"Bugün güzel.", pos:"noun"},
{ q:"目 → ?", a:"göz", c:["kulak","burun","ağız"], ex:"Gözüm acıyor.", pos:"noun"},
{ q:"美しい → ?", a:"güzel", c:["çirkin","kötü","fena"], ex:"Çok güzel.", pos:"adj"},

/* --- H --- */
{ q:"どれ？ → ?", a:"hangi", c:["ne","kim","nerede"], ex:"Hangi kitap?", pos:"other"},
{ q:"準備する → ?", a:"hazırlamak", c:["yapmak","çalışmak","beklemek"], ex:"Yemek hazırlıyorum.", pos:"verb"},
{ q:"準備できている → ?", a:"hazır", c:["boş","dolu","yeni"], ex:"Hazır mısın?", pos:"adj"},
{ q:"暑い → ?", a:"sıcak", c:["soğuk","serin","ılık"], ex:"Hava sıcak.", pos:"adj"},
{ q:"速い → ?", a:"hızlı", c:["yavaş","çabuk","hemen"], ex:"Hızlı tren.", pos:"adj"},
{ q:"飛行機 → ?", a:"uçak", c:["tren","otobüs","araba"], ex:"Uçak kalkıyor.", pos:"noun"},
{ q:"冬 → ?", a:"kış", c:["yaz","sonbahar","ilkbahar"], ex:"Kış soğuk.", pos:"noun"},
{ q:"春 → ?", a:"ilkbahar", c:["yaz","sonbahar","kış"], ex:"İlkbahar geliyor.", pos:"noun"},

/* --- I / İ --- */
{ q:"飲む → ?", a:"içmek", c:["yemek","gitmek","vermek"], ex:"Su iç.", pos:"verb"},
{ q:"薬 → ?", a:"ilaç", c:["yemek","su","çay"], ex:"İlaç alıyorum.", pos:"noun"},
{ q:"必要な → ?", a:"lazım", c:["gerekli değil","boş","uygun"], ex:"Bana su lazım.", pos:"adj"},
{ q:"理解する → ?", a:"anlamak", c:["bilmek","duymak","öğrenmek"], ex:"Anlamıyorum.", pos:"verb"},
{ q:"行く → ?", a:"gitmek", c:["gelmek","çıkmak","koşmak"], ex:"Okula gidiyorum.", pos:"verb"},
{ q:"来る → ?", a:"gelmek", c:["gitmek","girmek","çıkmak"], ex:"Buraya gel.", pos:"verb"},
{ q:"歩く → ?", a:"yürümek", c:["koşmak","binmek","gitmek"], ex:"Yürümeyi seviyorum.", pos:"verb"},

/* --- K --- */
{ q:"赤 → ?", a:"kırmızı", c:["mavi","sarı","yeşil"], ex:"Elma kırmızı.", pos:"adj"},
{ q:"黄色 → ?", a:"sarı", c:["kırmızı","mavi","beyaz"], ex:"Araba sarı.", pos:"adj"},
{ q:"黒 → ?", a:"siyah", c:["beyaz","gri","kahverengi"], ex:"Siyah çanta.", pos:"adj"},
{ q:"白 → ?", a:"beyaz", c:["siyah","gri","sarı"], ex:"Beyaz gömlek.", pos:"adj"},
{ q:"簡単 → ?", a:"kolay", c:["zor","karışık","ağır"], ex:"Kolay soru.", pos:"adj"},
{ q:"難しい → ?", a:"zor", c:["kolay","hafif","açık"], ex:"Türkçe zor mu?", pos:"adj"},
{ q:"口 → ?", a:"ağız", c:["göz","burun","el"], ex:"Ağzını kapat.", pos:"noun"},
{ q:"鼻 → ?", a:"burun", c:["kulak","göz","ağız"], ex:"Burnum tıkalı.", pos:"noun"},
{ q:"耳 → ?", a:"kulak", c:["göz","ağız","burun"], ex:"Kulaklarım üşüyor.", pos:"noun"},
{ q:"目 → ?", a:"göz", c:["kulak","burun","ağız"], ex:"Gözüm acıyor.", pos:"noun"},
{ q:"使う → ?", a:"kullanmak", c:["vermek","almak","yapmak"], ex:"Bilgisayar kullanıyorum.", pos:"verb"},
{ q:"怒る → ?", a:"kızmak", c:["sevinmek","gülmek","ağlamak"], ex:"Bana kızma.", pos:"verb"},
{ q:"座る → ?", a:"oturmak", c:["kalkmak","gitmek","durmak"], ex:"Burada oturuyorum.", pos:"verb"},
{ q:"書く → ?", a:"yazmak", c:["okumak","çizmek","çalışmak"], ex:"Mektup yazıyorum.", pos:"verb"},

/* --- L --- */
{ q:"手紙 → ?", a:"mektup", c:["kitap","gazete","defter"], ex:"Mektup yazıyorum.", pos:"noun"},
{ q:"肉 → ?", a:"et", c:["balık","tavuk","yumurta"], ex:"Et pişiyor.", pos:"noun"},
{ q:"市場 → ?", a:"pazar", c:["çarşı","market","sokak"], ex:"Pazar bugün açık.", pos:"noun"},
{ q:"値段 → ?", a:"fiyat", c:["para","hediye","ucuz"], ex:"Fiyat yüksek.", pos:"noun"},
{ q:"食べる → ?", a:"yemek", c:["içmek","gitmek","almak"], ex:"Yemek yiyorum.", pos:"verb"},

/* --- M --- */
{ q:"店 → ?", a:"mağaza", c:["market","pazar","dükkan"], ex:"Mağaza kapalı.", pos:"noun"},
{ q:"お金 → ?", a:"para", c:["kart","bilet","hediye"], ex:"Param var.", pos:"noun"},
{ q:"安い → ?", a:"ucuz", c:["pahalı","az","çok"], ex:"Bu çok ucuz.", pos:"adj"},
{ q:"高い（価格） → ?", a:"pahalı", c:["ucuz","az","çok"], ex:"Bu pahalı.", pos:"adj"},
{ q:"愛する → ?", a:"sevmek", c:["nefret etmek","istemek","hoşlanmak"], ex:"Onu seviyorum.", pos:"verb"},
{ q:"好きではない → ?", a:"sevmemek", c:["sevmek","istemek","nefret"], ex:"Şunu sevmiyorum.", pos:"verb"},
{ q:"話す → ?", a:"konuşmak", c:["dinlemek","yazmak","okumak"], ex:"Türkçe konuşuyorum.", pos:"verb"},
{ q:"聞く → ?", a:"duymak", c:["dinlemek","bakmak","sormak"], ex:"Duymuyorum.", pos:"verb"},
{ q:"見る → ?", a:"görmek", c:["bakmak","izlemek","aramak"], ex:"Gördüm.", pos:"verb"},

/* --- N --- */
{ q:"どこ → ?", a:"nerede", c:["kim","ne","nereden"], ex:"Nerede oturuyorsun?", pos:"other"},
{ q:"どうして → ?", a:"neden", c:["nasıl","kim","nerede"], ex:"Neden gelmiyorsun?", pos:"other"},
{ q:"本当に？ → ?", a:"gerçekten mi", c:["neden","nasıl","kim"], ex:"Gerçekten mi?", pos:"other"},
{ q:"川 → ?", a:"nehir", c:["göl","deniz","su"], ex:"Nehir akıyor.", pos:"noun"},
{ q:"湖 → ?", a:"göl", c:["deniz","nehir","su"], ex:"Göl geniş.", pos:"noun"},

/* --- O --- */
{ q:"部屋 → ?", a:"oda", c:["ev","kapı","mutfak"], ex:"Oda temiz.", pos:"noun"},
{ q:"トイレ → ?", a:"tuvalet", c:["banyo","lavabo","oda"], ex:"Tuvalet nerede?", pos:"noun"},
{ q:"店員 → ?", a:"satıcı", c:["garson","memur","kasiyer"], ex:"Satıcı yardımcı oldu.", pos:"noun"},
{ q:"売る → ?", a:"satmak", c:["almak","vermek","istemek"], ex:"Meyve satıyorum.", pos:"verb"},

/* --- P --- */
{ q:"窓 → ?", a:"pencere", c:["kapı","masa","duvar"], ex:"Pencere açık.", pos:"noun"},
{ q:"道 → ?", a:"yol", c:["cadde","sokak","köprü"], ex:"Yol uzun.", pos:"noun"},
{ q:"郵便局 → ?", a:"postane", c:["market","banka","okul"], ex:"Postane kapalı.", pos:"noun"},
{ q:"郵便 → ?", a:"posta", c:["kargo","mektup","paket"], ex:"Posta geldi.", pos:"noun"},

/* --- R --- */
{ q:"色 → ?", a:"renk", c:["şekil","sayı","sıcak"], ex:"Renk güzel.", pos:"noun"},

/* --- S --- */
{ q:"時間 → ?", a:"saat", c:["dakika","gün","hafta"], ex:"Saat kaç?", pos:"noun"},
{ q:"歌う → ?", a:"şarkı söylemek", c:["dinlemek","duymak","konuşmak"], ex:"Şarkı söylüyorum.", pos:"verb"},
{ q:"踊る → ?", a:"dans etmek", c:["koşmak","yürümek","oturmak"], ex:"Dans edelim.", pos:"verb"},
{ q:"閉める → ?", a:"kapatmak", c:["açmak","kırmak","itmek"], ex:"Kapıyı kapat.", pos:"verb"},
{ q:"落ち着く → ?", a:"sakin olmak", c:["kızmak","koşmak","ağlamak"], ex:"Sakin ol.", pos:"verb"},
{ q:"急いで → ?", a:"acele", c:["yavaş","hemen","az"], ex:"Acele et!", pos:"adv"},
{ q:"ありがとう → ?", a:"teşekkür ederim", c:["sağ ol","merhaba","affedersiniz"], ex:"Teşekkür ederim.", pos:"expression"},
{ q:"どういたしまして → ?", a:"bir şey değil", c:["teşekkür ederim","evet","hayır"], ex:"Bir şey değil.", pos:"expression"},
{ q:"はい → ?", a:"evet", c:["hayır","belki","tamam"], ex:"Evet, istiyorum.", pos:"other"},
{ q:"いいえ → ?", a:"hayır", c:["evet","tamam","belki"], ex:"Hayır, istemiyorum.", pos:"other"},
{ q:"たぶん → ?", a:"belki", c:["evet","hayır","tamam"], ex:"Belki yarın.", pos:"other"},

/* --- T --- */
{ q:"鳥 → ?", a:"kuş", c:["kedi","köpek","balık"], ex:"Kuş uçuyor.", pos:"noun"},
{ q:"街路 → ?", a:"sokak", c:["cadde","yol","şehir"], ex:"Bu sokak dar.", pos:"noun"},
{ q:"市場（バザール） → ?", a:"çarşı", c:["pazar","market","mağaza"], ex:"Çarşı kalabalık.", pos:"noun"},
{ q:"季節 → ?", a:"mevsim", c:["yaz","kış","bahar"], ex:"Dört mevsim var.", pos:"noun"},
{ q:"国 → ?", a:"ülke", c:["şehir","köy","vatan"], ex:"Japonya bir ülke.", pos:"noun"},
{ q:"町 → ?", a:"şehir", c:["ülke","köy","kasaba"], ex:"Büyük bir şehir.", pos:"noun"},

/* --- U --- */
{ q:"冬 → ?", a:"kış", c:["yaz","sonbahar","ilkbahar"], ex:"Kış soğuk.", pos:"noun"},
{ q:"家 → ?", a:"ev", c:["oda","bina","daire"], ex:"Ev büyük.", pos:"noun"},
{ q:"使う → ?", a:"kullanmak", c:["almak","vermek","yapmak"], ex:"Bilgisayar kullanıyorum.", pos:"verb"},

/* --- V --- */
{ q:"海 → ?", a:"deniz", c:["göl","nehir","su"], ex:"Deniz mavi.", pos:"noun"},
{ q:"湖 → ?", a:"göl", c:["deniz","nehir","su"], ex:"Göl geniş.", pos:"noun"},
{ q:"川 → ?", a:"nehir", c:["göl","deniz","su"], ex:"Nehir akıyor.", pos:"noun"},

/* --- Y --- */
{ q:"ゆっくり → ?", a:"yavaş", c:["hızlı","çabuk","hemen"], ex:"Lütfen yavaş konuşun.", pos:"adv"},
{ q:"すぐ → ?", a:"hemen", c:["yavaş","çabuk","az"], ex:"Hemen gel!", pos:"adv"},
{ q:"歩いて → ?", a:"yaya", c:["otobüs","araba","tren"], ex:"Yaya gidiyorum.", pos:"adv"},
{ q:"書く → ?", a:"yazmak", c:["okumak","çalışmak","çizmek"], ex:"Mektup yazıyorum.", pos:"verb"},
{ q:"読む → ?", a:"okumak", c:["yazmak","dinlemek","çalışmak"], ex:"Kitap okuyorum.", pos:"verb"},
{ q:"言う → ?", a:"söylemek", c:["konuşmak","yazmak","demek"], ex:"Bunu söylüyorum.", pos:"verb"},
{ q:"〜したい → ?", a:"istemek", c:["yapmak","gitmek","almak"], ex:"Gitmek istiyorum.", pos:"verb"},

/* --- Z --- */
{ q:"時間（〜時） → ?", a:"saat", c:["dakika","gün","hafta"], ex:"Saat kaç?", pos:"noun"},
{ q:"最後 → ?", a:"son", c:["ilk","baş","orta"], ex:"Son ders.", pos:"noun"},
{ q:"最初 → ?", a:"ilk", c:["son","orta","baş"], ex:"İlk gün.", pos:"noun"},
{ q:"ありがとう（カジュアル） → ?", a:"sağ ol", c:["teşekkür ederim","tamam","merhaba"], ex:"Sağ ol.", pos:"expression"}

];