// kwidget
// An api from KCR to make a widget with customizablity.
(function () {
    // Create and apply styles dynamically
    const style = document.createElement('style');
    style.innerHTML = `
        widget {
            display: none;
        }
        .widget-button {
            position: fixed;
            bottom: 10px;
            background-color: #007bff;
            color: white;
            border: none;
            padding: 10px;
            border-radius: 50%;
            font-size: 20px;
            cursor: pointer;
            display: flex;
            align-items: center;
            justify-content: center;
        }
        .modal {
            display: none;
            position: fixed;
            top: 0;
            width: 300px; /* Default width */
            height: 90%;
            color: white;
            padding: 10px;
            overflow-y: auto;
        }
        .modal-content {
            background-color: #333; /* Default content color */
            padding: 20px;
            border-radius: 5px;
            margin-bottom: 40px; /* Leave space for the footer */
        }
        .modal-footer {
            position: absolute;
            bottom: 10px;
            width: 100%;
            text-align: center;
            font-size: 12px;
            color: white;
            pointer-events: none; /* Ensure it doesn’t interfere with clicks */
        }
        .modal-close {
            position: absolute;
            top: 10px;
            right: 10px;
            background-color: #ff5f5f;
            border: none;
            color: white;
            border-radius: 50%;
            width: 30px;
            height: 30px;
            cursor: pointer;
            display: flex;
            align-items: center;
            justify-content: center;
            font-size: 18px;
        }
        .widget-settings {
            position: absolute;
            top: 5px;
            right: 5px;
            background-color: #007bff;
            border: none;
            padding: 5px;
            border-radius: 50%;
            font-size: 18px;
            cursor: pointer;
        }
    `;
    document.head.appendChild(style);

    // Function to create a widget
    function createWidget(widgetElement, index) {
        const modalColor = widgetElement.getAttribute('color') || 'rgba(0, 0, 0, 0.7)'; // Default color
        const gradient = widgetElement.getAttribute('gradient'); // Gradient attribute
        const widgetPosition = widgetElement.getAttribute('position') || 'right'; // Default position (set to right)
        const widgetIcon = widgetElement.getAttribute('icon') || '⚙️'; // Default icon
        const buttonColor = widgetElement.getAttribute('buttoncolor') || '#007bff'; // Default button color
        const buttonGradient = widgetElement.getAttribute('buttongradient'); // Gradient for the button
        const widthPercentage = widgetElement.getAttribute('width') || '300px'; // Default width (300px if not specified)

        // Content-specific attributes
        const contentColor = widgetElement.getAttribute('contentcolor'); // Content color
        const contentGradient = widgetElement.getAttribute('contentgradient'); // Content gradient

        const widgetButton = document.createElement('button');
        widgetButton.classList.add('widget-button');
        widgetButton.innerHTML = widgetIcon; // Display the emoji/icon

        // Apply button gradient or fallback to single color
        if (buttonGradient) {
            widgetButton.style.background = `linear-gradient(to bottom, ${buttonGradient.split(';').join(',')})`;
        } else {
            widgetButton.style.backgroundColor = buttonColor; // Fallback to a single color
        }

        document.body.appendChild(widgetButton);

        const modal = document.createElement('div');
        modal.classList.add('modal');
        if (gradient) {
            // Set gradient background if attribute is present
            modal.style.background = `linear-gradient(to bottom, ${gradient.split(';').join(',')})`;
        } else {
            modal.style.backgroundColor = modalColor; // Fallback to single color
        }

        // Set the width of the modal based on the width attribute
        modal.style.width = widthPercentage;

        const modalContent = document.createElement('div');
        modalContent.classList.add('modal-content');
        
        // Apply content gradient or color if provided
        if (contentGradient) {
            modalContent.style.background = `linear-gradient(to bottom, ${contentGradient.split(';').join(',')})`;
        } else if (contentColor) {
            modalContent.style.backgroundColor = contentColor; // Apply the content color if available
        }

        modalContent.innerHTML = '<p>Loading widget content...</p>';
        modal.appendChild(modalContent);

        // Add a close button to the modal
        const closeButton = document.createElement('button');
        closeButton.classList.add('modal-close');
        closeButton.innerHTML = '&times;'; // Close icon
        modal.appendChild(closeButton);

        // Add footer to modal
        const modalFooter = document.createElement('div');
        modalFooter.classList.add('modal-footer');
        modalFooter.textContent = 'Powered by kwidget';
        modal.appendChild(modalFooter);

        document.body.appendChild(modal);

        // Adjust position based on the "position" attribute
        if (widgetPosition === 'left') {
            widgetButton.style.left = '10px';
            widgetButton.style.right = 'unset';
            modal.style.left = '0';
            modal.style.right = 'unset';
        } else {
            widgetButton.style.right = '10px';
            widgetButton.style.left = 'unset';
            modal.style.right = '0';
            modal.style.left = 'unset';
        }

        // Handle click on the widget button
        widgetButton.addEventListener('click', () => {
            modal.style.display = 'block';
            modalContent.innerHTML = widgetElement.innerHTML;
            widgetElement.style.display = 'none';
        });

        // Close modal when clicking the close button
        closeButton.addEventListener('click', () => {
            modal.style.display = 'none';
        });

        // Close modal when clicking outside
        modal.addEventListener('click', (e) => {
            if (e.target === modal) {
                modal.style.display = 'none';
            }
        });
    }

    // Initialize widgets
    function initializeWidgets() {
        const widgets = document.querySelectorAll('widget');
        widgets.forEach((widgetElement, index) => {
            createWidget(widgetElement, index);
        });
    }

    // Initialize all widgets
    initializeWidgets();
})();
