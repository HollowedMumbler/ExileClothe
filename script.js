// Modal functionality
const modal = document.getElementById('itemModal');
const closeBtn = document.querySelector('.close-modal');
const itemCards = document.querySelectorAll('.item-card');

// Item data - you can customize this for each product
const itemData = {
    0: {
        name: 'Vintage Denim Jacket',
        price: '₱850',
        condition: 'Excellent condition',
        description: 'Classic vintage denim jacket with minimal wear. Perfect for layering. Fits true to size.',
        size: 'Medium',
        brand: 'Levi\'s',
        images: ['path/to/image1.jpg', 'path/to/image2.jpg'] // Add your image paths
    },
    1: {
        name: 'Oversized Band Tee',
        price: '₱450',
        condition: 'Good condition',
        description: 'Authentic vintage band tee with cool graphics. Oversized fit, soft fabric.',
        size: 'Large',
        brand: 'Vintage',
        images: ['path/to/image1.jpg']
    },
    2: {
        name: 'Leather Messenger Bag',
        price: '₱1,200',
        condition: 'Vintage, minor wear',
        description: 'Genuine leather messenger bag with character. Shows age beautifully with patina.',
        size: 'One Size',
        brand: 'Unknown',
        images: ['path/to/image1.jpg']
    },
    3: {
        name: 'Corduroy Pants',
        price: '₱600',
        condition: 'Like new',
        description: 'Barely worn corduroy pants in excellent condition. Comfortable fit.',
        size: '32',
        brand: 'Uniqlo',
        images: ['path/to/image1.jpg']
    }
};

// Open modal when clicking item card
itemCards.forEach((card, index) => {
    card.addEventListener('click', () => {
        const item = itemData[index];
        
        // Update modal content
        document.getElementById('modalItemName').textContent = item.name;
        document.getElementById('modalItemPrice').textContent = item.price;
        document.getElementById('modalItemCondition').textContent = item.condition;
        document.getElementById('modalItemDescription').textContent = item.description;
        document.getElementById('modalItemSize').textContent = item.size;
        document.getElementById('modalItemBrand').textContent = item.brand;
        
        // Show modal
        modal.style.display = 'flex';
        document.body.style.overflow = 'hidden'; // Prevent scrolling when modal is open
    });
});

// Close modal when clicking X button
closeBtn.addEventListener('click', () => {
    modal.style.display = 'none';
    document.body.style.overflow = 'auto';
});

// Close modal when clicking outside of it
modal.addEventListener('click', (e) => {
    if (e.target === modal) {
        modal.style.display = 'none';
        document.body.style.overflow = 'auto';
    }
});

// Close modal with Escape key
document.addEventListener('keydown', (e) => {
    if (e.key === 'Escape' && modal.style.display === 'flex') {
        modal.style.display = 'none';
        document.body.style.overflow = 'auto';
    }
});