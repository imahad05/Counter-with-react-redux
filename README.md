**Project Title**: Counter App with React-Redux

**Description**: This is a simple counter application built with React and Redux that allows users to increment, decrement, reload the counter, and toggle visibility of the current value. The app also includes an input field to add or subtract a specific number from the counter.

---

### Features

- **Increment/Decrement**: Buttons to increase or decrease the counter value by 1.
- **Reload**: Button to reset the counter to its initial state.
- **Privacy Toggle**: Button to show/hide the current counter value.
- **Custom Addition/Subtraction**: Input field to enter a custom number, which can be added to or subtracted from the counter.

### Installation

1. Clone the repository:
   ```bash
   git clone <repository-url>
   ```
2. Navigate to the project folder:
   ```bash
   cd <project-folder>
   ```
3. Install dependencies:
   ```bash
   npm install
   ```
4. Run the application:
   ```bash
   npm start
   ```

### Usage

- Click **+1** or **-1** to increase or decrease the counter by 1.
- Click **Reload** to reset the counter to its initial state.
- Use the **Show/Hide Value** button to toggle visibility of the current counter value.
- Enter a number in the input field and click **Add** or **Subtract** to modify the counter by the entered value.

### Code Structure

- **Header Component**: Main functional component containing UI elements and interaction logic.
- **Redux Integration**: Utilizes `useDispatch` to dispatch actions and `useSelector` to retrieve counter and privacy state from the Redux store.

---

### Dependencies

- **React**: A JavaScript library for building user interfaces.
- **Redux**: A predictable state container for JavaScript apps.
- **React-Redux**: Official React bindings for Redux. 

