# File Uploader & Viewer

This is a **React-based file uploader and previewer** that allows users to upload, view, and manage multiple files including **images, videos, and PDFs**. The project leverages **React Hooks (useState, useRef)** and **Tailwind CSS** for a seamless UI experience.

## Features
- **Multiple File Uploads** – Users can select and upload multiple files at once.
- **Preview Support** – Images, videos, and PDFs can be previewed directly in the app.
- **File Management** – Users can delete or close the preview of selected files.
- **Dynamic Object URLs** – Utilizes `URL.createObjectURL` for real-time previews.
- **Modern UI** – Built using Tailwind CSS for a clean and responsive design.

## Installation
1. Clone this repository:
   ```sh
   git clone https://github.com/your-username/your-repository.git
   ```
2. Navigate to the project directory:
   ```sh
   cd your-repository
   ```
3. Install dependencies:
   ```sh
   npm install
   ```
4. Start the development server:
   ```sh
   npm start
   ```

## Usage
- Click on the upload box to select files.
- Uploaded files appear in a list with **preview, close, and delete** options.
- Click on "View" to see a larger preview of the selected file.
- Click on "Close" to remove the preview.
- Click on the delete icon to remove a file from the list.

## Technologies Used
- **React** (useState, useRef for state and file references)
- **Tailwind CSS** (for responsive UI styling)
- **Lucide React Icons** (for UI elements like upload and delete icons)

## Contributing
Feel free to contribute by submitting a pull request or reporting any issues.

## License
This project is licensed under the [MIT License](LICENSE).

