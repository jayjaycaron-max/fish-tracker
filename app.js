const fishData = {
    ct: [
        { id: 'ct_lbass', name: 'Largemouth Bass', scientific: 'Micropterus salmoides', img: 'https://images.unsplash.com/photo-1544764200-d8151759f242?auto=format&fit=crop&q=80&w=800', lures: 'Spinnerbaits, Rubber Worms, Topwater', locations: 'Candlewood Lake, Bantam Lake', season: 'Late Spring to Summer', temp: '65°F - 80°F', weather: 'Low light / Overcast' },
        { id: 'ct_btrout', name: 'Brook Trout', scientific: 'Salvelinus fontinalis', img: 'https://images.unsplash.com/photo-1629805908902-8692629b7754?auto=format&fit=crop&q=80&w=800', lures: 'Dry Flies, Small Spinners', locations: 'Farmington River, Small headwater streams', season: 'Spring', temp: '50°F - 60°F', weather: 'Clear days' },
        { id: 'ct_npike', name: 'Northern Pike', scientific: 'Esox lucius', img: 'https://images.unsplash.com/photo-1598284534795-9276d1e4ec30?auto=format&fit=crop&q=80&w=800', lures: 'Large Spoons, Jerkbaits', locations: 'Connecticut River, Lake Lillinonah', season: 'Spring / Late Fall', temp: '55°F - 65°F', weather: 'Cloudy & Windy' },
        { id: 'ct_walleye', name: 'Walleye', scientific: 'Sander vitreus', img: 'https://images.unsplash.com/photo-1550921095-72848f98ec81?auto=format&fit=crop&q=80&w=800', lures: 'Jigs with minnows, Deep Crankbaits', locations: 'Squantz Pond, Gardner Lake', season: 'Night time / Spring', temp: '45°F - 60°F', weather: 'Choppy water (Walleye Chop)' },
        { id: 'ct_cptk', name: 'Chain Pickerel', scientific: 'Esox niger', img: 'https://images.unsplash.com/photo-1615461066841-6116e61058f4?auto=format&fit=crop&q=80&w=800', lures: 'Flashy Spoons, Soft plastics', locations: 'Moodus Reservoir', season: 'Year round', temp: '40°F - 75°F', weather: 'Sunny' }
    ],
    qc: [
        { id: 'qc_atls', name: 'Atlantic Salmon (Ouananiche)', scientific: 'Salmo salar', img: 'https://images.unsplash.com/photo-1498654200943-1088dd4438ae?auto=format&fit=crop&q=80&w=800', lures: 'Streamer Flies, Smelt imitations', locations: 'Lac Saint-Jean, Saguenay River', season: 'June - July', temp: '50°F - 55°F', weather: 'Cool, overcast' },
        { id: 'qc_ltrout', name: 'Lake Trout (Touladi)', scientific: 'Salvelinus namaycush', img: 'https://images.unsplash.com/photo-1516035069371-29a1b244cc32?auto=format&fit=crop&q=80&w=800', lures: 'Heavy Spoons, Deep Trolling', locations: 'Lake Memphremagog, Lake Mistassini', season: 'Early Spring (shallow) or Summer (deep)', temp: '42°F - 52°F', weather: 'Stable high pressure' },
        { id: 'qc_musky', name: 'Muskellunge', scientific: 'Esox masquinongy', img: 'https://images.unsplash.com/photo-1544764200-d8151759f242?auto=format&fit=crop&q=80&w=800', lures: 'Large Bucktails, Topwater plugs', locations: 'St. Lawrence River, Ottawa River', season: 'Fall', temp: '60°F - 70°F', weather: 'Before a storm front' },
        { id: 'qc_walleye', name: 'Walleye (Doré Jaune)', scientific: 'Sander vitreus', img: 'https://images.unsplash.com/photo-1550921095-72848f98ec81?auto=format&fit=crop&q=80&w=800', lures: 'Jig heads with grubs, Worm harnesses', locations: 'Gouin Reservoir, Lake Abitibi', season: 'May - June', temp: '55°F - 65°F', weather: 'Dusk/Dawn' },
        { id: 'qc_achar', name: 'Arctic Char', scientific: 'Salvelinus alpinus', img: 'https://images.unsplash.com/photo-1524704659698-1fd30be7fa9d?auto=format&fit=crop&q=80&w=800', lures: 'Bright orange spinners, Small spoons', locations: 'Northern Ungava region', season: 'August', temp: '35°F - 45°F', weather: 'Any' }
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
        
        card.innerHTML = `
            <div class="fish-image-container mb-4">
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
