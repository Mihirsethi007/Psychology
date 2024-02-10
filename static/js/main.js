// Function to fetch content using the Fetch API
async function fetchContent(url) {
    try {
        const response = await fetch(url);

        if (!response.ok) {
            throw new Error('Network response was not ok');
        }

        return await response.text();
    } catch (error) {
        console.error('Error fetching content:', error);
    }
}

// Function to inject content into placeholder
function injectContent(elementId, content) {
    document.getElementById(elementId).innerHTML = content;
}

// Function to fetch and inject header and footer
async function includeHeaderFooter() {
    try {
        const headerContent = await fetchContent('header.html');
        injectContent('headerPlaceholder', headerContent);

        const footerContent = await fetchContent('footer.html');
        injectContent('footerPlaceholder', footerContent);
    } catch (error) {
        console.error('Error including header and footer:', error);
    }
}

// Call the function to include header and footer
includeHeaderFooter();

// Function to fetch and inject header
async function includeHeader() {
    try {
        const headerContent = await fetchContent('header.html');
        if (headerContent) {
            injectContent('headerPlaceholder', headerContent);
        }
    } catch (error) {
        console.error('Error including header:', error);
    }
}

// Call the function to include header
includeHeader();