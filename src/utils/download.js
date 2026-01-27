/**
 * Simple utility function to download files from the public folder
 * @param {string} filePath - Path to the file in public folder (e.g., '/resume.pdf')
 * @param {string} fileName - Name for the downloaded file (e.g., 'Nabil-Nir-Resume.pdf')
 */
export const downloadFile = (filePath, fileName) => {
  try {
    // Create a temporary anchor element
    const link = document.createElement('a')
    link.href = filePath
    link.download = fileName
    link.style.display = 'none'
    
    // Append to body, click, and remove
    document.body.appendChild(link)
    link.click()
    document.body.removeChild(link)
    
    return { success: true }
  } catch (error) {
    console.error('Error downloading file:', error)
    
    // Fallback: open in new tab if download fails
    window.open(filePath, '_blank')
    return { success: false, fallback: 'opened_in_new_tab' }
  }
}

/**
 * Specific function to download resume
 */
export const downloadResume = () => {
  return downloadFile('/resume.pdf', 'Nabil-Nir-Resume.pdf')
}
