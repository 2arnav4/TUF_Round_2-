# TUF Round 2 - Dashboard UI

A responsive React + Vite dashboard application featuring multiple interactive cards with a modern, gradient-based design system.

## 📋 Project Overview

This is the TUF (The Unreal Fest) Round 2 project - a comprehensive dashboard UI with:
- **ReportsCard** - Blue card displaying company reports and activation metrics
- **MilestonesCard** - Pink card showing customer milestones and alerts
- **EnrichmentCard** - Yellow card for automatic customer enrichment with AI
- **CRMCard** - Green card for CRM integration and data synchronization

### 🎯 Design Features
- **Responsive Layout** - Works seamlessly on desktop, tablet, and mobile devices
- **Gradient Backgrounds** - Color-coded cards with beautiful gradient fills
- **Modern UI Components** - Clean, structured data presentation with InfoGrid, ProgressBar, and StatRow elements
- **Flexible Grid System** - Auto-responsive grid that adapts to screen size

## 🛠 Tech Stack

- **React 18** - UI library
- **Vite** - Build tool & dev server with HMR
- **CSS Modules** - Scoped styling with media queries
- **JavaScript (ES6+)** - Modern JavaScript features

## 📱 Responsive Breakpoints

The application is optimized for three main breakpoints:
- **Desktop**: > 960px
- **Tablet**: 640px - 960px  
- **Mobile**: < 640px

Each component includes custom media queries for optimal display at all screen sizes.

## 🗂 Project Structure

```
Tuf-Round2-Task/
├── src/
│   ├── Components/
│   │   ├── BaseCard/              # Base card wrapper component
│   │   ├── ReportsCard/           # Reports & analytics card
│   │   ├── MilestonesCard/        # Milestones & alerts card
│   │   ├── EnrichmentCard/        # AI enrichment card
│   │   ├── CRMCard/               # CRM integration card
│   │   └── Elements/              # Reusable UI elements
│   │       ├── InfoGridItem/      # Info grid cells
│   │       ├── ProgressBar/       # Progress indicators
│   │       ├── StatRow/           # Stat rows
│   │       ├── TableRow/          # Table rows
│   │       └── Tag/               # Tag components
│   ├── App.jsx                    # Main app component
│   ├── App.css                    # Global styles & media queries
│   ├── main.jsx                   # Entry point
│   └── index.css                  # Global styles
├── package.json                   # Dependencies & scripts
├── vite.config.js                 # Vite configuration
└── README.md                      # This file
```

## 🚀 Getting Started

### Prerequisites
- Node.js (v14 or higher)
- npm or yarn

### Installation

```bash
# Clone the repository
git clone <repository-url>

# Navigate to project directory
cd Tuf-Round2-Task

# Install dependencies
npm install
```

### Development

```bash
# Start the development server with HMR
npm run dev
```

The app will be available at `http://localhost:5173`

### Build for Production

```bash
# Create optimized build
npm run build

# Preview production build
npm run preview
```

## 📐 Key CSS Features

### Flexbox & Grid Layouts
- **Flexible Grid**: 2-column layout on desktop, 1-column on mobile
- **Flex Stack**: Vertically stacked cards with auto height distribution
- **Responsive Gap**: Adjustable spacing based on breakpoints

### Color Scheme
- **Blue Card (ReportsCard)**: `linear-gradient(135deg, #d6f0ea 0%, #b9e4ee 100%)`
- **Pink Card (MilestonesCard)**: `linear-gradient(135deg, #f4d5e6 0%, #e9c3e0 100%)`
- **Yellow Card (EnrichmentCard)**: `linear-gradient(135deg, #fbe3cf 0%, #fcd5b6 100%)`
- **Green Card (CRMCard)**: `linear-gradient(135deg, #d7ebd3 0%, #c5e4c0 100%)`

### Typography
- **Headings**: 20-24px, bold (700), dark color with letter-spacing
- **Subtext**: 12-14px, medium weight, lighter color
- **Labels**: 11-13px, varies by context

## 🎨 Component Details

### ReportsCard
- Displays company information and metrics
- Shows activation progress with multi-color progress bars
- Mini card layout with company logo and statistics
- Responsive: Stacks vertically on tablets, fully responsive on mobile

### MilestonesCard
- Shows customer milestones and alert notifications
- Displays customer profile information in a grid layout
- White alert panel with shadow on pink gradient background
- Height: 100% to fill available space

### EnrichmentCard
- Automatic customer enrichment powered by AI
- 2-column details grid (responsive to 1-column on mobile)
- Badge icon in top-right corner
- Fully rounded white panel at the bottom

### CRMCard
- CRM integration status and information
- Company data table with seat counts
- Status indicators with tags
- White card with proper border-radius and alignment

## 📱 Mobile Responsiveness Features

### Breakpoint: 960px (Tablet)
- Grid converts from 2-column to 1-column
- Layout elements stack vertically
- Spacing remains consistent

### Breakpoint: 640px (Mobile)
- Reduced font sizes (up to 20-30% reduction)
- Tighter padding and margins
- Single column layouts enforced
- Hidden elements on very small screens (e.g., timestamps)
- Adjusted badge and icon sizes
- Responsive grid cells

## 🔗 Design Reference

This project includes comprehensive design documentation and implementation details:

**[View Full Design Discussion & Implementation Guide](https://chatgpt.com/share/69e63bb3-ee44-83e8-838a-db29d719fb81)**

This ChatGPT conversation covers:
- Layout challenges and solutions
- Mobile responsiveness implementation
- Card structure and spacing optimization
- CSS breakpoint strategies
- Component hierarchy and design patterns

## 🎯 Key Implementations

### Fixed Issues
1. **Space below pink card** - Added `height: 100%` to MilestonesCard for full stretch
2. **Card tilt in blue card** - Removed tilted border-radius and negative margins from CRMCard
3. **Mobile responsiveness** - Comprehensive media queries at 640px and 960px breakpoints
4. **White card overflow** - Added proper padding-bottom to cards to prevent content cutoff
5. **Grid alignment** - Proper flex properties with `align-items: stretch` for equal height columns

## 📦 Available Scripts

- `npm run dev` - Start development server
- `npm run build` - Build for production
- `npm run preview` - Preview production build
- `npm run lint` - Run ESLint

## 🐛 Browser Support

- Chrome (latest)
- Firefox (latest)
- Safari (latest)
- Edge (latest)
- Mobile browsers (iOS Safari, Chrome Mobile)

## 📝 Notes

- CSS Modules are used to prevent style conflicts
- All components are mobile-first designed
- Media queries provide seamless scaling across all devices
- Colors use CSS variables (`--card-bg`) for easy theming

## 📝 Screenshots


## 📄 License

This project is part of The Unreal Fest Round 2 assessment.
