const fs = require('fs');

// Function to count lines ending with a carriage return and calculate average length
function countLinesAndCalculateAverage(fileName) {
  let lineCount = 0;
  let totalLength = 0;

  try {
    // Read the file content as a string
    const fileContent = fs.readFileSync(fileName, 'utf-8');

    // Split the file content into an array of lines using carriage return (CR) as the separator
    const lines = fileContent.split('\r');

    // Iterate through each line
    for (const line of lines) {
      // If the line is not empty (not just a CR character), increment lineCount
      if (line.trim() !== '') {
        lineCount++;
        totalLength += line.length;
      }
    }

    // Calculate the average length of lines ending with a carriage return
    const averageLength = lineCount === 0 ? 0 : totalLength / lineCount;

    return { lineCount, averageLength };
  } catch (error) {
    console.error('Error reading the file:', error);
    return { lineCount: 0, averageLength: 0 };
  }
}

// Usage example:
const fileName = 'one.txt';
const result = countLinesAndCalculateAverage(fileName);
console.log('Number of lines ending with a carriage return:', result.lineCount);
console.log('Average length of lines ending with a carriage return:', result.averageLength);
