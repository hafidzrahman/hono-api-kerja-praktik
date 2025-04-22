export default class FileHelper {
  static isValidGoogleDriveLink(link: string): boolean {
    const googleDriveRegex = /^https:\/\/drive\.google\.com\/(file\/d\/|open\?id=).+/;
    return googleDriveRegex.test(link);
  }
  
  static extractGoogleDriveFileId(link: string): string | null {
    // For links like https://drive.google.com/file/d/FILE_ID/view
    const fileMatch = link.match(/\/file\/d\/([^\/]+)/);
    if (fileMatch && fileMatch[1]) {
      return fileMatch[1];
    }
    
    // For links like https://drive.google.com/open?id=FILE_ID
    const openMatch = link.match(/open\?id=([^&]+)/);
    if (openMatch && openMatch[1]) {
      return openMatch[1];
    }
    
    return null;
  }
  
  static normalizeGoogleDriveLink(link: string): string {
    const fileId = this.extractGoogleDriveFileId(link);
    if (!fileId) {
      return link;
    }
    
    // Return a standardized direct link to the file
    return `https://drive.google.com/file/d/${fileId}/view?usp=sharing`;
  }
}