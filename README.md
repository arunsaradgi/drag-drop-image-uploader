**This project is a Drag-and-Drop Image Uploader built using HTML, CSS, and JavaScript. It allows users to upload images by either dragging and dropping them into a designated area or by browsing their local files. The uploaded images are displayed in a gallery and persist across page reloads using the browser's localStorage.**

**Key Features:**
Drag-and-Drop Upload:

Users can drag and drop an image file into the drop area to upload it.
The drop area is styled with CSS to provide visual feedback when hovered or active.
Browse and Upload:

Users can also click a "browse" link to open a file picker and select an image for upload.
Image Upload to Cloudinary:

Images are uploaded to Cloudinary using their API.
The project uses a Cloudinary account with a specific CLOUD_NAME and UPLOAD_PRESET.
Image Gallery:

Uploaded images are displayed in a responsive gallery.
The gallery layout adjusts for different screen sizes using CSS Grid and media queries.
Persistent Storage:

Uploaded image URLs are stored in localStorage.
On page load, the gallery is populated with images from localStorage.
File Overview:
index.html:

Contains the structure of the webpage, including the drop area, file input, and gallery.
styles.css:

Provides styling for the drop area, gallery, and other elements.
Includes responsive design for smaller screens.
script.js:

Implements the drag-and-drop functionality, file upload logic, and gallery rendering.
Handles interactions with Cloudinary and localStorage.
.vscode/settings.json:

Configures the Live Server to run on port 5501 for local development.
How It Works:
Uploading an Image:

When a file is dropped or selected, the handleUpload function is triggered.
The file is validated to ensure it is an image.
The image is uploaded to Cloudinary using a POST request with FormData.
Displaying Images:

After a successful upload, the image URL is added to localStorage and displayed in the gallery.

On page load, the DOMContentLoaded event retrieves stored images from localStorage and displays them.
Styling:

The drop area and gallery are styled for a clean and modern look.
Hover effects and transitions enhance the user experience.
This project is ideal for learning about drag-and-drop APIs, working with external APIs (Cloudinary), and managing persistent data in the browser.


SCREENSHOTS

![image](https://github.com/user-attachments/assets/e7dac6e5-009b-4de7-b0c7-d8c751486c5d)


_**Steps to Run the Project**_

Clone or Download the Project:

Copy the project files to your local machine.
Install a Live Server Extension:

If you're using Visual Studio Code, install the Live Server extension from the Extensions Marketplace.
Run the Project:

Open the project folder in Visual Studio Code.
Right-click on index.html and select "Open with Live Server".
The project will open in your default browser, and you can interact with the drag-and-drop image uploader.

_**Cloudinary Setup Steps**_
Create a Cloudinary Account:

Go to Cloudinary's website and sign up for a free account.
Get Your Cloud Name:

After signing up, go to the Dashboard.
Copy your Cloud Name from the account details.
Create an Upload Preset:

Navigate to the Settings in your Cloudinary dashboard.
Go to the Upload tab.
Scroll down to the Upload Presets section.
Click Add Upload Preset and:
Set the preset name (e.g., unsigned_upload).
Ensure the preset is unsigned.
Save the preset.
Update the Code:

Replace the CLOUD_NAME and UPLOAD_PRESET constants in script.js with your Cloudinary details:
Test the Setup:

Drag and drop an image or use the file picker to upload an image.
The image should upload to Cloudinary and display in the gallery.
