const fishData = {
    ct: [
        // NATIVE SPECIES
        { id: 'ct_lbass', name: 'Largemouth Bass', scientific: 'Micropterus salmoides', native: true, img: 'https://images.unsplash.com/photo-1544764200-d8151759f242?auto=format&fit=crop&q=80&w=800', lures: 'Spinnerbaits, Rubber Worms, Topwater', locations: 'Candlewood Lake, Bantam Lake, Lake Lillinonah', season: 'Late Spring to Summer', temp: '65°F - 80°F', weather: 'Low light / Overcast' },
        { id: 'ct_sbass', name: 'Smallmouth Bass', scientific: 'Micropterus dolomieu', native: true, img: 'https://images.unsplash.com/photo-1580822261290-991b38693d1b?auto=format&fit=crop&q=80&w=800', lures: 'Crankbaits, Crayfish Imitators, Drop Shot', locations: 'Rocky areas of Connecticut River, Lake Lillinonah', season: 'Spring to Fall', temp: '60°F - 75°F', weather: 'Sunny days with some clouds' },
        { id: 'ct_btrout', name: 'Brook Trout', scientific: 'Salvelinus fontinalis', native: true, img: 'https://images.unsplash.com/photo-1629805908902-8692629b7754?auto=format&fit=crop&q=80&w=800', lures: 'Dry Flies, Small Spinners, Nymphs', locations: 'Farmington River, Small headwater streams, Natchaug River', season: 'Spring & Fall', temp: '50°F - 60°F', weather: 'Clear, cool days' },
        { id: 'ct_brown', name: 'Brown Trout', scientific: 'Salmo trutta', native: false, img: 'https://images.unsplash.com/photo-1546182990-dffeafbe841d?auto=format&fit=crop&q=80&w=800', lures: 'Streamer Flies, Spinners, Live Minnows', locations: 'Housatonic River, Farmington River, Shetucket River', season: 'Year-round', temp: '45°F - 65°F', weather: 'Early morning or evening' },
        { id: 'ct_rainbow', name: 'Rainbow Trout', scientific: 'Oncorhynchus mykiss', native: false, img: 'https://images.unsplash.com/photo-1515027985777-47d555b96e82?auto=format&fit=crop&q=80&w=800', lures: 'Spinners, Spoons, Dry Flies', locations: 'Farmington River, Housatonic River, Reservoir outlets', season: 'Spring & Fall', temp: '55°F - 65°F', weather: 'Overcast, windy' },
        { id: 'ct_npike', name: 'Northern Pike', scientific: 'Esox lucius', native: true, img: 'https://images.unsplash.com/photo-1598284534795-9276d1e4ec30?auto=format&fit=crop&q=80&w=800', lures: 'Large Spoons, Jerkbaits, Live Baitfish', locations: 'Connecticut River, Lake Lillinonah, Candlewood Lake', season: 'Spring / Late Fall', temp: '55°F - 65°F', weather: 'Cloudy & Windy' },
        { id: 'ct_cptk', name: 'Chain Pickerel', scientific: 'Esox niger', native: true, img: 'https://images.unsplash.com/photo-1615461066841-6116e61058f4?auto=format&fit=crop&q=80&w=800', lures: 'Flashy Spoons, Soft plastics, Jerkbaits', locations: 'Moodus Reservoir, Marsh areas, Pond edges', season: 'Year round', temp: '40°F - 75°F', weather: 'Sunny with some shade' },
        { id: 'ct_walleye', name: 'Walleye', scientific: 'Sander vitreus', native: false, img: 'https://images.unsplash.com/photo-1550921095-72848f98ec81?auto=format&fit=crop&q=80&w=800', lures: 'Jigs with minnows, Deep Crankbaits, Live Shiners', locations: 'Squantz Pond, Gardner Lake, Candlewood Lake', season: 'Night time / Spring', temp: '45°F - 60°F', weather: 'Low light, Walleye Chop' },
        { id: 'ct_catfish', name: 'Channel Catfish', scientific: 'Ictalurus punctatus', native: false, img: 'https://images.unsplash.com/photo-1559827260-dc66d52bef19?auto=format&fit=crop&q=80&w=800', lures: 'Cut Bait, Chicken Liver, Stink Bait', locations: 'Connecticut River, Thames River', season: 'Late Spring to Fall', temp: '65°F - 85°F', weather: 'Warm, humid evenings' },
        { id: 'ct_flathead', name: 'Flathead Catfish', scientific: 'Pylodictis olivaris', native: false, img: 'https://images.unsplash.com/photo-1582434522564-5b08a7aa49f1?auto=format&fit=crop&q=80&w=800', lures: 'Live Baitfish (Bluegill, Shad), Chicken', locations: 'Connecticut River, lower Thames River', season: 'Spring to Fall', temp: '60°F - 75°F', weather: 'Night fishing preferred' },
        { id: 'ct_carp', name: 'Common Carp', scientific: 'Cyprinus carpio', native: false, img: 'https://images.unsplash.com/photo-1559827260-dc66d52bef19?auto=format&fit=crop&q=80&w=800', lures: 'Corn, Dough Balls, Boilies, Particle baits', locations: 'Connecticut River, various ponds and lakes', season: 'Spring to Fall', temp: '60°F - 75°F', weather: 'Calm, warm days' },
        { id: 'ct_bluegill', name: 'Bluegill', scientific: 'Lepomis macrochirus', native: true, img: 'https://images.unsplash.com/photo-1559827260-dc66d52bef19?auto=format&fit=crop&q=80&w=800', lures: 'Small flies, Tiny jigs, Live worms', locations: 'Most Connecticut ponds and lakes', season: 'Year-round', temp: '50°F - 80°F', weather: 'Any, best near vegetation' },
        { id: 'ct_pumpkin', name: 'Pumpkinseed', scientific: 'Lepomis gibbosus', native: true, img: 'https://images.unsplash.com/photo-1559827260-dc66d52bef19?auto=format&fit=crop&q=80&w=800', lures: 'Small spinners, Flies, Live insects', locations: 'Shallow pond margins, wetlands', season: 'Year-round', temp: '50°F - 80°F', weather: 'Warm, sunny days' },
        { id: 'ct_crappie', name: 'Black Crappie', scientific: 'Pomoxis nigromaculatus', native: false, img: 'https://images.unsplash.com/photo-1559827260-dc66d52bef19?auto=format&fit=crop&q=80&w=800', lures: 'Small minnows, Jigs, Crickets', locations: 'Various Connecticut lakes', season: 'Spring & Fall', temp: '55°F - 70°F', weather: 'Overcast, low light' },
        { id: 'ct_sunfish', name: 'Longear Sunfish', scientific: 'Lepomis megalotis', native: true, img: 'https://images.unsplash.com/photo-1559827260-dc66d52bef19?auto=format&fit=crop&q=80&w=800', lures: 'Tiny flies, Small spinners', locations: 'Connecticut River tributaries', season: 'Spring to Fall', temp: '60°F - 75°F', weather: 'Clear, sunny' },
        { id: 'ct_perch', name: 'Yellow Perch', scientific: 'Perca flavescens', native: true, img: 'https://images.unsplash.com/photo-1559827260-dc66d52bef19?auto=format&fit=crop&q=80&w=800', lures: 'Small jigs, Live minnows, Spinners', locations: 'Connecticut River, coastal ponds, Gardner Lake', season: 'Spring & Fall', temp: '50°F - 60°F', weather: 'Overcast, windy' },
        { id: 'ct_shad', name: 'American Shad', scientific: 'Alosa sapidissima', native: true, img: 'https://images.unsplash.com/photo-1559827260-dc66d52bef19?auto=format&fit=crop&q=80&w=800', lures: 'Small shad flies, Spoons, Shad darts', locations: 'Connecticut River, estuaries', season: 'Spring (May-June)', temp: '55°F - 65°F', weather: 'Water rising, overcast' },
        { id: 'ct_carp_mirror', name: 'Mirror Carp', scientific: 'Cyprinus carpio (scale mutation)', native: false, img: 'https://images.unsplash.com/photo-1559827260-dc66d52bef19?auto=format&fit=crop&q=80&w=800', lures: 'Corn, Boilies, Particle baits', locations: 'Various ponds and lakes', season: 'Spring to Fall', temp: '60°F - 75°F', weather: 'Calm, warm' },
        { id: 'ct_musky_stocked', name: 'Muskellunge (Stocked)', scientific: 'Esox masquinongy', native: false, img: 'https://images.unsplash.com/photo-1544764200-d8151759f242?auto=format&fit=crop&q=80&w=800', lures: 'Large bucktails, Jerkbaits, Live shiners', locations: 'Select Connecticut reservoirs', season: 'Spring to Fall', temp: '50°F - 70°F', weather: 'Variable' }
    ],
    qc: [
        // NATIVE SPECIES
        { id: 'qc_atls', name: 'Atlantic Salmon (Ouananiche)', scientific: 'Salmo salar', native: true, img: 'https://images.unsplash.com/photo-1498654200943-1088dd4438ae?auto=format&fit=crop&q=80&w=800', lures: 'Streamer Flies, Smelt imitations, Spoons', locations: 'Lac Saint-Jean, Saguenay River, Jacques Cartier River', season: 'June - July', temp: '50°F - 55°F', weather: 'Cool, overcast, running water' },
        { id: 'qc_ltrout', name: 'Lake Trout (Touladi)', scientific: 'Salvelinus namaycush', native: true, img: 'https://images.unsplash.com/photo-1516035069371-29a1b244cc32?auto=format&fit=crop&q=80&w=800', lures: 'Heavy Spoons, Deep Trolling, Jigging', locations: 'Lake Memphremagog, Lake Mistassini, Manicouagan Reservoir', season: 'Early Spring (shallow) or Summer (deep)', temp: '42°F - 52°F', weather: 'Stable high pressure' },
        { id: 'qc_btrout', name: 'Brook Trout (Omble)', scientific: 'Salvelinus fontinalis', native: true, img: 'https://images.unsplash.com/photo-1629805908902-8692629b7754?auto=format&fit=crop&q=80&w=800', lures: 'Dry Flies, Nymphs, Small spinners', locations: 'Laurentian streams, Gaspésie region, northern lakes', season: 'Spring & Fall', temp: '48°F - 58°F', weather: 'Cool, clear water' },
        { id: 'qc_musky', name: 'Muskellunge', scientific: 'Esox masquinongy', native: true, img: 'https://images.unsplash.com/photo-1544764200-d8151759f242?auto=format&fit=crop&q=80&w=800', lures: 'Large Bucktails, Topwater plugs, Jerkbaits', locations: 'St. Lawrence River, Ottawa River, Outaouais region', season: 'Fall (Sept-Oct)', temp: '60°F - 70°F', weather: 'Before a storm front' },
        { id: 'qc_walleye', name: 'Walleye (Doré Jaune)', scientific: 'Sander vitreus', native: true, img: 'https://images.unsplash.com/photo-1550921095-72848f98ec81?auto=format&fit=crop&q=80&w=800', lures: 'Jig heads with grubs, Worm harnesses, Live shiners', locations: 'Gouin Reservoir, Lake Abitibi, La Grande River region', season: 'May - June', temp: '55°F - 65°F', weather: 'Dusk/Dawn, Low light' },
        { id: 'qc_achar', name: 'Arctic Char', scientific: 'Salvelinus alpinus', native: true, img: 'https://images.unsplash.com/photo-1524704659698-1fd30be7fa9d?auto=format&fit=crop&q=80&w=800', lures: 'Bright orange spinners, Small spoons, Arctic flies', locations: 'Northern Ungava region, James Bay area', season: 'August', temp: '35°F - 45°F', weather: 'Any, brief season' },
        { id: 'qc_lpike', name: 'Northern Pike (Brochet)', scientific: 'Esox lucius', native: true, img: 'https://images.unsplash.com/photo-1598284534795-9276d1e4ec30?auto=format&fit=crop&q=80&w=800', lures: 'Large spoons, Jerkbaits, Duckling lures', locations: 'Outaouais lakes, Upper St. Lawrence, James Bay tributaries', season: 'Spring & Fall', temp: '50°F - 65°F', weather: 'Windy, overcast' },
        { id: 'qc_perch', name: 'Yellow Perch (Perchaude)', scientific: 'Perca flavescens', native: true, img: 'https://images.unsplash.com/photo-1559827260-dc66d52bef19?auto=format&fit=crop&q=80&w=800', lures: 'Small jigs, Live minnows, Ice fishing', locations: 'Montreal area lakes, St. Lawrence River', season: 'Year-round', temp: '45°F - 70°F', weather: 'Any condition' },
        { id: 'qc_whitefish', name: 'Lake Whitefish (Corégone)', scientific: 'Coregonus clupeaformis', native: true, img: 'https://images.unsplash.com/photo-1559827260-dc66d52bef19?auto=format&fit=crop&q=80&w=800', lures: 'Tiny jigs, Small flies, Maggots', locations: 'Northern lakes, James Bay area', season: 'Winter ice fishing', temp: '32°F - 45°F', weather: 'Frozen lakes' },
        { id: 'qc_cisco', name: 'Cisco (Lake Herring)', scientific: 'Coregonus artedi', native: true, img: 'https://images.unsplash.com/photo-1559827260-dc66d52bef19?auto=format&fit=crop&q=80&w=800', lures: 'Small spinners, Flies, Tiny jigs', locations: 'Northern Quebec lakes, La Grande region', season: 'Summer & Winter', temp: '40°F - 55°F', weather: 'Cool water' },
        { id: 'qc_sturgeon', name: 'Lake Sturgeon', scientific: 'Acipenser fulvescens', native: true, img: 'https://images.unsplash.com/photo-1559827260-dc66d52bef19?auto=format&fit=crop&q=80&w=800', lures: 'Live baitfish, Smelt, Bottom baits', locations: 'St. Lawrence River estuary, James Bay area', season: 'Summer', temp: '50°F - 65°F', weather: 'Stable, cool' },
        { id: 'qc_barbeau', name: 'Catfish (Barbotte)', scientific: 'Ictalurus nebulosus', native: false, img: 'https://images.unsplash.com/photo-1559827260-dc66d52bef19?auto=format&fit=crop&q=80&w=800', lures: 'Cut bait, Chicken liver, Worms', locations: 'St. Lawrence River, Montreal area lakes', season: 'Summer & Fall', temp: '60°F - 75°F', weather: 'Warm, low light' },
        { id: 'qc_bass', name: 'Largemouth Bass', scientific: 'Micropterus salmoides', native: false, img: 'https://images.unsplash.com/photo-1544764200-d8151759f242?auto=format&fit=crop&q=80&w=800', lures: 'Spinnerbaits, Rubber worms, Topwater', locations: 'Southern Quebec lakes, St. Lawrence tributaries', season: 'Late Spring to Summer', temp: '65°F - 80°F', weather: 'Low light' },
        { id: 'qc_sbass', name: 'Smallmouth Bass', scientific: 'Micropterus dolomieu', native: false, img: 'https://images.unsplash.com/photo-1580822261290-991b38693d1b?auto=format&fit=crop&q=80&w=800', lures: 'Crankbaits, Crayfish, Drop shots', locations: 'St. Lawrence River, Outaouais lakes', season: 'Spring to Fall', temp: '60°F - 75°F', weather: 'Sunny with clouds' },
        { id: 'qc_carp', name: 'Common Carp', scientific: 'Cyprinus carpio', native: false, img: 'https://images.unsplash.com/photo-1559827260-dc66d52bef19?auto=format&fit=crop&q=80&w=800', lures: 'Corn, Boilies, Dough balls, Particle baits', locations: 'St. Lawrence River, Southern Quebec ponds', season: 'Spring to Fall', temp: '60°F - 75°F', weather: 'Warm, calm' },
        { id: 'qc_bluegill', name: 'Bluegill', scientific: 'Lepomis macrochirus', native: false, img: 'https://images.unsplash.com/photo-1559827260-dc66d52bef19?auto=format&fit=crop&q=80&w=800', lures: 'Small flies, Tiny jigs, Worms', locations: 'Southern Quebec lakes, ponds', season: 'Year-round', temp: '50°F - 80°F', weather: 'Any, best in vegetation' },
        { id: 'qc_crappie', name: 'Black Crappie', scientific: 'Pomoxis nigromaculatus', native: false, img: 'https://images.unsplash.com/photo-1559827260-dc66d52bef19?auto=format&fit=crop&q=80&w=800', lures: 'Small minnows, Jigs, Crickets', locations: 'Southern Quebec lakes', season: 'Spring & Fall', temp: '55°F - 70°F', weather: 'Low light, overcast' },
        { id: 'qc_shad', name: 'American Shad', scientific: 'Alosa sapidissima', native: true, img: 'https://images.unsplash.com/photo-1559827260-dc66d52bef19?auto=format&fit=crop&q=80&w=800', lures: 'Shad flies, Spoons, Shad darts', locations: 'St. Lawrence River estuary', season: 'Spring (May-June)', temp: '55°F - 65°F', weather: 'Running water, overcast' },
        { id: 'qc_rainbow', name: 'Rainbow Trout', scientific: 'Oncorhynchus mykiss', native: false, img: 'https://images.unsplash.com/photo-1515027985777-47d555b96e82?auto=format&fit=crop&q=80&w=800', lures: 'Spinners, Spoons, Flies', locations: 'Southern Quebec rivers, stocked lakes', season: 'Spring & Fall', temp: '55°F - 65°F', weather: 'Overcast, cool' },
        { id: 'qc_brown_trout', name: 'Brown Trout', scientific: 'Salmo trutta', native: false, img: 'https://images.unsplash.com/photo-1546182990-dffeafbe841d?auto=format&fit=crop&q=80&w=800', lures: 'Streamer flies, Spinners, Live minnows', locations: 'Laurentian rivers, Southern Quebec streams', season: 'Year-round', temp: '45°F - 65°F', weather: 'Early morning, evening' }
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
        
        const nativeTag = fish.native ? '<span class="badge badge-success text-xs">Native</span>' : '<span class="badge badge-warning text-xs">Non-Native</span>';
        
        card.innerHTML = `
            <div class="fish-image-container mb-4">
                <img src="${customPhoto || fish.img}" class="fish-image" id="img-${fish.id}" alt="${fish.name}">
                <div class="absolute top-2 right-2 flex gap-2">
                    <label class="bg-black/60 backdrop-blur-md p-2 rounded-full cursor-pointer hover:bg-black/80 transition shadow-lg">
                        <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M23 19a2 2 0 0 1-2 2H3a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h4l2-3h6l2 3h4a2 2 0 0 1 2 2z"/><circle cx="12" cy="13" r="4"/></svg>
                        <input type="file" class="hidden-input" accept="image/*" onchange="handlePhotoUpload(event, '${fish.id}')">
                    </label>
                </div>
                <div class="absolute top-2 left-2">
                    ${nativeTag}
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