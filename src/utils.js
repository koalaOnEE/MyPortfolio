/**
 * Helper function to generate the correct image URL for assets.
 * @param {string} fileName - The name of the image file.
 * @returns {string} - The full path to the image asset.
 */
export function getImageUrl(fileName) {
    return `${process.env.PUBLIC_URL}/assets/images/${fileName}`;
  }
  