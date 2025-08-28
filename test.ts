type command = `${string} ${string} ${string}`;

const command1: command = "npm run dev"; // ✔
const command2: command = "npm run build"; // ✔
const command3: command = "npm start"; // x
