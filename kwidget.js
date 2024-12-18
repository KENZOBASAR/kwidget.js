(function() {
    // Create and apply styles dynamically
    const style = document.createElement('style');
    style.innerHTML = `
        widget {
            display: none;
        }
        .widget-button {
            position: fixed;
            bottom: 10px;
            right: 10px;
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
            right: 0;
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
        }
        .modal-button {
            background-color: #007bff;
            color: white;
            border: none;
            padding: 10px;
            cursor: pointer;
            border-radius: 5px;
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
    const widgetSettingsButtonEmoji = settingsButtonEmoji;

    // Function to create widget
    function createWidget() {
        const widgetButton = document.createElement('button');
        widgetButton.classList.add('widget-button');
        widgetButton.innerHTML = 'W';
        document.body.appendChild(widgetButton);

        const modal = document.createElement('div');
        modal.classList.add('modal');
        const modalContent = document.createElement('div');
        modalContent.classList.add('modal-content');
        modalContent.innerHTML = '<p>Loading widget content...</p>';
        modal.appendChild(modalContent);

        const widgetSettingsButton = document.createElement('button');
        widgetSettingsButton.classList.add('widget-settings');
        widgetSettingsButton.innerHTML = widgetSettingsButtonEmoji; // Use the custom emoji here

        widgetButton.appendChild(widgetSettingsButton);
        document.body.appendChild(modal);

        // Handle click on the widget button
        widgetButton.addEventListener('click', () => {
            modal.style.display = 'block';
            const widgetTag = document.querySelector('widget');
            modalContent.innerHTML = widgetTag.innerHTML;
            widgetTag.style.display = 'none';
        });

        // Handle click on the settings button
        widgetSettingsButton.addEventListener('click', () => {
            const widgetTag = document.querySelector('widget');
            modal.style.display = 'block';
            const modalContent = modal.querySelector('.modal-content');
            modalContent.innerHTML = widgetTag.innerHTML;
            widgetTag.style.display = 'none';
        });

        // Close modal when clicking outside
        modal.addEventListener('click', (e) => {
            if (e.target === modal) {
                modal.style.display = 'none';
            }
        });
    }

    // Initialize the widget
    createWidget();
})();
