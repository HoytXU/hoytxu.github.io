// Portfolio dynamic image functionality
class ProfileImageManager {
    constructor() {
        this.selfieCount = 12; // Total number of selfie images (1.jpg to 12.jpg)
        this.currentImageIndex = null;
        this.profileImage = null;
        
        this.init();
    }
    
    init() {
        // Wait for DOM to be fully loaded
        document.addEventListener('DOMContentLoaded', () => {
            this.profileImage = document.getElementById('profile-image');
            if (this.profileImage) {
                // Set initial random image
                this.setRandomImage();
                
                // Add click event listener
                this.profileImage.addEventListener('click', () => {
                    this.setNextImage();
                });
                
                // Add hover effect to indicate it's clickable
                this.profileImage.style.cursor = 'pointer';
            }
        });
    }
    
    getRandomImageIndex() {
        let newIndex;
        do {
            newIndex = Math.floor(Math.random() * this.selfieCount) + 1;
        } while (newIndex === this.currentImageIndex && this.selfieCount > 1);
        
        return newIndex;
    }
    
    setRandomImage() {
        const newIndex = this.getRandomImageIndex();
        this.currentImageIndex = newIndex;
        
        const imagePath = `images/selfies/${newIndex}.jpg`;
        
        if (this.profileImage) {
            this.profileImage.src = imagePath;
        }
    }
    
    setNextImage() {
        // Move to next image in sequence, wrap around to 1 after reaching the last image
        this.currentImageIndex = this.currentImageIndex === null ? 1 : 
            (this.currentImageIndex >= this.selfieCount ? 1 : this.currentImageIndex + 1);
        
        const imagePath = `images/selfies/${this.currentImageIndex}.jpg`;
        
        if (this.profileImage) {
            this.profileImage.src = imagePath;
        }
    }
}

// Initialize the profile image manager
new ProfileImageManager();
