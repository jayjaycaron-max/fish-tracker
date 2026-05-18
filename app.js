const fishData = {
    ct: [
        { id: 'ct_lbass', name: 'Largemouth Bass', scientific: 'Micropterus salmoides', native: false, img: 'https://images.unsplash.com/photo-1544764200-d8151759f242?auto=format&fit=crop&q=80&w=800', lures: 'Spinnerbaits, Rubber Worms, Topwater', locations: 'Candlewood Lake, Bantam Lake', season: 'Late Spring to Summer', temp: '65°F - 80°F', weather: 'Low light' },
        { id: 'ct_sbass', name: 'Smallmouth Bass', scientific: 'Micropterus dolomieu', native: false, img: 'https://images.unsplash.com/photo-1580822261290-991b38693d1b?auto=format&fit=crop&q=80&w=800', lures: 'Crankbaits, Crayfish', locations: 'Connecticut River', season: 'Spring to Fall', temp: '60°F - 75°F', weather: 'Sunny' },
        { id: 'ct_btrout', name: 'Brook Trout', scientific: 'Salvelinus fontinalis', native: true, img: 'https://images.unsplash.com/photo-1629805908902-8692629b7754?auto=format&fit=crop&q=80&w=800', lures: 'Dry Flies, Small Spinners', locations: 'Farmington River', season: 'Spring', temp: '50°F - 60°F', weather: 'Clear days' },
        { id: 'ct_brown', name: 'Brown Trout', scientific: 'Salmo trutta', native: false, img: 'https://images.unsplash.com/photo-1546182990-dffeafbe841d?auto=format&fit=crop&q=80&w=800', lures: 'Streamer Flies, Spinners', locations: 'Housatonic River', season: 'Year-round', temp: '45°F - 65°F', weather: 'Evening' },
        { id: 'ct_rainbow', name: 'Rainbow Trout', scientific: 'Oncorhynchus mykiss', native: false, img: 'https://images.unsplash.com/photo-1515027985777-47d555b96e82?auto=format&fit=crop&q=80&w=800', lures: 'Spinners, Spoons, Flies', locations: 'Farmington River', season: 'Spring & Fall', temp: '55°F - 65°F', weather: 'Overcast' },
        { id: 'ct_npike', name: 'Northern Pike', scientific: 'Esox lucius', native: true, img: 'https://images.unsplash.com/photo-1598284534795-9276d1e4ec30?auto=format&fit=crop&q=80&w=800', lures: 'Large Spoons, Jerkbaits', locations: 'Connecticut River, Lake Lillinonah', season: 'Spring / Late Fall', temp: '55°F - 65°F', weather: 'Cloudy' },
        { id: 'ct_cptk', name: 'Chain Pickerel', scientific: 'Esox niger', native: true, img: 'https://images.unsplash.com/photo-1615461066841-6116e61058f4?auto=format&fit=crop&q=80&w=800', lures: 'Flashy Spoons, Soft plastics', locations: 'Moodus Reservoir', season: 'Year round', temp: '40°F - 75°F', weather: 'Sunny' },
        { id: 'ct_walleye', name: 'Walleye', scientific: 'Sander vitreus', native: false, img: 'https://images.unsplash.com/photo-1550921095-72848f98ec81?auto=format&fit=crop&q=80&w=800', lures: 'Jigs with minnows, Deep Crankbaits', locations: 'Squantz Pond, Gardner Lake', season: 'Night time', temp: '45°F - 60°F', weather: 'Low light' },
        { id: 'ct_catfish', name: 'Channel Catfish', scientific: 'Ictalurus punctatus', native: false, img: 'https://images.unsplash.com/photo-1559827260-dc66d52bef19?auto=format&fit=crop&q=80&w=800', lures: 'Cut Bait, Chicken Liver', locations: 'Connecticut River', season: 'Summer', temp: '65°F - 85°F', weather: 'Warm' },
        { id: 'ct_flathead', name: 'Flathead Catfish', scientific: 'Pylodictis olivaris', native: false, img: 'https://images.unsplash.com/photo-1582434522564-5b08a7aa49f1?auto=format&fit=crop&q=80&w=800', lures: 'Live Baitfish', locations: 'Connecticut River', season: 'Spring to Fall', temp: '60°F - 75°F', weather: 'Night' },
        { id: 'ct_carp', name: 'Common Carp', scientific: 'Cyprinus carpio', native: false, img: 'https://images.unsplash.com/photo-1559827260-dc66d52bef19?auto=format&fit=crop&q=80&w=800', lures: 'Corn, Dough Balls, Boilies', locations: 'Connecticut River', season: 'Spring to Fall', temp: '60°F - 75°F', weather: 'Calm' },
        { id: 'ct_bluegill', name: 'Bluegill', scientific: 'Lepomis macrochirus', native: false, img: 'https://images.unsplash.com/photo-1559827260-dc66d52bef19?auto=format&fit=crop&q=80&w=800', lures: 'Small flies, Tiny jigs', locations: 'Most Connecticut ponds', season: 'Year-round', temp: '50°F - 80°F', weather: 'Any' },
        { id: 'ct_pumpkin', name: 'Pumpkinseed', scientific: 'Lepomis gibbosus', native: true, img: 'https://images.unsplash.com/photo-1559827260-dc66d52bef19?auto=format&fit=crop&q=80&w=800', lures: 'Small spinners, Flies', locations: 'Shallow pond margins', season: 'Year-round', temp: '50°F - 80°F', weather: 'Warm' },
        { id: 'ct_crappie', name: 'Black Crappie', scientific: 'Pomoxis nigromaculatus', native: false, img: 'https://images.unsplash.com/photo-1559827260-dc66d52bef19?auto=format&fit=crop&q=80&w=800', lures: 'Small minnows, Jigs', locations: 'Various Connecticut lakes', season: 'Spring & Fall', temp: '55°F - 70°F', weather: 'Low light' },
        { id: 'ct_perch', name: 'Yellow Perch', scientific: 'Perca flavescens', native: true, img: 'https://images.unsplash.com/photo-1559827260-dc66d52bef19?auto=format&fit=crop&q=80&w=800', lures: 'Small jigs, Live minnows', locations: 'Connecticut River', season: 'Spring & Fall', temp: '50°F - 60°F', weather: 'Overcast' },
        { id: 'ct_shad', name: 'American Shad', scientific: 'Alosa sapidissima', native: true, img: 'https://images.unsplash.com/photo-1559827260-dc66d52bef19?auto=format&fit=crop&q=80&w=800', lures: 'Small shad flies, Spoons', locations: 'Connecticut River', season: 'Spring (May-June)', temp: '55°F - 65°F', weather: 'Water rising' },
        { id: 'ct_sunfish', name: 'Longear Sunfish', scientific: 'Lepomis megalotis', native: true, img: 'https://images.unsplash.com/photo-1559827260-dc66d52bef19?auto=format&fit=crop&q=80&w=800', lures: 'Tiny flies, Small spinners', locations: 'Connecticut River tributaries', season: 'Spring to Fall', temp: '60°F - 75°F', weather: 'Clear' },
        { id: 'ct_musky', name: 'Muskellunge', scientific: 'Esox masquinongy', native: false, img: 'https://images.unsplash.com/photo-1544764200-d8151759f242?auto=format&fit=crop&q=80&w=800', lures: 'Large bucktails, Topwater', locations: 'Select CT lakes', season: 'Spring to Fall', temp: '50°F - 70°F', weather: 'Variable' }
    ],
    qc: [
        { id: 'qc_atls', name: 'Atlantic Salmon', scientific: 'Salmo salar', native: true, img: 'https://images.unsplash.com/photo-1498654200943-1088dd4438ae?auto=format&fit=crop&q=80&w=800', lures: 'Streamer Flies, Smelt imitations', locations: 'Lac Saint-Jean, Saguenay River', season: 'June - July', temp: '50°F - 55°F', weather: 'Cool' },
        { id: 'qc_ltrout', name: 'Lake Trout', scientific: 'Salvelinus namaycush', native: true, img: 'https://images.unsplash.com/photo-1516035069371-29a1b244cc32?auto=format&fit=crop&q=80&w=800', lures: 'Heavy Spoons, Deep Trolling', locations: 'Lake Memphremagog', season: 'Spring & Summer', temp: '42°F - 52°F', weather: 'Stable' },
        { id: 'qc_btrout', name: 'Brook Trout', scientific: 'Salvelinus fontinalis', native: true, img: 'https://images.unsplash.com/photo-1629805908902-8692629b7754?auto=format&fit=crop&q=80&w=800', lures: 'Dry Flies, Nymphs', locations: 'Laurentian streams', season: 'Spring & Fall', temp: '48°F - 58°F', weather: 'Cool' },
        { id: 'qc_musky', name: 'Muskellunge', scientific: 'Esox masquinongy', native: true, img: 'https://images.unsplash.com/photo-1544764200-d8151759f242?auto=format&fit=crop&q=80&w=800', lures: 'Large Bucktails, Topwater', locations: 'St. Lawrence River, Ottawa River', season: 'Fall', temp: '60°F - 70°F', weather: 'Before storm' },
        { id: 'qc_walleye', name: 'Walleye', scientific: 'Sander vitreus', native: true, img: 'https://images.unsplash.com/photo-1550921095-72848f98ec81?auto=format&fit=crop&q=80&w=800', lures: 'Jig heads with grubs, Worm harnesses', locations: 'Gouin Reservoir, Lake Abitibi', season: 'May - June', temp: '55°F - 65°F', weather: 'Dusk/Dawn' },
        { id: 'qc_achar', name: 'Arctic Char', scientific: 'Salvelinus alpinus', native: true, img: 'https://images.unsplash.com/photo-1524704659698-1fd30be7fa9d?auto=format&fit=crop&q=80&w=800', lures: 'Bright orange spinners, Small spoons', locations: 'Northern Ungava region', season: 'August', temp: '35°F - 45°F', weather: 'Any' },
        { id: 'qc_lpike', name: 'Northern Pike', scientific: 'Esox lucius', native: true, img: 'https://images.unsplash.com/photo-1598284534795-9276d1e4ec30?auto=format&fit=crop&q=80&w=800', lures: 'Large spoons, Jerkbaits', locations: 'Outaouais lakes', season: 'Spring & Fall', temp: '50°F - 65°F', weather: 'Windy' },
        { id: 'qc_perch', name: 'Yellow Perch', scientific: 'Perca flavescens', native: true, img: 'https://images.unsplash.com/photo-1559827260-dc66d52bef19?auto=format&fit=crop&q=80&w=800', lures: 'Small jigs, Live minnows', locations: 'Montreal area lakes', season: 'Year-round', temp: '45°F - 70°F', weather: 'Any' },
        { id: 'qc_whitefish', name: 'Lake Whitefish', scientific: 'Coregonus clupeaformis', native: true, img: 'https://images.unsplash.com/photo-1559827260-dc66d52bef19?auto=format&fit=crop&q=80&w=800', lures: 'Tiny jigs, Small flies', locations: 'Northern lakes', season: 'Winter', temp: '32°F - 45°F', weather: 'Frozen' },
        { id: 'qc_cisco', name: 'Cisco', scientific: 'Coregonus artedi', native: true, img: 'https://images.unsplash.com/photo-1559827260-dc66d52bef19?auto=format&fit=crop&q=80&w=800', lures: 'Small spinners, Flies', locations: 'Northern Quebec lakes', season: 'Summer & Winter', temp: '40°F - 55°F', weather: 'Cool' },
        { id: 'qc_sturgeon', name: 'Lake Sturgeon', scientific: 'Acipenser fulvescens', native: true, img: 'https://images.unsplash.com/photo-1559827260-dc66d52bef19?auto=format&fit=crop&q=80&w=800', lures: 'Live baitfish, Smelt', locations: 'St. Lawrence River', season: 'Summer', temp: '50°F - 65°F', weather: 'Stable' },
        { id: 'qc_shad', name: 'American Shad', scientific: 'Alosa sapidissima', native: true, img: 'https://images.unsplash.com/photo-1559827260-dc66d52bef19?auto=format&fit=crop&q=80&w=800', lures: 'Shad flies, Spoons', locations: 'St. Lawrence River', season: 'Spring (May-June)', temp: '55°F - 65°F', weather: 'Running water' },
        { id: 'qc_bass', name: 'Largemouth Bass', scientific: 'Micropterus salmoides', native: false, img: 'https://images.unsplash.com/photo-1544764200-d8151759f242?auto=format&fit=crop&q=80&w=800', lures: 'Spinnerbaits, Rubber worms', locations: 'Southern Quebec lakes', season: 'Late Spring to Summer', temp: '65°F - 80°F', weather: 'Low light' },
        { id: 'qc_sbass', name: 'Smallmouth Bass', scientific: 'Micropterus dolomieu', native: false, img: 'https://images.unsplash.com/photo-1580822261290-991b38693d1b?auto=format&fit=crop&q=80&w=800', lures: 'Crankbaits, Crayfish', locations: 'St. Lawrence River', season: 'Spring to Fall', temp: '60°F - 75°F', weather: 'Sunny' },
        { id: 'qc_carp', name: 'Common Carp', scientific: 'Cyprinus carpio', native: false, img: 'https://images.unsplash.com/photo-1559827260-dc66d52bef19?auto=format&fit=crop&q=80&w=800', lures: 'Corn, Boilies, Dough balls', locations: 'St. Lawrence River', season: 'Spring to Fall', temp: '60°F - 75°F', weather: 'Warm' },
        { id: 'qc_bluegill', name: 'Bluegill', scientific: 'Lepomis macrochirus', native: false, img: 'https://images.unsplash.com/photo-1559827260-dc66d52bef19?auto=format&fit=crop&q=80&w=800', lures: 'Small flies, Tiny jigs', locations: 'Southern Quebec lakes', season: 'Year-round', temp: '50°F - 80°F', weather: 'Any' },
        { id: 'qc_crappie', name: 'Black Crappie', scientific: 'Pomoxis nigromaculatus', native: false, img: 'https://images.unsplash.com/photo-1559827260-dc66d52bef19?auto=format&fit=crop&q=80&w=800', lures: 'Small minnows, Jigs', locations: 'Southern Quebec lakes', season: 'Spring & Fall', temp: '55°F - 70°F', weather: 'Low light' },
        { id: 'qc_rainbow', name: 'Rainbow Trout', scientific: 'Oncorhynchus mykiss', native: false, img: 'https://images.unsplash.com/photo-1515027985777-47d555b96e82?auto=format&fit=crop&q=80&w=800', lures: 'Spinners, Spoons, Flies', locations: 'Southern Quebec rivers', season: 'Spring & Fall', temp: '55°F - 65°F', weather: 'Overcast' },
        { id: 'qc_brown_trout', name: 'Brown Trout', scientific: 'Salmo trutta', native: false, img: 'https://images.unsplash.com/photo-1546182990-dffeafbe841d?auto=format&fit=crop&q=80&w=800', lures: 'Streamer flies, Spinners', locations: 'Laurentian rivers', season: 'Year-round', temp: '45°F - 65°F', weather: 'Early morning' },
        { id: 'qc_barbeau', name: 'Catfish', scientific: 'Ictalurus nebulosus', native: false, img: 'https://images.unsplash.com/photo-1559827260-dc66d52bef19?auto=format&fit=crop&q=80&w=800', lures: 'Cut bait, Chicken liver', locations: 'St. Lawrence River', season: 'Summer & Fall', temp: '60°F - 75°F', weather: 'Warm' }
    ]
};

let currentRegion = 'ct';
let userProgress = JSON.parse(localStorage.getItem('fishTrackerProgress')) || {};
let userPhotos = JSON.parse(localStorage.getItem('fishTrackerPhotos')) || {};

function saveToStorage() {
    localStorage.setItem('fishTrackerProgress', JSON.stringify(userProgress));
    localStorage.setItem('fishTrackerPhotos', JSON.stringify(userPhotos));
    updateProgressUI();
}

function switchRegion(region) {
    currentRegion = region;
    document.querySelectorAll('.region-btn').forEach(btn => btn.classList.remove('active'));
    document.getElementById(`btn-${region}`).classList.add('active');
    document.getElementById('current-region-name').innerText = region === 'ct' ? 'Connecticut Species' : 'Québec Species';
    renderFishCards();
    updateProgressUI();
}

function toggleCaught(id) {
    userProgress[id] = !userProgress[id];
    saveToStorage();
    renderFishCards();
}

function handlePhotoUpload(event, id) {
    const file = event.target.files[0];
    if (!file) return;

    const reader = new FileReader();
    reader.onload = function(e) {
        userPhotos[id] = e.target.result;
        saveToStorage();
        renderFishCards();
    };
    reader.readAsDataURL(file);
}

function updateProgressUI() {
    const speciesList = fishData[currentRegion];
    const caughtCount = speciesList.filter(f => userProgress[f.id]).length;
    const total = speciesList.length;
    const percent = Math.round((caughtCount / total) * 100) || 0;

    document.getElementById('stats-text').innerText = `${caughtCount} / ${total} Caught`;
    document.getElementById('percentage').innerText = `${percent}%`;
    document.getElementById('progress-fill').style.width = `${percent}%`;
}

function toggleDetails(id) {
    const el = document.getElementById(`details-${id}`);
    el.classList.toggle('open');
}

function renderFishCards() {
    const grid = document.getElementById('fish-grid');
    grid.innerHTML = '';

    fishData[currentRegion].forEach(fish => {
        const isCaught = userProgress[fish.id] || false;
        const customPhoto = userPhotos[fish.id] || null;

        const card = document.createElement('div');
        card.className = `glass-card rounded-2xl p-4 flex flex-col ${isCaught ? 'ring-2 ring-[#5c7a4d]' : ''}`;
        
        const nativeTag = fish.native ? '<span class="absolute top-2 left-2 bg-green-500/20 border border-green-500/50 px-2 py-1 rounded text-xs font-bold text-green-400">NATIVE</span>' : '';
        
        card.innerHTML = `
            <div class="fish-image-container mb-4 relative">
                ${nativeTag}
                <img src="${customPhoto || fish.img}" class="fish-image" id="img-${fish.id}" alt="${fish.name}">
                <div class="absolute top-2 right-2 flex gap-2">
                    <label class="bg-black/60 backdrop-blur-md p-2 rounded-full cursor-pointer hover:bg-black/80 transition shadow-lg">
                        <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M23 19a2 2 0 0 1-2 2H3a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h4l2-3h6l2 3h4a2 2 0 0 1 2 2z"/><circle cx="12" cy="13" r="4"/></svg>
                        <input type="file" class="hidden-input" accept="image/*" onchange="handlePhotoUpload(event, '${fish.id}')">
                    </label>
                </div>
            </div>

            <div class="flex justify-between items-start mb-2">
                <div>
                    <h3 class="text-xl font-bold text-white">${fish.name}</h3>
                    <p class="text-xs italic text-gray-400">${fish.scientific}</p>
                </div>
                <button onclick="toggleCaught('${fish.id}')" class="flex items-center justify-center h-10 w-10 rounded-full border-2 border-white/20 transition-all ${isCaught ? 'bg-[#5c7a4d] border-[#a3b18a]' : 'hover:border-[#d4a373]'}">
                    ${isCaught ? '✓' : ''}
                </button>
            </div>

            <div class="mt-4 space-y-3">
                <button onclick="toggleDetails('${fish.id}')" class="w-full py-2 bg-white/5 rounded-lg text-xs font-semibold hover:bg-white/10 transition">
                    VIEW FISHING DATA
                </button>
                
                <div id="details-${fish.id}" class="card-details text-sm space-y-3">
                    <div class="pt-4 border-t border-white/5">
                        <p class="text-[#d4a373] font-bold text-xs uppercase">Best Lures</p>
                        <p class="text-gray-300">${fish.lures}</p>
                    </div>
                    <div>
                        <p class="text-[#d4a373] font-bold text-xs uppercase">Prime Locations</p>
                        <p class="text-gray-300">${fish.locations}</p>
                    </div>
                    <div class="grid grid-cols-2 gap-2">
                        <div>
                            <p class="text-[#d4a373] font-bold text-xs uppercase">Season</p>
                            <p class="text-gray-300">${fish.season}</p>
                        </div>
                        <div>
                            <p class="text-[#d4a373] font-bold text-xs uppercase">Ideal Temp</p>
                            <p class="text-gray-300">${fish.temp}</p>
                        </div>
                    </div>
                    <div>
                        <p class="text-[#d4a373] font-bold text-xs uppercase">Weather Tip</p>
                        <p class="text-gray-300">${fish.weather}</p>
                    </div>
                </div>
            </div>
        `;
        grid.appendChild(card);
    });
}

// Initialize App
window.addEventListener('load', () => {
    renderFishCards();
    updateProgressUI();
});