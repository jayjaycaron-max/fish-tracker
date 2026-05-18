# Fish Tracker & Weather Dashboard

A complete web application suite featuring an AquaTrack fish species tracker and a WeatherPulse weather dashboard.

## 🎣 AquaTrack - Fish Tracker

A beautiful web app for tracking native fish species in Connecticut (New England) and Québec (Canada).

### Features

🎣 **Species Tracking**
- Track 5 species in Connecticut and 5 species in Québec
- Mark species as caught with a single click
- Visual progress tracking with percentage completion

📸 **Custom Photos**
- Upload your own photos of caught fish
- Replace default images with your catches
- Photos are saved locally in your browser

📊 **Detailed Fishing Data**
- Best lures for each species
- Prime fishing locations
- Optimal seasons and water temperatures
- Weather tips for better catches

🎨 **Beautiful Design**
- Dark forest-themed aesthetic
- Glass morphism effects
- Smooth animations and transitions
- Fully responsive (mobile, tablet, desktop)

💾 **Local Storage**
- Your progress is automatically saved
- Your photos are stored in browser storage
- No account required

### Fish Species

#### Connecticut
- **Largemouth Bass** (*Micropterus salmoides*)
- **Brook Trout** (*Salvelinus fontinalis*)
- **Northern Pike** (*Esox lucius*)
- **Walleye** (*Sander vitreus*)
- **Chain Pickerel** (*Esox niger*)

#### Québec
- **Atlantic Salmon (Ouananiche)** (*Salmo salar*)
- **Lake Trout (Touladi)** (*Salvelinus namaycush*)
- **Muskellunge** (*Esox masquinongy*)
- **Walleye (Doré Jaune)** (*Sander vitreus*)
- **Arctic Char** (*Salvelinus alpinus*)

### How to Use AquaTrack

1. **Select Region**: Choose between Connecticut or Québec using the button in the header
2. **View Species**: Browse the fish cards with detailed information
3. **Mark as Caught**: Click the checkmark button on any card to mark it caught
4. **Upload Photo**: Click the camera icon to upload your own photo of a caught fish
5. **View Details**: Click "VIEW FISHING DATA" to see tips and techniques for each species
6. **Track Progress**: Watch your completion percentage increase as you catch more species

---

## 🌤️ WeatherPulse - Weather Dashboard

A real-time weather dashboard that fetches live data from OpenWeatherMap API with a modern, intuitive interface.

### Features

🌡️ **Current Weather**
- Real-time temperature and "feels like" readings
- Weather condition with descriptive icons
- Automatic location updates every hour

📊 **Comprehensive Weather Data**
- Humidity with visual progress bar
- Wind speed and direction
- Atmospheric pressure
- UV Index
- Visibility
- Dew point
- Cloud cover percentage
- Last update timestamp

📅 **Forecast Information**
- 7-day weather forecast with daily highs/lows
- 24-hour hourly breakdown
- Weather condition icons and descriptions

🔍 **City Search**
- Search any city worldwide
- Instant weather data retrieval
- Error handling for invalid cities

🎨 **Modern Design**
- Dark theme with cyan accents
- Glass morphism UI elements
- Animated weather icons
- Smooth transitions and hover effects
- Fully responsive layout

📱 **Mobile Optimized**
- Touch-friendly interface
- Optimized for all screen sizes
- Fast loading and performance

### Key Metrics Displayed

| Metric | Details |
|--------|---------|
| **Temperature** | Current temp with color coding (hot/warm/cool/cold) |
| **Humidity** | Percentage with visual bar indicator |
| **Wind** | Speed in km/h with compass direction |
| **Pressure** | hPa with status (High/Normal/Low) |
| **UV Index** | 0-11+ scale with risk assessment |
| **Visibility** | Distance in kilometers |
| **Dew Point** | Calculated moisture level |
| **Cloud Cover** | Percentage of sky coverage |

### How to Use WeatherPulse

1. **View Default Weather**: Page loads with New York weather by default
2. **Search City**: Type a city name and press Enter or click Search
3. **View Details**: Current weather card shows main metrics
4. **Check Forecast**: Scroll to see 7-day and hourly forecasts
5. **Monitor Conditions**: Real-time updates and status indicators

### Weather API Integration

- **Provider**: OpenWeatherMap (Free Tier)
- **API Key**: Included (b6fd43953d13a6ff12ac629c8afc0612)
- **Data Points**:
  - Current weather conditions
  - 5-day forecast (3-hour intervals)
  - Coordinates-based lookup
  - Metric units (°C, m/s, km)

### UV Index Levels

| Index | Risk | Recommendation |
|-------|------|-----------------|
| 0-2 | Low | No protection required |
| 3-5 | Moderate | Wear sunscreen |
| 6-7 | High | Limit sun exposure |
| 8-10 | Very High | Avoid sun |
| 11+ | Extreme | Stay indoors |

---

## 🚀 Live Websites

### AquaTrack Fish Tracker
- **GitHub Pages**: https://jayjaycaron-max.github.io/fish-tracker/
- **Repository**: https://github.com/jayjaycaron-max/fish-tracker
- **File**: `index.html`

### WeatherPulse Dashboard
- **Live**: https://jayjaycaron-max.github.io/fish-tracker/weather.html
- **File**: `weather.html`

---

## 📁 Project Structure

```
fish-tracker/
├── index.html          # AquaTrack Fish Tracker main page
├── app.js              # Fish tracker application logic
├── weather.html        # WeatherPulse dashboard
├── weather.js          # Weather API integration & logic
├── package.json        # Project metadata
├── README.md           # This file
└── .gitignore          # Git configuration
```

---

## 🛠️ Technology Stack

### Frontend
- **HTML5**: Semantic markup
- **CSS3**: Modern styling with animations
- **JavaScript (Vanilla)**: No frameworks needed
- **Tailwind CSS**: Utility-first CSS framework
- **Font Awesome**: Icon library

### APIs & Services
- **OpenWeatherMap**: Real-time weather data
- **Unsplash**: Fish and nature images
- **Google Fonts**: Typography (Inter, Oswald, Poppins)

### Storage
- **Browser LocalStorage**: Client-side data persistence
- **Base64 Encoding**: Photo storage

---

## 💻 Browser Support

Works on all modern browsers:
- Chrome/Edge 90+
- Firefox 88+
- Safari 14+
- Mobile browsers (iOS Safari, Chrome Mobile)

---

## 🎯 Local Development

### Running Locally

1. **Clone the repository**
   ```bash
   git clone https://github.com/jayjaycaron-max/fish-tracker.git
   cd fish-tracker
   ```

2. **Start a local server**
   ```bash
   # Python 3
   python3 -m http.server 8000
   
   # Or with Node.js
   npx http-server
   ```

3. **Open in browser**
   ```
   http://localhost:8000
   http://localhost:8000/weather.html
   ```

### No Build Process Required
This is a pure HTML/CSS/JavaScript project with no build step needed!

---

## 📊 Local Storage

### AquaTrack
- **fishTrackerProgress**: Tracks caught fish
- **fishTrackerPhotos**: Stores Base64-encoded photos

### Example Usage
```javascript
// Get progress
const progress = JSON.parse(localStorage.getItem('fishTrackerProgress'));
console.log(progress);

// Clear data
localStorage.clear();
```

---

## 🌐 Deployment

### GitHub Pages (Already Enabled)
1. Files automatically deployed to GitHub Pages
2. Access at: `https://jayjaycaron-max.github.io/fish-tracker/`
3. Updates automatically when files are pushed

### Alternative Deployments

**Netlify**
- Connect GitHub repo
- Auto-deploys on push
- Custom domain support

**Vercel**
- Similar to Netlify
- Excellent performance
- One-click deployment

**Any Static Host**
- No server required
- Just upload HTML, CSS, JS files
- No database needed

---

## 🔐 API Keys & Security

### Weather API
- Public free tier key included
- Rate limited to 1,000 calls/day
- No sensitive data exposed
- For production, create your own key at [OpenWeatherMap](https://openweathermap.org/api)

### Fish Photos
- Using public Unsplash API
- No API key required for basic usage

---

## ✨ Features Comparison

| Feature | Fish Tracker | Weather Dashboard |
|---------|--------------|-------------------|
| Real-time Data | ✓ (Local) | ✓ (API) |
| Offline Support | ✓ | Limited |
| Search | ✗ | ✓ |
| Photo Upload | ✓ | ✗ |
| Progress Tracking | ✓ | ✗ |
| Forecasting | ✗ | ✓ (7-day) |
| Mobile Optimized | ✓ | ✓ |
| Dark Mode | ✓ | ✓ |
| No Account Needed | ✓ | ✓ |

---

## 🐛 Troubleshooting

### Weather Not Loading
- Check internet connection
- Verify OpenWeatherMap API status
- Try a different city name
- Clear browser cache

### Fish Photos Not Saving
- Ensure browser allows LocalStorage
- Check storage quota (typically 5-10MB)
- Try clearing old data: `localStorage.clear()`

### Search Not Working
- Press Enter or click Search button
- Use valid city names (e.g., "New York" not "NYC")
- Check spelling

---

## 📝 License

Open source - feel free to modify and use freely!

---

## 🙏 Credits

- **Weather Data**: [OpenWeatherMap](https://openweathermap.org/)
- **Images**: [Unsplash](https://unsplash.com/)
- **Fonts**: [Google Fonts](https://fonts.google.com/)
- **Icons**: [Font Awesome](https://fontawesome.com/)
- **CSS Framework**: [Tailwind CSS](https://tailwindcss.com/)

---

## 📞 Support

For issues or questions:
1. Check the troubleshooting section
2. Review the code comments
3. Open an issue on GitHub
4. Check API documentation links

---

## 🎉 Enjoy!

Happy fishing and weather tracking! 🎣🌤️

Last updated: May 18, 2026
