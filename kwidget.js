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
        }
        .modal {
            display: none;
            position: fixed;
            top: 0;
            width: 300px;
            height: 90%;
            background-color: rgba(0, 0, 0, 0.7);
            color: white;
            padding: 10px;
            overflow-y: auto;
        }
        .modal-content {
            background-color: #333;
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

    // Option to change the settings button emoji
    const settingsButtonEmoji = '⚙️'; // Default emoji

    // Function to create a widget
    function createWidget(widgetElement, index) {
        const modalColor = widgetElement.getAttribute('color') || 'rgba(0, 0, 0, 0.7)'; // Default color
        const widgetPosition = widgetElement.getAttribute('position') || 'right'; // Default position

        const widgetButton = document.createElement('button');
        widgetButton.classList.add('widget-button');
        widgetButton.innerHTML = `W${index + 1}`; // Label buttons uniquely
        document.body.appendChild(widgetButton);

        const modal = document.createElement('div');
        modal.classList.add('modal');
        modal.style.backgroundColor = modalColor; // Set modal background color
        const modalContent = document.createElement('div');
        modalContent.classList.add('modal-content');
        modalContent.innerHTML = '<p>Loading widget content...</p>';
        modal.appendChild(modalContent);

        // Add footer to modal
        const modalFooter = document.createElement('div');
        modalFooter.classList.add('modal-footer');
        modalFooter.textContent = 'Powered by kwidget';
        modal.appendChild(modalFooter);

        const widgetSettingsButton = document.createElement('button');
        widgetSettingsButton.classList.add('widget-settings');
        widgetSettingsButton.innerHTML = settingsButtonEmoji; // Use the custom emoji here

        widgetButton.appendChild(widgetSettingsButton);
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

        // Handle click on the settings button
        widgetSettingsButton.addEventListener('click', () => {
            modal.style.display = 'block';
            modalContent.innerHTML = widgetElement.innerHTML;
            widgetElement.style.display = 'none';
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
