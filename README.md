# WordSmith 🎓📘

WordSmith is an interactive web application designed to help users learn and practice English vocabulary in a fun and engaging way. The application features two main modes: **Learn** and **Play**. Users can either learn new words through random selection or by adding their own, and then test their knowledge through a playful quiz that tracks their progress with a scoring system based on response time.

## Features

### Learn Mode 📚
- **Random Word Fetching:** Get new words fetched from an external API.
- **Author Mode:** Add your own words to the learning list.
- **Glossary Management:** Save and manage translations of learned words.
- **Edit Glossary Entries:** Edit saved words and translations using a convenient pop-up modal.
- **Persistent Storage:** Glossary entries are saved in local storage to retain data across sessions.

### Play Mode 🎮
- **Interactive Quiz:** Pick words from the glossary to play a quiz game.
- **Timed Responses:** Grade and score system based on how quickly you answer.
  - **S Grade:** Answer within 5 seconds (+1000 points)
  - **A Grade:** Answer within 10 seconds (+500 points)
  - **B Grade:** Answer within 15 seconds (+300 points)
  - **C Grade:** Answer within 30 seconds (+200 points)
  - **F Grade:** Answer after 30 seconds (+100 points)
- **Pop-Up Quiz Interface:** Engaging quiz interface with a countdown timer and score display.
- **User Feedback:** Immediate feedback on correct or incorrect answers.

## Preview
![image](https://github.com/thonly-zukich/WordSmith/assets/142508205/644a6328-cd09-4377-bea0-33c2cb5d0224)
![image](https://github.com/thonly-zukich/WordSmith/assets/142508205/fa0cdadd-a020-488b-9475-4f1040c3bfaf)
![image](https://github.com/thonly-zukich/WordSmith/assets/142508205/c77a3787-b05d-4378-b597-5f3b65bfeda3)




### Prerequisites
To run this project, you need a web browser that supports JavaScript ES6 modules.

### Installation

1. **Clone the Repository**
    ```bash
    git clone https://github.com/your-username/wordsmith.git
    ```

2. **Navigate to the Project Directory**
    ```bash
    cd wordsmith
    ```

3. **Open the `learn.html` file in a Web Browser**
    You can open the HTML file directly by double-clicking it or serving it through an IDE or local server for best results.

### Project Structure

- **assets/**: Contains image assets used in the project.
  - `back.jpg`: Background image for the Learn page.
  - `play.jpg`: Background image for the Play page pop-up.
- **css/**: Contains the stylesheets for the project.
  - `learn.css`: Stylesheet for the Learn page.
  - `play.css`: Stylesheet for the Play page.
- **js/**: Contains the JavaScript files for the project.
  - **learn/**: JavaScript files for the Learn page.
    - `domElements.js`: Handles DOM elements specific to the Learn page.
    - `eventListeners.js`: Manages event listeners for the Learn page.
    - `glossary.js`: Functions to manage glossary entries.
    - `main.js`: Main logic for the Learn page.
    - `utils.js`: Utility functions for the Learn page.
  - **play/**: JavaScript files for the Play page.
    - `domElements.js`: Handles DOM elements specific to the Play page.
    - `eventListeners.js`: Manages event listeners for the Play page.
    - `game.js`: Main logic for the Play page.
    - `utils.js`: Utility functions for the Play page.
- `learn.html`: Learn page HTML structure.
- `play.html`: Play page HTML structure.

## Usage

### Learn Mode
1. **Choose Mode:** Select either Random or Author mode.
2. **Random Mode:** Click "Next Word" to fetch a new random word. Type the word in the input field and click "Check" to validate.
3. **Author Mode:** Type your own word and click "Add".
4. **Save Words:** After learning words, add translations and save them to the glossary.
5. **Manage Glossary:** Edit or remove entries as needed.

### Play Mode
1. **Select Words:** Pick words from the glossary to play with.
2. **Start Quiz:** Click "Launch" to start the quiz.
3. **Answer Questions:** Type the correct English word for the given translation within the time limit to score points.
4. **View Results:** See your total score and grade after completing the quiz.

## Contributing

We welcome contributions! Please fork this repository and submit pull requests with improvements or bug fixes. Make sure to follow the coding style and include clear commit messages.
