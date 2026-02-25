// Data
const servicesList = [
    { cat: "Engine", en: "Engine Overhauling (Complete Rebuild)", hi: "इंजन ओवरहालिंग", bn: "ইঞ্জিন ওভারহালিং" },
    { cat: "Engine", en: "Engine Tuning & Calibration", hi: "इंजन ट्यूनिंग", bn: "ইঞ্জিন টিউনিং" },
    { cat: "Engine", en: "Piston & Ring Replacement", hi: "पिस्टन और रिंग", bn: "পিস্টন এবং রিং" },
    { cat: "Engine", en: "Cylinder Head Repair", hi: "सिलेंडर हेड", bn: "সিলিন্ডার হেড" },
    { cat: "Engine", en: "Turbocharger Repair", hi: "टर्बोचार्जर", bn: "টার্বোচার্জার" },
    { cat: "Engine", en: "Fuel Injector Servicing", hi: "ईंधन इंजेक्टर", bn: "ফুয়েল ইনজেক্টর" },
    { cat: "Engine", en: "Diesel Pump Repair", hi: "डीजल पंप", bn: "ডিজেল পাম্প" },
    { cat: "Engine", en: "Timing Adjustment", hi: "टाइमिंग", bn: "টাইমিং" },
    { cat: "Engine", en: "Engine Mount Replacement", hi: "इंजन माउंट", bn: "ইঞ্জিন মাউন্ট" },
    { cat: "Engine", en: "Oil Leak Repair", hi: "तेल रिसाव", bn: "তেল লিক" },
    { cat: "Transmission", en: "Gearbox Overhaul & Repair", hi: "गियरबॉक्स", bn: "গিয়ারবক্স" },
    { cat: "Transmission", en: "Clutch Plate Replacement", hi: "क्लच प्लेट", bn: "ক্লাচ প্লেট" },
    { cat: "Transmission", en: "Clutch Overhaul", hi: "क्लच ओवरहाल", bn: "ক্লাচ ওভারহল" },
    { cat: "Transmission", en: "Propeller Shaft Repair", hi: "प्रोपेलर शाफ्ट", bn: "প্রপেলার শ্যাফট" },
    { cat: "Transmission", en: "Differential Repair", hi: "डिफरेंशियल", bn: "ডিফারেনশিয়াল" },
    { cat: "Transmission", en: "Axle Repair & Replacement", hi: "धुरा (Axle)", bn: "এক্সেল" },
    { cat: "Transmission", en: "U-Joint Replacement", hi: "यू-ज्वाइंट", bn: "ইউ-জয়েন্ট" },
    { cat: "Brakes", en: "Air Brake Repair", hi: "एयर ब्रेक", bn: "এয়ার ব্রেক" },
    { cat: "Brakes", en: "Brake Shoe Replacement", hi: "ब्रेक शू", bn: "ব্রেক শু" },
    { cat: "Brakes", en: "Brake Pad Replacement", hi: "ब्रेक पैड", bn: "ব্রেক প্যাড" },
    { cat: "Brakes", en: "Brake Drum Machining", hi: "ब्रेक ड्रम", bn: "ব্রেক ড্রাম" },
    { cat: "Brakes", en: "Brake Disc Repair", hi: "ब्रेक डिस्क", bn: "ব্রেক ডিস্ক" },
    { cat: "Brakes", en: "Brake Booster Repair", hi: "ब्रेक बूस्टर", bn: "ব্রেক বুস্টার" },
    { cat: "Brakes", en: "ABS Diagnosis", hi: "ABS डायग्नोसिस", bn: "ABS ডায়াগনোসিস" },
    { cat: "Suspension", en: "Leaf Spring Repair", hi: "लीफ स्प्रिंग", bn: "লিফ স্প্রিং" },
    { cat: "Suspension", en: "Shock Absorber", hi: "शॉक एब्जॉर्बर", bn: "শক অ্যাবজর্বার" },
    { cat: "Suspension", en: "Steering Box Repair", hi: "स्टीयरिंग बॉक्स", bn: "স্টিয়ারিং বক্স" },
    { cat: "Suspension", en: "Power Steering Repair", hi: "पावर स्टीयरिंग", bn: "পাওয়ার স্টিয়ারিং" },
    { cat: "Suspension", en: "Wheel Alignment", hi: "व्हील एलाइनमेंट", bn: "হুইল অ্যালাইনমেন্ট" },
    { cat: "Suspension", en: "King Pin Replacement", hi: "किंग पिन", bn: "কিং পিন" },
    { cat: "Suspension", en: "Bush Replacement", hi: "बुश रिप्लेसमेंट", bn: "বুশ প্রতিস্থাপন" },
    { cat: "Electrical", en: "Complete Wiring Repair", hi: "वायरिंग", bn: "ওয়্যারিং" },
    { cat: "Electrical", en: "Battery Replacement", hi: "बैटरी", bn: "ব্যাটারি" },
    { cat: "Electrical", en: "Alternator Repair", hi: "अल्टरनेटर", bn: "অল্টারনেটর" },
    { cat: "Electrical", en: "Starter Motor Repair", hi: "स्टार्टर मोटर", bn: "স্টার্টার মোটর" },
    { cat: "Electrical", en: "Headlight & Indicator", hi: "हेडलाइट", bn: "হেডলাইট" },
    { cat: "Electrical", en: "Horn & Signal", hi: "हॉर्न", bn: "হর্ন" },
    { cat: "Electrical", en: "ECU Diagnostics", hi: "ECU डायग्नोस्टिक्स", bn: "ECU ডায়াগনস্টিকস" },
    { cat: "Cooling", en: "Radiator Repair", hi: "रेडिएटर", bn: "রেডিয়েটর" },
    { cat: "Cooling", en: "Water Pump", hi: "वाटर पंप", bn: "ওয়াটার পাম্প" },
    { cat: "Cooling", en: "Coolant Flushing", hi: "कूलेंट", bn: "কুল্যান্ট" },
    { cat: "Cooling", en: "Oil Change Service", hi: "ऑयल चेंज", bn: "অয়েল চেঞ্জ" },
    { cat: "Cooling", en: "Oil Filter", hi: "ऑयल फिल्टर", bn: "অয়েল ফিল্টার" },
    { cat: "Cooling", en: "Greasing", hi: "ग्रीसिंग", bn: "গ্রীসিং" },
    { cat: "Body", en: "Chassis Repair", hi: "चेसिस", bn: "চ্যাসিস" },
    { cat: "Body", en: "Welding", hi: "वेल्डिंग", bn: "ওয়েল্ডিং" },
    { cat: "Body", en: "Body Dent Repair", hi: "बॉडी डेंट", bn: "বডি ডেন্ট" },
    { cat: "Body", en: "Painting", hi: "पेंटिंग", bn: "পেন্টিং" },
    { cat: "Body", en: "Cabin Repair", hi: "केबिन", bn: "কেবিন" },
    { cat: "Body", en: "Tailgate Repair", hi: "टेलगेट", bn: "টেলগেট" },
    { cat: "Body", en: "Trailer Frame", hi: "ट्रेलर फ्रेम", bn: "ট্রেলার ফ্রেম" },
    { cat: "Tyre", en: "Tyre Replacement", hi: "टायर", bn: "টায়ার" },
    { cat: "Tyre", en: "Wheel Balancing", hi: "व्हील बैलेंसिंग", bn: "হুইল ব্যালেন্সিং" },
    { cat: "Tyre", en: "Puncture Repair", hi: "पंचर", bn: "পাংচার" },
    { cat: "Tyre", en: "Rim Repair", hi: "रिम मरम्मत", bn: "রিম মেরামত" },
    { cat: "Special", en: "Dumper Hydraulic", hi: "डम्पर हाइड्रोलिक", bn: "ডাম্পার হাইড্রোলিক" },
    { cat: "Special", en: "Tipper Hydraulic", hi: "टिपर हाइड्रोलिक", bn: "টিপার হাইড্রোলিক" },
    { cat: "Special", en: "Trailer Axle", hi: "ट्रेलर एक्सल", bn: "ট্রেলার এক্সেল" },
    { cat: "Special", en: "Load Body Fab", hi: "लोड बॉडी", bn: "লোড বডি" },
    { cat: "Special", en: "PTO Repair", hi: "PTO मरम्मत", bn: "PTO মেরামত" }
];

let lang = 'en';
let selectedStars = 0;

function toggleSidebar() {
    document.getElementById('sidebar').classList.toggle('active');
    document.getElementById('overlay').classList.toggle('active');
}

function changeLanguage() {
    lang = document.getElementById('language-picker').value;
    const ui = {
        en: { 
            hero: "Heavy Vehicle Repair & Servicing List", 
            sub: "Specializing in Trucks, Lorries, Buses, Dumpers & Trailers",
            catLabel: "Select Category",
            reviews: "Customer Reviews",
            instr: "Please select a category from the right sidebar to view services."
        },
        hi: { 
            hero: "भारी वाहन मरम्मत और सर्विसिंग सूची", 
            sub: "ट्रक, लॉरी, बस और डंपर के विशेषज्ञ",
            catLabel: "श्रेणी चुनें",
            reviews: "ग्राहकों की समीक्षा",
            instr: "सेवाएं देखने के लिए कृपया दाईं ओर से एक श्रेणी चुनें।"
        },
        bn: { 
            hero: "ভারী যানবাহন মেরামত এবং সার্ভিসিং তালিকা", 
            sub: "ট্রাক, লরি, বাস এবং ডাম্পার বিশেষজ্ঞ",
            catLabel: "বিভাগ নির্বাচন করুন",
            reviews: "গ্রাহক পর্যালোচনা",
            instr: "পরিষেবাগুলি দেখতে ডানদিকের সাইডবার থেকে একটি বিভাগ নির্বাচন করুন।"
        }
    };
    document.getElementById('hero-title').innerText = ui[lang].hero;
    document.getElementById('hero-sub').innerText = ui[lang].sub;
    document.getElementById('sidebar-label').innerText = ui[lang].catLabel;
    document.getElementById('review-title').innerText = ui[lang].reviews;
    document.getElementById('instruction-text').innerText = ui[lang].instr;
    
    // Reset view
    document.getElementById('service-container').innerHTML = `
        <div class="instruction-box">
            <i class="fas fa-hand-pointer"></i>
            <h3 id="instruction-text">${ui[lang].instr}</h3>
        </div>`;
    document.querySelectorAll('.sidebar li').forEach(li => li.classList.remove('active'));
}

function filterServices(category, element) {
    const container = document.getElementById('service-container');
    container.innerHTML = ''; 
    
    document.querySelectorAll('.sidebar li').forEach(li => li.classList.remove('active'));
    element.classList.add('active');

    const filtered = servicesList.filter(s => s.cat === category);
    
    filtered.forEach(s => {
        container.innerHTML += `
            <div class="card">
                <small style="color:#4e54c8; font-weight:bold;">${s.cat}</small>
                <h3>${s[lang]}</h3>
            </div>
        `;
    });

    // Close Sidebar on Mobile after selection
    if(window.innerWidth < 900) {
        toggleSidebar();
    }
}

function setStar(n) {
    selectedStars = n;
    document.querySelectorAll('#star-box span').forEach((s, i) => s.classList.toggle('active', i < n));
}

function saveReview() {
    const user = document.getElementById('rev-user').value;
    const text = document.getElementById('rev-comment').value;
    if(!user || selectedStars === 0) return alert("Please provide name and rating");

    const rObj = { user, text, rating: selectedStars, date: new Date().toLocaleDateString() };
    let reviews = JSON.parse(localStorage.getItem('vmw_reviews')) || [];
    reviews.unshift(rObj);
    localStorage.setItem('vmw_reviews', JSON.stringify(reviews));
    
    if(!document.getElementById('reviews-output').classList.contains('hidden')){
        displayReviews();
    }
    
    alert("Review Submitted!");
    document.getElementById('rev-user').value = '';
    document.getElementById('rev-comment').value = '';
    setStar(0);
}

function toggleReviews() {
    const output = document.getElementById('reviews-output');
    output.classList.toggle('hidden');
    if (!output.classList.contains('hidden')) {
        displayReviews();
    }
}

function displayReviews() {
    const output = document.getElementById('reviews-output');
    const reviews = JSON.parse(localStorage.getItem('vmw_reviews')) || [];
    
    if (reviews.length === 0) {
        output.innerHTML = "<p>No reviews yet.</p>";
        return;
    }

    output.innerHTML = reviews.map(r => `
        <div class="review-item">
            <div style="display:flex; justify-content:space-between;">
                <strong>${r.user}</strong>
                <small style="color:#888">${r.date || ''}</small>
            </div>
            <div style="color:#fbc02d; margin: 5px 0;">${"★".repeat(r.rating)}</div>
            <p>${r.text}</p>
        </div>
    `).join('');
}