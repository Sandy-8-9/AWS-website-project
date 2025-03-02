//JavaScript for Handling Form Submission
    document.getElementById("contactForm").addEventListener("submit", function(event) {
        event.preventDefault(); // Prevent default form submission

        // Get form data
        let formData = new FormData(this);

        // Send data via fetch()
        fetch(this.action, {
            method: this.method,
            body: formData,
        }).then(response => {
            if (response.ok) {
                document.getElementById("successMessage").style.display = "block"; // Show success message
                this.reset(); // Clear form fields
            } else {
                alert("Error: Unable to submit the form.");
            }
        }).catch(error => {
            alert("Something went wrong. Please try again.");
        });
    });