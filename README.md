# Device Information Tracker

This project is a Next.js application that displays unique device information, including a persistent device ID, IP addresses, browser details, location, and other network properties. The application generates a unique ID for each device that remains consistent across sessions, even if the user switches browsers or uses incognito mode on the same device.

## Features

- **Unique Device ID**: Uses `FingerprintJS` to generate a persistent device ID based on a fingerprint and stores it in `localStorage`, ensuring it remains consistent for the same device across sessions and browsers.
- **Network Information**: Displays network-related data, including IPv4, IPv6, internal IP, and Ethernet IP.
- **Browser Details**: Shows browser and operating system information based on the user agent.
- **Privacy Settings Detection**: Approximates whether the user is in incognito mode or using a VPN.
- **Location Tracking**: Retrieves the user's current latitude and longitude using the Geolocation API and provides a link to view the location on Google Maps.

## Technologies Used

- **Next.js**: A React framework for server-side rendering and static site generation.
- **FingerprintJS**: A library used to generate a unique fingerprint for each device.
- **Styled-JSX**: Provides scoped CSS styling for components.
- **Geolocation API**: Retrieves the user’s latitude and longitude based on their browser’s permissions.

## Project Structure

The main components of this project include:

- **`pages/api/device-id.js`**: An API route that generates or retrieves a unique ID based on the device's fingerprint.
- **`pages/api/user.js`**: An API route that retrieves network information, including IP addresses and browser details.
- **`app/page.js`**: The main page of the application, which fetches and displays device information, including location.

## Setup Instructions

### Prerequisites

- Ensure you have **Node.js** and **npm** installed on your machine.

### Installation

1. Clone the repository:

   ```bash
   git clone <repository_url>
   ```

2. Navigate into the project directory:

   ```bash
   cd device-information-tracker
   ```

3. Install dependencies:

   ```bash
   npm install
   ```

4. Run the development server:

   ```bash
   npm run dev
   ```

5. Open your browser and go to `http://localhost:3000` to view the application.

### Deployment

To deploy this project, follow the Next.js deployment documentation for your chosen platform (e.g., Vercel, Netlify, etc.).

## Explanation of Key Components

### Persistent Device ID

The application uses `FingerprintJS` to generate a unique device fingerprint, which is then sent to the `/api/device-id` API route. This route either retrieves or creates a consistent device ID. The device ID is stored in `localStorage`, ensuring it persists across sessions and different browsers on the same device.

### Network Information

The `/api/user` API route retrieves network information using Node’s `os` module. The route provides:

- **IP Address**: The primary IP address detected.
- **IPv4** and **IPv6**: Non-internal addresses if available.
- **Internal IP**: Typically `127.0.0.1` for localhost or a local network address.
- **Ethernet IP**: An Ethernet-specific IP if available.

### Browser Details

The application parses the user agent from the request headers to display browser and operating system details. It approximates privacy settings like incognito mode based on specific headers, though this may not be fully accurate.

### Location Tracking

The app retrieves the user’s latitude and longitude using the Geolocation API and displays a link to open Google Maps with the coordinates. The user must grant location permission for this feature to work.

### Rendering and Hydration

To prevent hydration errors, all client-side data fetching and `localStorage` interactions are deferred until after the initial server-side render. The application initially displays a "Loading..." message while waiting for client-specific data to load, ensuring consistent HTML between server and client.

## Sample Output

When running the application, a sample output might look like this:

```plaintext
Your ID: d4e52a051103145e7cdd8ffa9ce7469b
IP Address: ::1
IPv4: 10.0.99.130
IPv6: fe80::3a05:67df:dc13:44e3
Internal IP: 127.0.0.1
Ethernet IP: 10.0.99.130
Browser: Chrome 132.0.0 on Windows 10.0.0
Incognito Mode: No
VPN: No
Location: Latitude: -6.224544, Longitude: 106.825807
View on Google Maps
```

The "View on Google Maps" link opens Google Maps with the user's current location.

## License

This project is licensed under the MIT License.