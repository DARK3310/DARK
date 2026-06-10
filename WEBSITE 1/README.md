# FitZone Gym Website

A modern, responsive gym website built with HTML, CSS, and JavaScript.

## Project Structure

```
d:\WEBSITE 1\
├── index.html       # Main HTML file
├── styles.css       # Styling and responsive design
├── script.js        # JavaScript functionality
└── README.md        # This file
```

## Features

✅ **Home Page** - Hero section with gym introduction
✅ **Membership Plans** - Three membership tiers (Basic, Premium, Elite)
✅ **Class Schedule** - Display of all available fitness classes
✅ **Photo Gallery** - Showcase of gym facilities
✅ **Contact Form** - Lead capture and inquiries
✅ **Responsive Design** - Works on desktop, tablet, and mobile

## Getting Started

1. Open `index.html` in your web browser
2. Navigate through the different sections using the menu
3. Customize the content (gym name, prices, classes, contact info) to match your gym

## How to Customize

### Gym Information
Edit the text in `index.html` to add your gym's:
- Name (change "FitZone Gym")
- Contact information (address, phone, email)
- Membership prices
- Class schedules
- Gym facilities

### Colors
Change the accent color (#ff6b35) in `styles.css` to your brand color:
- .logo { color: #688b96; }``
- `.cta-button { background-color: #ebebeb; }`
- And other color references

### Images
Replace placeholder images in the gallery with real gym photos:
```html
<img src="your-image.jpg" alt="Gym Equipment">
```

### Contact Form
Currently, form submissions display a success message and log to the console. To actually send emails:
1. Set up a backend service (Formspree, EmailJS, or custom server)
2. Update the form submission handler in `script.js`

## Sections

### Navigation Bar
- Sticky header with navigation links
- Responsive mobile menu

### Hero Section
- Eye-catching banner with call-to-action button
- Animated text effects

### About Section
- Brief gym introduction and value proposition

### Membership Plans
- Three pricing tiers with features
- "Featured" plan highlights the premium option
- Join buttons linked to contact form

### Class Schedule
- 6 different fitness classes
- Days and times for each class
- Instructor names

### Gallery
- 6 image placeholders for gym facilities
- Hover effects with zoom animation

### Contact Form
- Name, email, phone, plan selection
- Message textarea
- Form validation
- Success/error messages

### Footer
- Contact information
- Copyright notice

## Responsive Breakpoints

- **Desktop**: Full layout with 3-column grids
- **Tablet** (768px): 2-column grids
- **Mobile** (480px): Single-column layout

## Browser Compatibility

- Chrome/Edge (recommended)
- Firefox
- Safari
- Mobile browsers (iOS Safari, Chrome Mobile)

## Future Enhancements

- Add trainer profiles
- Booking system for classes
- Member login area
- Testimonials section
- Blog for fitness tips
- Integration with payment gateway for online signups

## Tips

1. Replace placeholder images with real gym photos for better engagement
2. Add your actual contact information
3. Update class schedules to match your gym's actual timetable
4. Customize colors to match your brand identity
5. Add testimonials and before/after transformation photos
6. Set up a proper backend to handle form submissions

---

**Ready to launch? Open `index.html` in your browser and start customizing!**
