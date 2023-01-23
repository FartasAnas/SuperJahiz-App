export default function sortAndLimit(data) {
    // Sort the array by number in descending order, then by confidence in descending order, then by support in descending order
    data.sort((a, b) => {
      if (b.number !== a.number) {
        return b.number - a.number;
      } else if (b.confidence !== a.confidence) {
        return b.confidence - a.confidence;
      } else {
        return b.support - a.support;
      }
    });
  
    // Keep only the top 4 elements
    data = data.slice(0, 4);
  
    // Return the modified data
    return data;
  }